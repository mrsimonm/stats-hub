# Statistics Hub (4ST601 · VŠE Prague)

A static, offline-capable study web app for **4ST601 Statistics** at VŠE Prague (step-by-step lessons, 4-star Mastery, flashcards, games, mock tests, review, and a course-wide dictionary), with optional Firebase Google Sign-In sync.

## Run locally & validate
```bash
python3 -m http.server 8000      # open http://localhost:8000
node tools/validate.js           # must print "OK: no errors"
```

## Course structure (13 weeks, 4 logical modules)
- **Module 1 — Descriptive Statistics (Lectures 1–5):**
  1. Data preparation & basic operations
  2. Frequency tables, quantiles & central tendency
  3. Central tendency & variation
  4. Contingency tables & ANOVA
  5. Correlation & regression analysis
- **Module 2 — Time Series & Index Numbers (Lectures 6–7, 13):**
  6. Time series: means, dynamics, indices & trends
  7. Time series: moving averages & seasonal component
  13. Index numbers
- **Module 3 — Probability & Distributions (Lectures 8–9):**
  8. Probability, random variables & distributions
  9. Important probability distributions
- **Module 4 — Statistical Inference (Lectures 10–12):**
  10. Point & interval estimates
  11. Hypothesis tests: mean, proportion & goodness-of-fit
  12. Hypothesis tests: contingency tables, ANOVA & correlation

## Where things live
- `courses/stats/course.json`: course metadata, active `lectures[]`, and `planned[]`
- `courses/stats/lectures/tN/`: each lecture (`lecture.json` + `steps.md`)
- `templates/lecture/`: starting template for a new lecture
- `slides/` & `slides/text/`: lecture PDFs (1–9 + rules, formulas, sample final test) and extracted text
- `transcripts/`: Wispr lecture/seminar transcripts
- `exercises/`: seminar exercise `.docx` files (topics 1–13)
- `AUTHORING.md`, `PROMPT.md`, `AGENTS.md`: format & AI authoring rules
