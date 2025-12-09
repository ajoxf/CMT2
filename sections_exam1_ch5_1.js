const questions = [
  {
    id: 1,
    question: "According to Harold M. Gartley, volume that occurs during price advances is designated as:",
    options: [
      "Supply volume",
      "Demand volume",
      "Neutral volume",
      "Distribution volume"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to Harold M. Gartley, volume that occurs during price declines is termed as:",
    options: [
      "Demand volume",
      "Accumulation volume",
      "Supply volume",
      "Panic volume"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "Phase 1 of an uptrend (Strong Demand) is characterized by:",
    options: [
      "Rising prices with declining volume",
      "Rising prices with plenty of volume - the fuel to sustain the rise",
      "Falling prices with rising volume",
      "Sideways prices with neutral volume"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What typically precedes the birth of Phase 1: Strong Demand in a new bull market?",
    options: [
      "An exhaustion of demand",
      "A period of consolidation",
      "An exhaustion of supply",
      "High volume distribution"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "In Phase 1: Strong Demand, what does higher volume provide to the market?",
    options: [
      "A warning signal of reversal",
      "The energy needed to continue higher, confirming the uptrend",
      "Indication of weak hands leaving the market",
      "Evidence of distribution by insiders"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "According to Gartley, when volume tends to decrease during price advances, it is:",
    options: [
      "Bullish",
      "Neutral",
      "Bearish",
      "A sign of accumulation"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "Phase 2: Weak Demand is also referred to as:",
    options: [
      "Early accumulation phase",
      "Late accumulation phase",
      "Early distribution phase",
      "Panic selling phase"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "In Phase 2: Weak Demand, what continues to occur even as volume decreases?",
    options: [
      "Price continues to decline",
      "Price continues to advance as evidenced by ever higher lows",
      "Price moves sideways",
      "Price volatility increases dramatically"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What does decreasing volume during price advances (Phase 2: Weak Demand) indicate?",
    options: [
      "Strong accumulation by institutions",
      "Fading demand or loss of energy required to sustain the rising trend",
      "Market strength and continuation",
      "Smart money entering positions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "In Phase 2: Weak Demand, the divergence between price and volume trends signifies:",
    options: [
      "A healthy, sustainable uptrend",
      "The trend is facing weak demand and may be destabilizing",
      "Accumulation by long-term investors",
      "The beginning of a new strong uptrend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "What characterizes a complacent market in the Weak Demand phase?",
    options: [
      "High volume and aggressive buying",
      "Holders enjoying past appreciation are unwilling to sell except at higher bids, yet fewer buyers at inflated levels",
      "Panic selling by retail investors",
      "Institutional accumulation on weakness"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "According to Gartley, when volume tends to increase during price declines, it is:",
    options: [
      "A bullish indication",
      "A neutral indication",
      "A bearish indication",
      "A sign of capitulation bottom"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "Phase 3: Strong Supply begins when:",
    options: [
      "Volume increases during an uptrend",
      "The primary price trend breaks down below support and the uptrend reverses",
      "Price consolidates at resistance",
      "Market sentiment becomes optimistic"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "In Phase 3: Strong Supply, what does rising volume reveal?",
    options: [
      "That supply is strong and growing",
      "That buyers are aggressively accumulating",
      "That the downtrend is about to reverse",
      "That market makers are supporting prices"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 15,
    question: "What indicates sellers' willingness in Phase 3: Strong Supply?",
    options: [
      "They are holding for higher prices",
      "They are willing to accept ever lower prices for their stock",
      "They are refusing to sell at any price",
      "They are waiting for technical support levels"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "According to Gartley, when volume tends to decrease during price declines, it is:",
    options: [
      "Bearish",
      "Neutral",
      "Bullish",
      "A sign of distribution"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "Phase 4: Weak Supply is characterized by:",
    options: [
      "Rising volume and rising prices",
      "Diminishing volume and rapidly falling prices",
      "High volume and sideways prices",
      "Rising volume and sideways prices"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "The Weak Supply phase can appear in what two primary forms?",
    options: [
      "Slow grind and fast rally",
      "Accumulation and distribution",
      "A panic sell-off or a dull, lackluster decline",
      "Bull trap and bear trap"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "During intermediate and short-term timeframes, how long does Phase 4: Weak Supply typically last when it's a panic sell-off?",
    options: [
      "Several weeks",
      "Several months",
      "Only days",
      "One to two years"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "In primary secular trends of individual stocks, Phase 4: Weak Supply is:",
    options: [
      "Always a quick panic bottom",
      "Less likely to be a quick panic bottom; may persist as long as other phases in a lackluster state",
      "Never occurs in individual stocks",
      "Only lasts one or two days"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What does seller apathy during the Weak Supply phase suggest?",
    options: [
      "The downtrend will accelerate",
      "More selling pressure is building",
      "A new bottoming phase is forming; apathy deprives the market of energy needed for downtrend to sustain",
      "Distribution is beginning"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "According to the material, what indicates the end of Phase 4: Weak Supply and movement back toward Strong Demand?",
    options: [
      "Price making new lows on high volume",
      "Neutral prices after a meaningful decline with volume beginning to rise",
      "Price breaking major resistance",
      "Volume declining to zero"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "According to Ralph Acampora's concept referenced in the material, rising volume with neutral prices after a decline could be a sign of:",
    options: [
      "Distribution and further decline",
      "Accumulation (buying on weakness) and formation of a base",
      "A bull trap",
      "Continued bearish momentum"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "In the airplane analogy for price trends, what does volume represent?",
    options: [
      "The altitude of the plane",
      "The direction of flight",
      "The thrust needed to maintain flight and trajectory",
      "The weight of the plane"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "According to the airplane analogy, what happens if a trend increases its trajectory without a corresponding increase in volume?",
    options: [
      "The trend accelerates further",
      "The trend becomes more stable",
      "The trend risks stalling, like a plane without increased thrust",
      "Nothing happens; volume is irrelevant"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "According to the material, uptrends represent markets in a state of:",
    options: [
      "Distribution",
      "Accumulation",
      "Equilibrium",
      "Capitulation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "According to the material, downtrends reflect a phase of:",
    options: [
      "Accumulation",
      "Base building",
      "Distribution",
      "Consolidation"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What does low volume warn of in trend analysis?",
    options: [
      "An impending change in trend",
      "Trend continuation",
      "Strong institutional buying",
      "Market efficiency"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 29,
    question: "How should a low-volume break of a trend be interpreted?",
    options: [
      "As a strong reversal signal",
      "It discounts the validity of the counter-trend movement or breakout",
      "As confirmation of trend change",
      "As a buying opportunity"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "A trader observes a stock making new highs with each successive rally showing 30% less volume than the previous rally. According to the Four Phases framework, this most likely represents:",
    options: [
      "Phase 1: Strong Demand - a healthy bull market",
      "Phase 2: Weak Demand - early distribution with trend destabilizing",
      "Phase 3: Strong Supply - beginning of downtrend",
      "Phase 4: Weak Supply - bottoming formation"
    ],
    correct: 1,
    hasImage: false
  }
];
