const questions = [
  {
    id: 1,
    question: "Why are VIX calls the predominant vehicle for risk management purposes?",
    options: [
      "They are positively correlated with the S&P 500",
      "They are negatively correlated with the S&P 500 and their premiums increase during SPX corrections",
      "They have unlimited profit potential",
      "They require no initial capital"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to the material, what was the reported increase in VIX call volumes in 2023?",
    options: [
      "16%",
      "32%",
      "54%",
      "78%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "What was the percentage increase in VIX put volumes during 2023?",
    options: [
      "8%",
      "16%",
      "24%",
      "54%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What is the all-time high for the VIX 2M (25-delta) call/put ratio mentioned in the material?",
    options: [
      "1.2",
      "1.5",
      "1.7",
      "2.0"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "How does the put/call volume relationship for VIX options differ from S&P 500 options?",
    options: [
      "VIX options have equal put and call volumes",
      "VIX call volumes exceed put volumes during crises, opposite to SPX options",
      "VIX put volumes exceed call volumes during crises",
      "There is no difference between the two"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What trading capability has the Cboe Options Exchange introduced for VIX and SPX options?",
    options: [
      "12-hour trading Monday through Friday",
      "24-hour/five-day-a-week trading",
      "24-hour/seven-day-a-week trading",
      "Weekend-only trading"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What is 'basis risk' in the context of hedging?",
    options: [
      "The risk of the hedge being too expensive",
      "The risk that losses in the investment are not exactly offset by the hedge",
      "The risk of the option expiring worthless",
      "The risk of excessive volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "What is the maximum delta an in-the-money S&P 500 put option reaches at expiration?",
    options: [
      "0.5",
      "0.75",
      "1",
      "1.5"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "What does 'rolling' or 'rolling up' a strike price refer to in options trading?",
    options: [
      "Closing one option position and opening another to keep the hedge effective",
      "Increasing the number of contracts",
      "Extending the expiration date without changing the strike",
      "Converting calls to puts"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 10,
    question: "What does a high SPX put/call ratio typically indicate as a contrarian signal?",
    options: [
      "Market top is near",
      "Extreme bearishness that may lay foundation for rallies",
      "Neutral market conditions",
      "Continued downtrend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "During the February 19 to March 17, 2020 period, what was the percentage decline in the S&P 500?",
    options: [
      "15.7%",
      "20.5%",
      "25.3%",
      "30.8%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "During the same period (Feb 19 - Mar 17, 2020), what was the percentage increase in the VIX Index?",
    options: [
      "258%",
      "358%",
      "428%",
      "528%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "What profit percentage did long first-month VIX futures (F1) generate during the Feb-Mar 2020 correction?",
    options: [
      "258%",
      "358%",
      "428%",
      "6393%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "What was the remarkable profit percentage for VIX March 20 call options during the Feb-Mar 2020 correction?",
    options: [
      "358%",
      "1250%",
      "3500%",
      "6393%"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 15,
    question: "What percentage of VIX movements do near-month futures typically capture during S&P 500 corrections?",
    options: [
      "50-60%",
      "65-75%",
      "80-85%",
      "95-100%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What percentage of the time do markets remain in contango according to the material?",
    options: [
      "45-55%",
      "55-65%",
      "65-75%",
      "75-85%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "What is the main disadvantage of holding long VIX futures during contango periods?",
    options: [
      "Unlimited loss potential",
      "Roll costs involve selling declining futures and buying higher-priced ones",
      "Margin requirements increase",
      "Liquidity disappears"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What does the ProShares VIX short-term futures ETF (VIXY) chart demonstrate?",
    options: [
      "Consistent upward trend matching SPX",
      "Brief spikes during corrections but overall downtrend due to roll costs in contango",
      "Perfect negative correlation to SPX",
      "Zero correlation to market movements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "What is the portfolio weight of VIX calls in the VXTH strategy when front-month VIX futures trade between 15 and 30?",
    options: [
      "0%",
      "0.5%",
      "1%",
      "2%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "In the VXTH strategy, what happens when the first-month VIX futures value exceeds 50?",
    options: [
      "Portfolio weight increases to 2%",
      "Portfolio weight increases to 1.5%",
      "Portfolio weight remains at 0.5%",
      "VIX calls are liquidated"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 21,
    question: "What delta VIX call options does the VXTH strategy use?",
    options: [
      "15-delta",
      "25-delta",
      "30-delta",
      "50-delta"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "What was the annualized return of the VXTH strategy from April 2006 to February 2024?",
    options: [
      "8.5%",
      "10.0%",
      "10.1%",
      "12.3%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What was the maximum drawdown of the VXTH strategy compared to the S&P 500?",
    options: [
      "VXTH: -37.4% vs S&P 500: -51.0%",
      "VXTH: -43.0% vs S&P 500: -51.0%",
      "VXTH: -32.7% vs S&P 500: -51.0%",
      "VXTH: -28.2% vs S&P 500: -51.0%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 24,
    question: "What is the downside deviation (MAR = 0%) of the VXTH strategy versus the S&P 500?",
    options: [
      "VXTH: 6.5% vs S&P 500: 10.4%",
      "VXTH: 7.8% vs S&P 500: 10.4%",
      "VXTH: 8.6% vs S&P 500: 10.4%",
      "VXTH: 10.2% vs S&P 500: 10.4%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "What does the PPUT strategy involve?",
    options: [
      "Buying 10% out-of-the-money puts quarterly",
      "Selling puts to generate income",
      "Buying one-month 5% out-of-the-money put options on SPX",
      "Creating a put spread"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "What is the key feature of the PPUT3M strategy?",
    options: [
      "Monthly 5% OTM puts",
      "Quarterly 10% out-of-the-money SPX put options",
      "Weekly put options",
      "Annual put options"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "How does the CLL (Collar) strategy finance the long put position?",
    options: [
      "By borrowing on margin",
      "By selling a 10% out-of-the-money SPX call with the same expiration",
      "By selling multiple puts",
      "By using leverage"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "What characterizes the CLLZ (zero-cost collar) strategy?",
    options: [
      "No options are purchased",
      "Put vertical spread (buying 2.5% put, selling 5% put) financed by selling a call",
      "Only calls are used",
      "Free money with no risk"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "What was the annualized return of the PPUT strategy from April 2006 to February 2024?",
    options: [
      "6.0%",
      "7.5%",
      "8.5%",
      "10.0%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "Which SPX put strategy had the lowest maximum drawdown during the study period?",
    options: [
      "PPUT (-38.2%)",
      "CLL (-35.0%)",
      "CLL3M (-28.2%)",
      "CLLZ (-43.0%)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 31,
    question: "What was the standard deviation of the CLL3M (three-month collar) strategy?",
    options: [
      "9.8%",
      "10.7%",
      "11.9%",
      "12.2%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 32,
    question: "Which strategy provided the best annualized return among all strategies reviewed?",
    options: [
      "S&P 500 buy and hold (10.1%)",
      "VXTH (10.0%)",
      "CLL3M (6.0%)",
      "PPUT (7.5%)"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 33,
    question: "What is 'convexity' in the context of VIX options?",
    options: [
      "The linear relationship between price and volatility",
      "The sensitivity of the option's price to changes in the underlying asset's price (multiplier effect)",
      "The cost of rolling futures",
      "The time decay of options"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "Why are VIX calls more convex than VIX futures?",
    options: [
      "They are cheaper",
      "They have unlimited loss potential",
      "Due to an increase in implied volatility, leading to amplified value increases",
      "They expire more frequently"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 35,
    question: "A portfolio manager is concerned about tail risk with VIX futures at 18. According to VXTH strategy, what action should be taken?",
    options: [
      "No action - futures below 15",
      "Purchase 1% portfolio weight in one-month 30-delta VIX calls",
      "Purchase 0.5% portfolio weight in VIX calls",
      "Liquidate all positions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 36,
    question: "What is the primary advantage of SPX put options over VIX calls for hedging?",
    options: [
      "Lower cost",
      "They move with the underlying without basis risk",
      "Higher convexity",
      "Better liquidity"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 37,
    question: "What is the main drawback of the CLLZ strategy evident in its performance metrics?",
    options: [
      "Highest maximum drawdown (-43%) among collar strategies",
      "Lowest returns",
      "Highest standard deviation",
      "Most complex to implement"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 38,
    question: "When implementing a collar strategy (CLL), what is the typical positioning of the short call?",
    options: [
      "5% out-of-the-money",
      "At-the-money",
      "10% out-of-the-money",
      "20% out-of-the-money"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 39,
    question: "Why are VIX futures NOT advisable for hedging long-term 'buy and hold' strategies?",
    options: [
      "Too expensive",
      "Illiquid markets",
      "Roll costs in contango markets create a material drag on profitability",
      "Regulatory restrictions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 40,
    question: "In the VXTH strategy, when front-month VIX futures are between 30 and 50, what is the portfolio weight adjustment?",
    options: [
      "Increase to 2%",
      "Maintain at 1%",
      "Reduce to 0.5%",
      "Liquidate completely"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 41,
    question: "What is the key trade-off when implementing protective put strategies like PPUT?",
    options: [
      "Higher returns with higher risk",
      "Lower returns but reduced drawdowns and standard deviations",
      "Equal returns with no risk reduction",
      "No trade-off exists"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "According to the material, excessive call volumes versus put volumes in SPX options could indicate:",
    options: [
      "Market bottoms",
      "Neutral sentiment",
      "Market tops as bullish enthusiasm peaks",
      "Increased volatility ahead"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 43,
    question: "What happens during 'rolling' VIX futures in a contango market?",
    options: [
      "Profits are maximized",
      "Futures are sold at higher prices and bought at lower prices",
      "Futures that have declined in value are sold and higher-priced ones are purchased",
      "No impact on portfolio value"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 44,
    question: "What was the downside deviation of the CLL3M strategy?",
    options: [
      "6.5%",
      "7.8%",
      "8.6%",
      "10.4%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 45,
    question: "An investor observes VIX futures at 55. Using VXTH strategy guidelines, what should be done with existing VIX call positions?",
    options: [
      "Increase position size",
      "Maintain current positions",
      "Reduce to 0.5% weight",
      "Liquidate VIX calls as futures exceed 50"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 46,
    question: "What is the primary benefit of the VXTH strategy's dynamic approach?",
    options: [
      "Maximum returns in all markets",
      "Deploying risk management only when tail-risk probability increases, minimizing impact on returns",
      "Eliminating all downside risk",
      "Guaranteed profits"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 47,
    question: "What distinguishes VIX calls from VIX futures in terms of risk management during crises?",
    options: [
      "VIX calls have unlimited risk",
      "VIX calls have lower risk as loss is limited to premium paid and exhibit greater convexity",
      "VIX futures are always superior",
      "There is no difference"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 48,
    question: "Which strategy had the highest annualized return among all SPX put-based strategies?",
    options: [
      "PPUT3M (7.9%)",
      "PPUT (7.5%)",
      "CLL (6.4%)",
      "CLLZ (6.5%)"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 49,
    question: "What is the fundamental principle behind the key to effective risk management strategies?",
    options: [
      "Maximize returns regardless of risk",
      "Limit downside risk while giving up minimal upside returns",
      "Eliminate all volatility exposure",
      "Focus only on cost reduction"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 50,
    question: "Based on the performance data, which strategy combination provides the best balance of return and risk reduction?",
    options: [
      "S&P 500 buy and hold for maximum returns",
      "VXTH for best annualized return (10.0%) with moderate risk reduction",
      "CLL3M for maximum downside protection (-28.2% drawdown) despite lower returns",
      "CLLZ for zero-cost implementation"
    ],
    correct: 1,
    hasImage: false
  }
];
