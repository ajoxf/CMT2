const questions = [
  {
    id: 1,
    question: "What is the primary difference between single-candle patterns and multi-candle patterns in terms of market context?",
    options: [
      "Single-candle patterns provide broader market context while multi-candle patterns offer immediate insights",
      "Single-candle patterns offer immediate but limited insights while multi-candle patterns provide comprehensive market sentiment over time",
      "Both provide equal levels of market context",
      "Single-candle patterns are always more reliable than multi-candle patterns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "A doji candle appears after a strong uptrend. What does this most likely indicate?",
    options: [
      "Strong bullish continuation is imminent",
      "Market indecision and potential reversal as the uptrend may be losing momentum",
      "Definite bearish reversal will occur",
      "The uptrend will accelerate further"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What is the structural characteristic of a hammer candlestick pattern?",
    options: [
      "Large body at the bottom with a long upper shadow",
      "Small body at the top with a long lower shadow",
      "Equal-sized body with shadows on both sides",
      "Large body in the middle with short shadows"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "In the morning star pattern, what is the sequence of the three candles?",
    options: [
      "Large bullish, small indecision, large bearish candle",
      "Large bearish, small indecision, large bullish candle",
      "Three consecutive bullish candles",
      "Three consecutive bearish candles"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "What is the main limitation of relying solely on isolated candlestick patterns?",
    options: [
      "They are too complex to identify",
      "They provide too much information",
      "They may give false signals and lack confirmation from subsequent candles",
      "They only work in bullish markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 6,
    question: "The three white soldiers pattern consists of which of the following characteristics?",
    options: [
      "Three consecutive bearish candles closing at their lows",
      "Three consecutive bullish candles, each opening within or near the prior session's white real body and closing at or near its highs",
      "Three doji candles showing indecision",
      "Three shooting star patterns in sequence"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What does a shooting star pattern indicate when it appears after an uptrend?",
    options: [
      "Bullish continuation signal",
      "Market consolidation",
      "Bearish reversal signal as sellers took control by the close despite buyers initially driving prices higher",
      "Neutral market sentiment"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "Why are multi-candle patterns generally more reliable than single-candle patterns?",
    options: [
      "They are easier to spot on charts",
      "They combine data from several candles, smoothing out anomalies and providing better confirmation",
      "They always appear at market tops",
      "They require less analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "When a hammer pattern appears at a support level, what is the strongest interpretation?",
    options: [
      "The support level will definitely break",
      "The market is showing indecision",
      "Buyers stepped in and pushed prices back up, suggesting the support level is holding and a bullish reversal is possible",
      "Sellers are gaining complete control"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "What does a bullish engulfing pattern near a support level indicate?",
    options: [
      "Selling pressure is overwhelming buying pressure",
      "The support level has failed",
      "Buying pressure is overwhelming selling pressure, suggesting the downward trend is losing momentum",
      "Market will remain range-bound"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "If bearish patterns form at a support level, what does this typically suggest?",
    options: [
      "The support level is reinforced and holding",
      "A strong bullish reversal is imminent",
      "The support level may have failed and the price could continue to decline",
      "The market will consolidate at this level"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "A shooting star pattern appears near a resistance level. What is the most likely outcome?",
    options: [
      "The resistance will break and price will rise significantly",
      "The resistance level is holding and a downward reversal is likely as sellers regained control",
      "The market will move sideways",
      "A bullish breakout is imminent"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What does a bearish engulfing pattern near resistance typically signal?",
    options: [
      "Buyer dominance and upward continuation",
      "Market indecision",
      "Seller dominance as selling pressure overtakes buying pressure, signaling potential downward reversal",
      "Support level formation"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "When bullish patterns form at a resistance level, what might this indicate?",
    options: [
      "The resistance is strongly reinforced",
      "A bearish reversal is certain",
      "The resistance level may fail and the price could break through to continue rising",
      "The market will reverse downward"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "Why are candlestick patterns more meaningful when they occur near support or resistance levels?",
    options: [
      "They are easier to identify at these levels",
      "These levels are areas where price movements historically react to market forces, enhancing signal reliability",
      "They only work at these levels",
      "Support and resistance eliminate all false signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "What characterizes an unconfirmed candlestick pattern?",
    options: [
      "It has been validated by subsequent price action",
      "It appears on a chart but lacks validation from follow-up price movement",
      "It guarantees a trend reversal",
      "It has low risk of false signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "A hammer pattern appears at the bottom of a downtrend but the next few candles show continued downward movement. What type of pattern is this?",
    options: [
      "Confirmed bullish reversal pattern",
      "Unconfirmed pattern that resulted in a false signal",
      "Validated pattern",
      "Guaranteed reversal pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the primary advantage of waiting for pattern confirmation before trading?",
    options: [
      "It allows entry at the very beginning of the trend",
      "It eliminates the need for stop-loss orders",
      "It reduces the chances of being caught by false signals and improves trading accuracy",
      "It guarantees profitable trades"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "How does a confirmed pattern differ from an unconfirmed pattern in terms of risk?",
    options: [
      "Confirmed patterns have higher risk as the market has already moved",
      "Both patterns carry equal risk",
      "Confirmed patterns have lower risk since the market has demonstrated movement in the expected direction",
      "Unconfirmed patterns have no risk"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "What should traders primarily rely on when dealing with unconfirmed patterns?",
    options: [
      "Immediately enter trades based on the pattern alone",
      "Other technical indicators like volume, moving averages, or oscillators for additional validation",
      "Social media sentiment",
      "Random entry strategies"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "In practical implementation, which scenario represents the best trading opportunity?",
    options: [
      "An unconfirmed hammer pattern in the middle of a trend",
      "A confirmed bullish engulfing pattern at a support level with increasing volume",
      "An isolated doji with no context",
      "Any candlestick pattern without considering support or resistance"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "What is the key characteristic of the three black crows pattern?",
    options: [
      "Three consecutive bullish candles showing strong buying",
      "Three consecutive long bearish candles, each opening within or near the prior session's real body and closing at or near its lows",
      "Three doji candles indicating indecision",
      "Three hammer patterns in sequence"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "An evening star pattern forms near a resistance level and is followed by continued bearish candles. How should this be interpreted?",
    options: [
      "As an unconfirmed pattern requiring more data",
      "As a confirmed bearish reversal with high reliability for downward movement",
      "As a bullish continuation signal",
      "As a neutral pattern with no trading implications"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "What is the main disadvantage of multi-candle patterns compared to single-candle patterns?",
    options: [
      "They are less reliable",
      "They provide less information",
      "They take longer to form, which can result in traders missing the early part of a trend or reversal",
      "They are easier to misinterpret"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "In a strong downtrend, a morning star pattern forms at a key support level. The third candle is a strong bullish candle with high volume. What action is most appropriate?",
    options: [
      "Short the market immediately",
      "Wait for the pattern to fail",
      "Consider a long position as this represents a confirmed bullish reversal at support with volume confirmation",
      "Ignore the pattern completely"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "What makes the interplay between multiple candles in a pattern valuable for traders?",
    options: [
      "It makes patterns harder to identify",
      "It provides multiple signals in one pattern, increasing the likelihood of a true reversal or continuation",
      "It reduces the amount of data available",
      "It only works in specific market conditions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "A trader identifies a doji at the same level where price has reversed three times in the past. What additional factor would strengthen the reversal signal?",
    options: [
      "Decreasing volume",
      "The pattern occurring in isolation without any support level",
      "Confirmation from the next candle(s) moving in the reversal direction, preferably with volume increase",
      "Ignoring historical price action"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What is the significance of a bullish engulfing pattern where the larger bullish candle completely engulfs the previous bearish candle?",
    options: [
      "It shows weak buying pressure",
      "It indicates market indecision",
      "It demonstrates strong shift in sentiment as buyers overwhelm sellers, suggesting potential reversal",
      "It confirms continuation of bearish trend"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "When analyzing candlestick patterns for practical trading, which combination provides the highest probability setup?",
    options: [
      "Isolated patterns without any context",
      "Unconfirmed patterns in the middle of trends",
      "Confirmed multi-candle patterns at key support/resistance levels with volume confirmation",
      "Single candles without waiting for confirmation"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "A resistance level has been tested multiple times, and a bearish engulfing pattern forms followed by two additional bearish candles with increasing volume. What is the most comprehensive interpretation?",
    options: [
      "This is an unconfirmed pattern requiring more data",
      "The resistance will likely break to the upside",
      "This is a confirmed bearish reversal at resistance with strong validation, suggesting high probability of downward movement",
      "The market will remain range-bound at this level"
    ],
    correct: 2,
    hasImage: false
  }
];

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
