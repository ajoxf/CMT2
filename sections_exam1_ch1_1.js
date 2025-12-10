const questions = [
  {
    id: 1,
    question: "What is the definition of alpha in portfolio management?",
    options: [
      "The total return of a portfolio over a given period",
      "The excess returns earned above or below the market index to which performance is benchmarked",
      "The volatility measure of a portfolio compared to the market",
      "The risk-adjusted return divided by the Sharpe ratio"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What does a beta of 1.0 represent?",
    options: [
      "The investment is twice as volatile as the market",
      "The investment has no correlation with the market",
      "The average market beta, indicating the investment moves in line with the market",
      "The investment is half as volatile as the market"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "In the alpha formula α = Rp - (Rf + β × (Rm - Rf)), what does Rf represent?",
    options: [
      "Return of the fund",
      "Risk-free rate (typically the 10-year note yield)",
      "Relative frequency of trading",
      "Return factor adjustment"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "According to the curriculum, from a technical analyst's perspective, where should one expect to find alpha?",
    options: [
      "Only in large-cap growth stocks",
      "In assets that trade at high volumes exclusively",
      "Wherever asset prices are likely to outperform market averages for significant periods, identifying predictable trends",
      "Only in emerging market securities"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "Which technical tools are mentioned as good candidates for finding alpha through trend identification?",
    options: [
      "Only fundamental analysis ratios",
      "Moving averages, oscillators, and price envelope tools like Bollinger Bands, Donchian channels, and Keltner channels",
      "Only volume indicators",
      "Exclusively candlestick patterns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "According to proponents of the Efficient Markets Hypothesis (EMH), what is the likelihood of finding predictable sources of new trends through price action study?",
    options: [
      "Highly likely and recommended",
      "Guaranteed to work in all markets",
      "Not likely to be worth the time and effort to exploit",
      "Only possible in bear markets"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "What did Eugene Fama say about the EMH model?",
    options: [
      "It is completely true and inerrant",
      "It's a model, so it's not completely true. No models are completely true. They are approximations to the world",
      "It should never be questioned by researchers",
      "It only applies to developed markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "What are the two other market-modeling approaches mentioned besides EMH?",
    options: [
      "Random Walk Theory and Chaos Theory",
      "Modern Portfolio Theory and Capital Asset Pricing Model",
      "Adaptive Market Hypothesis (AMH) and Fractal Market Hypothesis (FMH)",
      "Behavioral Finance Model and Prospect Theory"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "Who articulated the Adaptive Market Hypothesis (AMH)?",
    options: [
      "Eugene Fama",
      "Andrew Lo",
      "Harry Markowitz",
      "William Sharpe"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "According to the AMH, why do financial markets not efficiently adjust to information?",
    options: [
      "Because there is too much information available",
      "Because they are made up of investors whose attitudes and behaviors evolve over time and adapt based on changing expectations and cognitive biases",
      "Because trading costs are too high",
      "Because regulatory restrictions prevent efficient pricing"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "According to Andrew Lo's AMH framework, when might markets show periods of informational inefficiency?",
    options: [
      "Never, markets are always efficient",
      "Only during market crashes",
      "During periods where price behavior is better explained by cognitive biases than by new information",
      "Only in the first hour of trading"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 12,
    question: "What did the research by Huddart, Lang, and Yetman conclude about volume patterns at 52-week highs and lows?",
    options: [
      "Volume is lower at these extreme prices",
      "Volume is higher when stock price is above the 52-week high or below the 52-week low, suggesting these extremes are salient in decision-making",
      "Volume remains constant regardless of price levels",
      "Volume only increases at 52-week lows, not highs"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "Why is the 52-week high/low volume phenomenon significant according to the research?",
    options: [
      "It always indicates a fundamental change in the company",
      "It is associated with an event that does not convey information about firm fundamentals, yet affects trading behavior",
      "It only occurs in bear markets",
      "It is caused by institutional selling pressure"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "What market did Kelly Corbiere study in the 2022 Journal of Technical Analysis paper?",
    options: [
      "The S&P 500",
      "The FTSE 100",
      "Pakistan's KSE-100 Index",
      "The Nikkei 225"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "What did Corbiere's research on Pakistan's KSE-100 Index conclude?",
    options: [
      "The market is perfectly efficient",
      "Returns are random and weak form efficient",
      "Returns are not random and not weak form efficient, implying investors can generate above-market returns using technical analysis",
      "Only fundamental analysis works in this market"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What principle for identifying trends emerged from Corbiere's study on Pakistan's market?",
    options: [
      "All trends reverse at resistance levels",
      "Strong trends in markets that more slowly incorporate new information are more likely to continue rather than reverse",
      "Trends only occur in bull markets",
      "Volume always precedes price in trend formation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "In Figure 1.1.1, what five growth stocks were used in the portfolio example?",
    options: [
      "IBM, Intel, Cisco, Oracle, and Dell",
      "Apple, Microsoft, Meta, Nvidia, and Broadcom",
      "Google, Amazon, Tesla, Netflix, and AMD",
      "JPMorgan, Bank of America, Wells Fargo, Citigroup, and Goldman Sachs"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 18,
    question: "What was the portfolio return (Rp) for the growth stock portfolio in Figure 1.1.1?",
    options: [
      "17%",
      "24.5%",
      "34%",
      "14.02%"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 19,
    question: "What was the benchmark return (Rm) using SPY for the period shown in the examples?",
    options: [
      "4.6%",
      "17%",
      "34%",
      "24.5%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "What risk-free rate (Rf) was used in the alpha calculations for both portfolio examples?",
    options: [
      "2.5%",
      "3.5%",
      "4.6%",
      "5.5%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What was the portfolio beta for the five growth stocks in Figure 1.1.1?",
    options: [
      "0.53",
      "1.00",
      "1.24",
      "1.50"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 22,
    question: "What was the calculated alpha for the growth stock portfolio?",
    options: [
      "13.32%",
      "14.02%",
      "17.00%",
      "34.00%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "Which five utility stocks were used in the second portfolio example in Figure 1.1.2?",
    options: [
      "Con Edison, Exelon, PPL, Entergy, and Eversource",
      "Duke Power, Dominion Energy, Southern Company, American Electric Power, and NextEra Energy",
      "PG&E, Edison International, Xcel Energy, WEC Energy, and CenterPoint",
      "FirstEnergy, Public Service Enterprise, Sempra Energy, Ameren, and Alliant Energy"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 24,
    question: "What was the portfolio return (Rp) for the utility stock portfolio?",
    options: [
      "17%",
      "24.5%",
      "34%",
      "13.32%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What was the portfolio beta for the five utility stocks?",
    options: [
      "0.53",
      "1.00",
      "1.24",
      "1.50"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 26,
    question: "What was the calculated alpha for the utility stock portfolio?",
    options: [
      "13.32%",
      "14.02%",
      "17.00%",
      "24.50%"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 27,
    question: "What important lesson does the comparison between the growth stock and utility stock portfolios demonstrate?",
    options: [
      "Higher returns always mean higher alpha",
      "Growth stocks always outperform utility stocks",
      "Even though utility stocks showed significantly less total gain, they showed almost as much alpha as growth stocks due to lower beta",
      "Beta has no impact on alpha calculations"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "Why did the utility stock portfolio generate almost as much alpha as the growth stock portfolio despite lower total returns?",
    options: [
      "Utility stocks paid higher dividends",
      "The utility portfolio had significantly lower beta scores (0.53 vs 1.24), meaning less return was attributable to market influence",
      "Utility stocks are always better investments",
      "The calculation period favored defensive stocks"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "According to the curriculum, what should a worthwhile research effort reconcile its findings with?",
    options: [
      "Only the Efficient Markets Hypothesis",
      "Popular trading strategies on social media",
      "One or more of the leading hypothetical market models",
      "Historical price patterns exclusively"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "What cognitive bias-related behavior was identified in the 52-week high/low research that suggests informational inefficiency?",
    options: [
      "Investors sell all positions at year-end for tax purposes",
      "Investors take action based on new price highs/lows even when there is no accompanying fundamental information",
      "Investors only buy stocks with high P/E ratios",
      "Investors always follow analyst recommendations"
    ],
    correct: 1,
    hasImage: false
  }
];
