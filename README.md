# guides-experimentation

Pilot guide for [`guides.brandon-behring.dev/experimentation/`](https://guides.brandon-behring.dev/experimentation/) — A/B testing, sample size, CUPED, sequential testing. Companion to the hub at [`github.com/brandon-behring/guides`](https://github.com/brandon-behring/guides).

Built with [`@brandon_m_behring/book-scaffold-astro`](https://github.com/brandon-behring/book-scaffold-astro) (research-portfolio preset, v3.5.0).

## Status

| Phase | Status | What ships |
|---|---|---|
| Phase 0b (current) | **In progress** | Repo skeleton + v0.2 schema extension + 00-introduction chapter stub + capstone deferral ADR |
| Phase 1 (Q3–Q4 2026) | Pending | 16-chapter MDX + companion v1.0 + Cloudflare Pages subroute live |
| Phase 1.5 (Q1 2027) | Pending | Capstone v1.0 (domain-pedagogy tier) |

## Getting started

```bash
npm install
npm run dev    # http://localhost:4321/experimentation/
```

## Layout

```
guides-experimentation/
├── src/
│   ├── content/
│   │   ├── experimentation/         # Chapter MDX files
│   │   │   └── 00-introduction.mdx  # Phase 0b proof stub
│   │   └── frontmatter/             # /authors page
│   ├── content.config.ts            # v0.2 schema extension
│   └── data/
├── companion/                       # Python companion package (Phase 1)
├── capstone/                        # Capstone artifact (Phase 1.5)
│   └── decisions/ADR-0001-*.md      # Deferral rationale
├── .github/workflows/               # CI (Phase 0b: 2 live + 2 sketched)
├── astro.config.mjs                 # preset: 'research-portfolio', base: '/experimentation/'
├── wrangler.toml                    # Pages config (Phase 1)
├── LICENSE                          # CC BY 4.0 (content)
├── LICENSE-SCRIPTS                  # MIT (code)
└── AUTHORS.md                       # AI collaboration disclosure
```

## v0.2 schema extension

`src/content.config.ts` extends `researchPortfolioChapterSchema` from the scaffold with v0.2 pedagogical-metadata fields per design doc §15.2 + §17:

- `mode`, `target`, `ordering` — pedagogical-shape declaration (with coherent-combinations lint planned)
- `los[]` with `bloom` + `threshold` — learning-outcome statements with threshold-concept flag
- `paradigms` — multi-paradigm presentation hooks (Dim 7; UDL variant blocked on scaffold v3.6.0+)
- `commitment` + `research_debt_addressed` + `load_targets` + `task_classes` + `companion_modules`

See `src/content/experimentation/00-introduction.mdx` for a chapter that exercises every extended field.

## Build + deploy

```bash
npm run validate    # pre-flight content checks (book-scaffold validate)
npm run build       # → dist/
```

Phase 1: Cloudflare Pages auto-deploy from `main`. Hub `wrangler.toml` proxies `/experimentation/*` to this Pages project.

## License

- Content: CC BY 4.0 (see `LICENSE`)
- Scripts: MIT (see `LICENSE-SCRIPTS`)

See `AUTHORS.md` for AI collaboration disclosure.
