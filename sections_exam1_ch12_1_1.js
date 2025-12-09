const questions = [
  {
    id: 1,
    question: "In the three-step investment process, what role does quantitative analysis primarily serve?",
    options: [
      "It replaces the need for fundamental analysis entirely",
      "It objectively measures and compares ideas while helping to overcome biases",
      "It guarantees profitable trading outcomes",
      "It eliminates all risk from trading decisions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the primary difference between primary and secondary information in the investment process?",
    options: [
      "Primary is paid data, secondary is free data",
      "Primary is raw data, secondary is derived data",
      "Primary is historical data, secondary is real-time data",
      "Primary is qualitative, secondary is quantitative"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "According to the material, what is the recommended minimum probability of gain for a trading signal?",
    options: [
      "50%",
      "55%",
      "60%",
      "65%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "Which type of rule returns only a true or false result and is used to ignore signals that don't meet certain criteria?",
    options: [
      "Trigger Rules",
      "Filter Rules",
      "Value Rules",
      "Ranking Rules"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "What does a trigger rule identify in quantitative analysis?",
    options: [
      "The long-term trend direction",
      "The discrete event when a condition is satisfied for signal generation",
      "The ranking order of multiple signals",
      "The exit point for a trade"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "If you need to rank multiple signals triggered on the same day, which type of rule would you use?",
    options: [
      "Trigger Rules",
      "Filter Rules",
      "Value Rules",
      "Exit Rules"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "In the RRG example, what does entering quadrant 3 represent?",
    options: [
      "Leading quadrant",
      "Weakening quadrant",
      "Improving quadrant",
      "Lagging quadrant"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "Why should shorter time frames generally be avoided when trading costs are high?",
    options: [
      "They produce too many signals leading to excessive transaction costs",
      "They are less accurate than longer time frames",
      "They require more computing power",
      "They violate exchange regulations"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 9,
    question: "What is the relationship between time frame selection and leverage according to the material?",
    options: [
      "Highly leveraged securities should use longer time frames",
      "Highly leveraged securities should use shorter time frames",
      "Leverage has no impact on time frame selection",
      "Only unleveraged securities can use any time frame"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What is the 'signal-to-noise ratio' concept as applied to market trends?",
    options: [
      "The ratio of winning to losing trades",
      "The relationship between tradable trends and short-term market interference",
      "The volume-to-price relationship",
      "The correlation between technical indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "Why are shorter time frames more susceptible to noise in trading signals?",
    options: [
      "They have less historical data available",
      "They capture short-term disruptions from news, rumors, and opinions rather than tradable trends",
      "They require faster execution technology",
      "They violate market microstructure assumptions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "In Signal Test #1 for the RRG strategy, what was the mean return over 21 days?",
    options: [
      "0.54%",
      "0.94%",
      "1.94%",
      "2.91%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What was the main problem identified with Signal Test #1 results?",
    options: [
      "Too few signals were generated",
      "The probability of gain was too low and returns didn't justify the risk",
      "The standard deviation was excessively high",
      "The test period was too short"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "In Signal Test #2, what filter was added to improve the RRG strategy?",
    options: [
      "Only trade when volatility is below average",
      "Only trade when the security is above its 200-day moving average",
      "Only trade when the S&P 500 index is above its 3-day moving average",
      "Only trade when volume is increasing"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "What was the outcome of adding the benchmark filter in Signal Test #2?",
    options: [
      "Mean return improved significantly",
      "The results actually worsened, rejecting the hypothesis that benchmark trend matters",
      "Probability of gain increased to 65%",
      "Number of signals doubled"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "In Signal Test #3, what was the final mean return achieved?",
    options: [
      "0.94%",
      "1.83%",
      "2.91%",
      "4.12%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "What annualized return does a 2.91% return over 21 days approximately represent?",
    options: [
      "25%",
      "35%",
      "41%",
      "52%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "In Signal Test #3, what two filters were added to improve performance?",
    options: [
      "Volume filter and volatility filter",
      "Heading between 300-20 degrees and distance greater than 3 units from RRG center",
      "Price above 200-day MA and RSI above 50",
      "MACD positive and ADX above 25"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "How many signals were generated in Signal Test #3 compared to Signal Test #1?",
    options: [
      "1,848 vs 62,396 - significantly fewer",
      "Equal numbers in both tests",
      "1,848 vs 12,396 - moderately fewer",
      "62,396 vs 1,848 - significantly more"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 20,
    question: "What potential concern was raised about having only 1,848 signals in Signal Test #3?",
    options: [
      "It's too many signals to manage effectively",
      "It could be too small and not give enough trading opportunities",
      "It will cause overfitting",
      "It violates statistical significance requirements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What does a leptokurtic profit distribution indicate in signal testing?",
    options: [
      "The results are unreliable and should be rejected",
      "There are fat tails indicating extreme outcomes",
      "The results can be repeated with confidence",
      "The signals are normally distributed"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "What does the 'history bar' visualization show in the signal test results?",
    options: [
      "The price history of the security",
      "Every signal generated, with lines going up for profits and down for losses",
      "The correlation with the benchmark",
      "The cumulative strategy returns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What observation from the history bar suggested room for improvement in Signal Test #1?",
    options: [
      "All signals were profitable",
      "Profits and losses appeared randomly distributed",
      "Profits and losses were grouped together, suggesting a filter could turn off the rule during loss periods",
      "The bar showed no discernible pattern"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "What is the Monte Carlo analysis used for in signal testing?",
    options: [
      "To predict future price movements",
      "To generate a frequency distribution by taking random samples of 10 signals and compounding returns, repeated 2,000 times",
      "To calculate correlation coefficients",
      "To determine optimal position sizing"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What is the desired characteristic of a Monte Carlo plot distribution?",
    options: [
      "Negative skew",
      "Zero skew (normal distribution)",
      "Positive skew",
      "Bimodal distribution"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "Why is it important to visualize your rule before testing it?",
    options: [
      "To impress clients with charts",
      "To confirm the rule is capturing the intended signal",
      "To calculate the optimal parameters",
      "To determine the risk-free rate"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "According to the material, what is the minimum number of signals generally recommended to avoid?",
    options: [
      "Fewer than 100 signals",
      "Fewer than 500 signals",
      "Fewer than 1,000 signals",
      "Fewer than 5,000 signals"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "Why might accurate testing tools calculate statistics on a daily basis even when using weekly signals?",
    options: [
      "To generate more data points",
      "To imitate real-life portfolio management where stops are monitored daily",
      "To reduce computational requirements",
      "To comply with regulatory requirements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What does survivorship bias in data refer to?",
    options: [
      "The tendency to focus on winning trades only",
      "The exclusion of securities that no longer exist (failed companies) from historical data",
      "The preference for longer-lived trading strategies",
      "The bias toward recent market conditions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "In the quantitative process outlined, which step comes immediately after 'Visualize the rule'?",
    options: [
      "Define your exit rules",
      "Signal testing",
      "Strategy testing",
      "Optimization"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 31,
    question: "What is the standard deviation measuring in signal test results?",
    options: [
      "Price volatility of the security",
      "The dispersion of the individual signal returns",
      "The correlation with the benchmark",
      "The frequency of trading"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 32,
    question: "When the green signal return plot is 'virtually straight' over the holding period, this indicates:",
    options: [
      "The signal has no predictive power",
      "The idea is capturing a persistent trend over the measurement period",
      "The market is in equilibrium",
      "The strategy is overfit to the data"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 33,
    question: "What does it mean when the yellow benchmark plot is consistently below the green signal plot?",
    options: [
      "The benchmark is declining",
      "The signal outperforms the benchmark",
      "The signal has higher volatility",
      "The test has failed"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "In the RRG rule scripting example, what does 'JDKRS(INDEX=SPX:WI).Quadrant ChangeTo 3' specifically identify?",
    options: [
      "When a security enters the Leading quadrant",
      "When a security enters the Improving quadrant",
      "When a security crosses above the index",
      "When relative strength exceeds 100"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 35,
    question: "Why is it recommended NOT to add filter rules the first time you test a new idea?",
    options: [
      "Filter rules are never useful",
      "You want to see the baseline results before adding complexity",
      "It violates testing protocols",
      "Filters can only be added during optimization"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "What is the main advantage of using quantitative tools over manual analysis in Excel?",
    options: [
      "Tools are always more accurate",
      "Tools provide results in seconds and handle universe management and survivorship bias automatically",
      "Tools are less expensive",
      "Tools eliminate the need for strategy knowledge"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 37,
    question: "When should you consider using longer time frames for your analysis?",
    options: [
      "When the security is highly leveraged",
      "When account preservation is most important or trading costs are high",
      "When you want more frequent signals",
      "When the account size is small"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 38,
    question: "What makes quantitative analysis an 'iterative process' rather than a single test?",
    options: [
      "You must run the same test multiple times for statistical validity",
      "You make slight adjustments to your idea based on each test result and your technical analysis knowledge",
      "Regulations require multiple independent tests",
      "Each iteration must use a different time period"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 39,
    question: "In Signal Test #3, why was the filter requiring 'heading between 300 and 20 degrees' significant?",
    options: [
      "It filters for securities with declining momentum",
      "It identifies when the security's arrow is turning upward on the RRG",
      "It measures absolute price volatility",
      "It calculates correlation with the benchmark"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 40,
    question: "What does the 'Distance > 3' filter in Signal Test #3 accomplish?",
    options: [
      "It ensures the security is at least 3% above its moving average",
      "It requires the security to be at least 3 units away from the center of the RRG chart",
      "It sets a minimum holding period of 3 days",
      "It filters for securities with volatility above 3%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 41,
    question: "Based on the observation in Signal Test #3, when do RRG signals tend to produce better returns?",
    options: [
      "When the security is close to the RRG center with a flat heading",
      "When the security is far from the center and the arrow is turning up",
      "When the security is in the Lagging quadrant",
      "When relative strength is below 100"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "What is a key difference between signal testing and strategy testing?",
    options: [
      "Signal testing evaluates individual entry signals; strategy testing includes exits, stops, and portfolio management",
      "Signal testing uses real money; strategy testing is theoretical",
      "Signal testing is optional; strategy testing is mandatory",
      "They are identical processes with different names"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 43,
    question: "Why might 62,396 signals (from Test #1) be considered 'more than enough'?",
    options: [
      "It exceeds computational capacity",
      "It represents more opportunities than could ever be traded, ensuring signals are available when needed",
      "It indicates the rule is too loose",
      "It will result in overfitting"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 44,
    question: "What does it suggest when the green plot rises sharply before '0' (the signal trigger point)?",
    options: [
      "The signal is lagging and captures moves too late",
      "The absolute trend is improving before the signal triggers, confirming the relative strength improvement",
      "The test has a look-ahead bias",
      "The data contains errors"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 45,
    question: "If you wanted to delay a signal by 6 days based on test results, what would be the rationale?",
    options: [
      "To reduce the number of signals",
      "If performance after day 6 was significantly better than the first 6 days",
      "To comply with exchange rules",
      "To align with options expiration"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 46,
    question: "What role does artificial intelligence (A.I.) play in modern quantitative analysis according to the material?",
    options: [
      "A.I. replaces the need for analysts entirely",
      "A.I. assistants can help analysts code their ideas, opening quantitative analysis to those unable to code",
      "A.I. is only used for high-frequency trading",
      "A.I. is not mentioned as relevant to quantitative analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 47,
    question: "Why is it important to know your risk limits before beginning the quantitative process?",
    options: [
      "To calculate the exact position sizes",
      "To filter out strategies that over-trade or trade during high volatility periods that exceed your tolerance",
      "To determine the optimal leverage ratio",
      "To select the appropriate asset class"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 48,
    question: "What was the key improvement driver that increased mean returns from 0.94% to 2.91%?",
    options: [
      "Changing from daily to weekly data",
      "Adding specific filters for RRG heading direction and distance from center",
      "Increasing the holding period to 60 days",
      "Switching to a different benchmark index"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "What does a standard deviation of 20.9% in Signal Test #3 indicate about the signals?",
    options: [
      "The security's price volatility is 20.9%",
      "There is moderate dispersion in individual signal returns, including both positive and negative deviations",
      "The strategy will lose 20.9% of the time",
      "The correlation with the benchmark is 0.209"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 50,
    question: "According to the full quantitative process outlined, which steps come after 'Strategy testing'?",
    options: [
      "Define rules and visualize",
      "Select universe and define risk limits",
      "Analyze the results and optimization",
      "Signal testing and define exits"
    ],
    correct: 2,
    hasImage: false
  }
];
