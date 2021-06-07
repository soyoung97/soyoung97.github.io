This page is a draft page, to take notes on recent text-to-SQL methods that is accepted in NAACL 2021.

The related papers are listed in random order.

[1] [DuoRAT: Towards Simpler Text-to-SQL Models](https://www.aclweb.org/anthology/2021.naacl-main.103.pdf)

[2] [Structure-Grounded Pretraining for Text-to-SQL](https://www.aclweb.org/anthology/2021.naacl-main.105.pdf)

[3] [ShadowGNN: Graph Projection Neural Network for Text-to-SQL Parser](https://www.aclweb.org/anthology/2021.naacl-main.441.pdf)

[4] [Meta-Learning for Domain Generalization in Semantic Parsing](https://www.aclweb.org/anthology/2021.naacl-main.33.pdf)

[5] [Learning from Executions for Semantic Parsing](https://arxiv.org/pdf/2104.05819.pdf)

[6] [Learning to Synthesize Data for Semantic Parsing](https://arxiv.org/pdf/2104.05827.pdf)

It seems like most of the SOTA semantic parsing papers are from one person: [Bailin Wang](https://berlino.github.io/). He is the author of RAT-SQL and [4], [5], and [6].

### [4]

Intuition: _Gradient Steps_ that improve source-domain performance should also improve target-domain performance

* DG-MAML (Domain Generalization with Model-Agnostic Meta-Learning)
  * a training algorithm that helps a parser acheive better domain generalization
  * training domain and test(eval) domain are different.
  * Meta-Train
    * SGD of loss from virtual source domain
  * Meta-Test
    * compute loss from virtual target domain
    * minimize the **joint** loss on both source and target domain -> require the gradient step beneficial to target domain
    * Can be viewed as regularization of gradient updates in additional to objective of conventional supervised learning
* Applying DG-MAML on RAT-SQL
  * evaluate on two zero-shot text-to-SQL - English/Chinese spider
  * achieves near SOTA on Spider, and SOTA on Chinese spider

Questions to ask TBU
More notes TBU

