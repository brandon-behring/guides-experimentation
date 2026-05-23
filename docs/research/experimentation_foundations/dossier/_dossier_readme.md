# Dossier — experimentation_foundations

**Compiled:** 2026-05-23
**Source:** `~/guides-experimentation/docs/research/experimentation_foundations/bib_ledger.yml`
**Total entries:** 14 (first-pass; targeting ≥100 in subsequent depth-expansion rounds)

## Entries per claim_family

| claim_family | count | file |
|---|---:|---|
| textbook | 1 | 01_foundations_canon.md |
| theory | 1 | 01_foundations_canon.md |
| methodology | 4 | 02_methodology.md |
| industrial | 3 | 03_industrial_practice.md |
| pitfall | 3 | 04_pitfalls_and_diagnostics.md |
| tooling | 2 | 05_tooling_and_calculators.md |
| **total** | **14** | |

## File map

| # | File | Sub-areas covered | Anchor prefix |
|---|---|---|---|
| 01 | `01_foundations_canon.md` | A1 textbook, A2 hypothesis testing | `A` |
| 02 | `02_methodology.md` | A3 power (later), A5 randomization, A6 variance reduction | `B` |
| 03 | `03_industrial_practice.md` | A1 industrial narrative, A4 metric design (Kohavi 2015), A6 variance reduction (Xie 2016) | `C` |
| 04 | `04_pitfalls_and_diagnostics.md` | A5 SRM diagnostics, pitfalls | `D` |
| 05 | `05_tooling_and_calculators.md` | A3 power tooling | `E` |

## v2.2+ strict-live notes

This dossier was built as an optional human-editable pivot. The canonical agent-readable artifacts are:
- `bib_ledger.yml` (14 entries, all `status: unverified` pending audit)
- `cache_manifest.yml` (14 cached primaries; 1 surrogate for the paywalled Kohavi 2020 book — chapter 1 free PDF used)
- `evidence_ledger.yml` (14 headline-claim entries, all `extraction_method: paraphrase` pending Attribute-First Phase 2)
- `gather_trace.yml` (14 fetch records, all `decision: accept`)
- `claim_graph.jsonl` (built mechanically from above)

Downstream `/agent-index` may either consume these dossier markdown files (v1-era flow) or read `bib_ledger.yml` + `cache_manifest.yml` directly (v2.2+ Attribute-First flow).
