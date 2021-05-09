task-specific한 Model training을 할 때, 기존의 pretrained model weight를
가져와서 하는 경우가 많이 있다.
여러 논문들에서도 BERT와 같이 pretrained된 대형 모델에서, layer 몇 개만
추가해주면 어떤 NLP task던 from scratch에서부터 training하는 것보다
좋은 성능을 낸다는 것을 입증하고 있다.

지금 나는 classification model을 만들고 있는데, 역시 마찬가지로
huggingface에서 공개한 pretrained model을 사용 중이다.
```
from transformers import *
bert = BertModel.from_pretrained('bert-base-uncased')
```
이 모델 뒤에, 간단한 linear - tanh - linear layer만 추가해서
model ouptut로 classification에 쓰는 label을 내도록 하기 위해선
```
import torch
import torch.nn as nn
from transformers import *

class ClassificationModel(nn.Module):
    def __init__(self, pretrained_model='bert-base-uncased', num_labels=2):
        super(ClassificationModel, self).__init__()
        self.bert = BertModel.from_pretrained(pretrained_model)
        self.linear = nn.Sequential(nn.Linear(768, 128),
                                    nn.Tanh(),
                                    nn.Linear(128, num_labels))

    def forward(self, x):
        all_hidden, pooler = self.bert(**x)
        pooled_output = torch.mean(all_hidden, 1)
        predict = self.linear(pooled_output)
        return predict
```

요런 식으로 구현하면 된다.

그런데!!! 문제가 생겼다.

model training을 진행해 보니, 첫 번째 epoch를 돈 이후가 가장 성능이 좋았고,
그 뒤로부턴 성능이 계속계속 떨어졌다.

문제가 뭐일까? 생각하는 와중에,
기존 pretrained model의 weight를 과도하게 bias시켜서(forgetting) 그런게 아닐까? 라는 생각이 들었다.

그래서, 기존 pretrained model의 weight는 freeze시키고, 추가한 `nn.Sequential` layer의
weight만 training해보면 어떨까 라는생각이 들었다.

방법은 의외로 간단했다.
일단 위의 코드를 선언한 다음
```
>>> model = ClassificationModel()
>>> model.state_dict().keys()
odict_keys(['bert.embeddings.word_embeddings.weight', 'bert.embeddings.position_embeddings.weight', 'bert.embeddings.token_type_embeddings.weight', 'bert.embeddings.LayerNorm.weight', 'bert.embeddings.LayerNorm.bias', 'bert.encoder.layer.0.attention.self.query.weight', 'bert.encoder.layer.0.attention.self.query.bias', 'bert.encoder.layer.0.attention.self.key.weight', 'bert.encoder.layer.0.attention.self.key.bias', 'bert.encoder.layer.0.attention.self.value.weight', 'bert.encoder.layer.0.attention.self.value.bias', 'bert.encoder.layer.0.attention.output.dense.weight',
......'bert.encoder.layer.11.output.LayerNorm.bias', 'bert.pooler.dense.weight', 'bert.pooler.dense.bias', 'linear.0.weight', 'linear.0.bias', 'linear.2.weight', 'linear.2.bias'])
```

를 해주면, 모델 안에 선언되어있는 다양한 weight들의 key값을 볼 수 있다.

여기서 우리가 바꿔주고 싶은 것은 오직 `'linear.0.weight', 'linear.0.bias', 'linear.2.weight', 'linear.2.bias'`이것들!

일단 모든 weight를 다 freeze시켜준다.
```
>>>for para in model.parameters():
...     para.requires_grad = False
```

그리고 해당 layer만 `requires_grad`를 켜주면 끝!
.....이라고 생각했지만 큰 오산이었다....왜냐..? 
`model.linear.0.weight`에서 0이 .. .숫자가 있어서, 저런 방식으로 접근이 불가능했기 때문ㅠㅠㅠㅠㅠ

만약에 이름이 `fc1` 뭐 이런거였으면
```
>>>model.fc1.weight.requires_grad = True
```
요렇게 해결해주면 되는 간단한 문제였지만,.. 불가능했기 때문에 다른 방법을 쓰기로 했다.

```
>>>for name, param in model.named_parameters():
>>>    if name in ['linear.0.weight', 'linear.2.weight']:
>>>        param.requires_grad = True
```
요렇게 해서 해결하게 되었다...
* 추가: 원래 Model training할때 (꼭) 이렇게(만은) 하지는 않는다고 한다. 그리고, 내 모델은 forgetting이 되어서 성능이 내려갔다기 보다는 training data자체가 워낙 작아서,
이미 한epoch만에 수렴을 했고, 계속 overfitting되었던게 문제였던것같다.
