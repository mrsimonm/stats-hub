## Sampling Methods & Inferential Setup | 5 min

:::idea The idea
Inferential statistics draws conclusions about a whole population from a random sample—so how we select that sample determines whether trials are independent or dependent.
:::

In **simple random sampling**, every possible sample of size n is equally likely to be selected (for example, drawing n cards from a deck of N = 32 cards).

- **With replacement**: an element can be selected more than once; probabilities remain constant across trials (**independent trials**).
- **Without replacement**: an element can be selected at most once; probabilities change from draw to draw (**dependent trials**).

### Other sampling designs

| Method | How it works | Key note |
|---|---|---|
| **Systematic random sampling** | Select 1st element randomly, then every k-th element (e.g., every 10th) | Constant skip method |
| **Stratified sampling** | Divide population into homogeneous **strata** (e.g., age, gender) and sample from *each* stratum | High reliability |
| **Cluster sampling** | Divide into **clusters**, pick some clusters by SRS, survey *all* elements in them | Less reliable than stratified sampling |
| **Multistage sampling** | Combination of several sampling methods | Often used in practice |

A random sample should be **representative**—reflecting all relevant features of the population.

{{q:t8-srs-replacement}}
{{q:t8-stratified-vs-cluster}}

## Binomial & Hypergeometric Distributions | 6 min

Both distributions count the number of successes X in n trials, differing in whether trials are independent or dependent.

### Binomial distribution: X ~ Bi(n, π)

Used when an experiment is repeated **n** times under identical conditions, each trial has two outcomes (success with probability π, failure with 1 - π), and trials are **independent** (sampling with replacement). Note that **Bernoulli** (alternative) distribution is Bi(1, π).

- Possible values: x = 0, 1, 2, ..., n
- Probability function: `P(x) = C(n, x) · π^x · (1 - π)^(n - x)`, where `C(n, x) = n! / (x!(n - x)!)` (`nCr` on a calculator; 0! = 1)
- Expected value & variance: `E(X) = n·π`, `Var(X) = n·π·(1 - π)`
- Symmetric when π = 0.5.

*Example 1 (with replacement)*: Draw 3 cards with replacement from 32 cards (4 aces). Here n = 3, π = 4/32 = 1/8, so X ~ Bi(3, 1/8) and P(X = 1) = C(3,1)·(1/8)¹·(7/8)² ≈ 0.287 (28.7%).

### Hypergeometric distribution: X ~ Hy(N, M, n)

Used when sampling **without replacement** (dependent trials) from a finite population of size N containing M successes.

- Probability function: `P(x) = C(M, x) · C(N - M, n - x) / C(N, n)`
- Expected value: `E(X) = n · (M / N)`
- Variance: `Var(X) = n · (M / N) · (1 - M/N) · (N - n) / (N - 1)`

*Example 2 (without replacement)*: Draw 3 cards without replacement from 32 cards (4 aces). Here X ~ Hy(32, 4, 3) and P(X = 1) = C(4,1)·C(28,2) / C(32,3) ≈ 0.305 (30.5%).

:::teach Approximation rule
If the sample is less than 5% of the population (**n < 0.05·N**), Hypergeometric Hy(N, M, n) can be approximated by Binomial Bi(n, π = M/N).
:::

{{q:t8-binomial-params}}
{{q:t8-cards-with-repl}}
{{q:t8-cards-without-repl}}
{{q:t8-hy-to-bi}}

## Poisson Distribution & Binomial Approximation | 5 min

The **Poisson distribution** X ~ Po(λ) models the number of random, independent occurrences in a continuous interval (of time, space, volume, etc.).

- Parameter: **λ > 0** (average number of occurrences in the given interval)
- Possible values: x = 0, 1, 2, ...
- Probability function: `P(x) = e^(-λ) · λ^x / x!` (where e is Euler's number)
- Moments: **E(X) = λ** and **Var(X) = λ**

### Poisson approximation to Binomial

When **π ≤ 0.1 and n > 30**, Bi(n, π) can be approximated by **Po(λ = n·π)** (for example, Bi(40, 0.05) ≈ Po(2)).

### Worked example: bus arrivals (Example 3)

Buses arrive at an average rate of 15 per hour (60 minutes). What is the probability that no bus arrives in a 4-minute interval?

- Scale λ proportionally: λ / 4 = 15 / 60 ⇒ λ = 1 bus per 4 minutes, so X ~ Po(1).
- `P(X = 0) = e^(-1) · 1⁰ / 0! = e^(-1) ≈ 0.368` (36.8%).
- Using the complement rule, `P(X ≥ 2) = 1 - P(X < 2) = 1 - P(0) - P(1)`.

{{q:t8-poisson-moments}}
{{q:t8-bi-to-po}}
{{q:t8-bus-poisson}}

## Normal & Standard Normal Distributions | 6 min

:::idea The idea
Any Normal variable X ~ N(μ, σ²) can be shifted and scaled into one universal curve—the Standard Normal Z ~ N(0, 1)—so we only need two statistical tables.
:::

The **Normal distribution** X ~ N(μ, σ²) is the most widely used continuous distribution (-∞ < x < +∞). It arises when variation is the total of a large number of small independent effects, and it also approximates other distributions.

- Parameters: μ ∈ (-∞, +∞) and σ² > 0
- Moments: E(X) = μ and Var(X) = σ² (so standard deviation is σ)
- Quantile: `x_P = μ + σ · z_P`

### Standardization to Z ~ N(0, 1)

Because integrating the normal density is complicated, we standardize:

`Z = (X - μ) / σ ~ N(0, 1)`, with E(Z) = 0 and Var(Z) = 1.

- **Table I** gives F(z) = P(Z ≤ z). By symmetry around 0: `F(-z) = 1 - F(z)`.
- **Table II** gives quantiles z_P. By symmetry around 0: `z_{1-P} = -z_P`.

| Calculation | Formula via Z | Example value from slides |
|---|---|---|
| P(X ≤ x) | F((x - μ)/σ) | X ~ N(10, 25): P(X < 5) = F(-1) = 1 - F(1) ≈ 0.159 |
| P(X > x) | 1 - F((x - μ)/σ) | Z ~ N(0, 1): P(Z > 2) = 1 - F(2) ≈ 0.02275 |
| P(x₁ < X ≤ x₂) | F(z₂) - F(z₁) | Z ~ N(0, 1): P(-1 < Z < 1) = 2·F(1) - 1 ≈ 0.683 |
| Quantile x_P | μ + σ · z_P | X ~ N(10, 25): x_{0.975} = 10 + 5·(1.96) = 19.8 |

:::trap Exam trap
Always divide by the standard deviation **σ**, not the variance **σ²**! In Example 5, X ~ N(10, 25) means σ² = 25, so σ = √25 = 5. Also remember P(X = 5 or X = 10 or X = 15) = 0 because X is continuous.
:::

{{q:t8-normal-why}}
{{q:t8-standardization}}
{{q:t8-z-symmetry}}
{{q:t8-z-interval}}
{{q:t8-normal-ex5}}

## Derived Continuous Distributions: χ², t & F | 4 min

Besides the Normal and log-normal distributions, three derived continuous distributions appear throughout statistical inference:

- **Chi-square distribution**: `G ~ χ²(df)`, parameterized by degrees of freedom `df`.
- **Student's t-distribution**: `T ~ t(df)`, symmetric around zero:
  - Quantile symmetry: `t_{1-P}(df) = -t_P(df)`
  - Normal approximation: when `df` is large enough (`df > 30` in classical textbooks), `t_P(df) ≈ z_P`.
- **F-distribution (Fisher–Snedecor)**: `F ~ F(df₁, df₂)`, with two degrees-of-freedom parameters `df₁` and `df₂`:
  - Reciprocal quantile property: `f_{1-P}(df₁, df₂) = 1 / f_P(df₂, df₁)` (note the swapped `df₂, df₁`).

{{q:t8-t-approx}}
{{q:t8-f-reciprocal}}
