const questions = [
  {
    id: 1,
    question: "According to the material, what is the primary purpose of analyzing market internals?",
    options: [
      "To predict exact price targets for indices",
      "To understand how the market is reaching its levels and assess trend health",
      "To replace traditional price chart analysis entirely",
      "To identify individual stock opportunities only"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "The Advance-Decline Line (ADL) is calculated as:",
    options: [
      "The percentage of advancing stocks divided by total stocks",
      "A running total of the net number of stocks moving higher and lower",
      "The difference between up volume and down volume",
      "The ratio of new highs to new lows"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "When analyzing the ADL for major cyclical turning points, what characteristic pattern does it typically exhibit?",
    options: [
      "It leads at both tops and bottoms",
      "It lags at both tops and bottoms",
      "It often lags behind popular indexes at bottoms but helps identify tops",
      "It is only useful for intraday trading decisions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "When looking for divergences between volume indicators and price during an uptrend, which volume component is most important to monitor?",
    options: [
      "Down volume, because bears provide resistance",
      "Up volume or net volume, because bulls are driving the trend",
      "Total volume regardless of direction",
      "Only the volume on gap days"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "In Figure 5.2.1, what is shown in conjunction with the Nasdaq 100 ETF to provide more precise timing at point A?",
    options: [
      "The MACD histogram",
      "The slow stochastic oscillator",
      "The relative strength index",
      "The on-balance volume indicator"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 6,
    question: "Why is it recommended to use moving averages when displaying up and down volume rather than raw daily data?",
    options: [
      "Raw data is not available from most data providers",
      "Moving averages are required by CMT standards",
      "Raw daily volume data is too noisy; smoothing reveals underlying trends more clearly",
      "Raw data cannot show divergences"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "During a downtrend, which volume divergence should technicians watch for clues of a potential market bottom?",
    options: [
      "Divergences in up volume",
      "Divergences in down volume",
      "Divergences in net volume only",
      "Volume divergences are not relevant in downtrends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "The Absolute Breadth Index, developed by Norman Fosback, is calculated as:",
    options: [
      "The 10-day SMA of (advancers - decliners)",
      "The 10-day SMA of the absolute value of (advancers - decliners)",
      "The ratio of advancers to decliners squared",
      "The cumulative sum of daily breadth readings"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What is the key interpretive principle behind the Absolute Breadth Index?",
    options: [
      "Low readings are bullish and high readings are bearish",
      "Only positive readings are significant",
      "One-sided markets are bullish regardless of whether bulls or bears are in control",
      "The index only works in bull markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "What does a 'split tape' indicate in market breadth analysis?",
    options: [
      "A highly bullish market condition with strong momentum",
      "An indecisive market where roughly half the stocks are up and half are down",
      "A technical malfunction in data transmission",
      "A market ready to make a significant upward breakout"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "When the Absolute Breadth Index shows low readings, what market condition does this typically describe?",
    options: [
      "A strong trending market",
      "A market with clear directional conviction",
      "A bearish condition indicating indecision or a split tape",
      "An optimal buying opportunity"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "An 80% day in breadth analysis is equivalent to what ratio?",
    options: [
      "2:1",
      "3:1",
      "4:1",
      "5:1"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "What makes 80% and 90% days significant in market analysis?",
    options: [
      "They guarantee trend reversals",
      "They represent capitulation or euphoria and often mark turning points or powerful trend beginnings",
      "They only occur at market tops",
      "They indicate the market will remain flat for extended periods"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "What does it indicate when the S&P 500 makes new highs but only 40% of stocks are above their 200-day moving average?",
    options: [
      "A healthy, broad-based rally",
      "An optimal time to increase long exposure",
      "A warning sign that few large-cap stocks are carrying the index while most struggle",
      "That the 200-day moving average is no longer a relevant indicator"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "When analyzing the percentage of stocks above their moving averages, what reading generally indicates broad-based strength that can sustain trends?",
    options: [
      "30-40% of stocks above their moving average",
      "50-60% of stocks above their moving average",
      "70-80% of stocks above their moving average",
      "90-100% of stocks above their moving average"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "For intermediate-term analysis, which moving average period is most appropriate when examining the percentage of stocks above their moving average?",
    options: [
      "20-day moving average",
      "50-day moving average",
      "100-day moving average",
      "200-day moving average"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "Unlike breadth statistics, why are leadership statistics (new highs and lows) most useful in their raw form?",
    options: [
      "Cumulative forms provide too much data smoothing",
      "Raw leadership data is more readily available",
      "Leadership data is extremely useful in raw form and is not helpful when shown cumulatively like the ADL",
      "Raw data requires less computational power"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "What does it suggest when the market makes new price highs but fewer stocks achieve new 52-week highs?",
    options: [
      "A positive confirmation of the uptrend",
      "A classic negative divergence often preceding corrections",
      "That investors should immediately short the market",
      "That the rally will accelerate further"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "Gerald Appel's percentage of new highs indicator is calculated as:",
    options: [
      "New highs divided by total issues",
      "New highs minus new lows",
      "10-day MA of new highs divided by the sum of (new highs + new lows)",
      "New highs divided by new lows"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "According to Gerald Appel's percentage of new highs indicator, when does it signal that a rally is weakening?",
    options: [
      "When it crosses above 50%",
      "When it breaks below 70% from above",
      "When it rises above 80%",
      "When it crosses the 30% level"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "At what level does Appel's percentage of new highs indicator suggest good buying opportunities at bottoms?",
    options: [
      "When it moves above 70% from below",
      "When it crosses below 50%",
      "When it moves back above 30% from below",
      "When it reaches 10% or lower"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "What type of data works best with Gerald Appel's percentage of new highs indicator?",
    options: [
      "Individual sector data only",
      "Exchange-level data like NYSE or Nasdaq",
      "Small-cap stocks exclusively",
      "International market data"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "When analyzing breadth and leadership indicators together, what provides the most robust market analysis?",
    options: [
      "Using only the indicator with the strongest signal",
      "Combining multiple indicators for confirmation and timing",
      "Relying solely on the ADL",
      "Using leadership indicators exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "In Figure 5.2.1, what do points X, Y, and Z demonstrate?",
    options: [
      "Perfect confirmation between price and internals",
      "Divergences where price pushes higher but net volume weakens",
      "Failed breakout patterns",
      "Optimal entry points for short positions"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 25,
    question: "Why is it important to properly aggregate weekly data rather than just using Friday's data alone?",
    options: [
      "Friday data is typically unreliable",
      "To capture the full week's market activity and avoid distorted readings",
      "CMT regulations require it",
      "Friday data is not available from most providers"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "Which statement best describes market behavior regarding tops and bottoms?",
    options: [
      "Markets top quickly and bottom slowly",
      "Markets top and bottom at the same pace",
      "Markets top slowly and bottom quickly",
      "Market tops and bottoms are completely unpredictable"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "What does the advance-decline ratio of 5:1 or 10:1 typically indicate?",
    options: [
      "Market equilibrium",
      "Minor intraday fluctuation",
      "One-sided market activity often marking the beginning of significant moves",
      "Market inefficiency to be arbitraged"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "In the Absolute Breadth Index, why are high readings considered bullish?",
    options: [
      "They indicate only advancing stocks",
      "They show one-sided markets with conviction, whether from massive advances or washout declines",
      "They correlate with high trading volume",
      "They only occur during bull markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What is meant by 'participation' in the context of breadth analysis?",
    options: [
      "The number of retail traders in the market",
      "How many stocks are contributing to the index movement",
      "The average daily trading volume",
      "The number of market makers providing liquidity"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "When unchanged issues are present in breadth calculations for 80% and 90% days, how are they typically handled?",
    options: [
      "They are counted as advancing",
      "They are counted as declining",
      "They are typically ignored",
      "They are weighted by volume"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 31,
    question: "What is the mathematical formula for expressing breadth as a percentage of advancing stocks?",
    options: [
      "Advancers / Decliners",
      "Advancers / (Advancers + Decliners)",
      "Advancers - Decliners",
      "(Advancers + Decliners) / Total Issues"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 32,
    question: "What does a negative divergence between the ADL and price at a market top indicate?",
    options: [
      "The uptrend will accelerate",
      "The index keeps grinding higher while fewer stocks participate, suggesting weakness",
      "It is time to add to long positions",
      "The ADL indicator is malfunctioning"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 33,
    question: "For calculating net breadth as a percentage, what is the correct formula?",
    options: [
      "Advancers / Total Issues",
      "Decliners / Total Issues",
      "(Advancers - Decliners) / Total Issues",
      "(Advancers + Decliners) / Total Issues"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 34,
    question: "Why is divergence analysis considered particularly powerful with leadership data (new highs and lows)?",
    options: [
      "It only works with weekly data",
      "It often marks tops and bottoms with pinpoint accuracy using daily or weekly data",
      "It eliminates the need for other indicators",
      "It provides exact price targets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 35,
    question: "What is the relationship between the Absolute Breadth Index concept and Ari Wald's sector culprit indicator?",
    options: [
      "They are completely unrelated",
      "Both share the principle that market leadership requires conviction shown in lopsided numbers",
      "Ari Wald's indicator replaced the Absolute Breadth Index",
      "They use identical mathematical formulas"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "In the context of 80% and 90% days, what emotion do these extreme readings typically represent?",
    options: [
      "Careful deliberation and measured decision-making",
      "Market equilibrium",
      "Capitulation or euphoria",
      "Rational profit-taking"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 37,
    question: "What happens at point A in Figure 5.2.1 that demonstrates effective indicator combination?",
    options: [
      "Only the ADL signals a turn",
      "The ADL shows underlying strength while the stochastic confirms momentum shift",
      "All indicators contradict each other",
      "Price alone provides the signal"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 38,
    question: "Why is the 13-day exponential average used for net volume in Figure 5.2.1?",
    options: [
      "It is the only period that works",
      "It matches the standard MACD settings",
      "To smooth noisy raw data and reveal underlying trends more clearly",
      "It is required by exchange regulations"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 39,
    question: "When monitoring percentage of stocks above moving averages, which scenario indicates the healthiest market condition?",
    options: [
      "30% above 200-day MA with index at new highs",
      "50% above 50-day MA with declining index",
      "75% above 200-day MA with index at new highs",
      "90% above 20-day MA with index unchanged"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 40,
    question: "In uptrend analysis, why is it specifically up volume divergence (not down volume) that matters?",
    options: [
      "Down volume is not measured during uptrends",
      "Because bulls are driving the trend and you need to know when they're exhausting themselves",
      "Up volume is more volatile",
      "Down volume only matters in downtrends by definition"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 41,
    question: "What does the 'net' in net volume or net breadth represent?",
    options: [
      "Volume after deducting trading costs",
      "The difference between up and down (advancing minus declining)",
      "Volume adjusted for stock splits",
      "The average over a period"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "If you observe the market making new highs with an advance-decline ratio of 10:1, what does this suggest?",
    options: [
      "The market is about to reverse",
      "Extreme one-sided buying that may mark the beginning of a significant move",
      "Market inefficiency that will immediately correct",
      "The data is likely erroneous"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 43,
    question: "For longer-term trend analysis of market participation, which moving average period is most appropriate?",
    options: [
      "20-day moving average",
      "50-day moving average",
      "100-day moving average",
      "200-day moving average"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 44,
    question: "What makes leadership indicators particularly well-suited for divergence analysis compared to some other indicators?",
    options: [
      "They are easier to calculate",
      "They provide earlier warnings and often mark tops and bottoms with precision",
      "They don't require historical data",
      "They only work in trending markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 45,
    question: "When the percentage of stocks above their 50-day moving average drops to 30% while the index remains near highs, what is the most prudent interpretation?",
    options: [
      "The market is extremely healthy",
      "This is a strong buy signal",
      "This suggests narrow leadership and potential weakness despite index strength",
      "The 50-day moving average needs recalibration"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 46,
    question: "In breadth analysis, what distinguishes 'raw data' from 'net data'?",
    options: [
      "Raw data is unadjusted; net data shows the difference (advancers minus decliners)",
      "Raw data is daily; net data is weekly",
      "Raw data includes unchanged issues; net data excludes them",
      "There is no practical difference"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 47,
    question: "According to the material, what is the primary value of combining the ADL with other indicators like oscillators?",
    options: [
      "To eliminate false signals entirely",
      "To provide confirmation of underlying strength and more precise timing",
      "To replace traditional price analysis",
      "To reduce the number of indicators needed"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 48,
    question: "When Gerald Appel's percentage of new highs indicator is at 75%, what does this suggest about market conditions?",
    options: [
      "The market is about to crash",
      "The rally is still strong with good leadership participation",
      "It's time to exit all positions",
      "The indicator is in neutral territory"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "What is the most important lesson about market internals for timing trend changes?",
    options: [
      "Internals always lead price exactly by 3 days",
      "Internals should be ignored in favor of price alone",
      "Divergences between internals and price provide early warnings of potential trend changes",
      "Internals are only useful for long-term investing"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 50,
    question: "A trader observes a 90% up day followed by the market making new highs with only 35% of stocks above their 200-day MA. What is the most appropriate interpretation?",
    options: [
      "Perfect bullish alignment - add to long positions aggressively",
      "Mixed signals: strong short-term thrust but weak broad participation suggesting caution",
      "Immediate short opportunity",
      "Ignore the breadth and follow only the 90% day signal"
    ],
    correct: 1,
    hasImage: false
  }
];
