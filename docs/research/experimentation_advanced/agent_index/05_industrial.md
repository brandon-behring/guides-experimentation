# 05. Industrial practice — ramping + switchback in production

## E1. Ramping + rules of thumb

- **Source:** **Seven Rules of Thumb for Web Site Experimenters** — Kohavi, Deng, Longbotham & Xu (KDD 2014). [exp-platform PDF (cached)](https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf) · [10.1145/2623330.2623341](https://doi.org/10.1145/2623330.2623341) · bibkey `kohavi2014seven` · `ev_experimentation_advanced_0009`
  - **Mechanism:** Distills seven actionable rules from experimentation at Amazon, Booking.com, LinkedIn, multiple Microsoft properties. Each rule traces to multiple-company empirical evidence.
  - **Result:** Recommends ramp-up at 1% increments with real-time guardrail evaluation. Covers sample-size choice (often more is better), Twyman's law (interesting figures are usually wrong), how organizational adoption beats methodological perfection. Most-cited practitioner guidance in OCE literature.
  - **Status:** `unverified` (PDF cache `extraction_status: raw_only`). Promote after PDF text extraction.

## E2. Switchback in vendor practice

- **Source:** **Switchback experiments: Overview and considerations** — Statsig blog (n.d., volatile vendor doc). [statsig.com/blog/switchback-experiments](https://www.statsig.com/blog/switchback-experiments) · bibkey `statsig2024switchback` · `ev_experimentation_advanced_0011`
  - **Mechanism:** Practitioner-aimed overview of switchback designs: carryover modeling, optimal switching intervals, marketplace use cases.
  - **Result:** Provides operational guidance for setting up switchback experiments in vendor platforms (Statsig + similar). Useful teaching aid for ch 11 of pilot guide.
  - **Status:** `unverified` (vendor blog — `freshness_tier: volatile`, stale after 30 days; re-cache before authoring chapters that cite specific numbers). DoorDash engineering blog was preferred industrial source but returned HTTP 403; Statsig used as fallback.

2 entries.
