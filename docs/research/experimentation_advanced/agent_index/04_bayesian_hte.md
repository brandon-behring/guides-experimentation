# 04. Bayesian A/B testing + HTE bridge

## D1. Bayesian A/B testing with informed priors

- **Source:** **Informed Bayesian Inference for the A/B Test** — Gronau et al. (arXiv 1905.02068, 2019). [arXiv:1905.02068](https://arxiv.org/abs/1905.02068) · bibkey `gronau2019informed` · `ev_experimentation_advanced_0008`
  - **Mechanism:** Bayesian inference framework for A/B testing with explicit prior + posterior probability formulation. Discusses prior elicitation for A/B contexts.
  - **Result:** Provides a coherent Bayesian framework leveraging informed priors; relates Bayes factor decisions to common A/B-test stopping rules. Methodologically distinct from frequentist sequential.
  - **Status:** `verified` via arxiv metadata.

## D2. Heterogeneous treatment effects (bridge to causal-inference dossier)

- **Source:** **Generalized Random Forests** — Athey, Tibshirani & Wager (Annals of Statistics 47(2), 2019). [arXiv:1610.01271](https://arxiv.org/abs/1610.01271) · [10.1214/18-AOS1709](https://doi.org/10.1214/18-AOS1709) · bibkey `athey2019generalized` · `ev_experimentation_advanced_0006`
  - **Mechanism:** Generalized random forests framework with causal forests as a specific HTE-estimation application. Adaptive weighting based on forest-derived heterogeneity.
  - **Result:** Establishes causal forests as a principled HTE estimator. Open-source implementation in [grf R package](https://github.com/grf-labs/grf). Bridges A/B testing to broader causal-inference machinery; sub-area mostly deferred to a future `causal_inference_methods` dossier.
  - **Status:** `verified` via arxiv metadata.

2 entries.
