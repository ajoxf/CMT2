const questions = [
  {
    id: 1,
    question: "According to the Presidential cycle pattern, during which years does the stock market tend to show the STRONGEST performance?",
    options: [
      "First year and mid-term election year",
      "Pre-election year and election year",
      "Mid-term election year and pre-election year",
      "Election year and first year of new term"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "The four-year cycle discussed in the material more closely approximates which of the following periodicities?",
    options: [
      "A 200-week cycle",
      "A 3.5-year or 180-week cycle",
      "A 4.5-year or 240-week cycle",
      "A 3-year or 156-week cycle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "Based on the 180-week cycle analysis presented, which of the following market peaks were correctly identified by this cycle?",
    options: [
      "1987, 1994, and 2015",
      "2000, 2007, and late 2021",
      "1998, 2011, and 2018",
      "2003, 2013, and 2020"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "During the pre-COVID crash from February 19 to March 23, 2020, the S&P 500 demonstrated what price-time relationship?",
    options: [
      "A 50% decline in 50 days (1x1 ratio)",
      "A 33% decline in 33 calendar days (1x1 ratio)",
      "A 25% decline in 50 days (1x2 ratio)",
      "A 40% decline in 20 days (2x1 ratio)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "W.D. Gann's 'Gann Fans' are designed to measure which of the following relationships?",
    options: [
      "Only one unit of price per unit of time",
      "One, two, three, and four units of price per unit of time and vice versa",
      "Exclusively Fibonacci ratios of price to time",
      "Only inverse relationships of time to price"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What was the significance of the 61.8% Fibonacci retracement level during the March 2020 S&P 500 bottom?",
    options: [
      "It precisely marked the actual bottom at 2,097",
      "It suggested a potential target around 2,097, approximately 100 points below the actual bottom",
      "It indicated the market would fall another 38.2% from the bottom",
      "It had no relevance as the market bottomed exactly at this level"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "In the February-March 2020 decline example, what was the duration relationship between the initial decline and the final decline to the bottom?",
    options: [
      "The final decline was three times the initial 9-day decline",
      "Both declines were equal at 9 days each",
      "The final decline was approximately double the initial 9-day decline at 19 days",
      "The final decline was 27 days, exactly triple the initial decline"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "According to the material, what critical factor explains why the S&P 500 bottomed on March 23, 2020, despite violating December 2018 lows?",
    options: [
      "Strong fundamental economic data supported the bottom",
      "Federal Reserve intervention guaranteed a bottom",
      "Price and time confluence (33% decline in 33 days) resulted in the bottom",
      "The 50-day moving average provided critical support"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "Based on the 180-week cycle projection through 2026, what market behavior was suggested for late 2024 into early 2025?",
    options: [
      "A major bear market decline throughout 2024-2025",
      "Consolidation in late November-December 2024, followed by a rally into spring/summer 2025",
      "Continuous rally through all of 2024 and 2025",
      "Immediate correction starting in early 2024"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "Which of the following best describes Mark Twain's perspective on cycles as quoted in the material?",
    options: [
      "Cycles are random and unpredictable phenomena",
      "Cycles in nature have no bearing on human affairs",
      "Everything that has happened must happen again at regular periods, suggesting nature's periodicity extends to earthly affairs",
      "Cycles only apply to astronomical events, not markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "According to the material, cycles are best defined as:",
    options: [
      "Random fluctuations in market prices",
      "Rhythms that repeat with predictable regularity",
      "Unpredictable patterns influenced solely by news events",
      "Linear progressions without repetition"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "Which pioneers in cycle analysis are specifically mentioned in the material as widely recognized for educating the public on forces that shape events?",
    options: [
      "Benjamin Graham, Warren Buffett, and Peter Lynch",
      "Clement Juglar, Edward Dewey, J.D. Hurst, and W.D. Gann",
      "Charles Dow, Ralph Nelson Elliott, and Richard Wyckoff",
      "John Murphy, Martin Pring, and Steve Nison"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "According to the material, the success of cycle analysis has helped to refute which financial market hypothesis?",
    options: [
      "The efficient market hypothesis for all timeframes",
      "The random-walk hypothesis for short- and long-term stock price movements",
      "The dividend discount model",
      "The capital asset pricing model"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "Why does the material suggest that economic indicators like rising GDP and low unemployment are 'dubious at best' for explaining rising cycles?",
    options: [
      "Economic data is always inaccurate",
      "These factors don't reliably correlate with cyclical peaks and troughs in markets",
      "GDP and unemployment are not measured correctly",
      "Cycles only depend on astrological factors"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "Edward Dewey's approach to cycle analysis emphasized which of the following?",
    options: [
      "Ignoring historical data in favor of current sentiment",
      "A systematic approach to analyzing historical data to identify repeating patterns",
      "Exclusive focus on short-term trading patterns",
      "Random selection of entry and exit points"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "J.D. Hurst's concept of the 'fractal nature' of market cycles suggests that:",
    options: [
      "Only long-term cycles are relevant for analysis",
      "Patterns observed over short periods can reflect longer-term cycles at different time scales",
      "Market cycles never repeat at different timeframes",
      "Fractals are irrelevant to financial markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "What does a Hurst Exponent greater than 0.5 indicate according to J.D. Hurst's work?",
    options: [
      "Mean reversion behavior",
      "Random walk behavior",
      "Trending behavior",
      "Market inefficiency only"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "W.D. Gann's theory emphasized that market movements follow which principle?",
    options: [
      "Purely random events with no predictable patterns",
      "Natural laws and patterns influenced by time and price",
      "Only fundamental analysis factors",
      "Exclusively psychological factors with no mathematical basis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "In W.D. Gann's methodology, what significance does the 45-degree angle hold?",
    options: [
      "It has no particular significance in his work",
      "It represents only resistance levels, never support",
      "It represents support and resistance levels where prices often revert over time",
      "It only applies to commodity markets, not stocks"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "Which unconventional element did W.D. Gann incorporate into his market cycle analysis?",
    options: [
      "Only earnings reports and GDP data",
      "Astrological principles and celestial movements",
      "Exclusively central bank policies",
      "Social media sentiment only"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "Tom DeMark's Sequential Indicator is designed to identify what market condition?",
    options: [
      "Only bullish continuation patterns",
      "Potential price exhaustion points by tracking consecutive closing direction",
      "Long-term secular trends only",
      "Daily volume patterns exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "How does Tom DeMark's Combo Indicator differ from his Sequential Indicator?",
    options: [
      "It uses more periods and is slower to signal",
      "It focuses on fewer periods and can be used in more volatile markets for quicker signals",
      "It only works in bear markets",
      "It ignores price action completely"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "According to the material, when extrapolating the 180-week cycle forward from 2024, what possible scenario was suggested for 2026?",
    options: [
      "Continuous bull market throughout 2026",
      "A possible larger market correction into 2026",
      "Guaranteed market stability with no volatility",
      "Immediate market crash at the start of 2026"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "In practical application of price and time analysis, what was the key factor that prevented the March 2020 S&P 500 bottom from reaching the 61.8% Fibonacci retracement?",
    options: [
      "Government stimulus was announced exactly at that level",
      "The 1x1 price-time confluence (33% in 33 days) took precedence over the absolute Fibonacci retracement",
      "December 2018 lows provided insurmountable support",
      "The 200-day moving average halted the decline"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What limitation of cycle analysis is implied when the material states 'it is rare that these cycles will always coincide perfectly with all major price movements'?",
    options: [
      "Cycles are completely useless for market timing",
      "Cycles should be used in combination with other tools rather than as standalone indicators",
      "Only one cycle matters in market analysis",
      "Price movements are entirely random"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "According to J.D. Hurst's work, what does a Hurst Exponent of less than 0.5 suggest?",
    options: [
      "Strong trending behavior",
      "Market crash is imminent",
      "Mean reversion behavior",
      "Random walk with no predictability"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "In the context of the Presidential cycle, which year typically shows the WEAKEST performance?",
    options: [
      "The election year",
      "The pre-election year",
      "The first year of a new presidential term",
      "The second year (mid-term election year)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "When applying Gann's price-time analysis to the COVID crash, why was March 23, 2020 specifically identified as the bottom day despite markets being closed on Sunday?",
    options: [
      "It was arbitrary and had no significance",
      "The 33-day count from February 19 landed on March 23, which was a Monday after the weekend",
      "It was the 50th trading day from the peak",
      "The Federal Reserve met on that specific day"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What is the primary critique of using fundamental factors (GDP, unemployment, valuations) to predict cyclical peaks according to the material?",
    options: [
      "Fundamental data is always falsified",
      "These factors are difficult reasons to expect peaks and don't reliably predict cyclical turning points",
      "Only technical analysis matters, fundamentals are irrelevant",
      "Fundamental analysis always predicts tops perfectly"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "In practical implementation, if a trader observes an initial 10-day decline followed by a bounce, and wants to apply the same price-time methodology used in the COVID example, what might they reasonably project for the next decline phase?",
    options: [
      "Exactly 10 days again with no variation possible",
      "Approximately 20 days (double the initial decline duration) as a potential target",
      "5 days (half the initial decline)",
      "The concept cannot be applied to future scenarios"
    ],
    correct: 1,
    hasImage: false
  }
];
