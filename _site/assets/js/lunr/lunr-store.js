var store = [{
        "title": "Initial Post",
        "excerpt":"This is the first post!  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/initial-post/",
        "teaser": null
      },{
        "title": "논문 리뷰_grammatical Error Correction",
        "excerpt":"Improving Grammatical Error Correction via Pre-Training a Copy-Augmented Architecture with Unlabeled Data   pdf                                            ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%85%BC%EB%AC%B8-%EB%A6%AC%EB%B7%B0_Grammatical-Error-Correction/",
        "teaser": null
      },{
        "title": "논문 리뷰_electra",
        "excerpt":"ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators  (openreview link)   첫 글은 연구실 논문리딩그룹에서 내가 발표했던 슬라이드를 활용하기로 하였다. 시간이 있을 때 설명을 더 추가할 예정!                    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%85%BC%EB%AC%B8-%EB%A6%AC%EB%B7%B0_electra/",
        "teaser": null
      },{
        "title": "논문 리뷰_reformer",
        "excerpt":"Reformer: the efficient Transformer  pdf   처음에 이 논문이 나왔을떄는 정말 놀랐다. locality-sensitive hashing을 이용해서 원래 sequence length의 제곱에 비례하는 attention 과정의 time complexity를 linear하게 단축시킬 수 있다니! 후속 연구가 활발히 이루어져서 더 발전되었으면 좋겠다.                                 ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%85%BC%EB%AC%B8-%EB%A6%AC%EB%B7%B0_reformer/",
        "teaser": null
      },{
        "title": "Docker 컨테이너 Commit하고 Push하기",
        "excerpt":"NSML 을 인턴 기간 중 사용하게 되면서 docker image를 띄우고, 컨테이너에 넣어서 수정하고, 다시 push해야하는 일이 생겼다. 나중에 까먹지 않도록, 각자 과정에 대해서 간단하게 기록해보려고 한다. 기본적으로 docker run을 하게 되면 해당 container안에 있는 process가 다 돌아가게 되면 container는 exit하게 되고, 그 후에 다시 그 container를 run시킨다면 그 전에 작업했던...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docker-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-commit%ED%95%98%EA%B3%A0-push%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "논문 리뷰_pie",
        "excerpt":"Parallel Iterative Edit Models for Local Sequence Transduction   pdf                                                  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%85%BC%EB%AC%B8-%EB%A6%AC%EB%B7%B0_PIE/",
        "teaser": null
      },{
        "title": "논문 리뷰_unilm",
        "excerpt":"Unified Language Model Pre-training for Natural Language Understanding and Generation  pdf                                ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%85%BC%EB%AC%B8-%EB%A6%AC%EB%B7%B0_unilm/",
        "teaser": null
      },{
        "title": "Mixup 기반 메소드들",
        "excerpt":"이번에 연구 주제와 관련되어서 mixup 기반의 논문들을 읽어보고 공부하게 되었다. 여기서 중요하다고 느꼈던 점과 읽었던 부분들을 정리해보려고 한다. 시간이 지나면 다시 까먹을 것 같아서, 미리미리 정리해두는게 좋을것 같다. (정리한 부분은 순전히 내가 읽고 받아들인 대로 적은 것이기 떄문에, 틀린 부분이 있을 수 있고, 잘못된 부분이 있다면 댓글로 알려주시면 정말 감사하겠습니다..ㅎㅎ)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Mixup-%EA%B8%B0%EB%B0%98-%EB%A9%94%EC%86%8C%EB%93%9C%EB%93%A4/",
        "teaser": null
      },{
        "title": "Pytorch Model 일부 Layer만 Freeze 하기",
        "excerpt":"task-specific한 Model training을 할 때, 기존의 pretrained model weight를 가져와서 하는 경우가 많이 있다. 여러 논문들에서도 BERT와 같이 pretrained된 대형 모델에서, layer 몇 개만 추가해주면 어떤 NLP task던 from scratch에서부터 training하는 것보다 좋은 성능을 낸다는 것을 입증하고 있다. 지금 나는 classification model을 만들고 있는데, 역시 마찬가지로 huggingface에서 공개한 pretrained model을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Pytorch-model-%EC%9D%BC%EB%B6%80-layer%EB%A7%8C-freeze-%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Model의 State_dict 일부분만 Load하기",
        "excerpt":"정말 오랜만에 글을 쓰는것같다. 8월부터 11월까지 너무 바빴어서, github blog posting이 소홀해졌던 것 같다. 오늘은 pretrained pytorch model을 loading해오려고 했는데, pytorch version과 여러 환경세팅이 맞지 않아서 모델의 state_dict에 있는 key가 matching이 되지 않아 모델의 pretrained weight가 불려오지 않는 문제가 있었다. 아래는 모델을 로딩해오는 예시이다. import torch.nn as nn import torch...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Model%EC%9D%98-state_dict-%EC%9D%BC%EB%B6%80%EB%B6%84%EB%A7%8C-load%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Nlp References",
        "excerpt":"시간이 난다면 들어볼만한, 혹은 읽어볼만한 유익한 NLP reference들 정리.      Soundcloud NLP highlights   NLP seminar   NIPS workshop on interpreting predictions   EMNLP workshop on interpreting predictions   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/NLP-references/",
        "teaser": null
      },{
        "title": "Semantic Parsing References",
        "excerpt":"Semantic Parsing References: Spider explanation: https://medium.com/@tao.yu/spider-one-more-step-towards-natural-language-interfaces-to-databases-62298dc6df3c, https://arxiv.org/pdf/1809.08887.pdf Spider recent/official: https://arxiv.org/pdf/2012.12627.pdf https://arxiv.org/pdf/2012.10309v1.pdf WikiTableQuestions 1st: https://arxiv.org/pdf/2005.08314v1.pdf WikiSQL: https://arxiv.org/pdf/1910.07179v5.pdf SQLova: https://arxiv.org/pdf/1902.01069.pdf evaluation: https://arxiv.org/pdf/2010.02840.pdf  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Semantic-Parsing-references/",
        "teaser": null
      },{
        "title": "Linux 꿀팁들 모음",
        "excerpt":"ㅎ.. 언젠가부터 내 블로그가 잊어먹지 않도록 글을 끄적하는 장소로 바뀌어버린 것 같다. 논문만 된다면… 그 때 정말 제대로 된 informative한 글을 남기겠다…ㅠㅠ nvidia-smi를 실시간으로 볼 수 있는 command watch -n0.1 nvidia-smi Recursively list all subdirectories inside list ls -LR check disk size and path lsblk Github crediential 저장 git config...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Linux-%EA%BF%80%ED%8C%81%EB%93%A4-%EB%AA%A8%EC%9D%8C/",
        "teaser": null
      },{
        "title": "Naacl 2021 Paper Review About Semantic Parsing",
        "excerpt":"This page is a draft page, to take notes on recent text-to-SQL methods that is accepted in NAACL 2021. The related papers are listed in random order. [1] DuoRAT: Towards Simpler Text-to-SQL Models [2] Structure-Grounded Pretraining for Text-to-SQL [3] ShadowGNN: Graph Projection Neural Network for Text-to-SQL Parser [4] Meta-Learning for...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/NAACL-2021-paper-review-about-semantic-parsing/",
        "teaser": null
      }]
