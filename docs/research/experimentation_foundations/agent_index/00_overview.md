# 00. Overview — experimentation foundations

Synthesis (~200 words) of what the 14 indexed sources collectively establish.

**The A/B testing canon is anchored by one textbook + one industrial paper trail.** Kohavi, Tang & Xu's *Trustworthy Online Controlled Experiments* (Cambridge UP, 2020) is the foundational synthesis; the Microsoft ExP team's KDD papers (2012 puzzling outcomes, 2015 12-year keynote, 2019 SRM taxonomy) provide the case-study spine. Beyond Microsoft, Netflix (Xie & Aurisset 2016) supplied the first deeply-documented Netflix-scale deployment of post-assigned variance reduction. Facebook (Bakshy et al. 2014) contributed PlanOut, the canonical randomization framework.

**Variance reduction is the most mature methodological subfield.** The CUPED lineage runs from the original WSDM 2013 paper (Deng et al.) through Netflix industrial deployment (Xie & Aurisset 2016), a 10-year retrospective + reframing as a general augmentation framework (Deng et al. 2023), and a 2024 extension combining pre+in-experiment data at Etsy (Lin & Crespo 2024). Each extension generalizes prior work without replacing it.

**Pitfall research is dominated by Microsoft ExP.** The 2012 "Five Puzzling Outcomes" paper introduced Twyman's law to the OCE pedagogy; the 2019 SRM taxonomy provides actionable detection rules. Novelty/primacy estimation (Sadeghi et al. 2021) extends the toolkit beyond Microsoft.

**Statistical foundations remain anchored by the 2016 ASA p-value statement** for interpretive principles. Vendor practitioner docs (Statsig, Eppo) provide calculator-driven workflows but lower trust for pedagogy.

Foundations are stable; the field moves slowly. Most foundational disagreements are resolved; the open frontiers (sequential testing, network effects, bandits) live in the companion `experimentation_advanced` dossier.
