# 02. Network interference + switchback designs

## B1. Network interference: correction methods + frameworks

- **Source:** **Design and Analysis of Experiments in Networks: Reducing Bias from Interference** — Eckles, Karrer & Ugander (Journal of Causal Inference 5(1), 2017). [arXiv:1404.7530](https://arxiv.org/abs/1404.7530) · [10.1515/jci-2015-0021](https://doi.org/10.1515/jci-2015-0021) · bibkey `eckles2017design` · `ev_experimentation_advanced_0003`
  - **Mechanism:** Evaluates methods for designing + analyzing randomized experiments in networks where one unit's outcome depends on others' treatment (interference). Combines design (cluster + ego-network) with analysis (exposure-mapping models).
  - **Result:** Provides empirical evaluation of bias-reduction strategies; networks experiments commonly use cluster randomization + exposure-aware analysis. Foundational citation in network-A/B literature.
  - **Status:** `verified` via arxiv metadata.

- **Source:** **Causal Inference Under Network Interference: A Framework for Experiments on Social Networks** — Kao (Harvard PhD dissertation / arXiv 1708.08522, 2017). [arXiv:1708.08522](https://arxiv.org/abs/1708.08522) · bibkey `kao2017causal` · `ev_experimentation_advanced_0010`
  - **Mechanism:** Develops a causal framework + inference methodology for experiments where interference takes place on a network of influence. Combines potential-outcomes notation with exposure-mapping operators.
  - **Result:** Establishes a notation + estimation framework for treating networks-with-interference rigorously. Foundational for academic A/B-on-networks work; less immediately operational than Eckles et al. but more general.
  - **Status:** `verified` via arxiv metadata.

## B2. Switchback designs (time-based randomization for marketplaces)

- **Source:** **Design and Analysis of Switchback Experiments** — Bojinov, Simchi-Levi & Zhao (Management Science 69(7), 2023). [arXiv:2009.00148](https://arxiv.org/abs/2009.00148) · [10.1287/mnsc.2022.4583](https://doi.org/10.1287/mnsc.2022.4583) · bibkey `bojinov2022design` · `ev_experimentation_advanced_0004`
  - **Mechanism:** Derives optimal switchback designs under varying assumptions on the order of the carryover effect. Switches treatment + control over time windows within a region.
  - **Result:** Provides design-optimization framework for ride-hailing platforms, online marketplaces, and other settings where SUTVA fails at unit-level. Cited heavily in DoorDash + Uber + Lyft applied work.
  - **Status:** `verified` via arxiv metadata.

3 entries.
