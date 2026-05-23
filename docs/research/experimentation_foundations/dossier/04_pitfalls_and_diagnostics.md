# 04. Pitfalls + sanity diagnostics

Known A/B testing failure modes + diagnostic methodology. 3 entries.

## D1. General pitfall taxonomy

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|---|---|---|---|---|---|---|
| Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained | Kohavi et al. (2012) | KDD 2012 | [Stanford PDF](https://ai.stanford.edu/~ronnyk/puzzlingOutcomesInControlledExperiments.pdf) | — | Microsoft ExP foundational pitfalls paper | Explains five puzzling A/B test outcomes including Twyman's law, primacy/novelty effects, SRM precursors |

## D2. Sample ratio mismatch (SRM)

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|---|---|---|---|---|---|---|
| Diagnosing Sample Ratio Mismatch in Online Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners | Fabijan et al. (2019) | KDD 2019 | [10.1145/3292500.3330722](https://doi.org/10.1145/3292500.3330722) | — | SRM taxonomy derived from 4 companies, 25+ products | Provides taxonomy of SRM root causes + rules of thumb for detection (chi-squared with p<0.01 threshold) |

## D3. Novelty + primacy effects

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|---|---|---|---|---|---|---|
| Novelty and Primacy: A Long-Term Estimator for Online Experiments | Sadeghi et al. (2021) | arXiv preprint | [arXiv:2102.12893](https://arxiv.org/abs/2102.12893) | — | Microsoft difference-in-differences estimator for user-learning effects | Observational DiD approach for estimating user-learning at scale; avoids extending experiment duration |
