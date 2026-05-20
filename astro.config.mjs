// @ts-check
/**
 * astro.config.mjs — guides-experimentation pilot.
 *
 * Phase 1 deploys to guides.brandon-behring.dev/experimentation/ via subroute
 * proxy from the hub repo. `base: '/experimentation/'` aligns Astro's link
 * generation with the deployed URL prefix.
 *
 * Phase 0b: local-dev only; no deployment yet.
 */
import { defineBookConfig } from '@brandon_m_behring/book-scaffold-astro';

export default await defineBookConfig({
  preset: 'research-portfolio',
  site: 'https://guides.brandon-behring.dev',
  base: '/experimentation/',
});
