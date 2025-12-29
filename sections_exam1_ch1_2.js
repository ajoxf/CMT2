const questions = [
  {
    id: 1,
    question: "What is the primary goal of Fusion Analysis in technical analysis?",
    options: [
      "To use only technical indicators for trading decisions",
      "To integrate technical analysis with fundamental and quantitative analysis as part of a comprehensive team approach",
      "To replace fundamental analysis entirely",
      "To focus solely on chart patterns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "In a Fusion Analysis approach, how does technical analysis complement fundamental analysis?",
    options: [
      "It completely replaces the need for fundamental analysis",
      "It provides timing and entry/exit signals while fundamental analysis identifies value",
      "It has no relationship with fundamental analysis",
      "It only works independently from fundamental analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What is one advantage of using a team approach that combines technical and fundamental analysis?",
    options: [
      "It eliminates all investment risk",
      "It provides multiple perspectives and helps validate investment decisions",
      "It guarantees profitable trades",
      "It removes the need for risk management"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "When integrating technical analysis into a team framework, what role does the technical analyst typically play?",
    options: [
      "Making all final investment decisions alone",
      "Only creating charts for presentation purposes",
      "Providing market timing, trend identification, and risk management insights",
      "Focusing exclusively on long-term value investing"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "How does Fusion Analysis help improve investment decision-making?",
    options: [
      "By using only one analytical method",
      "By combining different analytical approaches to get a more complete market picture",
      "By eliminating the need for analyst collaboration",
      "By focusing only on short-term price movements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What is a key benefit of technical analysts working alongside quantitative analysts?",
    options: [
      "Technical analysts can provide visual pattern recognition while quants provide statistical validation",
      "They work in complete isolation from each other",
      "One completely replaces the other's function",
      "There is no benefit to their collaboration"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 7,
    question: "In Fusion Analysis, what aspect of market analysis do technical analysts uniquely contribute?",
    options: [
      "Company earnings estimates",
      "Balance sheet analysis",
      "Price trends, support/resistance levels, and market sentiment indicators",
      "Macroeconomic forecasting only"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "How can technical analysis support portfolio managers in a team environment?",
    options: [
      "By completely controlling all trading decisions",
      "By providing risk management signals and optimal entry/exit timing",
      "By ignoring fundamental factors entirely",
      "By focusing only on individual stock selection"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What is the relationship between technical and fundamental analysis in Fusion Analysis?",
    options: [
      "They are mutually exclusive approaches",
      "They are complementary tools that address different aspects of market analysis",
      "Technical analysis is always superior to fundamental analysis",
      "They cannot be used together effectively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "In a Fusion Analysis framework, what information gap does technical analysis help fill?",
    options: [
      "Company financial statement details",
      "Market timing, trend strength, and behavioral factors not captured by fundamentals",
      "Accounting procedures and audit results",
      "Management quality assessment"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "Why is communication important in a Fusion Analysis team approach?",
    options: [
      "It's not important - analysts should work in isolation",
      "Different analytical perspectives need to be shared and integrated for comprehensive decision-making",
      "Only the senior analyst's view matters",
      "Communication slows down the investment process"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "How does technical analysis add value when combined with quantitative models?",
    options: [
      "It provides visual confirmation and practical market context to statistical models",
      "It completely replaces the need for quantitative analysis",
      "It has no relationship with quantitative methods",
      "It only focuses on historical data without forward-looking insights"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 13,
    question: "What is one challenge of implementing Fusion Analysis in an investment team?",
    options: [
      "It requires analysts from different disciplines to understand and respect each other's methodologies",
      "It's impossible to integrate different analytical approaches",
      "Technical analysis cannot work with other methods",
      "There are no challenges - implementation is always seamless"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 14,
    question: "In Fusion Analysis, when might a technical analyst override a fundamental buy signal?",
    options: [
      "Never - technical analysis is subordinate to fundamental analysis",
      "When technical indicators show strong bearish trends or breakdown patterns despite fundamental value",
      "Always - technical signals always take priority",
      "Only during bull markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "How can Fusion Analysis improve risk management in portfolio management?",
    options: [
      "By eliminating all portfolio risk",
      "By combining fundamental valuation metrics with technical risk indicators like support levels and volatility measures",
      "By focusing only on return maximization",
      "Risk management is not part of Fusion Analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "What role do behavioral factors play in Fusion Analysis?",
    options: [
      "They are ignored completely",
      "Technical analysis can identify behavioral patterns that complement fundamental valuation",
      "Only fundamental analysts consider behavioral factors",
      "Behavioral factors have no place in professional analysis"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "How does technical analysis support fundamental analysts in identifying entry points?",
    options: [
      "It doesn't - they work completely independently",
      "It helps time purchases of fundamentally sound companies at technically favorable price levels",
      "Fundamental analysts don't need help with entry points",
      "Technical analysis only identifies exit points"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What is a potential drawback of NOT using a Fusion Analysis approach?",
    options: [
      "Too much information to process",
      "Missing important signals that one analytical method alone might not capture",
      "It costs too much money",
      "There are no drawbacks - single methods are always superior"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "In Fusion Analysis, how should conflicting signals between technical and fundamental analysis be handled?",
    options: [
      "Always favor technical signals",
      "Always favor fundamental signals",
      "Investigate the reasons for divergence and consider waiting for alignment or additional confirmation",
      "Ignore both signals and make random decisions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "What makes Fusion Analysis particularly effective in modern markets?",
    options: [
      "Markets are influenced by both rational valuation and behavioral/technical factors that require multiple analytical lenses",
      "It's easier than using single methods",
      "It guarantees profits in all market conditions",
      "It eliminates the need for investment research"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 21,
    question: "How can technical analysis help validate fundamental research conclusions?",
    options: [
      "It cannot - they are unrelated",
      "Price action and volume can confirm or question the market's acceptance of fundamental thesis",
      "Validation is unnecessary in investment analysis",
      "Only fundamental analysis can validate technical signals, not vice versa"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "What skill is essential for analysts working in a Fusion Analysis environment?",
    options: [
      "The ability to work in complete isolation",
      "Understanding and communicating across different analytical disciplines",
      "Expertise in only one analytical method",
      "Ignoring other analysts' perspectives"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "In Fusion Analysis, what can technical analysis reveal about market sentiment?",
    options: [
      "Nothing - sentiment analysis is not part of technical analysis",
      "Price patterns, volume trends, and momentum indicators can reveal investor psychology and sentiment shifts",
      "Only fundamental analysis can assess sentiment",
      "Sentiment is irrelevant to investment decisions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "How does Fusion Analysis benefit portfolio construction?",
    options: [
      "It doesn't affect portfolio construction",
      "It enables better asset allocation, timing, and risk management by integrating multiple analytical perspectives",
      "It complicates the process unnecessarily",
      "It only works for individual stock selection"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What is the primary advantage of combining technical and fundamental analysis for sell decisions?",
    options: [
      "There is no advantage",
      "Fundamental analysis identifies when value has been realized while technical analysis signals deteriorating price trends or momentum",
      "It makes decisions more complicated",
      "Only one method should be used for sell decisions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "In a Fusion Analysis team, how should technical analysts present their findings?",
    options: [
      "Using only technical jargon that others won't understand",
      "In clear, accessible language that integrates with other analysts' frameworks",
      "They shouldn't present - only listen",
      "Only through complex charts without explanation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "What market condition particularly benefits from Fusion Analysis?",
    options: [
      "Only bull markets",
      "Only bear markets",
      "All market conditions, as different analytical approaches provide complementary insights",
      "Fusion Analysis doesn't work in any market condition"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "How can technical analysis help quantitative strategies in a Fusion framework?",
    options: [
      "It cannot help quantitative strategies",
      "It provides pattern recognition and market regime identification that can enhance model performance",
      "It replaces all quantitative methods",
      "Quantitative analysts don't need any other input"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What is a sign of successful Fusion Analysis implementation?",
    options: [
      "One analytical method dominates all decisions",
      "Analysts work in separate silos without communication",
      "Different analytical perspectives are integrated and contribute to more robust investment decisions",
      "Only senior management makes all final decisions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "Why is Fusion Analysis considered a 'team approach' to technical analysis?",
    options: [
      "Because it requires multiple people to read one chart",
      "Because it integrates technical analysis with other analytical disciplines and promotes collaboration",
      "Because team is just a marketing term with no real meaning",
      "Because only teams can use technical analysis"
    ],
    correct: 1,
    hasImage: false
  }
];
