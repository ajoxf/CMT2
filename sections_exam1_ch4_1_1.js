const questions = [
  {
    id: 1,
    question: "According to Richard W. Schabacker, what are the three critical questions a trader must answer before taking a position?",
    options: [
      "When to enter, when to exit, and what size position to take",
      "When the price move started, which direction prices should move, and how far the movement can carry",
      "What pattern is forming, what is the volume, and what is the trend",
      "What is the risk, what is the reward, and what is the probability"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is Schabacker's conclusion about price target calculations derived from classical chart patterns?",
    options: [
      "They are highly reliable and should be followed strictly",
      "They work only with head and shoulders patterns",
      "No reliance can be placed in any of the theories - they should be used as guidelines, not rules",
      "They are accurate only on semi-log scale charts"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "Why does the material advocate for using semi-log scale for charting over linear scale?",
    options: [
      "It makes patterns easier to identify visually",
      "Breakdowns and breakouts occur much earlier, and it allows for better long-term trend analysis",
      "It is required by Edwards and Magee",
      "It shows volume more accurately"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "According to Edwards and Magee's research on flags and pennants, how do advances compare to declines in terms of distance traveled?",
    options: [
      "Advances and declines travel equal distances",
      "Advances generally go farther than the preceding move, whereas declines may not carry quite so far",
      "Declines generally go farther than advances",
      "There is no consistent pattern between advances and declines"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "For bearish chart patterns, what measurement approach generates conservative price targets?",
    options: [
      "Measuring in points or dollars",
      "Measuring using Fibonacci ratios",
      "Measuring using percentage changes",
      "Measuring using ATR multiples"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 6,
    question: "How is the price target calculated for a Head and Shoulders Top pattern?",
    options: [
      "Add the depth from head to neckline to the neckline level",
      "Subtract the percentage distance from the head to neckline from the neckline",
      "Multiply the neckline by the pattern width",
      "Subtract twice the depth from the neckline"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "In the Hilong example with the smaller H&S top, the depth from head to neckline was approximately 22%. With a neckline at $5.4, what was the calculated price target?",
    options: [
      "$3.8",
      "$4.2",
      "$4.6",
      "$5.0"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "For a Head and Shoulders Bottom pattern, how should the price target be measured for upward moves?",
    options: [
      "In percentage changes from the neckline",
      "In points or dollars rather than percentage changes",
      "Using Fibonacci extensions",
      "Using twice the pattern depth"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What was Edwards and Magee's method for measuring price objectives for symmetrical triangles?",
    options: [
      "Measure the widest point and project it from the breakout",
      "Draw from the top of the first rally to the bottom boundary, creating a line sloping away from the pattern",
      "Use the 3% rule from the apex",
      "Double the base width of the triangle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "How does the modern classical chartist approach differ from Edwards and Magee's method for symmetrical triangles?",
    options: [
      "Modern chartists don't use triangles for targets",
      "Modern chartists take the depth at the widest point and add it to the breakout level",
      "Modern chartists use only percentage measurements",
      "Modern chartists measure from the apex instead"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "In the China United Network Communications example, the symmetrical triangle had a depth of $1.5 at its widest point with a breakout at $5.6. What was the modern method price target?",
    options: [
      "$6.5",
      "$6.8",
      "$7.1",
      "$7.5"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "For ascending and descending triangles, how is the price target calculated?",
    options: [
      "Using the same method as symmetrical triangles",
      "Measuring the depth at the widest point and adding/subtracting from the breakout level",
      "Using the 3% rule from the horizontal boundary",
      "Doubling the pattern duration"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "In the Delivery Hero descending triangle example with an 11-month pattern, the depth was 31%. With a breakdown at $100, what was the price target?",
    options: [
      "$65",
      "$69",
      "$75",
      "$80"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "According to Richard W. Schabacker, what can be expected when a chart pattern is larger and clearer?",
    options: [
      "The pattern is less reliable",
      "The more extensive the movement of prices we may expect following its completion",
      "The pattern will fail more often",
      "The timeframe should be shortened"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "With tight and lengthy chart patterns like rectangles, price can be expected to extend how many times the initial price target calculation?",
    options: [
      "1 to 1.5 times",
      "2 to 3 times",
      "4 to 5 times",
      "5 to 10 times"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "In the HarborOne Bancorp example, the 17-month rectangle had a depth of 15% with a breakdown at $12.5. What was the initial price target?",
    options: [
      "$10.0",
      "$10.6",
      "$11.0",
      "$11.5"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "For flag and pennant patterns, where is the first measurement taken to calculate price targets?",
    options: [
      "From the beginning of the trend to the flag formation",
      "From where price leaves the previous congestion to the peak of the flag/pennant",
      "From the lowest point to the highest point of the flag",
      "From the 50-day moving average to the breakout"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What percentage did Edwards and Magee suggest as the trigger for a breakout confirmation?",
    options: [
      "1% daily close",
      "2% daily close",
      "3% daily close",
      "5% daily close"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "What is the main problem with using the 3% breakout confirmation rule for higher-priced stocks?",
    options: [
      "It's too conservative",
      "It results in acting too late following a breakout",
      "It generates too many false signals",
      "It doesn't work on semi-log charts"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "For a $600 stock using the 3% breakout rule, at what price would breakout confirmation occur?",
    options: [
      "$603",
      "$612",
      "$618",
      "$624"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What alternative method is suggested for confirming breakouts that adjusts for the instrument's daily volatility?",
    options: [
      "Standard deviation multiples",
      "Bollinger Band width",
      "Average True Range (ATR) multiples",
      "Volume-weighted measurements"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "In the Franco-Nevada Corp H&S bottom example, using the 3% rule with a neckline at $172.8, what would be the breakout confirmation level?",
    options: [
      "$175.50",
      "$177.98",
      "$180.04",
      "$182.50"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "In the Franco-Nevada example using the 3% rule, what was the calculated reward-to-risk ratio when using the previous day's low as a stop-loss?",
    options: [
      "0.54",
      "0.84",
      "1.20",
      "1.50"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "What constitutes a favorable reward-to-risk ratio that makes a trade worthwhile?",
    options: [
      "0.5 or higher",
      "1.0 or higher",
      "1.5 or higher (potential profit is 150% of potential loss)",
      "2.0 or higher"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "How can traders improve the reward-to-risk ratio without changing the chart pattern or price target?",
    options: [
      "By waiting longer for confirmation",
      "By acting on the breakout earlier, applying a tighter stop-loss, or both",
      "By increasing position size",
      "By using leverage"
    ],
    correct: 1,
    hasImage: false
  }
];
