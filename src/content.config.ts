/**
 * src/content.config.ts — Pilot guide content collections.
 *
 * Extends the scaffold's `researchPortfolioChapterSchema` with v0.2 pedagogical-
 * metadata fields per design doc v0.2 §15.2 + §17. This is the Phase 0b proof
 * that v0.2 schema fields parse, validate, and survive `astro check`/CI.
 *
 * Strategy (per design doc v0.2 §15.3 Round 5 lock):
 * - Pilot uses `research-portfolio` preset's chapter schema as the base
 * - v02 fields composed via Zod `.merge()`
 * - Bypass `defineBookSchemas()` for chapters since we need to:
 *     (a) override `chaptersBase` to ./src/content/experimentation/, and
 *     (b) substitute the merged schema.
 * - Upstream issue filed against book-scaffold-astro listing v0.2 fields proven
 *   generally-useful, for potential adoption in v3.6.0+ (Phase 1 follow-up).
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { researchPortfolioChapterSchema } from '@brandon_m_behring/book-scaffold-astro';
import { frontmatterCollection } from '@brandon_m_behring/book-scaffold-astro/schemas';

/**
 * v0.2 chapter-metadata extensions (design doc v0.2 §17 "7-fields-per-chapter").
 *
 * `mode` + `target` + `ordering` form the coherent-combinations matrix
 * checked by the (Phase 1 upstream) `book-scaffold validate` extension.
 * `commitment` declares maintenance bar. `paradigms` enables Dim 7 multi-
 * paradigm presentation (UDL variant blocked on scaffold v3.6.0+).
 */
const v02ChapterExtensions = z.object({
  mode: z.enum(['tutorial', 'how-to', 'reference', 'explanation']).optional(),
  target: z.enum(['retention', 'transfer', 'both']).optional(),
  ordering: z
    .enum(['concept-first', 'problem-first', 'construction-first'])
    .optional(),
  research_debt_addressed: z.string().optional(),
  commitment: z.enum(['long-lived', 'frozen', 'career-stage']).optional(),
  paradigms: z
    .array(z.enum(['default', 'udl', 'srl', 'andragogy']))
    .optional()
    .default(['default']),
  task_classes: z.array(z.string()).optional(),
  companion_modules: z.array(z.string()).optional(),
  los: z
    .array(
      z.object({
        id: z.string(),
        bloom: z.enum([
          'define',
          'explain',
          'calculate',
          'compare',
          'analyze',
          'design',
        ]),
        statement: z.string(),
        anchor: z.string(),
        threshold: z.boolean().optional().default(false),
      })
    )
    .optional(),
  load_targets: z
    .object({
      intrinsic: z.enum(['low', 'medium', 'high']).optional(),
      extraneous: z.enum(['low', 'medium', 'high']).optional(),
      germane: z.enum(['low', 'medium', 'high']).optional(),
    })
    .optional(),
});

const chapters = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './src/content/experimentation',
  }),
  schema: researchPortfolioChapterSchema.merge(v02ChapterExtensions),
});

const frontmatter = frontmatterCollection(
  z.object({
    slug: z.string(),
    title: z.string(),
    order: z.number(),
    description: z.string().optional(),
  })
);

export const collections = { chapters, frontmatter };
