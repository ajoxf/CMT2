const questions = [
  {
    id: 1,
    question: "The VIX index measures the implied volatility of the S&P 500 over what time period?",
    options: [
      "7 days",
      "30 days",
      "90 days",
      "252 days"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What does the VIX index represent in terms of market sentiment?",
    options: [
      "Market confidence and complacency",
      "Market fear and uncertainty",
      "Market greed and speculation",
      "Market momentum and strength"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "A VIX reading of 12 would typically indicate:",
    options: [
      "Extreme market fear",
      "High volatility expected",
      "Market complacency and low expected volatility",
      "An impending market crash"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "A VIX reading above 30 typically suggests:",
    options: [
      "Market stability",
      "Low volatility environment",
      "High fear and uncertainty in the market",
      "Strong bullish sentiment"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "During the 2008 financial crisis, the VIX reached a peak of approximately:",
    options: [
      "40",
      "60",
      "80",
      "89"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 6,
    question: "What is the primary use of the VIX for technical analysts?",
    options: [
      "To predict exact future prices",
      "To gauge market sentiment and potential turning points",
      "To calculate dividend yields",
      "To determine interest rate changes"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "The relationship between VIX and S&P 500 is typically:",
    options: [
      "Positively correlated",
      "Inversely correlated",
      "No correlation",
      "Randomly correlated"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "When the VIX is at extreme lows, it often suggests:",
    options: [
      "A buying opportunity",
      "Market complacency and potential for a volatility spike",
      "Continued low volatility ahead",
      "A strong trending market"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What does a spike in VIX typically coincide with in equity markets?",
    options: [
      "Market rallies",
      "Market sell-offs or declines",
      "Sideways consolidation",
      "Dividend payments"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "The VIX is often referred to as:",
    options: [
      "The greed index",
      "The fear gauge or fear index",
      "The momentum indicator",
      "The trend follower"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "How can traders use VIX extremes?",
    options: [
      "Only for day trading",
      "To identify potential market turning points and sentiment extremes",
      "To calculate moving averages",
      "To determine exact entry prices"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "What does mean reversion in VIX suggest?",
    options: [
      "VIX will stay elevated indefinitely",
      "VIX tends to return to average levels after extreme readings",
      "VIX always increases over time",
      "VIX is unpredictable"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "If the VIX is at 15 and spikes to 25, this suggests:",
    options: [
      "Market participants expect lower volatility",
      "Market participants expect higher volatility and uncertainty",
      "No change in market expectations",
      "A definite market bottom"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "The VIX is calculated using:",
    options: [
      "Historical price movements",
      "Implied volatility from S&P 500 index options",
      "Trading volume data",
      "Economic indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "What time frame do VIX options prices reflect?",
    options: [
      "Past 30 days",
      "Next 30 days",
      "Next 90 days",
      "Next 12 months"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "When VIX is declining from elevated levels, it typically indicates:",
    options: [
      "Increasing market fear",
      "Market stabilization and decreasing fear",
      "An impending crash",
      "No change in sentiment"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "A contrarian trader might view a VIX above 40 as:",
    options: [
      "A signal to sell everything",
      "Extreme fear and potential buying opportunity",
      "A sign to remain in cash indefinitely",
      "No trading significance"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What does a sustained low VIX reading (below 15) for extended periods suggest?",
    options: [
      "Market participants are fearful",
      "High expected volatility",
      "Market complacency and potential for volatility increase",
      "A healthy, stable market indefinitely"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "During a 'VIX spike', what typically happens to stock prices?",
    options: [
      "They rise sharply",
      "They fall or experience significant selling pressure",
      "They remain unchanged",
      "They become more predictable"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "Can the VIX predict the exact direction of future S&P 500 moves?",
    options: [
      "Yes, with 100% accuracy",
      "Yes, but only for the next day",
      "No, it measures expected volatility, not direction",
      "Yes, but only during bull markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What is 'VIX term structure'?",
    options: [
      "The shape of the VIX chart over time",
      "The relationship between VIX futures contracts of different maturities",
      "The calculation method for VIX",
      "The historical average of VIX"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "When VIX futures are in 'contango', it means:",
    options: [
      "Near-term futures are more expensive than longer-term futures",
      "Longer-term futures are more expensive than near-term futures",
      "All futures have the same price",
      "VIX is at all-time highs"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "When VIX futures are in 'backwardation', it suggests:",
    options: [
      "Market calm and normal conditions",
      "Near-term volatility expectations are higher than longer-term",
      "No volatility expected",
      "A bullish market trend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "Which statement about VIX is most accurate?",
    options: [
      "VIX can be directly traded like a stock",
      "VIX is an index and can be accessed through derivatives like futures and options",
      "VIX is only useful for institutional investors",
      "VIX has no practical trading applications"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "How do technical analysts use VIX divergences?",
    options: [
      "They ignore them completely",
      "They look for divergences between VIX and S&P 500 to spot potential reversals",
      "They only use them in forex trading",
      "They use them to calculate correlations"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "If the S&P 500 is making new highs but VIX is rising, this could indicate:",
    options: [
      "Strong bullish confirmation",
      "Potential underlying weakness or concern despite rising prices",
      "A perfect buying opportunity",
      "No significant meaning"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "What is a common VIX-based trading strategy?",
    options: [
      "Buy when VIX is low, sell when VIX is high",
      "Buy volatility when VIX is extremely elevated, expecting mean reversion",
      "Ignore VIX completely",
      "Always short VIX products"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "VIX Exchange-Traded Products (ETPs) like VXX track:",
    options: [
      "The spot VIX index directly",
      "VIX futures contracts, not spot VIX",
      "S&P 500 returns",
      "Treasury bond yields"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What is a key risk when holding long VIX ETPs like VXX?",
    options: [
      "No risk at all",
      "Contango decay causing losses over time even if VIX stays flat",
      "They always appreciate in value",
      "They are perfectly correlated with stocks"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "How should VIX analysis be integrated into a trading strategy?",
    options: [
      "As the only indicator to make decisions",
      "As a complementary tool alongside other technical and fundamental analysis",
      "It should be ignored in technical analysis",
      "Only during bear markets"
    ],
    correct: 1,
    hasImage: false
  }
];
