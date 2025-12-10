const questions = [
  {
    id: 1,
    question: "What is the primary limitation of using numerical relative strength values when comparing multiple securities?",
    options: [
      "The values are too volatile and change too frequently",
      "The numerical values have no universal meaning and depend entirely on the prices of the securities being compared",
      "The calculations are too complex for most analysts to perform",
      "The values only work with daily data, not weekly or monthly"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to the curriculum, what happens when a security is in an absolute uptrend but the relative strength line is in a downtrend?",
    options: [
      "The security is outperforming the benchmark despite rising prices",
      "The benchmark must be in a downtrend",
      "The benchmark must be performing better than the security",
      "There is a calculation error in the relative strength formula"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "In Figure 10.1.1 showing the S&P 500 Utilities index, what do the blue vertical lines indicate?",
    options: [
      "When both price and relative strength were in uptrends",
      "When the price trend was up but the relative trend was down",
      "When both price and relative strength were in downtrends",
      "When the price trend was down but the relative trend was up"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 4,
    question: "What value is the JdK RS-Ratio centered at to indicate a security is moving in perfect harmony with the benchmark?",
    options: [
      "0",
      "50",
      "100",
      "200"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "If a security has a JdK RS-Ratio value of 115, what does this indicate?",
    options: [
      "The security is underperforming the benchmark by 15%",
      "The security is outperforming the benchmark",
      "The security is moving in perfect harmony with the benchmark",
      "The security is 15% more volatile than the benchmark"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What was Julius de Kempenaer's primary motivation for creating Relative Rotation Graphs in 2002?",
    options: [
      "To replace traditional technical analysis entirely",
      "To provide institutional clients with a unique tool that could analyze entire portfolios without completing thousands of individual calculations",
      "To create a more accurate version of the relative strength index (RSI)",
      "To simplify the calculation of moving averages"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "According to Figure 10.1.2, the Information Technology sector had a relative strength value of 0.340 while Energy had 0.245. Which sector was actually in a better position for a long-only portfolio?",
    options: [
      "Information Technology because it had a higher numerical value",
      "Energy because its relative strength line was moving higher and above its moving average",
      "Information Technology because its moving average was at 0.349",
      "Neither, as both were underperforming the benchmark"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 8,
    question: "What are the two building blocks for RRG calculations?",
    options: [
      "Moving averages and volume indicators",
      "Price momentum and relative volume",
      "JdK RS-Ratio and JdK RS-Momentum",
      "Absolute strength and relative volatility"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "What does a JdK RS-Ratio value below 100 indicate?",
    options: [
      "The security is outperforming the benchmark",
      "The security is moving sideways relative to the benchmark",
      "The security is underperforming the benchmark",
      "The security has negative absolute returns"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "In Figure 10.1.4, what do values roughly at or above 104 on the JdK RS-Ratio line represent?",
    options: [
      "Low values indicating weakness",
      "Neutral values",
      "High values indicating relative strength",
      "Oversold conditions"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 11,
    question: "Why is the JdK RS-Ratio value alone insufficient for making trading decisions?",
    options: [
      "It doesn't account for volume",
      "The same value can occur when the line is moving higher or lower, so direction matters",
      "It only works for equity securities",
      "It requires adjustment for inflation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "What is the primary purpose of the JdK RS-Momentum indicator?",
    options: [
      "To replace the JdK RS-Ratio entirely",
      "To determine whether the JdK RS-Ratio line is moving up or down and at what pace",
      "To measure absolute price momentum",
      "To calculate the volatility of the relative strength line"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "According to the curriculum, what calculation approach does the JdK RS-Momentum use?",
    options: [
      "Simple moving average crossover",
      "Exponential smoothing",
      "Rate of change approach",
      "Standard deviation calculation"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "In Figure 10.1.5, what relationship is observed between JdK RS-Momentum and JdK RS-Ratio?",
    options: [
      "They move in perfect synchronization",
      "JdK RS-Momentum leads the JdK RS-Ratio and serves as an early warning signal",
      "JdK RS-Ratio leads the JdK RS-Momentum",
      "They have an inverse relationship"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 15,
    question: "What happens to the JdK RS-Ratio when the JdK RS-Momentum drops below 100?",
    options: [
      "The JdK RS-Ratio immediately drops to zero",
      "The JdK RS-Ratio forms a peak and starts to move lower",
      "The JdK RS-Ratio accelerates higher",
      "The JdK RS-Ratio remains unchanged"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "When the JdK RS-Momentum crosses above 100, what typically happens to the JdK RS-Ratio?",
    options: [
      "It forms a trough and starts to move higher",
      "It forms a peak and starts to move lower",
      "It remains flat",
      "It becomes more volatile"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 17,
    question: "According to the curriculum, which indicator is considered the most important and most influential numerical measure in relative strength analysis?",
    options: [
      "The relative strength line",
      "JdK RS-Momentum",
      "JdK RS-Ratio",
      "The traditional RSI indicator"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "In Figure 10.1.6, among the sectors with JdK RS-Ratio values greater than 100, which sector also had positive JdK RS-Momentum?",
    options: [
      "Information Technology",
      "Consumer Discretionary",
      "Utilities",
      "Health Care"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 19,
    question: "What type of chart is a Relative Rotation Graph (RRG) based on?",
    options: [
      "A candlestick chart",
      "A line chart",
      "A modified scatter plot",
      "A bar chart"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "What does a thirty-week simple moving average overlaid on the relative strength line help to identify?",
    options: [
      "Short-term trading opportunities",
      "The exact buy and sell signals",
      "The underlying trends by smoothing out volatility",
      "The intrinsic value of the security"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "According to the curriculum, what must trading strategies that rely on relative strength always consider?",
    options: [
      "Only the relative strength line direction",
      "The trend of the benchmark as well as the security",
      "Only the absolute price trend",
      "The trading volume exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "How are the raw JdK RS-Momentum values processed for use in analysis?",
    options: [
      "They are converted to percentages",
      "They are normalized in the same way as the JdK RS-Ratio values",
      "They are logarithmically scaled",
      "They are adjusted for volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "In the example from Figure 10.1.4, on December 9, 2022, the JdK RS-Ratio passed through 104. What was significant about this event?",
    options: [
      "It was moving higher, indicating strengthening relative performance",
      "It marked the absolute peak for the year",
      "It signaled a market crash",
      "It indicated perfect correlation with the benchmark"
    ],
    correct: 0,
    hasImage: true
  },
  {
    id: 24,
    question: "What problem does the RRG solve when analyzing large universes of securities?",
    options: [
      "It eliminates the need for any individual chart analysis",
      "It displays all securities in a universe on a single chart, avoiding the need to browse through individual charts",
      "It automatically executes trades",
      "It predicts future prices with certainty"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "If a security's JdK RS-Ratio is declining but still above 100, what can you infer?",
    options: [
      "The security is underperforming and losing momentum",
      "The security is still outperforming the benchmark but losing relative strength",
      "The security is in an absolute downtrend",
      "The benchmark is in a downtrend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "What was the typical work environment challenge that led to the development of RRGs according to Julius de Kempenaer?",
    options: [
      "Lack of computing power",
      "Portfolio managers receiving hundreds of emails, reports, and calls daily with no unique analytical tools",
      "Insufficient market data",
      "Regulatory restrictions on technical analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "In Figure 10.1.3, what does the ranking of S&P 500 sectors by JdK RS-Ratio allow analysts to do?",
    options: [
      "Predict exact future prices",
      "Compare all sectors in a universe without completing thousands of individual calculations",
      "Determine the intrinsic value of each sector",
      "Calculate the beta of each sector"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 28,
    question: "When analyzing Figure 10.1.2, why couldn't you simply rank Information Technology higher than Energy based on their relative strength values of 0.340 and 0.245?",
    options: [
      "Because Information Technology was in a relative downtrend while Energy was in a relative uptrend",
      "Because the time periods were different",
      "Because Energy had higher trading volume",
      "Because the calculation was performed incorrectly"
    ],
    correct: 0,
    hasImage: true
  },
  {
    id: 29,
    question: "What does it mean when a security is in an absolute downtrend but the benchmark is declining more steeply?",
    options: [
      "The relative strength line will be in a downtrend",
      "Both absolute and relative trends will be negative",
      "The relative strength line will be in an uptrend",
      "The security should be sold immediately"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "According to the curriculum, what is the key advantage of the JdK RS-Ratio over traditional relative strength values?",
    options: [
      "It is easier to calculate",
      "It provides a normalized measure that can be used to rank and compare all securities in a universe universally",
      "It eliminates all risk from trading",
      "It only works with large-cap stocks"
    ],
    correct: 1,
    hasImage: false
  }
];
