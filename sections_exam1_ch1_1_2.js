const questions = [
  {
    id: 1,
    question: "Who is the author that articulated the Fractal Market Hypothesis (FMH)?",
    options: [
      "Andrew Lo",
      "Eugene Fama",
      "Edgar Peters",
      "Edson Gould"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 2,
    question: "In what year and publication did Edgar Peters first articulate the Fractal Market Hypothesis?",
    options: [
      "1977 in 'Findings & Forecasts' Newsletter",
      "1994 in 'Chaos and Order in the Capital Markets'",
      "2003 in 'Journal of Behavioral Finance'",
      "2022 in 'Fractal Market Cycles and Regimes'"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What was Edgar Peters's primary ambition in developing the FMH?",
    options: [
      "To replace technical analysis entirely",
      "To explain investor behavior in periods of crisis",
      "To prove the EMH is completely wrong",
      "To develop algorithmic trading strategies"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "According to Peters, what leads to periods of market uncertainty in the FMH?",
    options: [
      "Only fundamental news events",
      "Government regulation changes",
      "The combination of diverse investor behaviors and variable information sets",
      "High-frequency trading algorithms"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "What happens when enough investors perceive the market in dissimilar ways and disagree on what to do, according to the FMH?",
    options: [
      "The market becomes perfectly efficient",
      "Trading volume decreases significantly",
      "Price instability and volatility can increase",
      "All trends immediately reverse"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 6,
    question: "What key assumption does Peters argue is flawed about the EMH?",
    options: [
      "That historical data exists",
      "That investors make decisions based on an aggregate of all historical prices rather than differing information sets",
      "That markets are open to all participants",
      "That prices are quoted in real-time"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What does the FMH notion of 'memory associative' prices imply?",
    options: [
      "Prices only depend on the most recent trading session",
      "Future prices are data dependent on recent information AND cumulative data built into all historical price data",
      "Prices have no relationship to historical data",
      "Only professional investors can predict prices"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "What statistical tool was mentioned as being used to identify high and low risk periods in stock prices in FMH research?",
    options: [
      "Moving average convergence divergence (MACD)",
      "Relative strength index (RSI)",
      "Markov regime switching model",
      "Bollinger Bands"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "According to Edson Gould circa 1977, what does the utilities sector reflect to a greater extent than the industrials?",
    options: [
      "Economic growth rates",
      "The investment demand for stock",
      "Interest rate changes",
      "Government policy changes"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What does 'investor demand' imply in the context of supply and demand for securities?",
    options: [
      "An overall willingness to sell securities",
      "An overall willingness to buy securities, so much so that resulting orders are likely to increase the price",
      "A desire to hold securities without trading",
      "A preference for dividend-paying stocks only"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "What does the concept of supply in securities markets imply?",
    options: [
      "Investors are buying aggressively",
      "Markets are in equilibrium",
      "Investors have a quantity of securities they prefer to sell, likely to drive the price lower",
      "Trading volume is at historic lows"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "According to the curriculum, what is the relationship between 'correlation of returns in groups of related securities' and supply/demand?",
    options: [
      "There is no relationship between them",
      "Investors show supply or demand for similar securities, suggesting prices are not adjusting efficiently",
      "It only applies to commodity markets",
      "It proves the EMH is correct"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What does the mean reversion anomaly suggest investors may be able to predict?",
    options: [
      "All stocks will return to their IPO price",
      "Portfolios with the highest returns underperform, while those with worst returns outperform",
      "Only growth stocks will outperform",
      "Volatility always increases over time"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "How is mean reversion explained in terms of supply and demand?",
    options: [
      "High supply creates permanent undervaluation",
      "The desire to capture returns creates supply, while the desire to redeploy cash creates demand for undervalued shares",
      "Demand is always higher than supply",
      "Supply and demand have no effect on mean reversion"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "What does the 'underreaction to news' anomaly suggest about price trends?",
    options: [
      "Prices always reverse immediately after news",
      "News has no impact on prices",
      "Prices may predictably continue in trends following both good and bad news",
      "Only bad news creates trends"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "How is underreaction to news explained in the context of supply and demand?",
    options: [
      "News always creates immediate equilibrium",
      "Supply and demand have more influence at times, and investors may consider the news unimportant",
      "All investors react identically to news",
      "News only affects supply, never demand"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "What does the 'size effect' anomaly predict about small versus large stocks?",
    options: [
      "Large stocks always outperform small stocks",
      "Stock size has no impact on performance",
      "Small stocks outperform large stocks, even accounting for higher volatility",
      "Only mid-cap stocks generate alpha"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "How is the size effect explained in terms of supply and demand dynamics?",
    options: [
      "Large stocks have more supply",
      "Relative volume increases may trigger a recognition of improved demand",
      "Small stocks are always overpriced",
      "Size has no relationship to supply and demand"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "According to the P/E ratio (value investing) anomaly, what tends to predict greater outperformance?",
    options: [
      "Higher P/E scores",
      "Lower P/E scores",
      "P/E ratios above 50",
      "P/E ratios have no predictive value"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "How is the P/E ratio anomaly explained using supply and demand concepts?",
    options: [
      "High P/E stocks have more demand",
      "Low demand (or higher supply) for stocks over longer periods creates underpriced stocks",
      "P/E ratios are unrelated to supply and demand",
      "Only institutional demand matters"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What does the 'January effect' anomaly suggest?",
    options: [
      "Large cap stocks outperform early in the year",
      "Small cap stocks outperform early in the year",
      "All stocks decline in January",
      "The January effect only applies to bond markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "What supply/demand explanation is given for the January effect?",
    options: [
      "Supply is highest in January",
      "High demand for small cap stocks early in the year creates opportunities",
      "Demand decreases in January",
      "The effect is caused by regulatory changes"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "According to the 'patterns in volatility' anomaly, how do bear markets compare to bull markets in terms of volatility?",
    options: [
      "Bear markets are less volatile than bull markets",
      "Bear markets and bull markets have equal volatility",
      "Bear markets are more volatile than bull markets",
      "Volatility only occurs in sideways markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "How is the volatility pattern anomaly explained in terms of supply and demand?",
    options: [
      "Excess demand creates all volatility patterns",
      "Excess supply creates volatility, and volatility from excess demand is more likely to dissipate quickly",
      "Supply has no impact on volatility",
      "Volatility is randomly distributed"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "According to the patterns in volatility anomaly, when during the trading day is volatility typically higher?",
    options: [
      "During the middle of the trading day",
      "Volatility is constant throughout the day",
      "During the opening and closing minutes",
      "Only during earnings announcements"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "What type of analysis was mentioned in FMH research for analyzing stock markets?",
    options: [
      "Simple moving averages",
      "Fibonacci retracements",
      "Wavelet power spectra",
      "Elliott Wave theory"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "How many years of asset management experience does Edgar Peters have, according to the curriculum?",
    options: [
      "20 years",
      "30 years",
      "40 years",
      "50 years"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What do technical analysts and researchers need to thoroughly understand according to the conclusion?",
    options: [
      "Only the EMH",
      "The EMH and its challenges, specifically the AMH and FMH, among others",
      "Only fundamental analysis",
      "Quantitative finance exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "According to the conclusion, when are indicators such as moving averages, oscillators, and price envelope tools more likely to generate reliable sources of alpha?",
    options: [
      "During all market conditions equally",
      "Only in bull markets",
      "During times when known anomalies present themselves",
      "Only when volume is declining"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "What is the fundamental challenge mentioned regarding supply and demand in technical analysis?",
    options: [
      "Supply and demand don't exist in financial markets",
      "The finer details of cause, effect, and necessary quantities have eluded definition",
      "Supply and demand only apply to commodity markets",
      "Supply and demand are perfectly measurable"
    ],
    correct: 1,
    hasImage: false
  }
];
