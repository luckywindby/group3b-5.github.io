# Primary AI-Assisted Prompts for Polishing `web/index.html`

This file summarises how AI was used to help organise, polish, revise, and check the portfolio page `web/index.html`. It is prepared for coursework transparency: what was asked, what AI produced, what worked or did not work, and what human action followed.

## Overall AI-use boundary

AI was used as a polishing, review, and diagnostic tool for the portfolio page, not as the final author or final decision-maker. Outputs were only adopted after manual review, correction, and alignment with the real Campus Compass evidence.

The portfolio was not built by simply accepting AI output. AI suggestions were treated as prompts for human judgement: we checked whether they matched the coursework requirement, whether they were supported by real project evidence, and whether they made the team look transparent rather than dependent on AI.

## Main prompt directions

### Portfolio structure and evidence organisation

- Help organise the process portfolio into a clear sequence: process log, motivation, user requirements, ideation, technical implementation, contribution, evaluation, final reflection, AI disclosure, and references.
- Suggest how to connect poster-derived findings, implemented system features, field photos, alpha-test evidence, and final reflection in one coherent page.
- Check whether the portfolio narrative explains not only the final product, but also the process and decisions behind it.

### Bilingual polishing and refinement

- Polish English-Chinese explanations for sections such as motivation, requirements, evaluation, reflection, AI disclosure, and references.
- Make the final wording sound like a technical process portfolio rather than a marketing page.
- Keep the bilingual wording consistent with the actual project evidence and avoid unsupported claims.

### HTML/CSS/JS and submission-readiness checks

- Review whether local links, image paths, PDF links, CSV links, and `ai-logs` links would still work when the `web` folder is submitted.
- Check for obvious submission problems such as missing local resources, broken in-page anchors, placeholder text, merge-conflict markers, malformed Chinese text, missing image alt attributes, and script syntax errors.
- Suggest small HTML text edits when the reflection or AI disclosure did not match the coursework requirement closely enough.

## Two specific P/O/A examples

### Example 1: Reviewing whether the AI disclosure met the P/O/A requirement

**P - Prompt**

"Review the existing AI-use reflection in `web/index.html` against the coursework requirement. It should include two specific examples using P/O/A: Prompt, Outcome, and Action. Identify whether the current section is too general and whether it needs revision."

**O - Outcome**

Useful but incomplete. AI identified that the original `web/index.html` had AI disclosure and a prompt-cluster table, but it was too general and did not clearly satisfy the requirement for two specific P/O/A examples. This showed a real weakness in the reflection rather than giving a final answer to paste directly.

**A - Action**

The page was manually modified to include a dedicated P/O/A table with two concrete examples: Campus Memory and AI copy, plus route execution and launch readiness. We added our own judgement about what worked, what was too generic, what was rejected, and what evidence was used to verify the final claims. A human-control sentence was also added to make clear that AI supported review and diagnosis, not final decision-making.

### Example 2: Checking whether the portfolio was ready to submit

**P - Prompt**

"Check every part of `web/index.html`. Are there still any problems? Can it be submitted?"

**O - Outcome**

Useful as a diagnostic checklist. AI helped identify what should be checked before submission: section coverage, local resource paths, in-page anchors, placeholder text, HTML tag balance, image alt text, JavaScript syntax, and whether the AI reflection matched the coursework requirement. The result still needed human interpretation because passing technical checks does not automatically mean the portfolio is academically convincing.

**A - Action**

We reviewed the checklist results and decided the content was submission-ready because each major section had evidence and reflection. One practical adjustment was made: the AI evidence files were moved into `web/ai-logs`, and `web/index.html` links were changed from `../ai-logs/...` to `./ai-logs/...` so the evidence remains available when the `web` folder is submitted alone.

## Rejected or controlled AI output

AI-generated wording was not accepted automatically. Suggestions were edited or rejected when they sounded too generic, overstated the evidence, confused system-level AI use with portfolio-polishing AI use, or did not match the actual content of `web/index.html`.

## Human judgement shown in the final page

- The final section order follows the coursework logic, not an AI-generated template alone.
- Evidence selection is grounded in real artifacts: poster data, route-verification photos, alpha-test summaries, implemented features, and local files.
- The AI reflection deliberately includes partial success, rejected suggestions, fallback decisions, and verification steps to show critical use rather than dependency.
- The final wording avoids claiming that AI made the design decisions. It presents AI as support for polishing, checking, and reflection.
