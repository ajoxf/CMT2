const questions = [
  {
    id: 1,
    question: "The Arms Index (TRIN) is calculated using which formula?",
    options: [
      "(Advancing stocks / Declining stocks) × (Up volume / Down volume)",
      "(Advancing stocks / Up volume) / (Declining stocks / Down volume)",
      "(Up volume / Down volume) - (Advancing stocks / Declining stocks)",
      "(Advancing stocks + Up volume) / (Declining stocks + Down volume)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the neutral value for the Arms Index (TRIN)?",
    options: [
      "0",
      "0.5",
      "1",
      "2"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "A TRIN reading of 0.65 indicates:",
    options: [
      "Bearish conditions with heavier volume in declining stocks",
      "Neutral market conditions",
      "Bullish conditions with heavier volume per advancing issue than declining volume per declining issue",
      "Market equilibrium"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "When the Arms Index (TRIN) reading is greater than 1, what does this suggest?",
    options: [
      "Bullish market with strong advancing volume",
      "Bearish conditions with heavier declining volume relative to declining issues",
      "Neutral market with balanced volume",
      "Overbought conditions requiring caution"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "The McClellan Oscillator is calculated as the difference between which two exponential moving averages of net advancers?",
    options: [
      "10-day EMA and 20-day EMA",
      "19-day EMA and 39-day EMA",
      "50-day EMA and 200-day EMA",
      "5-day EMA and 35-day EMA"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "The McClellan Oscillator typically oscillates between what range?",
    options: [
      "0 and 100",
      "-50 and +50",
      "+100 and -100",
      "-200 and +200"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "What is the primary use of the McClellan Oscillator?",
    options: [
      "To identify long-term secular trends",
      "As an overbought or oversold indicator",
      "To measure volume momentum exclusively",
      "To predict exact market bottoms"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "When the McClellan Oscillator shows extreme readings above +100 or below -100, what can this potentially indicate?",
    options: [
      "The indicator is malfunctioning",
      "Market reversal is imminent",
      "A powerful surge in momentum and potentially the start of a more sustainable trend",
      "The market will remain range-bound"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "The McClellan Summation Index is best described as:",
    options: [
      "A 19-day average of the McClellan Oscillator",
      "A cumulative total of McClellan Oscillator readings, similar to an advance-decline line",
      "The reciprocal of the McClellan Oscillator",
      "A momentum indicator for individual stocks"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What is the primary advantage of the McClellan Summation Index over the McClellan Oscillator?",
    options: [
      "It provides more frequent trading signals",
      "It is easier to calculate",
      "It is a better long-term indicator more suited to identifying cyclical tops and bottoms",
      "It works exclusively in bull markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "The Zweig Breadth Thrust Indicator is calculated as:",
    options: [
      "A 10-day MA of (Advancers / (Advancers + Decliners))",
      "A 20-day MA of (Up volume / Total volume)",
      "The ratio of new highs to new lows",
      "A 10-day MA of the Arms Index"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 12,
    question: "A Zweig Breadth Thrust signal occurs when the indicator:",
    options: [
      "Crosses above 50%",
      "Moves from under 40% to over 62%",
      "Reaches 80% or higher",
      "Falls below 30%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "Zweig Breadth Thrust signals are characterized as:",
    options: [
      "Very common, occurring monthly",
      "Moderately frequent in all market conditions",
      "Fairly rare and commonly found at the start of meaningful (often cyclical) advances",
      "Only reliable in bear markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "According to Paul Desmond's Dow Award-winning research on Lowry's Reversals, bear market bottoms are characterized by:",
    options: [
      "A single 90% up day",
      "First a selling panic, then a buying panic",
      "Gradually declining volume over months",
      "A breach of the 200-day moving average"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "In Lowry's Reversals methodology, what identifies the selling panic?",
    options: [
      "A breach of major support levels",
      "Three consecutive down days",
      "90% declining and down volume days",
      "The TRIN reaching 2.0 or higher"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "After identifying a selling panic using Lowry's methodology, what should technicians look for to confirm a bottom?",
    options: [
      "A golden cross of moving averages",
      "Either a 90% advancing and up volume day, or several 80% advancing and up volume days within a narrow span of time",
      "The McClellan Oscillator crossing above zero",
      "New 52-week highs exceeding new lows"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "The 40:1 Ratio indicator measures:",
    options: [
      "The ratio of advancing to declining stocks",
      "The ratio of up volume to down volume",
      "The number of new lows to new highs (New lows / New highs)",
      "The ratio of market cap to trading volume"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "The 40:1 Ratio indicator is described as binary in nature, meaning:",
    options: [
      "It uses only two data inputs",
      "It gives either a 'yes' or 'no' reading",
      "It only works in two types of markets",
      "It requires two confirmations"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "The 40:1 Ratio often flashes 'yes' in concert with:",
    options: [
      "Zweig Breadth Thrust signals",
      "90% up days",
      "90% down days, when new lows outpace new highs by 40:1 or more",
      "Hindenburg Omen signals"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "The High-Low Logic Index, developed by Norman Fosback, is calculated as:",
    options: [
      "The greater of new highs or new lows divided by total issues",
      "The lesser of new highs and new lows divided by total issues traded",
      "New highs minus new lows",
      "The absolute value of (new highs - new lows) / total issues"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What is the typical reading level for the High-Low Logic Index?",
    options: [
      "Between 10% and 20%",
      "Around 50%",
      "Usually very low, often less than 1%",
      "Typically above 5%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "The goal of the High-Low Logic Index is to identify:",
    options: [
      "The strongest trending markets",
      "When the market becomes 'split' with large numbers of both new 52-week highs and lows",
      "Overbought conditions exclusively",
      "The optimal time to buy index funds"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "The Hindenburg Omen was designed to:",
    options: [
      "Identify optimal buying opportunities",
      "Measure market volatility",
      "Forewarn of potential market crashes",
      "Confirm ongoing bull market trends"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "For a Hindenburg Omen signal to flash, which condition regarding the McClellan Oscillator must be met?",
    options: [
      "The McClellan Oscillator must be above +100",
      "The McClellan Oscillator must be negative, suggesting weak breadth",
      "The McClellan Oscillator must be rising",
      "The McClellan Oscillator must cross its signal line"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "Which of the following is NOT a condition required for the Hindenburg Omen to flash?",
    options: [
      "Stocks are in an uptrend with a rising 50-day average",
      "The McClellan Oscillator is negative",
      "The high-low logic indicator is over 2.2%",
      "The TRIN must be below 0.5"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 26,
    question: "According to the material on qualitative analysis, what does it suggest when the percentage of NYSE stocks above their 200-day average slips below 40% during a bull market?",
    options: [
      "This is a normal healthy correction",
      "Stocks are on increasingly weak footing technically and it's often an early warning of an impending bear market",
      "It's an optimal buying opportunity",
      "The indicator needs recalibration"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "In the seasonal market cycle analogy, 'fall days' are defined as:",
    options: [
      "Any day the market declines",
      "The first meaningful surge of new 52-week lows in an established bull market",
      "Days when volume declines significantly",
      "The period immediately after a market peak"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "What qualifies as an 'established' bull market when looking for 'fall days' warnings?",
    options: [
      "Any period when the market is above its 50-day average",
      "The first three months of a new uptrend",
      "Not the first year, at a minimum",
      "When the market has doubled from its lows"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "'Spring days' indicating emerging bull markets are defined by which two conditions?",
    options: [
      "New highs exceeding new lows and positive breadth thrust",
      "Percentage of stocks above their 50-day MA moving back above 80% AND percentage above 200-day MA moving back above 40%",
      "TRIN below 0.8 and McClellan Oscillator above +100",
      "90% up day followed by 80% up day"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "According to the material, what is the prudent approach when interpreting 'fall days' versus 'spring days'?",
    options: [
      "Wait for three fall days before acting, but only one spring day is needed",
      "Fall days and spring days require equal confirmation",
      "Be on watch for a major top after just one fall day, but wait for both spring day indicators before turning bullish",
      "Ignore fall days but act immediately on the first spring day"
    ],
    correct: 2,
    hasImage: false
  }
];
