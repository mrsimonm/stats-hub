# Statistics Hub: handoff for Claude, Claude Code, or Antigravity

Read this first, then `AGENTS.md` (the hard rules), then `AUTHORING.md` (the lecture data format) and `PROMPT.md`.

## What this is

A study web app for the statistics course **VŠE 4ST601** (Prague University of Economics and Business / Vysoká škola ekonomická v Praze). It turns lecture slides, seminar exercises, and class recordings into step-by-step lessons, flashcards, games, mock tests, a four-star Mastery mode, a searchable dictionary, and per-test exam practice (**Test 1**, **Test 2**, and **Test 3 / Final Exam**).

- Live site: https://mrsimonm.github.io/stats-hub/ (GitHub Pages, served from `main` branch root)
- Repo: https://github.com/mrsimonm/stats-hub (public)
- Project folder on this Mac: `/Users/simonmusel/Projects/stats-hub`
- Works offline as an installable PWA (`sw.js`, cache `stats-hub-v1`).
- Progress is saved locally in `localStorage` (`statsHub.v1`) and optionally synced to Firebase Firestore (`users/{uid}` in project `geo-hub-96426`) when signed in with Google.

## Hard rules (summary; full list in AGENTS.md)

- Plain HTML, CSS, and JS. **No build step, no npm, no frameworks, no modules, no bundling.**
- Must work on a phone (16px side gutters, no horizontal scrolling) and in light and dark mode. Use existing CSS variables, never hard-coded colours.
- Colour meanings: accent = idea, amber = teacher said, red = exam trap, green = correct, cyan = analogy, grey = don't memorise.
- **Statistics facts & formulas must be accurate** and match the 4ST601 slides and official formula sheet (`slides/0-formulas.pdf`). If unsure, write `TODO: verify` instead of guessing.
- **Math/symbol rules for Mastery & Vocabulary:**
  - In `facts`, each item must have **exactly one** `{right|wrong1|wrong2|wrong3}` gap, and the `right` answer inside `{...}` must be a **plain keyboard-typable word, phrase, or number** (e.g. `Poisson`, `standard deviation`, `0.05`, `30`, `Student's t`). Never put raw Greek letters (`λ`, `μ`, `σ`) or parenthesized expressions (`(X - μ) / σ`, `P(A)`) as the right answer inside `{...}`, because `normT()` strips parentheses and non-ASCII symbols in Mastery Star 3 & 4 typing mode.
  - In `vocab`, keep `term` names clean (or put notation inside parentheses, e.g. `"Expected value (E(X))"` or `"Binomial distribution"` with `Bi(n, π)` in `meaning`) so glossary tap-popups (`glossify`) and the Type-it game match the plain English term.
  - Inside Markdown tables in `steps.md`, escape literal vertical bars (such as conditional probability `P(A\|B)`) as `\|`.
- Do not rename or delete files. List every file you changed at the end.
- Commit with the GitHub noreply identity:
  ```bash
  git -c user.name=mrsimonm -c user.email=322631765+mrsimonm@users.noreply.github.com commit
  ```

## How to run and check

```bash
python3 -m http.server 8000      # then open http://localhost:8000
node tools/validate.js           # or run GeoLecture.validate via macOS jsc (must report 0 errors)
```

If `node` is not installed on the Mac, run validation with macOS JavaScriptCore (`jsc`):
```bash
/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc -e '
var self={}; eval(read("lib/lecture-lib.js"));
var C=JSON.parse(read("courses/stats/course.json"));
C.lectures.forEach(function(p){
  var r=self.GeoLecture.validate(JSON.parse(read("courses/stats/"+p+"/lecture.json")), read("courses/stats/"+p+"/steps.md"));
  print(p+": errors="+r.errors.length+" warnings="+r.warnings.length);
  r.errors.forEach(print); r.warnings.forEach(print);
});
'
```

## File map

| Path | What it is |
|---|---|
| `index.html` | The page and all CSS. Loads Firebase compat SDK, `lib/firebase-config.js`, `lib/firebase-sync.js`, `lib/lecture-lib.js`, `app.js`, then calls `GEO.start()`. |
| `app.js` | The engine: Home (with Test 1 / Test 2 / Test 3 phase cards), per-test view (`#v-test`), lessons, quizzes, flashcards, games, 4-star Mastery, XP/streak, glossary, final exam. |
| `lib/lecture-lib.js` | Turns a data lecture (`lecture.json` + `steps.md`) into the engine's topic object and validates it. |
| `lib/firebase-config.js` & `lib/firebase-sync.js` | Optional Google Sign-In + Firestore cloud sync (`users/{uid}`). |
| `firestore.rules` | Firestore security rules for `users/{userId}`. |
| `courses/stats/course.json` | The 4ST601 course config: lists active `lectures[]` and groups them into `tests[]` (`test1`, `test2`, `test3`). |
| `courses/stats/lectures/tN/` | Data lectures (`lecture.json` + `steps.md`). Currently `t7`, `t8`, `t9` are built and active. |
| `templates/lecture/` | Starting template for a new lecture. |
| `slides/` & `slides/text/` | Course PDFs and their extracted text (`0-general-rules`, `0-formulas`, `0-final-test-examples`, and lectures `1` to `9`). |
| `transcripts/` | Wispr lecture/seminar recordings transcribed to Markdown. |
| `exercises/` | All 13 seminar exercise `.docx` files (`1basic.docx` through `13_Exercises_index_numbers...`). |
| `tools/validate.js` & `tools/pdf-to-text.swift` | Validator and macOS PDF text extractor (`swift tools/pdf-to-text.swift in.pdf out.txt`). |

## How the 4ST601 course & Test phases are organised

In `courses/stats/course.json`, the Home screen is divided into three exam phases under `"tests"`:

1. **Test 1 · Mid-term 1 (`test1`)** — *Already completed on 13 Nov (Seminar 7).*
   Covers Seminars 1–6 (Descriptive statistics, frequency tables & quantiles, central tendency & variation, contingency tables & ANOVA, correlation & regression, time series dynamics & trends). Slides (`1`–`6` in `slides/`), transcripts (`transcripts/`), and exercises (`exercises/1`–`7A`) are in the repo if needed later for Test 3 (Final Exam) review.
2. **Test 2 · Mid-term 2 (`test2`)** — *Current focus · 18 Dec (Seminar 12).*
   - **Important numbering note:** In VŠE 4ST601, lecture numbers are offset by 1 from seminar numbers after the time-series lectures:
     - `lectures/t7` (from `Lecture7.pdf` / `slides/text/7-time-series-seasonal.txt`) = **Seminar 8: Probability & Random Variables** (DONE)
     - `lectures/t8` (from `Lecture8.pdf` / `slides/text/8-probability-random-variables.txt`) = **Seminar 9: Sampling & Probability Distributions** (DONE)
     - `lectures/t9` (from `Lecture9.pdf` / `slides/text/9-probability-distributions.txt`) = **Seminar 10: Sampling & Statistical Inference: Estimates** (DONE)
   - **Still to build for Test 2 (when slides arrive, or from `exercises/` + `0-formulas.txt` + `0-final-test-examples.txt`):**
     - **Seminar 11 (11 Dec):** Statistical hypothesis tests (population mean, population proportion, goodness-of-fit test) — exercises in `exercises/11_Exercises_hypothesis_testing_parameters_gof_test_after_seminar11_v2.1.docx`
     - **Seminar 12 (18 Dec · TEST 2):** Statistical hypothesis tests (contingency tables, ANOVA, correlation analysis, regression line, linear trend) — exercises in `exercises/12A_hypothesis_testing_conttab_ANOVA_corranal_regline_lineartrend_after_seminars12_13_v2.3.docx`
3. **Test 3 · Final Exam (`test3`)** — *Exam period (`"all": true`).*
   Includes all active lectures in the course plus **Seminar 13 (21 Dec): Index numbers** (`exercises/13_Exercises_index_numbers_after_seminar13_v2.01.docx`) and any Test 1 lectures added later for comprehensive final review.
