# ADR-0001: Capstone deferred to Phase 1.5

**Status**: Accepted
**Date**: 2026-05-19
**Phase**: 0b
**Authors**: Brandon Behring (with Claude Code AI assistance per `/methodology`)

## Context

The pilot guide (`experimentation`) bootstraps in Phase 0b alongside the hub repo. Design doc v0.2 §10.6.5 separates capstone delivery from chapter content delivery, treating the capstone as a "domain-pedagogy tier" artifact that is **optional for the pilot** but **required** for arc-relevant guides (prompt-injection, ai-engineering, llms, mlops).

The capstone artifact is structurally modeled on [`prompt-injection-detection-prototype`](https://github.com/brandon-behring/prompt-injection-detection-prototype) at lighter scale: 3–5 ADRs, a `src/` package, an `evals/` directory, a `WRITEUP.md` Quarto narrative, a `Makefile`, and a `pyproject.toml`. Per design doc §8.2.

## Decision

Phase 0b does **not** ship capstone code. The `capstone/` directory exists as a stub:

- `README.md` — explains the deferral + Phase 1.5 layout
- `decisions/ADR-0001-capstone-out-of-scope.md` — this ADR

Phase 1 ships chapter content + companion package. Phase 1.5 (~3–4 weeks, Q1 2027) ships capstone v1.0.

## Consequences

**Positive**:
- Pilot doesn't carry capstone weight while chapter shape is still being refined
- The capstone benefits from completed chapter content as input (worked examples → capstone test cases)
- Phase 1.5's standalone timeline lets the capstone be designed as a unit rather than chapter-by-chapter

**Negative**:
- Pilot's "completed pilot guide" status is staged: v1.0 (chapters + companion, EOY 2026 MVP) → v1.1 (capstone, Q1 2027)
- Career-bridge framing for the pilot is muted — the experimentation capstone is pedagogical, not arc-relevant

**Neutral**:
- Arc-relevant guides (Phase 2+) ship capstone alongside chapters; the pilot pattern doesn't generalize verbatim

## Alternatives considered

1. **Ship capstone in Phase 1 alongside chapters** — rejected: capstone needs completed chapters as input. Co-developing the two adds coupling without clarifying either.

2. **Skip pilot capstone entirely** — rejected: pilot capstone is pedagogical infrastructure (proves the chapter → capstone bridge works). Skipping it leaves Phase 2's capstone unrehearsed.

3. **Pilot capstone as a separate repo** — rejected: per design doc §9 Architecture A, guides are self-contained; capstone is part of the guide's repo. Spinning a separate repo violates the locked architecture.

## Cross-references

- Design doc v0.2 §10.6.5 (capstone-requirement update)
- Design doc v0.2 §16 (phase mapping)
- Design doc v0.2 §8.2 (capstone structural model)
- `prompt-injection-detection-prototype` (capstone exemplar)
- Phase 0b plan: `/Users/brandonbehring/.claude/plans/continue-with-working-on-gentle-cocke.md`

## Revisitable when

- Phase 1 chapters land (≥ 8 of 16 published as `validated`)
- Phase 1 retrospective surfaces concrete capstone-shape requirements
- User intrinsic motivation aligned with capstone-authoring effort
