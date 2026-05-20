# companion — Python package supporting the experimentation guide

**Status**: Skeleton placeholder. Phase 1 deliverable.

## Purpose

The `companion/` package will hold utility code that supports chapter examples — sample-size calculators, CUPED variance estimators, SRM diagnostics, sequential-testing alpha-spending functions, etc. The intent is that each major chapter has at least one runnable companion module so readers can swap toy values for their own data.

## Phase 0b out-of-scope

Per design doc v0.2 §10.6.5 + §16 phase mapping, the Phase 0b deliverable is the directory placeholder + `companion-test.yml` CI workflow sketch (in `.github/workflows/`). The actual `pyproject.toml`, `src/companion/`, and `tests/` arrive in Phase 1 alongside chapter content.

## When Phase 1 starts

Author per house-Python-style (uv + pytest + mypy + ruff + hypothesis). Mirror the layout of [eval-toolkit](https://github.com/brandon-behring/eval-toolkit). Each chapter's companion module imports from a small set of shared utilities; cross-chapter consistency is enforced by the test suite.

See `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md` §7 for the per-guide companion package role.
