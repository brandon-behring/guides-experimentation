# Research Plan: A/B testing foundations (experimentation pilot, chs 1-8)

Pedagogical research dossier for the foundations half of the `experimentation` pilot guide — covers the statistical, methodological, and operational core of online controlled experiments (hypothesis testing, power, metric design, randomization, basic variance reduction). Target: ~120–200 verified primary sources spanning industrial practice + academic statistics + textbook canon, scoped to chapters 1–8. Sequential testing, network effects, bandits, and Bayesian A/B move to the companion `experimentation_advanced` dossier.

## Sub-areas

- A1. Foundations + industrial narrative (why A/B testing emerged; the Kohavi/MS-ExP era)
  - Source types: textbooks (Kohavi 2020), industrial retrospectives (KDD/WSDM keynotes), vendor history blogs (MS ExP, Booking, LinkedIn), HCI/IS journals
  - Notes: IN — historical timeline of online controlled experiments, organizational maturity models (Fabijan et al.), big-co experimentation-platform overviews. OUT — anything pre-internet (agricultural RCTs, clinical trials per se) and detailed platform-engineering build-out (that's a different consumer's dossier).

- A2. Hypothesis testing & statistical inference (t/z tests, p-values, confidence intervals)
  - Source types: statistics textbooks (Casella & Berger, Wasserman), educational blogs (StatQuest, Cross Validated answers), arXiv/JSTOR for the modern critique of p-values
  - Notes: IN — formal definitions (null/alternative, type I/II, p-value semantics), confidence interval interpretation, normality assumptions + CLT justification, t vs z choice. OUT — frequentist-vs-Bayesian philosophical debates beyond what's needed to motivate metric choice; deep measure-theoretic foundations.

- A3. Power analysis, MDE, sample-size determination
  - Source types: industrial blogs (Eppo, Statsig, Microsoft ExP, Optimizely), KDD/WSDM applied stats papers, classical power textbooks (Cohen 1988), online calculators with documented formulas
  - Notes: IN — power curves, effect size operationalization, MDE under different metric types (continuous, binary, ratio), one-sided vs two-sided choice, multiple comparison adjustments at planning time. OUT — sequential power (that's experimentation_advanced), Bayesian sample sizes.

- A4. Metric design (OEC, primary, guardrail, learning metrics)
  - Source types: Kohavi 2020 (chapters 5–7), vendor blogs (Airbnb, LinkedIn, Netflix tech blogs), KDD industrial track papers, internal-platform retrospectives
  - Notes: IN — Overall Evaluation Criterion construction, primary-vs-secondary-vs-guardrail metric framing, ratio metrics + delta method, novelty/primacy effects on metric stability, learning-metric design (long-term value proxies). OUT — heavy ML metric topics (offline IR metrics, ranker metrics beyond click-through) and platform-level metric warehouses.

- A5. Randomization & assignment (units, AA tests, sanity checks)
  - Source types: WWW/KDD applied papers (Bakshy/PlanOut), vendor blogs (Microsoft ExP, Booking, Spotify), HCI papers on cookie-based randomization
  - Notes: IN — choice of randomization unit (user/session/device/page), hash-based assignment, salt selection, AA test as platform-health check, sample-ratio-mismatch (SRM) detection at the foundational level. OUT — cluster randomization for marketplaces, switchback designs, network-aware randomization (all go to experimentation_advanced).

- A6. Variance reduction (CUPED, stratification, regression adjustment)
  - Source types: arXiv + WSDM/KDD/RecSys (Deng 2013, Xie & Aurisset 2016, Booking + Doordash blogs on CUPED extensions), classical sampling-theory textbooks for stratification roots
  - Notes: IN — CUPED original + ML-CUPED + CUPAC, post-stratification, regression-adjusted estimators, when variance reduction breaks (heterogeneity, drift). OUT — synthetic control / matching for marketplace experiments (separate methodological family, advanced dossier).

## Out-of-scope

Strict cuts (each could be its own dossier — many go to `experimentation_advanced`):

- Sequential testing (mSPRT, alpha spending, group sequential designs, valid-anytime CIs) — deferred to `experimentation_advanced` (chs 9–10 of pilot).
- Network effects, interference, SUTVA violations, cluster-randomized designs for marketplaces, switchbacks — `experimentation_advanced`.
- Multi-armed bandits, Thompson sampling, contextual bandits — `experimentation_advanced` (ch 13–14).
- Ramping / staged rollout strategies, % traffic stepping — `experimentation_advanced`.
- Bayesian A/B testing (posterior decision rules, ROPE, prior elicitation) — `experimentation_advanced`.
- Causal inference outside A/B (observational, IV, DiD, regression discontinuity) — different topic; would warrant its own dossier under `causal_inference_methods` if needed.
- Experimentation-platform engineering (build-vs-buy, telemetry pipelines, exposure-logging design) — vendor/platform topic; not pedagogical.
- Practical SQL / data-engineering for metric extraction — adjacent infra topic; vendor blogs ok in passing but not in scope as a sub-area.
- ML model evaluation metrics (precision/recall, IR metrics, ranker metrics) when not directly serving an A/B-test OEC — different domain.

## Claim family taxonomy

The set of `claim_family` values that `bib_ledger.yml` entries can use. Topical + phase-of-pipeline mix:

- `theory` — formal statistics: hypothesis test definitions, asymptotic results, variance estimators, derivations
- `methodology` — actionable procedures: how-to compute sample size, how to apply CUPED, how to detect SRM
- `industrial` — case studies + retrospectives from operating experimentation platforms (MS ExP, Netflix, Airbnb, LinkedIn, Booking, Spotify, Uber, etc.)
- `textbook` — canonical pedagogical references (Kohavi 2020, Casella & Berger, Wasserman, Cohen 1988)
- `tooling` — open-source libraries + platforms (statsmodels.stats.power, eppo-rs, GrowthBook OSS, PlanOut, Pyro/PyMC for related Bayesian if borderline)
- `pitfall` — known anti-patterns + sanity-check methodology (SRM, peeking, novelty/primacy, Simpson's paradox in subgroups)

## Known landmark papers

Pre-known canonical references — `/research-gather` should find these, not claim credit for them.

- `kohavi2020trustworthy` — Kohavi, Tang & Xu "Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing" (Cambridge UP, 2020). The foundational textbook; cited across every sub-area.
- `deng2013cuped` — Deng, Xu, Kohavi & Walker "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data" (WSDM 2013). The original CUPED paper.
- `bakshy2014designing` — Bakshy, Eckles & Bernstein "Designing and Deploying Online Field Experiments" (WWW 2014). PlanOut framework + foundational randomization framework.
- `xie2016improving` — Xie & Aurisset "Improving the Sensitivity of Online Controlled Experiments: Case Studies at Netflix" (RecSys 2016). Industrial deployment of variance reduction.
- `fabijan2017evolution` — Fabijan, Dmitriev, Olsson & Bosch "The Evolution of Continuous Experimentation in Software Product Development" (ICSE 2017). Maturity-model paper covering organizational A/B test adoption.
