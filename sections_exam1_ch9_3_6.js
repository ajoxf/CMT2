const questions = [
  {
    id: 1,
    question: "When analyzing stochastics, which plot should be used to identify traditional divergences against price?",
    options: [
      "The faster plot %K in all stochastic types",
      "The slower plot, either %D or %D Slow in slow or full stochastics",
      "Both %K and %D simultaneously",
      "The raw stochastic value before smoothing"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to Lane's methodology, when should a trader act on a stochastic divergence signal when reversing an uptrend?",
    options: [
      "When the stochastic reaches 100%",
      "When %K crosses above %D",
      "When %K or %D in slow or full stochastics crosses below the peak",
      "When price breaks a support level"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "What does a bear setup in an uptrend indicate according to Lane's stochastic interpretation?",
    options: [
      "An immediate sell signal",
      "The trend is about to reverse to a downtrend",
      "It increases the chance that the next swing higher might prove to be an important top",
      "Extreme weakness and trend continuation downward"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "What does Lane warn about when stochastics reach 0% or 100%?",
    options: [
      "It means a definitive bottom or top for the security",
      "It means extreme weakness or strength, implying trend continuation after a counter-trend move",
      "It indicates an immediate reversal is imminent",
      "It signals overbought or oversold conditions requiring action"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "What are 'hinges' in stochastic analysis?",
    options: [
      "Sharp reversals in the faster plot indicating imminent price reversals",
      "Structures that might mean a reversal in the indicator's trend for the next period",
      "Lane's version of failure swings",
      "Trading strategies for downtrends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What are 'warnings' in Lane's stochastic methodology?",
    options: [
      "When the stochastic crosses the 50% level",
      "Hinges that confirm trend reversals",
      "Sharp reversals in the faster plot (%K or %D) which might mean price is a few periods away from a reversal",
      "Divergences that fail to produce price reversals"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "What overbought and oversold levels did Lane specifically mention for stochastics?",
    options: [
      "80% as overbought and 20% as oversold",
      "70% as overbought and 30% as oversold",
      "75% as overbought and 25% as oversold",
      "85% as overbought and 15% as oversold"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "What are the names of Lane's trading strategies for uptrends and downtrends using stochastics?",
    options: [
      "Stochastic Bull and Stochastic Bear",
      "Stochastic Pop for uptrends and Stochastic Poop for downtrends",
      "Stochastic Rise and Stochastic Fall",
      "Stochastic Swing Up and Stochastic Swing Down"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "In the EUR/USD example with 5,3,3 and 21,3,3 slow stochastics, what was demonstrated about adjusting the length of %K?",
    options: [
      "It changes the overall shape dramatically",
      "It smooths the indicator but yields the same overall shape",
      "It eliminates all divergences",
      "It only affects the %D line, not %K"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What do the dashed arrows represent in the EUR/USD stochastic chart example?",
    options: [
      "Successful divergence signals",
      "Hinge formations",
      "Failed divergences",
      "Warning signals"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "According to the material on using indicators effectively, what is the main challenge technicians face?",
    options: [
      "Finding the right indicators to use",
      "Using multiple indicators to gather comprehensive evidence without using so many that it leads to inability to make decisive decisions",
      "Determining which timeframe to analyze",
      "Understanding the mathematical calculations behind indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "What are the five main types of indicators that should provide unique information?",
    options: [
      "Trend, momentum, volatility, volume, and trend strength",
      "Moving averages, oscillators, bands, divergences, and patterns",
      "Leading, lagging, coincident, confirming, and contrarian",
      "Price, volume, open interest, sentiment, and breadth"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 13,
    question: "In the trend composite indicator model example, what would a score of +4 indicate?",
    options: [
      "Moderate trend with caution advised",
      "High confidence in a strong trend",
      "Overbought conditions requiring selling",
      "Conflicting signals requiring further analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "In the trend composite model, when is a +1 score assigned for the first criterion?",
    options: [
      "If the ADX line is rising",
      "If price has moved above the upper Bollinger Band",
      "If price is above a fast-moving average",
      "If the fast-moving average is above a slower moving average"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "What does the trend composite model add a +1 for regarding moving averages?",
    options: [
      "If price crosses above the fast-moving average",
      "If the fast-moving average is above a rising slower moving average",
      "If both moving averages are sloping upward",
      "If price is above both moving averages"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "What is the main trade-off when using sensitive indicators with shorter calculation periods?",
    options: [
      "They provide slower signals but with higher accuracy",
      "They provide faster signals but increase the risk of false or whipsaw signals",
      "They eliminate lag completely but require more computational power",
      "They work better in trending markets but fail in ranges"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "What is the consequence of using less sensitive indicators with longer periods?",
    options: [
      "They generate more false signals but react faster",
      "They reduce false signals but may lag, potentially impacting the reward-to-risk ratio",
      "They only work in trending markets",
      "They become unreliable during high volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What does it indicate when an oscillator gets stuck at the top or bottom of its range?",
    options: [
      "The market is in a strong trend",
      "The calculation period is too long",
      "The calculation period is too short",
      "The oscillator is broken and needs recalibration"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "What does it indicate when an oscillator fails to reach the top or bottom of its range?",
    options: [
      "The calculation period is too long",
      "The calculation period is too short",
      "The market lacks volatility",
      "The oscillator is properly calibrated"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 20,
    question: "According to the material, why is it dangerous to trade against the market's major trend based solely on oscillator signals?",
    options: [
      "Oscillators are inherently unreliable",
      "Because oscillators only work in range-bound markets",
      "Because it goes against the primary direction of market momentum",
      "The material explicitly states it is dangerous but does not elaborate on the specific reason"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 21,
    question: "In bullish markets, what type of opportunities should traders focus on according to the effective indicator usage guidelines?",
    options: [
      "Overbought signals and negative divergences",
      "Oversold signals and negative divergences",
      "Oversold signals and positive divergences",
      "Any signal that suggests a reversal"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "In bearish trends, what type of opportunities should traders focus on?",
    options: [
      "Oversold signals and positive divergences",
      "Overbought signals and negative divergences",
      "Any bullish reversal signals",
      "Buying opportunities at support levels"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "Why do oscillators work best when combined with other forms of analysis?",
    options: [
      "Because oscillators alone cannot generate valid signals",
      "Because oscillator readings and signals can have different meanings under different market conditions",
      "Because they need volume confirmation",
      "Because they are mathematically flawed"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "What types of analysis should oscillators be combined with for optimal effectiveness?",
    options: [
      "Only moving averages and trendlines",
      "Pattern recognition, support/resistance levels, and trend identification",
      "Volume analysis exclusively",
      "Fundamental analysis and economic indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What is the overarching principle emphasized in the 'Keep It Simple' section?",
    options: [
      "Use as many indicators as possible for maximum confirmation",
      "Only use one indicator at a time",
      "Keep analysis as simple as possible and always listen to price first and foremost",
      "Avoid using any indicators and rely solely on price action"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "What should indicators always be used for according to the guidelines?",
    options: [
      "Predicting future price movements with certainty",
      "Establishing conditions and triggers",
      "Replacing price analysis entirely",
      "Generating automatic trading signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "In the context of balancing multiple indicators, what is recommended regarding horizontal and vertical volume?",
    options: [
      "Only use horizontal volume",
      "Only use vertical volume",
      "Consider both horizontal and vertical volume",
      "Volume should not be considered with momentum indicators"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What combination is recommended to assess momentum comprehensively?",
    options: [
      "Two different oscillators with the same settings",
      "An index and oscillator together",
      "Only rate of change indicators",
      "Moving averages exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "According to the material, how should volatility be judged when using multiple indicators?",
    options: [
      "By oscillator extremes only",
      "By bar ranges and bands",
      "By moving average convergence",
      "By momentum divergences"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "What is the key principle regarding the trend composite model's adaptability?",
    options: [
      "It can only be used for trend identification",
      "It must use exactly four criteria",
      "It can be adapted for overbought/oversold conditions and other market assessments",
      "It should never be modified from the example given"
    ],
    correct: 2,
    hasImage: false
  }
];
