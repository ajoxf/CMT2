const questions = [
  {
    id: 1,
    question: "What does the %b indicator measure in Bollinger Bands analysis?",
    options: [
      "Where the current price is in relation to the Bollinger Bands",
      "The width of the Bollinger Bands",
      "The number of standard deviations from the mean",
      "The volatility cycle of the security"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the formula for calculating %b?",
    options: [
      "%b = (UpperBB - LowerBB) / MiddleBB",
      "%b = ((Last price - LowerBB) / (UpperBB - LowerBB)) x 100",
      "%b = (Last price - MiddleBB) / Standard Deviation",
      "%b = (UpperBB - Last price) / (UpperBB - LowerBB)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "When price is at the upper Bollinger Band, what value does %b equal?",
    options: [
      "0",
      "0.5 or 50",
      "1 or 100",
      "2 or 200"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "When price is at the lower Bollinger Band, what value does %b equal?",
    options: [
      "0",
      "0.5",
      "1",
      "-1"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 5,
    question: "What happens to %b when price moves above the upper Bollinger Band?",
    options: [
      "It remains at 100",
      "It resets to 0",
      "It can rise above 100",
      "It becomes undefined"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 6,
    question: "The %b indicator was inspired by which other technical indicator?",
    options: [
      "RSI (Relative Strength Index)",
      "MACD (Moving Average Convergence Divergence)",
      "Stochastics by George Lane",
      "ADX (Average Directional Index)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "What does the BandWidth indicator measure?",
    options: [
      "The price position relative to the bands",
      "The distance between the upper and lower Bollinger Bands",
      "The moving average period",
      "The number of trading days in a trend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "What is the formula for BandWidth?",
    options: [
      "BandWidth = (UpperBB + LowerBB) / 2",
      "BandWidth = (UpperBB - LowerBB) x MiddleBB",
      "BandWidth = (UpperBB - LowerBB) / MiddleBB",
      "BandWidth = UpperBB / LowerBB"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "Using default Bollinger Band settings (20-period MA, 2 standard deviations), BandWidth equals:",
    options: [
      "Two times the coefficient of variation",
      "Four times the 20-period coefficient of variation",
      "The standard deviation divided by 2",
      "The variance of the 20-period returns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What characteristic do volatility cycles exhibit according to Bollinger?",
    options: [
      "They are mean reverting",
      "They follow regular economic cycles",
      "They are extreme seeking",
      "They remain constant over time"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "A period of extremely low volatility is typically followed by:",
    options: [
      "Average volatility levels",
      "Continued low volatility",
      "High volatility",
      "No predictable pattern"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "What is stationarity in the context of Bollinger Bands?",
    options: [
      "When price remains constant over time",
      "A statistical concept where parameters like mean and variance remain constant over time",
      "When Bollinger Bands don't change width",
      "When volatility cycles stop occurring"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "Which type of assets often demonstrate stationarity and are particularly suited to Bollinger Band analysis?",
    options: [
      "Individual stocks",
      "Commodities",
      "Assets traded in pairs, such as currencies",
      "Real estate investments"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "What constitutes an ideal Two-Bar Reversal pattern?",
    options: [
      "Two bars with identical ranges",
      "Two consecutive bars both greater than the prior range as defined by ATR",
      "Two bars that both close at the same price level",
      "Two bars that form a doji pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "In a Two-Bar Reversal at the upper Bollinger Band, what characterizes the first bar?",
    options: [
      "It closes below the lower Bollinger Band",
      "It closes at the middle Bollinger Band",
      "It closes above the upper Bollinger Band",
      "It closes inside the Bollinger Bands"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "In a Two-Bar Reversal at the upper Bollinger Band, what characterizes the second bar?",
    options: [
      "It closes above the upper Bollinger Band",
      "It closes back inside the upper Bollinger Band",
      "It closes at the lower Bollinger Band",
      "It must be a doji candle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "What is the default period setting for Average True Range (ATR)?",
    options: [
      "10 periods",
      "14 periods",
      "20 periods",
      "50 periods"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "After a Two-Bar Reversal at the upper band, price typically retraces to:",
    options: [
      "Only the upper band",
      "The previous day's close",
      "The middle Bollinger Band and potentially the lower band",
      "A new all-time high"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "How can %b help identify Two-Bar Reversals?",
    options: [
      "By measuring the moving average",
      "By easily noting when price is briefly above or below the Bollinger Bands",
      "By calculating standard deviation",
      "By predicting future price direction"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "When entering a long trade on a Two-Bar Reversal at the lower band, where should a stop loss typically be placed?",
    options: [
      "At the upper Bollinger Band",
      "At the middle Bollinger Band",
      "Just below the low of the reversal",
      "At a fixed percentage below entry"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What defines a Bollinger Band Squeeze?",
    options: [
      "When price touches both bands simultaneously",
      "When BandWidth reaches a 125-period low",
      "When the bands become parallel",
      "When %b equals 50"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "Why is 125 periods used to identify a Squeeze?",
    options: [
      "It's a Fibonacci number",
      "It represents one full trading year",
      "It represents approximately half a trading year",
      "It's a standard statistical measure"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 23,
    question: "According to John Bollinger, what is true about The Squeeze?",
    options: [
      "It is where trends go to die",
      "It is where trends are born",
      "It indicates a market reversal",
      "It signals the end of volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "Does The Squeeze itself indicate the direction of the upcoming price movement?",
    options: [
      "Yes, it always indicates upward movement",
      "Yes, it always indicates downward movement",
      "No, it does not indicate direction",
      "Yes, but only in trending markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "What is the recommended approach when trading a Squeeze?",
    options: [
      "Enter immediately when BandWidth touches the lower reference line",
      "Wait for a breakout confirmation bar showing direction",
      "Always go long regardless of direction",
      "Exit all positions until volatility returns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "What defines a Bollinger Band Bulge?",
    options: [
      "A 125-period low in volatility",
      "A 125-period high in volatility",
      "When bands become perfectly horizontal",
      "When price consolidates between the bands"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "According to John Bollinger, what does The Bulge signify?",
    options: [
      "Where trends are born",
      "Where trends go to die",
      "The beginning of high volatility",
      "A continuation pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "What is the key signal in identifying a Bulge?",
    options: [
      "When BandWidth touches the upper reference line only",
      "When BandWidth touches the upper reference line and then turns down",
      "When price breaks above the upper band",
      "When the moving average flattens"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "How is The Bulge typically used in trading?",
    options: [
      "As an entry signal for new positions",
      "To inform an exit or scaling back of a position after a strong move",
      "To double down on existing positions",
      "To switch from long to short positions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "In the standard three-panel Bollinger Band chart setup, what is displayed in each panel from top to bottom?",
    options: [
      "Volume, Price with Bollinger Bands, BandWidth",
      "Price with Bollinger Bands, %b indicator, BandWidth indicator",
      "%b indicator, BandWidth indicator, Price with Bollinger Bands",
      "Price with Bollinger Bands, Volume, %b indicator"
    ],
    correct: 1,
    hasImage: false
  }
];
