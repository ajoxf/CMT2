const questions = [
    {
        id: 1,
        question: "Which of the following is a component of the Code of Ethics? CFA Institute members shall:",
        options: [
            "use particular care in determining applicable fiduciary duty.",
            "use reasonable care and exercise independent professional judgment.",
            "maintain and improve the competence of other investment professionals.",
            "practice and encourage others to practice in a professional and an ethical manner."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 2,
        question: "Allen Johnson, CMT, is working in the Singapore office of German Investment Corporation. From an informal conversation, Allen learns that the company's most recent annual report contains misappropriated information. No one at the Singapore office expresses concern, however, because there has been no breach of Singapore's law. Johnson should:",
        options: [
            "do nothing because the branch is outside of German jurisdiction.",
            "seek advice from the company counsel to determine appropriate action.",
            "do nothing because the branch is outside of Singapore's jurisdiction.",
            "disassociate himself from the case with a written report to his supervisor."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 3,
        question: "Which one of the following most accurately describes the CFA Institute Standard about using material nonpublic information?",
        options: [
            "An analyst cannot use nonmaterial nonpublic information.",
            "An analyst may use material nonpublic information as long as it is for his personal use.",
            "An analyst may use material nonpublic information if it is legal in his country to do so.",
            "An analyst may use nonmaterial nonpublic information as long as it has been developed under the Mosaic Theory."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 4,
        question: "Adam Green, a portfolio manager, is making a presentation to a prospective client. Green says that as a new portfolio manager, he made an average annual rate of return of 40% in the last two years at his previous firm and that based on this, he can guarantee a 40% return to the client. Which of the following statements is in accordance with Standard III(D), Performance Presentation?",
        options: [
            "Implying that he can guarantee a return.",
            "Stating his past performance as long as it is fact.",
            "Imputing his past performance to future performance.",
            "Implying that he can guarantee a return based on just 2 years of performance."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 5,
        question: "Kai Wong, CFA, is concerned about the activities of several of his coworkers and feels legal violations are routinely overlooked. According to the Code and Standards, a recommended first step would least likely be to:",
        options: [
            "take legal counsel",
            "contact industry regulators",
            "provide her supervisor with a copy of the Code and Standards.",
            "review the company's policies and procedures for reporting ethical violations."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 6,
        question: "An analyst has several groups of clients who are categorized according to their specific needs. Compared to research reports distributed to all of the clients, reports for a specific group:",
        options: [
            "will definitely include more basic facts.",
            "may generally exclude more basic facts.",
            "cannot be selectively distributed.",
            "will not be allowed because it violates the Standard III(B), Fair Dealing."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 7,
        question: "Steve Smith, CFA, is an equity research analyst for a long-term investment fund. His annual bonus is linked to annual trading profits. Under a new policy, the assessment period is switched to a monthly assessment period. According to the Code and Standards, best practices dictate:",
        options: [
            "keeping the policy change within the firm.",
            "keeping the policy change within the firm and existing clients.",
            "updating disclosures when the policy change is implemented.",
            "requiring Smith to obtain permission from each client prior to implementation of the new policy."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 8,
        question: "Which of the following actions would be a violation of the Standard VII(A) Conduct as Participants in CFA Institute Programs?",
        options: [
            "Exaggerating the implications of holding the CFA designation.",
            "Misrepresenting information on the Professional Conduct Statement.",
            "Participating in a civil disobedience movement to oppose a government action.",
            "Using the CFA designation without submitting a Professional Conduct Statement and paying annual dues."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 9,
        question: "Paul Jones is a chemical industry research analyst for a large brokerage company. That industry is currently seeing an increase in mergers and acquisitions. While flying through Chicago, Jones sees several senior officers who she knows are from the largest and fourth largest chemical companies walk into a conference room. She concludes that negotiations for an acquisition might be taking place. Jones:",
        options: [
            "may not act or cause others to act on this information.",
            "may not act but advise others to act on this information.",
            "may use this information to support an investment recommendation.",
            "should inform her compliance officer that she has material nonpublic information on firms she covers."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 10,
        question: "In a meeting with his firm's senior research analyst, George Powel, a proponent of the CFA Institute Research Objectivity Standards (ROS), stated that the key objective of the ROS is to create voluntary reporting of research practices that promote independent and objective research to CFA Institute on an annual basis. With regard to his statements about the objectives of the ROS.",
        options: [
            "he is correct.",
            "he is incorrect.",
            "He is correct about the voluntary reporting aspect.",
            "He is correct about the independent and objective research aspect."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 11,
        question: "Which is not one of the Dow Theory principles?",
        options: [
            "Trends are classified as Primary, Secondary and Counter Cyclical.",
            "The averages discount everything.",
            "Volume goes with the trend.",
            "The trends persist."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 12,
        question: "Beta measures:",
        options: [
            "the amount of excess returns in a portfolio over the risk-free rate of return.",
            "the amount of volatility in a portfolio attributable to macroeconomic news.",
            "the amount of volatility in a portfolio compared to the market volatility.",
            "the amount of risk in a portfolio compared to the expected returns of any given equal-weighted index."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 13,
        question: "When using the RSI as an overbought/oversold indicator, a sell signal is generated when:",
        options: [
            "RSI declines below its lower reference line and then rallies above it.",
            "RSI rises above its upper reference line and then crosses below it.",
            "RSI crosses beneath the midpoint (50 level).",
            "RSI crosses above the midpoint (50 level)."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 14,
        question: "When analyzing price action and volume, low activity (or a drop in volume) is normally associated with:",
        options: [
            "a weak price trend.",
            "a strengthening price trend.",
            "greater fluctuations in price.",
            "lack of conviction on the part of traders."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 15,
        question: "A correlation coefficient of 0.75 between two variables suggests a/an _____ relationship:",
        options: [
            "extremely strong",
            "strong",
            "low",
            "non-existent"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 16,
        question: "Near the end of a recession:",
        options: [
            "bonds turn up before stocks and commodities.",
            "stocks turn up before bonds and commodities.",
            "commodities turn up before bonds and stocks.",
            "all the asset classes turn up simultaneously."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 17,
        question: "Which of the following asset classes is a leading indicator for the stock market?",
        options: [
            "Bonds",
            "Bullion",
            "Precious metal",
            "Energy"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 18,
        question: "Identify the following assumption under the correlation coefficient:",
        options: [
            "Linearity",
            "Normality",
            "Outliers and homoscedasticity",
            "All of the above"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 19,
        question: "_______moving average uses reverse linear weights:",
        options: [
            "The pivot-point",
            "The simple",
            "The weighted",
            "The exponential"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 20,
        question: "Interpret the relationship between the S&P 500 and the NASDAQ 100 indexes based on the chart shown below, if the Pearson's coefficient of correlation is 0.45:",
        options: [
            "Linear relationship, as the Best Fit line is curvilinear.",
            "Linear relationship, as points fall generally along a straight line.",
            "Non-linear relationship, as points fall generally along a straight line.",
            "Non-linear relationship, as the Best Fit line is curvilinear."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 21,
        question: "The strength and direction of the relationship between two markets is measured by:",
        options: [
            "spread.",
            "regression.",
            "moving average.",
            "correlation coefficient."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 22,
        question: "The only effective method of diversifying a portfolio is by including asset classes with ________ correlation to stocks such as cash, foreign exchange or commodities.",
        options: [
            "positive",
            "meaningful",
            "low/negative",
            "moderately positive"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 23,
        question: "Which of the following indicator combines price, volume and open interest?",
        options: [
            "TRIX",
            "Moneyflow Index",
            "True Strength Index",
            "Herrick Payoff Index"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 24,
        question: "What trading decision must a trader make based purely on the trend lines in the chart below?",
        options: [
            "Hold long positions",
            "Close out long positions",
            "Close out short positions",
            "Trading decisions cannot be made by using trend lines."
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 25,
        question: "Which of the following points represents a valid island reversal in the chart below?",
        options: [
            "A",
            "B",
            "C",
            "None of the above"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 26,
        question: "Which of the following patterns resonate with the price action highlighted within the green rectangles marked 'A' & 'B'?",
        options: [
            "Piercing Line & Hammer",
            "Piercing Line & Evening Star",
            "Bullish Engulfing & Shooting Star",
            "Bullish Engulfing & Hanging Man"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 27,
        question: "_______uses the distribution of the daily trading range to create a new indicator.",
        options: [
            "TRIX",
            "Money Flow Index",
            "True Strength Index",
            "Intraday Intensity"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 28,
        question: "Tick volume refers to:",
        options: [
            "the number of contracts traded at each price tick.",
            "the number of contracts traded at each time interval.",
            "the change in open interest during a particular time interval.",
            "the number of recorded price changes during a particular time interval."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 29,
        question: "When using a two moving averages (MA) system, which of the following rules can be utilized to generate a buy signal?",
        options: [
            "Buy when the faster moving average crosses the slower moving average from above.",
            "Buy when the faster moving average hooks the slower moving average from above.",
            "Buy when the faster moving average hooks the slower moving average from below.",
            "Buy when the current price crosses above both moving averages."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 30,
        question: "Which of the following rules can be utilized as an entry strategy for a long trade based on a MACD histogram?",
        options: [
            "Go long when the MACD fast line turns higher.",
            "Go long when the MACD slow line turns higher.",
            "Go long when the histogram crosses through 0 from below.",
            "Go long when the MACD line crosses above the signal line for the second time, confirming the divergence."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 31,
        question: "In regard to cycle analysis, translation is:",
        options: [
            "Distance between troughs",
            "Distance between peaks",
            "Useful in checking where the trend direction is headed or if it is changing",
            "To the right when the peak is beyond the halfway point"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 32,
        question: "Which would be the MOST useful aspect of a cycle in studying the relationship between cycles with different start times?",
        options: [
            "Phase",
            "Period",
            "Amplitude",
            "None of the above"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 33,
        question: "Which of the following would normally be considered a sentiment indicator that is most useful to traders?",
        options: [
            "Corporate buy backs",
            "Price/earnings ratio",
            "Insider buying",
            "The VIX"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 34,
        question: "When using Out of Sample testing, the \"out of sample\" refers to?",
        options: [
            "A small subset of data that was used to optimize the system.",
            "The unexpected set of parameters that gives the best system results.",
            "A set of data not used in the system building process.",
            "None of the above."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 35,
        question: "The payoff ratio is:",
        options: [
            "One of the least important statistics used in system design.",
            "The ratio of profit to loss.",
            "The ratio of the profitable standard deviation value to the loss standard deviation value.",
            "The ratio of the average winning trade to the average losing trade."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 36,
        question: "_____________ captures an increasing part of the profits as price moves in a favorable direction.",
        options: [
            "Initial Stop",
            "Trailing stop",
            "Sell stop",
            "Standard deviation stop"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 37,
        question: "The bias under which, when an event has not occurred recently, the event is perceived as having zero or negligible probability of occurring in future, is categorized as:",
        options: [
            "Saliency bias",
            "Framing bias",
            "Sunk-cost bias",
            "Anchoring bias"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 38,
        question: "__________ is a perception bias that arises when you are attempting to take a guess at something about which you have limited information.",
        options: [
            "Saliency",
            "Framing",
            "Sunk-cost",
            "Anchoring"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 39,
        question: "The \"maximum cumulative drawdown\" is a measure of:",
        options: [
            "The largest single loss in a trading system or portfolio.",
            "The largest number of losses in a trading system or portfolio.",
            "The total number of losses in a trading system or portfolio.",
            "The largest loss in a trading system or portfolio from an equity peak."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 40,
        question: "The _______________ tracks the degree of mass participation in rallies and decline.",
        options: [
            "MACD line",
            "RSI",
            "Relative strength",
            "Advance/Decline Ratio"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 41,
        question: "_______________ as a risk measure results in an estimation of a price move in either direction.",
        options: [
            "Put/Call parity",
            "Plurality index",
            "Implied volatility",
            "Standard deviation"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 42,
        question: "A simple way to identify ______________ cycles is to use ________ prices and find the dominant half-cycle.",
        options: [
            "Long-term, weekly",
            "Intermediate-term, weekly",
            "Long-term, monthly",
            "Short-term, monthly"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 43,
        question: "Because Relative Strength is so________ it is used as the primary ________ Random Walk and EMH.",
        options: [
            "Successful, defense of",
            "Successful, argument against",
            "Weak, defense of",
            "Weak, argument against"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 44,
        question: "Open interest ______________when a bull sells his long position to bear who wants to cover his short position:",
        options: [
            "rises",
            "falls",
            "remains unchanged"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 45,
        question: "When open interest goes flat during a rally, it suggests that:",
        options: [
            "bottom fishers are active.",
            "new shorts are getting created.",
            "old shorts are getting squeezed.",
            "the trend is aging and the best gains are probably behind."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 46,
        question: "The measurement that tells the system designer how far a trade was in loss before it came back to close in profit is called?",
        options: [
            "Maximum favorable excursion",
            "Maximum adverse excursion",
            "Return retracement ratio",
            "None of the above"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 47,
        question: "Based on the 2-day EMA of the Force index, which point on the chart represents a valid shorting opportunity, if the trend has turned lower?",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 48,
        question: "During an uptrend, the simplest way to detect a trend change (from up to down) is to:",
        options: [
            "draw trendlines along the peaks",
            "draw trendlines along the troughs",
            "draw a best-fit line through the downtrend",
            "use the slope of a long-term moving average"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 49,
        question: "According to Schabacker's rules, which of the following does not help identify the end of a bull market?",
        options: [
            "Stocks become a popular topic of conversation",
            "Popular stocks advance while some other companies collapse",
            "Interest rates are high",
            "Trading volume is low"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 50,
        question: "High values observed in the VIX usually means:",
        options: [
            "a new bull market phase is about to begin.",
            "traders are buying less options.",
            "investors are anxious.",
            "investors are complacent."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 51,
        question: "The biggest drawback of a relative strength system is that:",
        options: [
            "High transaction costs are involved in regular rebalancing",
            "Rebalancing and matching benchmark returns is a painful exercise",
            "The starting point of a system test has a massive influence on final results",
            "The portfolio is long only and fully invested, hence it is exposed to risks of that particular asset beta"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 52,
        question: "An analysis of On-balance volume in the shares of Marathon Petroleum Corp (MPC) shown below suggest that:",
        options: [
            "any near-term strength should be considered as an opportunity to reduce positions, given the divergence between OBV and price action.",
            "any near-term dips should be considered as buying opportunities, given the confirmation between OBV and price action.",
            "should immediately exit long positions and initiate short positions.",
            "we are likely to see pullback towards $42.5 (previous support) and then price will start moving higher."
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 53,
        question: "In the chart shown below, the OBV indicator is:",
        options: [
            "confirming bearish price action.",
            "confirming bullish price action.",
            "diverging negatively from price action.",
            "diverging positively from price action."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 54,
        question: "Which of the following only considers the downside volatility in a system or portfolio?",
        options: [
            "Sharpe Ratio.",
            "Sterling Ratio.",
            "Sortino Ratio.",
            "Return Retracement Ratio."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 55,
        question: "A reduction in the speed of either %K-slow or %D-slow lines indicates:",
        options: [
            "a reversal on the next day.",
            "selling opportunity on the next rally.",
            "wait for a pullback as an excellent entry point.",
            "current trend will continue to dominate on next day."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 56,
        question: "Although the line chart shows higher and higher lows, if the %D-slow line has lower lows, then it indicates:",
        options: [
            "buying opportunity on the next rally.",
            "selling opportunity on the next rally.",
            "fresh selling opportunity as trend is going to reverse on the next day.",
            "hold on to current positions and wait for confirmation on weekly chart."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 57,
        question: "When RSI rises above its upper reference zone, it shows that bulls are strong but the market:",
        options: [
            "oversold and entering its buy zone.",
            "oversold and entering its sell zone.",
            "overbought and entering its buy zone.",
            "overbought and entering its sell zone."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 58,
        question: "Divergences between RSI and prices tend to occur at:",
        options: [
            "at important tops and bottoms.",
            "when prices are in a trading range.",
            "when prices violate down in a trading range.",
            "when important news flow is expected in market/stocks."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 59,
        question: "____________ is an indicator/oscillator which measures any security's strength by monitoring upward and downward changes in its closing prices.",
        options: [
            "On-balance volume",
            "Relative Strength Index",
            "Accumulation/distribution line",
            "Moving Average Convergence and Divergence (MACD)"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 60,
        question: "An Underwater curve measures?",
        options: [
            "The drawdown from each successively higher peak in equity.",
            "The final loss in equity.",
            "How profitable each trade in a system is.",
            "The loss, in dollars, of the maximum drawdown (MDD)."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 61,
        question: "Decline in ADX indicates:",
        options: [
            "the market is declining.",
            "the market is trending higher.",
            "the market is consolidating.",
            "the market is becoming less directional."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 62,
        question: "Open interest can be defined as:",
        options: [
            "total number of calls and puts.",
            "total contracts traded in a month.",
            "the total number of contracts traded each day.",
            "the total number of outstanding contracts."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 63,
        question: "A buy signal is generated using a 2 period RSI oscillator which:",
        options: [
            "crosses into an overbought territory.",
            "crosses into an oversold territory.",
            "crosses the threshold of 10 moving higher.",
            "crosses the threshold of 10 moving lower."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 64,
        question: "When ADX falls below both Directional lines, it identifies:",
        options: [
            "a flat and dull market.",
            "the dominant group is getting stronger.",
            "the trend is becoming less directional.",
            "the market is in oversold territory."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 65,
        question: "Which of the following methods measures the speed of any surge and shows when its momentum is starting to break?",
        options: [
            "SAR",
            "Oscillators",
            "Parabolic systems",
            "Trend-following system"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 66,
        question: "The price of a stock near its previous low, accompanied by a higher low in RSI, would be a situation of:",
        options: [
            "positive confirmation.",
            "positive divergence.",
            "negative divergence.",
            "negative confirmation."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 67,
        question: "When price direction is sideways and OBV direction is up it suggests:",
        options: [
            "moderate downtrend.",
            "no determination.",
            "distribution period.",
            "accumulation period (bottom)."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 68,
        question: "The VIX is a measure of the Implied Volatility being projected through:",
        options: [
            "Fear in the market.",
            "The prices of Dow Jones index options.",
            "The prices of all equity options.",
            "The prices of S&P 500 index options."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 69,
        question: "The most profitable _____________ are long-term.",
        options: [
            "investments.",
            "option strategies.",
            "mean reversion trades.",
            "trend following systems."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 70,
        question: "Given the following daily values for Open, High, Low & Close, what change would you expect in Chaiken's Accumulation Distribution Index? Open = 12, Close = 10, High = 13, Low = 9",
        options: [
            "All the day's volume would be added to the previous index value",
            "All the day's volume would be subtracted from the previous index value",
            "Half the day's volume would be added to the previous index value",
            "Half the day's volume would be subtracted from the previous index value"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 71,
        question: "Volume is usually ______ in trading range but ________ dramatically after a breakout.",
        options: [
            "rising, decreases",
            "low, increases",
            "high, increases",
            "low, shrinks"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 72,
        question: "Bullish divergences are observed when prices________ to a new ________ but RSI makes a ___________ than its previous decline/rally.",
        options: [
            "rally, peak, lower top",
            "fall, low, lower top",
            "fall, low, higher bottom",
            "rally, peak, higher bottom"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 73,
        question: "_________is a valuable piece of information when analyzing patterns.",
        options: [
            "Breadth",
            "Volume",
            "Moving averages",
            "Indicators/oscillators"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 74,
        question: "A sell signal using a MACD indicator is generated when:",
        options: [
            "the Fast MACD line turns positive.",
            "the Slow MACD line turns negative.",
            "the fast MACD line crosses above the slow signal line.",
            "the fast MACD line crosses below the slow signal line."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 75,
        question: "MACD Signals can be improved by thresholds equal to previous ______________ in the indicator and taking the signals only after the MACD line ___________ the threshold.",
        options: [
            "average values, crosses.",
            "divergences, confirms.",
            "highs and lows, enters.",
            "signal values, exits."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 76,
        question: "Which of the following statements is a true notion about market efficiency according to efficient market hypothesis?",
        options: [
            "Market efficiency implies that no one can beat the market.",
            "Pricing errors in an efficient market is a non-random variable.",
            "Market efficiency requires the market price to be equal to rational value at all times.",
            "Market efficiency requires that prices deviate from rational value in an unbiased fashion."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 77,
        question: "Which of the following statements is a false prediction about price reaction, according to EMH?",
        options: [
            "Prices should neither overreact nor underreact to news.",
            "Prices should change only when news arrives.",
            "Stale information, information already in the public domain has no predictive power.",
            "Linear function between current and past returns can be used to predict future returns."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 78,
        question: "Travelers buying airplane accident insurance after a recent airplane crash, is an example of which of the following biases?",
        options: [
            "Framing bias",
            "Saliency bias",
            "Anchoring bias",
            "Sunk-cost bias"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 79,
        question: "____________is a perception bias that arises when you are attempting to make a guess at something about which you have limited information.",
        options: [
            "Framing bias",
            "Saliency bias",
            "Anchoring bias",
            "Sunk-cost bias"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 80,
        question: "An investor liquidating stocks that hold paper gains before liquidating stocks that, at current prices, have lost money, is known as:",
        options: [
            "framing effect.",
            "endowment effect.",
            "status quo effect.",
            "disposition effect."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 81,
        question: "A Call Option writer makes money",
        options: [
            "By selling the option",
            "When the price of the underlying security rises above the strike price",
            "As the time value decreases and the intrinsic value increases",
            "All of the above"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 82,
        question: "European Options are different than American Options because?",
        options: [
            "American Options have an earlier exercise date",
            "European Options have an earlier exercise date",
            "European Options cannot be exercised early",
            "American Options cannot be exercised early"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 83,
        question: "_______ is/are more likely to signal exhaustion of the current trend.",
        options: [
            "Rising volume",
            "Falling volume",
            "Volume spikes",
            "Unchanged volume"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 84,
        question: "A ___________ warning is an extreme turn in one of the indicator plots. This usually indicates at most two days remaining in the old trend.",
        options: [
            "Stochastic",
            "Force Index",
            "Average True Range",
            "Moving Average Convergence Divergence"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 85,
        question: "When is a buy signal given while using MACD-histogram?",
        options: [
            "When it breaks the centerline from above.",
            "When it breaks the centerline from below.",
            "When the MACD-histogram stops rising and ticks down.",
            "When the MACD-histogram stops falling and ticks up."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 86,
        question: "When open interest falls while prices are in a trading range, this implies:",
        options: [
            "New buyers are entering the market.",
            "New short selling.",
            "The market is in a congestion phase.",
            "Position liquidation."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 87,
        question: "What would the Implied Volatility be if you were told the one day expected movement was 2%?",
        options: [
            "0.317",
            "31.7",
            "6.93",
            "5.04"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 88,
        question: "When doing Regression Analysis, _________ measures the excess returns and is found on the regression chart by calculating the ________.",
        options: [
            "beta, slope",
            "alpha, slope",
            "beta, y-intercept",
            "alpha, y-intercept"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 89,
        question: "The Top-Down fundamental analysis process begins with an analysis of:",
        options: [
            "Sectors",
            "Industry Groups",
            "The economy",
            "Individual stocks"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 90,
        question: "___________ is an oscillator which combines volume with prices to discover the force of bulls or bears behind every rally or decline.",
        options: [
            "Stochastic",
            "Force Index",
            "Williams %R",
            "MACD-Histogram"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 91,
        question: "A burst of extremely high volume reflects:",
        options: [
            "professionals are adding fresh long positions.",
            "confirmation and the trend is likely to continue.",
            "amateurs are buying on a positive brokerage report.",
            "a trend is nearing its end and suggests an imminent reversal."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 92,
        question: "Which is not an indicator used in the Zweig Bond Model?",
        options: [
            "Short-term slope of the Dow Jones 20 Bond Average.",
            "Longer term slope of the Dow Jones 20 Bond Average.",
            "The trend of the S&P 500 Index.",
            "The yield curve."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 93,
        question: "___________ systems are better because they are _________ and they avoid _______.",
        options: [
            "Nondiscretionary, fast, losing trades.",
            "Nondiscretionary, mechanical, emotion.",
            "Manual, discretionary, mistakes.",
            "Manual, careful, biases."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 94,
        question: "Put options will expire worthless if:",
        options: [
            "volatility increases",
            "the underlying stock falls in value beyond the strike price",
            "the underlying stock rises in value beyond the strike price",
            "volatility decreases"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 95,
        question: "A breakaway gap usually occurs:",
        options: [
            "at the start of a new trend.",
            "In the middle of the trend.",
            "together with a volume spike.",
            "only in stock indices."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 96,
        question: "Stocks with superior fundamentals tend to decline in value much less than.",
        options: [
            "Low-Beta stocks.",
            "High-Beta stocks.",
            "High priced stocks.",
            "Poorly managed stocks."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 97,
        question: "_________________errors occur when investors place too much weight on information that confirms their prior opinions, but underweight or completely disregard evidence that contradicts their prior opinions.",
        options: [
            "Extrapolation",
            "Confirmation",
            "Hindsight",
            "Cognitive"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 98,
        question: "When hard assets rise in value, _________ will decline.",
        options: [
            "commodities",
            "soft assets",
            "international stocks",
            "precious metals"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 99,
        question: "When ADX rallies above both directional lines, it identifies:",
        options: [
            "less directional market",
            "flat and sleepy market",
            "a trending market",
            "lull market"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 100,
        question: "The implied volatility of an option is the projection of an annualized _______standard deviation move in the underlying stock over the life of the option.",
        options: [
            "one",
            "two",
            "three",
            "four"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 101,
        question: "______ is known for emphasizing a high level of rationality in investor behavior and aggregate market outcome.",
        options: [
            "The Dow theory",
            "Behavioral finance",
            "Adaptive market hypothesis (AMH)",
            "Efficient market hypothesis (EMH)"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 102,
        question: "Phase refers to:",
        options: [
            "The height of the wave from its horizontal midpoint (the X-axis).",
            "the number of time units necessary to complete one wavelength.",
            "the number of wavelengths that repeat every 360°, calculated as ω =1/T.",
            "a measurement of the starting point or offset of the cycle relative to a benchmark wave."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 103,
        question: "__________ and ___________ have seasonal patterns.",
        options: [
            "Volume, volatility",
            "VIX, put/call ratio",
            "Open interest, interest rates",
            "Open interest, market breadth"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 104,
        question: "Rising prices, falling volume and falling open interest can be interpreted as:",
        options: [
            "the uptrend is in the last stage",
            "new buyers entering the market",
            "short sellers covering their positions causing a rally.",
            "buyers covering their long positions in futures and investing in cash market"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 105,
        question: "______________ can be used to predict the future price trend of a market based on its correlation with multiple related markets.",
        options: [
            "Sortino ratio",
            "Harmonic mean",
            "Bayes' theorem",
            "Linear regression"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 106,
        question: "___________________ explains the relationship between the number of advancing and declining stocks, and the up and down volume.",
        options: [
            "Arms Index",
            "Thrust oscillator",
            "McClellan oscillator",
            "High-low Index (HLX)"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 107,
        question: "All the following statements about end of bull markets are true except:",
        options: [
            "interest rates have declined",
            "trading volume increases sharply",
            "warning about an overheated stock market appear on the news",
            "popular stocks advance significantly while some other companies collapse"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 108,
        question: "When using the RSI as an overbought/oversold indicator, a buy signal is generated when:",
        options: [
            "RSI crosses above the midpoint (50 level).",
            "RSI crosses beneath the midpoint (50 level).",
            "RSI rises above its upper reference line and then crosses below it.",
            "RSI declines below its lower reference line and then rallies above it."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 109,
        question: "A V-top or V-bottom is always accompanied by ______ and usually ______.",
        options: [
            "high volatility, low volume",
            "low volatility, low volume",
            "low volatility, high volume",
            "high volatility, high volume"
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 110,
        question: "When the VIX is 34.6, the expected 30-day market movement is:",
        options: [
            "1%.",
            "3.46%.",
            "10%.",
            "34.6%."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 111,
        question: "According to Schabacker's Rules, which of the following indicates an end of a Bear Market:",
        options: [
            "Interest rates are high.",
            "Interest rates have declined.",
            "Trading volume increases sharply.",
            "Stocks become a popular topic of conversation."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 112,
        question: "Which of the following patterns resonate with price action highlighted within the green rectangles marked 'A' & 'B'?",
        options: [
            "Piercing Line & hammer",
            "Piercing Line & Evening Star",
            "Bullish Engulfing & Shooting Star",
            "Bullish Engulfing & Hanging Man"
        ],
        correct: 2,
        hasImage: true
    },
    {
        id: 113,
        question: "The simplest and easiest method of intermarket analysis is:",
        options: [
            "momentum indicators.",
            "correlation analysis.",
            "creating autoregressive analysis models.",
            "a visual inspection of a comparison chart."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 114,
        question: "When constructing a portfolio, it is important to select securities that have a ________ degree of _______ between investment returns.",
        options: [
            "low, volatility.",
            "low, correlation.",
            "high, volatility.",
            "high, correlation."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 115,
        question: "In the following chart, where is a negative divergence in RSI observed?",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 116,
        question: "In a trading system that uses three moving averages a long trade is typically signaled when the shortest (fastest) moving average is used to:",
        options: [
            "act as a filter by requiring that it be falling as the signal is triggered.",
            "act as a filter by requiring that it be rising as the signal is triggered.",
            "trigger a trade when the other two moving averages are diverging.",
            "trigger a trade when the other two moving averages are converging."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 117,
        question: "Identify the highlighted chart pattern below:",
        options: [
            "Triple bottom",
            "Double bottom",
            "Cup and handle formation",
            "Head and Shoulders bottom"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 118,
        question: "A/An__________________ gap occurs at the end of a sustained and volatile price move and confirms the reversal.",
        options: [
            "exhaustion",
            "runaway",
            "breakaway",
            "common"
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 119,
        question: "In an ideal situation, stock price of Gold mining companies and U.S Dollar index are:",
        options: [
            "positively correlated.",
            "negatively correlated.",
            "no correlation is observed.",
            "positively correlated in an inflationary environment."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 120,
        question: "Diversification of portfolio is achieved by:",
        options: [
            "investing equally in bonds and equity.",
            "investing in mutual funds.",
            "investing in asset classes which have low correlation.",
            "investing in asset classes which have high correlation."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 121,
        question: "Using a 13 period EMA of the Force Index, which point on the chart would be a valid sell signal?",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 122,
        question: "Brazilian equity index (indice Bovespa) has topped out and is trading lower, from an intermarket perspective what can be a reason for a decline in equity markets?",
        options: [
            "Commodity cycle has topped out a few months earlier, and commodity prices have started declining which in turn lead to fall in equity index.",
            "Commodity prices are increasing which lead to a shift from equities to commodities.",
            "Brazil's central banks have increased interest rates in last couple of months which lead to flight of capital.",
            "Foreign institutional investors are withdrawing funds from emerging markets and investing into developed markets."
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 123,
        question: "What is the impact of falling commodity prices on the currency of a country which is heavily dependent on commodity export?",
        options: [
            "Currency will appreciate.",
            "Currency will depreciate.",
            "Has no impact on currency as there is no correlation between them.",
            "Currency is mostly managed by the central bank. Therefore, it has no impact on currency."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 124,
        question: "Identify the candlestick pattern highlighted below within the circle:",
        options: [
            "Harami.",
            "Bullish Engulfing.",
            "Hammer.",
            "Marubozu."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 125,
        question: "What chart pattern do you see in the box on this chart?",
        options: [
            "Flag.",
            "Pennant.",
            "Ascending Triangle.",
            "Broadening Triangle."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 126,
        question: "During the last leg of an economic expansion, how do different asset classes perform?",
        options: [
            "All the asset classes turn down simultaneously.",
            "Bonds turn down, followed by stocks and then commodities.",
            "Stocks turn down, followed by bonds and commodities.",
            "Commodities turn down, but bond and stocks continue to trend higher."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 127,
        question: "In the following chart of Dow Jones Industrial Average, interpret the RSI indicator in between the highlighted vertical lines:",
        options: [
            "Negative divergence is observed between price and indicator.",
            "Positive divergence is observed between price and indicator.",
            "Bearish confirmation is observed between price and indicator.",
            "Bullish confirmation is observed between price and indicator."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 128,
        question: "WTIC crude prices have declined from $100 to $50. Will the fall in crude have any impact on stock prices of oil exploration companies?",
        options: [
            "Since they have a positive correlation, stock prices of oil exploration companies will decline because of reduced margins.",
            "Since they have a negative correlation, stock prices of oil exploration companies will rise because of increased margins.",
            "Since they have no-correlation, prices are decided while awarding the contract.",
            "Since they have no-correlation, most of the companies hedge their risk."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 129,
        question: "In the following chart of Cheniere Energy Partners LP, interpret the reading of the stochastic indicator:",
        options: [
            "Stochastic is confirming the price action; should use current strength in price to initiate short position.",
            "Positive divergence as stochastic made a higher high, and prices a new low; should have gone long immediately at $20 and placed a protective stop below the latest low.",
            "Negative divergence as stochastic made a higher high and price a new low; should wait for a breakout for a close above $25.",
            "Stochastic is in overbought zone which indicates prices are losing momentum and are going to fall again."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 130,
        question: "In the following chart of Exxon Mobile, calculate the downside target from the flag:",
        options: [
            "$78.60",
            "$80.40",
            "$80.00",
            "$81.90"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 131,
        question: "Based on the chart given below, identify the chart pattern and the best course of action:",
        options: [
            "Head and shoulder top; go long and use current pullback as shares are retesting an important support level at point B.",
            "Double top; go short at point A as shares have violated an uptrend support line.",
            "Triple top; wait for a close below point C and execute shorts when prices are 2% below the neckline.",
            "Head and shoulder top; wait for a close below point B to execute below the neckline."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 132,
        question: "A \"triple witching day\" occurs when we witness:",
        options: [
            "the S&P 500 futures, options on futures and options on individual stocks all expiring at the same time.",
            "a breakout to 52 week new highs by the DJIA, SPX and RUT indices.",
            "a breakout to all-time new highs by the DJIA, SPX & RUT indices.",
            "all three of the DJIA, SPX500 & RUT registering 52 week lows."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 133,
        question: "Based on the chart given below, when was a valid long exit signal generated on the chart using the basic rules for using bands (note the arrows)?",
        options: [
            "A",
            "B",
            "C",
            "No signal was generated during the trend"
        ],
        correct: 2,
        hasImage: true
    },
    {
        id: 134,
        question: "Which of the following is not an EMH assumption?",
        options: [
            "Investors are rational.",
            "Volatility is a function of information arbitrage.",
            "Arbitrage forces prices to rational levels.",
            "Investor errors are uncorrelated."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 135,
        question: "Falling volume while price is rising means?",
        options: [
            "Volume confirms the price rise.",
            "Volume confirms the price drop.",
            "Volume indicates a weak rally",
            "Volume indicates a weak pullback"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 136,
        question: "Which of the following strategies of trading the Bollinger Bands constitutes the highest risk?",
        options: [
            "Buy (close out shorts and go long) when the prices close above the upper band; close out longs when the prices close below the lower band.",
            "Sell short when the prices close below the moving average; close out short positions when prices recapture the moving average.",
            "Buy (go long) when prices close above the upper band. Close out longs when prices reverse and close below the moving average value (the center of the band).",
            "Sell short when prices close below the lower band. Cover your shorts when prices close above the moving average value."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 137,
        question: "Based on the chart given below, what pattern is shown in the box?",
        options: [
            "Diamond Top.",
            "Ascending Triangle.",
            "Double Top.",
            "\"M\" pattern."
        ],
        correct: 2,
        hasImage: true
    },
    {
        id: 138,
        question: "Which of the following characteristics is the first that should be considered when choosing or building systems to trade?",
        options: [
            "A longer time to recovery than short-term drawdowns.",
            "Time in markets: Choose the one that trades more frequently.",
            "Gradual increases in equity line instead of downward surges.",
            "Which markets the system will be traded on."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 139,
        question: "The MACD Histogram is a/an:",
        options: [
            "trend-following indicator.",
            "momentum indicator.",
            "breadth indicator.",
            "oscillator."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 140,
        question: "Based on the chart given below; identify the best course of action:",
        options: [
            "Shares are losing momentum which can be confirmed by negative divergence between price and ROC; trader should be cautious and be quick to reduce position on a violation of trendline.",
            "Shares are making a series of higher highs and higher lows; ROC has turned negative which is confirming the price action; should use current pullback to add to position.",
            "ROC has turned negative which is a sell signal; should initiate a short position.",
            "Negative divergence observed between price and ROC should be ignored as prices are near life time highs."
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 141,
        question: "Extrapolation errors occur when investors:",
        options: [
            "assume that current and recent conditions will prevail well into the future, also causing them to ignore the evidence of changing circumstances.",
            "tend to be overconfident regarding their abilities and make major mistakes like too little diversification and over trading.",
            "are tricked into thinking that they can foretell the future because they can easily observe the past.",
            "try to identify patterns in financial markets that do not exist."
        ],
        correct: 0,
        hasImage: false
    },
    {
        id: 142,
        question: "Based on the chart below, interpret the on balance volume (OBV) indicator with respect to price action over the last 12 weeks:",
        options: [
            "Clear uptrend.",
            "Weak uptrend near reversal.",
            "Distribution.",
            "No determination."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 143,
        question: "Stocks with superior fundamentals will normally decouple and start outperforming on a relative basis during:",
        options: [
            "a rampant bull market.",
            "a market consolidation.",
            "the last legs of an uptrend.",
            "a market correction (bear market)."
        ],
        correct: 3,
        hasImage: false
    },
    {
        id: 144,
        question: "Which of the following statements about diamond tops is false?",
        options: [
            "Breakouts tend to be fast-moving price runs.",
            "The price objective is usually equal to the width of the complete pattern.",
            "A steep entry is usually followed by a steep exit.",
            "Diamond tops are a combination of a broadening pattern and a symmetrical triangle."
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 145,
        question: "Interpret price action in the chart below, combined with takeaways from the SPX New High-New Low index:",
        options: [
            "Confirmation between price action and indicator; the ongoing pullback can be bought.",
            "Divergence between price action and indicator; suggests exiting of long positions.",
            "Divergence between price action and indicator; can initiate shorts at current levels.",
            "Can initiate long positions at current price level; breadth bottomed out at the same level as the pullback in October 2014."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 146,
        question: "The McClellan Oscillator is what type of indicator?",
        options: [
            "Momentum",
            "Oscillator",
            "Breadth",
            "None of the above"
        ],
        correct: 2,
        hasImage: false
    },
    {
        id: 147,
        question: "How can one identify the existence of a cycle?",
        options: [
            "Switch time frames",
            "Remove price trend",
            "Remove volume trend",
            "Use n period extremes"
        ],
        correct: 1,
        hasImage: false
    },
    {
        id: 148,
        question: "Which of the following instances marks a single best valid buy signal with respect to the direction system for the next new trend?",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 149,
        question: "Which crossover in MACD-Histogram is the strongest buy signal generated in the following chart of Alphabet Inc.",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 2,
        hasImage: true
    },
    {
        id: 150,
        question: "When an RSI makes a lower top (peak) above 50, a sell order should be executed when:",
        options: [
            "The RSI crosses below 50.",
            "the RSI crosses below 30.",
            "the last peak is retested.",
            "the trough between the peaks has been crossed from above."
        ],
        correct: 3,
        hasImage: false
    }
];
