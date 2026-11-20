## Events & Probability Foundations | 5 min

:::idea The idea
Probability is a numerical way of thinking about uncertainty: how likely a specific event is to happen when we run a random experiment.
:::

An **experiment** is a process that results in one of two or more possible **outcomes**. In a **random experiment** (random trial), the outcome cannot be predicted with certainty—under the same conditions it can yield different outcomes (such as rolling a fair 6-sided die).

An **event** (denoted by capital letters A, B, ...) is a collection of one or more outcomes, and **P(A)** is the numerical measure of the likelihood that event A will occur.

| Event type | Notation | Probability |
|---|---|---|
| **Certain event** | E | P(E) = 1 (100%) |
| **Impossible event** | Ø | P(Ø) = 0 |
| **Random event** | A, B, ... | 0 < P(A) < 1 |

### Combining events

- **Intersection** (A ∩ B): all outcomes common to both A and B.
- **Union** (A ∪ B): all outcomes belonging to A, to B, or to both (at least one of them).
- **Disjoint (mutually exclusive) events**: their intersection is empty, A ∩ B = Ø.
- **Complementary events** (A and A'): disjoint events whose union covers all outcomes (A ∩ A' = Ø and A ∪ A' = E), so P(A) = 1 - P(A') and P(A) + P(A') = 1.

:::trap Exam trap
Disjoint (A ∩ B = Ø) and complementary (A ∩ A' = Ø AND A ∪ A' = E) are not identical: all complementary events are disjoint, but two disjoint events do not have to cover all outcomes of the experiment.
:::

{{q:t7-certain-impossible}}
{{q:t7-disjoint-vs-comp}}

## Classical, Statistical & Conditional Probability | 6 min

There are two main ways to assign probabilities to events:

- **Classical definition**: P(A) = m / n, where m is the number of outcomes favourable to A and n is the total number of outcomes. This requires assuming *before* the experiment that all n outcomes are **equally likely** (e.g., rolling a 6 on a fair die gives 1/6 ≈ 0.17, or about 17%).
- **Statistical (frequentist) definition**: when outcomes are not known to be equally likely, we repeat the experiment n times and estimate P(A) ≈ f / n, where f is the number of times A occurred. For example, if a casino die lands on 6 only 50 times in 600 rolls, P(A) ≈ 50/600 ≈ 0.083 (8.3%), suggesting the die is not fair.

### Conditional probability & independence

**Conditional probability** P(A|B) is the probability that A occurs given that B has already occurred. Two events A and B are **independent** if the occurrence of one does not influence the probability of the other:

`P(A|B) = P(A)` (or equivalently `P(B|A) = P(B)`).

For example, in one roll of a fair die, let A = {2, 4, 6} (P(A) = 0.5) and B = {4, 5, 6} (P(B) = 0.5). Given B occurred, 2 of the 3 outcomes (4 and 6) are even, so P(A|B) = 2/3 ≈ 0.67 ≠ 0.5. Thus A and B are **dependent**.

### Addition & multiplication rules

| Case | Intersection P(A ∩ B) | Union P(A ∪ B) |
|---|---|---|
| Disjoint | 0 | P(A) + P(B) |
| Independent | P(A) · P(B) | P(A) + P(B) - P(A ∩ B) |
| Dependent | P(A) · P(B\|A) = P(B) · P(A\|B) | P(A) + P(B) - P(A ∩ B) |

For instance, if two independent bank alarm systems have efficiencies P(A) = 0.9 and P(B) = 0.8, the probability that at least one detects a burglary is P(A ∪ B) = 0.9 + 0.8 - (0.9 · 0.8) = 0.98 (98%).

{{q:t7-classical-def}}
{{q:t7-casino-die}}
{{q:t7-independence}}
{{q:t7-die-cond}}
{{q:t7-bank-alarms}}
{{q:t7-mult-dependent}}

## Random Variables: Discrete & Continuous | 5 min

:::idea The idea
A random variable X turns the outcome of a random experiment into a number whose specific value we do not know before the trial.
:::

Random variables are denoted by capital letters from the end of the alphabet (X, Y, ...) and their specific values by lowercase letters (x, y, ...).

- A **discrete random variable** has either a finite or a countably infinite number of values (e.g., number of computers produced in a time interval).
- A **continuous random variable** can take any value within one or more intervals (infinitely many possible values).

### Functions describing a distribution

Both types have a **cumulative distribution function** **F(x)** = P(X ≤ x) for x ∈ (-∞, +∞), which satisfies 0 ≤ F(x) ≤ 1, F(-∞) = 0, F(+∞) = 1, and is non-decreasing. For any interval:

`P(x₁ < X ≤ x₂) = F(x₂) - F(x₁)`

| Function | Discrete RV | Continuous RV |
|---|---|---|
| Local function | **Probability function** P(x) = P(X = x), with 0 ≤ P(x) ≤ 1 and Σ P(x) = 1 | **Probability density function** f(x) = F'(x), with f(x) ≥ 0 and ∫_{-∞}^{+∞} f(x) dx = 1 |
| Cumulative F(x) | Σ_{t ≤ x} P(t) (right-continuous step function) | ∫_{-∞}^x f(t) dt (continuous) |
| Point probability | P(X = x) = P(x) | Always P(X = x) = 0, so P(X < x) = P(X ≤ x) |

A **100·P% quantile** x_P is defined by F(x_P) = P(X < x_P) = P: 100·P% of values lie below x_P and 100·(1 - P)% lie above it.

{{q:t7-discrete-vs-cont}}
{{q:t7-cdf-def}}
{{q:t7-cont-point-zero}}

## Worked Examples: Siblings & Density Functions | 6 min

### Discrete example: number of siblings (Example 1a)

Let X be the number of siblings of a randomly chosen person:

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| P(x) | 0.40 | 0.35 | 0.15 | 0.07 | 0.03 |
| F(x) | 0.40 | 0.75 | 0.90 | 0.97 | 1.00 |

- Lower than 3: P(X < 3) = P(0) + P(1) + P(2) = 0.40 + 0.35 + 0.15 = 0.90 (90%).
- At most 2: P(X ≤ 2) = P(0) + P(1) + P(2) = 0.90.
- At least 3: P(X ≥ 3) = P(3) + P(4) = 0.07 + 0.03 = 0.10 (or 1 - P(X < 3) = 0.10).
- Strictly between 1 and 4: P(1 < X < 4) = P(2) + P(3) = 0.15 + 0.07 = 0.22.

In written form, F(x) is 0.00 for x < 0, 0.40 for 0 ≤ x < 1, 0.75 for 1 ≤ x < 2, 0.90 for 2 ≤ x < 3, 0.97 for 3 ≤ x < 4, and 1.00 for x ≥ 4.

### Continuous example: density f(x) = 2x (Example 2a)

Let f(x) = 2x for 0 < x < 1 (and 0 elsewhere). Integrating from 0 to x gives:

- F(x) = 0.00 for x ≤ 0
- F(x) = x² for 0 < x < 1
- F(x) = 1.00 for x ≥ 1

To find P(1/3 < X ≤ 2/3): F(2/3) - F(1/3) = (2/3)² - (1/3)² = 4/9 - 1/9 = 1/3 ≈ 0.33 (33%).

{{q:t7-siblings-prob}}
{{q:t7-pdf-integral}}

## Expected Value, Variance & Quantiles | 6 min

Numerical characteristics summarize a probability distribution into single numbers—just like means and variances in descriptive statistics:

| Measure | Descriptive statistics | Discrete RV | Continuous RV |
|---|---|---|---|
| Level / centre | Arithmetic mean x̄ = Σ x_j · p_j | **Expected value** E(X) = Σ x · P(x) | E(X) = ∫_{-∞}^{+∞} x · f(x) dx |
| Variation | Variance s_x² = x̄² - (x̄)² | **Variance** Var(X) = E(X²) - [E(X)]² | Var(X) = ∫ x²·f(x) dx - [E(X)]² |
| Spread (same units) | Standard deviation s_x | **Standard deviation** S.D.(X) = √Var(X) | S.D.(X) = √Var(X) |

### Worked calculations

- **Siblings (Example 1b)**:
  - E(X) = 0(0.4) + 1(0.35) + 2(0.15) + 3(0.07) + 4(0.03) = 0.98 siblings.
  - Var(X) = [0²(0.4) + 1²(0.35) + 2²(0.15) + 3²(0.07) + 4²(0.03)] - 0.98² = 2.06 - 0.9604 = 1.0996.
  - Quantiles from F(x): x₀.₂₅ = 0 siblings (F jumps to 0.40 at 0); x₀.₉₅ = 3 siblings (F jumps from 0.90 to 0.97 at 3).
- **Continuous f(x) = 2x on (0, 1) (Example 2b)**:
  - E(X) = ∫₀¹ x · 2x dx = 2 · [x³/3]₀¹ = 2/3.
  - Var(X) = ∫₀¹ x² · 2x dx - (2/3)² = 2 · [x⁴/4]₀¹ - 4/9 = 1/2 - 4/9 = 1/18.
  - Lower quartile: F(x₀.₂₅) = x² = 0.25, so x₀.₂₅ = √0.25 = 0.5.

{{q:t7-siblings-moments}}
{{q:t7-quantile-siblings}}
{{q:t7-cont-quantile}}
