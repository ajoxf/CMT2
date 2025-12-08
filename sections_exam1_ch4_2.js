const questions = [
  {
    id: 1,
    question: "In a hammer candlestick pattern, what is the minimum ratio of the lower shadow to the real body?",
    options: [
      "At least 1:1",
      "At least 2:1",
      "At least 3:1",
      "At least 1.5:1"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the primary psychological difference between a hammer and a hanging man candlestick?",
    options: [
      "The length of their shadows",
      "The color of their real bodies",
      "Their position within the trend context",
      "The volume accompanying the pattern"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "When a shooting star pattern forms with low volume, what does this most likely indicate?",
    options: [
      "A stronger reversal signal",
      "Selling pressure is not strong enough for sustained reversal",
      "Buyers are definitely losing control",
      "The pattern is more reliable"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What distinguishes a spinning top from a standard doji?",
    options: [
      "A spinning top has no real body while a doji has a small one",
      "A spinning top has a small real body while a doji has opening and closing prices that are nearly identical",
      "They are exactly the same pattern",
      "A spinning top only appears in downtrends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "Why do multiple dojis appearing consecutively lose their significance?",
    options: [
      "They indicate too much trading volume",
      "They reflect persistent indecision rather than a decisive moment of reversal",
      "They always signal a strong trend continuation",
      "They only work in uptrends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "In a dragonfly doji, where are the opening, closing, and high prices located?",
    options: [
      "All at different levels",
      "Opening and closing at the low, high at the top",
      "Nearly identical and near the high of the session",
      "Opening at the high, closing at the low"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "What is the key characteristic that differentiates a gravestone doji from other doji patterns?",
    options: [
      "It has equal upper and lower shadows",
      "It has a long upper shadow and little to no lower shadow",
      "It has a long lower shadow and no upper shadow",
      "It has no shadows at all"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "In a bullish engulfing pattern, how should the second candle relate to the first candle?",
    options: [
      "It should be smaller than the first candle",
      "It should open higher and close at the same level",
      "It should completely engulf the real body of the first bearish candle",
      "It should only touch the first candle's high"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "What does high volume during the formation of a bearish engulfing pattern indicate?",
    options: [
      "Weak selling pressure and likely continuation of uptrend",
      "Strong selling pressure and increased reliability of bearish reversal",
      "Indecision in the market",
      "The pattern is invalid"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "How does a bullish harami differ structurally from a bullish engulfing pattern?",
    options: [
      "In a harami, the second candle is contained within the first; in engulfing, the second engulfs the first",
      "They are identical patterns with different names",
      "A harami requires three candles while engulfing requires two",
      "A harami only works in downtrends"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 11,
    question: "In a piercing line pattern, where must the second bullish candle close relative to the first bearish candle?",
    options: [
      "Below the midpoint of the first candle",
      "Above the midpoint of the first candle's real body",
      "Exactly at the open of the first candle",
      "At the low of the first candle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "What is the Japanese meaning of 'harami' and why is it relevant to the pattern's appearance?",
    options: [
      "'Strong' - because it signals strong reversals",
      "'Pregnant' - because the second candle is contained within the first like a baby in the womb",
      "'Shadow' - because of the long shadows",
      "'Balance' - because it shows market equilibrium"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "In a dark cloud cover pattern, where should the second bearish candle open and close?",
    options: [
      "Open below the first candle's low and close at the same level",
      "Open above the first candle's high and close below the midpoint of the first candle's real body",
      "Open and close within the first candle's range",
      "Open at the midpoint and close at the high"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "What is the primary significance of the second small-bodied candle in a morning star pattern?",
    options: [
      "It confirms the reversal is complete",
      "It represents market indecision and a pause in the downtrend",
      "It signals strong buying pressure",
      "It invalidates the pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "In an evening star pattern, what does the third candle need to do to confirm the bearish reversal?",
    options: [
      "Close above the first candle's high",
      "Close at the same level as the second candle",
      "Close below the midpoint of the first bullish candle",
      "Close above the midpoint of the first candle"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What is the key structural characteristic of the three white soldiers pattern?",
    options: [
      "Three bearish candles with decreasing size",
      "Three consecutive long-bodied bullish candles, each opening within the prior candle's body and closing near the high",
      "Three doji candles in succession",
      "Three candles with long shadows and small bodies"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "When does a three white soldiers pattern become potentially unreliable?",
    options: [
      "When it appears after a prolonged downtrend",
      "When it occurs after a strong bullish move, suggesting overextension",
      "When accompanied by high volume",
      "When each candle closes near its high"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "In the three black crows pattern, where should each successive candle open and close?",
    options: [
      "Each opens above the prior close and closes lower",
      "Each opens within the prior candle's body and closes at or near its low",
      "Each opens at the low and closes at the high",
      "Each opens and closes at the same level"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "What differentiates a long-legged doji from a standard doji?",
    options: [
      "A long-legged doji has no shadows",
      "A long-legged doji has significantly longer upper and lower shadows, indicating greater price volatility",
      "A long-legged doji only appears in uptrends",
      "There is no difference"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "What is the primary purpose of continuation patterns like the rising three methods?",
    options: [
      "To signal an immediate trend reversal",
      "To indicate the market will resume its current trend after a period of consolidation",
      "To show market indecision",
      "To mark the end of a trend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "In a rising three methods pattern, where must the three small bearish candles remain?",
    options: [
      "Above the high of the first bullish candle",
      "Within the range of the first bullish candle",
      "Below the low of the first bullish candle",
      "They can be anywhere on the chart"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "What does the final candle in a falling three methods pattern need to confirm?",
    options: [
      "It must close above the first candle's high",
      "It must be a doji",
      "It must break below the low of the first bearish candle",
      "It must be smaller than the first candle"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 23,
    question: "Why is volume particularly important when validating engulfing patterns?",
    options: [
      "Low volume makes the pattern more reliable",
      "Volume is irrelevant to candlestick patterns",
      "High volume confirms strong market participation and increases reliability of the reversal",
      "Volume only matters in continuation patterns"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "If a hammer pattern forms on low volume at the bottom of a downtrend, what is the most likely outcome?",
    options: [
      "A strong and reliable bullish reversal",
      "The reversal may not be sustainable due to weak buying pressure",
      "An immediate trend continuation downward",
      "The pattern becomes a hanging man"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What psychological shift does a gravestone doji at the top of an uptrend represent?",
    options: [
      "Buyers maintaining strong control",
      "Complete market indecision with no clear direction",
      "Buyers initially pushed higher but sellers took control, indicating potential exhaustion of uptrend",
      "A continuation of bullish momentum"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "In practical trading, why should a trader wait for confirmation after identifying a doji pattern?",
    options: [
      "Dojis always signal immediate reversals",
      "A doji alone indicates indecision; confirmation from subsequent candles validates the potential direction",
      "Confirmation is only needed for engulfing patterns",
      "Dojis are always reliable without confirmation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "What is the relationship between harami and engulfing patterns?",
    options: [
      "They are identical patterns",
      "Harami patterns are the exact opposite of engulfing patterns in structure",
      "Harami patterns only work in uptrends while engulfing work in downtrends",
      "There is no relationship between them"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "When analyzing a piercing line pattern with low volume, what should a trader conclude?",
    options: [
      "The bullish reversal is highly reliable",
      "The pattern strength is enhanced",
      "The reversal may be weak as lack of buying participation increases risk of false signal",
      "Volume has no impact on this pattern"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "What makes the morning star a more reliable reversal signal than a single hammer?",
    options: [
      "It's shorter and quicker to form",
      "It provides a three-candle confirmation showing the progression from selling to indecision to buying control",
      "It doesn't require volume confirmation",
      "It only works in specific market conditions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "In the context of the three black crows pattern, what does the absence of significant upper shadows on each candle indicate?",
    options: [
      "Buyers are gaining strength",
      "The pattern is invalid",
      "Sellers are consistently in control with minimal buying pressure throughout each session",
      "The market is consolidating"
    ],
    correct: 2,
    hasImage: false
  }
];
