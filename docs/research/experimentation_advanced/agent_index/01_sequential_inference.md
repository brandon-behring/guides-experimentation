# 01. Sequential testing + anytime-valid inference

## A1. Modern confidence sequences

- **Source:** **Time-uniform, nonparametric, nonasymptotic confidence sequences** — Howard, Ramdas, McAuliffe & Sekhon (Annals of Statistics 2021). [arXiv:1810.08240](https://arxiv.org/abs/1810.08240) · [10.1214/20-aos1991](https://doi.org/10.1214/20-aos1991) · bibkey `howard2021safe` · `ev_experimentation_advanced_0001`
  - **Mechanism:** Develops confidence sequences whose widths go to zero, with nonasymptotic coverage guarantees under nonparametric conditions. Draws connections between the Cramér–Chernoff method, the law of the iterated logarithm, and the sequential probability ratio test.
  - **Result:** Establishes time-uniform extensions of the Cramér–Chernoff method; tight nonasymptotic LIL; nonparametric generalizations of SPRT covering sub-Gaussian, Bernstein, self-normalized, matrix-martingale settings. Foundational reference for modern valid-anytime A/B test inference.
  - **Status:** `verified` (arxiv metadata extracted from cache; title + first author + year confirmed against `citation_*` HTML head meta tags).

## A2. The "peeking" problem + always-valid p-values

- **Source:** **Always Valid Inference: Bringing Sequential Analysis to A/B Testing** — Johari, Pekelis & Walsh (arXiv 2015; KDD 2017 conference version published as "Peeking at A/B Tests: Why it matters, and what to do about it" with co-author Koomen). [arXiv:1512.04922](https://arxiv.org/abs/1512.04922) · bibkey `johari2015always` · `ev_experimentation_advanced_0002`
  - **Mechanism:** Frames sequential analysis of A/B tests through the lens of "peeking" — practitioners continuously monitoring p-values + CIs as experiments run. Proposes always-valid p-values + CIs that are provably robust to this monitoring.
  - **Result:** Establishes the methodological + commercial foundation for "always valid" A/B testing platforms (Optimizely Stats Engine, derived practitioner products). Cited as the canonical motivation for sequential adoption in industrial A/B testing.
  - **Status:** `verified` via arxiv metadata. KDD 2017 conference paper has author list extended to include Koomen.

2 entries.
