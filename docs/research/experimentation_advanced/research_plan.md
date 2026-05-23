# Research Plan: Advanced A/B testing (experimentation pilot, chs 9-16)

Pedagogical research dossier for the advanced half of the `experimentation` pilot guide. Covers sequential / anytime-valid inference, network effects + interference, multi-armed bandits, ramping + staged rollout, Bayesian A/B testing, and heterogeneous treatment effects. Companion to `experimentation_foundations` (chs 1–8). Target: ~120–200 verified primary sources across applied stats + industrial deployment + recent ML-flavored extensions.

## Sub-areas

- A1. Sequential testing + valid-anytime inference (mSPRT, alpha spending, group sequential designs, e-values, confidence sequences)
  - Source types: arXiv, Annals of Statistics / JASA, KDD/WSDM, industrial blogs (Optimizely, Statsig, Eppo, Microsoft ExP)
  - Notes: IN — Wald's SPRT lineage, mixture-mSPRT, Howard-Ramdas confidence sequences, e-values + e-processes, Pocock + O'Brien-Fleming spending, "valid anytime" peer-reviewed deployments. OUT — foundational hypothesis testing (sister dossier), philosophical frequentist-vs-likelihoodist debates beyond what motivates practical sequential design.

- A2. Network effects + interference (SUTVA violations, marketplace + social-network experiments)
  - Source types: arXiv, Management Science / Marketing Science, KDD, vendor case studies (Uber, Airbnb, DoorDash, Lyft, Meta)
  - Notes: IN — interference detection + correction, cluster-randomized designs, exposure-mapping models, ego-network designs, two-sided / marketplace experiments. OUT — pure economic equilibrium analysis without OCE relevance.

- A3. Multi-armed bandits + adaptive allocation
  - Source types: arXiv, ICML/NeurIPS, classical bandit theory references (Robbins 1952, Lai-Robbins), industrial blogs
  - Notes: IN — UCB family, Thompson sampling, contextual bandits, MAB-vs-A/B tradeoff (when to use bandits over A/B), regret bounds, hybrid bandit-experimentation platforms. OUT — full reinforcement learning beyond bandits, multi-step decision problems with deep state.

- A4. Ramping + staged rollout (% traffic stepping, guardrails, automated ramping)
  - Source types: vendor blogs (Microsoft ExP, LinkedIn engineering, Netflix tech blog, Etsy, Uber), KDD industrial track papers, very few peer-reviewed theory papers
  - Notes: IN — manual + automated ramp velocity, ramp-stopping rules, guardrail-driven rollback, % traffic schedules, holdout populations. OUT — feature-flag platform engineering (LaunchDarkly / Split.io implementation patterns); progressive delivery in non-experimentation contexts.

- A5. Switchback designs + time-based randomization (for marketplaces / two-sided platforms)
  - Source types: arXiv, Management Science / Marketing Science, vendor blogs (DoorDash, Uber, Lyft)
  - Notes: IN — switchback design theory + carryover models, optimal switchback intervals, hybrid switchback/cluster designs. OUT — non-marketplace temporal designs (e.g., crossover trials in clinical research).

- A6. Bayesian A/B testing + decision rules
  - Source types: arXiv, Bayesian Analysis / JASA, vendor blogs (VWO, Convert, Bayesian-flavored A/B platforms), Berry / Carlin & Louis textbooks
  - Notes: IN — posterior decision rules, ROPE (Region of Practical Equivalence), prior elicitation for A/B contexts, Bayes factors, posterior-probability stopping. OUT — full Bayesian statistical philosophy beyond what informs A/B-test decisions; Bayesian model-comparison work without A/B-test framing.

## Out-of-scope

Strict cuts (covered elsewhere or off-topic):

- All foundational material: hypothesis testing basics, p-values, power analysis, MDE, sample size, OEC + metric design, basic randomization (A/B/AA tests), SRM detection, novelty/primacy effects, basic variance reduction (CUPED + post-stratification) — see sister dossier `experimentation_foundations`.
- Heterogeneous treatment effects beyond A/B context — causal forests, X-learner, T-learner, R-learner, meta-learners. (Important and adjacent but lives in `causal_inference_methods` if/when that dossier exists; out of scope here to keep this dossier sized.)
- Causal inference outside A/B: observational methods (PSM, IPW), instrumental variables, regression discontinuity, difference-in-differences — different methodology family.
- Reinforcement learning beyond stateless bandits (multi-step decision problems, deep RL).
- Differential privacy / federated learning on experiment outputs.
- Platform engineering: telemetry pipelines, feature-flag infrastructure, exposure-logging shape, A/B platform build-vs-buy.
- Offline ML model evaluation metrics (precision/recall, NDCG, AUC) when not feeding an A/B-test OEC.

## Claim family taxonomy

- `theory` — formal statistics + decision theory: derivations, asymptotic properties, regret bounds, valid-anytime guarantees
- `methodology` — actionable procedures: how to set up an mSPRT, how to design a switchback, how to choose ROPE width
- `industrial` — case studies + retrospectives from operating advanced experimentation platforms (Microsoft, Netflix, Uber, Airbnb, DoorDash, Meta, Lyft, LinkedIn)
- `textbook` — canonical pedagogical references (Berry 2010 Bayesian, Lattimore-Szepesvári 2020 Bandits, Imbens-Rubin 2015 Causal)
- `tooling` — open-source libraries + platforms (statsmodels, causalml, EconML, contextual bandit libs, mSPRT implementations)
- `pitfall` — known anti-patterns + sanity checks for advanced methods (peeking on non-anytime-valid tests, interference-blind A/B in marketplaces, MAB regret-vs-decision-quality tradeoffs)

## Known landmark papers

- `howard2021safe` — Howard, Ramdas, McAuliffe & Sekhon "Time-uniform, nonparametric, nonasymptotic confidence sequences" (Annals of Statistics 2021). Modern valid-anytime CI foundation.
- `johari2017peeking` — Johari, Pekelis & Walsh "Peeking at A/B Tests: Why it matters, and what to do about it" (KDD 2017). Motivates sequential / anytime-valid design from the peeking problem.
- `thompson1933likelihood` — Thompson "On the likelihood that one unknown probability exceeds another in view of the evidence of two samples" (Biometrika 1933). Original Thompson sampling.
- `eckles2017design` — Eckles, Karrer & Ugander "Design and Analysis of Experiments in Networks: Reducing Bias from Interference" (Journal of Causal Inference 2017). Foundational interference-correction paper.
- `bojinov2022design` — Bojinov, Simchi-Levi & Zhao "Design and Analysis of Switchback Experiments" (Management Science 2022). Canonical switchback theory paper.
- `athey2019generalized` — Athey, Tibshirani & Wager "Generalized random forests" (Annals of Statistics 2019). Causal forests for HTE — flagged for in-scope-by-relevance even though HTE is largely deferred; this paper is the closest the dossier comes to HTE.
