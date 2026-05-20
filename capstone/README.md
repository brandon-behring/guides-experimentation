# capstone — Pilot guide capstone artifact

**Status**: Out of scope for Phase 0b. See `decisions/ADR-0001-capstone-out-of-scope.md`.

## Purpose

The `capstone/` directory will hold an ADR-driven, end-to-end artifact that demonstrates the guide's curriculum applied to a single project — modeled on [`prompt-injection-detection-prototype`](https://github.com/brandon-behring/prompt-injection-detection-prototype) at lighter scale (3–5 ADRs, not full audit).

## Phase mapping

Per design doc v0.2 §10.6.5 + §16:

| Phase | Capstone delta |
|---|---|
| Phase 0b (current) | Stub directory + ADR-0001 documenting deferral |
| Phase 1 | Chapter content + companion package land first |
| **Phase 1.5** | Capstone v1.0 — code + Quarto writeup + 3–5 ADRs |

## Why deferred

Per v0.2 §10.6.5: "Capstone is separable from the guide. Domain-pedagogy tier — the guide stands alone without it. The career-bridge framing requires the capstone for arc-relevant guides (prompt-injection, ai-engineering, llms, mlops); the pilot's experimentation capstone is optional and pedagogical."

See `decisions/ADR-0001-capstone-out-of-scope.md` for the full rationale.

## Layout when Phase 1.5 starts

```
capstone/
├── README.md
├── decisions/
│   ├── ADR-0001-*.md
│   ├── ADR-0002-*.md
│   └── ...
├── src/
├── evals/
├── WRITEUP.md          # Quarto narrative
├── Makefile
└── pyproject.toml
```

Modeled on `prompt-injection-detection-prototype`.
