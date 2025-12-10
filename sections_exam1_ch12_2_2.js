const questions = [
  {
    id: 1,
    question: "Why are exit rules more complex to test than entry rules in signal testing?",
    options: [
      "Exit rules require more computational power",
      "Exit signals are only applicable when they occur after entering a trade, requiring specific conditions",
      "Exit rules cannot be automated",
      "Exit rules are always subjective"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What are the two states that swing charts can have, making them ideal for trend identification?",
    options: [
      "Bullish and bearish",
      "Strong and weak",
      "Up and down",
      "Trending and ranging"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "According to Gann's swing chart rules, how many higher bars are required to change the swing direction to 'up'?",
    options: [
      "Two higher bars",
      "Three higher bars (higher top and higher bottom)",
      "Four higher bars",
      "Five higher bars"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What is a volatility swing?",
    options: [
      "A swing based on volume changes",
      "A swing that changes only when price moves more than a fixed number of ATRs from the previous top or bottom",
      "A swing based on market volatility index",
      "A swing that measures percentage price changes"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "In the exit strategy example, what volatility swing setting was used with Gann's trend rules?",
    options: [
      "Two ATRs",
      "Three ATRs",
      "Four ATRs",
      "Five ATRs"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What is the critical principle regarding stops mentioned in the material?",
    options: [
      "Stops should only be used in volatile markets",
      "Stops are optional for experienced traders",
      "Stops are critically important and should always be in place, regardless of test results",
      "Stops should only be used after optimization"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "Why should the first strategy test always be run WITHOUT stops?",
    options: [
      "Stops are not important initially",
      "Stops affect test results, and you need baseline results first to determine appropriate stop types",
      "Stops cannot be coded into testing software",
      "Stops are only added during live trading"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "What is the recommended starting position size for an equally weighted allocation strategy?",
    options: [
      "1-2% (50-100 securities)",
      "2-3% (33-50 securities)",
      "4-5% (20-25 securities)",
      "10% (10 securities)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "How many securities in a portfolio is generally accepted as well diversified?",
    options: [
      "10 to 15",
      "15 to 20",
      "20 to 25",
      "30 to 40"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "What does the equity plot (cumulative returns plot) display in strategy testing?",
    options: [
      "Only the value of holdings",
      "Only the cash balance",
      "The total value of the portfolio including both cash and holdings",
      "The benchmark performance only"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "In the strategy test example, what indicated that the S&P 500 index filter was preventing new trades?",
    options: [
      "The equity line was flat",
      "Large periods of growing yellow (cash) on the equity plot showing exits without new entries",
      "The number of trades exceeded expectations",
      "The drawdown was excessive"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "How many total trades were executed in the strategy test compared to the 1,800 signals identified?",
    options: [
      "450 trades",
      "907 trades",
      "1,200 trades",
      "1,800 trades"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What do rolling returns measure in strategy testing?",
    options: [
      "Future expected returns",
      "Returns calculated looking back by specific periods (monthly, quarterly, yearly) for every day in the test",
      "The rate of change in equity value",
      "Correlation with the benchmark"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "Why are rolling returns considered more realistic than the equity plot for evaluation?",
    options: [
      "They are easier to calculate",
      "They show consistent returns throughout the test period rather than just hyperbolic growth from start to end",
      "They eliminate the need for risk assessment",
      "They automatically adjust for inflation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "What does the drawdown (underwater) plot measure?",
    options: [
      "The total decline in portfolio value",
      "Any retracement from the peaks in the equity plot",
      "The correlation with market volatility",
      "The percentage of losing trades"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "What was the maximum drawdown recorded in the RRG strategy test?",
    options: [
      "25%",
      "40%",
      "56.8%",
      "64.3%"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 17,
    question: "How are annualized returns typically calculated in quantitative analysis?",
    options: [
      "By multiplying daily returns by 252",
      "By calculating the average monthly return and using the formula: Average Monthly Return × √12",
      "By dividing total return by number of years",
      "By compounding daily returns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the formula for annualized volatility from monthly returns?",
    options: [
      "Monthly Standard Deviation × 12",
      "Monthly Standard Deviation × √12",
      "Monthly Standard Deviation / 12",
      "Monthly Standard Deviation × 252"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "What does CAGR (Compound Annual Growth Rate) represent?",
    options: [
      "The simple average annual return",
      "The total return converted to an annual value considering compounding",
      "The median annual return",
      "The risk-free rate adjusted return"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "What is drawdown recovery time?",
    options: [
      "The average time to recover from all drawdowns",
      "The time it takes for the portfolio to reach a new high",
      "The greatest number of days for total equity to recover from any drawdown",
      "The median recovery time across all drawdowns"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What is the purpose of calculating risk-adjusted returns?",
    options: [
      "To eliminate all risk from the portfolio",
      "To determine what the return would be if the strategy had the same volatility as the benchmark",
      "To maximize returns regardless of risk",
      "To calculate the risk-free rate"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "What does M² (Modigliani risk-adjusted performance) measure?",
    options: [
      "The total return of the portfolio",
      "The return of the portfolio relative to the benchmark return, factoring in the risk-free rate",
      "The volatility of the portfolio",
      "The correlation with the market"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What does a positive alpha indicate in CAPM analysis?",
    options: [
      "The strategy has high volatility",
      "The strategy outperforms the benchmark (excess return relative to benchmark)",
      "The strategy is perfectly correlated with the market",
      "The strategy has low risk"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "What does a beta of 1 indicate about a strategy?",
    options: [
      "The strategy is risk-free",
      "The strategy moves in sync with the market",
      "The strategy outperforms the market",
      "The strategy has no correlation with the market"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What are the two main drivers that affect beta?",
    options: [
      "Alpha and returns",
      "Correlation and volatility",
      "Price and volume",
      "Profit and loss"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "What does r² (coefficient of determination) measure in regression analysis?",
    options: [
      "The total return of the strategy",
      "How tightly observations cluster around the regression line, indicating confidence in alpha and beta values",
      "The risk-free rate",
      "The maximum drawdown"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "What is the profit factor formula?",
    options: [
      "Net Profit / Gross Loss",
      "Gross Profit / Gross Loss",
      "Gross Profit / Number of Trades",
      "Net Profit / Total Capital"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "What profit factor value would indicate that losses equal profits?",
    options: [
      "0",
      "1",
      "2",
      "Greater than 2"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "Why is average return per trade considered better than average profit per trade?",
    options: [
      "It's easier to calculate",
      "Average return (percentage) is more consistent over the life of the test as trade sizes grow with reinvested profits",
      "It eliminates the need for stops",
      "It always produces higher values"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "What concern would arise if the longest winning trade length is many years?",
    options: [
      "The strategy is too conservative",
      "A single trade may be contributing too much to results and is unlikely to repeat",
      "The exit rules are too aggressive",
      "The position sizing is incorrect"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 31,
    question: "What is the expected value formula in trading?",
    options: [
      "(Win Percent × Avg Win) + (Loss Percent × Avg Loss)",
      "(Win Percent × Avg Win) - (Loss Percent × Avg Loss)",
      "Win Percent / Loss Percent",
      "Avg Win - Avg Loss"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 32,
    question: "What would be concerning if the largest profit was close to the overall profit?",
    options: [
      "It indicates excellent performance",
      "A single trade shouldn't impact final results by more than a few percent; low probability of repeating",
      "It suggests the strategy is too conservative",
      "It means the exit strategy is optimal"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 33,
    question: "What is Max Adverse Excursion (MAE)?",
    options: [
      "The largest loss in any trade",
      "The greatest deficit (adverse excursion) experienced during trades that ultimately ended in profit",
      "The maximum drawdown of the portfolio",
      "The worst losing streak"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "How is MAE useful for setting stops?",
    options: [
      "It determines the optimal position size",
      "Setting stops beyond the MAE will likely not prematurely exit trades that will be profitable",
      "It calculates the risk-free rate",
      "It measures correlation with the benchmark"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 35,
    question: "What is Max Favorable Excursion (MFE)?",
    options: [
      "The average winning trade size",
      "The peak profit reached before a trade closed (for profitable trades only)",
      "The total gross profit",
      "The maximum position size"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "What does the 'R' in R-Multiples represent, as popularized by Van K. Tharp?",
    options: [
      "Return",
      "Risk",
      "Ratio",
      "Regression"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 37,
    question: "When using a stop, how is risk defined for R-Multiple calculation?",
    options: [
      "The total position size",
      "The trade price minus the stop price",
      "The portfolio value",
      "The average true range"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 38,
    question: "If you enter a trade at $1,000 with a stop at $800 and exit at $1,400, what is the R-Multiple?",
    options: [
      "1R",
      "2R",
      "1.4R",
      "0.4R"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 39,
    question: "What is the goal for average R-Multiple in a trading strategy?",
    options: [
      "R-Multiple = 0",
      "R-Multiple > 1R, implying average profit is greater than average risk",
      "R-Multiple < 1R",
      "R-Multiple = 0.5R"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 40,
    question: "What does the Sharpe ratio measure?",
    options: [
      "Total return only",
      "Excess return of the strategy (above risk-free rate) relative to its volatility",
      "Correlation with the benchmark",
      "Maximum drawdown"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 41,
    question: "What is the key difference between the Sharpe ratio and the Sortino ratio?",
    options: [
      "Sharpe uses monthly returns, Sortino uses annual returns",
      "Sharpe considers all volatility, Sortino only considers downside volatility",
      "Sharpe uses alpha, Sortino uses beta",
      "There is no difference"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "What does the Information ratio measure?",
    options: [
      "Total portfolio return",
      "Portfolio manager's ability to generate excess returns relative to a benchmark (active return vs tracking error)",
      "Risk-free rate adjusted returns",
      "Maximum drawdown recovery time"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 43,
    question: "What distinguishes the Treynor ratio from the Sharpe ratio?",
    options: [
      "Treynor uses systematic risk (beta) instead of total risk (standard deviation)",
      "Treynor uses gross returns instead of net returns",
      "Treynor ignores the risk-free rate",
      "Treynor only applies to bond portfolios"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 44,
    question: "When can the Treynor ratio NOT be used?",
    options: [
      "When returns are negative",
      "When beta is negative",
      "When volatility is high",
      "When the risk-free rate is zero"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 45,
    question: "What does the Calmar ratio compare?",
    options: [
      "Total return to total risk",
      "Average annual rate of return to maximum drawdown over a specific period",
      "Winning trades to losing trades",
      "Gross profit to gross loss"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 46,
    question: "According to Van K. Tharp's SQN categorization, what SQN value range is considered 'Excellent'?",
    options: [
      "1.6 - 1.9",
      "2.0 - 2.4",
      "2.5 - 2.9",
      "3.0 - 5.0"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 47,
    question: "What is the minimum number of trades for SQN to be deemed reliable?",
    options: [
      "10 trades",
      "20 trades",
      "30 trades",
      "50 trades"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 48,
    question: "In the strategy results example, the Sharpe ratio was 0.54 while the Sortino ratio was 2.05. What does this large difference indicate?",
    options: [
      "The calculations are incorrect",
      "There must be some big winners increasing overall volatility, but downside volatility is controlled",
      "The strategy has no winning trades",
      "The benchmark is inappropriate"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "In the strategy results, the MAE was -89.8% and MFE was 104%. What does this suggest?",
    options: [
      "The entry signals are poor",
      "Stops are needed to control adverse excursions, and exit rules may be waiting too long (not capturing favorable excursions)",
      "The strategy is optimal",
      "Position sizing should be increased"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 50,
    question: "If a strategy has high gross profit but also high gross loss resulting in low net profit, what should be investigated?",
    options: [
      "Increasing position sizes only",
      "Using better filters to avoid trading during largest loss periods and investigating stops to reduce losses without impacting gross profit",
      "Removing all exit rules",
      "Switching to a different universe"
    ],
    correct: 1,
    hasImage: false
  }
];
