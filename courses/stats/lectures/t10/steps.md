## What a hypothesis test does | 5 min

:::idea The idea
A **statistical hypothesis test** uses a random sample to judge a claim about a population, for example “the mean birth weight is 3,500 g”.
:::

Before any calculation, decide (from the seminar file):

- the **research hypothesis** (or research question),
- the **population**, **variable** and **parameter** of interest,
- the **significance level** α,
- the sample information (calculated descriptive statistics).

| Hypothesis | Meaning |
|---|---|
| **Null hypothesis** H0 | The parameter **equals** the claimed value, e.g. E(X) = 3,500 |
| **Alternative hypothesis** H1 | What the research expects: &gt;, &lt; or ≠ |

{{q:t10-h0}}
{{q:t10-alpha}}

## The five steps | 6 min

:::teach From the seminar file
Always follow the **same five steps** of the statistical hypothesis test procedure.
:::

1. State **H0 and H1**.
2. Recognise the **test statistic** and its distribution (assuming H0 is true).
3. Calculate the **value of the test statistic**.
4. Form the **rejection region** W<sub>α</sub> (quantiles from the tables).
5. Give a **conclusion** in words.

| Value of the test statistic | Conclusion (wording from the file) |
|---|---|
| inside W<sub>α</sub> | the value of the test statistic is **inconsistent with H0 in favour of H1** that … |
| outside W<sub>α</sub> | the value of the test statistic is **not inconsistent with H0** that … |

:::trap Exam trap
Never write “H0 is true” or “we accept H0”. The file’s wording is “not inconsistent with H0”. And “statistically significant” is only a label: it says nothing about practical importance.
:::

{{q:t10-steps-order}}
{{q:t10-wording}}

## Which tail? H1 decides | 5 min

| H1 | Rejection region (z-test) |
|---|---|
| parameter **&gt;** value | right tail: z ≥ z<sub>1−α</sub> |
| parameter **&lt;** value | left tail: z ≤ −z<sub>1−α</sub> |
| parameter **≠** value | both tails: \|z\| ≥ z<sub>1−α/2</sub> |

Read the story: “worried about a **decline**” → &lt;. “Doesn’t want it **higher**” → &gt;. “Is it the **same** / is there a **difference**” → ≠.

{{q:t10-tail-decline}}
{{q:t10-two-tail}}

## Tests of the mean and the proportion | 6 min

| Situation | Test statistic | Distribution if H0 is true |
|---|---|---|
| Mean, **normal** population, σ² unknown | t = (x̄ − μ0) / s · √n | **t(n − 1)** |
| Mean, general population, **large sample** | z = (x̄ − μ0) / s · √n | approx. **N(0, 1)** |
| **Proportion**, large sample | z = (p − π0) / √(π0(1 − π0)/n) | approx. **N(0, 1)** |

:::trap Exam trap
In a test of a proportion the denominator uses **π0**, the value from H0. In a confidence interval it uses the sample p.
:::

{{q:t10-which-t}}
{{q:t10-prop-denominator}}
{{q:t10-bigger-n}}

## Chi-square goodness-of-fit test | 5 min

Tests whether the **whole distribution** in the population matches an assumption (e.g. 52 % supermarket, 18 % shopping centre, …).

1. H0: π<sub>j</sub> = π<sub>0,j</sub> for all categories j = 1, …, k. H1: non H0.
2. Expected frequencies: n′<sub>j</sub> = n · π<sub>0,j</sub>.
3. g = Σ (n<sub>j</sub> − n′<sub>j</sub>)² / n′<sub>j</sub>, approximately **χ²(k − 1)**.
4. W<sub>α</sub> = {g ≥ χ²<sub>1−α</sub>(k − 1)}: always the **right tail**.

The random sample size and all π<sub>0,j</sub> must be large enough.

{{q:t10-gof-df}}
{{q:t10-gof-expected}}
{{q:t10-gof-tail}}
