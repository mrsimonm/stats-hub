/* Formula panel: a "∑ Formulas" button in the top bar that rolls down the 4ST601 formula sheet on every screen.
   Each section shows the official sheet page (formulas/sheet-pN.jpg). Sections with "items" also have a typed,
   named version (KaTeX, loaded from cdnjs on first open). Typed formulas are copied from slides/0-formulas.pdf. */
(function () {
  "use strict";

  var SECTIONS = [
    { id: "desc", title: "Descriptive statistics", page: 2 },
    { id: "dep", title: "Dependence (contingency, correlation, regression)", page: 3, items: [
      { g: "Contingency table (r × c)" },
      { id: "c-marg", n: "Row and column totals, relative frequencies", tex: "n_{i.}=\\sum_{j=1}^{c}n_{ij},\\quad n_{.j}=\\sum_{i=1}^{r}n_{ij},\\quad p_{ij}=\\dfrac{n_{ij}}{n}" },
      { id: "c-cond", n: "Conditional relative frequencies", tex: "p_{i|j}=\\dfrac{n_{ij}}{n_{.j}}=\\dfrac{p_{ij}}{p_{.j}},\\qquad p_{j|i}=\\dfrac{n_{ij}}{n_{i.}}=\\dfrac{p_{ij}}{p_{i.}}" },
      { id: "c-exp", n: "Expected frequency (if independent)", tex: "n'_{ij}=\\dfrac{n_{i.}\\,n_{.j}}{n}" },
      { id: "c-g", n: "Chi-square statistic", tex: "g=\\sum_{i=1}^{r}\\sum_{j=1}^{c}\\dfrac{(n_{ij}-n'_{ij})^2}{n'_{ij}}" },
      { id: "c-CV", n: "Contingency coefficient C and Cramér's V", tex: "C=\\sqrt{\\dfrac{g}{g+n}}\\in\\big\\langle 0,\\sqrt{(m-1)/m}\\big\\rangle,\\quad V=\\sqrt{\\dfrac{g}{n(m-1)}}\\in\\langle 0,1\\rangle,\\quad m=\\min(r,c)" },
      { g: "One-way analysis of variance" },
      { id: "a-ss", n: "Sums of squares", tex: "ss_T=\\sum_{j}\\sum_{i}(x_{ji}-\\bar x)^2=ss_{TR}+ss_E,\\quad ss_{TR}=\\sum_{j=1}^{k}(\\bar x_j-\\bar x)^2n_j,\\quad ss_E=\\sum_{j}\\sum_{i}(x_{ji}-\\bar x_j)^2" },
      { id: "a-r2", n: "Coefficient of determination (ANOVA)", tex: "r^2=\\dfrac{ss_{TR}}{ss_T}" },
      { g: "Correlation and regression" },
      { id: "r-r", n: "Correlation coefficient", tex: "r=\\dfrac{\\overline{xy}-\\bar x\\cdot\\bar y}{\\sqrt{(\\overline{x^2}-\\bar x^2)(\\overline{y^2}-\\bar y^2)}}=\\dfrac{s_{xy}}{s_xs_y}" },
      { id: "r-line", n: "Regression line", tex: "\\hat y=b_0+b_1x,\\qquad \\hat y_i=b_0+b_1x_i" },
      { id: "r-b", n: "Regression line coefficients (slope b1, intercept b0)", tex: "b_1=b_{yx}=\\dfrac{\\overline{xy}-\\bar x\\cdot\\bar y}{\\overline{x^2}-\\bar x^2}=\\dfrac{s_{xy}}{s_x^2},\\qquad b_0=\\bar y-b_1\\bar x" },
      { id: "r-res", n: "Residuals", tex: "e_i=y_i-\\hat y_i" },
      { id: "r-ss", n: "Sums of squares (regression)", tex: "ss_T=\\sum(y_i-\\bar y)^2,\\quad ss_R=\\sum(\\hat y_i-\\bar y)^2,\\quad ss_E=\\sum e_i^2,\\quad ss_T=ss_R+ss_E" },
      { id: "r-r2", n: "Coefficient of determination", tex: "r^2=\\dfrac{ss_R}{ss_T},\\qquad r^2_{ADJ}=1-(1-r^2)\\dfrac{n-1}{n-p}" }
    ] },
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
    { id: "dist", title: "Probability distributions", page: 6, items: [
      { g: "Discrete distributions" },
      { id: "d-bi", n: "Binomial distribution, X ~ Bi(n, π)", tex: "P(x)=\\binom{n}{x}\\pi^x(1-\\pi)^{n-x},\\quad x=0,1,\\dots,n,\\ 0<\\pi<1" },
      { id: "d-bi-m", n: "Binomial: expected value and variance", tex: "E(X)=n\\pi,\\qquad Var(X)=n\\pi(1-\\pi)" },
      { id: "d-po", n: "Poisson distribution, X ~ Po(λ)", tex: "P(x)=e^{-\\lambda}\\dfrac{\\lambda^x}{x!},\\quad x=0,1,\\dots,\\ \\lambda>0" },
      { id: "d-po-m", n: "Poisson: expected value and variance", tex: "E(X)=\\lambda,\\qquad Var(X)=\\lambda" },
      { id: "d-hy", n: "Hypergeometric distribution, X ~ Hy(N, M, n)", tex: "P(x)=\\dfrac{\\binom{M}{x}\\binom{N-M}{n-x}}{\\binom{N}{n}},\\quad x=\\max(0,M-N+n),\\dots,\\min(M,n)" },
      { id: "d-hy-m", n: "Hypergeometric: expected value and variance", tex: "E(X)=n\\dfrac{M}{N},\\qquad Var(X)=n\\dfrac{M}{N}\\Big(1-\\dfrac{M}{N}\\Big)\\dfrac{N-n}{N-1}" },
      { g: "Continuous distributions" },
      { id: "d-z", n: "Standardization, Z ~ N(0, 1)", tex: "Z=\\dfrac{X-\\mu}{\\sigma},\\qquad z=\\dfrac{x-\\mu}{\\sigma},\\qquad E(Z)=0,\\ Var(Z)=1" },
      { id: "d-phi", n: "Symmetry of the standard normal", tex: "\\Phi(z)=1-\\Phi(-z),\\qquad z_P=-z_{1-P}" },
      { id: "d-n-F", n: "Normal distribution function, X ~ N(μ, σ²)", tex: "F(x)=\\Phi(z)=\\Phi\\Big(\\dfrac{x-\\mu}{\\sigma}\\Big),\\qquad E(X)=\\mu,\\ Var(X)=\\sigma^2" },
      { id: "d-n-q", n: "Normal quantile", tex: "x_P=\\mu+\\sigma z_P" },
      { id: "d-n-int", n: "Normal: probability of an interval", tex: "P(x_1<X\\le x_2)=P\\Big(\\tfrac{x_1-\\mu}{\\sigma}<Z\\le\\tfrac{x_2-\\mu}{\\sigma}\\Big)=\\Phi(z_2)-\\Phi(z_1)" },
      { id: "d-chi", n: "Chi-square distribution, G ~ χ²(df)", tex: "g\\ge 0\\quad(\\text{quantiles from Table IV})" },
      { id: "d-t", n: "t-distribution (Student's), T ~ t(df)", tex: "t_P(df)=-t_{1-P}(df)\\quad(\\text{quantiles from Table III})" },
      { id: "d-F", n: "F-distribution (Fisher–Snedecor), F ~ F(df1, df2)", tex: "f\\ge 0,\\qquad f_P(df_1,df_2)=\\dfrac{1}{f_{1-P}(df_2,df_1)}\\quad(\\text{Table V})" }
    ] },
    { id: "est", title: "Estimates and confidence intervals", page: 7, items: [
      { g: "Point estimates" },
      { id: "e-pt-mean", n: "Point estimate of the population mean", tex: "\\text{normal: }\\hat\\mu=\\bar x,\\qquad \\text{general: }\\widehat{E(X)}=\\bar x" },
      { id: "e-pt-var", n: "Point estimate of the population variance (normal)", tex: "\\hat\\sigma^2=s^2" },
      { id: "e-pt-prop", n: "Point estimate of the population proportion", tex: "\\hat\\pi=p=\\dfrac{n_j}{n}" },
      { id: "e-pt-count", n: "Point estimate of a count in the population", tex: "\\widehat{N\\pi}=Np" },
      { g: "Two-sided confidence intervals (confidence level 1 − α)" },
      { id: "e-ci-t", n: "Mean, normal population, σ² unknown (t)", tex: "\\Big(\\bar x-t_{1-\\alpha/2}\\dfrac{s}{\\sqrt n},\\ \\bar x+t_{1-\\alpha/2}\\dfrac{s}{\\sqrt n}\\Big),\\qquad T\\sim t(n-1)" },
      { id: "e-ci-z", n: "Mean, general population, large sample (z)", tex: "\\Big(\\bar x-z_{1-\\alpha/2}\\dfrac{s}{\\sqrt n},\\ \\bar x+z_{1-\\alpha/2}\\dfrac{s}{\\sqrt n}\\Big)" },
      { id: "e-ci-p", n: "Population proportion, large sample", tex: "\\Big(p-z_{1-\\alpha/2}\\sqrt{\\tfrac{p(1-p)}{n}},\\ p+z_{1-\\alpha/2}\\sqrt{\\tfrac{p(1-p)}{n}}\\Big)" },
      { id: "e-ci-N", n: "Count in the population, N known, large sample", tex: "N\\cdot\\Big(p-z_{1-\\alpha/2}\\sqrt{\\tfrac{p(1-p)}{n}},\\ p+z_{1-\\alpha/2}\\sqrt{\\tfrac{p(1-p)}{n}}\\Big)" }
    ] },
    { id: "hyp", title: "Hypothesis tests", page: 8, items: [
      { g: "Tests of population parameters (H0: parameter = value)" },
      { id: "h-t", n: "Mean, normal population, σ² unknown: t-test", tex: "t=\\dfrac{\\bar x-\\mu_0}{s}\\sqrt n,\\quad T\\sim t(n-1);\\qquad W_\\alpha:\\ t\\ge t_{1-\\alpha}\\ \\big|\\ t\\le -t_{1-\\alpha}\\ \\big|\\ |t|\\ge t_{1-\\alpha/2}" },
      { id: "h-z", n: "Mean, general population, large sample: z-test", tex: "z=\\dfrac{\\bar x-\\mu_0}{s}\\sqrt n,\\quad Z\\approx N(0,1);\\qquad W_\\alpha:\\ z\\ge z_{1-\\alpha}\\ \\big|\\ z\\le -z_{1-\\alpha}\\ \\big|\\ |z|\\ge z_{1-\\alpha/2}" },
      { id: "h-p", n: "Population proportion, large sample: z-test", tex: "z=\\dfrac{p-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}},\\quad Z\\approx N(0,1);\\qquad W_\\alpha:\\ z\\ge z_{1-\\alpha}\\ \\big|\\ z\\le -z_{1-\\alpha}\\ \\big|\\ |z|\\ge z_{1-\\alpha/2}" },
      { g: "Test of distribution in population" },
      { id: "h-gof", n: "Chi-square goodness-of-fit test", tex: "H_0:\\pi_j=\\pi_{0,j},\\quad n'_j=n\\pi_{0,j},\\quad g=\\sum_{j=1}^{k}\\dfrac{(n_j-n'_j)^2}{n'_j},\\quad G\\approx\\chi^2(k-1);\\qquad W_\\alpha:\\ g\\ge\\chi^2_{1-\\alpha}" },
      { g: "Reading the rejection region" },
      { id: "h-W", n: "Which tail? (H1 decides)", tex: "H_1:\\ >\\ \\Rightarrow\\ \\text{right tail},\\quad H_1:\\ <\\ \\Rightarrow\\ \\text{left tail},\\quad H_1:\\ \\ne\\ \\Rightarrow\\ \\text{both tails } (\\alpha/2)" }
    ] },
    { id: "infdep", title: "Inferential dependence and time series", page: 9, items: [
      { id: "i-ctt", n: "Independence test in a contingency table", tex: "H_0:\\text{independent},\\quad g=\\sum_i\\sum_j\\dfrac{(n_{ij}-n'_{ij})^2}{n'_{ij}},\\quad G\\approx\\chi^2((r-1)(c-1));\\qquad W_\\alpha:\\ g\\ge\\chi^2_{1-\\alpha}" },
      { id: "i-anova", n: "One-way ANOVA F-test", tex: "H_0:\\mu_1=\\dots=\\mu_k,\\quad f=\\dfrac{ss_{TR}/(k-1)}{ss_E/(n-k)},\\quad F\\sim F(k-1,n-k);\\qquad W_\\alpha:\\ f\\ge f_{1-\\alpha}" },
      { id: "i-corr", n: "Correlation test", tex: "H_0:\\rho_{XY}=0,\\quad t=\\dfrac{r\\sqrt{n-2}}{\\sqrt{1-r^2}},\\quad T\\sim t(n-2);\\qquad W_\\alpha:\\ |t|\\ge t_{1-\\alpha/2}" },
      { id: "i-dgp", n: "Regression line / linear trend data-generating process (p = 2)", tex: "Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i,\\qquad Y_t=\\beta_0+\\beta_1t+\\varepsilon_t" },
      { id: "i-slope", n: "t-test of the slope (s(b1) only from Excel)", tex: "H_0:\\beta_1=0,\\quad t=\\dfrac{b_1}{s(b_1)},\\quad T\\sim t(n-p);\\qquad W_\\alpha:\\ |t|\\ge t_{1-\\alpha/2}" }
    ] },
    { id: "idx", title: "Index numbers", page: 10 },
    { id: "xls", title: "Excel functions", page: 11 },
    { id: "tab", title: "Statistical tables", imgs: [
      ["tables-p2", "Table I. Standard normal distribution function"], ["tables-p3", "Table I (cont.)"],
      ["tables-p4", "Table II. Quantiles of the standard normal distribution"], ["tables-p5", "Table III. Quantiles of the t-distribution"],
      ["tables-p6", "Table IV. Quantiles of the chi-square distribution"], ["tables-p7", "Table V. 95% quantiles of the F-distribution"]
    ] }
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
    if (s.imgs) return s.imgs.map(function (im) {
      var u = "formulas/" + im[0] + ".jpg";
      return '<h4 class="fx-g">' + esc(im[1]) + '</h4><a href="' + u + '" target="_blank" rel="noopener" class="fx-full">Open full size to zoom ↗</a><img class="fx-img" src="' + u + '" alt="Official 4ST601 statistical tables: ' + esc(im[1]) + '" loading="lazy">';
    }).join("");
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
      body.innerHTML = (typed || s.imgs ? "" : '<p class="fx-note">Typed version of this section is coming. This is the official sheet you get in the exam.</p>') + sheetImg(s);
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
