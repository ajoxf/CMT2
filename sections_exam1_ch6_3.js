const questions = [
  {
    id: 1,
    question: "What does a contango structure in VIX futures indicate about market participant sentiment?",
    options: [
      "Market participants expect volatility to decrease significantly in the near term",
      "Market participants are comfortable with current volatility but uncertain about future levels",
      "Market participants expect an immediate market crash",
      "Market participants believe volatility will remain constant across all maturities"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "On February 19, 2020, the F1 VIX futures contract was trading at 15.38 while F7 was at 17.30. What type of term structure does this represent?",
    options: [
      "Backwardation indicating high near-term risk",
      "Inverted structure indicating market panic",
      "Contango indicating uncertainty about maintaining low volatility",
      "Flat structure indicating stable volatility expectations"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "During the COVID-19 crisis peak on March 17, 2020, F1 was at 68.83 while F7 was at 31.20. What does this backwardation structure suggest?",
    options: [
      "Market expects volatility to increase further over the next seven months",
      "Market expects extreme near-term risk but anticipates eventual stabilization",
      "Market participants are uncertain about all future time periods equally",
      "Market expects a sustained volatility spike lasting more than seven months"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "What was the highest VIX reading during the COVID-19 crisis, and what is its significance?",
    options: [
      "68.83, representing the highest intraday spike",
      "82.79, representing the highest value since VIX inception",
      "31.20, representing the sustained volatility level",
      "15.38, representing the pre-crisis baseline"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "Which of the following is NOT a characteristic of VIX futures mentioned in the material?",
    options: [
      "They are tradeable instruments",
      "They are optionable instruments",
      "They represent a time series of forward volatility expectations",
      "They directly track the S&P 500 price movements"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 6,
    question: "What is the primary advantage of monitoring intermonth spreads in VIX futures?",
    options: [
      "They eliminate all trading risk",
      "They provide advance notice of changing market conditions for risk management",
      "They guarantee profitable trading signals",
      "They predict exact market turning points"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "In the F3-F1 spread analysis, what does a positive reading indicate?",
    options: [
      "The market is in backwardation with high near-term risk",
      "F1 is greater than F3, indicating panic",
      "F3 is greater than F1, indicating contango",
      "The spread is neutral with no directional bias"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "According to Figure 6.3.6 covering 2019-2024, what was the main exception to the generally positive F3-F1 spread?",
    options: [
      "The 2022 inflation crisis",
      "The 2019 trade war tensions",
      "The early 2020 COVID-19 crisis",
      "The 2023 banking sector concerns"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 9,
    question: "In heat map analysis of VIX futures intermonth spreads, what do darker shades of green indicate?",
    options: [
      "Narrowing spreads suggesting increasing risk",
      "Wider-than-average spreads with strong upward slope",
      "Backwardation structure with market stress",
      "Neutral market conditions with no clear trend"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "During the Great Financial Crisis (2007-2009), what early warning signal appeared in the intermonth spreads before the worst of the crisis?",
    options: [
      "Spreads immediately turned deeply negative",
      "Spreads widened to record levels",
      "Spreads started to narrow from their average values",
      "Spreads remained unchanged showing no warning"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 11,
    question: "What interpretation should a trader give to isolated red spots in November 2016 and April 2017 shown in Figure 6.3.8?",
    options: [
      "Major market crash imminent across all time horizons",
      "Short-duration concerns affecting only nearest contracts",
      "Sustained bearish trend developing across all maturities",
      "False signals that should be completely ignored"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 12,
    question: "By April 2009 during the recovery from the Great Financial Crisis, what color transition in the heat map indicated improving market conditions?",
    options: [
      "Deep red to deep green immediately",
      "Green to red showing continued deterioration",
      "Lighter shades of red eventually returning to green",
      "Red to yellow showing neutral conditions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "What is the primary difference between VIX as an index and VIX futures?",
    options: [
      "VIX measures realized volatility while futures measure implied volatility",
      "VIX is not tradeable and measures 30-day forward volatility; futures are tradeable with various maturities",
      "VIX futures are only available to institutional investors",
      "VIX is calculated daily while futures are calculated weekly"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "During S&P 500 uptrends, which term structure is typically observed in VIX futures?",
    options: [
      "Backwardation with declining futures prices",
      "Flat structure with equal prices across maturities",
      "Contango with increasing values for longer maturities",
      "Inverted structure with random price distribution"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "In the three-dimensional visualization (Figure 6.3.4), which contract reached the highest peak value of 68.82 in March 2020?",
    options: [
      "F6 (sixth-month futures)",
      "F3 (third-month futures)",
      "F1 (first-month futures)",
      "All contracts peaked at the same level"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 16,
    question: "Why did the F6 contract remain elevated through the end of March 2020 compared to early January levels?",
    options: [
      "Market participants expected the crisis to resolve within days",
      "Trading volume was insufficient to normalize prices",
      "Market understood the crisis would take months to resolve",
      "Regulatory restrictions prevented normal price discovery"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 17,
    question: "What does the slope of the VIX futures term structure consistently predict according to research mentioned in the material?",
    options: [
      "Currency exchange rate movements",
      "S&P 500 forward returns",
      "Treasury bond yields",
      "Corporate earnings growth"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "A trader observes the F3-F1 spread narrowing from +10 to +3 over two weeks while still remaining positive. What action is most appropriate?",
    options: [
      "Ignore the signal as the spread is still positive",
      "Immediately liquidate all equity positions",
      "Review risk exposure as narrowing may signal changing conditions",
      "Increase leverage as volatility is decreasing"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "In the heat map, intermonth spreads are stacked vertically. Which layer represents the F1 minus F2 spread?",
    options: [
      "The bottom layer closest to the S&P 500 chart",
      "The middle layer for balanced perspective",
      "The top layer",
      "It varies depending on market conditions"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "What happened to the S&P 500 between early February and mid-March 2020 as shown in Figure 6.3.3?",
    options: [
      "It remained relatively stable around 3,400",
      "It declined from around 3,400 to 2,200 within a month",
      "It increased from 2,200 to 3,400 within a month",
      "It experienced minor fluctuations of less than 5%"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 21,
    question: "When analyzing VIX futures for risk management, what does a shift from contango to backwardation primarily signal?",
    options: [
      "Volatility will remain low for the foreseeable future",
      "Market participants are reacting to increasing perceived near-term risk",
      "Long-term economic growth is accelerating",
      "The VIX index is becoming less reliable"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "According to the material, where can traders access daily closing data for VIX futures to monitor intermonth spreads?",
    options: [
      "Only through expensive Bloomberg terminals",
      "Through www.cboe.com and commercially available trading software",
      "Data is proprietary and not publicly available",
      "Only through direct exchange membership"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "During the 2016-2018 uptrend shown in Figure 6.3.8, what characterized the heat map appearance?",
    options: [
      "Consistent red indicating persistent backwardation",
      "Mixed colors showing uncertainty",
      "Darker shades of green indicating wide spreads and strong contango",
      "No clear pattern was observable"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 24,
    question: "A portfolio manager observes that only the F1-F2 spread has turned negative while F2-F3, F3-F4, F4-F5, and F5-F6 spreads remain positive. What is the most accurate interpretation?",
    options: [
      "A major sustained bear market is beginning",
      "Risk concerns are short-duration, affecting only the nearest month",
      "The entire volatility complex is breaking down",
      "This pattern has no meaningful interpretation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What was the VIX level before the COVID-19 crisis began affecting markets in February 2020?",
    options: [
      "Around 82",
      "Around 45",
      "Below 15",
      "Around 30"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "In practical risk management, what advantage does gradual shift monitoring in VIX term structure provide over waiting for full backwardation?",
    options: [
      "It eliminates the need for stop-loss orders",
      "It provides adequate time to deploy risk management tools before major declines",
      "It guarantees profitable trades",
      "It allows for maximum leverage during market peaks"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "Which statement best describes the relationship between outer month VIX futures (F2-F6) and the F1 contract during the March 2020 peak?",
    options: [
      "All contracts peaked at identical values showing uniform fear",
      "F1 rose the most with subsequent maturities rising to progressively lesser degrees",
      "Outer months rose more than F1 showing long-term concerns",
      "Outer months remained unchanged while F1 spiked"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "A trader wants to implement a simple early warning system using VIX futures. Based on the material, what is the most straightforward approach recommended?",
    options: [
      "Track all possible intermonth spreads simultaneously",
      "Focus only on absolute VIX levels",
      "Track the F3-F1 spread for useful indications of trends and corrections",
      "Monitor only the VIX index itself"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "What does the color-coding in VIX futures heat maps represent?",
    options: [
      "Trading volume at different contract maturities",
      "Different levels of volatility with width of spreads indicated by color intensity",
      "Probability of market crashes",
      "Liquidity levels across different contracts"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "Based on the analysis presented, what is the primary value proposition of monitoring VIX futures term structure for active traders?",
    options: [
      "It provides exact entry and exit points for all trades",
      "It serves as a consistent predictor offering early warning signals for risk management",
      "It eliminates the need for fundamental analysis",
      "It guarantees outperformance versus buy-and-hold strategies"
    ],
    correct: 1,
    hasImage: false
  }
];
