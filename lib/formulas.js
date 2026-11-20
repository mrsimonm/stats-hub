/* Formula panel: a "∑ Formulas" button in the top bar that rolls down the 4ST601 formula sheet on every screen.
   Each section shows the official sheet page (formulas/sheet-pN.jpg). Sections with "items" also have a typed,
   named version (KaTeX, loaded from cdnjs on first open). Typed formulas are copied from slides/0-formulas.pdf. */
(function () {
  "use strict";

  var SECTIONS = [
    { id: "desc", title: "Descriptive statistics", page: 2 },
    { id: "dep", title: "Dependence (contingency, correlation, regression)", page: 3 },
    { id: "ts", title: "Time series", page: 4, items: [
      { g: "Means of a time series" },
      { n: "Mean of an interval time series", tex: "\\bar y=\\dfrac{\\sum_{t=1}^{n} y_t}{n}" },
      { n: "Chronological mean (stock series, equal spacing)", tex: "\\bar y=\\dfrac{\\tfrac12 y_1+\\sum_{t=2}^{n-1}y_t+\\tfrac12 y_n}{n-1}" },
      { n: "Weighted chronological mean (stock series, unequal spacing d)", tex: "\\bar y=\\dfrac{\\frac{y_1+y_2}{2}d_1+\\frac{y_2+y_3}{2}d_2+\\dots+\\frac{y_{n-1}+y_n}{2}d_{n-1}}{d_1+d_2+\\dots+d_{n-1}}" },
      { g: "Dynamics: differences, growth, indices" },
      { n: "1st difference (absolute change)", tex: "\\Delta_t=y_t-y_{t-1}" },
      { n: "Mean 1st difference", tex: "\\bar\\Delta=\\dfrac{1}{n-1}\\sum_{t=2}^{n}\\Delta_t=\\dfrac{y_n-y_1}{n-1}" },
      { n: "Growth coefficient", tex: "k_t=\\dfrac{y_t}{y_{t-1}}" },
      { n: "Mean growth coefficient", tex: "\\bar k=\\sqrt[n-1]{k_2k_3\\cdots k_n}=\\sqrt[n-1]{\\dfrac{y_n}{y_1}}" },
      { n: "Base index", tex: "I_{t/1}=\\dfrac{y_t}{y_1}=I_{2/1}\\,I_{3/2}\\cdots I_{t/t-1}" },
      { n: "Chain index", tex: "I_{t/t-1}=\\dfrac{y_t}{y_{t-1}}=\\dfrac{I_{t/1}}{I_{t-1/1}}" },
      { g: "Decomposition and trend functions" },
      { n: "Additive decomposition", tex: "y_t=tr_t+s_t+c_t+e_t" },
      { n: "Multiplicative decomposition", tex: "y_t=tr_t\\cdot s_t\\cdot c_t\\cdot e_t" },
      { n: "Constant trend", tex: "tr_t=b_0,\\quad t=1,2,\\dots,n,\\qquad b_0=\\sum_{t=1}^{n}y_t\\,/\\,n" },
      { n: "Linear trend", tex: "tr_t=b_0+b_1t,\\quad t=1,2,\\dots,n" },
      { n: "Quadratic trend", tex: "tr_t=b_0+b_1t+b_2t^2,\\quad t=1,2,\\dots,n" },
      { n: "Prediction from a trend", tex: "\\hat y_t=tr_t,\\quad t=n+1,n+2,\\dots" },
      { g: "Moving averages" },
      { n: "Moving average, odd length", tex: "m=2p+1:\\quad \\bar y_t=tr_t=\\dfrac{y_{t-p}+\\dots+y_{t-1}+y_t+y_{t+1}+\\dots+y_{t+p}}{m}" },
      { n: "Centred moving average, even length", tex: "m=2p:\\quad \\bar y_t=tr_t=\\dfrac{\\frac{y_{t-p}+\\dots+y_t+\\dots+y_{t+p-1}}{m}+\\frac{y_{t-p+1}+\\dots+y_t+\\dots+y_{t+p}}{m}}{2}" },
      { g: "Seasonal component, simple approach" },
      { n: "Additive: seasonal plus random part", tex: "s_t+e_t=y_t-tr_t" },
      { n: "Additive: raw seasonal deviation", tex: "\\overline{sd}_j=\\dfrac{\\sum_{i=1}^{n_j}(s_{ij}+e_{ij})}{n_j}" },
      { n: "Additive: adjusted seasonal deviation", tex: "sd_j=\\overline{sd}_j-\\dfrac{\\sum_{j=1}^{s}\\overline{sd}_j}{s}" },
      { n: "Multiplicative: seasonal times random part", tex: "s_t\\cdot e_t=y_t\\,/\\,tr_t" },
      { n: "Multiplicative: raw seasonal index", tex: "\\overline{si}_j=\\dfrac{\\sum_{i=1}^{n_j}(s_{ij}\\cdot e_{ij})}{n_j}" },
      { n: "Multiplicative: adjusted seasonal index", tex: "si_j=\\overline{si}_j\\cdot\\dfrac{s}{\\sum_{j=1}^{s}\\overline{si}_j}" },
      { g: "Seasonal component, regression approach (linear trend, seasonality length 4)" },
      { n: "Model with seasonal deviations", tex: "y_t=tr_t+s_t+e_t=b_0+b_1t+sd_1x_1+sd_2x_2+sd_3x_3+sd_4x_4+e_t" },
      { n: "Model with dummy variables", tex: "y_t=tr_t+s_t+e_t=b_0^{*}+b_1t+a_1x_1+a_2x_2+a_3x_3+e_t" },
      { n: "Mean of the dummy coefficients", tex: "\\bar a=\\dfrac{a_1+a_2+a_3}{4},\\qquad b_0=b_0^{*}+\\bar a" },
      { n: "Seasonal deviations from the dummies", tex: "sd_j=a_j-\\bar a,\\quad j=1,2,3,\\qquad sd_4=-\\bar a" },
      { n: "Prediction with seasonality", tex: "\\hat y_t=tr_t+s_t=b_0+b_1\\cdot t+sd_j,\\quad t=n+1,n+2,\\dots,\\ j=1,2,3,4" }
    ] },
    { id: "prob", title: "Probability and random variables", page: 5, items: [
      { g: "Probability theory" },
      { id: "p-classic", n: "Classical probability", tex: "P(A)=\\dfrac{m}{n}" },
      { id: "p-compl", n: "Complementary event", tex: "P(\\bar A)=1-P(A)" },
      { id: "p-union", n: "Union of events (addition rule)", tex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)" },
      { id: "p-disj", n: "Union of disjoint events", tex: "P(A\\cup B)=P(A)+P(B)" },
      { id: "p-indep", n: "Independent events", tex: "P(A)=P(A\\mid B),\\quad P(B)=P(B\\mid A),\\qquad P(A\\cap B)=P(A)\\,P(B)" },
      { id: "p-dep", n: "Dependent events (multiplication rule)", tex: "P(A\\cap B)=P(A)\\cdot P(B\\mid A)=P(B)\\cdot P(A\\mid B)" },
      { g: "Discrete random variables" },
      { id: "rv-pf", n: "Probability function", tex: "P(x)=P(X=x),\\qquad \\sum_x P(x)=1" },
      { id: "rv-cdf", n: "Cumulative distribution function", tex: "F(x)=P(X\\le x)=\\sum_{t\\le x}P(t)" },
      { id: "rv-int", n: "Probability of an interval (discrete)", tex: "P(x_1<X\\le x_2)=F(x_2)-F(x_1)=\\sum_{x_1<x\\le x_2}P(x)" },
      { id: "rv-ex", n: "Expected value (discrete)", tex: "E(X)=\\sum_x x\\,P(x)" },
      { id: "rv-var", n: "Variance (discrete)", tex: "Var(X)=E(X^2)-[E(X)]^2=\\sum_x x^2P(x)-\\Big[\\sum_x x\\,P(x)\\Big]^2" },
      { id: "rv-sd", n: "Standard deviation", tex: "S.D.(X)=\\sqrt{Var(X)}" },
      { g: "Continuous random variables" },
      { id: "rv-dens", n: "Probability density function", tex: "f(x)=F'(x),\\qquad \\int_{-\\infty}^{\\infty}f(x)\\,dx=1" },
      { id: "rv-ccdf", n: "Cumulative distribution function (continuous)", tex: "F(x)=P(X\\le x)=\\int_{-\\infty}^{x}f(t)\\,dt" },
      { id: "rv-cint", n: "Probability of an interval (continuous)", tex: "P(x_1<X\\le x_2)=F(x_2)-F(x_1)=\\int_{x_1}^{x_2}f(x)\\,dx" },
      { id: "rv-q", n: "Quantile", tex: "x_P,\\ 0<P<1:\\qquad F(x_P)=P" },
      { id: "rv-cex", n: "Expected value (continuous)", tex: "E(X)=\\int_{-\\infty}^{\\infty}x\\,f(x)\\,dx" },
      { id: "rv-cvar", n: "Variance (continuous)", tex: "Var(X)=E(X^2)-[E(X)]^2=\\int_{-\\infty}^{\\infty}x^2f(x)\\,dx-\\Big[\\int_{-\\infty}^{\\infty}x\\,f(x)\\,dx\\Big]^2" }
    ] },
    { id: "dist", title: "Probability distributions", page: 6 },
    { id: "est", title: "Estimates and confidence intervals", page: 7 },
    { id: "hyp", title: "Hypothesis tests", page: 8 },
    { id: "infdep", title: "Inferential dependence and time series", page: 9 },
    { id: "idx", title: "Index numbers", page: 10 },
    { id: "xls", title: "Excel functions", page: 11 }
  ];

  var KATEX = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/";
  var KEY = "statsHub.fx";
  var st = { sec: "ts", view: "typed" };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved && saved.sec) st = saved; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }

  var kx = null; // promise for KaTeX
  function loadKatex() {
    if (kx) return kx;
    kx = new Promise(function (ok, bad) {
      var l = document.createElement("link"); l.rel = "stylesheet"; l.href = KATEX + "katex.min.css"; document.head.appendChild(l);
      var s = document.createElement("script"); s.src = KATEX + "katex.min.js";
      s.onload = function () { window.katex ? ok(window.katex) : bad(); };
      s.onerror = function () { kx = null; bad(); };
      document.head.appendChild(s);
    });
    return kx;
  }

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function sec(id) { for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return SECTIONS[i]; return SECTIONS[0]; }

  var panel, body, btn, q;

  function sheetImg(s) {
    var src = "formulas/sheet-p" + s.page + ".jpg";
    return '<a href="' + src + '" target="_blank" rel="noopener" class="fx-full">Open full size to zoom ↗</a>' +
      '<img class="fx-img" src="' + src + '" alt="Official 4ST601 formula sheet, page ' + (s.page - 1) + ': ' + esc(s.title) + '" loading="lazy">';
  }

  function render() {
    var s = sec(st.sec), term = (q.value || "").trim().toLowerCase();
    panel.querySelectorAll(".fx-chip").forEach(function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-sec") === s.id ? "true" : "false"); });
    var typed = !!s.items, view = typed ? st.view : "sheet";
    panel.querySelector(".fx-views").hidden = !typed;
    panel.querySelectorAll(".fx-view").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-view") === view ? "true" : "false"); });
    q.hidden = !(typed && view === "typed");

    if (view === "sheet") {
      body.innerHTML = (typed ? "" : '<p class="fx-note">Typed version of this section is coming. This is the official sheet you get in the exam.</p>') + sheetImg(s);
      return;
    }
    var html = "", shown = 0, group = "";
    s.items.forEach(function (it) {
      if (it.g) { group = it.g; return; }
      if (term && it.n.toLowerCase().indexOf(term) < 0 && group.toLowerCase().indexOf(term) < 0) return;
      if (group) { html += '<h4 class="fx-g">' + esc(group) + "</h4>"; group = ""; }
      html += '<div class="fx-f"><div class="fx-n">' + esc(it.n) + '</div><div class="fx-tex" data-tex="' + esc(it.tex) + '">' + esc(it.tex) + "</div></div>";
      shown++;
    });
    body.innerHTML = shown ? html : '<p class="fx-note">No formula name matches "' + esc(term) + '".</p>';
    loadKatex().then(function (k) {
      body.querySelectorAll(".fx-tex").forEach(function (e) {
        try { k.render(e.getAttribute("data-tex"), e, { throwOnError: false, displayMode: true }); e.classList.add("ok"); } catch (x) {}
      });
    }).catch(function () {
      body.insertAdjacentHTML("afterbegin", '<p class="fx-note">Typed formulas need a connection the first time. Use "Official sheet" offline.</p>');
    });
  }

  function open(on) {
    panel.hidden = !on;
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-expanded", on ? "true" : "false");
    if (on) render();
  }

  function init() {
    var hud = document.querySelector(".hud"), top = document.querySelector(".top-in");
    if (!hud || !top) return;
    btn = document.createElement("button");
    btn.className = "hudchip"; btn.id = "fxbtn"; btn.type = "button";
    btn.title = "Formula sheet"; btn.setAttribute("aria-controls", "fxpanel"); btn.setAttribute("aria-expanded", "false");
    btn.textContent = "∑ Formulas";
    hud.insertBefore(btn, hud.firstChild);

    panel = document.createElement("div");
    panel.className = "fxpanel"; panel.id = "fxpanel"; panel.hidden = true;
    panel.setAttribute("role", "region"); panel.setAttribute("aria-label", "Formula sheet");
    panel.innerHTML =
      '<div class="fx-head"><b>Formula sheet</b><span class="fx-views"><button type="button" class="fx-view" data-view="typed">Typed with names</button><button type="button" class="fx-view" data-view="sheet">Official sheet</button></span><button type="button" class="fx-x" aria-label="Close formula sheet">✕</button></div>' +
      '<div class="fx-chips">' + SECTIONS.map(function (s) {
        return '<button type="button" class="fx-chip" data-sec="' + s.id + '">' + esc(s.title) + (s.items ? "" : ' <span class="fx-pg">sheet</span>') + "</button>";
      }).join("") + "</div>" +
      '<input class="fx-q" type="search" placeholder="Find a formula by name, e.g. growth" aria-label="Find a formula by name">' +
      '<div class="fx-body"></div>';
    top.insertBefore(panel, document.getElementById("tabs"));
    body = panel.querySelector(".fx-body"); q = panel.querySelector(".fx-q");

    btn.onclick = function (e) { e.stopPropagation(); open(panel.hidden); };
    panel.onclick = function (e) {
      e.stopPropagation();
      var c = e.target.closest(".fx-chip"), v = e.target.closest(".fx-view");
      if (c) { st.sec = c.getAttribute("data-sec"); q.value = ""; save(); render(); body.scrollTop = 0; }
      else if (v) { st.view = v.getAttribute("data-view"); save(); render(); }
      else if (e.target.closest(".fx-x")) { open(false); btn.focus(); }
    };
    q.oninput = render;
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) { open(false); btn.focus(); } });
  }

  /* Used by lib/apply.js: render one section's typed formulas into a box, marking some ids. */
  function byId(fid) {
    for (var i = 0; i < SECTIONS.length; i++) {
      var its = SECTIONS[i].items || [];
      for (var j = 0; j < its.length; j++) if (its[j].id === fid) return its[j];
    }
    return null;
  }
  function renderInto(box, secId, mark) {
    var s = sec(secId), html = "";
    if (!s.items) { box.innerHTML = sheetImg(s); return; }
    s.items.forEach(function (it) {
      if (it.g) { html += '<h4 class="fx-g">' + esc(it.g) + "</h4>"; return; }
      var on = mark && it.id && mark.indexOf(it.id) >= 0;
      html += '<div class="fx-f' + (on ? " fx-on" : "") + '" data-fid="' + esc(it.id || "") + '"><div class="fx-n">' + esc(it.n) + '</div><div class="fx-tex" data-tex="' + esc(it.tex) + '">' + esc(it.tex) + "</div></div>";
    });
    box.innerHTML = html;
    loadKatex().then(function (k) {
      box.querySelectorAll(".fx-tex").forEach(function (e) {
        try { k.render(e.getAttribute("data-tex"), e, { throwOnError: false, displayMode: true }); e.classList.add("ok"); } catch (x) {}
      });
    }).catch(function () {});
  }
  window.GEOFormulas = { sections: SECTIONS, byId: byId, renderInto: renderInto };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
