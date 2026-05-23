# 04. Pitfalls + sanity diagnostics

## D1. General pitfall taxonomy

- **Source:** **Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained** — Kohavi et al. (KDD 2012). [Stanford-hosted PDF (cached)](https://ai.stanford.edu/~ronnyk/puzzlingOutcomesInControlledExperiments.pdf) · bibkey `kohavi2012puzzling` · `ev_experimentation_foundations_0006`
  - **Mechanism:** Anecdote-driven taxonomy of five puzzling A/B test outcomes encountered at Microsoft ExP. Each outcome traces to a generalizable pitfall.
  - **Result:** Introduces Twyman's law to OCE pedagogy ("any figure that looks interesting or different is usually wrong"). Covers primacy + novelty effects, multi-comparison hazards, SRM precursors. Foundational citation for trustworthy-experimentation discourse.
  - **Status:** `unverified` pending audit. KDD 2012 peer-reviewed; cache `extraction_status: raw_only` (PDF).

## D2. Sample ratio mismatch (SRM)

- **Source:** **Diagnosing Sample Ratio Mismatch in Online Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners** — Fabijan, Gupchup, Gupta, Omhover, Qin, Vermeer & Dmitriev (KDD 2019). [10.1145/3292500.3330722](https://doi.org/10.1145/3292500.3330722) · [KDD accepted-papers page (cached)](https://www.kdd.org/kdd2019/accepted-papers/view/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonom) · bibkey `fabijan2019diagnosing` · `ev_experimentation_foundations_0009`
  - **Mechanism:** SRM taxonomy derived from 4 companies (Microsoft, Booking.com, Outreach.io, others) and 25+ products, hundreds of millions of users. Chi-squared test on observed-vs-designed assignment ratio.
  - **Result:** Provides root-cause taxonomy + rules of thumb for SRM detection at p<0.01 threshold. Microsoft now requires SRM check before any experiment effects are analyzed.
  - **Status:** `unverified` pending audit. KDD 2019 peer-reviewed; cached from KDD accepted-papers metadata page (full PDF on ACM DL paywalled).

## D3. Novelty + primacy effects

- **Source:** **Novelty and Primacy: A Long-Term Estimator for Online Experiments** — Sadeghi, Gupta, Gramatovici, Lu, Ai & Zhang (arXiv preprint 2021-02-18). [arXiv:2102.12893](https://arxiv.org/abs/2102.12893) · bibkey `sadeghi2021novelty` · `ev_experimentation_foundations_0010`
  - **Mechanism:** Microsoft-developed observational estimator for user-learning effects. Uses difference-in-differences (DiD) technique to separate novelty/primacy from persistent treatment effect.
  - **Result:** Estimates user-learning at scale without requiring extended experiment duration. Compared to existing experimental method, claims higher statistical power and ease of use. Limitations discussed where other treatment-time interactions are present.
  - **Status:** `unverified` pending audit. arXiv preprint (verify peer-reviewed status during audit).

3 entries.
