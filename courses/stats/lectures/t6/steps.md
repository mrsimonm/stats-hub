## Moving averages: smoothing a time series | 5 min

:::idea The idea
A **moving average** replaces each value by the mean of a short window around it. Moving the window along the series gives a smoothed series, which is the **trend component** tr<sub>t</sub>.
:::

Smoothing (adaptive) methods are a different way to get the trend than trend functions. The window moves forward step by step through the whole series.

- **Simple moving average**, odd length m = 2p + 1: the arithmetic mean of p values before t, y<sub>t</sub> and p values after t.
- The first p and the last p time points get **no** moving average.
- The higher m, the smoother the result.

{{q:t6-ma-what}}
{{q:t6-ma-lost}}

## Choosing m and the centred moving average | 5 min

:::teach From the lecture
If the series has a **seasonal component**, choose m **equal to the length of seasonality** s. Without seasonality, the choice of m is subjective.
:::

| Data | Length of seasonality | m |
|---|---|---|
| Quarterly | 4 quarters | 4 |
| Daily with a weekly pattern | 7 days | 7 |
| Monthly | 12 months | 12 |

When m is **even** (m = 2p), use the **centred moving average**: the mean of two neighbouring windows, so that the result belongs exactly to a time point t.

:::trap Exam trap
Moving averages are sensitive to extreme values (outliers) and **cannot be used to predict** future values: the ends of the series are missing.
:::

{{q:t6-m-monthly}}
{{q:t6-centred}}
{{q:t6-predict}}

## Seasonal component: differences and indices | 6 min

The seasonal component s<sub>t</sub> shows how much a season (quarter, month, day) pushes the values up or down. Its strength is expressed by **seasonal differences** or **seasonal indices**.

| | Additive decomposition | Multiplicative decomposition |
|---|---|---|
| Model | y<sub>t</sub> = tr<sub>t</sub> + s<sub>t</sub> + e<sub>t</sub> | y<sub>t</sub> = tr<sub>t</sub> · s<sub>t</sub> · e<sub>t</sub> |
| When | seasonal variations stable in time | seasonal variations not stable in time |
| Measure | **seasonal differences** sd<sub>j</sub> | **seasonal indices** si<sub>j</sub> |
| Units | same units as the series | relative, no units |
| They add up to | 0 | s (the length of seasonality) |

:::ana Analogy
A seasonal difference says “December sells 500 more than usual”. A seasonal index says “December sells 1.2 times the usual”.
:::

{{q:t6-sd-units}}
{{q:t6-si-meaning}}
{{q:t6-additive-when}}

## Simple approach to the seasonal component | 6 min

Trend and seasonal components are calculated **in separate steps**:

1. Trend tr<sub>t</sub> by moving averages with **m = s**.
2. For each t that has tr<sub>t</sub>: y<sub>t</sub> − tr<sub>t</sub> (additive, s<sub>t</sub> + e<sub>t</sub>) or y<sub>t</sub> / tr<sub>t</sub> (multiplicative, s<sub>t</sub> · e<sub>t</sub>).
3. The arithmetic mean of these values for each season j: the **mean seasonal difference** or **mean seasonal index**.
4. Adjust them so the seasonal differences add up to 0, or the seasonal indices add up to s.

A **seasonally adjusted** time series has the seasonal component removed: subtract sd<sub>j</sub>, or divide by si<sub>j</sub>.

{{q:t6-simple-step1}}
{{q:t6-adjusted}}

## Regression approach (quarterly, linear trend) | 6 min

Trend and seasonal components are calculated **at the same time**, by multiple regression with dummy variables x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub> (x<sub>j</sub> = 1 in quarter j, otherwise 0):

ŷ<sub>t</sub> = b<sub>0</sub>* + b<sub>1</sub>t + a<sub>1</sub>x<sub>1</sub> + a<sub>2</sub>x<sub>2</sub> + a<sub>3</sub>x<sub>3</sub>   (parameters from Excel)

1. ā = (a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub>) / 4
2. b<sub>0</sub> = b<sub>0</sub>* + ā, so the linear trend is tr<sub>t</sub> = b<sub>0</sub> + b<sub>1</sub>t
3. sd<sub>j</sub> = a<sub>j</sub> − ā for j = 1, 2, 3, and sd<sub>4</sub> = −ā
4. Prediction: ŷ<sub>t</sub> = b<sub>0</sub> + b<sub>1</sub>t + sd<sub>j</sub>

:::trap Exam trap
b<sub>0</sub>* is **not** the intercept of the trend. Add ā first: b<sub>0</sub> = b<sub>0</sub>* + ā.
:::

{{q:t6-reg-together}}
{{q:t6-sd4}}
