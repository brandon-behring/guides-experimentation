# 00. Overview — experimentation advanced

Synthesis of the 11 indexed sources collectively establishing what advanced A/B testing looks like circa 2024.

**Three frontiers organize the field.**

First, **sequential / anytime-valid inference** has matured from Robbins-era SPRT theory into engineering-deployable confidence sequences (Howard et al. 2021) and into the "peeking-resistant" A/B testing offered by Optimizely Always Valid + similar industrial products (johari2015always → KDD 2017 Peeking at A/B Tests). This is the most mathematically polished sub-area; the canonical CIs are well-specified, and the open frontier is e-values + e-processes.

Second, **interference + switchback** is the marketplace-experimentation frontier. SUTVA violations from network spillover (Eckles et al. 2017; Kao 2017 framework) and from two-sided market equilibria (Bojinov, Simchi-Levi & Zhao 2023 switchback theory; DoorDash + Uber + Lyft engineering practice) have generated a flood of recent designs. Switchback designs alternate treatment + control over time within a region; cluster designs partition by social-network or geographic structure. None is universally optimal.

Third, **multi-armed bandits + adaptive allocation** sits adjacent to A/B testing. Bandits (li2010contextual contextual bandits; chapelle2011empirical Thompson sampling) optimize cumulative reward, A/B tests optimize decision quality. The tradeoff: bandits surrender clean inference for in-experiment value. Industrial deployments (Netflix artwork bandits, recommendation engines) prefer bandits when the OEC IS the cumulative metric.

**Bayesian A/B testing** (gronau2019informed) remains a methodologically distinct minority practice — informed priors + ROPE-based decision rules — with high practitioner intuition appeal but limited consensus framework relative to frequentist sequential.

**Heterogeneous treatment effects** (athey2019generalized causal forests) are bridge territory — important for personalization-driven A/B testing but rooted in a separate causal-inference methodology family.

**Ramping** (kohavi2014seven seven rules of thumb) remains the most under-theorized sub-area; industrial practice (1% → 5% → 25% → 50% → 100% steps at Microsoft) dominates over formal theory. This is one of the dossier's identified depth-expansion gaps.

The companion `experimentation_foundations` dossier covers chs 1–8 (basics through CUPED).
