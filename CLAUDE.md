# guides-experimentation — AI authoring guide

Pilot guide built with `@brandon_m_behring/book-scaffold-astro` v4.2.0 (`styles: [researchPortfolioStyle, guidesFamilyStyle]` composition; `base: '/experimentation/'`).

## Status as of 2026-05-24

- **Phase 1 chapter authoring**: 1 of 16 chapters drafted (`01-industrial-narrative.mdx`); chapter 0 (`00-introduction.mdx`) is Phase 0b proof-stub
- **Content sub-dossiers**: 2 of N in v2.2+ strict-live (`experimentation_foundations` 14 entries / 4 verified, `experimentation_advanced` 11 entries / 9 verified)
- **Render state**: chapters render at `/experimentation/chapters/<slug>/` after scaffold #63 fix (v4.1.2) + chapter `draft: false`
- **Hub repo** at `~/guides/` owns the canonical design doc, methodology, plans, pedagogy dossiers. Read `~/guides/docs/plans/active/2026-05-24_session_handoff.md` first if resuming.

## Where things live

| Type | Path |
|---|---|
| Chapters | `src/content/experimentation/*.mdx` — frontmatter follows v0.2-extended research-portfolio schema |
| Frontmatter pages | `src/content/frontmatter/authors.mdx` (mounts at `/experimentation/authors/` per `routes.frontmatter.prefix: ''`) |
| Content schema | `src/content.config.ts` (extends scaffold with v0.2 fields; `loader.base: './src/content/experimentation'`) |
| Pages | `src/pages/index.astro` + `src/pages/chapters/[...slug].astro` (added 2026-05-23; canonical scaffold pattern from v3.6.1+ create-book) |
| Content dossiers | `docs/research/{experimentation_foundations,experimentation_advanced}/` — 25 cached primaries; bib_ledger + cache_manifest + evidence_ledger + claim_graph + dashboard |
| Companion package | `companion/` (Phase 1 — not yet built) |
| Capstone | `capstone/` (Phase 1.5 — deferred per ADR-0001) |
| Components, layouts | `@brandon_m_behring/book-scaffold-astro/{components,layouts}/...` |
| Style customizations | `src/styles/` (overrides package styles) |
| Bibliography | `bibliography.bib` → `src/data/references.json` via `npm run build:bib` |
| Cross-references | ids on `<Theorem>` / `<Figure>` → `src/data/labels.json` via `npm run build:labels` |

## Authoring rules

- **v0.2 metadata required**: every chapter frontmatter must include `mode`, `target`, `ordering`, `commitment`, `paradigms` (defaults to `[default]` — note: schema is `default|udl|srl|andragogy`, NOT design v0.3's presentation-paradigm spec; reconciliation owed for v0.4), `research_debt_addressed`, and at least one entry in `los[]`. See `00-introduction.mdx` for the full template.
- **`draft: false` to render**: canonical filter in `src/pages/chapters/[...slug].astro` is `(entry) => !entry.data.draft`. Chapters with `draft: true` are silently filtered out (no error). Set `draft: false` on shippable chapters.
- **Citation pattern**: `<Cite key="bibkey" />` resolves via `bibliography.bib`. Run `npm run build:bib` after adding entries. 5 landmark bibkeys currently in `bibliography.bib` (kohavi2020trustworthy, fabijan2017evolution, kohavi2015lessons, kohavi2012puzzling, kohavi2014seven).
- **Style guide**: lives in the hub repo at `~/guides/docs/style-guide-v0.0.md`. Phase 0b ports the 6 most universal rules; Phase 1 refines from pilot authoring.
- **AI collaboration**: HITL — Claude drafts from human outline; human reviews every claim before publication. No autonomous commits to `companion/src/` or `capstone/src/` (per design doc §10.3 authoring loops).

## Toolkit references

[`book-scaffold-astro` v4.2.0 PACKAGE_DESIGN.md](https://github.com/brandon-behring/book-scaffold-astro/blob/main/package/PACKAGE_DESIGN.md). File issues at https://github.com/brandon-behring/book-scaffold-astro/issues with label `consumer:guides` (per durable upstream-issue policy from `~/guides/docs/plans/done/2026-05-22_phase_a0_scaffold_preflight_wrap_up.md`).

## Design docs

- **Canonical (v0.3)**: `~/guides/docs/design/2026-05-23_design_v0.3.md` (in the hub repo, first design doc native to that repo)
- **Methodology v0.2 (user-facing)**: `~/guides/src/content/frontmatter/methodology.mdx`
- **Hub repo (overall project entry point)**: `~/guides/` — read its `CLAUDE.md` first

## Resume entry point

`~/guides/docs/plans/active/2026-05-24_session_handoff.md` — read first when starting a fresh session.
