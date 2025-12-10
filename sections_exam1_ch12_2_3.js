const questions = [
  {
    id: 1,
    question: "What does an R-Multiple measure of 0.1 indicate about a trading strategy?",
    options: [
      "The strategy is highly profitable",
      "The relationship between stop and risk is poor, with too much risk being accepted per trade",
      "The strategy has optimal risk management",
      "The correlation with the benchmark is 0.1"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "From a Dow Theory perspective, why should stops be used in trading?",
    options: [
      "To maximize leverage",
      "To exit when a secondary trend pullback becomes a new primary trend in the opposite direction",
      "To comply with regulatory requirements",
      "To increase the number of trades"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What are the two main types of stops in trading?",
    options: [
      "Entry stops and exit stops",
      "Fixed stops and trailing stops",
      "Profit stops and loss stops",
      "Time stops and price stops"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What is the primary purpose of fixed stops?",
    options: [
      "To lock in profits as they accumulate",
      "To be set at entry and remain unchanged, acting as a safety net to stop losses if breached",
      "To follow the market higher",
      "To maximize position size"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "Where do traders typically position their price stops?",
    options: [
      "At random levels to avoid predictability",
      "At prior support and resistance levels, as a breach would signify a trend change",
      "Always at round numbers",
      "At the entry price"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "How is a percent stop level calculated for a fixed stop?",
    options: [
      "Based on the portfolio's total value",
      "Defined by the maximum loss the trader is willing to accept (e.g., 20% stop on $100 = $80 level)",
      "As a percentage of the benchmark return",
      "Using the ATR calculation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What is the purpose of time stops in a trading strategy?",
    options: [
      "To comply with exchange regulations",
      "To exit trades after a period of time, preventing capital from languishing in non-performing positions",
      "To maximize holding periods",
      "To reduce transaction costs"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "When would a time stop be particularly useful based on signal testing results?",
    options: [
      "When signals perform poorly initially",
      "When entry rules show amazing performance for first 10 days then flatten, releasing capital for new signals",
      "When the market is volatile",
      "When the strategy has high drawdowns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What is a key characteristic of trailing stops?",
    options: [
      "They remain fixed once set",
      "They follow the market as trades become profitable, typically moving only in positive direction (ratchet effect)",
      "They are always set at 10% below entry",
      "They are only used for short positions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "How does a trailing percent stop work when price moves favorably?",
    options: [
      "It remains at the original level",
      "The stop updates to the security's price minus the percentage, never decreasing in value",
      "It moves to break-even",
      "It is removed entirely"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "If you enter at $100 with a 20% trailing stop and price moves to $140, what is the new stop level?",
    options: [
      "$80",
      "$100",
      "$112",
      "$120"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "Why would a volatility stop be preferable to a fixed percentage stop across different securities?",
    options: [
      "It's easier to calculate",
      "A fixed percentage may be too tight for high volatility stocks or too loose for low volatility stocks",
      "It eliminates the need for position sizing",
      "It guarantees profitability"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What is the most common volatility stop calculation?",
    options: [
      "One-ATR stop",
      "Two-ATR stop, where level is set to twice the ATR for that security",
      "Three-ATR stop",
      "Half-ATR stop"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "How does an equity stop differ from a percent trailing stop?",
    options: [
      "It tracks individual positions only",
      "It tracks overall strategy value and monitors equity drawdown, exiting all positions if threshold is breached",
      "It only applies to long positions",
      "It cannot be automated"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "What is the purpose of profit targets in trading?",
    options: [
      "To maximize losses",
      "To exit a trade (or portion) once a profit level has been reached",
      "To delay exit signals",
      "To increase position size"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "In the RRG strategy results with a 30% trailing stop, what happened to annual volatility?",
    options: [
      "It increased from 22.5% to 30%",
      "It remained unchanged",
      "It decreased from 22.5% to 17.5%",
      "It doubled"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "What was the impact of adding a 30% trailing stop on maximum drawdown in the RRG strategy?",
    options: [
      "It increased from 40% to 64.3%",
      "It remained at 64.3%",
      "It decreased from 64.3% to 40%",
      "It was eliminated entirely"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "Why did the number of trades increase from 760 to 907 when stops were added?",
    options: [
      "The entry rules became more aggressive",
      "Funds from stopped-out trades were released and used for new opportunities",
      "The holding period decreased",
      "More securities were added to the universe"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "What happened to the Max Adverse Excursion when the 30% stop was added?",
    options: [
      "It increased to -104%",
      "It remained the same",
      "It decreased from -89.8% to -24.3% due to stops exiting trades below 30%",
      "It became positive"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "After adding stops, the win percent decreased from 52.5% to 47.9%. Why is this acceptable?",
    options: [
      "It's never acceptable for win rate to decrease",
      "It's okay if the size of winners is bigger than losers, which it was",
      "Win percent doesn't matter at all",
      "The strategy was abandoned"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What is data mining in the context of quantitative analysis?",
    options: [
      "Using software to analyze data",
      "Extensively searching through data to find patterns that may not be genuinely predictive or meaningful",
      "Collecting market data from exchanges",
      "Storing historical price information"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "According to Fabozzi, Focardi, and Kolm (2010), what is the main risk of data mining?",
    options: [
      "It requires expensive software",
      "It can result in strategies that appear successful in backtests but fail in real-world applications",
      "It takes too much time",
      "It violates exchange regulations"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What did Bailey et al. (2014) warn about extensive searching in backtesting?",
    options: [
      "It always improves results",
      "The more we search, the greater the probability of finding something that is not really there",
      "It guarantees future profitability",
      "It eliminates the need for stops"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "In an optimization setup for a 50-period SMA starting at 25, ending at 75 with a step of 5, how many tests would be run?",
    options: [
      "5 tests",
      "10 tests",
      "11 tests",
      "15 tests"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "If each parameter in an optimization has 10 steps and you're optimizing 3 parameters, how many total tests are required?",
    options: [
      "30 tests",
      "100 tests",
      "1,000 tests",
      "10,000 tests"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "If optimizing 4 parameters with 10 steps each, taking 1 minute per test, how long to complete?",
    options: [
      "40 minutes",
      "4 hours",
      "7 days",
      "70 days"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "What is overfitting in quantitative strategy development?",
    options: [
      "Using too many securities in the portfolio",
      "Fitting parameters so precisely to historical data that the strategy only works on that specific data",
      "Having too many entry rules",
      "Using excessive leverage"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "Using the plaster mask analogy, what does a properly fitted strategy represent?",
    options: [
      "A mask molded to every facial contour (overfitted)",
      "A mask hanging loosely (underfitted)",
      "The middle ground: a mask that captures key features without overfitting to one person",
      "No mask at all"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "What is 'robustness' in the context of optimization?",
    options: [
      "The strategy has high returns",
      "Parameters near the optimal value should yield similar results (e.g., 9, 10, 11-period SMAs)",
      "The strategy never loses money",
      "The strategy works on all time frames"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "What would indicate a lack of robustness in optimization results?",
    options: [
      "All parameter values produce similar results",
      "A 10-period SMA yields wildly better results than all others, suggesting a lucky trade rather than parameter significance",
      "The strategy has consistent returns",
      "Multiple parameters work equally well"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 31,
    question: "According to Dr. Andrew Lo's research presented at the 2022 CMTA Symposium, when does optimization provide benefit?",
    options: [
      "Only when applied to model parameters",
      "Never in any circumstance",
      "When applied to portfolio inputs like position size and stops, but not model parameters",
      "Always, regardless of application"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 32,
    question: "In the final strategy update, what three adjustments were made?",
    options: [
      "Added more indicators, changed universe, increased test period",
      "Removed ATR exit, added 30% trailing stop, increased position size from 4% to 5%",
      "Changed to weekly data, removed all stops, added filters",
      "Modified entry rules, changed benchmark, added leverage"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 33,
    question: "What happened to total return after the strategy updates?",
    options: [
      "It decreased from 719% to 561%",
      "It remained unchanged",
      "It increased from 561% to 719%",
      "It turned negative"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 34,
    question: "How did the average R-Multiple change in the updated strategy compared to the version with just the 30% stop?",
    options: [
      "It decreased from 0.7 to 0.1",
      "It remained at 0.1 in both versions",
      "It increased from 0.1 to 0.7",
      "It reached the target of 1.0R"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 35,
    question: "What was the target R-Multiple value mentioned in the strategy update?",
    options: [
      "0.5R",
      "1.0R",
      "1.5R",
      "2.0R"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "What happened to the profit factor in the final strategy update?",
    options: [
      "It decreased from 4.25 to 2.14",
      "It remained unchanged",
      "It increased from 2.14 to 4.25",
      "It dropped below 1.0"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 37,
    question: "How did gross loss change in the updated strategy?",
    options: [
      "It increased significantly",
      "It remained the same",
      "It decreased from -$4,913,581 to -$2,214,062",
      "It turned into a profit"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 38,
    question: "What happened to the number of trades in the final update compared to the stop-only version?",
    options: [
      "It increased from 275 to 907",
      "It remained at 907",
      "It decreased from 907 to 275",
      "It doubled"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 39,
    question: "What was identified as the main issue with the updated strategy?",
    options: [
      "Too many losing trades",
      "Not getting enough trading opportunities/trades",
      "Excessive volatility",
      "Poor risk management"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 40,
    question: "What happened to the trading expectancy in the final strategy update?",
    options: [
      "It decreased significantly",
      "It remained unchanged",
      "It increased from $6,197.76 to $26,183.62",
      "It became negative"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 41,
    question: "Why did the minimum return in the final update stay around -30%?",
    options: [
      "Due to poor entry signals",
      "Because the stop was set to 30%, this is the expected maximum percentage loss",
      "Due to high volatility",
      "Because of slippage"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "What did the equity plot in the final update show about cash utilization?",
    options: [
      "Cash was never used",
      "All cash was always invested",
      "Even with fewer trades, cash available was being better utilized",
      "Cash utilization decreased"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 43,
    question: "If a trailing stop is sometimes called a 'ratchet stop', what does this metaphor emphasize?",
    options: [
      "It can move in both directions",
      "It can only move in one direction (upward for longs)",
      "It is mechanical",
      "It is automatic"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 44,
    question: "What is the relationship between the number of optimization dimensions and computational requirements?",
    options: [
      "Linear relationship",
      "Inverse relationship",
      "Exponential relationship - tests rise exponentially with each added dimension",
      "No relationship"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 45,
    question: "When is it rare for optimization results to be repeated in live trading?",
    options: [
      "When the strategy is robust",
      "When the strategy has been overfitted through optimization",
      "When using proper position sizing",
      "When stops are employed"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 46,
    question: "What is the key issue with selecting the parameter set that yielded the best historical return?",
    options: [
      "It takes too much time",
      "You have 'fit' the parameters to the test data, creating overfitting",
      "It's too simple",
      "It violates trading rules"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 47,
    question: "In the stop comparison, why did maximum drawdown exceed 30% when using a 30% trailing stop?",
    options: [
      "The stop was incorrectly calculated",
      "Securities can gap past the stop level",
      "The stop was never triggered",
      "The strategy had too many positions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 48,
    question: "What does it indicate when the SQN decreased from 5.2 to 4.4 after adding stops?",
    options: [
      "The strategy got worse",
      "It's a more realistic number; high SQN without stops was due to low R-value variability and high trade count",
      "The stops were set incorrectly",
      "The strategy should be abandoned"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "What is the goal when searching for optimal parameters in strategy development?",
    options: [
      "Find parameters that yield the absolute best historical returns",
      "Find parameters that yield good results no matter when used or on what data universe",
      "Find parameters that minimize the number of trades",
      "Find parameters that maximize the number of signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 50,
    question: "Why would traders commonly look at support and resistance levels when setting price stops?",
    options: [
      "Because these levels are always round numbers",
      "Because a breach of previous support/resistance levels would signify a change in trend",
      "Because these levels maximize profit",
      "Because regulations require it"
    ],
    correct: 1,
    hasImage: false
  }
];
