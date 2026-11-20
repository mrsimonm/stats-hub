/* Apply: real seminar exercises, copied one-to-one, solved inside the app.
   Layout: formulas for the topic on one side, the exercise (text, data table, parts) on the other.
   Each part: pick the formula you need, then type the number (checked with a small tolerance),
   or write an interpretation and compare it with the model answer. Correct parts give XP.
   Data: courses/<course>/<apply path from course.json "apply">, e.g. apply/t7.json. */
(function () {
  "use strict";
  var KEY = "statsHub.apply";
  var A = { done: {}, miss: {}, notes: {}, cur: {} };
  try { var raw = JSON.parse(localStorage.getItem(KEY) || "null"); if (raw && typeof raw === "object") ["done", "miss", "notes", "cur"].forEach(function (k) { if (raw[k] && typeof raw[k] === "object") A[k] = raw[k]; }); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(A)); } catch (e) {} }

  var DATA = {}, T = null, D = null, box = null, tries = {};
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function xp(n, why) { if (window.GEO && GEO.xp) GEO.xp(n, why); }
  function pk(ex, i) { return T.id + ":" + ex.id + ":" + i; }

  function path(t) { var m = (GEO.course && GEO.course.apply) || {}; return m[t.id] ? (GEO.course.base || "") + m[t.id] : null; }
  function has(t) { return !!path(t); }
  function load(t) {
    if (DATA[t.id]) return Promise.resolve(DATA[t.id]);
    return fetch(path(t), { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status + " " + r.statusText); return r.json(); })
      .then(function (d) { DATA[t.id] = d; return d; });
  }
  function stats(t) {
    var d = DATA[t.id]; if (!d) return null;
    var n = 0, k = 0, ex = 0;
    d.exercises.forEach(function (e) { var all = true; e.parts.forEach(function (p, i) { n++; if (A.done[t.id + ":" + e.id + ":" + i]) k++; else all = false; }); if (all) ex++; });
    return { parts: n, done: k, ex: ex, total: d.exercises.length };
  }

  /* "0.25", "0,25", "1/4", "25%", "1 549.9" -> number */
  function num(s) {
    s = String(s || "").trim().replace(/\s+/g, "").replace(/,(?=\d{3}(\D|$))/g, "").replace(",", ".");
    if (!s) return NaN;
    var pc = /%$/.test(s); if (pc) s = s.slice(0, -1);
    var m = /^(-?\d*\.?\d+)\/(\d*\.?\d+)$/.exec(s), v = m ? (+m[1]) / (+m[2]) : (/^-?\d*\.?\d+(e-?\d+)?$/i.test(s) ? +s : NaN);
    return pc ? v / 100 : v;
  }
  function close(v, a) { return Math.abs(v - a) <= Math.max(5e-5, Math.abs(a) * 0.005); }

  function fname(id) { var f = window.GEOFormulas && GEOFormulas.byId(id); return f ? f.n : id; }
  function options(part) {
    var right = part.f[0], sec = null;
    (window.GEOFormulas ? GEOFormulas.sections : []).forEach(function (s) { if (s.id === D.formulas) sec = s; });
    var pool = ((sec && sec.items) || []).filter(function (it) { return it.id && part.f.indexOf(it.id) < 0; }).map(function (it) { return it.id; });
    for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = pool[i]; pool[i] = pool[j]; pool[j] = x; }
    var o = [right].concat(pool.slice(0, 3));
    for (i = o.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); x = o[i]; o[i] = o[j]; o[j] = x; }
    return o;
  }

  function open(t) {
    T = t; box = document.getElementById("v-apply");
    if (!has(t)) { box.innerHTML = '<p class="lede">No seminar exercises for this lecture yet.</p>'; return; }
    box.innerHTML = '<p class="lede">Loading the seminar exercises…</p>';
    load(t).then(function (d) { D = d; draw(); }).catch(function (e) {
      box.innerHTML = '<p class="lede">The exercises could not be loaded (' + esc(e.message || e) + '). Check your connection and try again.</p>';
    });
  }

  function curEx() {
    var id = A.cur[T.id], ex = null;
    D.exercises.forEach(function (e) { if (e.id === id) ex = e; });
    return ex || D.exercises[0];
  }

  function draw() {
    var ex = curEx(), s = stats(T), html = "";
    html += '<div class="ap-top"><div><h2 style="margin:0">' + esc(D.title) + '</h2><p class="ap-sub">Real exercises from the seminar file, word for word. ' + s.ex + " of " + s.total + " exercises done · " + s.done + " of " + s.parts + " parts</p></div></div>";
    html += '<div class="ap-chips" role="list">' + D.exercises.map(function (e) {
      var all = e.parts.every(function (p, i) { return A.done[T.id + ":" + e.id + ":" + i]; });
      var miss = e.parts.some(function (p, i) { return A.miss[T.id + ":" + e.id + ":" + i]; });
      return '<button type="button" class="ap-chip' + (e === ex ? " on" : "") + '" data-ex="' + esc(e.id) + '" role="listitem">' + esc(e.id) + (all ? " ✓" : miss ? " •" : "") + "</button>";
    }).join("") + "</div>";
    html += '<div class="ap-split"><details class="ap-fx" open><summary>∑ Formulas · ' + esc(sectionTitle()) + '</summary><div class="ap-fxbox"></div></details><div class="ap-task">';
    html += '<p class="ap-exid">Exercise <span style="text-transform:none">' + esc(ex.id) + "</span></p><p>" + esc(ex.text) + "</p>";
    if (ex.table) html += '<div class="ap-tw"><table class="ap-t"><thead><tr>' + ex.table.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" + ex.table.rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return (i === 0 ? "<th>" : "<td>") + esc(c) + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    if (ex.after) html += "<p>" + esc(ex.after) + "</p>";
    ex.parts.forEach(function (p, i) { html += partHtml(ex, p, i); });
    html += '<label class="ap-nl" for="ap-notes">Your working (saved on this device)</label><textarea id="ap-notes" class="ap-notes" placeholder="Write your steps here, or use paper.">' + esc(A.notes[T.id + ":" + ex.id] || "") + "</textarea>";
    var k = D.exercises.indexOf(ex), nx = D.exercises[k + 1];
    html += '<div class="row" style="justify-content:space-between;margin-top:12px">' + (k > 0 ? '<button type="button" class="btn sec" data-ex="' + esc(D.exercises[k - 1].id) + '">← ' + esc(D.exercises[k - 1].id) + "</button>" : "<span></span>") + (nx ? '<button type="button" class="btn" data-ex="' + esc(nx.id) + '">Next: ' + esc(nx.id) + " →</button>" : "") + "</div>";
    html += '<p class="ap-src">Source: ' + esc(D.source) + "</p></div></div>";
    box.innerHTML = html;
    fx(ex, []);
    if (window.matchMedia && matchMedia("(max-width: 899px)").matches) box.querySelector(".ap-fx").open = false;
  }
  function sectionTitle() { var t = ""; (window.GEOFormulas ? GEOFormulas.sections : []).forEach(function (s) { if (s.id === D.formulas) t = s.title; }); return t; }
  function fx(ex, mark) { var b = box.querySelector(".ap-fxbox"); if (b && window.GEOFormulas) GEOFormulas.renderInto(b, D.formulas, mark); }

  function partHtml(ex, p, i) {
    var k = pk(ex, i), done = !!A.done[k], h = '<div class="ap-part' + (done ? " done" : "") + '" data-i="' + i + '"><p class="ap-q"><b>' + esc(p.q) + "</b></p>";
    if (p.f && p.f.length && !done) {
      h += '<p class="ap-step">1 · Which formula do you need?</p><div class="ap-opts">' + options(p).map(function (id) { return '<button type="button" class="ap-opt" data-f="' + esc(id) + '">' + esc(fname(id)) + "</button>"; }).join("") + "</div>";
    }
    if (p.type === "text") {
      if (done) h += '<p class="ap-ok">✓ Done</p><div class="ap-model"><b>Model answer</b><br>' + esc(p.model) + (p.note ? '<br><small>' + esc(p.note) + "</small>" : "") + "</div>";
      else h += '<p class="ap-step">2 · Write your interpretation</p><textarea class="ap-in ap-txt" rows="3" placeholder="In plain words, what does this value tell us?"></textarea><div class="row"><button type="button" class="btn sec" data-cmp>Compare with model answer</button><span class="ap-msg" role="status"></span></div><div class="ap-model" hidden><b>Model answer</b><br>' + esc(p.model) + (p.note ? '<br><small>' + esc(p.note) + "</small>" : "") + '<div class="row" style="margin-top:8px"><button type="button" class="btn" data-self="1">Got it</button><button type="button" class="btn sec" data-self="0">Missed it</button></div></div>';
    } else {
      if (done) h += '<p class="ap-ok">✓ ' + esc(p.show) + (p.note ? ' <small class="ap-note">' + esc(p.note) + "</small>" : "") + "</p>";
      else h += '<p class="ap-step">2 · Your answer</p><div class="row ap-row"><input class="ap-in" inputmode="decimal" autocomplete="off" placeholder="e.g. 0.25 or 1/4" aria-label="Answer for ' + esc(p.q) + '"><button type="button" class="btn" data-chk>Check</button></div><p class="ap-msg" role="status"></p>';
    }
    return h + "</div>";
  }

  function partEl(i) { return box.querySelector('.ap-part[data-i="' + i + '"]'); }
  function finish(ex, i, ok) {
    var k = pk(ex, i);
    if (ok) { A.done[k] = 1; delete A.miss[k]; } else A.miss[k] = 1;
    save();
  }
  function redrawPart(ex, i) {
    var old = partEl(i), tmp = document.createElement("div"); tmp.innerHTML = partHtml(ex, ex.parts[i], i);
    old.replaceWith(tmp.firstChild);
    var s = stats(T), sub = box.querySelector(".ap-sub");
    if (sub) sub.textContent = "Real exercises from the seminar file, word for word. " + s.ex + " of " + s.total + " exercises done · " + s.done + " of " + s.parts + " parts";
    var chip = box.querySelector('.ap-chip[data-ex="' + ex.id + '"]');
    if (chip) chip.textContent = ex.id + (ex.parts.every(function (p, j) { return A.done[pk(ex, j)]; }) ? " ✓" : ex.parts.some(function (p, j) { return A.miss[pk(ex, j)]; }) ? " •" : "");
    if (ex.parts.every(function (p, j) { return A.done[pk(ex, j)]; })) { xp(5, "exercise"); if (GEO.toast) GEO.toast("Exercise " + ex.id + " done ✓"); }
  }

  function onClick(e) {
    if (!D) return;
    var b = e.target.closest("[data-ex]");
    if (b) { A.cur[T.id] = b.getAttribute("data-ex"); save(); draw(); window.scrollTo(0, box.offsetTop - 80); return; }
    var ex = curEx(), part = e.target.closest(".ap-part"); if (!part) return;
    var i = +part.getAttribute("data-i"), p = ex.parts[i], k = pk(ex, i), msg = part.querySelector(".ap-msg");

    var o = e.target.closest(".ap-opt");
    if (o) {
      if (part.getAttribute("data-picked")) return;
      var ok = p.f.indexOf(o.getAttribute("data-f")) >= 0;
      o.classList.add(ok ? "good" : "bad");
      if (ok) { part.setAttribute("data-picked", "1"); fx(ex, p.f); xp(3, "formula"); var d = box.querySelector(".ap-fx"); if (d && !d.open) d.open = true; }
      return;
    }
    if (e.target.closest("[data-chk]")) {
      var inp = part.querySelector(".ap-in"), v = num(inp.value);
      if (isNaN(v)) { msg.className = "ap-msg bad"; msg.textContent = "Type a number first, e.g. 0.25 or 1/4."; return; }
      if (close(v, p.ans)) { finish(ex, i, true); xp(10, "answer"); fx(ex, p.f); redrawPart(ex, i); return; }
      tries[k] = (tries[k] || 0) + 1; A.miss[k] = 1; save();
      msg.className = "ap-msg bad";
      msg.innerHTML = tries[k] < 2 ? "Not quite. Check which formula fits, then try again." : 'Not quite. <button type="button" class="ghost" data-reveal>Show the answer</button>';
      return;
    }
    if (e.target.closest("[data-reveal]")) {
      msg.className = "ap-msg"; msg.innerHTML = "Answer: <b>" + esc(p.show) + "</b>" + (p.note ? ' <small class="ap-note">' + esc(p.note) + "</small>" : "") + ". Try typing it in to see how it is written, then move on. This part stays in your missed list.";
      fx(ex, p.f); return;
    }
    if (e.target.closest("[data-cmp]")) {
      var ta = part.querySelector(".ap-txt");
      if (!ta.value.trim()) { msg.className = "ap-msg bad"; msg.textContent = "Write your interpretation first."; return; }
      msg.textContent = ""; part.querySelector(".ap-model").hidden = false; return;
    }
    var sf = e.target.closest("[data-self]");
    if (sf) { var got = sf.getAttribute("data-self") === "1"; finish(ex, i, got); if (got) { xp(10, "interpretation"); redrawPart(ex, i); } else { msg.className = "ap-msg"; msg.textContent = "Saved to your missed list. Read the model answer once more."; } }
  }
  function onKey(e) {
    if (e.key === "Enter" && e.target.classList && e.target.classList.contains("ap-in") && e.target.tagName === "INPUT") {
      e.preventDefault(); var b = e.target.closest(".ap-part").querySelector("[data-chk]"); if (b) b.click();
    }
  }
  function onInput(e) {
    if (e.target.id === "ap-notes") { A.notes[T.id + ":" + curEx().id] = e.target.value; save(); return; }
    if (e.target.classList.contains("ap-in")) { var m = e.target.closest(".ap-part").querySelector(".ap-msg"); if (m && !m.querySelector("[data-reveal]")) m.textContent = ""; }
  }

  function init() {
    var v = document.getElementById("v-apply"); if (!v) return;
    v.addEventListener("click", onClick); v.addEventListener("keydown", onKey); v.addEventListener("input", onInput);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();

  window.GEOApply = { has: has, open: open, stats: stats, load: load };
})();
