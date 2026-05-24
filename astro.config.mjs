// @ts-check
/**
 * astro.config.mjs — guides-experimentation pilot.
 *
 * Phase 1 deploys to guides.brandon-behring.dev/experimentation/ via subroute
 * proxy from the hub repo. `base: '/experimentation/'` aligns Astro's link
 * generation with the deployed URL prefix.
 *
 * v4 (2026-05-24): migrated from `preset: 'research-portfolio'` to the
 * `styles: [researchPortfolioStyle, guidesFamilyStyle]` composition per
 * book-scaffold-astro v4.0.0. guidesFamilyStyle is inline-duplicated below.
 */
import {
  defineBookConfig,
  researchPortfolioStyle,
  defineStyle,
} from '@brandon_m_behring/book-scaffold-astro';

// Inline-duplicate of `guidesFamilyStyle` from ~/guides/shared/styles/guides-family.ts
// (the hub repo). Canonical source lives there. When extracted to npm package
// `@brandon-behring/guides-shared-style`, replace this with a direct import.
const guidesFamilyStyle = defineStyle({
  name: 'guides-family',
  site: 'https://guides.brandon-behring.dev',
  routes: { frontmatter: { enabled: true, prefix: '' } },
  deploy: 'pages',
});

export default await defineBookConfig({
  styles: [researchPortfolioStyle, guidesFamilyStyle],
  base: '/experimentation/',
});
