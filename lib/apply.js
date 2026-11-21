/* Apply: real seminar exercises, copied one-to-one, solved inside the app.
   Layout: formulas for the topic on one side, the exercise (text, data table, parts) on the other.
   Each part: pick the formula you need, then type the number (checked with a small tolerance),
   or write an interpretation and compare it with the model answer. Correct parts give XP.
   Sets come from course.json "apply": [{id, title, file, topic?, test}]. Route: #ap-<set id>. */
(function () {
  "use strict";
  var KEY = "statsHub.apply";
  var A = { done: {}, miss: {}, notes: {}, cur: {} };
  try { var raw = JSON.parse(localStorage.getItem(KEY) || "null"); if (raw && typeof raw === "object") ["done", "miss", "notes", "cur"].forEach(function (k) { if (raw[k] && typeof raw[k] === "object") A[k] = raw[k]; }); } catch (e) {}
  function store() { try { localStorage.setItem(KEY, JSON.stringify(A)); } catch (e) {} }
  function save() { store(); if (window.GEOSync && GEOSync.touch) GEOSync.touch(); }
  /* Cloud sync (lib/firebase-sync.js): solved parts from either device count, the longer note wins. */
  function merge(a, b) {
    a = a || {}; b = b || {};
    var done = Object.assign({}, b.done || {}, a.done || {}), miss = Object.assign({}, b.miss || {}, a.miss || {}), notes = Object.assign({}, b.notes || {});
    Object.keys(done).forEach(function (k) { delete miss[k]; });
    Object.keys(a.notes || {}).forEach(function (k) { if (!notes[k] || String(a.notes[k]).length >= String(notes[k]).length) notes[k] = a.notes[k]; });
    return { done: done, miss: miss, notes: notes, cur: Object.assign({}, b.cur || {}, a.cur || {}) };
  }
  if (window.GEOSync && GEOSync.register) GEOSync.register({
    key: "ap",
    get: function () { return A; },
    set: function (m) { A.done = m.done || {}; A.miss = m.miss || {}; A.notes = m.notes || {}; A.cur = m.cur || {}; store(); },
    merge: merge
  });

  var DATA = {}, SET = null, D = null, box = null, tries = {}, EMB = null;
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function xp(n, why) { if (window.GEO && GEO.xp) GEO.xp(n, why); }
  function pk(ex, i) { return SET.id + ":" + ex.id + ":" + i; }

  function sets() { var a = window.GEO && GEO.course && GEO.course.apply; return Array.isArray(a) ? a : []; }
  function setById(id) { return sets().filter(function (s) { return s.id === id; })[0] || null; }
  function setFor(t) { return t ? sets().filter(function (s) { return s.topic === t.id; })[0] || null : null; }
  function has(t) { return !!setFor(t); }
  function load(s) {
    if (DATA[s.id]) return Promise.resolve(DATA[s.id]);
    return fetch((GEO.course.base || "") + s.file, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status + " " + r.statusText); return r.json(); })
      .then(function (d) { DATA[s.id] = d; return d; });
  }
  function stats(s) {
    var d = DATA[s.id]; if (!d) return null;
    var n = 0, k = 0, ex = 0, miss = 0;
    d.exercises.forEach(function (e) { var all = true; e.parts.forEach(function (p, i) { var key = s.id + ":" + e.id + ":" + i; n++; if (A.done[key]) k++; else all = false; if (A.miss[key]) miss++; }); if (all) ex++; });
    return { parts: n, done: k, ex: ex, total: d.exercises.length, miss: miss };
  }

  /* "0.25", "0,25", "1/4", "25%", "1 549.9", "−1.96" -> number */
  function num(s) {
    s = String(s || "").trim().replace(/−/g, "-").replace(/\s+/g, "").replace(/,(?=\d{3}(\D|$))/g, "").replace(",", ".");
    if (!s) return NaN;
    var pc = /%$/.test(s); if (pc) s = s.slice(0, -1);
    var m = /^(-?\d*\.?\d+)\/(\d*\.?\d+)$/.exec(s), v = m ? (+m[1]) / (+m[2]) : (/^-?\d*\.?\d+(e-?\d+)?$/i.test(s) ? +s : NaN);
    return pc ? v / 100 : v;
  }
  function close(v, p) {
    var a = p.ans, tol = p.tol != null ? p.tol : Math.max(5e-5, Math.abs(a) * 0.005);
    return Math.abs(v - a) <= tol;
  }

  function fname(id) { var f = window.GEOFormulas && GEOFormulas.byId(id); return f ? f.n : id; }
  function secOf(id) { var r = null; (window.GEOFormulas ? GEOFormulas.sections : []).forEach(function (s) { if (s.id === id) r = s; }); return r; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function options(part) {
    var pool = [];
    [].concat(D.formulas).forEach(function (sid) { var s = secOf(sid); ((s && s.items) || []).forEach(function (it) { if (it.id && part.f.indexOf(it.id) < 0) pool.push(it.id); }); });
    return shuffle([part.f[0]].concat(shuffle(pool).slice(0, 3)));
  }

  /* entry points */
  function open(t) { EMB = null; var s = setFor(t); if (s) openSet(s.id); else { box = document.getElementById("v-apply"); box.innerHTML = '<p class="lede">No seminar exercises for this lecture yet.</p>'; } }
  function openSet(id, exId) {
    EMB = null; SET = setById(id); box = document.getElementById("v-apply");
    if (!SET) { box.innerHTML = '<p class="lede">These exercises are not available.</p>'; return; }
    if (exId) { A.cur[SET.id] = exId; save(); }
    box.innerHTML = '<p class="lede">Loading the seminar exercises…</p>';
    load(SET).then(function (d) { D = d; draw(); }).catch(function (e) {
      box.innerHTML = '<p class="lede">The exercises could not be loaded (' + esc(e.message || e) + '). Check your connection and try again.</p>';
    });
  }

  function curEx() {
    var id = EMB ? EMB.ex : A.cur[SET.id], ex = null;
    D.exercises.forEach(function (e) { if (e.id === id) ex = e; });
    return ex || D.exercises[0];
  }
  function subText() { var s = stats(SET); return "Real exercises from the seminar file, word for word. " + s.ex + " of " + s.total + " exercises done · " + s.done + " of " + s.parts + " parts"; }
  function chipText(e) { var all = e.parts.every(function (p, j) { return A.done[SET.id + ":" + e.id + ":" + j]; }), miss = e.parts.some(function (p, j) { return A.miss[SET.id + ":" + e.id + ":" + j]; }); return e.id + (all ? " ✓" : miss ? " •" : ""); }

  function exDone(sid, e) { return e.parts.every(function (p, j) { return A.done[sid + ":" + e.id + ":" + j]; }); }

  /* Embedded mode (study path): one exercise, parts appear one at a time. */
  function drawEmbed() {
    var ex = curEx(), html = "", shown = 0;
    html += '<details class="ap-fx"><summary>∑ Formulas · ' + esc(sectionTitle()) + '</summary><div class="ap-fxbox"></div></details><div class="ap-task ap-emb">';
    html += '<p class="ap-exid">Seminar ' + esc(D.seminar) + ' · exercise <span style="text-transform:none">' + esc(ex.id) + "</span></p><p>" + esc(ex.text) + "</p>";
    (ex.tables || (ex.table ? [ex.table] : [])).forEach(function (tb) { html += tableHtml(tb); });
    if (ex.after) html += "<p>" + esc(ex.after) + "</p>";
    for (var i = 0; i < ex.parts.length; i++) {
      html += partHtml(ex, ex.parts[i], i); shown++;
      if (!A.done[pk(ex, i)]) break;
    }
    html += '<p class="ap-src">Question ' + Math.min(shown, ex.parts.length) + " of " + ex.parts.length + " · from the Seminar " + esc(D.seminar) + " exercise file</p>";
    html += '<details class="ap-nd"><summary>Your working (notes)</summary><textarea id="ap-notes" class="ap-notes" placeholder="Write your steps here, or use paper.">' + esc(A.notes[SET.id + ":" + ex.id] || "") + "</textarea></details></div>";
    box.innerHTML = html;
    fx([]);
  }
  function mount(el, setId, exId, opts) {
    if (!el.__apBound) { el.addEventListener("click", onClick); el.addEventListener("keydown", onKey); el.addEventListener("input", onInput); el.__apBound = 1; }
    box = el; SET = setById(setId); EMB = { ex: exId, onDone: (opts && opts.onDone) || null, fired: false };
    if (!SET) { el.innerHTML = '<p class="lede">This exercise is not available.</p>'; return; }
    el.innerHTML = '<p class="lede">Loading the exercise…</p>';
    load(SET).then(function (d) { D = d; drawEmbed(); if (EMB && EMB.onDone && exDone(SET.id, curEx())) { EMB.fired = true; EMB.onDone(true); } })
      .catch(function (e) { el.innerHTML = '<p class="lede">The exercise could not be loaded (' + esc(e.message || e) + "). Check your connection.</p>"; });
  }
  function isDone(setId, exId) {
    var d = DATA[setId]; if (!d) return false;
    var e = d.exercises.filter(function (x) { return x.id === exId; })[0];
    return !!e && exDone(setId, e);
  }

  function draw() {
    if (EMB) return drawEmbed();
    var ex = curEx(), html = "";
    if (!SET.topic) html += '<div class="row" style="margin-bottom:10px"><button type="button" class="ghost" data-go="test-' + esc(SET.test) + '">◂ Back to the test</button></div>';
    html += '<h2 style="margin:0">' + esc(D.title) + '</h2><p class="ap-sub">' + esc(subText()) + "</p>";
    if (D.intro) html += '<div class="ap-intro">' + D.intro + "</div>";
    html += '<div class="ap-chips" role="list">' + D.exercises.map(function (e) {
      return '<button type="button" class="ap-chip' + (e === ex ? " on" : "") + '" data-ex="' + esc(e.id) + '" role="listitem">' + esc(chipText(e)) + "</button>";
    }).join("") + "</div>";
    html += '<div class="ap-split"><details class="ap-fx" open><summary>∑ Formulas · ' + esc(sectionTitle()) + '</summary><div class="ap-fxbox"></div></details><div class="ap-task">';
    html += '<p class="ap-exid">Exercise <span style="text-transform:none">' + esc(ex.id) + "</span></p><p>" + esc(ex.text) + "</p>";
    (ex.tables || (ex.table ? [ex.table] : [])).forEach(function (tb) { html += tableHtml(tb); });
    if (ex.after) html += "<p>" + esc(ex.after) + "</p>";
    ex.parts.forEach(function (p, i) { html += partHtml(ex, p, i); });
    html += '<label class="ap-nl" for="ap-notes">Your working (saved on this device)</label><textarea id="ap-notes" class="ap-notes" placeholder="Write your steps here, or use paper.">' + esc(A.notes[SET.id + ":" + ex.id] || "") + "</textarea>";
    var k = D.exercises.indexOf(ex), nx = D.exercises[k + 1];
    html += '<div class="row" style="justify-content:space-between;margin-top:12px">' + (k > 0 ? '<button type="button" class="btn sec" data-ex="' + esc(D.exercises[k - 1].id) + '">← ' + esc(D.exercises[k - 1].id) + "</button>" : "<span></span>") + (nx ? '<button type="button" class="btn" data-ex="' + esc(nx.id) + '">Next: ' + esc(nx.id) + " →</button>" : "") + "</div>";
    html += '<p class="ap-src">Source: ' + esc(D.source) + "</p></div></div>";
    box.innerHTML = html;
    fx([]);
    if (window.matchMedia && matchMedia("(max-width: 899px)").matches) box.querySelector(".ap-fx").open = false;
  }
  function tableHtml(tb) {
    return (tb.caption ? '<p class="ap-cap">' + esc(tb.caption) + "</p>" : "") + '<div class="ap-tw"><table class="ap-t">' + (tb.head ? "<thead><tr>" + tb.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead>" : "") + "<tbody>" + tb.rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return (i === 0 && tb.rowHead !== false ? "<th>" : "<td>") + esc(c) + (i === 0 && tb.rowHead !== false ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  function sectionTitle() { return [].concat(D.formulas).map(function (id) { var s = secOf(id); return s ? s.title : id; }).join(" + "); }
  function fx(mark) {
    var b = box.querySelector(".ap-fxbox"); if (!b || !window.GEOFormulas) return;
    var ids = [].concat(D.formulas);
    b.innerHTML = ids.map(function (id, i) { return '<div class="ap-fxsec" data-i="' + i + '"></div>'; }).join("");
    ids.forEach(function (id, i) { GEOFormulas.renderInto(b.querySelector('.ap-fxsec[data-i="' + i + '"]'), id, mark); });
    var on = b.querySelector(".fx-on"); if (on && b.closest(".ap-fx").scrollHeight > b.closest(".ap-fx").clientHeight) on.scrollIntoView({ block: "nearest" });
  }

  function partHtml(ex, p, i) {
    var k = pk(ex, i), done = !!A.done[k], h = '<div class="ap-part' + (done ? " done" : "") + '" data-i="' + i + '"><p class="ap-q"><b>' + esc(p.q) + "</b></p>";
    if (p.f && p.f.length && !done) {
      h += '<p class="ap-step">1 · Which formula do you need?</p><div class="ap-opts">' + options(p).map(function (id) { return '<button type="button" class="ap-opt" data-f="' + esc(id) + '">' + esc(fname(id)) + "</button>"; }).join("") + "</div>";
    }
    var model = '<b>Model answer</b><br>' + esc(p.model) + (p.note ? '<br><small>' + esc(p.note) + "</small>" : "");
    if (p.type === "text") {
      if (done) h += '<p class="ap-ok">✓ Done</p><div class="ap-model">' + model + "</div>";
      else h += '<p class="ap-step">' + (p.f && p.f.length ? "2 · " : "") + 'Write your answer in words</p><textarea class="ap-in ap-txt" rows="3" placeholder="In plain words, what does it tell us?"></textarea><div class="row"><button type="button" class="btn sec" data-cmp>Compare with model answer</button><span class="ap-msg" role="status"></span></div><div class="ap-model" hidden>' + model + '<div class="row" style="margin-top:8px"><button type="button" class="btn" data-self="1">Got it</button><button type="button" class="btn sec" data-self="0">Missed it</button></div></div>';
    } else if (p.type === "choice") {
      if (done) h += '<p class="ap-ok">✓ ' + esc(p.options[p.right]) + "</p>" + (p.model ? '<div class="ap-model">' + esc(p.model) + "</div>" : "");
      else h += '<p class="ap-step">' + (p.f && p.f.length ? "2 · " : "") + 'Choose</p><div class="ap-opts">' + p.options.map(function (o, j) { return '<button type="button" class="ap-opt" data-ch="' + j + '">' + esc(o) + "</button>"; }).join("") + '</div><p class="ap-msg" role="status"></p>';
    } else {
      if (done) h += '<p class="ap-ok">✓ ' + esc(p.show) + (p.note ? ' <small class="ap-note">' + esc(p.note) + "</small>" : "") + "</p>" + (p.model ? '<div class="ap-model">' + esc(p.model) + "</div>" : "");
      else h += '<p class="ap-step">' + (p.f && p.f.length ? "2 · " : "") + 'Your answer</p><div class="row ap-row"><input class="ap-in" inputmode="decimal" autocomplete="off" placeholder="e.g. 0.25 or 1/4" aria-label="Answer for ' + esc(p.q) + '"><button type="button" class="btn" data-chk>Check</button></div><p class="ap-msg" role="status"></p>';
    }
    return h + "</div>";
  }

  function finish(ex, i, ok) { var k = pk(ex, i); if (ok) { A.done[k] = 1; delete A.miss[k]; } else A.miss[k] = 1; save(); }
  function redrawPart(ex, i) {
    if (EMB) {
      var all = exDone(SET.id, ex);
      if (all) xp(5, "exercise");
      drawEmbed();
      var nx = box.querySelectorAll(".ap-part"); nx = nx[nx.length - 1];
      if (nx && !all) { nx.scrollIntoView({ block: "nearest", behavior: "smooth" }); var inp = nx.querySelector("input.ap-in"); if (inp) setTimeout(function () { inp.focus({ preventScroll: true }); }, 250); }
      if (all && !EMB.fired) { EMB.fired = true; if (EMB.onDone) EMB.onDone(false); }
      return;
    }
    var old = box.querySelector('.ap-part[data-i="' + i + '"]'), tmp = document.createElement("div"); tmp.innerHTML = partHtml(ex, ex.parts[i], i);
    old.replaceWith(tmp.firstChild);
    var sub = box.querySelector(".ap-sub"); if (sub) sub.textContent = subText();
    var chip = box.querySelector('.ap-chip[data-ex="' + ex.id + '"]'); if (chip) chip.textContent = chipText(ex);
    if (ex.parts.every(function (p, j) { return A.done[pk(ex, j)]; })) { xp(5, "exercise"); if (GEO.toast) GEO.toast("Exercise " + ex.id + " done ✓"); }
  }

  function onClick(e) {
    var g = e.target.closest("[data-go]"); if (g) { GEO.go(g.getAttribute("data-go")); return; }
    if (!D) return;
    var b = e.target.closest("[data-ex]");
    if (b) { A.cur[SET.id] = b.getAttribute("data-ex"); save(); draw(); window.scrollTo(0, box.offsetTop - 80); return; }
    var ex = curEx(), part = e.target.closest(".ap-part"); if (!part) return;
    var i = +part.getAttribute("data-i"), p = ex.parts[i], k = pk(ex, i), msg = part.querySelector(".ap-msg");

    var o = e.target.closest(".ap-opt[data-f]");
    if (o) {
      if (part.getAttribute("data-picked")) return;
      var ok = p.f.indexOf(o.getAttribute("data-f")) >= 0;
      o.classList.add(ok ? "good" : "bad");
      if (ok) { part.setAttribute("data-picked", "1"); fx(p.f); xp(3, "formula"); var d = box.querySelector(".ap-fx"); if (d && !d.open) d.open = true; }
      return;
    }
    var c = e.target.closest(".ap-opt[data-ch]");
    if (c) {
      var right = +c.getAttribute("data-ch") === p.right;
      if (right) { finish(ex, i, true); xp(10, "answer"); if (p.f) fx(p.f); redrawPart(ex, i); }
      else { c.classList.add("bad"); A.miss[k] = 1; save(); msg.className = "ap-msg bad"; msg.textContent = "Not this one. Think again."; }
      return;
    }
    if (e.target.closest("[data-chk]")) {
      var inp = part.querySelector(".ap-in"), v = num(inp.value);
      if (isNaN(v)) { msg.className = "ap-msg bad"; msg.textContent = "Type a number first, e.g. 0.25 or 1/4."; return; }
      if (close(v, p)) { finish(ex, i, true); xp(10, "answer"); if (p.f) fx(p.f); redrawPart(ex, i); return; }
      tries[k] = (tries[k] || 0) + 1; A.miss[k] = 1; save();
      msg.className = "ap-msg bad";
      msg.innerHTML = tries[k] < 2 ? (p.hint ? esc(p.hint) : "Not quite. Check which formula fits, then try again.") : 'Not quite. <button type="button" class="ghost" data-reveal>Show the answer</button>';
      return;
    }
    if (e.target.closest("[data-reveal]")) {
      msg.className = "ap-msg"; msg.innerHTML = "Answer: <b>" + esc(p.show) + "</b>" + (p.note ? ' <small class="ap-note">' + esc(p.note) + "</small>" : "") + (p.model ? "<br>" + esc(p.model) : "") + "<br>Type it in to finish the part. It stays in your missed list.";
      if (p.f) fx(p.f); return;
    }
    if (e.target.closest("[data-cmp]")) {
      var ta = part.querySelector(".ap-txt");
      if (!ta.value.trim()) { msg.className = "ap-msg bad"; msg.textContent = "Write your answer first."; return; }
      msg.textContent = ""; part.querySelector(".ap-model").hidden = false; return;
    }
    var sf = e.target.closest("[data-self]");
    if (sf) { var got = sf.getAttribute("data-self") === "1"; finish(ex, i, got); if (got) { xp(10, "interpretation"); redrawPart(ex, i); } else { msg.className = "ap-msg"; msg.textContent = "Saved to your missed list. Read the model answer once more."; } }
  }
  function onKey(e) {
    if (e.key === "Enter" && e.target.tagName === "INPUT" && e.target.classList.contains("ap-in")) {
      e.preventDefault(); var b = e.target.closest(".ap-part").querySelector("[data-chk]"); if (b) b.click();
    }
  }
  function onInput(e) {
    if (e.target.id === "ap-notes") { A.notes[SET.id + ":" + curEx().id] = e.target.value; save(); return; }
    if (e.target.classList.contains("ap-in")) { var m = e.target.closest(".ap-part").querySelector(".ap-msg"); if (m && !m.querySelector("[data-reveal]")) m.textContent = ""; }
  }

  /* Sets shown for a test; a test with "all": true (the final exam) gets every set. */
  function setsFor(testId) {
    var t = ((window.GEO && GEO.course && GEO.course.tests) || []).filter(function (x) { return x.id === testId; })[0];
    return sets().filter(function (s) { return s.test === testId || (t && t.all); });
  }

  /* Block for the test page: one card per seminar set, plus a random-exercise button. */
  function testBlock(testId) {
    var list = setsFor(testId);
    if (!list.length) return "";
    var h = '<h2 style="margin-top:20px">✏️ Practise the real seminar exercises</h2><p class="lede" style="font-size:.98rem">This is what the test asks: data, a formula, a number, and what it means. Formula sheet and tables are always one tap away.</p><div class="grid ap-tgrid" data-test="' + esc(testId) + '">';
    h += list.map(function (s) { return '<button class="mcard" data-go="ap-' + esc(s.id) + '"><b>' + esc(s.title) + '</b><small class="ap-ts" data-set="' + esc(s.id) + '">Loading…</small></button>'; }).join("");
    h += '</div><div class="row" style="margin-top:10px"><button class="btn" data-aprand="' + esc(testId) + '">🎲 Random unfinished exercise</button></div>';
    setTimeout(function () {
      list.forEach(function (s) {
        load(s).then(function () {
          var el = document.querySelector('.ap-ts[data-set="' + s.id + '"]'), st = stats(s);
          if (el) el.textContent = st.ex + " of " + st.total + " exercises done" + (st.miss ? " · " + st.miss + " to retry" : "");
        }).catch(function () { var el = document.querySelector('.ap-ts[data-set="' + s.id + '"]'); if (el) el.textContent = "Needs a connection the first time"; });
      });
    }, 0);
    return h;
  }
  function randomFor(testId) {
    var list = setsFor(testId);
    Promise.all(list.map(load)).then(function () {
      var pool = [];
      list.forEach(function (s) { DATA[s.id].exercises.forEach(function (e) { if (!e.parts.every(function (p, i) { return A.done[s.id + ":" + e.id + ":" + i]; })) pool.push([s.id, e.id]); }); });
      if (!pool.length) { if (GEO.toast) GEO.toast("Every exercise is done. Brilliant! 🎉", true); return; }
      var pick = pool[Math.floor(Math.random() * pool.length)];
      A.cur[pick[0]] = pick[1]; save(); GEO.go("ap-" + pick[0]);
    });
  }
  document.addEventListener("click", function (e) { var r = e.target.closest("[data-aprand]"); if (r) randomFor(r.getAttribute("data-aprand")); });

  function init() {
    var v = document.getElementById("v-apply"); if (!v) return;
    v.addEventListener("click", onClick); v.addEventListener("keydown", onKey); v.addEventListener("input", onInput);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();

  window.GEOApply = { has: has, open: open, openSet: openSet, setById: setById, testBlock: testBlock, stats: stats, load: load, mount: mount, isDone: isDone, sets: sets };
})();
