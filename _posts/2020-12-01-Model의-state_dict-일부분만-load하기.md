정말 오랜만에 글을 쓰는것같다.
8월부터 11월까지 너무 바빴어서, github blog posting이 소홀해졌던 것 같다.

오늘은 pretrained pytorch model을 loading해오려고 했는데, pytorch version과 여러 환경세팅이 맞지 않아서 모델의 state\_dict에 있는 key가 matching이 되지 않아 모델의 pretrained weight가 불려오지 않는 문제가 있었다.
아래는 모델을 로딩해오는 예시이다.
```
import torch.nn as nn
import torch
from transformers impoort *
...
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')
model = nn.DataParallel(model)
saved_checkpoint = torch.load(CHECKPOINT_PATH, map_location=torch.device('cpu'))
model.load_state_dict(checkpoint)
```
이 코드를 실행하면 model을 train했던 환경과 local에서 돌리는 환경이 달라서 아래와 같은 에러가 나타난다...
```
Traceback (most recent call last):
  File "train.py", line 182, in <module>
    aa = Trainer(USE_NSML)
  File "train.py", line 68, in __init__
    self.load_and_eval(path)
  File "train.py", line 178, in load_and_eval
    model.load_state_dict(checkpoint)
  File "/Users/user/Library/Python/3.8/lib/python/site-packages/torch/nn/modules/module.py", line 1051, in load_state_dict
    raise RuntimeError('Error(s) in loading state_dict for {}:\n\t{}'.format(
RuntimeError: Error(s) in loading state_dict for DataParallel:
        Missing key(s) in state_dict: "module.bert.embeddings.position_ids".
```

찾아보니, `model.load_state_dict`를 할 때 strict하게 로딩해오지 않고 가능한것만 로딩해올수있는 좀더 flexible한 option이 있었다!
바로 첫 코드 마지막줄을
```
# model.load_state_dict(checkpoint)
model.load_state_dict(checkpoint, strict=False)
```
로 바꿔주면 되는것!
물론 이렇게 하면 `_IncompatibleKeys(missing_keys=['module.bert.embeddings.position_ids'], unexpected_keys=[])` 이런 info가 print되긴 하지만...
어쨌든 embeddings.position\_ids 를 제외한 모든 key에 대한 weight를 로딩시켜올 수 있다.
이 option이 아니면 일일이 key를 순회하면서 weight를 로딩해올뻔했다...ㅠㅠ
