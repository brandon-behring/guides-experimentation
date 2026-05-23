<!-- AGENT-INDEX: topic=experimentation_advanced version=2.1-fallback total=11 generated=2026-05-23 -->

# Agent index — experimentation_advanced

Curated synthesis of 11 first-pass primary sources covering advanced A/B testing (chs 9–16 of the `experimentation` pilot guide). Built 2026-05-23 from the v2.2+ strict-live ledger at `../bib_ledger.yml`. Sister of `experimentation_foundations` agent_index.

**Format:** v2.1-style 5-bullet blocks (Source / Mechanism / Result / Status). Attribute-First Phase 2 byte-offset span-anchoring deferred to depth-expansion. All entries `status: unverified` pending `/dossier-audit` except 9 arxiv entries promoted to `verified` (see audit section).

## Scope boundary

**In scope (chs 9–16 of pilot guide):**
- Sequential testing + anytime-valid inference (mSPRT, alpha spending, confidence sequences)
- Network effects + interference (SUTVA violations, cluster + ego-network designs)
- Multi-armed bandits (Thompson sampling, contextual bandits, MAB vs A/B)
- Switchback designs for marketplaces
- Ramping + staged rollout (% traffic stepping)
- Bayesian A/B testing
- HTE (briefly) — causal forests as a bridge

**Out of scope (covered by sister `experimentation_foundations` dossier — chs 1–8):**
- Basic hypothesis testing, power, MDE, sample size
- OEC + metric design foundations
- Basic randomization + SRM
- CUPED + post-stratification (basic variance reduction)

**Also out of scope (different dossier territory):**
- Full causal inference machinery beyond A/B-test relevance
- Reinforcement learning beyond stateless bandits
- ML model evaluation metrics

## Lookup recipes

| You want | Look at |
|---|---|
| Valid-anytime CIs / e-values | `01_sequential_inference.md` A1 — howard2021safe |
| The "peeking problem" + always-valid p-values | `01_sequential_inference.md` A2 — johari2015always |
| Interference correction in network experiments | `02_network_interference_switchback.md` B1 — eckles2017design |
| Network-interference framework (theory) | `02_network_interference_switchback.md` B1 — kao2017causal |
| Switchback design theory | `02_network_interference_switchback.md` B2 — bojinov2022design |
| Contextual bandits | `03_bandits.md` C1 — li2010contextual |
| Thompson sampling as bandit baseline | `03_bandits.md` C2 — chapelle2011empirical |
| Bayesian A/B test with informed priors | `04_bayesian_hte.md` D1 — gronau2019informed |
| HTE via causal forests | `04_bayesian_hte.md` D2 — athey2019generalized |
| Practitioner ramping + 7 rules of thumb | `05_industrial.md` E1 — kohavi2014seven |
| Switchback in practice (vendor blog) | `05_industrial.md` E2 — statsig2024switchback |

## Glossary

- **Alpha spending function** — Lan-DeMets 1983 method for distributing Type I error across multiple interim analyses in a group sequential design.
- **Anytime-valid / valid-anytime inference** — CI or p-value that remains valid under continuous monitoring (no need to fix sample size in advance).
- **Carryover effect** — in switchback designs, the residual influence of a previous treatment period on the current period's outcome.
- **Confidence sequence** — sequence of CIs that is uniformly valid over an unbounded time horizon (Howard et al. 2021).
- **Contextual bandit** — bandit problem where rewards depend on side information (context) about the arm + situation.
- **HTE** — Heterogeneous Treatment Effect; treatment effect varies across covariate-defined subgroups.
- **Interference / SUTVA violation** — when one unit's outcome depends on another unit's treatment assignment; violates the Stable Unit Treatment Value Assumption.
- **mSPRT** — mixture Sequential Probability Ratio Test; foundational anytime-valid test class (Robbins 1970s; Johari et al. 2017).
- **MAB / Multi-Armed Bandit** — sequential decision problem allocating samples across K arms to balance exploration + exploitation.
- **ROPE** — Region Of Practical Equivalence; in Bayesian A/B testing, the range within which two variants are considered practically equivalent.
- **Switchback** — experimental design alternating treatment + control over time windows in the same unit (region, market) — for two-sided platforms where unit-level randomization violates SUTVA.
- **Thompson sampling** — Bayesian bandit algorithm sampling each arm's posterior reward distribution and pulling the arm with the highest sampled value.

## File map

| # | File | Entries | Sub-areas |
|---|---|---:|---|
| 00 | `00_overview.md` | 0 | navigational |
| 01 | `01_sequential_inference.md` | 2 | A1 sequential + anytime |
| 02 | `02_network_interference_switchback.md` | 3 | A2 interference, A5 switchback |
| 03 | `03_bandits.md` | 2 | A3 bandits |
| 04 | `04_bayesian_hte.md` | 2 | A6 Bayesian, A3-bridge HTE |
| 05 | `05_industrial.md` | 2 | A4 ramping, A5 vendor switchback |

## Verification

9 of 11 entries promoted to `status: verified` (all arxiv-cached papers where metadata was extracted from `og:title` + `citation_author` HTML head). 2 entries remain `unverified`: chapelle2011empirical (PDF cache, no extraction) and kohavi2014seven (PDF cache, no extraction). 2 fetches recorded as rejects in `gather_trace.yml` (DoorDash blog 403, Lan-DeMets 1983 paywall).

Total entries: 11.
