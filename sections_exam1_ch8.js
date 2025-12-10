const questions = [
  {
    id: 1,
    question: "In hypothesis testing, what does the null hypothesis (H₀) represent in the context of the IWM breakout system case study?",
    options: [
      "The mean return of the system is greater than 0%",
      "The mean return of the system is less than or equal to 0%",
      "The mean return of the system equals exactly 4.31%",
      "The system will always be profitable"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the primary purpose of calculating a p-value in hypothesis testing?",
    options: [
      "To determine the exact probability that the alternative hypothesis is true",
      "To measure the probability of observing the test results purely by chance, assuming the null hypothesis is true",
      "To calculate the average return of a trading system",
      "To determine the size of the sample needed"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "In the IWM breakout system, what was the sample mean return and sample size used for the initial hypothesis test?",
    options: [
      "Mean: 3.67%, Sample size: 12",
      "Mean: 4.31%, Sample size: 11",
      "Mean: 13.85%, Sample size: 11",
      "Mean: 4.31%, Sample size: 24"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "When should a student's t-test be used instead of a z-test?",
    options: [
      "When the population standard deviation is known",
      "When the sample size is greater than 1000",
      "When the data are from a simple random sample and the population standard deviation is unknown",
      "Only when the population is perfectly normally distributed"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "What is the decision rule for rejecting the null hypothesis at a given significance level α?",
    options: [
      "When α < p-value, reject H₀",
      "When α > p-value, reject H₀",
      "When α = p-value, reject H₀",
      "The p-value has no relationship to the rejection decision"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "In the IWM case study, what was the calculated t-statistic for testing the sample mean?",
    options: [
      "Approximately 0.1632",
      "Approximately 1.03",
      "Approximately 4.29",
      "Approximately 13.85"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What does a Type I error represent in hypothesis testing?",
    options: [
      "Correctly rejecting a false null hypothesis",
      "Failing to reject the null hypothesis when it is true",
      "Rejecting the null hypothesis when it is actually true (false positive)",
      "Failing to reject the null hypothesis when the alternative is true"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "What does a Type II error represent in hypothesis testing?",
    options: [
      "Rejecting a true null hypothesis",
      "Correctly failing to reject a true null hypothesis",
      "Failing to reject the null hypothesis when the alternative hypothesis is true (false negative)",
      "Making a calculation error in the test statistic"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "In the IWM case study, what was the initial p-value calculated for testing the mean return, and what was the conclusion at α = 0.05?",
    options: [
      "p ≈ 0.0008; reject H₀",
      "p ≈ 0.1632; reject H₀",
      "p ≈ 0.1632; fail to reject H₀",
      "p ≈ 0.05; reject H₀"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "What additional evidence did the analyst use to overcome the potential Type II error in the IWM case study?",
    options: [
      "The high standard deviation",
      "The linear relationship of the equity curve with r = 0.80",
      "The negative excess kurtosis",
      "The 45.5% win rate"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "What was the correlation coefficient (r) of the equity curve in the IWM case study, and what does it indicate?",
    options: [
      "r = 0.6474; weak positive correlation",
      "r = 0.80; strong positive correlation",
      "r = -0.80; strong negative correlation",
      "r = 0.05; no correlation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "When testing the correlation coefficient of the equity curve, what was the p-value and final decision?",
    options: [
      "p ≈ 0.1632; fail to reject H₀",
      "p ≈ 0.0008; reject H₀",
      "p ≈ 0.05; fail to reject H₀",
      "p ≈ 0.80; reject H₀"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What is the formula for calculating the t-statistic when testing a sample mean?",
    options: [
      "t = (x̅ - μ) / (s / √n)",
      "t = (x̅ + μ) / (s × √n)",
      "t = μ / (x̅ - s)",
      "t = (x̅ - μ) × (s / n)"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 14,
    question: "What does 'degrees of freedom' represent when testing a sample mean?",
    options: [
      "The total number of observations in the sample",
      "The number of observations minus 1 (n - 1)",
      "The standard deviation of the sample",
      "The square root of the sample size"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "In the IWM breakout system, what characteristic of the distribution made traditional statistical tests less reliable?",
    options: [
      "The sample was too large",
      "The large standard deviation (13.85%) and negative excess kurtosis (-1.62) indicated non-normality",
      "The mean was positive",
      "The win rate was too high"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "What does a profit factor greater than 2 indicate for a trading system?",
    options: [
      "The system loses money overall",
      "The profits are exactly twice the losses",
      "The absolute value of total profits is at least twice the total losses",
      "The win rate is greater than 50%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "What was the profit factor of the IWM breakout system, and what does this suggest?",
    options: [
      "1.38; the system is marginally profitable",
      "0.80; the system is losing money",
      "2.12; the system's profits are about twice its losses",
      "4.31; the system is highly profitable"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the standard significance level (α) used in hypothesis testing to justify labeling results as 'statistically significant'?",
    options: [
      "α = 0.01 (1%)",
      "α = 0.05 (5%)",
      "α = 0.10 (10%)",
      "α = 0.50 (50%)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "What does positive skewness in the return distribution indicate about the IWM breakout system?",
    options: [
      "Most returns are negative with few large positive outliers",
      "The right tail is longer with outliers farther from center on the right side",
      "The distribution is perfectly normal",
      "The system has equal wins and losses"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "In the IWM case study, what was the excess kurtosis, and what type of distribution does this indicate?",
    options: [
      "+1.62; leptokurtic with heavy tails",
      "-1.62; platykurtic with lighter tails and broader peak",
      "0; perfectly normal distribution",
      "+3.00; extremely peaked distribution"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "Why did the analyst ultimately conclude that the IWM breakout system was statistically significant despite the initial failure to reject H₀?",
    options: [
      "The sample size was increased to 100 observations",
      "The standard deviation decreased significantly",
      "Additional evidence from the equity curve's strong linear correlation (p ≈ 0.0008) supported rejecting H₀",
      "The significance level was changed to α = 0.20"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "What is the relationship between the coefficient of determination (r²) and the correlation coefficient (r)?",
    options: [
      "r² = r × 2",
      "r = √r² (taking the square root, considering the sign)",
      "r² = r + 1",
      "They are unrelated measures"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "When testing a correlation coefficient, what are the degrees of freedom?",
    options: [
      "n - 1",
      "n - 2",
      "n",
      "n - 3"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "What does the payoff ratio of 2.54 in the IWM system indicate?",
    options: [
      "The system wins 2.54 times more often than it loses",
      "The average winner is 2.54 times larger than the average loser",
      "The system has 2.54% average return",
      "There are 2.54 trades per year"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "In the context of financial markets, why is statistical inference particularly challenging?",
    options: [
      "Financial data is always perfectly normally distributed",
      "Markets have no randomness",
      "Financial data is incredibly noisy with randomness playing a much larger role than in other fields",
      "Sample sizes are always too large"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "What is the proper interpretation when we 'fail to reject' the null hypothesis?",
    options: [
      "We have proven the null hypothesis is true",
      "We accept the null hypothesis as fact",
      "We lack sufficient evidence to reject it, but we don't accept it as true",
      "We have proven the alternative hypothesis is false"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "According to the case study, what is the typical win rate range for trend trading systems?",
    options: [
      "60% to 80%",
      "50% to 60%",
      "30% to 50%",
      "10% to 30%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What does M.A.E. (Maximum Adverse Excursion) measure in the context of the IWM trading system?",
    options: [
      "The final percentage change of each trade",
      "How far price traveled below the entry price during the holding period",
      "The total profit of the system",
      "The correlation between trades"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "If a significance level of α = 0.01 is used instead of α = 0.05, what does this indicate about the researcher's approach?",
    options: [
      "The researcher is willing to accept more Type I errors",
      "The researcher wants a lower standard of evidence",
      "The researcher is being more conservative, requiring stronger evidence to reject H₀ (highly statistically significant)",
      "The researcher is increasing the chance of Type II errors intentionally"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "In the coin flip example mentioned in the introduction, what is the probability of flipping five straight heads with a fair coin?",
    options: [
      "0.50 (50%)",
      "0.031 (3.1%)",
      "0.10 (10%)",
      "0.005 (0.5%)"
    ],
    correct: 1,
    hasImage: false
  }
];
