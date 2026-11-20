# stats 3 seminar

Date: 2026-10-09  
Folder: Stats

## Summary

Statistics seminar 3 covered descriptive measures for quantitative variables: mean, median, mode, variance, standard deviation, MAD, coefficient of variation, weighted means and decomposition of variance, with homework assigned.

### Measures of Central Tendency
- Simple arithmetic mean (Excel AVERAGE) is used for raw datasets: sum of values divided by n.
    - Means: grades 3.13, age 19.87 years, weight 65.47 kg, semester 3.53
- Median (Excel MEDIAN): grades 3, age 20, weight 64 kg, semester 3; reselect D2:D16 manually.
- Mean uses all values but is sensitive to outliers; median is robust. Request both and dig deeper when they differ.
- Mode: grades 2, age 19, semester 3; skipped for weight since it has too many distinct values.

### Absolute Variation
- Range and interquartile range noted; variance (Excel VAR.P, heard as 'var.d') is the main measure.
    - Variances: grades 5.05, age 0.65, weight 132.52, semester 0.78
- Absolute measures depend on level, so only similar-level variables can be compared; variance has squared units and no factual interpretation.
- Standard deviation (STDEV.P) is the square root of variance: grades 2.25, age 0.81, weight 11.51, semester 0.88.
    - Majority of ages fall in mean +/- SD: 19.06 to 20.68 years
- Variance and SD inherit outlier sensitivity from the mean; MAD (median absolute deviation) is robust, computed in 4 steps in Excel.

### Coefficient of Variation
- VX = standard deviation / mean, allowing comparison across levels: grades 0.72, age 0.04, weight 0.18, semester 0.25.
- Grades vary most (max 11 is 11x min 1); age least (21 vs 19). Students should anticipate this from the data before the test.
- Theoretically VX can take any value, including negative (negative mean) and very large (mean near 0).
- First midterm test is in about five weeks.

### Data Analysis ToolPak and Sample Variance
- Descriptive statistics tool: include labels in first row, tick summary statistics, output to a new sheet.
- ToolPak reports sample variance and sample SD (s², s) with n minus 1 in the denominator; s appears later in the course.

### Weighted Mean and Decomposition of Variance
- Weighted mean applies to frequency tables; with relative frequencies age mean is again 19.87 years.
- With only group sizes, group means and group variances (no individual values), use group-mean formulas.
    - Females n=7, mean 2.143, var 0.408; males n=8, mean 4, var 7.5
- Overall mean from group means is 3.13; decomposition: mean of group variances plus variance of group means.
    - Parts approx 4.167 and 0.859; total about 5.03, close to 5.05 (rounding)

### Next Steps
- (Students) Practice variance for grades by calculator until it takes about two minutes, including the definition formula
- (Students) Calculate age variance from the frequency table using all four formulas (expected 0.65)
- (Students) Practice weighted mean and decomposition of variance with the other frequency type at home
- (Students) Complete exercises after seminar 3 and redo any calculations that caused difficulty
- (Students) Activate Data Analysis ToolPak and finish unfinished Excel work after the seminar

## Transcript

[01:28] Speaker 1: Takzvaně, aby nebylo kam brát prostě ty věci.
[01:33] Speaker 1: Ano, ano, to jsem si říkal předtím.
[01:38] Speaker 1: Tady to budu scrollovat jako pryč, když už musím. Bylo to tím, jak já dělám hodně, takže mě často to vývoj napoví ty úrovně.
[01:50] Speaker 1: A věřím, že když tohle je takhle, tak asi nese i víc.
[01:58] Speaker 1: Asi zajímavý. Teď jsem jen řekl "vůbec neznáš".
[02:05] Speaker 2: Okay, what is it, primary?
[02:11] Speaker 1: Poznámek. Okay, so good afternoon one more time, let's get started.
[02:19] Speaker 1: And the topic is quite clear: the schedule statistics. And you should have three things, not just the excel file for today.
[02:30] Speaker 1: In the training sessions, hopefully you will already have been practicing with your companions. The best approach, of course, is to use those ones you plan to use during the test.
[02:40] Speaker 1: And the format stays the same, right? Format stays, calculator, and prepare excel files.
[02:49] Speaker 1: Okay, and let's get started. So, topic is hard here.
[02:56] Speaker 1: Today we are practicing content of lesson 2. It's station number 1 in the front-of-hours test where we go.
[03:03] Speaker 1: We have covered already the frequency distribution tables and the quantiles, and today we have lots of things to do. We are about to cover the rest of the outline formulas, so we will either use them or just recommend them, and we need to do all that.
[03:19] Speaker 1: So, while a week ago we have worked with qualitative as well as quantitative parallels, today we will discuss the tools which are focused just on quantitative variables. So today we learn to calculate some distribution statistics, some measures, expressing some properties of the quantitative variables in our dataset.
[03:38] Speaker 1: There are four of them, actually, wait, they're for the next semester. And from serious reasons, I recommend that you also note down all the results, like by hand, into a table where we will have constants of variables, like center weight, age, weight, weight, and semester.
[04:07] Speaker 1: Age weight and semester. And we will write there all our results.
[04:14] Speaker 1: As you should know from lesson 2, regarding the quantitative parallels, you may study, or should be able to study, in this course, after passing this course, two properties. The first property of quantitative parallels you might be interested about is level.
[04:28] Speaker 1: Level. And the most important representative of the so-called measures of central tendency, measures of central tendency, are used to explain the level.
[04:39] Speaker 1: The most important one is the arithmetic mean. Arithmetic mean.
[04:45] Speaker 1: The symbol in the formula space is X bar. In, let's say, the first half of the seminar we will work with the data center unit on the screen.
[04:54] Speaker 1: It's a raw dataset, so by that, what's meant by that, we are just listing all the values, right? We did nothing with it.
[05:02] Speaker 1: Now to, we will work with so-called raw dataset. And in the case of working with raw dataset, the formula you should use to calculate the arithmetic mean, specifically, is this one.
[05:16] Speaker 1: It's called simple arithmetic mean formula. And if you don't have it in your formula system now, I recommend writing next to it raw data, right?
[05:25] Speaker 1: So this is so-called simple arithmetic mean formula. And it's the one which is to be used in the case of working with raw dataset.
[05:34] Speaker 1: It's pretty simple, so it's called simple arithmetic mean, because we just need to sum up the values. And derive it by, derive the sum by n by the dataset size.
[05:45] Speaker 1: So simple arithmetic mean is the one to be used in the case of raw dataset. And we will exactly do that, using the calculators.
[05:53] Speaker 1: But before, always before the calculations with the calculators, to see what the correct results are, we will find them in Excel. So the first thing we will calculate is going to be the arithmetic mean.
[06:12] Speaker 1: That's going to be the arithmetic mean, and we will calculate this in, if we have the same dataset, hopefully I have it in row 17. So we will use a function.
[06:23] Speaker 1: We will use a function to do that. At this point of semester, everyone should be familiar with using functions in Excel, because we did it already when we were here.
[06:32] Speaker 1: So I will go a little bit faster here. So I have pointer in this tab, where I will give the specification here.
[06:40] Speaker 1: Then we go for insert function, as we did a week ago. Insert function.
[06:46] Speaker 1: And in category statistical, the function we will use right now, the function which corresponds exactly to this simple arithmetic mean formula, is function average. So you need to use the average function.
[07:02] Speaker 1: I will just say this one more time. So function average is the one which is used, which can be used for applying the simple arithmetic mean formula.
[07:12] Speaker 1: And as you can see, there is just one argument for this function, the argument being the data area, the area of data from which you want the arithmetic mean, actually, to be calculated. And as you can also see, the Excel tries to guess what the data area might be.
[07:31] Speaker 1: So here, the guess is correct. We have data in cells from D2 till D16 for center weight.
[07:37] Speaker 1: So if you go here, you can just click enter or okay, and that's it. The huge advantage of using functions in Excel, we have also mentioned a week ago, is that we can drag the function to other rows or columns by finding a spot at right bottom of the cell with the function, right bottom corner of the cell with the function, where your pointer looks like small glass.
[08:02] Speaker 1: And by holding the button of your mouse, you can drag the function to the other column, getting the results. And the results are as follows.
[08:10] Speaker 1: For the exponent grades, the arithmetic mean is 3.13 for the exponent grades.
[08:18] Speaker 1: The arithmetic mean is 3.13 exponent grades for weight. The result is, for age, you know this 19.87, 19.87 years.
[08:32] Speaker 1: For weight, it's 65.47, 65.47 kilograms. And for semester, it's 3.53 semesters, 3.53 semesters.
[08:48] Speaker 1: So before we move to the practice with the calculator, just a quick discussion: what is this good for? Well, that's the main purpose of statistics.
[09:00] Speaker 1: The topic we are studying today is that by calculation of these numbers, we try to summarize the information about the level of the values of those quantitative variables in our dataset in between numbers, so that we can discuss them and compare them. So obviously, in our case, what we can say is that the arithmetic mean for exponent grades is 3.13, while the arithmetic mean for weight, for example, is 65.47.
[09:34] Speaker 1: So we can compare these by plotting them on the x-axis. And by comparing those, we can quickly say that the level of the variable weight in our dataset is higher than the level of the variable exponent grades, right?
[09:49] Speaker 1: Still babe? You are here for the first time?
[09:53] Speaker 1: And probate is the correct pronunciation? Obate.
[09:55] Speaker 1: Okay. So that's it.
[09:59] Speaker 1: That's what it is about, right? That's why we do that.
[10:01] Speaker 1: We try to summarize the information about all the two numbers so that we can discuss it quickly. In our case, of course, the result is obvious, that the values of weight tend to be much higher than exponent grades.
[10:15] Speaker 1: People usually have a high weight than the number of exponent grades, right? So it makes sense.
[10:19] Speaker 1: But imagine a situation where you would have no information about the variables. Let's say they are denoted simply as variable A, variable B.
[10:27] Speaker 1: So once you would have the information in the form of the arithmetic mean, you can compare those, saying, okay, variable B has a higher level than variable A, right? So that's the point of statistics.
[10:37] Speaker 1: You try to summarize information about the values in between numbers. So that's the arithmetic mean.
[10:43] Speaker 1: And now, as a warm-up, please use your calculator to get the arithmetic mean for exponent grades. We'll always practice it with the exponent grades variable.
[10:53] Speaker 1: So everyone, take your calculator, preferably the one you're trying to use during the test, and calculate it manually. Your results should be 3.13.
[11:02] Speaker 1: And this is simply just a warm-up. You.
[11:06] Speaker 1: Bh. You just need to sum up the values and derive the sum by 15, right?
[11:11] Speaker 1: So you should do this with your calculator. If you, for some mysterious reasons, don't have your calculator here, like Ms.
[11:17] Speaker 1: Yeshua, you should, you can do that that way, or with your mobile phone, but the most preferable way is to use the calculator when you're doing the test, right? Because, like, for the calculators, so my recommendation is to use it really, like, right?
[11:34] Speaker 1: So you can do that. You can do that.
[11:37] Speaker 1: And then it's not a problem either if you write, but there are reasons why I recommend using the calculator, right? So 3.13 should be your result.
[11:51] Speaker 1: 3.20. Great.
[11:55] Speaker 1: Then we had more challenging calculations, of course. But the warm-up, everyone should get the results once we work with it.
[12:02] Speaker 1: We will not read them right now. Okay, so that's the arithmetic mean.
[12:07] Speaker 1: The arithmetic mean is known, of course, the only measure of level, measure of central tendency, by which we can explain the level. The other one, very important one, also is the median.
[12:18] Speaker 1: Median is 50% quantile. We know it from the previous seminar.
[12:21] Speaker 1: So I won't comment on that anymore. Let's just find the results.
[12:26] Speaker 1: Let's just find the results in Excel, quickly, using the functions. And for finding the median in Excel, there is a function.
[12:40] Speaker 1: I'm just super shocking. The function is called median.
[12:44] Speaker 1: So we need to find in the category statistical function called median to get the median.
[12:56] Speaker 1: And the only thing you should be careful here, even this time, the Excel tries to guess what the data area, but roughly, it, of course, it includes the row 17 with the arithmetic mean. So this time, we need to use, well, we have to do that, but for example, by button of your mouse, selecting the area again from D2 till D16 manually, right?
[13:21] Speaker 1: So just be careful there. Otherwise, there's no problem here.
[13:27] Speaker 1: After that, you can drag it to the other row, the other columns again, getting all the results very quickly. And we can note down that the median for exponent grades, in our case, is 3 exponent grades.
[13:40] Speaker 1: For the age, it's 20 years.
[13:47] Speaker 1: For the weight, it's 64 kilograms. 64 kilograms.
[13:54] Speaker 1: Into semester, three semesters. So everyone should know what median is, right?
[14:03] Speaker 1: We covered quantiles already a week ago. And what you also should know from lecture 2 are the properties of these two alternative measures of central tendency, right?
[14:17] Speaker 1: So just very quickly, you should know that the arithmetic mean is generally better because it uses all the values, but it's so-called tentative on the outliers for its values, right? So if there are some mysterious outliers in your dataset, the arithmetic mean becomes kind of, like, destroyed by that, or damaged.
[14:36] Speaker 1: And while median is so-called robust, and it ignores the outliers, right? Robust means that it ignores the outliers.
[14:42] Speaker 1: So if there are outliers for its values, median is better than the arithmetic mean. Bye-bye.
[14:47] Speaker 1: And there's like a recommendation for practical use. If you are in situation in future where giving task, someone to calculate the analysis for you, right, my recommendation would be to require both of them.
[14:59] Speaker 1: Of course, there's no reason why not to get both of them, arithmetic mean and median, if you were to make some decisions on the base of that. In most situations, they are the same, like in our case, or very similar.
[15:10] Speaker 1: So we should only focus on the situation when they differ a lot, right? And you should go dig deeper, trying to find why that's so, right?
[15:18] Speaker 1: Okay. So in our case, we can see that they are almost the same or very similar in all cases.
[15:27] Speaker 1: So we have got the median. And the last, not so important, but still, let's put it on the list, measure of central tendency to express the level is mode.
[15:41] Speaker 1: Mode is the most often occurring value, the values with the highest frequency. We'll look at finding it in Excel.
[15:48] Speaker 1: So it's super simple. So just practice the principle.
[15:52] Speaker 1: Please help me. Which value appears here most often?
[15:58] Speaker 1: I think it's value 2, but please check me if I'm not wrong. So the mode for exponent grades is 2 exponent grades.
[16:08] Speaker 1: For the age, the most, ah, you can see here, it's 19. For the age, it's 19 years.
[16:19] Speaker 1: For semester, super simple, three semesters. And we are not going to find the mode for weight.
[16:29] Speaker 1: We could mechanically do that, but weight is a variable which has, like, many, many different values, right? Weight, it's a unit variable which may get many, many different values.
[16:42] Speaker 1: And in such a case, finding mode doesn't make much sense because just, you know, by coincidence, for such variable, you could have each value once there. In the case of all, all those will be mode and the information in that will be classified.
[16:57] Speaker 1: So we will not find the mode for the weight because it gets many, many different values, and it might be useless in such a case. All right.
[17:06] Speaker 1: That was the mode. And let's rather move to something much more serious and, I'll pray, even a little bit more complicated, which is the other property you might be interested about in the case of, in the case of quantitative variables.
[17:24] Speaker 1: And that's the variation. So the other property you might be interested about when studying distribution of quantitative variables is the variation.
[17:40] Speaker 1: Variational variability, right? Here, we will also need to distinguish two kinds of variability or variation.
[17:50] Speaker 1: We will discuss measures of absolute variation and measures of relative variation. So absolute and relative variation.
[18:01] Speaker 1: And let's check out what we have on this on page number one in the pronouns list. So the most basic representatives of measures of absolute variation are range, which is just the difference between the maximum and minimum value.
[18:24] Speaker 1: I think we actually used this a week ago when discussing the, making decision about intervals in the position interval. So range, super simple, maximize, minimum.
[18:36] Speaker 1: And next to that, we have interquartile range, where we will just calculate the difference between upper quartile and lower quartile. Again, super simple, right?
[18:46] Speaker 1: So we don't know what we're here. It's just to have it on the list.
[18:50] Speaker 1: But I would like, I would say that in serious analysis, this should be part as well of that, right? If you want to show someone, show the distribution of the data, this is what you are, I would say, potentially a very important part of that.
[19:07] Speaker 1: But what we'll do here instead, we will rather focus on something more complicated. To use our precious time here as much as possible, and that's going to be variance.
[19:20] Speaker 1: Variance in the pronouns list is denoted by SX squared. So the most important measure of absolute variation you focus on is so-called variance.
[19:34] Speaker 1: In the pronouns list, the notation is SX squared. And there are many pronouns, again, for the variance.
[19:45] Speaker 1: It's a similar principle as for the arithmetic mean. This is actually good news because they are the same, right?
[19:49] Speaker 1: They are all the same variant. And they are different pronouns only to be used in different situations in terms of what the data structure you possess, what the data structure you start your calculation with.
[20:01] Speaker 1: And we now work with a raw dataset, and for that situation, there are the first two pronouns. So if you don't have this note in your pronouns yet, you should rather put these two pronouns in the bubble and write next to them raw dataset, right?
[20:15] Speaker 1: So these are applicable in the case of raw dataset. And to these two pronouns, they in Excel correspond to the function var.d.
[20:25] Speaker 1: All right. So now we work with a raw dataset, and we will start, we will start our calculation with finding the variances for our dataset using the var.d function, which corresponds to those two pronouns applicable in the case of raw dataset.
[20:47] Speaker 1: That's exactly our situation. So we work with raw dataset, and the next thing we are going to calculate is going to be the variance for our four quantitative variables using the var.d function.
[20:59] Speaker 1: So we'll do that. Category statistical, var.d function.
[21:10] Speaker 2: Sir, why don't we use sample variance?
[21:14] Speaker 1: Please hold the question. We'll try to explain that in, like, 45 minutes, right? So var.d is the function which corresponds in Excel to these formulas.
[21:27] Speaker 2: Sorry.
[21:28] Speaker 1: These formulas are the same as the var.d function, right? They are the same. So that's why we did that.
[21:34] Speaker 1: We want to calculate the variance using those formulas. So var.d function, connecting the area like this.
[21:45] Speaker 1: And we can plug our function throughout the columns and note down our results. So for exponent grades, it's 5.05.
[21:57] Speaker 1: For the age, it's 0.65.
[22:05] Speaker 1: For the weight, 132.52. And for semester, it's 0.78.
[22:21] Speaker 1: So before we move to the manual calculation, I would like to give a brief comment on that. The variance has two, like, problems, right?
[22:35] Speaker 1: Two weaknesses. Two difficulties are there with the variance.
[22:38] Speaker 1: The first one, and important in the same problem, for all measures of absolute variation. All measures of absolute variation have a common problem, explained this way.
[22:51] Speaker 1: And the problem is that they are strongly influenced by the level. Not allowing for comparison of variation of variables with different levels.
[23:02] Speaker 1: So what's the point if you have weight with high level, right? That is around 65.
[23:09] Speaker 1: If you would calculate variance for them, it's kind of logical, natural to get a much higher value. Then if you would calculate variance for some variable, which has the values around 3, right?
[23:20] Speaker 1: So all measures of absolute variation are strongly influenced by the level. And you can, therefore, use it for comparison of variation of variables with different levels.
[23:30] Speaker 1: In our example, in our dataset, we have two variables with a similar level, exponent grades and semester, right? A very similar level.
[23:38] Speaker 1: And therefore, we might be able to compare the variation using the variances, but not with the others, right? So if you have variables with different levels, you can use any measure of absolute variation for comparison of the, of the variation of those variables, right?
[23:54] Speaker 1: So we cannot compare in general these values we have here. And then the variance has an additional, additional serious problem, which is the reason why I, on purpose, have not written here the units.
[24:07] Speaker 1: I will demonstrate this using the weight variable. Weight variable is in kilograms.
[24:12] Speaker 1: Units are kilograms. During the process of the calculation of the variance, you always square the values of the value, meaning that the variance of those values would be in some kilograms squared, which is, of course, nonsense, right?
[24:27] Speaker 1: So for these mathematical reasons, variance, that's strange, variance as a number has no factual interpretation, right? We cannot say, well, this means, right?
[24:40] Speaker 1: That's why we should understand how it was calculated in mathematical sense. We should understand that it bears information about variation, but that's all.
[24:49] Speaker 1: The fact that it bears information about variation can be best seen using this example. Let's imagine you have a dataset for this big problem of the same number, 222.
[24:57] Speaker 1: And what will be the variance calculated from these three numbers? Logically, how big variation is there?
[25:04] Speaker 2: Zero.
[25:05] Speaker 1: Zero. There's no variation in those, in the dataset at all. So the variance indeed would be equal to zero, showing there is no variation at all, right?
[25:18] Speaker 1: So it works, right? It works very well.
[25:22] Speaker 1: It bears information about the variation, but from these reasons, we cannot say anything about that, which is unpleasant, of course, right? So that's, like, the discussion about the variance itself.
[25:35] Speaker 1: And now let's see the pronouns. You will be tasked, and that's maybe the best, the biggest challenge, typically for students, to calculate the variance for exponent grades manually.
[25:47] Speaker 1: You have two pronouns here. The first one is for definition formula, sum of XI minus the arithmetic mean squared over the N.
[25:58] Speaker 1: Or you can use, in the case of raw dataset, the confidential formula where you take mean of squared value minus square of the arithmetic mean. And here today, I would like you to practice to try to calculate the variance for the exponent grades using your calculator and using the computational formula.
[26:24] Speaker 1: The definition formula and for manual practice is left for homework. But now you should try calculating the variance for exponent grades.
[26:33] Speaker 1: Everyone, the result should be very cold. It's calculated to 5.05 using this computational formula.
[26:41] Speaker 1: And how that's done, and it's from here. So everyone who hesitate, pay attention.
[26:45] Speaker 1: What you need to do, you need to square each individual value of exponent grades, each of those, sum the squared values up, divide by N. By that, you will get arithmetic mean of squared values.
[26:57] Speaker 1: And then don't forget to subtract, subtract arithmetic mean squared, which in our case is 1.13.13 squared, right?
[27:11] Speaker 1: So get on with it. Get your calculator and give this a try.
[27:15] Speaker 1: This is challenging. Typically, like, half of the people manage to do that.
[27:21] Speaker 1: Half people, half of the class struggle. But please try.
[27:25] Speaker 1: You can try.
[27:33] Speaker 1: Okay.
[27:38] Speaker 1: Example. Where's your calculator?
[27:39] Speaker 3: I forgot it.
[27:40] Speaker 1: Oh, forget it. Your calculator. So try a different calculator or, yeah.
[27:48] Speaker 1: But of course, it's important if you don't have your calculator here today, it's kind of a missed opportunity, right? So, so, and the result should be 5.05.
[28:02] Speaker 1: So who gets the correct result? Wave your hand for me from the time we're having.
[28:09] Speaker 1: Do you see how I did the calculation?
[28:24] Speaker 1: Yeah, this may take some time, right? So it's the first case when you make a difference in your life.
[28:29] Speaker 1: So you can spend some time here. For those who want to give it a try, take a chance.
[28:34] Speaker 1: So I'm curious who will be the first to manage to get 5.05. Some number close to that?
[28:51] Speaker 1: Here we go. 5.07, right?
[28:53] Speaker 1: There might be some difference because of rounding. We use the 3.13 is rounded.
[28:58] Speaker 1: The result in Excel are precise, right? So Mr. and Ms. over there, will you?
[29:06] Speaker 1: So who else? It should be 5.07, maybe, with your calculators.
[29:13] Speaker 1: 5.06, right? The sign is ticking.
[29:18] Speaker 1: Mr. Right?
[29:18] Speaker 1: You done? Or what?
[29:19] Speaker 3: Yeah, I did. But it was not.
[29:22] Speaker 1: It was not the correct result. Mr. and Ms.?
[29:30] Speaker 3: I don't know. It was my first day.
[29:31] Speaker 1: All right.
[29:33] Speaker 3: But I guess he's submitting that.
[29:37] Speaker 4: Wait, wait. What did you say?
[29:37] Speaker 3: Yeah, I checked it 10 times. It's normal.
[29:40] Speaker 1: Every time should be the same, of course. Every time should be the same. It's what it might take even more time.
[29:44] Speaker 3: Think everyone has the excel. Everyone has something different.
[29:47] Speaker 1: You should try this at home.
[29:49] Speaker 3: Yeah, but all of them have a second seminar Excel. They don't have any Excel for second seminar.
[29:55] Speaker 1: 5.06, right?
[29:55] Speaker 3: That's the issue.
[29:56] Speaker 1: That's probably not this one. No. Okay.
[30:01] Speaker 1: So no one else got 5.05? Okay.
[30:06] Speaker 1: Mr. and Ms., are we good? Okay.
[30:15] Speaker 1: Yeah, it should be plus not minus.
[30:17] Speaker 3: Yeah, I just did.
[30:19] Speaker 1: It's strange to get minus.
[30:25] Speaker 1: It would still be a different number in that case. Oh, maybe not.
[30:31] Speaker 1: Yeah, yeah, it's not. Okay, okay.
[30:33] Speaker 1: Maybe. Okay.
[30:34] Speaker 1: So it would be a mistake in the test, of course. Okay.
[30:38] Speaker 1: So, you good?
[30:42] Speaker 1: So, ladies and gentlemen, hey, hey. Now listen.
[30:47] Speaker 1: Please, please pay attention. This is serious.
[30:49] Speaker 1: If you have difficulties getting the variance with your calculators today, it's no problem. What would be a problem if that you would have the difficulties also next week, right?
[31:00] Speaker 1: So everyone should be able, with your calculator, to get variance without doubt like in two minutes, right? Don't sleep on your layers.
[31:11] Speaker 1: Mr. and Ms., you should try it at home with the other formula, right? We did it just with this one.
[31:17] Speaker 1: But everyone should be able to do this by proposal. So if you have, hey, hey, it's not a problem if you have difficulties today, Mr. and Ms., but you should take your time to be really confident.
[31:31] Speaker 1: You good?
[31:31] Speaker 3: Yeah.
[31:32] Speaker 1: Ah. To be really confident with getting the result next week, right? Very important.
[31:38] Speaker 1: Very important. Okay.
[31:39] Speaker 1: So let's move on. And if we already have the variance, even with this calculator, everything else is much, much easier.
[31:49] Speaker 1: Because the next measure of absolute variation on the list is the standard deviation, which is super simple if you already have the variance.
[32:01] Speaker 1: So the next measure of absolute variation is standard deviation. Standard deviation.
[32:10] Speaker 1: Simple and informal space is SX. SX is calculated just as a square root from the variance.
[32:16] Speaker 1: So even this calculator, if you already have the variance, it's very simple, right? You just need to take square root of the variance to get the standard deviation.
[32:29] Speaker 1: Or there is, or there is, there is a function for that. So we'll practice the Excel functions.
[32:40] Speaker 1: We'll do it. But even with calculators, this should be easy.
[32:43] Speaker 1: You just take square root of the result we have in the variance row. But in Excel, it's fine.
[32:49] Speaker 1: You just use the function to extend it. Standard deviation.
[32:57] Speaker 1: And the function we are looking for this time in category statistical is the function STDEV.P.
[33:14] Speaker 1: Don't forget to switch out the area of data as usual. But again, this you will find you will get the same result by simplifying taking square root of the variance values, right?
[33:25] Speaker 1: So practice with functions. We use the function in Excel.
[33:30] Speaker 1: Yeah. And we quickly get the result.
[33:37] Speaker 1: So for exponent grades is 2.25. Exponent grades for H is 0.8055.
[33:47] Speaker 1: Two decimals, please.
[33:48] Speaker 5: Okay. 0.855.
[33:50] Speaker 1: 0.85?
[33:53] Speaker 5: 0.81.
[33:54] Speaker 1: 0.81.
[33:54] Speaker 5: Oh, I'm sorry.
[33:57] Speaker 1: Everyone for weight?
[33:59] Speaker 5: 11.51.
[34:01] Speaker 1: Kilograms and semester?
[34:03] Speaker 5: 0.88.
[34:05] Speaker 1: 0.88?
[34:06] Speaker 5: Yes.
[34:07] Speaker 1: 0.88. Thank you, gentlemen. Welcome.
[34:11] Speaker 1: Saving a few seconds. Okay.
[34:12] Speaker 1: So it's still a measure of absolute variation. So still, these results are influenced by variables.
[34:19] Speaker 1: Still, we cannot compare the values in this row. But as the variance had this struggled with the difficulties of squared units, by taking square root of the variance, we get back to the original units.
[34:36] Speaker 1: That's why I on purpose, ladies and gentlemen, have original units for the row of variance. We stress that, right?
[34:42] Speaker 1: But for standard deviation, we can do that again. And therefore, standard deviation already has some sort of factual interpretation.
[34:54] Speaker 1: I will show it. I will show it, for example, for exponent grades.
[34:59] Speaker 1: It's going to be, oh, no, for the H. I will show it for the H.
[35:02] Speaker 1: It's going to be easier. The interpretation of the standard deviation is as follows.
[35:05] Speaker 1: For the H, we have arithmetic mean of 19.87 years. And the standard deviation, 0.81 years.
[35:18] Speaker 1: 0.81 years. And the possible interpretation, factual interpretation of the standard deviation is as follows.
[35:27] Speaker 1: It tells us that the majority of the values, like more than 50% of the values in the dataset, are in the interval, are in the interval arithmetic mean minus the standard deviation.
[35:45] Speaker 1: So in our case, this is 19.06. So the majority of the measures in our dataset are in the interval from 19.06 to arithmetic mean, that the upper boundary arithmetic mean, plus the standard deviation.
[36:08] Speaker 1: So in our case, the upper boundary would be 20.68. And it's in years.
[36:20] Speaker 1: So the main point here is that we should understand the reasons, is that for standard deviation, we are at least able to say at least something, right?
[36:31] Speaker 1: At least something can be said about the standard deviation. Nothing can be said about values of variance, right?
[36:38] Speaker 1: For standard deviation, there is at least some. Of course, you can ask what this is good for.
[36:42] Speaker 1: I don't know. But the main point is that it can be done, right?
[36:47] Speaker 1: You can say something in factual sense about the value of the standard deviation. So we go through it, kind of the second problem with the variance.
[36:56] Speaker 1: But sadly, it's still a measure of absolute variation. Still influenced by the normal.
[37:00] Speaker 1: Still, we are unable to compare these numbers for variables with different values. What's also good to stress is that, ladies and gentlemen, please be sure to see this.
[37:13] Speaker 1: The variance and consequently, of course, the standard deviation, they are using the arithmetic mean. We know that arithmetic mean is sensitive to outliers, to extreme values.
[37:26] Speaker 1: It's influenced strongly by outliers in extreme values. And as for the calculations of the variance, you are using the arithmetic mean.
[37:33] Speaker 1: It kind of takes the property of the arithmetic mean with it, right? So we can say the variance, as well as standard deviation, are also sensitive to outliers, right?
[37:41] Speaker 1: Because they are using arithmetic mean, which is itself also sensitive to outliers, right? So when you use the latest for something, it also takes with it the outlier properties of the arithmetic mean.
[37:52] Speaker 1: We have here one more representative of measures of absolute variation, which is robust, like, which ignores the outliers. And it's this math.
[38:07] Speaker 1: I will show you the letters so it's better readable. Math.
[38:12] Speaker 1: Like crazy. It's the abbreviation for median absolute deviation.
[38:17] Speaker 1: Median absolute deviation. And it's calculated, can be calculated in four steps.
[38:25] Speaker 1: In the first step, you find median. Easy.
[38:29] Speaker 1: In the second step, it should be also easy. You just find deviations of individual values from the median.
[38:39] Speaker 1: In the third step, you will take absolute values. In the third step, you will take absolute value of these deviations.
[38:51] Speaker 1: And in the fourth and last step, you just need to find the median one more time. Median from these absolute deviations.
[39:03] Speaker 1: And that's it.
[39:07] Speaker 1: What you should perceive is that the math is using median, right? And we know that median is robust, ignoring the extreme values.
[39:18] Speaker 1: And therefore, the math, which uses the median, has the same property. It's also robust because it uses the median.
[39:26] Speaker 1: Huh?
[39:26] Speaker 5: Yeah. And that's why we use median as a method. Yeah.
[39:29] Speaker 5: So we show it soon as in the data.
[39:32] Speaker 1: So what?
[39:33] Speaker 5: Soon as in the data.
[39:37] Speaker 5: Like this cube to the right.
[39:39] Speaker 1: Maybe. Yeah, that's my one case. Yeah, yeah, yeah, yeah, yeah.
[39:42] Speaker 1: I guess it's not boundaries. But you are right.
[39:45] Speaker 1: Yeah. So exactly.
[39:47] Speaker 1: So the mean variance and standard deviation are using the mean inversion of mean. So they are sensitive to outliers.
[39:54] Speaker 1: Math is using median. So with this, robust, it ignores the outliers.
[39:58] Speaker 1: Okay. So let's try finding that.
[40:00] Speaker 1: There is no function for math, unfortunately, in Excel. So we need to do it kind of manually.
[40:09] Speaker 1: So don't overactivate the tribe. Please be focused.
[40:11] Speaker 1: Don't forget log. Let's copy.
[40:14] Speaker 1: Control C. Control C.
[40:16] Speaker 1: The values of exponent grades. We will do it for exponent grades only.
[40:19] Speaker 1: Control C. Let's copy those to a new sheet.
[40:25] Speaker 1: Control C, control V. I just copied the exponent grades to a new sheet.
[40:32] Speaker 1: And the first step we need to do, according to what we have on the whiteboard, is that we need to find median, right? We need to find median one more time.
[40:42] Speaker 1: So we'll do that using function median.
[40:47] Speaker 1: Function median.
[40:51] Speaker 1: Here we go. Okay.
[40:55] Speaker 1: And that's the first step, right? So that's the first step.
[41:10] Speaker 1: Second step, in our efforts to find the math, is to do the deviations. So in the second step, we need to calculate deviations of the individual values from the median.
[41:32] Speaker 1: What's important this time over, I think we did it once.
[41:41] Speaker 1: Yeah, I think we did it. To be efficient in Excel as much as possible, it's to use F4 key.
[41:49] Speaker 1: F4 key and click the reference to the median. So by pressing F4 key at this point, F4, the dollars will appear there and it will click the reference to the cell with the median.
[42:02] Speaker 1: That will mean to easily track my formula to the other rows afterwards.
[42:18] Speaker 1: Okay. That was the second step.
[42:20] Speaker 1: And the third step is the calculation of the absolute deviations. Absolute deviations.
[42:30] Speaker 1: In Excel, the easiest way to do this is to use the function, which is there for these equations. It's the ABS function, right?
[42:43] Speaker 1: So in Excel, this time we'll use the ABS function. ABS function.
[42:52] Speaker 1: Calculate the absolute values.
[42:56] Speaker 1: If you don't know where the ABS function is to be found in the list, it's easier to go for the list of all functions where the ABS function is comfortably the first one in the third row. ABS function.
[43:14] Speaker 1: And we want to calculate the absolute values from the deviations we have in column C.
[43:28] Speaker 1: And we're almost done. The last step, number four, is just to calculate the median of these absolute deviations.
[43:34] Speaker 1: And that's it. So we will find the math by using the median function one more time.
[43:48] Speaker 1: And calling this on the columns in column D. On the values from column D.
[43:53] Speaker 1: And that's it.
[44:13] Speaker 1: Yes. Ladies and gentlemen, I totally appreciate everyone's efforts.
[44:16] Speaker 1: But what's important, what's more important is to understand what we are doing. If you have difficulties, someone is fast in Excel, someone is slow.
[44:25] Speaker 1: So if you have difficulties in Excel, it's no big deal. Just please make a note and try it in peace after the seminar.
[44:32] Speaker 1: It's more important to understand what we are doing, right? Note down my comments.
[44:37] Speaker 1: Note down the interpretations. If you miss something in Excel, it's no big problem, right?
[44:42] Speaker 1: You can just finish that after the seminar in peace. What would be more?
[44:47] Speaker 1: Are you listening? Please.
[44:49] Speaker 1: I'm saying that it's not so important to manage everything on the spot in the Excel. It's more important to understand what we are doing.
[44:57] Speaker 1: Perceiving my notes, my comments, making notes. And you can just finish the work in Excel after the seminar, right?
[45:05] Speaker 1: Or while listening. All right.
[45:08] Speaker 1: So that was the math. It's still a measure of absolute variation.
[45:13] Speaker 1: So if you are having all the math for other variables, we might still not be able to compare them. And we would get rid of this problem by calculating the only representative for measures of absolute variation we have in our course, which is the very last formula at the bottom of page number one.
[45:40] Speaker 1: It is right here.
[45:45] Speaker 1: Very small formula. It's so-called coefficient.
[45:54] Speaker 1: Coefficient of variation.
[46:00] Speaker 1: The symbol we use is VX. It's the only representative of measures of absolute variation.
[46:07] Speaker 1: And it's very simple and very clever, I would say, right? Because what we do, we start, we take standard deviation, which is our awesome representative of absolute variation.
[46:21] Speaker 1: And a measure of absolute variation suffers from the fact that it's influenced by the level. So what we do, okay, we take the level into consideration.
[46:32] Speaker 1: And how do we do that? The easiest thing which might come to your mind, we just divide it by some measure of level, specifically the arithmetic mean, right?
[46:41] Speaker 1: So we just take the level into consideration this way by dividing the standard deviation by arithmetic mean. And by doing that, we will be able finally, finally, finally, we'll be able to compare the value of variation of any variables.
[46:59] Speaker 1: So let's do that. And in Excel, there's no special function.
[47:03] Speaker 1: So we just need to divide the standard deviation by the arithmetic mean. We will calculate the coefficient of variation.
[47:17] Speaker 1: And we'll do it by dividing the standard deviation I have this in row 20. And we divide it by the arithmetic mean which I have in row 17.
[47:36] Speaker 1: And the results are as follows. 0.72 for exponent grades.
[47:42] Speaker 1: 0.04 for the age. 0.18 for the weight.
[47:51] Speaker 1: 0.25. 0.25 for semester.
[48:06] Speaker 1: Okay. And finally, we made it.
[48:09] Speaker 1: We got some numbers which are comparable because we have considered the level, right? So these are not influenced by the level anymore.
[48:18] Speaker 1: We took the level into consideration. And we can compare them and simply say, okay, the highest value of variation in our case is there for variable exponent grades.
[48:29] Speaker 1: And the lowest value of variation in our dataset has the variable weight. The variable age, sorry.
[48:37] Speaker 1: Variable age.
[48:43] Speaker 1: Now, I have two more additional comments on that. We'll put them pretty serious.
[48:47] Speaker 1: The first one is this. If you have calculated the arithmetic mean of variation for the first time in your life, I truly understand that it's not possible.
[48:56] Speaker 1: But before coming to the first median test, which will take place in five weeks, if I'm not mistaken, it's getting closer very quickly. Be careful there.
[49:06] Speaker 1: You should be on the level of understanding such that you should be able, actually, kind of to expect the results like that already from the very beginning just by observing the dataset. I will try to explain what I mean.
[49:23] Speaker 1: In the case of excellent grades, the biggest value is 11 for the excellent grades. Everyone, be focused.
[49:32] Speaker 1: Excellent grade, for excellent grade, the maximum value, the highest value, is 11. And the smallest value is 1.
[49:40] Speaker 1: Meaning that if we divide them, we got 11. Meaning that the maximum of excellent grades is 11 times higher than the minimum.
[49:50] Speaker 1: So relatively, oh, sorry about that. I'm so sorry.
[49:53] Speaker 1: Thank you, everyone. Relatively, there is huge variation.
[49:58] Speaker 1: Relatively, the maximum is much, much bigger than the minimum. 11 times higher, right? And if you check the so therefore, this property reflects itself, shows itself exactly in very high value of the example generation.
[50:12] Speaker 1: While in the case of age, in the case of age, the highest value is there 21. The lowest value is 19, which when divided is something like 1.105.
[50:27] Speaker 1: Meaning that relatively, there is just a very tiny difference between the maximum and minimum, right? So this exactly is what coefficient of variation is telling you.
[50:40] Speaker 1: This is exactly the property shown in coefficient of variation. And again, before coming to the first median test, you should be on such a level of understanding that you should be able to see that, right, from the very beginning.
[50:50] Speaker 1: So like advanced, you know, students should be able to expect the results with coefficient of variation like this already from the very beginning.
[51:02] Speaker 1: Okay. That's my first comment.
[51:05] Speaker 1: And the second important question is, what possible values, I mean, like theoretically, the coefficient of variation might get from where to where? From what interval?
[51:17] Speaker 1: What might be the theoretical minimum and maximum of the coefficient of variation?
[51:22] Speaker 2: From 0 to 1.
[51:24] Speaker 1: From 0 to 1, influenced also by what? What is suggestion?
[51:29] Speaker 1: Any other ideas?
[51:36] Speaker 1: No other ideas?
[51:37] Speaker 3: Everyone, I misheard you.
[51:39] Speaker 1: Yep.
[51:40] Speaker 3: Are you asking about the range?
[51:41] Speaker 1: Yeah. Possible values. Yeah.
[51:44] Speaker 3: For the top, like the top should be more than 0, but the bottom, like from negative 22 positive 22.
[51:53] Speaker 1: That's right. So first of all, no problem is probably the second question, right? And it's the bigger question.
[52:01] Speaker 1: So that's why I asked that. What we can say regarding the, regarding whether it's positive or negative.
[52:09] Speaker 1: The standard deviation is squared from variance. When calculating variance, you always square the value.
[52:14] Speaker 1: So no matter what, variance cannot be negative. And therefore, also standard deviation cannot be negative.
[52:19] Speaker 1: But arithmetic mean, if you would, if you would have variable, it's just negative values. Like if you measure temperature in your freezer, or if you measure temperature in January in Siberia, you would certainly get just negative values for your variable.
[52:36] Speaker 1: And arithmetic mean for that would be negative. So coefficient of variation theoretically can be negative.
[52:44] Speaker 1: So then what might I suggest from minus 1 to plus 1? Okay.
[52:48] Speaker 1: But by saying that, by saying that the maximum is 1, you would be saying that mathematically, standard deviation may never be higher than the arithmetic mean. There is no reason for that.
[53:02] Speaker 1: If you would have, if you would be unfortunate, then you would have a variable where the arithmetic mean would be very close to 0. Then even standard deviation 1 would give you a coefficient of variation like 10,000, right?
[53:15] Speaker 1: So mathematically, there is no reason why standard deviation numeric set would have to be, would have to be, you know, always lower than the arithmetic mean. So indeed, indeed, in the end, what we come to is that theoretically it has made it actually any, any value.
[53:36] Speaker 1: Okay. So yeah, the final test.
[53:39] Speaker 1: That's the final test level, right? That's a good question.
[53:41] Speaker 1: Final test. We'll check if you'll be able to understand why that.
[53:45] Speaker 1: Okay. So thank you very much.
[53:47] Speaker 1: But mostly, in most technical situations, coefficient of variation can be used very nicely, exactly as we did it, right? So these are some uncomfortable, unusual situations.
[53:57] Speaker 1: But most often, it looks like that. And we use exactly as we did it here.
[54:02] Speaker 1: So yeah.
[54:08] Speaker 1: Now we have kind of covered more or less all symbols on page number one, but of course, not all the formulas yet. And next thing we will try, and there is important info about that, we will try to calculate these statistics using in Excel, using data analysis tool pack.
[54:27] Speaker 1: So those who want to give it a try, go for data and data analysis. If from some mysterious reasons, you don't get it there, because not getting it activated, just make a note and try it after the seminar, right?
[54:40] Speaker 1: Everyone should be able to activate this at the beginning of the seminar. If you don't have it there, just, just please make notes.
[54:46] Speaker 1: Those who have it, let's go for data analysis. And we also calculate descriptive statistics.
[54:51] Speaker 1: So let's find descriptive statistics tool in the, in the, in the list we got there.
[55:00] Speaker 1: So we go for descriptive statistics. And then it's quite easy.
[55:10] Speaker 1: The input range is the range of data you want your, you want to calculate descriptive statistics for. So in our case, it's the area with the four columns of variables.
[55:25] Speaker 1: So that's the area which goes to the input range. Listen, if I don't say otherwise, in Excel, always select the area with labels in the first row.
[55:36] Speaker 1: Like I did, did here. And in that case, when using this tool, don't forget to take labels in first row.
[55:47] Speaker 1: I'm doing it like that to get just once. I'm doing it to stress it, right?
[55:51] Speaker 1: To get the desired results, again, if you don't have it, just make notes, right, after the seminar in piece. If you have it, don't forget to take summary statistics.
[56:00] Speaker 1: So by getting the results which you want, you need to take summary statistics.
[56:10] Speaker 1: And my recommendation is also, of course, to call the new worksheet. I will call it descriptives.
[56:15] Speaker 1: Descriptives. But you can call it however you want.
[56:19] Speaker 1: It will still work, right? And those who have it, you can click OK and see what happens.
[56:25] Speaker 1: If you don't have it for any reason, just make a note and try it after the seminar, right? It's more important that you understand, oh, great, that you understand what does.
[56:35] Speaker 3: How to redo the descriptive tools. Because for some reason, it disappeared.
[56:39] Speaker 1: It's there. Descriptive statistics. Descriptive statistics.
[56:42] Speaker 3: Sorry.
[56:42] Speaker 1: Descriptive statistics. Descriptive statistics. Yeah.
[56:47] Speaker 1: And there it is. There you go.
[56:48] Speaker 1: Data, you click labels in first row. Summary statistics.
[56:51] Speaker 1: Consult data. Okay.
[56:54] Speaker 1: Oh, great. Thanks.
[56:58] Speaker 1: Over here. Uh-huh.
[57:01] Speaker 1: So make a note and try it after, try it after the seminar, right? Okay.
[57:08] Speaker 1: This should do have it. Oh, great.
[57:11] Speaker 1: Okay. Ah, one more thing.
[57:13] Speaker 1: Thank you. Okay.
[57:14] Speaker 1: And let's see what's there. So everyone, if you have it, you have it on your screen.
[57:20] Speaker 1: If not, just watch my screen. What do you have in the results?
[57:25] Speaker 3: In first row.
[57:26] Speaker 1: We have several things we know. Arithmetic mean, the values are in our table on the whiteboard. We know also median, we know mode, we know range, minimum, maximum, sum.
[57:36] Speaker 1: There are some things we don't know. So let's just ignore them.
[57:39] Speaker 1: And I would like to add additional comments on these. Here it's called standard deviation and sample variance.
[57:51] Speaker 1: And these are different. The numbers which are there are different from the variance and standard deviation we have calculated and discussed up to now.
[58:03] Speaker 1: So these numbers are different. Because what you've got here, what you've got here by using this tool is so-called sample variance.
[58:15] Speaker 1: Sample variance. And sample standard deviation.
[58:24] Speaker 1: These are in our formulas that were denoted as S squared and S. You don't need to need more than all these.
[58:33] Speaker 1: Only at this point of semester, it's important that you understand where to find them in the formulas list. And they are right here, almost at the bottom of the page.
[58:45] Speaker 1: So if you don't have this notion, note in your formulas list yet. It's right there.
[58:50] Speaker 1: S squared is sample variance. S is sample standard deviation.
[59:00] Speaker 1: The only difference between these and those, that variance and that standard deviation we calculated up to now, is in the denominator. So this sample variance and sample standard deviation, they have N minus 1 instead of N in the denominator.
[59:15] Speaker 1: The only difference, those, that variance and standard deviation we discussed up to now. So that's one thing you should know.
[59:22] Speaker 1: They're just this slight difference. And why it's important to know that these formulas are here, even though we will discuss them more right now, is that the main reason to know about these is that in the later course of the semester, the sample standard deviation, small s, will suddenly appear.
[59:39] Speaker 1: Just, you can just, oh, now, just.
[59:48] Speaker 1: Okay. It's to be found just towards the screen.
[59:55] Speaker 1: Almost there. Here.
[59:58] Speaker 1: Suddenly, at some point, the sample standard deviation will appear here. The reasons why is it so are now, like, not necessary to be known, right?
[60:10] Speaker 1: So I only need you to know that we have these formulas there. Sample standard deviation, sample variance.
[60:15] Speaker 1: And when they appear late in the course of the semester, you should kind of know what it is, right?
[60:24] Speaker 1: Are you calling Mr. Shapirovich here?
[60:25] Speaker 1: Some question regarding the sample variance?
[60:28] Speaker 4: Yeah. But I'll stay after to ask you another one about that.
[60:31] Speaker 1: Okay. Okay. So that's it.
[60:35] Speaker 1: And these were the samples, sample variance, and sample standard deviation with your glass symbols. Make sure I have on page number one.
[60:47] Speaker 1: Okay.
[60:50] Speaker 1: So that's it. Please, if you manage to get here in the Excel, don't forget your work.
[60:56] Speaker 1: Save your work down. After opening that, I will save my file down.
[61:01] Speaker 1: Save as. I will call it seminar 3.
[61:04] Speaker 1: Because if Excel gets stuck, I'll lose my work. Seminar 3.
[61:09] Speaker 1: And yeah. So at this point, we have covered all.
[61:17] Speaker 1: If you communicate, please keep your voice down as much as possible. Thank you very much.
[61:21] Speaker 1: Saved my voice. So what we are now focused on is discussion of the, on the remaining formulas we have not used up to now.
[61:31] Speaker 1: There are additional formulas for arithmetic mean and variance we have not used up to now. And we'll discuss how to use them.
[61:37] Speaker 1: So we'll start with the arithmetic mean and these two formulas in particular. So these two formulas for the arithmetic mean are called weighted arithmetic mean.
[61:49] Speaker 1: So these are called weighted arithmetic mean formulas. And by these, you would calculate, of course, the same arithmetic mean as the one we calculated using the simple arithmetic mean formula in the case of Rowling, as I said.
[62:07] Speaker 1: But these are applicable and useful in other situations in terms of the data structure you start the calculation with. So weighted arithmetic mean is to be used in general, in weighted arithmetic mean, is to be used in general in any situation when you want when you calculate the arithmetic mean from values with different importance, different weight for you.
[62:38] Speaker 1: The best example for students, like a real-life example, is calculation of your average grade. If you would, if you were to calculate average grade, if you score grade 1 from a course which is for 9 credits, it's more important for the evolution of the average, for the mean, than if you score grade 1 from a course with 3 credits.
[63:01] Speaker 1: Exactly, right? It's more valuable somehow to get the grade 1 from the bigger course.
[63:06] Speaker 1: So that's one situation when you would evaluate in your calculation. And another typical case is simply when you have frequency distribution table.
[63:16] Speaker 1: You can use either the absolute plates, absolute, or specifically absolute frequencies NJ, or relative plates, relative frequencies PJ. So typical situation when these weighted arithmetic mean formulas are to be used are here.
[63:32] Speaker 1: If, if, it's quite easy. You are, if you are to calculate the arithmetic mean and you already possess the frequency distribution table instead of the Rowling data set, it's much more logical with your calculator to calculate the mean using the weighted arithmetic mean formula than the simple one, right?
[63:52] Speaker 1: So this is typical case. Real practice is here just with either the absolute frequencies or with relative frequencies.
[63:59] Speaker 1: The other formula is, again, of course, left for homework. So Mr.
[64:04] Speaker 1: Zhan, if you want me to show relative frequencies or absolute frequencies.
[64:09] Speaker 5: Relative.
[64:10] Speaker 1: Okay. That's a little bit faster, easier, right?
[64:15] Speaker 1: So let's try the calculation with the formula of with relative frequencies. But the formula for with the absolute frequencies, of course, is recommended to be practiced at home.
[64:30] Speaker 1: So we started with this frequency distribution table and to try with the absolute frequencies at home. Here, I will show you how this formula works with relative frequencies.
[64:39] Speaker 1: It's also complicated. So we can see in our table that value of H19 in our dataset is with relative frequency 0.4.
[64:50] Speaker 1: Plus H20 is there with relative frequency 0.23. And H19, H21, sorry, H21 is there with relative frequency of 0.27.
[65:05] Speaker 1: Please use your calculators to get the result.
[65:16] Speaker 1: Please use your calculators to get the result. Ms.
[65:20] Speaker 1: Masashiu, I'll let your calculator.
[65:22] Speaker 6: Can I get one?
[65:26] Speaker 1: If you don't have the calculator, you can use your mobile phone or use someone else's.
[65:39] Speaker 1: And what's the correct result?
[65:45] Speaker 1: Of what?
[65:46] Speaker 3: Of H?
[65:50] Speaker 1: Units?
[65:52] Speaker 3: Years.
[65:52] Speaker 1: Years. 19.87 years. That should be your result.
[66:01] Speaker 1: That should be your result. 19.87 years.
[66:05] Speaker 1: And everyone, everyone, check this. We got the same result as the one we got using the Rowling data set, right?
[66:13] Speaker 1: So it's the same arithmetic mean. The formula for the same thing, and it's only to be used in different situations and translations, right?
[66:22] Speaker 1: So that was for the arithmetic mean when starting your calculations with the frequency distribution table. Correspondingly, there are formulas for the variance which are to be used also in this same situation.
[66:36] Speaker 1: So and we'll do it here, right? Because it's too time-consuming and too bothersome.
[66:42] Speaker 1: So I will, you will have to do this at home, unfortunately. I'm sorry to be using, really need your free time, but it's important.
[66:51] Speaker 1: So everyone, that's the homework. You should start with this information, with this table we constructed in the MO.
[66:58] Speaker 1: Everyone should understand this at this point of semester. And what you should do with your calculator, the one you plan to use during the test, that's the main point of that, you should try to calculate the variance using these four formulas for the variance.
[67:16] Speaker 1: So those who have formulas list here, it might be a good idea to, again, put these formulas, put these four formulas into bubble. And right next to it, frequency distribution tables, right?
[67:34] Speaker 1: There are four formulas. Definition formula with absolute frequencies, definition formula with relative frequencies, computational formula with absolute frequencies, and computational formula with relative frequencies.
[67:46] Speaker 1: And I'm not promising anything entertaining at all. It's totally boring, right?
[67:50] Speaker 1: Absolutely, like, not enjoyable. But I strongly, strongly recommend that you really try at least once in your life.
[67:57] Speaker 1: Take the calculator when you're doing the test. Try to calculate the variance for the H starting with the frequency distribution table.
[68:06] Speaker 1: We know from the previous seminar, getting always the same result for 0.65.
[68:16] Speaker 1: Give it a try. So if you manage to do it once, then you don't need to do it anymore, right?
[68:21] Speaker 1: The point is that you learn. You should work with your formulas, work with your calculator, and to get more familiar with that, right?
[68:29] Speaker 1: So Ms. Zhan, give it a try.
[68:31] Speaker 1: Do that, right? It may take maybe 20 minutes.
[68:33] Speaker 1: It's bothering you, right? It's always the same.
[68:35] Speaker 1: But once you are convinced yourself that you are able to do, find this number, or some close number before we are rounding there, with your calculator, starting with the frequency distribution table, you are done. You understand that it's still the same variance, and you are already comfortable with the formulas and comfortable with the calculator.
[68:51] Speaker 1: So that's the point of that, right? So this is like suddenly for homework.
[68:58] Speaker 1: Okay.
[69:02] Speaker 1: So are there any, are there any questions of what we did up to now? There's one serious thing still to be done.
[69:11] Speaker 1: Oh, my collars.
[69:15] Speaker 1: Okay. So are there anything you'd like to ask?
[69:22] Speaker 1: Anything unclear?
[69:27] Speaker 1: Ms. Farbiq, no questions?
[69:30] Speaker 3: Yeah. So back to the math. So after you get the absolute value, what was the first step?
[69:43] Speaker 1: The first step, if you have the absolute deviation, you just take median from that.
[69:47] Speaker 3: Median from that.
[69:48] Speaker 1: Median of those absolute deviations.
[69:55] Speaker 3: Uh-huh.
[69:56] Speaker 5: Why is weight without mode?
[69:59] Speaker 1: Uh-huh. It's not exactly without mode. I'm just saying that it's not that interesting or useful.
[70:05] Speaker 1: The reason for that is that weight is a variable which gets many, many different values. Many, many different values are there.
[70:13] Speaker 1: What could have easily happened is that each value is there just once. In that case, all those values would be mode, and the information would be totally useless, right?
[70:23] Speaker 1: You try to get some information about the level. And if you have such a variable with many, many different values, in our case, the mode might be pretty sweet, right?
[70:32] Speaker 1: It's like almost like one end, it just coincidence, right? So if you have a variable with many, many different values, it doesn't make much sense to find.
[70:40] Speaker 1: You can, like, you know, mechanically do that, but it's potentially useless in terms of finding something about the level. Great.
[70:49] Speaker 1: Anyone else? Ms.
[70:50] Speaker 1: Zhan, any questions?
[70:57] Speaker 1: So if there are no other questions, we can move to the very last thing. No questions, Mr.
[71:04] Speaker 1: Zhan? Or too many questions, maybe?
[71:08] Speaker 1: Mr. Diya?
[71:10] Speaker 3: No.
[71:11] Speaker 1: Yeah? Mr. Shimunek.
[71:12] Speaker 1: Shimunek. Shimunek.
[71:13] Speaker 1: Okay. Got it.
[71:14] Speaker 1: Okay. So all right.
[71:18] Speaker 1: So if there are no other questions, let's move to the other things which we had today in the program. And there are still two more formulas for arithmetic mean and two more formulas for variance to be done.
[71:30] Speaker 1: And these are, I would say, the most difficult to be recognized when we use. So here, we have these two formulas for the arithmetic mean, which we have not discussed yet.
[71:41] Speaker 1: And one, or actually two formulas for the variance we have not discussed yet. These are to be used in very specific situations which you will encounter on some occasions in exercises after seminar 3.
[71:58] Speaker 1: And the situation when these are to be used is expressed by this table. So I'll ask everyone, I will as well, to copy this table, including the detailed notation, your notes.
[72:15] Speaker 1: And it looks like that. It looks like this.
[72:17] Speaker 1: So we have an info that the data set was split into two parts according to the gender, specifically on two groups of females and males.
[72:35] Speaker 1: So the detailed formulas we will discuss and learn right now, there is index J. And in our example, it takes 31 for females and 2, which is also the K, for males.
[72:52] Speaker 1: And what we know, what's in the table is what we know is how big these groups were. So we know frequencies J, especially N1 equals 7, so there were 7 ladies in the data set, and N2 equals 8, so there were 8 males, 8 gentlemen in our data set, and the data set size N was 15.
[73:18] Speaker 1: When we know this, we need information about the size of the groups in the absurdness. We can also have any relative terms using relative frequencies PJ, and specifically P1, in our case, is 0.47 for ladies, and P2 is 0.53 for gentlemen, 0.11.
[73:40] Speaker 1: So this is nothing complicated, right?
[73:45] Speaker 1: This is just frequency distribution table for gender, right? No difficulties to be there.
[73:51] Speaker 1: But what's new here is in the rest of the table. We have also additional information about another qualitative variable, number of exact weights, in the form of group means.
[74:09] Speaker 1: Symbol in the formulas list is XJ bar, and group variance list.
[74:21] Speaker 1: The symbol in the formulas list is SJX squared.
[74:28] Speaker 1: Specifically, we are told that the arithmetic mean of exact weights for females, X1 bar, was 2.2.143 exact weights.
[74:45] Speaker 1: And X2 bar, arithmetic mean of exact weights for males, was 4 exact weights.
[74:57] Speaker 1: How these numbers were found? They were found this way.
[75:03] Speaker 1: The data set was split according to the gender. We have here 8 values of exact weights for males.
[75:13] Speaker 1: And the arithmetic mean was calculated exactly the way we have learned to calculate the arithmetic mean today, only from these 8 values. That's how it was done, right?
[75:21] Speaker 1: Subsequently, the same thing was done for ladies, right? So we have 7 values of exact weights for ladies, and the arithmetic mean from those 7 values was 2.413.
[75:35] Speaker 1: I hope everyone can imagine that, right? It's interesting that students can, like, well, get familiar with the group means, and then they get familiar with group variances, but the principle is the same.
[75:46] Speaker 1: The data set was split into these two parts, into groups. We have 8 values of exact weights, and the variance calculated for them, the variance for the group of males, was found to be 0.4, was found to be 7.5.
[76:01] Speaker 1: For males, it was 0.5. The symbol is S2X squared.
[76:07] Speaker 1: The result is 0.5. And the variance for the 7 values of exact weights of ladies in our data set, the symbol we will use is S1X squared, turned out to be 0.408.
[76:24] Speaker 1: So we have learned how to calculate the arithmetic mean of variance today, and this is exactly the same calculation, only done separately for exact weights, separately for males and females. And the main point is, again, how to recognize, when to use the remaining formulas we will discuss right now, and how to solve some exercises in exercise after seminars.
[76:46] Speaker 1: The final is this one. What is crucial is that we know nothing else.
[76:51] Speaker 1: Mainly, I would like to stress that we do not know the individual values. They are denoted typically by XI or XJ, and we don't know them.
[77:02] Speaker 1: So when we have information about the data set just in the formulas list table, we are actually in a situation when we do not know the individual values of the exact weights. But interestingly, we are still able to find the arithmetic mean and even the variance, right?
[77:20] Speaker 1: So we can find the arithmetic mean and the variance of numbers we do not know. But for that, you need to use those oh, that's great growing.
[77:31] Speaker 1: For that, you need to use those specific remaining formulas we have not discussed up to now. So in the end, it's not so complicated with the formulas, but what's difficult is you need to be able to recognize when to do them, right?
[77:45] Speaker 1: That's the crucial. Just sample this wisely.
[77:57] Speaker 1: So for the arithmetic mean, it's easier. So we'll start with the calculation of the overall arithmetic mean of 15 values of exact weights.
[78:07] Speaker 1: We'll try it with the absolute frequencies, which is just to practice that, and try it at home with the relative frequencies. And the calculation is as follows.
[78:18] Speaker 1: So we'll use the version with the absolute frequencies, XJ, NJ, over total of NJ.
[78:30] Speaker 1: And what's important, we are working with the group means, right? So those who are making those in your formulas list, good idea, good idea what to write in the formulas here.
[78:43] Speaker 1: Please do it in the bubble and write their group means. I would write their group means and no individual values, right?
[78:52] Speaker 1: And whenever you have a situation that you don't know the individual values, these are the formulas you should use for the calculation of the overall mean.
[79:05] Speaker 1: All right. So we'll do that.
[79:09] Speaker 1: I always need to be careful, you know, to plug in the correct values. So for females, the group mean is 2.143, and the number of ladies, which is 7, plus the same, so the same query recognized number here.
[79:24] Speaker 1: Group mean for gents is 4, and the number of gentlemen, which is 8, and we divide it by the sum of the frequencies. So please take your calculator, wake up, and check what the result will be.
[79:55] Speaker 1: So who gets the some result?
[79:57] Speaker 3: 0.3.
[80:01] Speaker 1: Mm-hmm. Interesting. So the result we still wait should be this one.
[80:12] Speaker 1: So maybe they may be somewhere different because of rounding, but if there was no difference, the result should be 3.13 exact weights. Still wait.
[80:25] Speaker 1: If you still wait. If you don't get it today, it's no problem, right?
[80:29] Speaker 1: Just try it after.
[80:30] Speaker 3: I messed up. I got it.
[80:32] Speaker 1: And important information, we are able to calculate the arithmetic mean of exact weights in situations when we don't know them actually, right? That's very strange, but that's how it is. That's for the arithmetic mean and, mysteriously, the same can be done for the variance, and that's the very last formula on page number 1, the very last thing we need to do today.
[81:03] Speaker 1: And it's maybe the more complicated one. So please respond.
[81:09] Speaker 1: It's so-called the decomposition of variance formula, decomposition of variance. For those who are making notes, then right next to it, decomposition decomposition of variance.
[81:32] Speaker 1: That would be my first note in the formulas list, and the other one, again, be no individual values. It's our square.
[81:39] Speaker 1: You would find nowhere XI or XJ there. It's not there, right?
[81:43] Speaker 1: So symbols XI or XJ are not there, right? Because this is a formula to be used in the case when you don't know the individual values, right?
[81:50] Speaker 1: So they are nowhere to be found in that formula. And here we will practice it with the relative frequencies because it's, like, easier, faster.
[82:02] Speaker 1: But again, huge recommendation. You should check out at home that you get the same result also using the version with absolute frequencies.
[82:10] Speaker 1: You'll try it here with relative frequencies. And what the decomposition of variance is telling us?
[82:17] Speaker 1: It tells us that the overall variance of 15 values of unknown, variance of 15 unknown values of exact weights is to be found by decomposing the overall variance into two parts. The first part, and now we'll be focused, I will try to explain what we got here.
[82:38] Speaker 1: So please look at me, listen, and watch what I'm saying and writing at the same time, right? So the first part is bar.
[82:46] Speaker 1: That means arithmetic mean. Arithmetic mean of what?
[82:52] Speaker 1: Of group variances.
[82:56] Speaker 1: And again, look at me, please. Plus S squared, which is variance, of what?
[83:05] Speaker 1: Of group means. It's written there.
[83:09] Speaker 1: It's mean of group variances plus variance of group means. Don't memorize this.
[83:14] Speaker 1: Please learn to read it in the formulas, right? Mean of group variances plus variance of group means.
[83:24] Speaker 1: Don't forget to breathe, right? Yeah.
[83:28] Speaker 1: So don't memorize that, right? So you'll have to see that in the symbols.
[83:33] Speaker 1: Okay. And so yeah, we got these two parts.
[83:39] Speaker 1: Part number 1, part number 2. And we'll try it with the relative frequencies.
[83:44] Speaker 1: So what I'm using is this formula here, right? We'll start with the first part, and I really need to be careful.
[83:52] Speaker 1: So mean of group variances. Variance of exact weights for females is 0.408.
[84:03] Speaker 1: And the proportion of ladies, which is 0.47. Well, the same thing for males.
[84:09] Speaker 1: So variance is 7.5 times the proportion of males, which is 0.53. And this is our part number 1.
[84:21] Speaker 1: So please calculate this one using your calculators. It should be relatively fast.
[84:25] Speaker 1: It should be complicated. Please use your calculators to get the first part.
[84:52] Speaker 1: Here we go.
[84:56] Speaker 1: And what the result is? I don't know.
[84:57] Speaker 1: This time, I don't know the correct result. So please don't be shy.
[85:00] Speaker 1: Tell me what your result is.
[85:03] Speaker 3: 4.16.
[85:03] Speaker 1: 4.16.
[85:05] Speaker 3: Let's see. Three decimals, please. Three decimals.
[85:07] Speaker 3: 4.167.
[85:11] Speaker 1: One more time. Sorry.
[85:12] Speaker 3: 4.167, rounded.
[85:14] Speaker 1: 4.167.
[85:15] Speaker 3: Okay.
[85:16] Speaker 1: So did someone else? Did you get the same? You got the same?
[85:21] Speaker 1: You got the same? Okay.
[85:22] Speaker 1: Perfect. Perfect.
[85:23] Speaker 1: If there are more students getting the same result, there's a good chance for it to be correct.
[85:30] Speaker 3: What?
[85:32] Speaker 4: I have 4.053.
[85:35] Speaker 1: Huh? 4.053. If someone else wrote 4.053, you got the first one.
[85:43] Speaker 1: Sorry. You wrote it.
[85:45] Speaker 1: It's one of mine. Save your own for first, right?
[85:49] Speaker 1: Yeah, we need students to cooperate as well. It's a new work.
[85:52] Speaker 1: And then the second part, the other part, which is even more complicated. So this is the variance of the group means, right?
[86:00] Speaker 1: The variance of the group means. So for females, it's 2.143, 2.143, minus the overall mean, which is 3.13, the 20 squared, and multiplied by the relative frequency of females, which is 0.47.
[86:25] Speaker 1: And the same for males. The group mean is 4, minus the overall mean is 3.13.
[86:35] Speaker 1: The 20 is, again, squared and multiplied by the proportion of males, which is 0.53. Here again, I need please you to cooperate.
[86:46] Speaker 1: The more people will try that, the better chance we get the correct result. So please use your calculators again.
[86:53] Speaker 1: Calculators.
[86:57] Speaker 1: Not Excel. Calculators.
[87:24] Speaker 4: Sir.
[87:25] Speaker 1: Huh?
[87:25] Speaker 4: Is that group mean? Is that 2.143 minus 3.23?
[87:31] Speaker 1: Yeah. The group mean for females minus the overall mean.
[87:39] Speaker 1: So anyone who has calculated, I know this takes a lot more complicated. So what's your result for the higher grade?
[87:48] Speaker 1: Working on it. Okay.
[87:50] Speaker 4: 0.859.
[87:53] Speaker 1: 0.859. Thank you, Mr. Kruger.
[87:57] Speaker 1: We'll wait for someone else.
[87:58] Speaker 4: I got the same.
[87:59] Speaker 1: You got the same? The same. The same.
[88:01] Speaker 1: Yeah. Here you go.
[88:04] Speaker 1: So if they ask me the same result independently, that should be correct. Thank you very much, everyone, who tried.
[88:09] Speaker 1: And if we sum this up, we get what? We get 6.209.5.06.
[88:28] Speaker 1: So if we round it, it's 5.03. The only difference with this number is because of rounding.
[88:38] Speaker 1: If there was no rounding at all, this value, value of the variance, calculated in the situation when we don't know the individual values at all, would be exactly the same as the one we got in the Excel. So it's the same variance, only calculated in different, like, different situations.
[89:03] Speaker 1: And what's interesting about that is the decomposition of variance. We can find the variance even though we don't know the values for which the variance is calculated.
[89:12] Speaker 1: Very strange, but it works.
[89:17] Speaker 1: Don't ask me why. So that's it for today.
[89:22] Speaker 1: Are there any remaining questions?
[89:30] Speaker 4: For you.
[89:31] Speaker 1: So if there are no questions, please do exercises after seminar 3 before coming here next week. And if you had some difficulty with the calculations during the seminar, do those as well. That's all.
[89:41] Speaker 1: Well, that's all the homework. Sorry for making your time up.
[89:46] Speaker 1: That's how the class goes, right? Thank you very much, and enjoy the weekend, and we'll see you next week.
