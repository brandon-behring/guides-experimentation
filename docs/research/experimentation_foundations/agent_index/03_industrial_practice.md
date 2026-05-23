# 03. Industrial practice

## C1. Variance reduction in production

- **Source:** **Improving the Sensitivity of Online Controlled Experiments: Case Studies at Netflix** — Xie & Aurisset (KDD 2016). [10.1145/2939672.2939733](https://doi.org/10.1145/2939672.2939733) · [KDD-hosted PDF (cached)](https://www.kdd.org/kdd2016/papers/files/adp0945-xieA.pdf) · bibkey `xie2016improving` · `ev_experimentation_foundations_0004`
  - **Mechanism:** Netflix industrial deployment of variance reduction. Compares at-assignment stratified sampling against post-assigned techniques (post-stratification, CUPED).
  - **Result:** Post-assigned variance reduction outperforms at-assignment stratified sampling at Netflix scale. Recommends post-stratification + CUPED over stratified sampling for large-scale controlled experiments. (Note: research_plan.md initially listed RecSys 2016 — actual venue is KDD 2016; will correct on next plan update.)
  - **Status:** `unverified` pending audit. Industrial case study with concrete quantitative findings; cache `extraction_status: raw_only` (PDF — text extraction not yet done).

## C2. Organizational adoption

- **Source:** **The Evolution of Continuous Experimentation in Software Product Development: From Data to a Data-Driven Organization at Scale** — Fabijan, Dmitriev, Olsson & Bosch (ICSE 2017). [10.1109/ICSE.2017.76](https://doi.org/10.1109/ICSE.2017.76) · bibkey `fabijan2017evolution` · `ev_experimentation_foundations_0005`
  - **Mechanism:** Empirical Evolution Model from observing Microsoft + collaborator organizations adopt continuous experimentation. Combines technical maturity, organizational maturity, business maturity dimensions.
  - **Result:** Three-phase evolution model: technical → organizational → business. Provides guidance for practitioners on developing + scaling experimentation organizations. Cited frequently in OCE-organizational literature.
  - **Status:** `unverified` pending audit. Cache from DOI redirect (IEEE Xplore landing page; full PDF behind paywall).

## C3. Multi-year retrospective

- **Source:** **Online Controlled Experiments: Lessons from Running A/B/n Tests for 12 Years** — Kohavi (KDD 2015 keynote). [exp-platform PDF (cached)](https://exp-platform.com/Documents/2015-08OnlineControlledExperimentsKDDKeynoteNR.pdf) · bibkey `kohavi2015lessons` · `ev_experimentation_foundations_0007`
  - **Mechanism:** KDD 2015 keynote slides — multi-year synthesis of Microsoft ExP team's experience. Covers OEC design, metric selection, experimentation-at-scale operational lessons.
  - **Result:** Distills 12 years of A/B/n testing into actionable patterns. Pre-cursor to Kohavi 2020 textbook material; chapter 7 of the textbook expands the OEC framework first sketched here.
  - **Status:** `unverified` pending audit. Keynote slides (less formal than peer-reviewed paper but author-hosted on canonical experimentation site).

3 entries.
