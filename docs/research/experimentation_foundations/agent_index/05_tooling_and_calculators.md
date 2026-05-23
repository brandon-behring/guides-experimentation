# 05. Tooling + practitioner calculators

Vendor + open-source practitioner tooling references. These are living docs (`freshness_tier: volatile`, stale after 30 days) — re-cache before authoring chapters that cite specific numbers or workflows.

## E1. Vendor practitioner docs

- **Source:** **Power Analysis for A/B Testing: A Technical Guide** — Statsig (n.d., perspectives blog). [statsig.com/perspectives/power-analysis-ab-testing-guide](https://www.statsig.com/perspectives/power-analysis-ab-testing-guide) · bibkey `statsig2024power` · `ev_experimentation_foundations_0013`
  - **Mechanism:** Practitioner-aimed methodology guide for power analysis. Covers sample size, MDE, significance level, base rate as the four levers; balancing them in design.
  - **Result:** Provides practitioner heuristics rather than novel methodology. Useful as a teaching aid for chapter 5 (sample sizing) of pilot guide; supplements the formal CUPED + power-curve literature.
  - **Status:** `unverified` pending audit. Vendor blog — `source_quality: secondary` in `evidence_ledger.yml`. `freshness_tier: volatile` because content may be revised without version markers.

- **Source:** **Sample Size Calculator Usage** — Eppo (n.d., docs). [docs.geteppo.com/statistics/sample-size-calculator/usage](https://docs.geteppo.com/statistics/sample-size-calculator/usage/) · bibkey `eppo2024samplesize` · `ev_experimentation_foundations_0014`
  - **Mechanism:** Documentation for Eppo's MDE-based sample-size calculator that uses historical data-warehouse data (vs static formula).
  - **Result:** Provides workflow + assumption-table for the calculator. Useful as concrete practitioner workflow when authoring chapter 5 of pilot; data-warehouse-driven sizing is a useful counterpoint to closed-form formulas.
  - **Status:** `unverified` pending audit. Vendor docs — `source_quality: secondary`. `freshness_tier: volatile`.

2 entries.
