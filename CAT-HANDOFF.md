# Handoff: "Study Cat" mini game (for every hub)

Goal: a cat-based mini game that motivates the learner to keep studying. It must drop into **Geo Hub** (`~/Projects/geo-hub`, the owner's own geology app) and **Stats Hub** (`~/Projects/stats-hub`, Margo's 4ST601 statistics app), and any future hub built on the same engine.

Status: **idea agreed, nothing built yet.** Next step: either sketch the look first (mockup in chat) or build part 1 directly. Ask the user which.

## The idea

Studying feeds the cat. You can't grind the game instead of studying: the only way to grow the cat is to learn.

### Part 1: the cat (build first, it's the daily motivation)
- Every XP earned gives 🐟 fish: **1 fish per 10 XP**.
- Fish grows the cat in stages that line up with the existing levels: kitten → young cat → house cat → chonky legend.
- **Mood follows the streak:** purring if you studied today, sleepy after 1 day off, grumpy after 3+ days. Never dies or punishes; it's just happier when you show up.
- **Mastering a lecture (all 4 Mastery stars)** unlocks a room item (cat tree, yarn, fish tank, sunny window). Hub-themed items are optional: Geo (geode bed, mineral scratching post), Stats (bell-curve cushion, dice toy).
- Entry point: a small 🐱 button in the top bar opens the cat's room.
- The cat pops up briefly on level-up and on the daily goal (next to the existing confetti and toast).

### Part 2: "Pounce" mini game (60 seconds)
- A question from the current lecture's bank (`CUR.Q`, skip `x` extras) appears; the answers float as yarn balls. Tap the right one → the cat pounces.
- Combo for streaks of right answers (cat speeds up, spins). Wrong answer: cat trips on yarn, show the question's `e` explanation, add the id to `S.review` like the other games.
- **Costs 3 fish to play**, so the game is earned by studying and is still revision.
- Lives as a "🐾 Pounce" tile in the Games tab, next to Quick 5 / Lightning / Match / Type it.

## How to build it (same file for every hub)

- **One new file `lib/cat.js`** plus CSS in `index.html`. Load it with the other `lib/` scripts (like `lib/apply.js` in Stats Hub). Keep it plain JS, no build, no modules, relative paths.
- **XP hook:** every XP award goes through `xp(n, why)` in `app.js` (exposed as `GEO.xp`). Some calls inside `app.js` use the local `xp()` directly, so wrapping `GEO.xp` is not enough. Add one line inside `xp()` itself in each hub: `if (window.CAT) CAT.onXP(n);`.
- **Useful engine pieces** (both hubs' `app.js`): `lvOf(xp)` and `lvName(n)` for levels, `GOAL=150` daily XP, `S.streak = {n, last}`, `S.day = {d, xp}`, `toast()`, `confetti()`, `modal()`. Mastery stars: `mst(t).stars[k]` for k = 1..4 (Stats Hub `app.js` ~line 920).
- **Games tab:** `gamesInit()` and `startGame(g)` in `app.js` (Geo ~746/755, Stats ~824/833). Add a `data-g="pounce"` button to `#gamepick` in `index.html` and a branch in `startGame`. Read `S.games` for records.
- **Drawing:** draw the cat in inline SVG + CSS animations (idle tail swish, purr, pounce). No image files. Honour `prefers-reduced-motion`.
- **Saving and sync:** store the cat state in its own key (e.g. `localStorage "cat"` plus a sync extra `{fish, spent, items, best}`).
  - Stats Hub's `lib/firebase-sync.js` already has `GEOSync.register({key, get, set, merge})` + `GEOSync.touch()` (see how `lib/apply.js` registers `"ap"`). Register `"cat"`. Merge: max of fish earned and spent, union of items.
  - **Geo Hub's `lib/firebase-sync.js` does NOT have `register` yet.** Copy the EXTRAS / register / touch code from Stats Hub first.
  - Each hub's `firestore.rules` uses `hasOnlyAllowedFields([...])`. Add `'cat'` with a size-bounded validator and publish the rules in that hub's Firebase console (Geo: `geo-hub-96426`, Stats: `stats-hub-e516b`).
- **Service worker:** add `lib/cat.js` to the cache list in `sw.js` and bump the version (currently Geo `geo-hub-v2`, Stats `stats-hub-v6`).

## Rules (from the owner)

- Plain HTML/CSS/JS, no build, no npm, no frameworks.
- Works on a phone (16px gutters, no horizontal scroll) and in light + dark mode. Use existing CSS variables, never hard-coded colours. Keep colour meanings: accent = idea, amber = teacher said, red = exam trap, green = correct, cyan = analogy, grey = don't memorise.
- Don't rename or delete files. List the files you changed when done.
- Commit with `git -c user.name=mrsimonm -c user.email=322631765+mrsimonm@users.noreply.github.com commit`. **Ask before every push.**
- Read each hub's `HANDOFF.md` and `AGENTS.md` first. Preview locally with `.claude/launch.json` in stats-hub (configs `stats-hub` on port 8765, `geo-hub` on port 8766).

## Suggested order

1. Build `lib/cat.js` part 1 in Stats Hub, check it on a phone and in dark mode, and get the owner's OK on the look.
2. Add Pounce (part 2).
3. Add sync (`register "cat"` + rules).
4. Port to Geo Hub: copy `lib/cat.js`, add the `register` code to its firebase-sync, the one-line `xp()` hook, the CSS, the Games tile and the rules.
