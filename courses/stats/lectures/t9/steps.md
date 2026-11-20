## Population, Sample & Two Statistical Worlds | 5 min

:::idea The idea
Inferential statistics bridges two worlds: we use tools derived in the *theoretical world* (random variables) to draw uncertain conclusions about a population from a single data set in the *empirical world*.
:::

Applied statistics has two branches:
- **Descriptive statistics**: organizes and summarizes a given data set using tables, graphs and simple measures—**no generalization**.
- **Inferential statistics**: draws general conclusions about a **population** (size N) based on a **random sample** (size n).

| Survey type | Elements studied | Population parameters |
|---|---|---|
| **Population survey (census)** | All N elements | Calculated exactly (descriptive statistics) |
| **Sample survey** | n selected elements | Only *estimated* (inferential statistics) |

Why sample instead of taking a census? Some populations are too large; samples are cheaper and faster to process; sample surveys can be more detailed; some tests are destructive (e.g., automobile crash-tests); and results may be needed quickly (e.g., pre-election polls).

:::trap Exam trap
Justified statistical inference requires a **random sample** from a clearly defined population (in 4ST601, via simple random sampling). An internet questionnaire typically fails this requirement.
:::

### Empirical vs. theoretical world

- **Empirical world**: known data sets and calculated numbers (x̄, s), where we are uncertain whether theoretical assumptions hold.
- **Theoretical world**: random variables (X̄, S²), probability distributions, and formulas derived under perfectly satisfied assumptions.

{{q:t9-desc-vs-inf}}
{{q:t9-census-vs-sample}}
{{q:t9-internet-poll}}
{{q:t9-two-worlds}}

## Sampling Distribution, Estimators & Point Estimates | 6 min

In a **population distribution** (all N elements), any population parameter is a **constant**. In a **sampling distribution**, sample statistics vary from sample to sample, making them **random variables**. For example, drawing different samples of n = 5 female students from N = 87 gives different sample means (57.6 kg, 55.0 kg, 58.4 kg)—so **X̄ is a random variable**.

### Estimator vs. point estimate

- An **estimator** is a random variable (before/across samples).
- A **point estimate** is a single calculated number from one observed sample.

| Population parameter | Estimator (RV) | Point estimate (number) |
|---|---|---|
| Expected value E(X) | X̄ | x̄ |
| Normal mean μ | X̄ | x̄ |
| Normal variance σ² | S² | s² |
| Population proportion p | P | p = n_j / n |
| Count in population N·p | N · P | N · p |

Because a single sample statistic will differ from the true population parameter (**sampling error**), inferential statistics always carries uncertainty. An **interval estimate** addresses this by building a range of values around the point estimate.

{{q:t9-pop-vs-sampling-dist}}
{{q:t9-estimator-vs-estimate}}
{{q:t9-sampling-error}}

## Confidence Intervals & Confidence Level | 6 min

A **100(1 - α)% two-sided confidence interval** is constructed around a point estimate at a chosen **confidence level 1 - α** (commonly 0.90, 0.95, or 0.99, i.e. α = 0.1, 0.05, or 0.01).

| Parameter | Conditions | Constructed (empirical) interval |
|---|---|---|
| μ | Normal population, σ² unknown | `x̄ ± t_{1-α/2}(n - 1) · (s / √n)` |
| E(X) | Large random sample (n > 30) | `x̄ ± z_{1-α/2} · (s / √n)` |
| p | Large random sample | `p ± z_{1-α/2} · √(p(1 - p) / n)` |
| N·p | Large random sample, N known | `N · [ p ± z_{1-α/2} · √(p(1 - p) / n) ]` |

### What confidence level 1 - α means

**Confidence level 1 - α** is the approximate proportion of constructed empirical confidence intervals that cover the unknown population parameter. In the 4ST601 illustration (N = 87 female students, true E(X) = 54.828 kg), 100 samples of size 5 produced 100 95% CIs, and **94 (94%)** covered 54.828 kg. In practice we have only *one* sample and *one* empirical CI—it either covers the parameter or it does not.

:::teach Teacher says
In any serious analysis, list the theoretical assumptions (such as "normal distribution in population" or "large random sample") and discuss how well they are satisfied.
:::

{{q:t9-ci-t-vs-z}}
{{q:t9-conf-level-meaning}}

## CI Width, Accuracy & Worked Examples | 6 min

The half-width **Δ** in `(x̄ - Δ, x̄ + Δ)` is the **maximum acceptable (sampling) error** of the interval estimate. Assuming nothing else changes:

- **Rising confidence level (1 - α ↑)**: α ↓, quantile z_{1-α/2} ↑ → **wider interval, lower accuracy**.
- **Rising sample size (n ↑)**: √n ↑ in the denominator → **narrower interval, higher accuracy**.

### Example 1: Mean size in a delivery

From a large delivery, n = 400 items are randomly selected: x̄ = 116 mm, s = 4.081 mm. Find the point estimate and 92% CI for E(X):
- Point estimate: **116 mm**.
- Confidence level: 1 - α = 0.92 ⇒ α = 0.08 ⇒ 1 - α/2 = 0.96 ⇒ z_{0.96} = 1.751.
- CI: `116 ± 1.751 · (4.081 / √400) = 116 ± 0.36 = (115.64, 116.36) mm`.

### Example 2: Proportion of expired cans

From all warehouses, n = 320 cans are sampled and n_j = 59 are expired. Find the point estimate and 99.8% CI for p:
- Point estimate: `p = 59 / 320 ≈ 0.184` (18.4%).
- Confidence level: 1 - α = 0.998 ⇒ α = 0.002 ⇒ 1 - α/2 = 0.999 ⇒ z_{0.999} = 3.090.
- CI: `0.184 ± 3.090 · √(0.184·0.816 / 320) = 0.184 ± 0.067 = (0.117, 0.251)` (11.7% to 25.1%).

{{q:t9-ci-width-conf}}
{{q:t9-ci-width-n}}
{{q:t9-max-error-delta}}
{{q:t9-delivery-ex}}
{{q:t9-cans-ex}}

## Judging a Research Hypothesis with a CI | 3 min

A constructed empirical confidence interval can be used to judge a **research hypothesis**—for example, the hypothesis that the proportion of expired cans in all warehouses is 15% (0.15).

- Because the 99.8% CI `(0.117, 0.251)` **covers 0.15**, it supports the research hypothesis.
- The higher the number of constructed intervals covering the value, the stronger the support.

:::trap Exam trap
The research hypothesis **must be formulated BEFORE** any calculations are carried out (before drawing the random sample)!
:::

{{q:t9-research-hyp}}
