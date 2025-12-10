const questions = [
  {
    id: 1,
    question: "In a point-and-figure triangle pattern, what is the most important feature for classification?",
    options: [
      "A minimum of five columns",
      "A series of inside columns",
      "A breakout above resistance",
      "A breakdown below support"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What distinguishes a shakeout pattern from a double bottom breakdown?",
    options: [
      "The shakeout occurs in a weak market while double bottom breakdown occurs in a strong market",
      "The shakeout occurs in a strong market with the stock above the bullish support line",
      "The shakeout requires exactly three boxes of reversal",
      "The shakeout must occur below the bearish resistance line"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "When is a shakeout pattern considered actionable?",
    options: [
      "Immediately when the double bottom breakdown occurs",
      "On the 3-box reversal up after the breakdown",
      "When the price crosses the bullish support line",
      "After the price consolidates for five columns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "A trendline break pattern in point-and-figure charting necessarily indicates:",
    options: [
      "An immediate trend reversal",
      "A consolidation period must follow",
      "A significant change in supply and demand dynamics",
      "The end of the current trend"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "What is the orthodox requirement for a long tail down pattern?",
    options: [
      "A tail of 10 boxes or more",
      "A tail of 15 boxes or more",
      "A tail of 20 boxes or more",
      "A tail of 25 boxes or more"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 6,
    question: "When is a long tail down pattern actionable?",
    options: [
      "Immediately when the tail forms",
      "When the tail reaches 20 boxes",
      "Only on the 3-box reversal up",
      "When the price breaks above the previous high"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "According to Prashant Shah's 'super pattern' (big burst up), what is the minimum number of boxes the price must travel after a double top breakout?",
    options: [
      "5 boxes",
      "7 boxes",
      "10 boxes",
      "12 boxes"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "In the big burst up/super pattern, what characterizes the correction after the initial thrust?",
    options: [
      "A deep correction of 10 boxes or more",
      "A mild correction of three to four boxes only",
      "A correction that retraces 50% of the move",
      "Any correction less than the breakout level"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "A high pole warning or low pole warning occurs when:",
    options: [
      "The column extends three boxes beyond the breakout",
      "The column extends five boxes beyond the breakout",
      "More than 50% of the column is retraced",
      "The entire column is retraced"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "What is the primary use of the pole warning pattern?",
    options: [
      "As an entry signal",
      "As a price projection tool",
      "As a stop loss placement when there is no nearby support level",
      "As a trend confirmation signal"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "For an upside vertical count, the formula is:",
    options: [
      "Number of Xs × box size",
      "Number of Xs × reversal boxes × box size",
      "Number of columns × reversal boxes × box size",
      "Number of Xs × reversal boxes ÷ box size"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "If a column of Xs contains 16 boxes, the reversal is 3 boxes, and the box size is 2, what is the vertical count projection?",
    options: [
      "32 points",
      "48 points",
      "96 points",
      "144 points"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "Why do short sellers sometimes use more conservative counts on the downside?",
    options: [
      "Because downside moves are typically weaker",
      "Because counts from a long tail down can lead to price targets below zero",
      "Because the reversal boxes should always be 2 for downside counts",
      "Because horizontal counts are more accurate than vertical counts"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "A common conservative practice for downside vertical counts is to:",
    options: [
      "Multiply by half the box size",
      "Substitute 2 for the reversal boxes instead of 3",
      "Only count filled-in boxes",
      "Divide the result by 2"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "The horizontal count formula is based on:",
    options: [
      "The strength of the initial thrust",
      "The height of the consolidation",
      "The width of the base or consolidation",
      "The number of boxes in the tallest column"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "If a congestion pattern is 10 columns wide with 3-box reversal and 1-point box size, what is the horizontal count?",
    options: [
      "10 points",
      "13 points",
      "30 points",
      "33 points"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "When counting across an irregular congestion pattern, what alternative method do many analysts use?",
    options: [
      "Count only the columns with Xs",
      "Multiply only by the number of filled-in boxes at the price level being measured",
      "Average the number of columns and boxes",
      "Use only the widest portion of the pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the simplest formula for calculating relative strength in point-and-figure analysis?",
    options: [
      "Price of index / Price of stock",
      "Price of stock / Price of index",
      "Price change of stock / Price change of index",
      "(Price of stock - Price of index) / Price of index"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "Why do many analysts prefer percentage box charts for relative strength analysis?",
    options: [
      "They are easier to calculate",
      "They result in a smoother chart",
      "They provide more accurate signals",
      "They eliminate the need for decimal adjustment"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "According to the Nasdaq Dorsey Wright research shown, what configuration indicated significant outperformance?",
    options: [
      "Stocks in a column of Os",
      "Stocks showing a breakdown",
      "Stocks in a strong relative strength configuration on a breakout in a column of Xs",
      "Stocks above their 200-day moving average"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What box size and reversal did the NDW research use for relative strength analysis?",
    options: [
      "3% box size, 3-box reversal",
      "5% box size, 2-box reversal",
      "6.5% box size, 3-box reversal",
      "10% box size, 3-box reversal"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "A diffusion index measures:",
    options: [
      "The volatility of a market",
      "A cross-sectional measurement of a given universe",
      "The correlation between two securities",
      "The momentum of a single security"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What box size do diffusion index charts commonly use?",
    options: [
      "1% box size",
      "2% box size",
      "3% box size",
      "5% box size"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "With a 2% box size, what percentage change is required to create a 3-box reversal in a diffusion index?",
    options: [
      "2%",
      "4%",
      "6%",
      "8%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "What is the Bullish Percent Index?",
    options: [
      "The percentage of stocks above their 50-day moving average",
      "The percentage of stocks in a given universe currently displaying point-and-figure breakouts",
      "The percentage of stocks with positive relative strength",
      "The percentage of stocks in an uptrend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "In a signal reversed pattern, what does the pattern represent?",
    options: [
      "A continuation of the current trend",
      "A consolidation period",
      "A sharp change in supply and demand",
      "A false breakout that can be ignored"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "When a bull trap occurs during a downtrend, it most likely indicates:",
    options: [
      "The downtrend is ending",
      "A trap for an overeager buyer",
      "A strong buy signal",
      "The beginning of a new uptrend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "If a vertical count from a column with 7 Xs, using 3-box reversal and 1-point box size, starts from a low of 46, what is the price projection?",
    options: [
      "53",
      "60",
      "67",
      "74"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "When both vertical and horizontal counts can be used, vertical counts are particularly useful in which situation?",
    options: [
      "During extended consolidations",
      "At V-bottoms where there is minimal consolidation",
      "When the base is very wide",
      "Only in downtrends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "According to the material, what is the fundamental purpose of price projections in point-and-figure analysis?",
    options: [
      "To provide exact price targets",
      "To guarantee profitable trades",
      "To help determine if there is sufficient potential to commit capital and frame risk/reward",
      "To identify the exact top or bottom of a move"
    ],
    correct: 2,
    hasImage: false
  }
];
