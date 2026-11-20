# stats 3 lecture

Date: 2026-10-09  
Folder: Stats

## Summary

Stats lecture 3: wrapped up box plots and misleading charts (COVID-19 case study), then introduced analysis of dependence via contingency tables (Cramer's V) and one-way ANOVA (R squared).

### Box Plots and Misleading Charts
- Frequency table, polygon and box plot together fully describe one variable's distribution
    - Transcript says 'Wispr Flow', likely a mis-transcription of box plot/whisker
- Multiple box plots in one chart are common, but don't compare absolute variation across variables with different levels
- Two bar charts of male/female proportions looked very different only because one y-axis started at 0.46, not 0
- Class vote on whether the gender difference mattered was split; the answer is subjective

### COVID-19 Chart Case Study
- March 2020 Czech 'New Daily Confirmed Cases' chart: most students saw an increase, but the correct answer is 'nothing can be said'
    - Almost no tests were done early March; chart really showed positive tests
- Positive test proportion stayed around 7% in March, versus about 40% in December
    - Major lockdown decisions were made on this single chart
- Lesson: always check what a chart shows, its title, and the underlying data before deciding

### Analysis of Dependence: Types
- Four goals: descriptive (lectures 3 to 6), inferential (lecture 11), predictive (lectures 4 to 6), causal (lecture 11, briefly)
- Words like impact, effect, influence belong only in causal analysis
- Relationships are unilateral (height causes weight) or mutual (weight and body fat)
- Method choice: contingency table for two qualitative variables, one-way ANOVA for qualitative plus quantitative
    - Transcript says 'quadratic', likely 'qualitative'
    - Regression and correlation come in lecture 4

### Contingency Table Analysis
- Example: gender vs opinion on difficulty of statistics, 150 students (80 female, 70 male), testing independence
- Conditional relative frequencies are key: e.g. 40% of females found the course very difficult; 54% of 'very difficult' were females
    - Males rated it 'intermediate' almost twice as often as females
    - Visualized with a stacked bar chart (transcribed 'Stigbar')
- Cramer's V is preferred over Pearson's C: it uses table size m and ranges 0 to 1
    - g = 4.64 in example; g and both coefficients are 0 under independence
- Result: Cramer's V = 0.176, a weak relationship

### One-Way ANOVA
- Example: gender (factor) vs number of top grades (transcribed 'accent rates'), testing independence
- SST (total variation) splits into SSTR (explained by factor) plus SSE (unexplained, other factors)
    - SSTR = 0 means independence; SSE = 0 means strongest dependence
- Group means: males 3.077, females 3.494; SST = 940.45
    - Excel computes sums of squares; practiced at next week's seminar
- R squared: only 0.76% of variation explained by gender, so the relationship is very weak
    - Dot chart without frequencies was shown as a bad visualization example

## My notes

graphs and charts

## Transcript

[00:00] Speaker 1: 14, 10, 4,000. Right, so. Lots of things.
[00:04] Speaker 1: Actually, they're a very efficient way to represent basic properties of the data in the case when you study distribution of one under the variable. So yeah, this is what you should know about Wispr Flow.
[00:15] Speaker 1: The next slide is there just for information that in Excel—people doing it in Excel might encounter slightly different way how the same outputs like, but this is part of the example. It's just for information.
[00:29] Speaker 1: So I'll move on. So all in all, ladies and gentlemen, at this point we already have a very, like, very— I would say even complete—set of tools by which you may use to study distribution of one on the variable.
[00:47] Speaker 1: Here are all of them shown at the one side, on one side, so if you focus on the on the variable number of exit rates, we can study distribution either using the frequency distribution table, or using Polygon, or using the box plot average, and all this put together. If you write anyone with this information, it will be complete, like, totally complete info about how the values of that variable, on the variable, are distributed in the data set.
[01:15] Speaker 1: There's everything there, right? So everyone who understands all these things together, actually, that's, like, a very good level of knowledge in the case of studying one distribution of one on the variable.
[01:29] Speaker 1: The very typical way how a box plot is used is a— is this. You may even, of course, construct a plot with several box plots for different on the variables at once, right?
[01:42] Speaker 1: So this is also— if you are studying more on the variables, you can do it this way, right? Giving quick information about all of those at once, right?
[01:54] Speaker 1: So multiple box plots in one chart is a very typical, very typical thing as well. Here, I would like just to remind that— that's already from lecture 2— that if you have variables with different levels, we see that here it's median for weight, right?
[02:11] Speaker 1: So it's much higher than median, which is somehow in the middle of this small box for age. So if you have variables with different levels, you cannot compare— you cannot compare the absolute variation.
[02:24] Speaker 1: So it would not be totally correct to simply say that absolute variation because this box is higher for weight is bigger than for the age, because they have different levels. So you shouldn't do that.
[02:35] Speaker 1: But you still can read the information about the absolute variation from the plot, because the size of the box— the height of the box, or the difference, the distance between the upper and the bottom end of the Wispr tells you something about that, right? Either in the form of range or in the form of interquartile range.
[02:57] Speaker 1: So yeah, that's it. And now, the— let's focus on this.
[03:02] Speaker 1: This is actually interesting, because the plot— the statistic itself doesn't lie, right? Statistics itself doesn't lie.
[03:11] Speaker 1: Charts itself don't lie as well. But you may be sometimes able to construct the plot for the same data set in different ways, trying to stress what you want, right?
[03:24] Speaker 1: So you, as the audience, should always be careful when looking at some plots, taking some time to really sure to be— to understand what the plot is actually showing, right? Because here we have two different plots.
[03:39] Speaker 1: If you look at them quickly, they seem to be completely different, but they show actually the same data set, right? They show actually the exactly the same thing.
[03:49] Speaker 1: And the only difference is the scale of the y-axis. So these plots, the two bar plots, they show the distribution, the form of relative frequencies of how many males and females are in the NI data set.
[04:08] Speaker 1: And the only difference between these two is the y-axis, right? On the right— on the right-sided plot, the y-axis starts at 0, while here it starts in 40, 0.46.
[04:21] Speaker 1: But otherwise they show the same picture. So if you look at these plots, actually, I would like to ask a question, and I'm always really curious what the output will be.
[04:35] Speaker 1: My question is: if you look at these plots, would you say there is some practically significant— I mean, like, important— difference between—
[04:54] Speaker 2: Sorry.
[04:54] Speaker 1: —between proportions of males and females in the NI data set? The question is: would you say is the proportion— are the proportions more or less the same, or do they differ quite a lot? So is there any practically— if you look at the base of these plots, my question is, what's your opinion: is there any practically significant, let's say, important difference between the numbers, proportions of males and females in the NI data set?
[05:22] Speaker 1: There are two options. You may say either yes or no, right?
[05:29] Speaker 1: You look at it, so what's your opinion, right? So who would say that there— yes, there indeed is some practically important difference?
[05:40] Speaker 1: That's my— what the chart suggests. Raise your hand right now, please.
[05:46] Speaker 1: Two. You are just two.
[05:47] Speaker 1: Okay, three. So who would say there is indeed some practically important difference between proportions of males and females?
[05:54] Speaker 1: Thank you, Mr. Watkins.
[05:56] Speaker 1: Alright, have you voted for yes or no?
[06:00] Speaker 2: I'm not sure.
[06:01] Speaker 1: You're not sure? Okay. What about you?
[06:03] Speaker 1: Who thinks there is no— any practically important difference? Okay.
[06:09] Speaker 1: And there is, like, half of the classroom with no opinion. Thank you very much.
[06:14] Speaker 1: So yeah, so this time no votes— overvoted, right? But there is no correct answer here, right?
[06:24] Speaker 1: It's just subjective. There is no correct answer.
[06:27] Speaker 1: This is a completely subjective, like, decision. But maybe if you were shown just this plot, only this one, without choosing this one, if— or even if the scale was hidden, that would be, like, really bad chart, right?
[06:43] Speaker 1: If you were shown this plot without actually the scale of the y-axis, you should kind of, like, refuse to answer the question completely, right? Because you would miss this one information.
[06:54] Speaker 1: Okay, so if you are shown just this one, maybe, maybe some of you would vote for yes instead of no. But it's actually always kind of subjective, and in some situations the answer might be unclear, depending on actually what's on the y-axis.
[07:09] Speaker 1: Those students who are new to the class, or those who are not, unfortunately, new but don't remember the correct answer from the previous semester, please take your time to think about this plot. If you don't have this email, I will show it during the lecture.
[07:29] Speaker 1: And I would like you to focus on this plot, like, very much at this point. This is a plot which was shown in March 2020 everywhere in the Czech Republic.
[07:41] Speaker 1: It was called "New Daily Confirmed Cases of COVID-19 Disease." That's how the plot was called, right?
[07:48] Speaker 1: What we have on the x-axis here, we have values of, like, particular days in March. This is beginning of March 2020, so 1 March 2020.
[08:01] Speaker 1: And at the right side of the plot we have 27 March 2020. So this plot shows so-called time series.
[08:09] Speaker 1: It shows development of something in time. It was present everywhere: TV news, media, everywhere.
[08:17] Speaker 1: It was called "New Daily Confirmed Cases of COVID-19 Disease," again, in the Czech Republic, in March 2020.
[08:26] Speaker 1: And my question is: if you look at this plot, what would be your conclusion about how the spread of the disease actually developed during that March 2020? So this is, like, beginning of March 2020.
[08:40] Speaker 1: This is the end of March 2020. The blue time series shows something which was called "New Daily Confirmed Cases of COVID-19 Disease."
[08:50] Speaker 1: The black one is so-called— are so-called moving averages. These— we'll learn how to do that.
[08:58] Speaker 1: The black one, the black time series was calculated from the blue one, right? So focus mostly on the blue one.
[09:05] Speaker 1: The black one is there just to stress kind of how it was developed. And my question is: what was— if you look at the plot— what was, according to your opinion, the development of spread of COVID-19 disease in the Czech Republic in March 2020?
[09:18] Speaker 1: And I will give you four options, and this time I will— I will give you four options. And I would like everyone to express your opinion.
[09:24] Speaker 1: If that's wrong, it's no problem. The problem is that you are sitting here with no opinion, right?
[09:30] Speaker 1: So there are actually, to be clear, like, here there are four options. You can say that the spread during that March 2020 actually decreased.
[09:41] Speaker 1: So there was a decrease in the spread, right? Or you can say there was no change, that kind of the spread of the disease was kind of, like, kind of, like, the same, not changing during that time period from beginning to the end of March 2020.
[09:58] Speaker 1: Or you can say, according to the plot, that there was a decrease— increase— there was an increase of the spread of the disease. Or you can say, as we have mentioned in previous charts, that you can say nothing about that, that nothing can be said, right, on the basis of this plot.
[10:15] Speaker 1: So let's try this. And again, we try to express your opinion, right?
[10:19] Speaker 1: If it's wrong, it's no problem. Probably if you are having no opinion at all.
[10:23] Speaker 1: So who thinks, according to the plot, that in March 2020 in the Czech Republic the spread of COVID-19 disease decreased from the beginning of the March till the end?
[10:35] Speaker 2: No change. No change. No change.
[10:36] Speaker 1: Okay. It's actually there's zero, right? Okay, so zero.
[10:42] Speaker 1: Who thinks there was no change, that kind of the spread of the disease in the Czech Republic remained the same from the beginning of the March 2020 till the end?
[10:50] Speaker 2: 2020 till the end.
[10:54] Speaker 1: Okay. Who would say there was some increase in the spread, that—
[10:59] Speaker 2: 2020 till the end.
[11:03] Speaker 1: Okay. Alright. 670.
[11:08] Speaker 1: And who would say that nothing can be said?
[11:13] Speaker 2: 10. Yes.
[11:15] Speaker 1: Say 10, right? Okay. Because of this time, I will not try to find why the answers were like that.
[11:23] Speaker 1: But the only possible totally correct answer is this one, right?
[11:31] Speaker 1: All the other answers are absolutely wrong. But if you said increase, it's no problem, right?
[11:37] Speaker 1: Because everyone perceived it that way, right? There were huge decisions made on the basis of this plot.
[11:45] Speaker 1: Like, what about the biggest car producer in Middle Europe was closed in three papers, and foods were closed, and everything was closed. But it was based on this plot, and the decisions based on this plot, purely on this plot, must have been completely wrong, because the problem here was the name of the— of the plot, right?
[12:11] Speaker 1: The information about "New Daily Confirmed Cases of COVID-19 Disease" was based on what? It was based on the number of positive COVID-19 tests, logically, right?
[12:22] Speaker 1: Most positively tested was kind of a confirmed case in some sense, right? But the problem behind this was that at the beginning of March 2020, there were no COVID-19 tests done.
[12:40] Speaker 1: The tests had not existed. There were no tests, like, done at the beginning.
[12:48] Speaker 1: And therefore, if you were to conclude regarding the spread of the disease on the basis of number of positive tests, you would also have to consider the information about how many tests were done. Because if you do no tests, you may have no positive tests, right?
[13:08] Speaker 1: And therefore no new confirmed cases. So a crucial, like, information which was missing in this plot was number of confirmed tests, which looked like this, right?
[13:21] Speaker 1: That's the orange time series. So at the beginning of the March, there were no tests done, and there logically would not have been positive tests.
[13:31] Speaker 1: No tests were done at all, right? So if you were to actually try to— if you were to try to answer that question, you should also, of course, logically, have considered the number of tests and it was not done.
[13:44] Speaker 1: At least not in a published media, right? This was not published anywhere, even though the data existed, right?
[13:52] Speaker 1: And this should have been called number of positive tests, not number of confirmed cases, because calling it this way was very confusing, right, for the audience. Actually, just for your interest, this shows the number of tests as well as number of positive tests, right?
[14:16] Speaker 1: So there seem— there is— it's obvious that they came— were very similar. And if you put them into the quotients, if you were to present proportion of positive COVID-19 tests in the whole period, it would be the green line, green time series, and it kind of shows that the proportion is kind of more or less the same all the time, right?
[14:42] Speaker 1: So correct answer on the basis— correct answer: all these four plots should have been presented at once, right? Not just the first one.
[14:51] Speaker 1: And maybe because of those superstitute measures, we can see that the disease was not actually spreading at all, right? It would remain somehow— the proportion remained around 7%.
[15:04] Speaker 1: Just for your interest, later during the same year, in December, the same proportion which we have here in green time series was, like, 40%, right? They opened everything at the time, by the way, right?
[15:16] Speaker 1: Here, I would like to stress: we are not wanting the discussion. This was very serious, of course, right?
[15:21] Speaker 1: Mainly for older people. So, of course, some decisions were difficult.
[15:26] Speaker 1: My point is only that you always need to be really super careful with considering what's actually on the plot, right? And you should always even think about what the data are, and if the plot is correctly called, and everything, right?
[15:41] Speaker 1: Before making a decision that you will invest your millions into some, you know, startup or something like that. Alright, so thank you very much.
[15:48] Speaker 1: So we— so my conclusion is that statistical charts are a super strong tool, right? Super strong tool.
[15:57] Speaker 1: And there are sometimes decisions which could, like, influence the whole world, actually, right? Just on the basis of the plot.
[16:04] Speaker 1: And it's not a mistake of the plot if the decisions are wrong. It's typically a mistake of the audience or the creators of the plot sometimes.
[16:12] Speaker 1: Okay, so that's it. And now let's move to something less interesting, which is taking on number two in the progress list.
[16:21] Speaker 1: And don't jump into notes. Can I— can I get that desk?
[16:25] Speaker 1: Can I skip it? Can I skip the pen there?
[16:28] Speaker 1: And today we will cover the first half of this— of this page, discussing the contingency table analysis and one-way analysis variance. Next week, in lecture 4, we will complete studying this page in different methods: collection analysis and revision analysis will be done on this page.
[16:45] Speaker 1: Today we'll start with the contingency table and one-way analysis for the variance. So we start today with a huge topic: super-specific in statistics and a little dependence, right?
[17:00] Speaker 1: So your assumption that you have more statistical variables. In this course, we'll focus on mainly two of them, right?
[17:08] Speaker 1: That is the case when you have just two statistical variables. And you might be, of course, of course, interested a lot about trying to describe, examine, or evaluate dependencies.
[17:19] Speaker 1: You can say relationships, associations between those two, or theoretically even more statistical variables. How they are associated, how they are related, how they are dependent on each other, right?
[17:30] Speaker 1: So that should be our dependence. Those of you who would be wondering whether we have some negative features here, would you perceive some difference between words "dependence," "dependency," "relationship," and "association"?
[17:44] Speaker 1: You're a native speaker, partly. Would you say that there are some huge differences between them: dependency, relationship, or association?
[17:53] Speaker 2: I think dependency and association are very different. Dependency and relationship is closer to the end.
[17:58] Speaker 1: Alright, okay. Yeah, yeah. Okay, so association is slightly different, let's say.
[18:02] Speaker 1: But yeah, these three are used kind of typically. All of them.
[18:05] Speaker 1: I prefer relationship or dependence, right? So, but if you would, you know, for this course, if you would just, you know, use them, all three of them, it's fine.
[18:16] Speaker 1: Okay. So what's important from a theoretical perspective for preparation for the final test and for your verdict— actually, to apply the methods correctly— it's crucial from a theoretical perspective, let's say, to be able to distinguish what is the primary goal of the analysis you perform, of the analysis you want someone to perform.
[18:39] Speaker 1: You may distinguish four kinds of the primary goals. And according to that, four kinds, let's say, of analysis of dependence.
[18:47] Speaker 1: You can say that the analysis can be either descriptive, inferential, predictive, or causal.
[18:54] Speaker 1: Today, and actually also in lectures 4, 5, and 6, we will focus kind of on the descriptive analysis, right? Right?
[19:06] Speaker 1: Not descriptive as variance, but descriptive analysis of dependence or descriptive analysis of time series. So it will be complete descriptive analysis in lectures today and also in lectures 4, 5, and 6.
[19:19] Speaker 1: And the point is that in this kind of analysis, the focus will be just on the analyzed data set. So we'll try to describe the relationships, describe the properties and the data of the data set, describe the relationships in the analyzed data set.
[19:35] Speaker 1: So in descriptive analysis, again, there is no ambition on generalization. You don't want to generalize your conclusion.
[19:44] Speaker 1: You are focused just on the analyzed and the properties of the analyzed data set. While in the so-called inferential analysis, we'll encounter this one in lecture 11 and lectures 10, 9, 8, and 7.
[20:01] Speaker 1: All of those will be kind of preparation for that, right? So it's, like, very complicated, let's say.
[20:09] Speaker 1: There is very complicated theoretical background behind inferential analysis. So we will try this part very briefly in lecture 11.
[20:18] Speaker 1: So in the inferential analysis of dependence, the aim would be different. The aim would be to draw generalizing conclusions.
[20:24] Speaker 1: So we have a data set, right? There are some males and females in the analyzed data set.
[20:29] Speaker 1: But in the inferential analysis, you would like to say something about them in general, right? About, let's say, all males and females.
[20:35] Speaker 1: So that's the biggest difference, right? So in descriptive analysis, we focus just on the analyzed data set.
[20:42] Speaker 1: In the inferential analysis, we try to draw generalizing conclusions about, let's say, about all them. We draw all these development populations.
[20:51] Speaker 1: In the predictive analysis, which we'll encounter in next week, lecture 4, and also in lecture 5 and lecture 6, we'll try to predict or forecast something in some sense. So when we will do time series analysis in lecture 5 and 6, we'll try to forecast, predict future values, future development of the time series.
[21:15] Speaker 1: So again, completely different goal. And in lecture 11, we'll also briefly encounter the causal analysis.
[21:23] Speaker 1: The causal analysis is the most complicated analysis in statistics. It's the most sexy one in the sense that everyone wants to do that, right?
[21:32] Speaker 1: But most often, it's done wrongly. So this is, like, just basic statistical analysis in this course.
[21:39] Speaker 1: So we will— someone mentioned this one, so that you know that it exists. You are able to see the, like, differences from the other kinds, but we'll just make a little bit very briefly.
[21:50] Speaker 1: In the causal analysis, the aim is to draw causal conclusions, to judge the impact, effect, influence. These are crucial causal words.
[21:58] Speaker 1: Impact, effect, influence, right? These should be used only in the context of causal analysis.
[22:03] Speaker 1: You should avoid them in all previous kinds of analysis. What is this?
[22:07] Speaker 1: Cause and consequence. If I raise this marker, that the cause, what will happen?
[22:13] Speaker 2: Causal.
[22:14] Speaker 1: You sure?
[22:15] Speaker 2: Yeah.
[22:16] Speaker 1: Yeah. Because this time, cause and consequence is quite obvious, right? So that would be causal analysis.
[22:24] Speaker 1: The markers are down because I have this goal. Okay.
[22:28] Speaker 1: So this is the list. And whenever studying relationship or dependence between variables, we may also distinguish, let's say, two types of the relationship.
[22:45] Speaker 1: The relationship may be considered either unilateral or mutual. The unilateral relationships are such that during the analysis of such relationships, we will distinguish the variables to have specific roles: cause and consequence, right?
[23:04] Speaker 1: So if you are able, in factual sense, to recognize one of the analyzed variables to be the cause and the other variables to be consequence, such relationships should be considered or should be called unilateral. And there is, I think, a very nice example of a relationship between the height and weight of a man.
[23:24] Speaker 1: What can— what's kind of natural— what's kind of natural is to say that the height kind of is a cause for the weight in that sense.
[23:40] Speaker 1: That if you imagine two guys with different heights, you would logically assume the bigger one, the higher one, has higher weight, right? So the higher the man is, the heavier you would expect that man to be.
[23:55] Speaker 1: It's interesting that if you would swap the order in your head, it's not natural saying the heavier man is, the higher he should be. It's not— it doesn't make much sense, right?
[24:08] Speaker 1: So it is actually a very nice example when it's more like logical to consider the relationship to be unilateral, while the other kind, the relationship between variables, which is called mutual, is such that the variables, in logical, natural, factual sense, are more logical, natural to consider them to be equal in that sense that it's not clear which is the cause and which is the consequence. I think, again, the example is very nice that here we have a relationship between weight of a man— weight, how much a
[24:42] Speaker 1: man weighs— and the amount of his head, right? Here it can go as well in both directions. The heavier man is, well, he's fatter, he might be.
[24:51] Speaker 1: And vice versa, right? If you would compare two men and you say one is fatter, you would expect the fat one to be also heavier, right?
[24:59] Speaker 1: So here we can kind of swap the order in your head of the variables. So for the weight, let's say for the weight and the amount of fat, it's kind of unclear which is the cause and consequence, and therefore the relationship is more logical to be considered as mutual.
[25:26] Speaker 1: Right. So this is a very important list of the descriptive analysis of dependence, the methods we will encounter in this course, in terms of the kinds of variables to which those tools, those methods are focused on.
[25:45] Speaker 1: So this is a very important slide. Never forget this.
[25:50] Speaker 1: Today we will do the contingency table and one-way analysis of variance. And the contingency table analysis is such that, or this is a tool needs to be used if you would study a relationship between two quadratic variables specifically.
[26:03] Speaker 1: So if you have two quadratic variables, the tool, the method, the descriptive method for studying relationship between such two quadratic variables is called contingency table. If you are in a situation of having one quadratic and one quantitative variable, theoretically, it can be used also for two quantitative ones, but we'll focus on the more typical case: one quadratic and one quantitative variable.
[26:26] Speaker 1: In that case, for studying relationship between these two, you should use one-way, or you can use one-way analysis of variance. I will today use the word ANOVA, which is just abbreviation.
[26:38] Speaker 1: Analysis of variance. Analysis of variance.
[26:40] Speaker 1: ANOVA. One-way ANOVA.
[26:42] Speaker 1: That's what we will do. And next week, in lecture 4, we'll also encounter the tools for studying a relationship of two quadratic variables, simple regression, and correlation analysis.
[26:53] Speaker 1: So that's it, right? This is very important.
[26:55] Speaker 1: So the ability to be able to distinguish whether a variable is quadratic or quantitative is crucial for you actually to be able to decide which method is the one to be used in the specific case in the specific case. Okay.
[27:11] Speaker 1: So let's get started with the first announced tool: contingency table analysis, page number 2 in the front of this. So those of you who have the format checking out, it should be everyone, right, at this point.
[27:29] Speaker 1: So please turn to page number 2, and there is a set of formats for the contingency table analysis.
[27:42] Speaker 1: Contingency table. Or sometimes, if you would use some other tools for studying, the term cross-tabulation is the same.
[27:49] Speaker 1: Cross-tabulation and contingency table are not the same thing. Not the same thing.
[27:53] Speaker 1: Two names for the same thing. It's a table which actually shows information about two quadratic variables in your data set, right?
[28:05] Speaker 1: So in the rows, you have information about the levels, possible— a list of possible levels of quadratic variable 1. In the columns of the table, you have a list of levels of quadratic variable 2.
[28:22] Speaker 1: And inside the table, like, in the middle, you have frequencies. So we have several categories, several levels of those quadratic variables.
[28:33] Speaker 1: And if you have them— if we have— so we can call categories of the variable which are here, row categories of the row variable. Here we can say there are categories of the column variable.
[28:43] Speaker 1: And if you combine those two lists of categories, of the levels, you would get a table consisting from many cells. And in each of those cells, you would have so-called observed frequencies NIJ.
[28:58] Speaker 1: NIJ would tell you how many times the particular combination of the categories of the row variable and categories of the seed variable appears in the data set. So N11, for example, would be a number, a specific frequency, telling you how many times the combination category 1 of the row variable, category 1 of the column variable appear in the data set.
[29:25] Speaker 1: There are two indexes, two subscripts, IJ. It seems complicated on the first time, but it's not.
[29:33] Speaker 1: The index I is there for the row of the— is there for the row variable. Index J is there for the column variable.
[29:45] Speaker 1: And yeah, the index I, as you can see in the presentation, in general, those 1, 2, R, trying to help you, the R is the number of rows you have in the contingency table, reflecting the number of categories of the row variable.
[30:04] Speaker 1: While index J goes from 1 to 10. C, then again, by this, we're trying to help you that the index J tells you in which column you are.
[30:17] Speaker 1: So C is the number of columns that tell you how many categories, how many levels the column quadratic variable has, right? So index I, indexes I and J, just tells you in which particular— if you combine them together— in which particular cell in the table you are.
[30:33] Speaker 1: And what's inside the table NIJ is called observed or empirical frequencies, simply telling you how many times each combination appears in the analyzed data set. So even though if you see it for the first time, it might seem complicated on the first side, but it's not, right?
[30:47] Speaker 1: Hopefully, it's not. So just frequencies, right?
[30:52] Speaker 1: Frequencies, how many times each combination appears in the data set. If you would sum the observed frequencies by— if you would sum them by columns, you would get N dot J, right?
[31:10] Speaker 1: So if you would sum up observed frequencies by the first column, you would get specifically N dot 1, telling you what the overall frequency of the first category of the column variable. So N dot 1 tells you how— you would find it by summing this particular.
[31:29] Speaker 2: If there is, like, complete independence, we can also say that the observed frequencies NIJ would be— all of them would be exactly the same as the expected frequency.
[31:51] Speaker 2: So if there indeed is relationship in the analyzed data set, the observed frequencies would be equal to B, right? These are kind of theoretical, hypothetical frequencies we would expect there to be in the case of independence.
[32:06] Speaker 2: And if your actually real correct, true empirical observed frequencies NIJ are the same, that would be the case of the independence.
[32:19] Speaker 1: Yeah. Yeah. Yeah.
[32:20] Speaker 1: So yeah, exactly. So you are fully right, Mr.
[32:23] Speaker 1: Mummy. We will kind of— and that's what we will do.
[32:25] Speaker 1: We'll kind of compare if these are similar or not, right? That's actually the principle of the analysis.
[32:31] Speaker 1: You are right. Okay.
[32:32] Speaker 1: And the most maybe complicated to be understood, and the most important parts also in practical analysis, I would say, are conditional relative frequencies. You have these formats in the formats list, of course.
[32:50] Speaker 1: And here we'll calculate relative frequencies in such a way that their sum either for every column or for every one percent. The calculation is done by dividing the corresponding observed frequency by the corresponding marginal frequency.
[33:11] Speaker 1: And it's difficult to see at this point what it did before and what, so we'll have an example on that, of course, very soon. So conditional relative frequencies, you should be able to recognize it in the front of it and should understand from what they are calculated.
[33:25] Speaker 1: Okay. Let's move to the example.
[33:28] Speaker 1: So we work with our data set. This time we will have a data set of 185, as it was in the previous lecture, plus 150 students.
[33:38] Speaker 1: The reason for that, that we have just 150 students, is if you check in peace after the lecture, the data set we have received along with the lecture presentation, you would find out that for the variable opinions, statistics, there are some 15 values missing, right? So we don't have work this time with 185 students, but just with 150 students.
[34:05] Speaker 1: This is the reason. And what we will do, we will just a hypothesis about independence, or we can— or this means, like, no relationship at all, between two quadratic variables.
[34:19] Speaker 1: One quadratic variable is gender. Possible levels categories are female and male, or gender, right?
[34:24] Speaker 1: So we have two rows. We can also say that the row variable is gender, which has just two categories, female and male.
[34:37] Speaker 1: And we will have it in row of the table. We can say that index I equals 1 for female, index I equals 2 for male, and this is also R, number of rows of the table, right?
[34:52] Speaker 1: So that's our first quadratic variable. And the other one is difficultness of statistics.
[35:00] Speaker 1: Opinions on difficultness of statistics. Opinions on difficultness of statistics.
[35:04] Speaker 1: This is a real data set, right? It's a real data set.
[35:09] Speaker 1: The past students of this course, and the opinions on how the course actually is. So there are three possible categories.
[35:17] Speaker 1: They could have said that the course is either intermediate, difficult, or very difficult. You can see there is sometimes, like, you would expect, like, easy, intermediate, difficult, but it didn't work.
[35:26] Speaker 1: No one ever wanted to say that it's really super easy, right? So that's why we have these categories: intermediate, difficult, and very difficult.
[35:34] Speaker 1: Meaning that— and we have this opinion in the column, this opinion variable, with three possible categories: intermediate, difficult, very difficult. Meaning that in our case, index J would be 1 for intermediate, index J would be 2 for difficult, and index J would be 3 for very difficult, which is also C, number of columns of the table.
[35:59] Speaker 1: Right? So just R and C are trying to help you.
[36:02] Speaker 1: Row columns, right?
[36:06] Speaker 1: And we are tasked to judge a hypothesis of independence between these two variables. Important term is research hypothesis.
[36:16] Speaker 1: The hypothesis may be referred to as research hypothesis.
[36:22] Speaker 1: That's a very important term. Research hypothesis is some idea you have about the relationship you are studying before actually carrying out the analysis itself.
[36:35] Speaker 1: Here we will do the example where you are told what the research hypothesis should be. You are told that the research hypothesis is independent, right?
[36:42] Speaker 1: That gender and opinions on difficultness are not related in any sense. There is no relationship.
[36:48] Speaker 1: But in serious analysis, you could have, like, different research hypotheses. Your research hypothesis would have been that there is actually some relationship.
[36:57] Speaker 1: And you can also say your research hypothesis may be that the relationship is either weak or strong, or whatever, right? So they're just your idea.
[37:04] Speaker 1: This is very important. This is a very important principle in serious analysis.
[37:09] Speaker 1: Research hypothesis should come before studying the relationship, right? And it should be just your idea about how the relationship actually looks like, right?
[37:18] Speaker 1: You should have some reasons for that, of course. You should be able to reason why you think that it's independent, or why you think there is some relationship, right?
[37:25] Speaker 1: And then you perform analysis, and you either get some support for your research hypothesis or not. That's it, right?
[37:31] Speaker 1: So this is very important. Of course, in this example, you are told what the research hypothesis should be.
[37:35] Speaker 1: But in practical analysis, you might have different— you could have had, like, a hypothesis that there is a strong correlationship, right? That there is strong dependence.
[37:43] Speaker 1: And then you perform the analysis the same way, and try to see whether you have some support for your research hypothesis or not. And the second task is to judge the strength of the relationship, right?
[37:53] Speaker 1: So these are actually two typical tasks in statistics when in analysis of independence. You have two tools.
[38:02] Speaker 1: You can judge your research hypothesis, and you can try to express how strong the relationship actually is in the analyzed data set, right? So these are, like, two things you may— you may— you may— these are two ambitions you might have.
[38:15] Speaker 1: And of course, we'll learn both of them. So I hope the numbers— you had enough time to understand what they are.
[38:23] Speaker 1: So I hope it's clear that, for example, you can see that we have a data set of 155 students. You can see that 80 were females, 70 were males. 59 people had the opinion of the course being difficult.
[38:37] Speaker 1: And you can see that there were 27 males whose opinion was that the course was very difficult, right? And the whole analysis starts with this table.
[38:48] Speaker 1: The whole analysis starts with this table. So yes, I already commented this.
[38:54] Speaker 1: The comments are past students, hopefully this course, all different. One gender positive opinion.
[38:59] Speaker 1: We have this on the whiteboards. One has discussed this.
[39:02] Speaker 1: And now, let's go deeper, right?
[39:07] Speaker 1: So the first thing is that we try to divide the whole table by the data set size of 150. What we got here is actually the same information as in the original contingency table, only expressed relatively.
[39:23] Speaker 1: So we can see that in the analyzed data set, there is 53%— or 53% are females, 47% are males. You can see that 39% of the people actually had the opinion of being difficult.
[39:40] Speaker 1: If you wonder why this actually does not form exactly 1, it's because surrounding, right? So we don't want that too much.
[39:48] Speaker 1: I just decided to go with two decimals. You know, kind of not to make the numbers too big.
[39:53] Speaker 1: So sometimes there might be slightly increase in that. But otherwise, I hope this is clear.
[40:00] Speaker 1: And what's more important and more complicated is here. Let's imagine that the original contingency table was divided by the total columns.
[40:10] Speaker 1: So we have this original contingency table, and each column was divided by the number in the total column. So values in the first row were divided by 80.
[40:22] Speaker 1: Values in the second row were divided by 70. And what we get by that calculation, these are conditioned relative frequencies, specifically because we have divided each row by the number of females or males.
[40:38] Speaker 1: These might be called gender conditioned relative frequencies. And this is a crucial tool when studying relationships of two quadratic variables.
[40:49] Speaker 1: Because what we got here is distribution of opinions for females. And in the second row, we have distribution of opinions for males.
[41:07] Speaker 1: So is there anyone briefed enough to give factual interpretation, let's say, for this number?
[41:18] Speaker 2: One word.
[41:19] Speaker 1: Okay. Mr. Mummy?
[41:22] Speaker 2: 40% of the.
[41:23] Speaker 1: Louder, please. Louder, louder.
[41:24] Speaker 2: 40% of the females found it very difficult.
[41:29] Speaker 1: Right. So this tells you that 40% of females found the course to be very difficult. Or we can say that 33% of males found the course to be difficult, right?
[41:40] Speaker 1: Gender conditioned relative frequencies. And these could be used for actually judging your hypothesis, right?
[41:50] Speaker 1: So if our research hypothesis, as we are told, was the independence, such a situation would show itself in such a way that these two distributions, opinions separately for males and females, would be the same. If the variables are totally independent, the proportions of females and males with each particular opinion would be exactly the same.
[42:17] Speaker 1: So what we now need to do, we just need to compare whether these three numbers are the same as these three numbers. What you can see is that the proportions for very difficult are really very similar, but for difficult and intermediate, they differ.
[42:35] Speaker 1: Listen here, gentlemen. What we can see here is that the proportions of males who would say the course is just intermediate is higher almost two times than females.
[42:46] Speaker 1: Showing what? Showing higher self-confidence.
[42:53] Speaker 1: It's a higher self-confidence of parts of the male population, right? It doesn't show itself in the results of the course, by the way, but indeed, our data research doesn't have to show that there is some part of males who is quite over self-confident in some sense, right?
[43:14] Speaker 1: So now let's get more serious again. So the proportions here and here are not really the same, right?
[43:21] Speaker 1: So we can actually conclude that it seems that the distribution of opinions for males differ a bit with the other data set, right?
[43:30] Speaker 1: Please, louder, much louder.
[43:32] Speaker 2: I have a question about the total contingency numbers. Do you know that it's hard to get the total baseline?
[43:41] Speaker 1: You mean this one?
[43:42] Speaker 2: Yes.
[43:43] Speaker 1: Again, it's not that important as the previous two rows, but it was we got those in the last row with analyzed 150, right? So just, like, just proportions of the opinions for the whole data set. That's what we're interested in.
[43:57] Speaker 1: But the question that was more important are the gender conditioned frequencies, which are kind of in the main contingency table.
[44:06] Speaker 1: So strictly speaking, we've been speaking for the analysis for this row, which is not necessary to be there, right? Okay.
[44:15] Speaker 1: Yeah. Then we can do the same thing by dividing the table of the totals in the total row.
[44:23] Speaker 1: And now the table shows opinion conditioned relative frequencies. And someone else, Mr.
[44:28] Speaker 1: Mummy, is there anyone who would give factual interpretation of this value, 0.54? Okay.
[44:38] Speaker 2: No.
[44:39] Speaker 1: Who would like to give this? Someone else? I know you need to do that.
[44:44] Speaker 1: Okay. So here you go, Mr.
[44:45] Speaker 1: Benchu.
[44:45] Speaker 2: 54% of people who describe statistics as very difficult were females.
[44:51] Speaker 1: Perfect. Strangely enough, typically there are some people who are able to interpret these, but they have difficulties here. But what Mr.
[45:01] Speaker 1: Benchu said was precise, right? So this tells you this is a distribution of gender for the people with opinions very difficult.
[45:09] Speaker 1: So we can say that 54% of people with opinions being very difficult, the course being very difficult, are females, right? And the principle is the same as in the previous case.
[45:20] Speaker 1: If these distributions, if these opinion conditioned distributions are the same, that would be the case for independence. And as we can see, they are not the same, right?
[45:32] Speaker 1: This distribution, these two numbers are different than these two. So again, we can see the distribution of gender for different opinions differ in the analyzed data set.
[45:46] Speaker 1: We can show the conditioned frequencies by chart. Super important chart, extremely important chart when studying relationship between two variables.
[45:57] Speaker 1: It's called Stigbar chart. This chart is called Stigbar chart.
[46:01] Speaker 1: And what we do here, if we were, for example, here we get back to this one, gender conditioned frequencies, what we would do, we would have a plot with two bars, each for one gender. And the bars would always be of height 100%.
[46:19] Speaker 1: And what we would do, we'd split the bars with height of 100% according to the conditioned relative frequencies for each particular opinion. So this is a very nice way, actually, to demonstrate whether the conditioned distributions are the same or not, right?
[46:40] Speaker 1: So this shows gender conditioned distributions. The one on the left side shows opinion conditioned distributions.
[46:48] Speaker 1: And yeah, that's it. In the case of independence, in the case of total complete independence, what we would see in the plots, in the case of total complete independence, here we have plot for females, the height being 100%.
[47:12] Speaker 1: Here we have bars for males, again, the same height of 100%. And the proportions for opinions intermediate, let's say difficult, and very difficult, would be exactly the same.
[47:33] Speaker 1: So if these plots, if the bars in these plots are exactly the same, that would be the case of complete independence. No relationship between those two variables at all.
[47:46] Speaker 1: Okay. So that's it.
[47:51] Speaker 1: So this is a very powerful tool, right? It's a very, very, very powerful tool when studying the relationship.
[47:57] Speaker 1: Okay.
[48:04] Speaker 1: How we would express the strength of the relationship, right? We can do that by the calculation of the so-called contingency coefficient.
[48:14] Speaker 1: In your formula space, you'll find totals: Riemann's contingency coefficient gets up to v1, and Pearson's contingency coefficient gets up to c1.
[48:26] Speaker 1: This reasoning method notation is not logical, right? But the problem was that there was Mr.
[48:31] Speaker 1: Pearson, like, 200 years ago, he constructed some coefficient and divided it by c. Later came Mr.
[48:38] Speaker 1: Cramer, consolidated his contingency coefficient, and he was already a good guy, so he chose him.
[48:43] Speaker 2: That's not my choice, right? It's given by history. The notation is not very logical.
[48:52] Speaker 2: Remember that.
[48:53] Speaker 1: And what can be said about these two coefficients? First of all, there is some gene using them that would be explained. Some of that would be explained in the next slide.
[49:07] Speaker 1: Then there is data set size m, that's clear. And m, m is easy.
[49:13] Speaker 1: M is minimum, like smaller numbers from r and c. So if in our example, if in our example, we have a table with two rows and with three columns, the m, for the purposes of this formula, would be minimum smaller from numbers 2 and 3, which is 2.
[49:34] Speaker 1: What's important to understand is that, for theoretical filetest, is that this m in this sense bears information about the size of the table. It reflects how the table is big, how many there's rows and columns in some sense, right?
[49:50] Speaker 1: So the m, that's an important comment, bears information about the size of the table. And as you can see, Mr.
[49:58] Speaker 1: Pearson's coefficient is not using this information at all, while Mr. Cramer has this m, the information about the size of the table in his coefficient.
[50:11] Speaker 1: And therefore, if you were in a situation to choose, it's to be said that Cramer's contingency coefficient is certainly better because it uses the m. It uses the information about the size of the table, leading to a coefficient always on the scale from 0 to 1, which is perfect.
[50:29] Speaker 1: If we have such a measure, which always gets just values in some range, it's absolutely perfect. So in this sense, Cramer's contingency coefficient is better.
[50:41] Speaker 1: Pearson's contingency coefficient is not using the information about the size of the table. And what happens is that its minimum is 0, and maximum is kind of flexible, mobile, depending on m, depending on the size of the table, which is slightly uncomfortable when interpreting the coefficient.
[51:00] Speaker 1: What can be said in general, these coefficients would be equal to 0 in the case of totally independence, no relationship at all. So those who are making notes, 0 reflects no relationship, totally independence.
[51:15] Speaker 1: And the maximum, either 1 or this, let's say, mobile number, reflects the strongest, strongest possible relationship, strongest possible dependence. So we have some scale, right?
[51:28] Speaker 1: We have some scale. On the left side, there is total independence, no relationship at all.
[51:34] Speaker 1: And on the right side, there is the strongest possible dependence. And then you just, you just subjectively can interpret the sense of the relationship.
[51:45] Speaker 1: So if you put it on table like this, you would say there is very weak relationship, right? If it's 0.9, you may say there is very strong relationship for the Cramer, right?
[51:59] Speaker 1: If it's somehow close to 0.5, you would say there is intermediate relationship and so on, right? It's, of course, subjective, but just partly subjective, right?
[52:09] Speaker 1: Not as subjective as judging the strength of the relationship just from the basis of the same sample, right? So you have some difference there in the sense that you get a 0 for independence and you get a 1 for Cramer's strong independence.
[52:25] Speaker 1: So we only measure information of g. G has no special name.
[52:29] Speaker 1: It's not just for this. The value is g, right?
[52:33] Speaker 1: It's calculated according to this formula. So it uses the observed frequencies and the expected frequencies.
[52:40] Speaker 1: You can take your time after the lecture to check this table to understand why how the formula works, that the g equals, in our example, 4.64. But what I would like to stress, and I would like everyone to think about that, in the case of independence, the value g will be equal to how much?
[53:02] Speaker 1: Just look at the formula. Take what we have said.
[53:05] Speaker 1: It's actually written on the whiteboard as well. In the case of complete independence, we'll get value g how much?
[53:12] Speaker 2: 0.
[53:13] Speaker 1: 0.
[53:15] Speaker 2: The ratio over there is a different image.
[53:21] Speaker 1: You're right. Why?
[53:22] Speaker 2: The ratio, why?
[53:23] Speaker 1: Because this contingency coefficient must be 0 if there is no relation.
[53:32] Speaker 2: Ah, you went from the other side. I understand.
[53:35] Speaker 1: But it can be seen here. We know that in the case of complete independence, the observed frequencies are the same as the expected frequencies. So if all of these are the same, coefficient g would be 0, right?
[53:48] Speaker 1: And consequently, also the contingency coefficient would also be 0, right? Okay.
[53:58] Speaker 1: Yeah. So this is related by very important for theoretical understandings, right?
[54:04] Speaker 1: I think the extremes and the results in the case of theoretical extremes, this will never have been practiced, right? But theoretically, these theoretical extremes are ideally the best approach to understand the method from a theoretical perspective.
[54:19] Speaker 1: Okay. So in our case, in our example, the results would be like that.
[54:26] Speaker 1: And we get Cramer's 0.176. So we can conclude that the relationship between gender and opinions on the frequency of statistics is in the uncertain range as well as week, because it is quite close to 0, right?
[54:38] Speaker 1: Always, of course, there is some subjectivity in these interpretations, but it's less, let's say, subjective than interpreting the strength of the relationship just from the basis of Stigbar or. Yeah.
[54:49] Speaker 1: Questions?
[54:51] Speaker 2: Out of these, you mean?
[54:58] Speaker 1: You could use both of them. If you are just told to expect the strength of the relationship, you should use both of them. Or you would be told whether Pearson or Cramer.
[55:06] Speaker 1: So you should know which is what, which is which, and. In practice, and it's only if you were someone if you were giving someone a task, I would certainly go for Cramer from the reasoning method, right?
[55:17] Speaker 1: Not for whatever the example is from the program. All right.
[55:21] Speaker 1: Are there any questions about the contingency table?
[55:26] Speaker 1: It was the 18th part today. So if there are questions, that's great.
[55:30] Speaker 1: And let's move to the other topic, other method, one-way analysis of variance. I will not instead of all these words, analysis of variance, I will use ANOVA as just a variation of that.
[55:40] Speaker 2: There's no other lecture.
[55:42] Speaker 1: What's good news is that for the ANOVA in the formula space, we have just two formulas there, right? Not too many formulas. So it would be good news.
[55:49] Speaker 1: But again, to understand, it's a few hours. You come into the course on the first time and it's complicated.
[55:57] Speaker 1: So what's crucial to see? This one-way ANOVA method is used for static relationship between one qualitative and one quantitative variable.
[56:08] Speaker 1: Theoretically, it can be used also for two qualitative ones, but we'll focus on the most common situation when it's used, when having one qualitative and one quantitative crucial. Contingency variable, two qualitative ones, ANOVA, qualitative and quantitative variable.
[56:28] Speaker 1: So we have two. We have two variables here.
[56:37] Speaker 1: The one which the one which needs to be qualitative, the qualitative one, is called factor.
[56:53] Speaker 1: And the other one, the quantitative one, will be denoted by x, right?
[57:01] Speaker 1: So we have two variables. One is qualitative, the one is referred to as a factor, you just notice.
[57:07] Speaker 1: And the quantitative one will be denoted by x. In our example, which will follow soon, the qualitative variable will be, again, gender, because it's super simple and easy to be understood.
[57:23] Speaker 1: And gender operates on two levels or categories in the context of this analysis. Sometimes these are also called treatments, right?
[57:33] Speaker 1: So it's just a special word for this ANOVA when talking about the levels or categories of the factor. So in our case, there will be two levels, two treatments of the factor variable.
[57:55] Speaker 1: And in the formula space, there's index j. So in our example, index j will be equal to 1 for males, j will be equal to 2 for females.
[58:05] Speaker 1: And what's also important, this analysis is based on splitting the data sets, splitting the variables, splitting the values of your quantitative variable x according to the factor in k groups. So k is important lecture.
[58:27] Speaker 1: And in our example, as the factor has just two possible levels, the k number of groups will be equal to 2. So we would split values of some quantitative variable in the formula space, we'll divide it by x according to the factor into k groups.
[58:47] Speaker 1: That's the basis, that's the idea of this method, right?
[58:55] Speaker 1: That's what we're doing. This method, the descriptive one-way ANOVA, can be used to assess the differences between arithmetic mean of values of quantitative variable divided by k group.
[59:04] Speaker 1: Or we can use it to judge the relationship between, yeah, judge the relationship between one qualitative and one quantitative variable.
[59:13] Speaker 1: To understand the formulas and the principles, we will use an example, of course. Our still in the same data set, which at this point of time you should be quite familiar with.
[59:26] Speaker 1: So we have a data set of 155 past 461 students. We are told to judge a research hypothesis, again, about independence, meaning no relationship between gender and number of accent rates.
[59:40] Speaker 1: And now I have a question.
[59:45] Speaker 1: Would you, I mean, personally, subjectively, agree with a research hypothesis that gender and number of accent rates are independent? So my question, not the word.
[59:57] Speaker 1: My question, would you say that on average, ladies and gentlemen get the same number of accent rates or not?
[60:05] Speaker 2: No.
[60:06] Speaker 1: No? What would be your research hypothesis then?
[60:11] Speaker 2: Why?
[60:12] Speaker 1: You would say that so which group you would say that gets more accent rates?
[60:19] Speaker 2: Ladies.
[60:19] Speaker 1: Ladies. Okay.
[60:22] Speaker 2: Ladies.
[60:25] Speaker 1: Okay. So your true research hypothesis may be that there is some relationship between gender and number of accent rates in the sense that ladies tend to get more accent rates, right? You might say that the difference is big.
[60:39] Speaker 1: In that case, you would number, like, number of accent rates which achieve ladies and gender, that the difference is very huge. In that case, your research hypothesis would be that the relationship is strong.
[60:51] Speaker 1: Or you would say, you might say, there is not, there is difference, but not so big. In that case, it would mean that your research hypothesis is that the relationship is weak, right?
[60:59] Speaker 1: But not total independence. Total independence would mean that the ladies and gents, on average, get totally the same number of accent rates, right?
[61:08] Speaker 1: So my point is that different people may have different research hypotheses about the same phenomenon. That's the point, right?
[61:15] Speaker 1: That's the principle. And you should be able to give some reasoning, some method.
[61:18] Speaker 1: Why do you think ladies get more accent rates?
[61:21] Speaker 2: True.
[61:24] Speaker 1: Typical reasoning may be that they tend to be more responsible, more hardworking, right? So I'm not saying that is my opinion, right? I'm just suggesting what the reasoning for such a research hypothesis might be.
[61:35] Speaker 1: Okay? All right.
[61:37] Speaker 1: Some of the gentlemen are smiling here, so I have to say thank you. Yeah.
[61:42] Speaker 1: What's my opinion? I'm not actually objective because I know that in real data, right?
[61:48] Speaker 1: So I know what's real, ladies get more accent rates, yeah, in the long term.
[61:56] Speaker 1: Okay. But please, let's work with an example.
[61:59] Speaker 1: So our research hypothesis we are told to be independent. And we also do, so we will judge this research hypothesis, and we will also judge the strength of the relationship between gender, that's our factor, and number of accent rates.
[62:13] Speaker 1: That's our quantitative variable, quantitative variable x. In our data set, we have 78 males and 87 males.
[62:23] Speaker 1: So now let's discuss what we have in the formula space. So those who have the formula space, they did out.
[62:31] Speaker 1: To SST, you can write total sum of squares. The SST, which is there, is so-called total sum of squares.
[62:39] Speaker 1: And even though the formula seems to be completely new, it's not. It's not for those students who are partly familiar with the variance.
[62:51] Speaker 1: In lecture 2, we have discussed variance. Notation is S x squared.
[62:56] Speaker 1: We will practice this today as a seminar. The formula for S x squared, for the variance, the definition formula we have encountered there is looks like that.
[63:08] Speaker 1: And the total sum of squares, which we encountered here today, is basically nothing else than the numerator of the variance. So this number bears this calculation bears information about total variation of values of your quantitative variable x in the analytical set.
[63:32] Speaker 1: Why it looks differently here and here, the only reason why it looks slightly differently is that here we have two summation symbols because we work with a data set in situation when the values of numbers of accent rate were split into k groups. In our example, we have split the values of numbers of accent rate into two groups, for males and females.
[63:56] Speaker 1: So we have two groups, and we work with them separately. That's the only reason why there are these two indices.
[64:02] Speaker 1: Index j denotes the I have it on the whiteboard. Yeah.
[64:06] Speaker 1: The j denotes the group, and i denotes it's the same as we are used to, it's just the position of particular value in the analysis data set. So x bar is the overall mean of numbers of accent rates in our data set.
[64:20] Speaker 1: And xj are individual values of numbers of accent rate. And you have just this, say, there are just two indices here, two subscripts, because j is tell you in which group you are, and i just tells you what the position in that particular group.
[64:37] Speaker 1: So my main comment is that this thing and the numerator of the variance are exactly the same calculation. So what we can say is that the SST, the SST, total sum of squares bears information about total variation, total variation of x variable, right, in our case x number of accent rate.
[65:20] Speaker 1: And then there are two more. Sum of squares in the formula space.
[65:25] Speaker 1: So-called treatment sum of squares. So we have printed formulas out.
[65:29] Speaker 1: SSTR is treatment sum of squares. SST is error sum of squares.
[65:35] Speaker 1: What's crucial is that the total sum of squares can be split in the sum of these two, treatment plus error sum of squares. Now we'll just discuss the formulas.
[65:53] Speaker 1: The symbols at this point of semester should not be complicated. X bar is the overall mean of numbers of accent rate in the whole data set.
[66:00] Speaker 1: Xj bar are group means, right? So for males, we can calculate x1 bar.
[66:09] Speaker 1: For females, we can calculate x2 bar. This will be the average numbers of accent rates separately for males and females.
[66:17] Speaker 1: And by the way, I can actually write them down. So in our example, for males, the average number of accent rate in the analysis data set is 3.077 rate.
[66:35] Speaker 1: For females, x2 bar, the average number of accent rate for females in our data set is 3.494 accent rate. And the overall arithmetic mean in the whole data set of accent rate is 3.97 accent rate.
[66:58] Speaker 1: So these numbers, along with the group frequencies, numbers of males and females and j, then the individual values of accent rates inside each group are used for calculation of these sum of squares.
[67:16] Speaker 1: So the symbols, of course, if you see the formulas, it's difficult to understand how exactly it's calculated, but the particular individual symbols should not be should not be so complicated. What's important is what the sum of squares actually express.
[67:33] Speaker 1: Here is just shown the calculation numerically. I mean, so you may check the Excel file.
[67:39] Speaker 1: You have to see it on the lecture after the lecture. According to these formulas, the calculations are there, right?
[67:47] Speaker 1: If you sum them up, you get the total sum of squares, which is the same as the total sum of squares which you would get by using the, let's say, this formula for the total sum of squares, right? So it actually works.
[68:00] Speaker 1: What's important to note also, you will practice this at seminar next week. And in Excel, you can quickly get all the sum of squares, treatment, error, and total sum of squares by using the data under group type, right?
[68:14] Speaker 1: So we'll learn this at the seminar. For our example, the outcome from Excel will look exactly like that.
[68:24] Speaker 1: So the numbers are still the same, right? So the total sum of squares is 940.45, exactly what you would find in the Excel.
[68:35] Speaker 1: Here we can also see the number of males, number of females, and the group means of accent rate, which we have on the whiteboard. So all these things are to be found in the lecture, in the Excel file we have received along with this presentation.
[68:51] Speaker 1: So you can check this, of course. Most responsible students should use that.
[68:58] Speaker 1: And before we actually explain what the treatment and error sum of squares show, I would like to actually reflect to something we have seen in lecture 2. In lecture 2, we have seen a formula for decomposition of variance.
[69:13] Speaker 1: Now we have this new formula for the sum of squares. And I would like you to see this.
[69:20] Speaker 1: This is a formula for treatment sum of squares. And this is something we have seen in decomposition of the decomposition of variance in previous lecture.
[69:28] Speaker 1: And you can check this out. These are the same things, right?
[69:32] Speaker 1: So the principles in splitting the variance, in some sense, in different situations, different contexts, are based on similar properties of the variance. So here I'm just like you to see that there are actually some similarities.
[69:45] Speaker 2: Is it my name? Are you okay?
[69:47] Speaker 1: No. So you can see.
[69:54] Speaker 1: You can see, of course. No problem.
[69:56] Speaker 1: So this is here just to show you that, yeah, there are some similar principles behind this formula. This formula has no problem from heaven, right?
[70:04] Speaker 1: It's just, okay, you just mix some random, you know, symbols. They are based on some very important knowledge there from past properties of the variance and so on.
[70:14] Speaker 1: Okay. So what does the treatment and error sum of squares actually show?
[70:20] Speaker 1: The treatment sum of squares represents between-groups variation. So what we can understand is that the treatment sum of squares shows that part error one, that part of variation of numbers of accent rate, which can be explained by the factor, in our case, by the gender.
[70:49] Speaker 1: So you may understand the treatment sum of squares as a value expressing, in some sense, the strength of the relationship, right? So it's the part of total variation of x which can be explained by the factor, while the error sum of squares is the rest.
[71:09] Speaker 1: It's the part of the variation of x which cannot cannot be explained by gender, be explained by gender. We may understand this also as a part of the variation which corresponds our distribution of some, let's say, random factors, in that sense that they are not considered in the analysis because, like I said, now it's important.
[71:38] Speaker 1: What's, I mean, in reality, what are the most crucial factors determining numbers of accent rate? What's the decisive whether you get accent rate in some subject?
[71:56] Speaker 1: What are the reasons whether you get what are the true real factors if you get whether you get accent rate or not? Please, suggestions.
[72:04] Speaker 1: Yeah.
[72:04] Speaker 2: IQ.
[72:04] Speaker 1: IQ. Thank you very much.
[72:07] Speaker 2: Studying.
[72:08] Speaker 1: How much you study? Thank you very much. I'm hoping for that.
[72:10] Speaker 1: Yeah. Someone else?
[72:14] Speaker 1: Effort? Yeah.
[72:16] Speaker 2: Understanding.
[72:16] Speaker 1: Understanding. Or, you know, whether you take heroin or not, whether you have slept the previous night or not, how much beer you drank every week, right? How much you watch television every week, right?
[72:32] Speaker 1: And so on and so on. You know, if you take heroin every day, maybe your number of accent rate will not be that high, right?
[72:37] Speaker 1: So my point is that, in reality, there are many, many true factors. I'm also suggesting to a third act which actually influence the actual numbers of accent rate.
[72:52] Speaker 1: And all these are hidden in the error sum of squares. So everything else was kind of determines.
[72:59] Speaker 1: Values of x, and it is not your factor, and it is hidden in the error sum of squares. All of that, right?
[73:06] Speaker 1: All these things which actually have some impact on x and are not your factor are hidden in the error sum of squares. Okay.
[73:16] Speaker 1: So this was important principle. And yeah, according to what we have already said, we are almost done.
[73:26] Speaker 1: If you would get if you get high SSTR and low SSE, it would show strong relationship, strong dependence. The other case, if you would have small, low SSTR and high SSE, it would reflect weak relationship, right?
[73:43] Speaker 1: So the stronger the relationship, the higher the SSTR.
[73:51] Speaker 1: Important, super important slide. The lecture 7 for theoretical understanding of any method, what grade is considering the extreme.
[74:00] Speaker 1: So if we were again to focus on extreme, one extreme is total independence. Total independence, like no relationship at all.
[74:16] Speaker 1: So this would happen if the treatment sum of squares is 0, right? If there is no no between-groups variation, if all group variation specifically this would actually happen if all group means, in our case, the improvement, are the same.
[74:41] Speaker 1: This is what the method does.
[74:46] Speaker 1: It compares the difference. It judges the difference between the group means.
[74:54] Speaker 1: In our case, in our case, the average number of accent rate for males was 3.077. For ladies, it was 3.494.
[75:05] Speaker 1: And what the method does, it compares, it judges whether the difference is big or not. In the case of total independence, the average is the same, right?
[75:16] Speaker 1: So if we would take if we would take a research hypothesis, Mr. Navik, who said that ladies tend to get more accent rates, this would actually support the hypothesis because ladies has higher, like, average, but not so much, right?
[75:33] Speaker 1: So this suggests that if there is some relationship, it's very weak, right? Because there is some difference, but it's very small, right?
[75:41] Speaker 1: And the other case, the other extreme is this one. If the SSE is 0, that would be the case of the strongest possible dependence, no variation within the groups.
[75:57] Speaker 1: So strongest dependence at the other extreme, strongest dependence. Once it happens, if we would have for males, if you would have accent rates 2, 2, 2, and for females, you would have accent rates 5, 5, 5, right?
[76:15] Speaker 1: So if there is, like, no variation inside the groups, if all the ladies were getting the same number of accent rates and all gentlemen were getting the same number of accent rates, that would be total. This would mean that the gender would be the only factor determining the number of accent rates, right?
[76:31] Speaker 1: No matter what you would do else, depending on the gender, the number of accent rates would be decided, right? So of course, it's not the case, but you understand.
[76:44] Speaker 1: Okay.
[76:47] Speaker 1: All right. That's it.
[76:48] Speaker 1: So these are the results. Hey, hey.
[76:51] Speaker 1: Hey. Two minutes.
[76:54] Speaker 1: These are the results. So in our example, we have very low treatment sum of squares, very high error sum of squares.
[77:01] Speaker 1: So this suggests that the relationship. Hey.
[77:05] Speaker 1: Hey. Calm down.
[77:07] Speaker 1: Two minutes. So this suggests this suggests that the relationship is very weak, or we can even say that it's independent because almost independent because treatment sum of squares is very, very close to 0, very small, right?
[77:21] Speaker 1: So this suggests that there is if there is some relationship, it's very, very weak. Here we have some attempts to visualize the results using a report.
[77:32] Speaker 1: And I would like everyone, according to what we had discussed at the beginning of the lecture, to think what's, what's, like, wrong with this report. There are some huge weakness.
[77:40] Speaker 1: And my question is, which weakness is that?
[77:47] Speaker 1: There's no title. Okay.
[77:48] Speaker 1: That's bad. But this seems to be much, but not, not, not from my point.
[77:53] Speaker 2: The frequency.
[77:54] Speaker 1: Frequency is missing. What we can see, we can see what are possible values of accent rates for females and males by the orange dots, but we don't know how many times, right? So we cannot distinguish if number 10 is there once, number 2 is there 10 times, or whatever, right?
[78:11] Speaker 1: So the frequencies are missing. This is an example of very bad form, right?
[78:16] Speaker 1: And so I want to describe that. What's much better is this, of course, to show the distributions of the of the values of numbers of accent rates for males and females.
[78:26] Speaker 1: And we can see that the dots are actually kind of similar, right? So if there is some relationship.
[78:34] Speaker 1: And final thing, everyone, important thing, how to numerically express the strength of the relationship. It's a similar principle as with contingency coefficient.
[78:44] Speaker 1: Very simple formula, R squared. It's called coefficient of determination.
[78:49] Speaker 1: It's calculated using the treatment sum of squares and total sum of squares. According to what we have already discussed, if the treatment sum of squares is 0, and we have it in numerator, the R squared would also be 0, showing total independence, right?
[79:06] Speaker 1: So in the case of total independence, coefficient of determination is 0, while the closer it's to 1, the stronger the dependence. In our case, it's almost 0.
[79:17] Speaker 1: So the conclusion can be that precise conclusion is this one, Mr. and young man. For the test, this is the best interpretation.
[79:24] Speaker 1: You can say that only 0.76% of numbers of numbers of accent rates variation is explained by gender. And, like, subjective interpretation is that the relationship is super weak, or we can say there's no independence.
[79:38] Speaker 1: So nothing complicated here anymore. Thank you very much.
[79:42] Speaker 1: Is there any question?
