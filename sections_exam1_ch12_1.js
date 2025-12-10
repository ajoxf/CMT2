const questions = [
  {
    id: 1,
    question: "According to the material, what percentage of trading system ideas typically make it into production for seasoned developers?",
    options: [
      "Less than 1%",
      "Approximately 5%",
      "Around 10%",
      "Between 15-20%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 2,
    question: "Which of the following is NOT listed as a common trading system objective?",
    options: [
      "Profitability",
      "Market timing perfection",
      "Risk management",
      "Consistency"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What is the target total annualized return for the Triple Trend model described in the material?",
    options: [
      "2-5%",
      "5-10%",
      "10-15%",
      "15-20%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "For the Triple Trend model, what is the maximum drawdown objective?",
    options: [
      "3%",
      "5%",
      "10%",
      "15%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "What is the acceptable profit factor range mentioned in the material?",
    options: [
      "1.0 to 5.0",
      "1.25 to 10.0",
      "1.5 to 15.0",
      "2.0 to 20.0"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "A profit factor greater than 10 most strongly suggests:",
    options: [
      "Excellent trading strategy",
      "Curve fitting",
      "Optimal diversification",
      "Perfect risk management"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What is the ideal Calmar ratio for the Triple Trend model?",
    options: [
      "100% or greater",
      "150% or greater",
      "200% or greater",
      "250% or greater"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "How is the Calmar ratio calculated?",
    options: [
      "Total profit divided by total loss",
      "Annualized returns divided by maximum drawdown",
      "Average win divided by average loss",
      "Winning trades divided by total trades"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "For a trend-following model, what is the typical winning percentage range?",
    options: [
      "10-20%",
      "30-50%",
      "60-70%",
      "80-90%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "What should the ratio of average win to average loss be for the Triple Trend model?",
    options: [
      "Equal to 1.0 or higher",
      "Equal to 1.5 or higher",
      "Equal to 2.0 or higher",
      "Equal to 3.0 or higher"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "Which trading model attempts to capitalize on sustained movements in asset prices by identifying trends?",
    options: [
      "Mean reversion model",
      "Scalping model",
      "Trend-following model",
      "Pairs trading model"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "Which trading model is based on the idea that prices tend to revert to their historical average over time?",
    options: [
      "Trend-following model",
      "Mean reversion model",
      "Arbitrage trading",
      "Scalping trading"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "Scalping trading is characterized by:",
    options: [
      "Long-term position holding",
      "High-frequency, short-term trades",
      "Low-frequency, high-value trades",
      "Market-neutral strategies only"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "Pairs trading involves:",
    options: [
      "Trading two different time frames",
      "Buying one asset and selling a correlated asset simultaneously",
      "Trading only during market pairs (open and close)",
      "Using two different technical indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "Arbitrage trading profits from:",
    options: [
      "Long-term trend movements",
      "Price differences across different markets or exchanges",
      "Mean reversion patterns",
      "High-frequency scalping"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "According to the material, what is fusion analysis?",
    options: [
      "Using only technical analysis",
      "Combining technical, fundamental, and quantitative approaches",
      "Merging two trading accounts",
      "Trading multiple markets simultaneously"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "In the sweet spot analysis table, which time interval produced the best Calmar ratio for TSLA?",
    options: [
      "30-minute",
      "60-minute",
      "120-minute",
      "15-minute"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the purpose of conducting entry/exit testing with random entries?",
    options: [
      "To test system speed",
      "To verify the effectiveness of exit strategies",
      "To increase trade frequency",
      "To reduce drawdowns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "What is the absolute minimum number of trades required for a go/no-go test?",
    options: [
      "10",
      "20",
      "30",
      "50"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "What is the ideal number of trades for validating a trading system?",
    options: [
      "30 or more",
      "50 or more",
      "75 or more",
      "100 or more"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 21,
    question: "What is the typical winning percentage for scalping models?",
    options: [
      "30-50%",
      "50-70%",
      "70-80%",
      "80-90%"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 22,
    question: "If a trading system has a maximum drawdown of 12% from testing and the target maximum acceptable drawdown is 20%, what is the maximum leverage?",
    options: [
      "1.25x",
      "1.50x",
      "1.67x",
      "2.00x"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 23,
    question: "According to the material, what impact do stops typically have on returns?",
    options: [
      "Always improve absolute returns",
      "Rarely improve returns during normal conditions but prevent catastrophic losses",
      "Always reduce returns substantially",
      "Have no impact on returns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "What is the primary reason to avoid overriding a fully vetted trading system during losing periods?",
    options: [
      "To maintain emotional discipline",
      "The system needs to take every trade to achieve long-term returns",
      "To avoid legal complications",
      "To reduce transaction costs"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "Which testing method typically produces the best-looking results but may not be achievable in real life?",
    options: [
      "Walk forward analysis",
      "Out-of-sample testing",
      "Historical backtesting",
      "Real-time analysis"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "In out-of-sample testing with 5 years of data, how many years are typically used for optimization?",
    options: [
      "1 year",
      "2 years",
      "3 years",
      "4 years"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "Walk forward analysis (WFA) involves:",
    options: [
      "Testing only on future data",
      "Optimizing on one segment, then testing on subsequent unseen data repeatedly",
      "Using all historical data at once",
      "Random selection of testing periods"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "What is a major advantage of walk forward analysis over standard backtesting?",
    options: [
      "Faster computation time",
      "Adapts to changing market conditions",
      "Requires less historical data",
      "Produces higher profit factors"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What is the major drawback of real-time analysis?",
    options: [
      "It is less accurate than backtesting",
      "It requires expensive software",
      "It can take weeks, months, or years to generate enough trades",
      "It cannot adapt to market changes"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "What is the consensus minimum number of trades needed for meaningful statistics in real-time analysis?",
    options: [
      "10-20",
      "20-30",
      "30-50",
      "50-100"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 31,
    question: "According to the material, exits have what impact compared to entries?",
    options: [
      "Less impact on profitability",
      "Equal impact on profitability",
      "Greater impact on profitability in most cases",
      "No measurable impact"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 32,
    question: "What does 'curve fitting' in trading systems refer to?",
    options: [
      "Creating smooth equity curves",
      "Over-optimization that produces unrealistic results",
      "Fitting stops to market curves",
      "Adjusting position sizes dynamically"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 33,
    question: "Which of the following is NOT one of the five common trading models discussed?",
    options: [
      "Trend-following",
      "Momentum trading",
      "Mean reversion",
      "Pairs trading"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "The most reliable trading strategies typically have profit factors in what range?",
    options: [
      "1 to 2",
      "3 to 5",
      "6 to 8",
      "10 to 15"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 35,
    question: "What is the primary purpose of diversification in trading systems?",
    options: [
      "To increase absolute returns only",
      "To reduce drawdowns and improve risk-adjusted returns",
      "To generate more trades",
      "To simplify system management"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "When conducting a sweet spot analysis, what two factors are primarily being balanced?",
    options: [
      "Speed and accuracy",
      "Returns and drawdowns",
      "Entries and exits",
      "Liquidity and volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 37,
    question: "If walk forward analysis does NOT produce positive results that meet objectives, what should you do?",
    options: [
      "Adjust objectives to match results",
      "Apply more leverage",
      "Discard the strategy and move on",
      "Test on different markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 38,
    question: "Why are slippage and commissions often overlooked but crucial to include in testing?",
    options: [
      "They are required by regulations",
      "They significantly impact actively traded systems",
      "They improve backtest appearance",
      "They reduce tax liability"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 39,
    question: "For trend-following models, the average winner divided by average loser typically:",
    options: [
      "Equals exactly 1.0",
      "Is less than 1.0",
      "Is greater than 1.0",
      "Varies randomly"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 40,
    question: "For mean reversion models, the average winner divided by average loser typically:",
    options: [
      "Is greater than 1.0",
      "Equals exactly 1.0",
      "Is less than 1.0",
      "Must be greater than 2.0"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 41,
    question: "What is the primary function of maximum drawdown in position sizing calculations?",
    options: [
      "It determines trade frequency",
      "It is the primary input to position sizing and leverage",
      "It sets stop-loss levels",
      "It defines profit targets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "When developing entry rules, what is the recommended approach regarding complexity?",
    options: [
      "Use as many parameters as possible for accuracy",
      "Keep it simple; if it can't be explained in plain English, it's too complex",
      "Always use at least 10 parameters",
      "Complexity doesn't matter as long as it works"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 43,
    question: "What is the danger of using too many parameters in a trading system?",
    options: [
      "Higher transaction costs",
      "Slower execution speed",
      "Increased likelihood of overfitting with little predictive value",
      "Reduced diversification"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 44,
    question: "According to the material, trading system objectives should be:",
    options: [
      "Vague to allow flexibility",
      "Measurable and specific",
      "Based on other traders' results",
      "Changed frequently"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 45,
    question: "Which statement about profit targets is most accurate according to the material?",
    options: [
      "They always improve absolute returns",
      "They should never be used",
      "They rarely improve returns but might improve risk-adjusted returns",
      "They are essential for all trading strategies"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 46,
    question: "What is an alternative way to achieve diversification besides trading uncorrelated assets?",
    options: [
      "Increasing position size",
      "Trading correlated assets with different strategies or time frames",
      "Using only one market",
      "Reducing the number of trades"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 47,
    question: "In the formula for maximum leverage (Target drawdown / Drawdown from tests), if target is 20% and tested drawdown is 8%, what is the maximum leverage?",
    options: [
      "1.5x",
      "2.0x",
      "2.5x",
      "3.0x"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 48,
    question: "How is profit factor calculated?",
    options: [
      "Net profit divided by number of trades",
      "Gross profit divided by gross loss",
      "Average win divided by average loss",
      "Total profit minus total loss"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "What happens to trading system success rates as you move from historical backtesting to out-of-sample to walk forward to real-time analysis?",
    options: [
      "Results typically improve",
      "Results typically stay the same",
      "Results typically become more realistic and often decline",
      "Results become completely unpredictable"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 50,
    question: "When replacing exits with a fixed bar exit (5-10 bars) during entry/exit testing, what is the primary purpose?",
    options: [
      "To increase trade frequency",
      "To reduce computational complexity",
      "To isolate and evaluate the effectiveness of entry signals",
      "To improve overall profitability"
    ],
    correct: 2,
    hasImage: false
  }
];

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
