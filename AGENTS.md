# Statistics Hub: notes for the coding agent

A static, no-build study site for VŠE Prague Statistics (**4ST601**). Keep it plain HTML, CSS, and JS.

## Structure
- `index.html`: markup and all CSS. Loads Firebase compat SDK, `lib/firebase-config.js`, `lib/firebase-sync.js`, `lib/lecture-lib.js`, `app.js`, then calls `GEO.start()`.
- `app.js`: shared engine (Home with Test 1 / Test 2 / Test 3 cards, per-test view `#v-test`, lessons, quizzes, flashcards, games, 4-star Mastery, XP/streak, glossary, exam). Defines `window.GEO`.
- `courses/stats/course.json`: course metadata, `lectures[]`, and `tests[]` (`test1`, `test2`, `test3`).
- `courses/stats/lectures/tN/`: one folder per lecture (`lecture.json` + `steps.md`).

## Adding or changing lectures
New lectures are DATA, not code: a folder `courses/stats/lectures/tN/` with `lecture.json` + `steps.md`, listed in `courses/stats/course.json` (both in top-level `"lectures"` and in the relevant test's `"lectures"` array inside `"tests"`, removing it from `"planned"`). Read `AUTHORING.md` for the format and `PROMPT.md` for the generation prompt. After any change, validate with `node tools/validate.js` (or macOS `jsc` as shown in `HANDOFF.md`) and fix every ERROR.

## Rules
- No build step, no npm, no frameworks. Plain HTML, CSS, and JS.
- Script paths stay relative. Do not turn them into modules or bundle them.
- Must work on a phone (16px side gutters, no horizontal page scroll) and in light and dark mode. Use existing CSS variables, never hard-coded colours.
- Keep the colour meanings: accent = idea, amber = teacher said, red = exam trap, green = correct, cyan = analogy, grey = don't memorise.
- Statistics facts and formulas must match the 4ST601 slides (`slides/text/`). If unsure, leave a `TODO: verify` comment instead of guessing.
- In `facts`, use **exactly one** `{right|wrong1|wrong2|wrong3}` gap per sentence, and make sure the `right` answer is a plain keyboard-typable word, phrase, or number (no raw Greek letters or parenthesized formulas inside the gap).
- Inside Markdown tables in `steps.md`, escape literal pipes inside formulas (like `P(A\|B)`) as `\|`.
- When done, list the files you changed. Do not rename or delete files.
- Start with `HANDOFF.md`.
