const questions = [
  {
    id: 1,
    question: "What does the Volatility Risk Premium (VRP) represent?",
    options: [
      "The difference between historical and future volatility",
      "The compensation investors earn for providing protection against unexpected market volatility",
      "The cost of purchasing volatility insurance",
      "The premium paid by option buyers to sellers"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to the data from 2004-2022, what was the average amount by which VIX overestimated realized volatility?",
    options: [
      "2.15 points",
      "3.42 points",
      "4.78 points",
      "5.23 points"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "At what VIX level does the material suggest that VRP capture could be consistently achieved?",
    options: [
      "Below 15",
      "Below 20",
      "Below 25",
      "Below 30"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What is a positive spread in the context of volatility risk premium?",
    options: [
      "When realized volatility exceeds implied volatility",
      "When implied volatility equals realized volatility",
      "When implied volatility is greater than realized volatility",
      "When VIX is above 40"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "During the period June 30, 1986 to June 30, 2022, what was the maximum drawdown of the PUT strategy compared to the S&P 500?",
    options: [
      "PUT: -32.7% vs S&P 500: -51%",
      "PUT: -35.8% vs S&P 500: -51%",
      "PUT: -40.2% vs S&P 500: -51%",
      "PUT: -32.7% vs S&P 500: -45%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 6,
    question: "What was the Beta of the BXM (covered call) strategy relative to the S&P 500 during the study period?",
    options: [
      "0.57",
      "0.63",
      "0.75",
      "1.00"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "Which strategy had the lowest standard deviation during the 1986-2022 period?",
    options: [
      "S&P 500 Index (15.3)",
      "BXM strategy (10.9)",
      "PUT strategy (10.2)",
      "All had equal standard deviations"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "What action should a trader take when implied volatility is LESS than realized volatility?",
    options: [
      "Sell volatility through short options",
      "Purchase volatility with long calls or puts",
      "Remain neutral and wait",
      "Increase cash positions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "What is the primary analogy used to describe selling options in the context of VRP?",
    options: [
      "Lending money at interest",
      "Underwriting insurance",
      "Trading commodities",
      "Providing collateral"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "According to the material, what happened to the VIX-realized volatility spread during VIX spikes over 40?",
    options: [
      "The spread widened significantly",
      "The spread remained constant",
      "The spread narrowed, and sometimes VIX dropped below realized volatility",
      "The spread doubled"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "What was the annualized return of the BXM strategy compared to the S&P 500 during 1986-2022?",
    options: [
      "BXM: 8.2% vs S&P 500: 10.2%",
      "BXM: 9.4% vs S&P 500: 10.2%",
      "BXM: 10.2% vs S&P 500: 8.2%",
      "BXM: 11.5% vs S&P 500: 10.2%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 12,
    question: "In which years did VIX notably drop below subsequent realized volatility according to the material?",
    options: [
      "2001 and 2015",
      "2008 and 2020",
      "2010 and 2018",
      "2005 and 2012"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "What was the median value by which VIX overestimated realized volatility during 2004-2022?",
    options: [
      "2.85 points",
      "3.42 points",
      "3.93 points",
      "4.25 points"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "A trader who is long the S&P 500 can capture VRP by:",
    options: [
      "Buying S&P 500 put options",
      "Selling S&P 500 call options",
      "Buying VIX futures",
      "Shorting the S&P 500"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "Which of the following best describes the PUT strategy referenced in the material?",
    options: [
      "Buying protective puts",
      "Selling naked puts",
      "Cash-covered put strategy",
      "Put spread strategy"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What is the primary motivation for option buyers in the VRP framework?",
    options: [
      "To generate income",
      "To hedge against losses",
      "To speculate on volatility increases",
      "To arbitrage price differences"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "According to the material, VRP exists across:",
    options: [
      "Only equity markets",
      "Only index options",
      "All asset classes",
      "Only during high volatility periods"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the primary benefit of the PUT and BXM strategies compared to buy-and-hold S&P 500?",
    options: [
      "Higher returns",
      "Lower drawdowns and standard deviations",
      "Higher Sharpe ratios",
      "Greater leverage"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "When VIX is at 20 or below, what typically occurs according to the 2004-2022 analysis?",
    options: [
      "Realized volatility exceeds implied volatility",
      "Implied volatility overestimates realized volatility",
      "They are equal",
      "Market crashes are imminent"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "What does 'capturing the VRP' specifically refer to?",
    options: [
      "Buying options when volatility is low",
      "Collecting option premiums by selling options",
      "Trading VIX futures",
      "Hedging portfolio risk"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "If a trader expects implied volatility to remain greater than realized volatility, which strategy is most appropriate?",
    options: [
      "Buy call options",
      "Buy put options",
      "Sell call or put options",
      "Buy straddles"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "What is the Beta of the PUT strategy relative to the S&P 500?",
    options: [
      "0.43",
      "0.57",
      "0.63",
      "0.75"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "Which strategy had a higher maximum drawdown: PUT or BXM?",
    options: [
      "PUT (-32.7%)",
      "BXM (-35.8%)",
      "They were equal",
      "Neither had a drawdown"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "According to the material, selling options spreads against U.S. Treasuries can:",
    options: [
      "Eliminate all portfolio risk",
      "Guarantee positive returns",
      "Capture VRP and enhance returns",
      "Replace equity exposure"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "What happens to the VRP during extreme market stress (VIX > 40)?",
    options: [
      "It increases dramatically",
      "It remains constant",
      "It can become negative or significantly compressed",
      "It doubles"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "The 21-day realized volatility measurement used in the analysis represents:",
    options: [
      "Forward-looking volatility expectations",
      "Historical volatility over the subsequent 21 trading days",
      "Average volatility over the past 21 days",
      "Annualized volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "Which crisis event showed VIX dropping below realized volatility?",
    options: [
      "Dot-com bubble (2000)",
      "Great Financial Crisis (2008)",
      "Flash Crash (2010)",
      "Brexit (2016)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "What was the standard deviation of the S&P 500 during the 1986-2022 study period?",
    options: [
      "10.2",
      "10.9",
      "12.5",
      "15.3"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 29,
    question: "A portfolio manager implements a covered call strategy. This approach is most suitable when:",
    options: [
      "Expecting significant market rallies",
      "Implied volatility is high relative to expected realized volatility",
      "During extreme market downturns",
      "VIX is above 40"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "According to the material, VIX options and futures can be used for all EXCEPT:",
    options: [
      "Tail risk hedging",
      "Portfolio risk management",
      "Eliminating all market risk",
      "Alpha generation strategies"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 31,
    question: "The principle of VRP capture applies to:",
    options: [
      "Only S&P 500 options",
      "Only equity index options",
      "Individual stocks and all optionable asset classes",
      "Only during bull markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 32,
    question: "What is the key trade-off of implementing PUT or BXM strategies versus buy-and-hold S&P 500?",
    options: [
      "Higher returns with higher risk",
      "Lower returns with lower risk/drawdowns",
      "Equal returns with lower risk",
      "Higher returns with equal risk"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 33,
    question: "During the COVID-19 crisis (2020), what happened to the VIX relative to realized volatility?",
    options: [
      "VIX significantly overestimated realized volatility",
      "VIX dropped below realized volatility",
      "They remained equal",
      "VIX became irrelevant"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "An investor sells put options on the S&P 500 when VIX is at 18. This strategy is attempting to:",
    options: [
      "Speculate on market decline",
      "Hedge long equity positions",
      "Capture the volatility risk premium",
      "Increase portfolio beta"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 35,
    question: "The cash-covered put strategy requires the seller to:",
    options: [
      "Own the underlying stock",
      "Have cash to purchase the stock if assigned",
      "Maintain a margin account only",
      "Simultaneously sell call options"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "Which metric suggests that PUT and BXM strategies could serve as diversification tools?",
    options: [
      "Higher returns than S&P 500",
      "Betas below 1.0 (0.57 and 0.63)",
      "Zero correlation to equities",
      "Negative standard deviations"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 37,
    question: "When should a trader consider buying volatility through long options positions?",
    options: [
      "When VIX is above 40",
      "When implied volatility is greater than realized volatility",
      "When implied volatility is less than realized volatility",
      "Always, regardless of volatility levels"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 38,
    question: "The covered call (BXM) strategy involves:",
    options: [
      "Buying calls and selling puts",
      "Owning the underlying and selling call options",
      "Selling naked call options",
      "Buying protective puts"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 39,
    question: "What was the annualized return of the PUT strategy during 1986-2022?",
    options: [
      "8.2%",
      "9.4%",
      "10.2%",
      "11.5%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 40,
    question: "A trader observes VIX at 15 with 21-day realized volatility historically around 12. The optimal strategy would be to:",
    options: [
      "Buy volatility through long options",
      "Sell volatility through short options",
      "Avoid options trading",
      "Buy VIX futures"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 41,
    question: "The upfront cost paid by an option buyer is called:",
    options: [
      "The strike price",
      "The premium",
      "The spread",
      "The margin"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "According to the material, expressing a market view through options rather than the underlying asset allows traders to:",
    options: [
      "Avoid all risk",
      "Guarantee profits",
      "Express directional views without committing to the underlying",
      "Eliminate volatility exposure"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 43,
    question: "During which market condition did the spread between VIX and realized volatility narrow most significantly?",
    options: [
      "When VIX was below 15",
      "When VIX was between 15-20",
      "When VIX spiked above 40",
      "During stable market periods"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 44,
    question: "A portfolio with high correlation to the S&P 500 can enhance returns by:",
    options: [
      "Buying index puts for protection",
      "Selling call options against the position",
      "Increasing leverage",
      "Selling the entire position"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 45,
    question: "The seller of an option in the VRP framework is motivated by:",
    options: [
      "Hedging existing positions",
      "Profiting from selling/underwriting options",
      "Protecting against losses",
      "Avoiding market exposure"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 46,
    question: "What does a Beta of 0.57 for the PUT strategy indicate?",
    options: [
      "The strategy moves 57% as much as the market",
      "The strategy has 57% correlation to the market",
      "The strategy has 57% of the market's return",
      "The strategy is 57% less risky in all scenarios"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 47,
    question: "Which statement about VRP is FALSE according to the material?",
    options: [
      "VRP exists across all asset classes",
      "VRP can only be captured when VIX is below 20",
      "VRP represents compensation for providing volatility protection",
      "VRP can be captured through various option strategies"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 48,
    question: "A trader implementing VRP capture strategies should monitor:",
    options: [
      "Only the VIX level",
      "The spread between implied and realized volatility",
      "Only historical volatility",
      "Interest rates exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "The material suggests that PUT and BXM strategies are most appropriate for investors seeking:",
    options: [
      "Maximum returns regardless of risk",
      "Reduced drawdowns and volatility with modest return reduction",
      "Leveraged equity exposure",
      "Market-neutral returns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 50,
    question: "According to the 2004-2022 analysis, the typical relationship between VIX and subsequent 21-day realized volatility when VIX ≤ 20 was:",
    options: [
      "VIX underestimated realized volatility",
      "VIX accurately predicted realized volatility",
      "VIX overestimated realized volatility",
      "No consistent relationship existed"
    ],
    correct: 2,
    hasImage: false
  }
];
