# Stats 2 seminar

Date: 2026-10-02  
Folder: Stats

## Summary

Statistics seminar on frequency distribution tables (gender, age, weight) built by hand and in Excel with charts, then quantiles via the formula method and via cumulative relative frequencies.

### Frequency Table for Qualitative Data (Gender)
- Table lists levels j = 1..K with frequencies NJ and relative frequencies PJ = NJ / N
    - N1 = 8 males, N2 = 7 females, total 15; P1 = 0.53, P2 = 0.47, sum must be 1
- Excel: COUNTIF via Insert Function (Statistical), range is column C including the label, criteria by cell reference
- Totals via SUM, quickly from HOME menu summation symbol in the Editing subsection
- Pie chart: select gender and frequency, INSERT, Chart section, Insert Pie chart; Chart Design adds data callouts

### Frequency Table for Quantitative Data (Age)
- Values 19, 20, 21 with frequencies 6, 5, 4 and relative frequencies 0.4, 0.33, 0.27
- Extra columns: cumulative frequencies (6, 11, 15) and cumulative relative frequencies (0.4, 0.73, 1), no total row
- Visualized with a polygon: values on x-axis, NJ or PJ on y-axis, points connected
- Excel FREQUENCY function: select output area, include labels, confirm with Control + Shift + Enter

### Interval Table for Weight (Continuous)
- Many distinct values, so data is grouped into intervals; range R = 84 - 50 = 34 kilograms
- Pick a number above the range that divides evenly: 35 = 5 x 7 or 36 = 4 x 9; class chose 4 intervals of width 9
    - Choice is subjective; one student preferred 5 intervals
- Intervals 50-58, 59-67, 68-76, 77-85; frequencies 5, 3, 3, 4, relative 0.33, 0.2, 0.2, 0.27
    - FREQUENCY in Excel needs upper class limits prepared as bins
- Histogram via Insert, Statistic Chart; right-click x-axis, Format Axis, set number of bins to 4

### Quantiles
- Quantiles use ascending data x(i), distinct from raw data xi; example used grades variable, n = 15
- Formula: h = (n - 1) x P + 1, then interpolate between floor(h) and ceiling(h) positions
    - Median: h = 8, value 3; 30% quantile: h = 5.2, value 2
    - Same method as Excel PERCENTILE.INC; result can be non-integer, e.g. 2.2
- Alternative: first row where cumulative relative frequency exceeds P; age median and 70% quantile are 20, 95% is 21
- Both methods converge for large n but may differ on small datasets, as in the homework exercise

### Next Steps
- (Everyone) Complete seminar 2 exercises, including quantiles by both methods, before next week's seminar

## My notes

making excel table for statistical evaluation
faculty - is qualitative data
weight is **continuous** quantitative data

## Transcript

[00:00] Speaker 1: The informal says: "In the J goes from 1 till K," and it's an index for the row of the table. Right, in which row of the table you are to elevate is, for example, it's 1 for males, 2 for women, or K for females. And then we will have just, for quality control, just two more columns with frequencies.
[00:25] Speaker 1: In formal says we have the OTJ, this as NJ, and with relative frequencies, relative frequencies, which the notation in the formal space is PJ.
[00:43] Speaker 1: So, again, I'm super precise in this first table with the notation. So for frequency of males, we can use N1.
[00:51] Speaker 1: And as we have the first small table, we can simply check our Excel. So we have here 8 males, so N1 equals 8.
[01:04] Speaker 1: N2 would be frequency of females. In our dataset, we have 7 females there.
[01:11] Speaker 1: Most important to know here is that the total of the frequency must always give you the dataset size, and in our case it's 15. And the relative frequencies can be calculated easily, simply by taking NJ over N, NJ over N.
[01:35] Speaker 1: So in our case, P1 would be 8 over 15, resulting in 0.53. P2, relative frequency for females, would be 7 over 15, resulting in 0.47.
[01:54] Speaker 1: And the total of the relative frequencies must always be precisely 1, showing 100%. So, uh, nothing really complicated there.
[02:07] Speaker 1: This is the first tool for, the first tool for industry statistics.
[02:16] Speaker 1: And of course, in our case, when we have a very small dataset, that's kind of, you can see things there which can be seen directly in the Excel. But imagine you would have a dataset size much bigger, say 10,000, right?
[02:31] Speaker 1: And if you would have already the information about such huge dataset in the form of the frequency distribution table, you could quickly see what are the numbers and proportions of males and females, right? So the information, information from the table, even though it's a very simple table, would be, of course, very beneficial and interesting.
[02:50] Speaker 1: So this is the point, as I mentioned on the skills test, we try to summarize information in our dataset with a few numbers, right, so that we get some potentially interesting info about our dataset. So that's it.
[03:05] Speaker 1: Of course, in reality, you would never find these frequencies manually like you did that. You would do it using Excel, for example.
[03:14] Speaker 1: So let's learn how to do that in Excel. We'll prepare the levels: males, females, and we'll find the frequencies.
[03:33] Speaker 1: The last two will be for totals. And as I understand that, among students of this course, there are typically quite huge differences in terms of proficiency with Excel.
[03:53] Speaker 1: When we do something here for the first time, I'm always trying to go super slow, just for the first time, right? I assume everyone is kind of capable of doing what we did a week ago always, in the future.
[04:06] Speaker 1: But this time, it will be the first time where we will actually use some function for some calculation. So we are going to find, so I will go very slowly, right?
[04:16] Speaker 1: We are going to find frequency of males in Excel. Those who just are not aware of that yet, please be aware that at the last page in your formal space, there is, at the last page of the formal space, there's a list of potentially useful Excel functions.
[04:36] Speaker 1: And right now, to find frequency of males, we will use a first function in the list, and it's called COUNTIF function, right? So we are going to use this COUNTIF function to find the frequency of males.
[04:50] Speaker 1: And again, as this is the very first time, we are going to be using some function in Excel here. I will go very slowly, right?
[04:56] Speaker 1: Just for the first time. So, to use a function in Excel, first thing you need to know, you need to place point your pointer, point your pointer, sorry, to place your pointer into the cell where you want the result, the outcome of the function to appear.
[05:13] Speaker 1: So we find want the frequency of males to appear in this J3 cell. I need to have this cell active.
[05:21] Speaker 1: And then the easiest and most straightforward way how to use or insert functions in Excel is by using this small FX button, which is called INSERT FUNCTION. So I have cell J3 active.
[05:36] Speaker 1: Then I go for the INSERT FUNCTION button.
[05:42] Speaker 1: And here we will see a list of functions in Excel. If you are unsure which category to use, you can always go with ALL FUNCTIONS, the list of ALL FUNCTIONS.
[05:57] Speaker 1: But mostly, as we are in first-year class, we will use some statistical function, right? So COUNTIF function is to be found in category STATISTICAL.
[06:07] Speaker 1: And now we just need to find the function you are looking for in the list. So once more, we are looking for this COUNTIF function.
[06:17] Speaker 1: And you just need to find it in the list here, right?
[06:30] Speaker 1: Okay, and now, each function in Excel has several so-called arguments. So now, if you proceeded the way I did, you have the active, so-called FUNCTION ARGUMENTS window.
[06:46] Speaker 1: And these arguments are specific, like values commonly, or areas of data, or whatever, by, which you need to specify so that the function works in the way how you want it exactly to work. It seems complicated, but in the case of COUNTIF function, it's not complicated at all.
[07:06] Speaker 1: As you can see, we have here two fields, meaning that this function has two arguments. And the first argument is just range of data.
[07:14] Speaker 1: So if we are about to search for number of males, the range of data will be column C with the gender variable. So that's just what goes into the first argument, into the range argument.
[07:30] Speaker 1: The column C with the gender levels. And I would like to stress here that if I don't say otherwise, it means the man always, always, under all circumstances, selects the area always with the label, with the heading, gender, always, if I don't say otherwise, right?
[07:49] Speaker 1: So range argument is the column C with the gender. And the criteria, the other argument, criteria, is simply what we are, what we want to look for in the data.
[08:03] Speaker 1: You could type M here from keyboard, and it would, it would also work. But what's much better, and that's why we how we will do it, we can use reference.
[08:13] Speaker 1: So for the criteria argument, you can simply click ICEVYCELL where the M is to be found. And if you are done, you can either press Enter or click OK and the frequency entries.
[08:29] Speaker 1: Right, so I went super slow so that even people who have never seen functions in Excel were able to do that. And now we will just repeat these steps, like, all the time, right?
[08:44] Speaker 1: So please, in the same way, find frequency of females. So we'll use COUNTIF function to find frequency of females.
[08:53] Speaker 1: So again, INSERT FUNCTION, COUNTIF, select the data.
[09:01] Speaker 1: And the second criteria would be F, you'll try IFORCELL, right? Please use COUNTIF function to find also the frequency of males.
[09:21] Speaker 1: And if you manage to do this, or if you manage not, I would like to use this opportunity to show you one more important thing in Excel. We want to calculate the total, which will be 8 plus 7, which is 16, of course.
[09:35] Speaker 1: But to do it, you know, using a function in Excel, we would use the SUM function to calculate the total. And as the SUM function is the most, most important one, the function in Excel, there is a simplified way how you can get it.
[09:52] Speaker 1: So those who want to really try, you need to place the pointer below the numbers you want to sum up. And then we go for menu HOME, HOME menu.
[10:04] Speaker 1: And then on the right side, in the editing subsection, there is this SUM function symbol to be found. And by clicking that, the SUM function is, is, is actually put there, even with selected range of data.
[10:20] Speaker 1: So you can just click Enter and it's done.
[10:27] Speaker 1: All right, so it's in menu HOME, and there is a SUMMATION symbol, which actually improves the approach, the SUM function. And it's a little super simple and fast way.
[10:44] Speaker 1: In menu HOME, you see the SUMMATION symbol and the total. Okay, so we have the frequency distribution table for gender.
[10:53] Speaker 1: And as you should know, format you want, the way how to visually show what's in the table, meaning to construct a graph, there is the best one, or the most popular one, is pie chart or quarterly pie chart. So how to construct a pie chart in Excel is very simple.
[11:11] Speaker 1: But again, this is the first time we're constructing a plot. I will go super slow.
[11:16] Speaker 1: So those who want to really try to construct a pie chart in the Excel, please select the area.
[11:27] Speaker 1: Whenever constructing a plot in Excel, the first step is always to select the area of data you want to visualize. For the pie chart, we will now select these two columns, gender and frequency.
[11:38] Speaker 1: So those of you who want to give it a try, do it exactly this way. And then all the plots in Excel are to be found in menu INSERT, INSERT.
[11:49] Speaker 1: And somehow in the middle, there is this chart, chart subsection. The pie chart specifically is to be found in the subsection, INSERT PI or diagram chart.
[12:03] Speaker 1: We will go for the very first, simple spot, simple chart, the pie chart in the list. So you can click it and it's done.
[12:11] Speaker 1: I will show this one more time.
[12:18] Speaker 1: So I've selected the area, INSERT, chart section, INSERT diagram chart, and we go for the first one, INSERT PI chart.
[12:34] Speaker 1: Okay, so, uh, I'm huge fan of plots, right? Because it's a very, like, efficient way of showing properties of the dataset.
[12:45] Speaker 1: So even if you were to show this to someone with no knowledge about numbers, everyone should be able to kind of see that because the area is bigger, then the number of males in our dataset is slightly bigger than our females, right? So the plots are the most popular way in statistics to present to the data to someone who is not so proficient with numbers.
[13:06] Speaker 1: So the plot line looks like that. And I would like to show one more thing using this small pie chart.
[13:16] Speaker 1: And it's as follows. As a default, as you can see, the list of menus in Excel ends with HELP.
[13:25] Speaker 1: But if you will click the plot, making the plot active, two more menus would appear: chart design and format. So this would allow you to, you know, anyhow improve the looks, let's say, looks of your plot.
[13:49] Speaker 1: Of course, these days, AI might do that for you, but I totally recommend if you were to learn something, every AI, try it on your own at first. So let's just, as a motivational thing, I'll click it.
[14:04] Speaker 1: Specifically for pie chart, I like one thing. So let's go for chart design.
[14:11] Speaker 1: And on the left side, in ADD CHART ELEMENTS, you can try data labels and data callout. It would put the, put the, like, insert the information, the small bubbles information with specific percentages.
[14:31] Speaker 1: So insert ADD CHART ELEMENTS, data labels, data callout. But if you feel, like, you know, comfortable with Excel, you can easily, you know, experiment with this.
[14:42] Speaker 1: And you can improve more as you wish. Okay, so that's it, pie chart and some brief info in how plots in Excel are constructed.
[14:54] Speaker 1: And we can proceed to constructing frequency distribution table for known data variables. That's slightly more, but slightly, slightly more complicated than for known data variables.
[15:10] Speaker 1: And we'll start with the variable of age.
[15:19] Speaker 1: In the case of known data variables, there is no subjectivity anymore. For the table to make sense, you need to draw in the first column the values of your known data variable, starting with the lowest one, which in our case is 19.
[15:38] Speaker 1: The next one is 20 and 21.
[15:47] Speaker 1: The first column columns of the frequency distribution table in the known data variables, quantity variables are the same as for the positive ones, so frequencies and relative frequencies.
[16:06] Speaker 1: So please just check if there's no mistake on the whiteboard. Number 19 is there, I think, six times.
[16:16] Speaker 1: Number 20 is there, one, two, three, one, two, three, four, five, I hope, five times. And 21, one, two, three, four, yeah.
[16:30] Speaker 1: So hopefully it's correct, because the total for Google Maps view dataset size N, which is 15, hopefully it's correct. And relative frequencies, this is the calculated 6 over 15 is 0.4, 5 over 15 is 0.33, and 4 over 15 is 0.27.
[16:55] Speaker 1: So this is the same as for known data variables. But in the case of known data variables, their table may have two more columns with the cumulative frequencies and cumulative relative frequencies.
[17:11] Speaker 1: So let's do that. So we will also calculate cumulative frequencies and relative frequencies.
[17:27] Speaker 1: And how's it done? Well, you add up, you cumulate the values in the previous two columns, starting at the top of the table and going to the bottom.
[17:37] Speaker 1: So basically, in the first row of the table, you just copy what's in the previous, you call previous two columns. And then you add up, you cumulate the individual values row by row.
[17:50] Speaker 1: So for the age of 20, the frequency would be 6 plus 5, which is 11. And for the last row, it would be 11 plus 4, which is 15, which must be equal to the dataset size N.
[18:09] Speaker 1: So the summation total row is not needed for the cumulative frequencies. And the same principle is there for cumulative relative frequencies.
[18:18] Speaker 1: 0.4 plus 0.33 is 0.73, 0.73 plus 0.27 is 1. The summation row is not needed.
[18:37] Speaker 1: Okay, so that's how frequency distribution table for known data variable looks like. To visualize it, to show visually what's in the table, we can use so-called polygon.
[18:52] Speaker 1: The word is nasty, but the chart itself is very simple. So polygon, for our case, would look like as follows.
[19:02] Speaker 1: On the x-axis, we would write the values of the variable in our dataset. So just, we just have three values for age: 19, 20, and 21.
[19:21] Speaker 1: And on the y-axis, we can define the frequencies or relative frequencies. For more reasons, if you can decide relative frequencies are better, so DJ, relative frequencies.
[19:33] Speaker 1: And we have these three values. Those of you who are trying to sketch it, as I do that on the whiteboard, try to be proportional.
[19:43] Speaker 1: So 0.27, 0.33, and 0.4.
[19:56] Speaker 1: Ah, roughly it's okay. And the plot itself is just a dot or point chart.
[20:02] Speaker 1: So we will draw the points according to the corresponding combinations. So age 19 in our dataset is with frequency 0.4.
[20:13] Speaker 1: Age 20 is there with frequency 0.33. And 21 is there with frequency 0.27.
[20:23] Speaker 1: And then you just connect the points. So in our case, the polygon is kind of boring.
[20:31] Speaker 1: But that's exactly how the distribution of the values of age in our dataset looks like. So if you would present this way and understand it a bit, you can quickly see that most of the accurate value is 19, right?
[20:45] Speaker 1: And you can see the frequency.
[20:46] Speaker 2: What's on the y-axis again?
[20:48] Speaker 1: You can put there either frequencies or relative frequencies. Either NJ or PJ. As with the relative frequencies in table, we have them 0.4, 0.33, 0.27.
[20:58] Speaker 1: Right, so we show on the plot how often each value appears in the dataset.
[21:06] Speaker 1: Okay, so that's the polygon. We will not do this chart in Excel, but those interested, it will be sketch a plot, sketch a with straight lines, markers.
[21:28] Speaker 1: Those who would like to try it in the Excel on their own, I would recommend this one. But we'll do it here.
[21:34] Speaker 1: However, we will try to find the frequencies in Excel. That's what we will do.
[21:40] Speaker 1: So let's prepare the table itself, age.
[21:46] Speaker 1: The values is 19, 20, 21, and total.
[21:56] Speaker 1: And we'll try to find the frequencies.
[22:23] Speaker 1: Okay, so we will try to find the frequencies all at once. To do that, we will employ the function.
[22:33] Speaker 1: That's not kind of, yeah, that is not surprising at all, frequency. So to find frequencies, we'll use function frequency.
[22:45] Speaker 1: It's a slightly more complicated function than the counting function. In that sense, that this time, we would like to appear all the frequencies at once.
[22:54] Speaker 1: So the outcome of this frequency function will not be in one cell, but in area of cells. What it means, that means that this is a slightly more advanced function in Excel.
[23:06] Speaker 1: To confirm that, we have to specify its argument. The confirmation of the function is not to be done by pressing OK button or by pressing Enter.
[23:16] Speaker 1: But you need to do it with, let's say, three clicks. You need to press Control on the left side of your keyboard.
[23:22] Speaker 1: Then holding Control, you also need to press Shift. And only after holding these two, you can click Enter.
[23:28] Speaker 1: So that's what we will try after a while. But first, let's fill in the function and the arguments.
[23:35] Speaker 1: So those who want to give it a try, please be focused. First step is that you need to select the area where you want the outcome, the frequency to appear.
[23:44] Speaker 1: So that is this area of three cells. And then we go as we did already for insert function button.
[23:53] Speaker 1: And in the list of statistical functions, we would find the function frequency.
[24:06] Speaker 1: The frequency function, as you can see, has two arguments. They are not surprising.
[24:11] Speaker 1: The first argument is the area of data. So for the first field, for the first argument, you just need to select the area of values with age.
[24:19] Speaker 1: Again, if I don't say otherwise, always, always select the area of values in the first row, right? This time it's the word age.
[24:27] Speaker 1: So that's the first argument. And the other argument are the values we want to look for in the data, which we have prepared here.
[24:42] Speaker 1: Even for the second argument, please select the area of the values you are looking for, including the label of age. And if you have it this way, you need to look on the whiteboard and press Control and Shift on the very left side of the keyboard and then Enter.
[26:08] Speaker 1: All right, I can help one of you.
[26:16] Speaker 1: So the data array is the area of values of age, right? Including the label.
[26:26] Speaker 1: This array is the area of the values you are looking for, again, including the label. And then you go press Control and Shift and hold them and Enter.
[26:34] Speaker 1: Here we go.
[26:34] Speaker 3: This is Ms. Pinkova.
[26:35] Speaker 1: This is Ms. Pinkova?
[26:38] Speaker 3: Yes.
[26:38] Speaker 1: All right. Okay, so we will do it one more time.
[26:45] Speaker 1: Ladies and gentlemen, if you have difficulties with making this focus, if you have difficulties doing something in Excel, at seminar it's no big deal, right? You can just make notes and try it after seminar.
[26:57] Speaker 1: What's more important, you understand what we are doing and why we are doing that, right? So if you miss something in Excel specifically, it's no such a big deal, right?
[27:04] Speaker 1: It's more important to understand what those things are good for. And you can try it in Excel after seminar.
[27:11] Speaker 1: Those who managed to do this, let's calculate also with total. You take the subfunction.
[27:17] Speaker 1: And that's it.
[27:26] Speaker 1: Okay, and the last thing here with these frequency distribution tables is a table for variable weight. Do you manage to get a question or just switching?
[27:37] Speaker 1: Just switching or a question? All right, so for variable weight, variable weight is different from the variable age in that sense that this one has many, many, many different values.
[27:53] Speaker 1: So if we were to construct the frequency distribution table for the weight variable in the same way we did for the age, it would be much faster. We would end up with a huge table with many, many, many rows, because there are many values of weight.
[28:07] Speaker 1: And you have frequencies like 1 or 2, and it becomes the huge one, right? So if you work with the poly variable such that it has a lot of different values, the solution is not to write specific values into the table, but assorting.
[28:26] Speaker 1: The solution is that we will assort the values in several intervals. And we will draw the intervals into the table, right?
[28:35] Speaker 1: Not the specific values. But the question, of course, is how specifically those intervals should look like.
[28:42] Speaker 1: There are many, many possible approaches. In the end, the decision is kind of subjective.
[28:48] Speaker 1: So from those many approaches, I personally like the one which uses the range for R. Those who heard the lecture, it was mentioned there.
[28:59] Speaker 1: It's just a difference between the highest and the lowest value in the dataset. So highest value in our dataset is 84, if I'm not mistaken.
[29:18] Speaker 1: 84, 84, 84. Did you mistake Shakurala here?
[29:25] Speaker 1: 84? So that's mostly Shakurala, right?
[29:30] Speaker 1: And the minimum value is the minimum value is 50. I hope everyone understands why I don't guess the minimum here.
[29:41] Speaker 1: It might be 50, right? That's just physical guess.
[29:44] Speaker 1: All right, so no matter what, the range is 34 kilograms. 34 kilograms. And now we would use this information for the decision of the number and width of the intervals into which we will assort the values of the weight.
[30:02] Speaker 1: And the process is pretty simple. We just need to find we just have to find some higher value than the range, which is nicely integrally divisible.
[30:13] Speaker 1: So higher number than 34 is 35. 35 can be derived integrally, so it can be expressed as 5 times 7. That's suggesting that we construct 5 intervals of width 7.
[30:35] Speaker 1: It's nicely reasonable, right? In our case, the dataset size is 15.
[30:42] Speaker 1: So let's say that just personally, subjectively, I would prefer to have rather 4 intervals.
[30:49] Speaker 2: Yep.
[30:53] Speaker 2: What if you do it? Sorry, sorry?
[30:53] Speaker 2: What if you do the 35 to 25? What is that?
[30:58] Speaker 1: You know that 35 is 5 times 7.
[31:00] Speaker 2: Yeah, yeah, but what do you mean by that? What is the range?
[31:03] Speaker 1: Because we are so we have some values of weight. We want to assort them in some intervals. And this is just one approach how you can decide how many intervals and how wide intervals those would be.
[31:18] Speaker 1: So this would suggest you have 5 intervals of width 7. And I'm just saying, you may say, I'm just saying that it's kind of personal, subjective decision, right?
[31:30] Speaker 1: So I would prefer if we have 15 values, and I would just say, we have rather 4 intervals, right? It seems reasonable for me.
[31:36] Speaker 1: And I can see Mr. Gawande.
[31:39] Speaker 1: Were there are you Mr. Gawande?
[31:40] Speaker 3: Yeah.
[31:42] Speaker 1: Mr. Gawande disagrees, right? I personally prefer 4.
[31:46] Speaker 1: He would prefer 5. And there is no way to convince him, right?
[31:50] Speaker 1: So it's subjective, right? It's kind of subjective decision.
[31:54] Speaker 1: The point is that you want to have some reasonable, interesting result, right? So Mr.
[31:58] Speaker 1: Gawande, I take you prefer 5, but please, please do it with 4 this time, right? Thank you very much.
[32:04] Speaker 1: So if you would prefer 4, you would need to carry on. So higher number than 35 is 36.
[32:11] Speaker 1: This can likely be expressed as 4 times 9. So we would end up with 4 intervals of width 9.
[32:25] Speaker 1: And that's it.
[32:29] Speaker 1: So let's say we find this subjectively reasonable. And then it's pretty easy.
[32:36] Speaker 1: So the first interval starts with the minimum, which is 50. And if we want the interval to be wide, so we have width of 9 values, what would be the upper boundary, upper class limit this time?
[32:48] Speaker 1: If we want the interval to cover 9 values, what would be the upper boundary, the upper class limit?
[32:53] Speaker 3: 59.
[32:54] Speaker 1: No.
[32:56] Speaker 2: 60?
[32:57] Speaker 1: No.
[33:00] Speaker 1: Can you show fingers? Yes.
[33:03] Speaker 3: 58.
[33:04] Speaker 1: Yes, that's it. That's it. Thank you very much, Mr.
[33:07] Speaker 1: Pinkova. 58, right? Those who don't believe, you can use your fingers.
[33:11] Speaker 1: That is really covers 9 values, right? Okay, that's not so important.
[33:18] Speaker 1: The next interval would be 59 to 67. The next one would be 68 to 75.
[33:28] Speaker 1: And the last one would be from 76 to 80. Sorry, 76 to 83.
[33:38] Speaker 1: No, no, sorry. I'm sorry.
[33:39] Speaker 1: We don't do it 9. My wrong.
[33:42] Speaker 2: 76, right?
[33:43] Speaker 1: It should be it should be 76, yes. That's the problem. 77 and 85. No, it's correct.
[33:50] Speaker 1: 76. The last one is from 77 to 85.
[33:54] Speaker 1: No, it's correct. So what we managed to do, we have covered the whole range, right?
[33:59] Speaker 1: So we.
[34:00] Speaker 2: If our width is 9, then why do we have range 50 to 58, but not 59?
[34:07] Speaker 1: Because.
[34:08] Speaker 2: Use your fingers. 50 and width 58, and you will find out that it's 9.
[34:18] Speaker 1: All right, the last row will be for totals. And here we can calculate the frequencies again. We want the frequencies and the cumulative frequencies.
[34:35] Speaker 1: And we want the frequencies again. Because this might be even complicated, finding the frequencies, even with a form of smaller set, we will solve it rather using the frequency function in Excel.
[34:49] Speaker 1: So the opportunity to try for the second time. So let's prepare.
[34:59] Speaker 1: Let's prepare for that in Excel. The only new thing here is that for the purposes of the frequency function in Excel, you need to prepare there the upper boundaries.
[35:12] Speaker 1: The upper class limits. By that, by specifying those, the frequency function works.
[35:22] Speaker 1: 58, 57, 6, 85.
[35:50] Speaker 2: This is repetition, right?
[35:51] Speaker 1: Yes.
[35:52] Speaker 2: And it's a test.
[35:54] Speaker 1: No?
[35:56] Speaker 2: I'm not.
[35:56] Speaker 1: You're not from the seminar. Ah, okay. I will learn that, but it wasn't good.
[36:01] Speaker 1: Okay, so that's how frequency function in Excel works, right?
[36:12] Speaker 1: So it counts the intervals from the numbers which are there. So that's why we need to.
[36:20] Speaker 1: That's how the frequency function works, right? So we just need to specify the upper boundary there.
[36:25] Speaker 1: And those who want to give it a try, you can carry on. You don't need to wait for me.
[36:29] Speaker 1: This is the area. The area where we'll be all complete here.
[36:33] Speaker 1: Then we go for insert function. Frequency.
[36:42] Speaker 1: The first argument are the values of weight, logically. Again, including the labels.
[36:49] Speaker 1: And the second argument are the prepared upper boundaries. Again, including the label of weight.
[36:58] Speaker 1: If you are ready, you can just press Control, Shift, and Enter.
[37:02] Speaker 3: Он так не захотел, поэтому взяли 36. 36 делится 4, 9. 9 это сколько чисел мы помещаем? 4 штуки, 4.
[37:14] Speaker 1: So the frequencies are 5, 3, 4. This is fine. So the sum equals 15, dataset size.
[37:26] Speaker 1: And the relative frequencies are 0.33, 0.2, 0.2, and 0.27. So don't put exactly 1.
[37:47] Speaker 1: And cumulative relative frequency is 5, plus 3 is 8, plus 3 is 11, plus 4 is 15, is the dataset size. And relative frequency is 0.33, plus 0.2 is 0.53, 0.73, and 1.
[38:12] Speaker 1: Okay.
[38:23] Speaker 1: The visual way of showing what's in this interval frequency distribution table, the graph to show this, the chart of this, is called histogram.
[38:36] Speaker 1: That's maybe the most important physical graph in intervals. We say that maybe, maybe, after you successfully passing the course, you just would not do any statistics anymore.
[38:51] Speaker 1: But no matter what job you will be doing, it's absolutely, totally sure that someone will come to you with some charts, right? Someone will show some works.
[39:01] Speaker 1: It's important that you are not too damn near that you are able to actually understand it at least a bit, right? Okay, so histogram, similar principle as with polygon.
[39:12] Speaker 1: So on the x-axis, we will not put the specific values of weight, but our four intervals.
[39:23] Speaker 1: So the first interval is from 15 to 58.
[39:29] Speaker 1: The interval is 68, 76. We have these four intervals.
[39:36] Speaker 1: And on the x-axis, we can either the frequencies or relative frequencies again. So we'll do it with relative frequencies.
[39:45] Speaker 1: It's better if you were to compare your distribution to something in different datasets, for example. So relative frequencies, and we have real time only there.
[39:58] Speaker 1: So let's again try to be proportional here. 0.2, 0.27, and 0.33.
[40:13] Speaker 1: So perfect. Try your best.
[40:17] Speaker 1: The proportions kind of making sense. And the histogram is a bar code.
[40:22] Speaker 1: So now we'll just draw there bars for each one bar for each interval with height corresponding to the relative frequency we see in the table. So for the first interval, the bar would reach 0.33.
[40:37] Speaker 1: For the next one, it's 0.2. For the third one, 0.2 as well.
[40:45] Speaker 1: And for the interval, it's 0.27.
[41:03] Speaker 1: It's more important that you focus on the deeper issues than to do something like cell, as I said.
[41:13] Speaker 1: But here we go. Insert frequency.
[41:16] Speaker 1: I'm not sure if it's in the fan, but it's you can try it after the generally after seminar with Excel, right? It's more important to understand the actual point.
[41:25] Speaker 1: So it's array weight.
[41:37] Speaker 1: Okay, so.
[41:38] Speaker 3: Continuation.
[41:48] Speaker 1: All right. Not yet. Is that part of the question?
[41:53] Speaker 1: We will do it. We will do it.
[41:54] Speaker 1: Sorry. Just a sec.
[41:58] Speaker 1: I have now lost somewhere somehow in something slightly different way than I was.
[42:10] Speaker 1: I think maybe your weak link is not perfect, like in the case.
[42:20] Speaker 1: Press Control, Shift, Hold Down. Hold Down.
[42:23] Speaker 1: Control, Shift, Hold Down, and now click Enter.
[42:29] Speaker 1: All right. Is this the wrong part?
[42:32] Speaker 3: Yeah.
[42:33] Speaker 1: Okay, so yeah. So let's construct the let's construct the histogram in Excel. That's pretty simple.
[42:45] Speaker 1: You need to start with selecting the area of data, the histogram in Excel. In that respect, you just need to select the area of data that they follow with the weight.
[43:02] Speaker 1: And then we go for Insert. And in the Chart section, it's right in the middle.
[43:08] Speaker 1: Insert Statistic Chart. And the histogram is the first one in the list.
[43:16] Speaker 1: All right, so one more time. I selected the area of data with weight.
[43:20] Speaker 1: Then we go for Insert. And in Chart section, it's in the middle.
[43:25] Speaker 1: Insert Statistic Chart. The first one in the list is the histogram.
[43:31] Speaker 1: I actually don't know how this works on default, but on default, we can see that Excel decided that there should be just two intervals on the x-axis. But we can, of course, adjust that so that the chart would look preferably exactly the same as the one we have on the whiteboard.
[43:52] Speaker 1: And this is something very important we'll do very often at the seminars. We'll adjust the scale of the x-axis.
[43:59] Speaker 1: I would like everyone to note this down because we'll do it with other charts very often here. So to adjust the scale of the x-axis, you need to right-click on the labels of the x-axis.
[44:12] Speaker 1: And the tool we'll use is Format Axis. So we'll do this very often, right?
[44:19] Speaker 1: So please be sure to note this down. We will need to adjust the axis of plots in Excel quite often.
[44:24] Speaker 1: So by right-clicking the scale and the labels and selecting Format Axis, you can do that.
[44:33] Speaker 3: Can you show me that?
[44:35] Speaker 1: Here we can see that the number of the intervals here, the actual bins, is on default set as automatic. But you can also go for number of bins, specifying that manually. First, we write there 4, number of bins will be 4.
[44:52] Speaker 1: And by opening the window, the chart should adjust itself.
[45:24] Speaker 1: So the plot after that looks exactly as the one on the whiteboard. I guess you have to do it yourself, right?
[45:31] Speaker 3: Ты нажимаешь сюда, правая кнопка мышки. Смотри, нет, ты должна там, где иксы. Иди на иксы.
[45:40] Speaker 3: Вот.
[45:42] Speaker 1: You must have some value differently here.
[45:45] Speaker 3: А мышка не работает у тебя?
[45:49] Speaker 1: That's idle from your, like, seminar.
[45:50] Speaker 3: Ah, that's a different dataset file.
[45:52] Speaker 1: Or what? You sent the seminar user like generator with this and you just download it from there.
[45:59] Speaker 3: Не пиши 9.
[45:59] Speaker 1: And it's the seminar 12/12/25? Yes?
[46:03] Speaker 3: Are you sure?
[46:05] Speaker 1: Yeah, that's strange.
[46:06] Speaker 3: Why? I don't know.
[46:08] Speaker 1: Okay, but for most of you, the outcome is the same as the one on the whiteboard.
[46:15] Speaker 1: And you just need to right-click on the labels. Right-click on the labels, Format Axis, and now you can specify the number of bins you need to adjust.
[46:29] Speaker 1: It should the chart, the data start with this. Yeah, yeah.
[46:33] Speaker 1: And then you go Insert, Store.
[46:34] Speaker 3: Подожди, профессора пусть типа.
[46:37] Speaker 1: Again, if you find the work with Excel complicated, try to make notes, then try it in piece after seminar. What's more important is to focus on the factual point, right? All right.
[46:51] Speaker 1: So that's it for the frequency distribution table.
[46:57] Speaker 1: So are there any questions about frequency distribution tables?
[47:06] Speaker 1: Any students for us? You are not here to answer us?
[47:10] Speaker 3: No.
[47:11] Speaker 1: That's very good answer. Perfect.
[47:15] Speaker 3: Perfect.
[47:15] Speaker 1: Perfect. Okay, sorry, sorry. All right.
[47:21] Speaker 1: That's always a problem. We don't answer it and then just more.
[47:25] Speaker 1: Sorry for that. Okay, so we've done the questions.
[47:30] Speaker 1: Regarding the frequency distribution tables, we have our second point important on the program. And those who are making notes can write with very huge letters one task.
[47:44] Speaker 1: So these formulas correspond to so-called one task. Extremely important issue in the statistics.
[48:00] Speaker 1: One task.
[48:06] Speaker 1: We have quite a lot of time, so I will try to really be, again, very explainatory. We go really slow and try to explain you everything here, including the notation.
[48:22] Speaker 1: We'll practice this with our data, specifically with the excellent grades variable. So let's not be lazy and let's prepare a table with three columns in it.
[48:44] Speaker 1: The first one will just show index i, because in the formulas for one task, there is this i index. Our dataset size is 15, so index i will go from 1 till 15.
[49:30] Speaker 1: And the dataset as we have it, the next style is so-called raw dataset. So we have a sequence of 15 grades that must be generated in the order as simply those people who are here were asked about the sequence and grades.
[49:44] Speaker 1: So what we have put there is called raw dataset. Raw dataset.
[49:50] Speaker 1: And the typical symbol in our formulas associated with raw dataset is xi for the individual values. So in our case, we carry down that the first value in our dataset, x1 equals 2x1 grades. 2x1 grades. x2, the second value in the dataset, is also 2x1 grades. x3, as you can see, is 1x1 grade, and so on, right?
[50:25] Speaker 1: And so on. So let's copy this.
[50:51] Speaker 1: So the last value, 15th value in our dataset, x15 is 3x1 grades. And now, when working or studying or thinking about one task, you need to think about them in terms of ascending data.
[51:05] Speaker 1: So what we need to do right now is that we need to store the data in ascending order of magnitude. So ascending data is denoted in the formulas as x, and the subscript i is in brackets.
[51:26] Speaker 1: So that's how we in our formulas distinguish when we work with ascending data or with raw data. So we'll do that.
[51:37] Speaker 1: The first value, the lowest value in our dataset, x1, is 1x1 grade.
[51:47] Speaker 1: The second lowest value, x2, is 2x1 grade, and so on. So let's store our dataset.
[52:31] Speaker 1: Okay, so the ascending data looks like that.
[52:37] Speaker 1: I hope the notation is also already clear how we distinguish ascending data from raw data. It's with brackets.
[52:45] Speaker 1: The subscript is in brackets in the case of ascending data. And yeah, now we can discuss the contacts.
[52:53] Speaker 1: And they are always, like, you should always think about contacts in terms of ascending data. We will start with finding the most important one tile from all of them, which is so-called median.
[53:06] Speaker 1: Median is a 50% quantile, meaning that the capital P equals 0.5, right?
[53:20] Speaker 1: And it's such a value, 50% quantile is such a value that 50% of the values in the dataset are lower or equal, and the other half, 50% of values are higher or equal. So the median quantile is the most important quantile because it's the value which sits just in the middle, just in the middle of ascending data.
[53:45] Speaker 1: Okay, in our case, we have 15 values. 15 values. So which position is just in the middle?
[54:00] Speaker 3: 7 and 8.
[54:01] Speaker 1: Uh-uh. That's not what we're trying.
[54:04] Speaker 3: 7.5?
[54:05] Speaker 1: We have 15 values. So 8. 8 is just in the middle.
[54:14] Speaker 1: So the median is on the 8th position. That's 3x1 grades.
[54:19] Speaker 1: And indeed, that's such a value that 50% of values in the dataset are lower or equal, and the other half, 50%, are higher or equal. If you have odd numbers, if the result is odd numbers, then it's always somewhere in the middle.
[54:32] Speaker 1: Right? If you have 15 values, the value on the 8th position is the one in the middle.
[54:37] Speaker 3: Because I remember when we were doing the same task, the number is odd or between two numbers in the middle.
[54:43] Speaker 1: Mm-hmm. You certainly never did that. But thanks for trying this method, right?
[54:50] Speaker 1: You would have to pick two numbers if one was missing. If you had 14 values.
[54:55] Speaker 1: If you had 14 values, there will be none of them in the middle. In that case, it would be somewhere between the 7th and 8th positions, right?
[55:02] Speaker 1: But in this case, it's the 8th one. So in some situations, like this one, you can find the quantiles intuitively, right?
[55:11] Speaker 1: But of course, it's not like that all the time. But we start on purpose with this case, and we will use this one-by-one study case for the demonstration of the calculation with these formulas.
[55:24] Speaker 1: So those of you who have formulas by default, you can even write there that this shows, this stresses that you work, that these formulas work, these formulas work with ascending data. So it shows ascending data.
[55:37] Speaker 1: And the calculation starts with the calculation of this h. So in our case, for the median, p is 0.5.
[55:46] Speaker 1: We know the dataset size n is 15. And therefore, we can easily calculate the h.
[55:51] Speaker 1: I got the included formula over there, right? As n minus 1.
[55:55] Speaker 1: So that's 15 minus 1 times p plus 1, which is 8.
[56:05] Speaker 1: You can understand this h as the position of the quantile. H position, right?
[56:11] Speaker 1: So the median is, in our case, in the 8th position. And this h, that's exactly that, right?
[56:17] Speaker 1: You can understand this h as the position of the quantile you are looking for. And the, uh-huh?
[56:24] Speaker 3: I missed the train.
[56:25] Speaker 1: H.
[56:26] Speaker 3: H.
[56:27] Speaker 1: If you can't see something, always, always check. Always check the formulas, right? So that's why you should have formulas before you go find the value of all four.
[56:41] Speaker 1: Okay, so this h is position of the quantile you are looking for in the ascending data. And now we just will apply this formula to calculate actually the value of the quantile.
[56:53] Speaker 1: In this formula, what you have there, here is floor function of h, floor function of h, floor function of h, and one of the like-value terms is ceiling function of h. So floor function works as follows.
[57:06] Speaker 1: You would have floor function from 3.19, it would be 3. If you were to find ceiling function from 3.19, it would be 4, right?
[57:18] Speaker 1: So we just started taking the closest lower integer number or closest higher integer number. If you do it from integer number itself, like in our case, we can say that the floor function and the ceiling function are the same and they equal the number itself, right?
[57:42] Speaker 1: So we just plug everything we have into the formula. We are looking for 50% quantile, which is the median.
[57:53] Speaker 1: And we go, we start here, right? We start here.
[58:00] Speaker 1: So we will take the value which is called floor from h position. We know that's the 8th position.
[58:10] Speaker 1: Plus, in the first bracket, we have h, that's 8, minus floor function from h, which is also 8, times the value on the 8th position, so ceiling from h, minus the value on floor from h, which is 8th position.
[58:35] Speaker 1: So what we can see, we just need to find what value is on the 8th position. We know it's everyone, 3x1 grades, right?
[58:45] Speaker 1: So 3. Value on 8th position in ascending data is 3.
[58:51] Speaker 1: Plus this is 0. Times 3 minus 3.
[58:56] Speaker 1: So the result is 3x1 grades. As we were able to find intuitively all these cases.
[59:35] Speaker 1: All right. So this was the first example using a median which is, like, intuitively well understood in this case.
[59:46] Speaker 1: We'll try, since we have enough time, we'll try to find a number quantile.
[59:57] Speaker 1: So, so, yeah, it's okay.
[60:08] Speaker 1: Please ask them to take.
[60:09] Speaker 3: It's Malawi.
[60:10] Speaker 1: Malawi?
[60:11] Speaker 3: Malawi.
[60:12] Speaker 1: Malawi?
[60:12] Speaker 3: Malawi South.
[60:14] Speaker 1: Malawi South. Okay. If you have different haircut, we can go.
[60:19] Speaker 3: What? Sorry?
[60:19] Speaker 1: You have the same haircut, we can go.
[60:20] Speaker 3: No, it's shorter.
[60:24] Speaker 1: Oh, it is.
[60:24] Speaker 3: Yeah.
[60:24] Speaker 1: All right, sorry. You don't make it easy. Okay, so please give me a number between 0 and 1.
[60:29] Speaker 3: 0 and 5.
[60:30] Speaker 1: Number between 0 and 1.
[60:32] Speaker 3: 0.5.
[60:32] Speaker 1: The difference is 0.5.
[60:34] Speaker 3: 0.3.
[60:35] Speaker 1: 0.3. Okay. All right, so let's try finding a 30% quantile.
[60:43] Speaker 1: So if capital P equals 0.3, we'll be searching for 30% quantile.
[60:55] Speaker 1: And this will be such a value that, such a value that 30% of values in our dataset will be lower or equal, and the rest, meaning 70% of values in the dataset, will be higher or equal.
[61:14] Speaker 1: It would be very difficult, or even impossible, to actually find it, let's say, intuitively, right? You might start with that you just need to actually say which of which position is, like, 30%, right?
[61:30] Speaker 1: Maybe, maybe, like, somewhere between 6th and 5th position, but I'm not sure, right? So how to proceed in this case?
[61:38] Speaker 1: We will use the same formulas, and we will find not just the position of the quantile, but also its value. So for the formula, we will have capital P 0.3, and n equals 15.
[61:50] Speaker 1: Let's check this out.
[61:58] Speaker 1: We will first calculate the h again. This is my h, right?
[62:06] Speaker 1: According to the formula you can see over there on the screen. So n minus 1 is 15 minus 1 times capital P, that's 0.3 plus 1.
[62:18] Speaker 1: So multiply this n.
[62:23] Speaker 1: So 4.2.
[62:28] Speaker 1: Okay. So h equals 5.2.
[62:40] Speaker 1: The floor function from 5.2 is 5. The ceiling function from 5.2 is 6.
[62:54] Speaker 1: And now we can plug it into the formula and find the quantile. Well, by the way, this h, as I have said already, is the position of the quantile in ascending data.
[63:04] Speaker 1: So you may actually understand this as information that the 30% quantile you are looking for is somewhere between 5th and 6th position, right? And you can also perceive that it's kind of closer to the value on 5th position.
[63:21] Speaker 1: If you had 5.8, it is closer to the 6th position, right? So you can understand this, that the quantile you are looking for is somewhere between 5th and 6th position, and it should be kind of closer to the 5th one.
[63:36] Speaker 1: Okay, so let's see how it will turn out when we plug everything into the formula. So we are looking for the 30% quantile, and it's the value on the floor h position.
[63:49] Speaker 1: So it should be the value on the 5th position plus h, which is 5.2, minus floor from h, yeah, minus floor from h, which is 5, times value on the ceiling's position, 6, minus value on the floor's position, 5. So I understand that when seeing the formula first time, it seems complicated, but I hope this example helps, because here we actually can see that the quantile will be found somehow using the 6th and the 5th values only, right?
[64:27] Speaker 1: All right, so on the 5th position, we have 2 plus 0.2 times 2 minus 2, because this time, accidentally, accidentally, what happened is that our values on the 5th and 6th position are the same, right?
[64:49] Speaker 1: So we'll, of course, end up with the quantile being 2. But, you know, if the values around the 5th and 6th position were different, this would also allow you to calculate the quantile precisely.
[65:04] Speaker 1: But in our case, it's much, much faster and easier, because the difference is 0, so we would end up with 2x1 grades.
[65:15] Speaker 3: So what if it was different values?
[65:19] Speaker 1: If there were different values, you would, let's say that you would have on the 5th position, you would have 3, right? That will be like in the bracket. If in on 6th position you had 3, it would be 2 plus 0.2 times 6th position, that is 3 minus 2.
[65:35] Speaker 1: So you would end up with 2.2.
[65:42] Speaker 3: So it doesn't have to be a decimal.
[65:44] Speaker 1: It can. This is important. I think I said it in the lecture we can go also, that theoretically, and it's written in one of those examples, that because of this calculation, any quantile can actually be an imaginary number.
[66:02] Speaker 1: Even though no one has 2.2x1 grades, the quantile can be 2.2x1 grades. Okay, yeah, so this was just the example if you had 6, if you had 3, but you see it on 6th position.
[66:14] Speaker 1: My last comment regarding this is in 41, and it's regarding the last page in the formulas, please. Where you have this percentile in function mentioned, and it's good to understand that the formulas we have just used are exactly how this percentile in function in Excel works.
[66:38] Speaker 1: So percentile on in function in Excel, if you would use, to find the quantile, you would use exactly these formulas.
[66:48] Speaker 1: Anyone, like, being a monkey, might be able to use function in Excel, right?
[66:55] Speaker 1: But this is an elementary course, so the ambition is that we also understand the function, right? That we understand how the functions specifically, which we would use in Excel, how they work, what exactly they are doing, right?
[67:08] Speaker 1: That's why we struggled with all these formulas, and we are going a little deeper in the knowledge. All right.
[67:19] Speaker 1: So that was regarding the functions, regarding the formulas on page number 1. But when you'll be doing exercises after seminar 2, which all of you should do before coming here next week, you would encounter there an exercise where you will be supposed to find the quantiles in two different ways, using two different approaches.
[67:45] Speaker 1: This one, this is the one we've already covered, so we can call this like formula way or percentile in function in Excel way, but you should also be able to find any quantile using a different approach where the location or finding the quantile is based on cumulative relative frequency. This is very important knowledge.
[68:16] Speaker 1: Anyone who understands quantiles and calculation of cumulative relative frequencies well enough, on the basis of the cumulative relative frequencies, should be actually able to see any quantile right at the moment when you look at it. It works as follows.
[68:34] Speaker 1: Let's start with the median, right? Median is 50% quantile, so capital P is 0.5.
[68:41] Speaker 1: How to find the median in the frequency distribution table using cumulative relative frequency? You always start at the top of the table, and you are going row by row, searching for that row where the cumulative relative frequency for the first time exceeds, meaning for the first time is higher than the P of the quantile you are looking for.
[69:08] Speaker 1: So for the median, 0.4 is not higher than 0.5. 0.73 is for the first time.
[69:17] Speaker 1: And therefore, simply by looking on the table, you can say that the median is 20 years.
[69:31] Speaker 1: If some point the median is a different number, it was 0.1.
[69:34] Speaker 4: Between any number?
[69:34] Speaker 1: Any number between 0 and 1.
[69:37] Speaker 4: 0.7.
[69:38] Speaker 1: Between 0 and 1?
[69:39] Speaker 4: 0.7.
[69:39] Speaker 1: Sorry?
[69:40] Speaker 4: Between 0 and 0.7.
[69:41] Speaker 1: 0.7. Okay. So in that case, we will need, again, to search for the first row where it's higher than 0.7 for the first time.
[69:52] Speaker 1: This one is not higher than 0.7. This one is.
[69:56] Speaker 1: So we can also say that even the 70% quantile is 20 years.
[70:04] Speaker 1: If we are looking, for example, for 95% quantile, the first row where the cumulative relative frequency exceeds 0.95 is the second one, and therefore we can quickly say that the 95% quantile is 21 years, and so on and so on.
[70:23] Speaker 1: So actually knowing the cumulative relative frequencies, understanding that, is a perfect, like, idea about the distribution of the values of a quantile variable in the dataset. So we have these two approaches.
[70:37] Speaker 1: In the exercise you have to submit to you, you'll be tasked to find some quantiles using both of them. And what you should know well is that if you, the bigger the dataset size, the higher the n, the closer the results of these two approaches are.
[70:51] Speaker 1: But for small datasets, those two different approaches, the formula way and the cumulative relative frequency way, may give you slightly different results, which is exactly what will happen in the exercise you have to submit to you. So don't panic, right?
[71:03] Speaker 1: It's just different ways. There are two different approaches how to do that.
[71:06] Speaker 1: And mainly, if your dataset size n is small, they may give you slightly different results.
[71:14] Speaker 1: Okay. Are there any questions?
[71:17] Speaker 1: You seem to be pretty good at this whole thing, so, and I have one more second to go, right? It was just the one I wanted to go.
[71:25] Speaker 1: I'll talk to Lila after that, but yeah, any questions? Okay, that's really good.
[71:29] Speaker 1: So if there are no other questions, thank you very much.
