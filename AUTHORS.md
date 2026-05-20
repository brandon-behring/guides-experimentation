# Authors

## Primary author

**Brandon Behring** — final responsibility for content, claims, structure, design decisions, and review.

## AI collaboration

Co-authored with **Claude** (Anthropic, via Claude Code).

**Tooling scope**:
- Chapter drafting from human-led outlines
- Schema design + Zod extension
- Structural review + revision
- Citation lookup + verification
- ADR drafting
- Pair-programming on companion package code
- Pre-PR self-review

**Out of scope for AI tooling**:
- Autonomous commits to `companion/src/` (HITL discipline per design doc §10.3)
- Autonomous commits to `capstone/src/` (Phase 1.5)
- Final acceptance of any factual claim — human reviews every chapter before promotion to `validated` status

This guide follows the AI-collaboration disclosure norms set by ACM 2023, Nature 2023, and COPE 2023. AI tooling is not listed as an author; human authors take final responsibility.

See [`guides.brandon-behring.dev/methodology`](https://guides.brandon-behring.dev/methodology/) for the full workflow disclosure (skills, prompts, review steps, ADR-driven authoring discipline).

## Per-section authorship (when chapters land)

Per design doc v0.2 §10.2, each chapter MDX includes inline `<AICollaborationDisclosure>` for the chapter's primary author + AI tooling scope. Margins + sidenotes use `<PolicyRef>` for inline citation of disclosure norms.

## Contributing

PRs welcome for factual corrections, clarity improvements, and companion package fixes. See `README.md` for scope.
