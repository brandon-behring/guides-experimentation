# 02. Methodology — variance reduction + randomization frameworks

Procedural methodologies for online controlled experiments. 4 entries.

## B1. Variance reduction (CUPED lineage)

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|---|---|---|---|---|---|---|
| Improving the sensitivity of online controlled experiments by utilizing pre-experiment data | Deng, Xu, Kohavi & Walker (2013) | WSDM 2013 | [10.1145/2433396.2433413](https://doi.org/10.1145/2433396.2433413) | — | Original CUPED paper — variance reduction via pre-experiment covariates | Mainstreamed variance reduction in online experimentation; foundational for sensitivity-improvement literature |
| From Augmentation to Decomposition: A New Look at CUPED in 2023 | Deng et al. (2023) | arXiv preprint | [arXiv:2312.02935](https://arxiv.org/abs/2312.02935) | — | CUPED 10-year retrospective + reframing as general augmentation framework | Extends CUPED to ratio + percentile metrics; introduces approximate null augmentation (ANA) for in-experiment variance reduction |
| Variance reduction combining pre-experiment and in-experiment data | Lin & Crespo (2024) | arXiv preprint | [arXiv:2410.09027](https://arxiv.org/abs/2410.09027) | — | Etsy-deployed framework combining pre+in-experiment data | Provides asymptotic theory + consistent variance estimators; empirical validation on Etsy A/B tests |

## B2. Randomization frameworks

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|---|---|---|---|---|---|---|
| Designing and Deploying Online Field Experiments | Bakshy, Eckles & Bernstein (2014) | WWW 2014 / arXiv | [arXiv:1409.3174](https://arxiv.org/abs/1409.3174) | — | PlanOut — language for specifying experimental designs separately from app code | Foundational randomization framework; deployed at Facebook; supports A/B, factorial, conditional designs |
