const questions = [
  {
    id: 1,
    question: "What is Average True Range (ATR)?",
    options: [
      "The average of opening and closing prices",
      "A volatility indicator showing average price variation within a given lookback period",
      "The difference between the high and low of a trading session",
      "A momentum indicator"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "How is True Range calculated?",
    options: [
      "Current high minus current low only",
      "The greatest of: current high-low, absolute value of current high-previous close, or absolute value of current low-previous close",
      "The average of the last 14 days' ranges",
      "High minus low plus close minus open"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "In the Franco-Nevada example, what ATR multiple was used above and below the horizontal boundary for breakout confirmation and stop-loss?",
    options: [
      "0.25 multiple (quarter ATR)",
      "0.5 multiple (half ATR)",
      "1.0 multiple (full ATR)",
      "2.0 multiple (double ATR)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "Using the ATR method in the Franco-Nevada example, what was the improved reward-to-risk ratio?",
    options: [
      "1.5",
      "2.0",
      "3.3",
      "4.0"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "Why is the ATR-based approach described as both 'objective' and 'adaptive'?",
    options: [
      "It's objective because it uses mathematics, adaptive because it changes daily",
      "It's objective because it can be applied across asset classes, adaptive because it reflects the instrument's volatility",
      "It's objective because Edwards and Magee approved it, adaptive because traders can adjust it",
      "It's objective because it eliminates emotion, adaptive because it follows trends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What are classical chart patterns fundamentally representing?",
    options: [
      "Random price movements",
      "Consolidation periods in steady uptrends or downtrends",
      "Institutional buying patterns",
      "Market maker activity"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What are the two different trading strategies that can be applied to chart patterns?",
    options: [
      "Long-term and short-term strategies",
      "Trend-following and contrarian strategies",
      "Mean reversion (rangebound) and breakout strategies",
      "Momentum and value strategies"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "What does a mean reversion strategy involve when trading rangebound patterns?",
    options: [
      "Buying breakouts and selling breakdowns",
      "Selling at resistance and buying at support until a confirmed breakout",
      "Holding positions through the entire consolidation",
      "Only trading after the breakout occurs"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "In the Citizen Watch example, what moving average was used to identify the consolidation area?",
    options: [
      "20-week simple moving average",
      "40-week simple moving average",
      "50-week simple moving average",
      "200-week simple moving average"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What candlestick pattern in the Citizen Watch example suggested that resistance would hold?",
    options: [
      "Doji",
      "Hammer",
      "Bearish engulfing",
      "Morning star"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 11,
    question: "What is a bearish engulfing candlestick pattern?",
    options: [
      "A small candle followed by a gap down",
      "An outside week/day candlestick formed by two candles suggesting reversal at resistance",
      "A long upper shadow with small body",
      "Three consecutive down candles"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "What candlestick pattern suggested support would hold in the Citizen Watch example?",
    options: [
      "Bearish engulfing",
      "Shooting star",
      "Bullish engulfing",
      "Evening star"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 13,
    question: "After how many tests of the upper and lower boundaries did the Citizen Watch consolidation range become better defined?",
    options: [
      "One test",
      "Two tests",
      "Three tests",
      "Four tests"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 14,
    question: "What candlestick pattern appeared at resistance suggesting a potential reversal in the Citizen Watch example?",
    options: [
      "Hammer",
      "Shooting star",
      "Bullish harami",
      "Piercing pattern"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 15,
    question: "When price approaches resistance in a rangebound pattern, what two scenarios should traders monitor for?",
    options: [
      "Gap up or gap down",
      "Volume increase or decrease",
      "A possible breakout or consolidation with price returning to support",
      "Higher highs or lower lows"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What provided support when price didn't retrace all the way to the lower boundary in the later stages of the Citizen Watch pattern?",
    options: [
      "The previous low",
      "The 40-period moving average that had been moving higher",
      "A Fibonacci level",
      "Round number support"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 17,
    question: "What did the increased frequency of tests at resistance indicate in the Citizen Watch example?",
    options: [
      "Weakening of the pattern",
      "Seller exhaustion",
      "Impatience of buyers after each retreat",
      "Market indecision"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 18,
    question: "When the Citizen Watch pattern eventually broke out, what type of pattern did it become?",
    options: [
      "Bullish reversal pattern",
      "Bearish continuation pattern",
      "Bullish continuation pattern (rectangular chart pattern)",
      "Neutral pattern"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 19,
    question: "In the Turkiye BIST Bank Index example, how long did the rectangular consolidation last?",
    options: [
      "Five years",
      "Eight years",
      "An entire decade (ten years)",
      "Fifteen years"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "What was significant about the Turkiye BIST Bank Index rectangular pattern outcome?",
    options: [
      "It failed to reach its target",
      "It exactly met its price target",
      "It far exceeded three times its initial price target",
      "It reversed after a false breakout"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 21,
    question: "For flag and pennant consolidations, what type of price movement precedes their formation?",
    options: [
      "Slow, gradual movements",
      "Sideways, choppy movements",
      "Fast, steady, and steep price movements",
      "Gap-filled movements"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "In the Axalta Coating Systems bull flag example, how did price break out of its preceding downtrend?",
    options: [
      "With a gradual reversal",
      "With a breakaway gap",
      "With a double bottom",
      "With a head and shoulders bottom"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 23,
    question: "In the Axalta example, the advance to the first minor reversal in the flag equaled $3.11. With a breakout level at $30.8, what was the price objective?",
    options: [
      "$32.50",
      "$33.00",
      "$33.91",
      "$34.50"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "According to the material, is technical analysis and classical charting best described as:",
    options: [
      "A pure science with exact rules",
      "An art form with no structure",
      "A craft where practitioners apply tools and techniques they are comfortable with",
      "A mathematical system with precise calculations"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "When should a trader switch from a rangebound trading strategy to a breakout strategy?",
    options: [
      "After the first test of resistance",
      "When volume increases",
      "After a confirmed breakout takes place",
      "When the moving average flattens"
    ],
    correct: 2,
    hasImage: false
  }
];
