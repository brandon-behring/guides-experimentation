# guides-experimentation — AI authoring guide

Pilot guide built with `@brandon_m_behring/book-scaffold-astro` (research-portfolio preset, v3.5.0).

## Where things live

| Type | Path |
|---|---|
| Chapters | `src/content/experimentation/*.mdx` — frontmatter follows v0.2-extended research-portfolio schema |
| Frontmatter pages | `src/content/frontmatter/authors.mdx` |
| Content schema | `src/content.config.ts` (extends scaffold with v0.2 fields) |
| Companion package | `companion/` (Phase 1) |
| Capstone | `capstone/` (Phase 1.5) |
| Components, layouts | `@brandon_m_behring/book-scaffold-astro/components/...` |
| Style customizations | `src/styles/` (overrides package styles) |
| Bibliography | `bibliography.bib` → `src/data/references.json` via `npm run build:bib` (Phase 1) |
| Cross-references | ids on `<Theorem>` / `<Figure>` → `src/data/labels.json` via `npm run build:labels` |

## Authoring rules

- **v0.2 metadata required**: every chapter frontmatter must include `mode`, `target`, `ordering`, `commitment`, `paradigms` (defaults to `[default]`), `research_debt_addressed`, and at least one entry in `los[]`. See `00-introduction.mdx` for the full template.
- **Style guide**: lives in the hub repo at `~/guides/docs/style-guide-v0.0.md`. Phase 0b ports the 6 most universal rules; Phase 1 refines from pilot authoring.
- **AI collaboration**: HITL — Claude drafts from human outline; human reviews every claim before publication. No autonomous commits to `companion/src/` or `capstone/src/` (per design doc §10.3 authoring loops).

## Toolkit reference

[`book-scaffold-astro` PACKAGE_DESIGN.md](https://github.com/brandon-behring/book-scaffold-astro/blob/v3.0/PACKAGE_DESIGN.md) — single source of truth for the API. File issues at https://github.com/brandon-behring/book-scaffold-astro/issues with label `consumer:guides-experimentation`.

## Design docs (canonical references)

- v0.2 design doc: `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md`
- Phase 0b plan: `~/.claude/plans/continue-with-working-on-gentle-cocke.md`
- Hub repo: `~/guides/`
