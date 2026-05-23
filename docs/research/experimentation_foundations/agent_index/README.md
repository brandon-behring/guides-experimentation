<!-- AGENT-INDEX: topic=experimentation_foundations version=2.1-fallback total=14 generated=2026-05-23 -->

# Agent index — experimentation_foundations

Curated synthesis of 14 first-pass primary sources covering A/B testing foundations (chs 1–8 of the `experimentation` pilot guide). Built 2026-05-23 from the v2.2+ strict-live ledger at `../bib_ledger.yml`.

**Format:** v2.1-style 5-bullet blocks (Source / Mechanism / Result / Status). Attribute-First Phase 2 byte-offset span-anchoring deferred to the next depth-expansion round; `pre_selection_manifest.yml` not yet emitted. All entries `status: unverified` pending `/dossier-audit`.

## Scope boundary

**In scope (chs 1–8 of pilot guide):**
- Hypothesis testing & inference (t/z tests, p-values, confidence intervals)
- Power analysis + MDE + sample-size determination
- OEC + metric design (primary, guardrail, learning)
- Randomization + AA tests + SRM diagnostics
- Variance reduction foundations (CUPED, post-stratification, regression adjustment)
- Industrial narrative + organizational adoption patterns
- Foundational pitfalls (novelty/primacy, Twyman's law)

**Out of scope (covered by `experimentation_advanced` dossier — chs 9–16):**
- Sequential testing (mSPRT, alpha spending, GST)
- Network effects, interference, SUTVA violations, cluster designs
- Multi-armed bandits, Thompson sampling
- Ramping / staged rollout
- Bayesian A/B testing

## Lookup recipes

Find the right source by intent:

| You want | Look at |
|---|---|
| Foundational textbook for everything | `01_foundations_canon.md` A1 — kohavi2020trustworthy |
| Sample-size or MDE methodology | `02_methodology.md` B1 (CUPED lineage) + `05_tooling_and_calculators.md` E1 (vendor calculators) |
| Variance reduction (CUPED + extensions) | `02_methodology.md` B1: deng2013cuped → deng2023cuped → lin2024variance |
| Randomization framework / PlanOut | `02_methodology.md` B2 — bakshy2014designing |
| Netflix / Microsoft / industrial case study | `03_industrial_practice.md` — xie2016improving, fabijan2017evolution, kohavi2015lessons |
| OEC design / metric strategy | `03_industrial_practice.md` C3 — kohavi2015lessons (synthesizes Kohavi 2020 ch7) |
| SRM detection methodology | `04_pitfalls_and_diagnostics.md` D2 — fabijan2019diagnosing |
| Novelty/primacy effect handling | `04_pitfalls_and_diagnostics.md` D3 — sadeghi2021novelty |
| p-value interpretation principles | `01_foundations_canon.md` A2 — wasserstein2016asa |
| Practitioner power-analysis calculator | `05_tooling_and_calculators.md` E1 — statsig + eppo |

## Glossary

Selected terms used across entries. Full discussion of each is in the cited primary sources.

- **A/B test** — randomized controlled experiment comparing two variants (control vs treatment) on a primary metric. Synonymous with "online controlled experiment" (OCE).
- **AA test** — control-vs-control sanity check that detects SRM, randomization bugs, and metric variance baselines.
- **CUPED** — Controlled-experiment Using Pre-Experiment Data; variance-reduction technique (Deng et al. 2013) that adjusts the treatment-effect estimator using pre-experiment covariate data.
- **MDE** — Minimum Detectable Effect; smallest true treatment effect that an experiment will detect with given power.
- **OEC** — Overall Evaluation Criterion; the single (possibly composite) metric the experiment optimizes.
- **PlanOut** — domain-specific language for online field experiments (Bakshy et al. 2014); separates experimental design from application code.
- **Power** — `1 − β` where β is the Type II error rate; probability the test detects a true effect of given size.
- **SRM** — Sample Ratio Mismatch; observed assignment ratio differs significantly from designed assignment (chi-squared p-value below threshold, typically 0.01).
- **Twyman's law** — "Any figure that looks interesting or different is usually wrong" — heuristic for A/B testing skepticism (popularized in Kohavi's writings).

## File map

| # | File | Entries | Sub-areas |
|---|---|---:|---|
| 00 | `00_overview.md` | 0 (navigational) | All |
| 01 | `01_foundations_canon.md` | 2 | A1 textbook, A2 hypothesis testing |
| 02 | `02_methodology.md` | 4 | A6 variance reduction, A5 randomization |
| 03 | `03_industrial_practice.md` | 3 | A1 industrial narrative, A4 OEC, A6 deployment |
| 04 | `04_pitfalls_and_diagnostics.md` | 3 | A5 SRM, pitfalls |
| 05 | `05_tooling_and_calculators.md` | 2 | A3 practitioner tooling |

## Verification

All 14 entries `status: unverified` pending `/dossier-audit`. `/freshness-audit` dashboard at `../dashboard.md` shows 0 broken URLs and 14/14 cached. Caveat: 1 entry (kohavi2020trustworthy) uses a chapter-1 free PDF as a cache surrogate for the paywalled Cambridge book.

Total entries: 14.
