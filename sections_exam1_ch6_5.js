const questions = [
  {
    id: 1,
    question: "During the February 19 to March 17, 2020 crisis period, what was the approximate multiplier effect of VIX call options compared to the VIX Index movement?",
    options: [
      "Approximately 5-fold increase",
      "Approximately 10-fold increase",
      "Approximately 15-fold increase",
      "Approximately 20-fold increase"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 2,
    question: "What was the closing value of the VIX Index on February 19, 2020, before the COVID-19 market correction?",
    options: [
      "10.25",
      "14.38",
      "18.50",
      "20.75"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What was the VIX Index value on March 17, 2020, at the height of the COVID-19 correction?",
    options: [
      "58.42",
      "65.30",
      "75.91",
      "82.69"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 4,
    question: "What was the initial price of VIX March 20 call options on February 19, 2020?",
    options: [
      "$0.45",
      "$0.75",
      "$1.25",
      "$2.00"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "What price did VIX March 20 call options reach on March 17, 2020?",
    options: [
      "$32.50",
      "$40.25",
      "$48.70",
      "$55.80"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 6,
    question: "What percentage of VIX Index movements do near-month VIX futures typically capture during S&P 500 corrections?",
    options: [
      "60-70%",
      "70-75%",
      "80-85%",
      "90-95%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "According to the material, what percentage of the time do markets remain in contango?",
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
    id: 8,
    question: "What is the fundamental problem with holding long VIX futures during contango periods?",
    options: [
      "Margin requirements increase exponentially",
      "Liquidity dries up completely",
      "Roll costs involve selling declined futures and buying higher-priced ones",
      "Futures become non-tradable"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "The ProShares VIX short-term futures ETF (VIXY) demonstrates what characteristic over time?",
    options: [
      "Consistent upward trend matching SPX",
      "Brief spikes during corrections but overall downtrend due to roll costs",
      "Perfect hedge with no cost",
      "Stable value regardless of market conditions"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "In the VXTH strategy, what is the portfolio weight allocation when front-month VIX futures trade below 15?",
    options: [
      "0%",
      "0.5%",
      "1%",
      "2%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 11,
    question: "What delta VIX call options does the VXTH (VIX Tail Hedge Index) strategy utilize?",
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
    id: 12,
    question: "In the VXTH strategy, when first-month VIX futures are between 15 and 30, what portfolio weight is allocated to VIX calls?",
    options: [
      "0.25%",
      "0.5%",
      "1%",
      "1.5%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "What happens in the VXTH strategy when first-month VIX futures trade between 30 and 50?",
    options: [
      "Position is liquidated",
      "Weight increases to 1.5%",
      "Weight is reduced to 0.5%",
      "Weight remains at 1%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "In the VXTH strategy, what action is taken when first-month VIX futures exceed 50?",
    options: [
      "Double the position",
      "Reduce weight to 0.25%",
      "Maintain current allocation",
      "Liquidate VIX calls"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 15,
    question: "What was the annualized return of the VXTH strategy from April 2006 to February 2024?",
    options: [
      "8.5%",
      "9.2%",
      "10.0%",
      "10.8%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What was the standard deviation of the VXTH strategy compared to the S&P 500 Index?",
    options: [
      "VXTH: 15.5% vs S&P 500: 17.8%",
      "VXTH: 17.8% vs S&P 500: 15.5%",
      "VXTH: 12.1% vs S&P 500: 15.5%",
      "VXTH: 17.8% vs S&P 500: 10.4%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "What describes the PPUT strategy?",
    options: [
      "Quarterly 10% OTM put purchases",
      "Monthly 5% out-of-the-money put option purchases on SPX",
      "Weekly put option rolling",
      "Selling puts for income"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What is the key characteristic of the PPUT3M strategy?",
    options: [
      "Monthly 5% OTM puts",
      "Quarterly 5% OTM puts",
      "Quarterly 10% out-of-the-money SPX put options",
      "Annual put options"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "How does the CLL (Collar) strategy finance the long put position?",
    options: [
      "Through margin borrowing",
      "By selling a 10% out-of-the-money SPX call with the same expiration",
      "By selling multiple puts",
      "Through leverage"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "What characterizes the CLLZ (zero-cost collar) strategy?",
    options: [
      "No options are used",
      "Only calls are sold",
      "Put vertical spread (buying 2.5% put, selling 5% put) financed by selling a call",
      "Unlimited risk with no premium"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What was the annualized return of the PPUT strategy from April 2006 to February 2024?",
    options: [
      "6.0%",
      "6.5%",
      "7.5%",
      "8.5%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "What was the standard deviation of the PPUT strategy?",
    options: [
      "9.8%",
      "10.7%",
      "12.1%",
      "15.5%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 23,
    question: "Which strategy had the lowest maximum drawdown among all SPX put-based strategies reviewed?",
    options: [
      "PPUT with -38.2%",
      "CLL with -35.0%",
      "CLL3M with -28.2%",
      "PPUT3M with -37.4%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "What was the downside deviation (MAR = 0%) of the CLL3M strategy?",
    options: [
      "6.5%",
      "6.9%",
      "7.8%",
      "8.4%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 25,
    question: "What was the annualized return of the CLL3M (three-month collar) strategy?",
    options: [
      "6.0%",
      "6.4%",
      "7.5%",
      "7.9%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 26,
    question: "Which strategy had the highest maximum drawdown among the SPX put-based strategies?",
    options: [
      "PPUT (-38.2%)",
      "CLL (-35.0%)",
      "CLLZ (-43.0%)",
      "CLL3M (-28.2%)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "A portfolio manager observes VIX futures at 22. According to VXTH strategy guidelines, what is the appropriate action?",
    options: [
      "No VIX call allocation",
      "Allocate 0.5% to VIX calls",
      "Allocate 1% to one-month 30-delta VIX calls",
      "Liquidate all positions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "An investor implementing a tail-risk hedge observes VIX futures at 45. Using VXTH principles, what adjustment should be made?",
    options: [
      "Increase allocation to 1.5%",
      "Maintain 1% allocation",
      "Reduce allocation to 0.5%",
      "Liquidate VIX calls completely"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "Comparing all strategies reviewed, which provided the best balance of annualized return while maintaining risk reduction?",
    options: [
      "S&P 500 buy and hold (10.1% return)",
      "VXTH (10.0% return with -37.4% drawdown)",
      "CLL3M (6.0% return with -28.2% drawdown)",
      "PPUT3M (7.9% return with -37.4% drawdown)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "What is the fundamental trade-off principle for effective risk management strategies according to the material?",
    options: [
      "Maximize returns regardless of risk",
      "Eliminate all volatility at any cost",
      "Limit downside risk while giving up minimal upside returns",
      "Focus solely on reducing standard deviation"
    ],
    correct: 2,
    hasImage: false
  }
];
