# 03. Multi-armed bandits + adaptive allocation

## C1. Contextual bandits in production

- **Source:** **A Contextual-Bandit Approach to Personalized News Article Recommendation** — Li, Chu, Langford & Schapire (WWW 2010). [arXiv:1003.0146](https://arxiv.org/abs/1003.0146) · [10.1145/1772690.1772758](https://doi.org/10.1145/1772690.1772758) · bibkey `li2010contextual` · `ev_experimentation_advanced_0005`
  - **Mechanism:** Models personalized news recommendation as a contextual bandit problem. LinUCB-style algorithm with linear payoff function over context features.
  - **Result:** Yahoo! Front Page Today Module deployment on 33M events: 12.5% click lift vs context-free bandit. Foundational deployment paper for contextual bandits in production.
  - **Status:** `verified` via arxiv metadata.

## C2. Thompson sampling as standard baseline

- **Source:** **An Empirical Evaluation of Thompson Sampling** — Chapelle & Li (NeurIPS 2011). [neurips PDF (cached)](https://papers.neurips.cc/paper/4321-an-empirical-evaluation-of-thompson-sampling.pdf) · bibkey `chapelle2011empirical` · `ev_experimentation_advanced_0007`
  - **Mechanism:** Empirically evaluates Thompson sampling on simulated bandits + Yahoo! advertising data. Compares against UCB, ε-greedy.
  - **Result:** Thompson sampling is "highly competitive" on bandit benchmarks; argues it should be a standard baseline. Catalyzed widespread industrial TS adoption.
  - **Status:** `unverified` (PDF cache `extraction_status: raw_only` — title + authors not extracted to text). Promote after PDF text extraction in a future round.

2 entries.
