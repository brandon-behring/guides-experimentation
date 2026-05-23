# 02. Methodology — variance reduction + randomization

## B1. Variance reduction (CUPED lineage)

- **Source:** **Improving the sensitivity of online controlled experiments by utilizing pre-experiment data** — Deng, Xu, Kohavi & Walker (WSDM 2013). [10.1145/2433396.2433413](https://doi.org/10.1145/2433396.2433413) · [author-hosted PDF (cached)](https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf) · bibkey `deng2013cuped` · `ev_experimentation_foundations_0002`
  - **Mechanism:** Introduces CUPED (Controlled-experiment Using Pre-Experiment Data) — a variance-reduction estimator that subtracts a pre-experiment covariate's deviation from baseline, leveraging the covariate's correlation with the metric.
  - **Result:** Substantial variance reduction (paper reports specific numbers, not memorized — verify via cache for exact figures). Mainstreamed variance reduction in online experimentation; near-universal citation in subsequent OCE literature.
  - **Status:** `unverified` pending audit. Canonical methodology paper; sub-area A6 anchor.

- **Source:** **From Augmentation to Decomposition: A New Look at CUPED in 2023** — Deng et al. (arXiv preprint 2023-12-05). [arXiv:2312.02935](https://arxiv.org/abs/2312.02935) · bibkey `deng2023cuped` · `ev_experimentation_foundations_0011`
  - **Mechanism:** 10-year retrospective on CUPED by the same first author. Reframes CUPED as an augmentation framework (vs the regression-adjustment view many practitioners hold). Extends to ratio + percentile metrics. Introduces approximate null augmentation (ANA) for in-experiment variance reduction.
  - **Result:** Shows the augmentation view naturally generalizes CUPED beyond simple averages. ANA leverages in-experiment data for "significantly larger" variance reduction; studied under Bayesian + frequentist frameworks.
  - **Status:** `unverified` pending audit. Recent (`freshness_tier: active`, stale after 90 days). Critical for chapter 8 (variance reduction) of pilot guide.

- **Source:** **Variance reduction combining pre-experiment and in-experiment data** — Lin & Crespo (arXiv preprint 2024-10-11). [arXiv:2410.09027](https://arxiv.org/abs/2410.09027) · bibkey `lin2024variance` · `ev_experimentation_foundations_0012`
  - **Mechanism:** Etsy-deployed extension of CUPED/CUPAC. General framework combining pre-experiment + in-experiment data; develops asymptotic theory + consistent variance estimators.
  - **Result:** "Substantial additional variance reduction over current pipeline, even when incorporating only a few post-treatment covariates" (Etsy empirical). Highlights bias hazards of in-experiment data and how the framework mitigates them.
  - **Status:** `unverified` pending audit. Recent (`freshness_tier: active`). Industrial validation strengthens claim relevance.

## B2. Randomization frameworks

- **Source:** **Designing and Deploying Online Field Experiments** — Bakshy, Eckles & Bernstein (WWW 2014). [arXiv:1409.3174](https://arxiv.org/abs/1409.3174) · bibkey `bakshy2014designing` · `ev_experimentation_foundations_0003`
  - **Mechanism:** Introduces PlanOut — a language for specifying experimental designs (A/B, factorial, conditional, multiple experimental units) separately from application code. Facebook-developed; open-sourced.
  - **Result:** Provides reproducible experimental-design framework; demonstrated with two large-scale Facebook field experiments. Foundational citation for randomization-as-code patterns; precedes most modern experimentation-platform abstractions.
  - **Status:** `unverified` pending audit. WWW 2014 peer-reviewed; arXiv preprint cached + extracted to text.

4 entries.
