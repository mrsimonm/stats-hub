## Independence test in a contingency table | 6 min

:::idea The idea
Two **categorical** variables (e.g. magazine and education). Does one depend on the other in the whole population?
:::

1. H0: the variables are **independent**. H1: non H0 (they are dependent).
2. **Expected frequency** in each cell: n′<sub>ij</sub> = row total × column total / n.
3. g = Σ Σ (n<sub>ij</sub> − n′<sub>ij</sub>)² / n′<sub>ij</sub>, approximately **χ²((r − 1)(c − 1))**.
4. W<sub>α</sub> = {g ≥ χ²<sub>1−α</sub>((r − 1)(c − 1))}: the right tail.

:::trap Exam trap
The test needs **all expected frequencies large enough**. With very small ones it is not justified, and you can combine categories (exercises ctt5 and ctt6). Strong rounding of n′ can change the result.
:::

{{q:t11-ctt-h0}}
{{q:t11-ctt-df}}
{{q:t11-ctt-expected}}
{{q:t11-ctt-small}}

## One-way ANOVA | 6 min

Do the **means** of k groups differ (e.g. expenditure of three types of household)? There are k populations here.

1. H0: μ<sub>1</sub> = μ<sub>2</sub> = … = μ<sub>k</sub>. H1: non H0 (at least one mean differs).
2. f = [ss<sub>TR</sub> / (k − 1)] / [ss<sub>E</sub> / (n − k)], **F(k − 1, n − k)** if H0 is true.
3. W<sub>α</sub> = {f ≥ f<sub>1−α</sub>(k − 1, n − k)} from Table V.

| Excel ANOVA table | Means |
|---|---|
| Between Groups SS | ss<sub>TR</sub>, df = k − 1 |
| Within Groups SS | ss<sub>E</sub>, df = n − k |
| MS = SS / df | F = MS between / MS within |

{{q:t11-anova-h0}}
{{q:t11-anova-f}}
{{q:t11-anova-df}}

## Correlation test | 4 min

Are two numeric variables **linearly** dependent?

1. H0: ρ<sub>XY</sub> = 0 (linearly independent). H1: ρ<sub>XY</sub> ≠ 0 (correlated).
2. t = r · √(n − 2) / √(1 − r²), **T ~ t(n − 2)**.
3. W<sub>α</sub> = {\|t\| ≥ t<sub>1−α/2</sub>(n − 2)}: always two-tailed.

{{q:t11-corr-df}}
{{q:t11-corr-h0}}

## Regression line: t-test of the slope | 6 min

Data-generating process: Y<sub>i</sub> = β<sub>0</sub> + β<sub>1</sub>x<sub>i</sub> + ε<sub>i</sub>. The estimates b<sub>0</sub>, b<sub>1</sub> come from the data.

- **Test of the slope**: H0: β<sub>1</sub> = 0 (no linear relationship), H1: β<sub>1</sub> ≠ 0. t = b<sub>1</sub> / s(b<sub>1</sub>), **T ~ t(n − p)** with p = 2. s(b<sub>1</sub>) is only from Excel.
- **Coefficient of determination** r²: the share of the variability of y explained by the line.

:::teach From the seminar file
The inferential interpretation of the slope is **causal**: “if x increases by 1 unit, y increases by b<sub>1</sub> units **on average**”. This is different from the descriptive interpretation in Seminar 5.
:::

{{q:t11-slope-h0}}
{{q:t11-slope-t}}
{{q:t11-causal}}
{{q:t11-r2}}

## Linear trend test | 3 min

For a time series: Y<sub>t</sub> = β<sub>0</sub> + β<sub>1</sub>t + ε<sub>t</sub>. It is the same t-test of the slope, with t = 1, 2, …, n as x.

H0: β<sub>1</sub> = 0 means the **constant trend** (no growth or decline). Rejecting it means the series really has a linear trend.

{{q:t11-trend-h0}}
