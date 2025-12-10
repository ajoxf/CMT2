const questions = [
  {
    id: 1,
    question: "According to the SEC requirements, corporate insiders must report their transactions within what timeframe after the activity?",
    options: [
      "Within the same trading day",
      "Within two business days",
      "Within five business days",
      "Within ten business days"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the primary reason that insider selling is generally considered less significant than insider buying?",
    options: [
      "Insider selling is illegal in most cases",
      "Insiders can sell for various personal reasons unrelated to company outlook",
      "Insider selling data is not publicly available",
      "The SEC restricts the interpretation of selling data"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "According to research cited in the materials, what abnormal return did the insider purchase portfolio earn per month?",
    options: [
      "More than 25 basis points",
      "More than 50 basis points",
      "More than 75 basis points",
      "More than 100 basis points"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What percentage of abnormal returns from insider purchases accrued within the first five days after the initial transaction?",
    options: [
      "About one-tenth",
      "About one-quarter",
      "About one-third",
      "About one-half"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "How is the 'Days-to-Cover' (DTC) ratio calculated?",
    options: [
      "Average daily share volume divided by aggregate short interest",
      "Aggregate short interest divided by average daily share volume",
      "Total shares outstanding divided by short interest",
      "Short interest divided by total market capitalization"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "A high short interest ratio is viewed by some analysts as bullish for which of the following reasons?",
    options: [
      "It indicates strong company fundamentals",
      "Short sellers may be forced to cover positions by buying shares, adding buying pressure",
      "It shows institutional confidence in the stock",
      "It typically precedes positive earnings announcements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "When must a new corporate insider file their initial ownership report with the SEC?",
    options: [
      "Within 2 days of assuming their position",
      "Within 5 days of assuming their position",
      "Within 10 days of assuming their position",
      "Within 30 days of assuming their position"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "According to the materials, what constitutes a 'cluster of activity' that provides important signals about insider sentiment?",
    options: [
      "Two or more insiders buying or selling",
      "Three or more insiders buying or selling at around the same time",
      "Five or more insiders buying or selling",
      "Ten or more insiders buying or selling"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "Which organization conducts a widely accessible survey measuring the sentiment of individual investors?",
    options: [
      "Securities and Exchange Commission (SEC)",
      "Financial Industry Regulatory Authority (FINRA)",
      "American Association of Individual Investors (AAII)",
      "National Association of Securities Dealers (NASD)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "According to AAII research from June 2014, what was the best contrarian signal?",
    options: [
      "When investors were unusually optimistic",
      "When investors were unusually pessimistic",
      "When investors described themselves as neutral",
      "When investors were evenly split between bullish and bearish"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "After neutral sentiment reached an extreme, what was the median 26-week rise in the S&P 500 according to AAII research?",
    options: [
      "5.2%",
      "8.6%",
      "10.7%",
      "17.7%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "The Investors Intelligence Advisors' Sentiment report has been published since what year?",
    options: [
      "1955",
      "1963",
      "1975",
      "1987"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "How is the Investors Intelligence Advisors' Sentiment report primarily interpreted?",
    options: [
      "As a trend-following indicator",
      "As a momentum indicator",
      "As a contrarian indicator",
      "As a volatility indicator"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 14,
    question: "According to Investors Intelligence, what percentage of advisors being bullish typically signals a market pullback?",
    options: [
      "Over 50%",
      "Over 55%",
      "Over 60%",
      "Over 65%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "For market bottoms, Investors Intelligence notes that at least what percentage of advisors must be bearish?",
    options: [
      "45%",
      "50%",
      "55%",
      "60%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "As of September 2020, how many times had the bearish advisor reading reached 55% or higher since 1987?",
    options: [
      "5 times",
      "10 times",
      "15 times",
      "20 times"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "According to Fischer and Statman's study in the Financial Analysts Journal, what relationship exists between future stock returns and sentiment?",
    options: [
      "A positive relationship",
      "A negative relationship",
      "No relationship",
      "A cyclical relationship"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "When brokerage firms report their short positions on the 15th of each month, when do exchanges publish the compilation?",
    options: [
      "The same day",
      "Three business days later",
      "Eight business days later",
      "Fifteen business days later"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "What is another name for the Days-to-Cover ratio?",
    options: [
      "Short interest index",
      "Short interest ratio",
      "Short coverage ratio",
      "Short position ratio"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "Which type of insider acquisition should generally carry less weight than open market purchases?",
    options: [
      "Shares acquired through inheritance",
      "Shares acquired through options exercised below market price",
      "Shares acquired through direct stock purchase plans",
      "Shares acquired through tender offers"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "Why do insiders often wait to trade until after earnings announcements?",
    options: [
      "To get better prices",
      "Company policies restrict trading before earnings releases",
      "The SEC mandates this waiting period",
      "To avoid market volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "What is the primary purpose of SEC Rule 10b5-1 trading plans for insiders?",
    options: [
      "To maximize insider profits",
      "To provide orderly liquidation and avoid insider trading accusations",
      "To increase company stock liquidity",
      "To comply with tax requirements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "According to the research cited, did the insider sale portfolio earn abnormal returns?",
    options: [
      "Yes, significant positive returns",
      "Yes, but only modest returns",
      "No, it did not earn abnormal returns",
      "The study was inconclusive"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 24,
    question: "What percentage of the time were large cap stocks up six months after neutral sentiment reached an extreme, according to AAII?",
    options: [
      "75%",
      "83%",
      "88%",
      "92%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "A year after neutral sentiment readings reached extreme values, large cap stocks were up what percentage of the time?",
    options: [
      "83%",
      "85%",
      "88%",
      "92%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "In the Big Lots (BIG) example, what technical analysis approach was suggested to be combined with insider buying signals?",
    options: [
      "Moving average crossovers",
      "Chart pattern analysis and resistance breakouts",
      "Volume analysis",
      "Fibonacci retracements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "How many independent investment newsletters does the Investors Intelligence report survey?",
    options: [
      "Over 50",
      "Over 75",
      "Over 100",
      "Over 150"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What three categories does the Investors Intelligence report classify advisors into?",
    options: [
      "Bullish, neutral, and bearish",
      "Bullish, bearish, and expecting a correction",
      "Optimistic, pessimistic, and uncertain",
      "Long, short, and hedged"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "According to Fischer and Statman's study, which groups' sentiment provides statistically significant information?",
    options: [
      "Only Wall Street analysts",
      "Only individual investors",
      "Both Wall Street analysts and individual investors",
      "Only newsletter writers"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "What does short selling involve?",
    options: [
      "Buying securities with borrowed money",
      "Selling securities that the seller does not own",
      "Selling securities at a loss",
      "Buying securities below market price"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 31,
    question: "In highly liquid stocks, what can reduce the significance of short interest as a buying power indicator?",
    options: [
      "High trading volumes",
      "Use of options and other derivatives to establish and cover positions",
      "Frequent earnings announcements",
      "Multiple stock exchanges"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 32,
    question: "Who qualifies as a corporate insider according to SEC requirements?",
    options: [
      "Only the CEO and CFO",
      "Officers, directors, and beneficial owners of more than 5% of equity",
      "Officers, directors, and beneficial owners of more than 10% of equity",
      "All employees with access to financial information"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 33,
    question: "When backtesting trading systems that incorporate insider activity, what critical consideration should analysts observe?",
    options: [
      "Use the date the insider activity took place",
      "Use the date when the data became publicly available",
      "Use the date one week after the activity",
      "Use the date of the next earnings announcement"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "What type of sentiment indicator approach do surveys represent compared to insider buying and short positions?",
    options: [
      "Surveys measure actions while others measure opinions",
      "Surveys measure opinions while others involve capital at risk",
      "Surveys are more reliable than action-based indicators",
      "Surveys are less regulated than action-based indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 35,
    question: "According to the Insider Buy/Sell Ratio chart, when did a notable spike occur that marked a significant market bottom?",
    options: [
      "2007",
      "2009",
      "2011",
      "2015"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 36,
    question: "Which market low was NOT well-marked by the Insider Buy/Sell Ratio according to the updated chart through April 2024?",
    options: [
      "December 2018 low",
      "March 2020 Covid low",
      "October 2022 bear market low",
      "All lows were well-marked"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 37,
    question: "What is a legitimate reason an insider might sell shares that doesn't indicate bearish sentiment?",
    options: [
      "Insider knowledge of negative earnings",
      "Estate planning or portfolio diversification",
      "Expectation of regulatory problems",
      "Knowledge of competitor advantages"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 38,
    question: "According to the research cited, do top executives earn higher abnormal returns from insider trades compared to other insiders?",
    options: [
      "Yes, significantly higher returns",
      "Yes, but only marginally higher",
      "No, they do not earn higher returns",
      "The research did not examine this question"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 39,
    question: "What is the median 52-week rise in the S&P 500 after unusually high neutral sentiment according to AAII?",
    options: [
      "8.6%",
      "10.7%",
      "15.5%",
      "17.7%"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 40,
    question: "In the AAII survey, how is 'neutral' sentiment defined?",
    options: [
      "Expecting modest gains in stock prices",
      "Expecting stock prices to be unchanged over the next six months",
      "Being undecided about market direction",
      "Expecting both gains and losses in different sectors"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 41,
    question: "What was the S&P 500's median return over all 26-week periods throughout AAII survey history?",
    options: [
      "3.2%",
      "5.2%",
      "7.2%",
      "9.2%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 42,
    question: "Which type of newsletters are surveyed by Investors Intelligence?",
    options: [
      "Only those affiliated with major brokerage houses",
      "Independent newsletters not affiliated with brokerage houses or mutual funds",
      "Only institutional research publications",
      "All registered investment advisory newsletters"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 43,
    question: "If an analyst observes five insiders of a company all selling their entire holdings within a two-week period, this would most likely indicate:",
    options: [
      "Routine portfolio rebalancing",
      "A potential bearish signal worth investigating",
      "Compliance with SEC regulations",
      "Normal compensation-related selling"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 44,
    question: "What is the primary risk that motivates short sellers to cover their positions?",
    options: [
      "Regulatory penalties",
      "Dividend payments",
      "Losses from stock price increases",
      "Borrowing costs"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 45,
    question: "According to the materials, sentiment analysis is generally best used:",
    options: [
      "As a standalone indicator",
      "Only with fundamental analysis",
      "In combination with other independent factors",
      "Exclusively for short-term trading"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 46,
    question: "If the short interest ratio for a stock is very high, what does this indicate about investor expectations?",
    options: [
      "Many investors expect the stock to rise",
      "Many investors expect the stock to fall",
      "Investors are neutral on the stock",
      "The stock is likely to merge with another company"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 47,
    question: "What percentage of abnormal returns from insider purchases accrued within the first month?",
    options: [
      "About one-quarter",
      "About one-third",
      "About one-half",
      "About three-quarters"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 48,
    question: "According to Fischer and Statman's research, when advisors, analysts, or individual investors are extremely bearish, what is the likely market condition?",
    options: [
      "The market is likely to continue declining",
      "The market is likely in a downtrend and near a bullish reversal",
      "The market is at a stable equilibrium",
      "The market is likely to experience increased volatility"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 49,
    question: "Why is it important to have a low-latency data source when using insider trading information?",
    options: [
      "To comply with SEC regulations",
      "Because a significant portion of abnormal returns accrue quickly after transactions",
      "To avoid paying higher data fees",
      "To match institutional trading speeds"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 50,
    question: "In practical application, if an analyst sees a cluster of insider buying in a stock that is consolidating near resistance, the optimal strategy would be:",
    options: [
      "Buy immediately regardless of technical patterns",
      "Wait for resistance to be broken, using insider activity as confirmation",
      "Short the stock as insiders are usually wrong",
      "Ignore the insider activity and focus only on technicals"
    ],
    correct: 1,
    hasImage: false
  }
];
