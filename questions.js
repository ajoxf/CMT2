// CMT Level II Sample Exam - Complete Questions Database
// All 150 questions with correct answers
// Questions with charts marked with hasImage: true

const questions = [
    // ===== SECTION 1: CFA Ethics & Standards (Questions 1-8) =====
    {
        id: 1,
        question: "John Welsh, CFA, CMT, is the founder of YMR Research, an investment management firm that specializes in short selling. Welsh identifies stocks that appear over-extended on price charts after large price increases. Additionally, Welsh also buys research from third-party firms that provide timely updates on any legislative or regulatory changes that may impact his shorted stocks favorably. Welsh sells short those stocks he estimates are due for a trend reversal, are near a valuation peak, and those that his sources identify as facing legal or regulatory challenges. Immediately after he sells a stock, Welsh conducts a public relations campaign to disclose all of the negative information he has gathered on the company, even if the information is not yet public. Which of Welsh's actions is most likely to be in violation of the CFA Institute Standards of Professional Conduct?",
        options: [
            "Selling stock short",
            "Only disclosing information about target companies",
            "Only trading on information from third-party research",
            "Both disclosing information about target companies and trading on information from third party research"
        ],
        correct: 3,
        explanation: "Welsh violates Standard II(A) Material Nonpublic Information by trading on and disclosing information that is not yet public. Trading on material nonpublic information and conducting a PR campaign to disclose non-public negative information both constitute violations."
    },
    {
        id: 2,
        question: "Which of the following statements concerning requirements under Standard V (B) - Communication with Clients and Prospective Clients is mostly likely accurate? This standard requires members and candidates to:",
        options: [
            "disclose the basic format and general principles of the investment process.",
            "divulge the number of investment related personnel responsible for external communication.",
            "promoting fair competition among investment management firms by disclosing manager remuneration.",
            "avoid distinguishing between fact and opinion in the presentation of investment analysis and recommendations to keep presentations simple."
        ],
        correct: 0,
        explanation: "Standard V(B) requires members to disclose the basic format and general principles of the investment processes used to analyze investments, prepare recommendations, and take investment actions. Transparency in methodology is essential for clients to understand how investment decisions are made."
    },
    {
        id: 3,
        question: "James Thompson, CFA, has been accused of professional misconduct. The allegations concern Thompson's personal bankruptcy filing 10 years ago when he was a college student and had a large amount of credit card bills he could not pay. By not disclosing the bankruptcy filing to his clients, did Thompson most likely violate any CFA Institute Standards of Professional Conduct?",
        options: [
            "No",
            "Yes, related to Misconduct",
            "Yes, related to Misrepresentation",
            "Yes, related to Communication with Clients and Prospective Clients"
        ],
        correct: 0
    },
    {
        id: 4,
        question: "Emma Simone, CFA, CMT, manages equity accounts for government entities whose portfolios are classified as being extremely conservative and risk averse. Given that the objective of the said clients is to maximize returns with the lowest possible risk, Simone considers adding to their holdings, shares of Pinnacle Corp, a new, illiquid, micro-cap stock that she believes has the potential for high returns. To make her investment decision, Simone relies on comprehensive third-party research from an investment bank with a solid reputation for top-quality research. After her review of that research, Simone positions her accounts so each has a 10% allocation to Pinnacle Corp. Did Simone most likely violate any CFA Institute Standards of Professional Conduct by purchasing the micro-cap stock for her clients?",
        options: [
            "No",
            "Yes, related to Suitability",
            "Yes, related to Loyalty, Prudence and Care",
            "Yes, related to Diligence and Reasonable Basis"
        ],
        correct: 1
    },
    {
        id: 5,
        question: "Which of the following actions would be considered a violation of the standard on market manipulation?",
        options: [
            "Trading of low volume securities to exploit market inefficiencies",
            "Selling a stock and immediately buying it back to capture tax benefits",
            "Trading high volumes in liquid stocks to capture arbitrage opportunities",
            "Issuing false rumors about an investment to induce trading by others so you can benefit from the change in share price"
        ],
        correct: 3
    },
    {
        id: 6,
        question: "Capturing information from which of the following internet-based sources is most likely to be considered material nonpublic information, if the information cannot be found in other locations?",
        options: [
            "A Facebook post from a publicly traded company, readily accessible to anyone",
            "An earnings update that was accidently pre-released on the Company's official public Twitter feed",
            "A discussion thread in a LinkedIn group accessible only after fulfilling specific membership requirements",
            "An adjustment in company ratings announcement from an investment manager's password-protected website available to clients"
        ],
        correct: 2
    },
    {
        id: 7,
        question: "David Kelso, CFA, CMT, a research analyst, changes his recommendation on shares of Shine Inc. from 'sell' to 'buy'. Kelso emailed this change in investment advice to all his customers before the market open. Three hours later, one of his clients called with a short sell order of 500 shares of Shine. Under these circumstances, Kelso:",
        options: [
            "should accept the order because it is a transaction requested by his client.",
            "should not accept the order as it counters the change in recommendation.",
            "should advise the customer of the change in recommendation before accepting the order.",
            "should not accept the order until one trading day has elapsed after the communication of the change in recommendation."
        ],
        correct: 2
    },
    {
        id: 8,
        question: "To undertake independent practice for an outside entity, apart from fulfilling their duties to their regular employer, members:",
        options: [
            "need not obtain permission from their employer.",
            "need to obtain permission from the outside entity only.",
            "need to obtain permission from both the outside entity and their employer.",
            "need not obtain permission from either the outside entity or their employer."
        ],
        correct: 2
    },

    // ===== SECTION 2: Chart Patterns (Questions 9-20) =====
    {
        id: 9,
        question: "Which of the following patterns resonate with price action highlighted within the black circle? [Chart shows price action with throwback pattern]",
        options: [
            "Pullback",
            "Bull trap",
            "Bear trap",
            "Throwback"
        ],
        correct: 3,
        hasImage: true,
        // Example of multiple audio/video files for a question
        // Uncomment and update paths when you have actual video/audio files
        // mediaFiles: [
        //     { url: "videos/ch2_1_part1.mp4", label: "Pattern Introduction - Part 1" },
        //     { url: "videos/ch2_1_part2.mp4", label: "Pattern Introduction - Part 2" },
        //     { url: "videos/ch2_1_part3.mp4", label: "Pattern Analysis" }
        // ]
    },
    {
        id: 10,
        question: "For a long trade initiated at point Z, which of the following represent an ideal stop-loss point? [Chart shows support levels at points A, B, and C]",
        options: [
            "A close below point A",
            "A close below point B",
            "A close below point C",
            "An intra-day penetration of Point A"
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 11,
        question: "According to Bulkowski, what is the minimum measured price objective for the gap observed at point B? [Chart shows Amazon with gap at point B, with price levels at 490, 570, and 595]",
        options: [
            "662",
            "674.5",
            "687.5",
            "700"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 12,
        question: "Identify the chart pattern highlighted below: [Chart shows Apple stock with three peaks at similar levels]",
        options: [
            "Triple top",
            "Double top",
            "Ascending triangle",
            "Head and Shoulders top"
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 13,
        question: "Identify the chart pattern highlighted below: [Chart shows Intel stock with head and shoulders pattern]",
        options: [
            "Double top",
            "Descending triangle",
            "Symmetrical triangle",
            "Head and Shoulders pattern"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 14,
        question: "Based on the chart shown below, identify the best course of action: [Chart shows Goldman Sachs with potential head and shoulders top]",
        options: [
            "Go short immediately.",
            "Go long as shares are retesting the trendline.",
            "Go short only below point B, as point B is the beginning of a trend.",
            "Wait for a close below point A and execute shorts when prices are 3% below the neckline."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 15,
        question: "Identify the chart pattern highlighted below: [Chart shows Canadian National Corp with ascending triangle]",
        options: [
            "Rising wedge",
            "Ascending triangle",
            "Descending triangle",
            "Head and Shoulders bottom"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 16,
        question: "Identify the chart pattern highlighted below at point A: [Chart shows AT&T with bull trap at point A]",
        options: [
            "Pullback",
            "Bull trap",
            "Bear trap",
            "Throwback"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 17,
        question: "Identify the chart pattern highlighted below: [Chart shows IBM stock with head and shoulders bottom pattern]",
        options: [
            "Triple bottom",
            "Descending triangle",
            "Head and Shoulders",
            "Head and Shoulders bottom"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 18,
        question: "Identify the chart pattern highlighted below: [Chart shows S&P 500 with Adam bottom pattern]",
        options: [
            "Adam",
            "Rectangle",
            "Double bottom",
            "Head and Shoulders bottom"
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 19,
        question: "Identify the chart pattern highlighted below: [Chart shows Two Interactive Software with flag pattern]",
        options: [
            "Flag",
            "Wedge",
            "Pennant",
            "Ascending triangle"
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 20,
        question: "An exhaustion gap is often found:",
        options: [
            "at the end of a significant move.",
            "in the middle of a significant move.",
            "at the beginning of a significant move.",
            "after the announcement of a surprising but rumored news release."
        ],
        correct: 0,
        explanation: "Exhaustion gaps occur at the end of a significant price move and signal that the trend is running out of momentum. They typically appear when buyers (in an uptrend) or sellers (in a downtrend) make one final push before the trend reverses."
    },

    // ===== Questions 21-30 =====
    {
        id: 21,
        question: "In a Head & Shoulders pattern, volume is generally:",
        options: [
            "consistent throughout the pattern.",
            "light as prices approach the peak.",
            "highest on a penetration through the neckline.",
            "heaviest during the formation of the left shoulder."
        ],
        correct: 3
    },
    {
        id: 22,
        question: "A well-defined price channel should cover ____ of all prices that occurred during the past 100 bars.",
        options: [
            "90%",
            "95%",
            "99%",
            "100%"
        ],
        correct: 1
    },
    {
        id: 23,
        question: "According to Schabacker, which of the following guidelines help in identifying the end of bull markets?\n1. Interest rates have declined.\n2. Commodity prices have declined.\n3. Trading volumes increase sharply.\n4. Popular stocks advance significantly while other companies' stocks collapse.",
        options: [
            "2 only",
            "1 & 2 only",
            "3 & 4 only",
            "All of the above"
        ],
        correct: 2
    },
    {
        id: 24,
        question: "According to the Dow Theory, which of the following stages are normally accompanied by highest volume?",
        options: [
            "Middle of a bull/ bear market",
            "Beginning of a bull/ bear market",
            "Only during the beginning and middle of a bull market",
            "Peak of a bull market or the panic phase of bear market"
        ],
        correct: 3
    },
    {
        id: 25,
        question: "The implied volatility of an option is the projection of an annualized _____ standard deviation move in the underlying stock over the life of the option.",
        options: [
            "one",
            "two",
            "three",
            "four"
        ],
        correct: 0
    },
    {
        id: 26,
        question: "A V-top or V-bottom is always accompanied by ______ and usually ______.",
        options: [
            "high volatility, low volume",
            "high volatility, high volume",
            "low volatility, low volume",
            "low volatility, high volume"
        ],
        correct: 1
    },
    {
        id: 27,
        question: "Increased buying of options by market participants leads to:",
        options: [
            "a decrease in open interest.",
            "a decrease in implied volatility.",
            "an increase in implied volatility.",
            "neither an increase nor a decrease in implied volatility."
        ],
        correct: 2
    },
    {
        id: 28,
        question: "Which of the following is a measure used by option traders to analyze overvalued / undervalued options?",
        options: [
            "Put/ call parity",
            "Plurality index",
            "Implied volatility",
            "Standard deviation"
        ],
        correct: 2
    },
    {
        id: 29,
        question: "Which of the following involves the use of correlation to predict future values of one security to another?",
        options: [
            "Variance",
            "Regression",
            "Standard deviation",
            "Correlation coefficient"
        ],
        correct: 1
    },
    {
        id: 30,
        question: "The choice of two standard deviations when plotting Bollinger bands equates to a confidence band of:",
        options: [
            "68.2%.",
            "87%.",
            "95%.",
            "95.4%."
        ],
        correct: 1
    },

    // ===== Questions 31-40 =====
    {
        id: 31,
        question: "Interest rate futures, money markets, and _____ stocks are among the investment vehicles closely tied to government rate policy.",
        options: [
            "utility",
            "energy",
            "industrial",
            "transportation"
        ],
        correct: 0
    },
    {
        id: 32,
        question: "In a trend following system, the slower trendline (using a longer calculation period) identifies the _______ trend while faster trendline is used for/ as a ________.",
        options: [
            "primary, timing",
            "primary, stop-loss",
            "secondary, timing",
            "intermediate, stop-loss"
        ],
        correct: 0
    },
    {
        id: 33,
        question: "Which of the following types of trailing stops only advance once triggered, but never retreat?",
        options: [
            "ATR-based",
            "Fixed percentage",
            "Percentage of profits",
            "Wilder's Parabolic SAR"
        ],
        correct: 3
    },
    {
        id: 34,
        question: "The histogram on a MACD indicator is created by subtracting the ________ line from the ______ line.",
        options: [
            "faster signal, MACD",
            "slower signal, MACD",
            "slower signal, faster signal",
            "faster signal, slower signal"
        ],
        correct: 1
    },
    {
        id: 35,
        question: "In the following chart where is a negative divergence in RSI observed? [Chart shows Apple with RSI divergence at point B]",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 36,
        question: "Identify the highlighted chart pattern below: [Chart shows S&P 500 with head and shoulders bottom pattern]",
        options: [
            "Triple bottom",
            "Double bottom",
            "Cup and handle formation",
            "Head and Shoulders bottom"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 37,
        question: "Identify the candlestick chart pattern highlighted below: [Chart shows S&P 500 with rising three method pattern]",
        options: [
            "Three black crows",
            "Three rising soldiers",
            "Falling three method",
            "Rising three method"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 38,
        question: "Identify the candlestick pattern highlighted below within circle A: [Chart shows Dell with bullish harami pattern]",
        options: [
            "Evening star",
            "Shooting star",
            "Bullish Harami",
            "Spinning top bearish"
        ],
        correct: 2,
        hasImage: true
    },
    {
        id: 39,
        question: "New short-selling is normally observed when declining prices are accompanied by ______ volume and ________ open interest.",
        options: [
            "falling, rising",
            "rising, rising",
            "falling, falling",
            "rising, falling"
        ],
        correct: 0
    },
    {
        id: 40,
        question: "Momentum refers to an analysis of:",
        options: [
            "price over time.",
            "volume over time.",
            "price change over time.",
            "change in price relative to another security."
        ],
        correct: 2
    },

    // ===== Questions 41-50 =====
    {
        id: 41,
        question: "A combination of rising prices and flat On-balance volume (OBV) trend indicates a:",
        options: [
            "weak uptrend.",
            "clear uptrend.",
            "moderate uptrend.",
            "distribution period."
        ],
        correct: 2
    },
    {
        id: 42,
        question: "Which of the following can be used to predict the future price trend of a market based on its correlation with multiple related markets?",
        options: [
            "Variance",
            "Linear regression",
            "Standard deviation",
            "Correlation coefficient"
        ],
        correct: 3
    },
    {
        id: 43,
        question: "The presence of a 'fat tail' suggests that:",
        options: [
            "prices are normally distributed.",
            "prices are not normally distributed.",
            "trend following systems do not work.",
            "the price action of major financial instruments can be explained by a random distribution."
        ],
        correct: 1
    },
    {
        id: 44,
        question: "Typically, the _________ year of a president's term posts the strongest returns for the market as per the Presidential Cycle.",
        options: [
            "first",
            "second",
            "third",
            "fourth"
        ],
        correct: 2
    },
    {
        id: 45,
        question: "Identify the stochastic pattern shown in the chart. [Chart shows stochastic with setup bearish pattern - higher price bottoms with lower stochastic bottoms]",
        options: [
            "Hinge",
            "Failure",
            "Warning",
            "Setup (bearish)"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 46,
        question: "Amplitude refers to:",
        options: [
            "the height of the wave from its horizontal midpoint (the X-axis).",
            "the number of time units necessary to complete one wavelength.",
            "the number of wavelengths that repeat every 360°, calculated as ω =1/T.",
            "a measurement of the starting point or offset of the cycle relative to a benchmark wave."
        ],
        correct: 0
    },
    {
        id: 47,
        question: "_________ is known for emphasizing a high level of rationality in investor behavior and aggregate market outcome.",
        options: [
            "The Dow theory",
            "Behavioral finance",
            "The Adaptive Market hypothesis",
            "The Efficient Markets hypothesis"
        ],
        correct: 3
    },
    {
        id: 48,
        question: "In an ideal situation, stock prices of metal mining companies and the U.S. dollar index are:",
        options: [
            "positively correlated.",
            "negatively correlated.",
            "positively correlated, but only in an inflationary environment.",
            "negatively correlated, but only in an deflationary environment."
        ],
        correct: 1
    },
    {
        id: 49,
        question: "To boost exports, the People's Bank of China decided to devalue its currency, yuan. In order to accomplish this, the Bank is most likely to:",
        options: [
            "sell U.S. dollars.",
            "impose capital controls.",
            "tighten money supply in the economy.",
            "increase the overnight borrowing rate of interest."
        ],
        correct: 0
    },
    {
        id: 50,
        question: "Near the end of an economic expansion:",
        options: [
            "all the asset classes turn down simultaneously.",
            "bonds turn down before stocks and commodities.",
            "stocks turn down before bonds and commodities.",
            "commodities turn down before stocks and bonds."
        ],
        correct: 1
    },

    // ===== Questions 51-60 =====
    {
        id: 51,
        question: "Fluctuations in the U.S. dollar will have an impact on the price of gold because:",
        options: [
            "falling U.S. dollar is deflationary.",
            "gold is denominated in U.S. dollars.",
            "U.S. exports a significant quantity of gold.",
            "the value of U.S. dollars is backed by gold."
        ],
        correct: 1
    },
    {
        id: 52,
        question: "Sophisticated traders can incorporate intermarket analysis in their trading decisions through:",
        options: [
            "seasonality analysis.",
            "momentum analysis.",
            "macroeconomic analysis.",
            "charts and correlation analysis."
        ],
        correct: 3
    },
    {
        id: 53,
        question: "The Bank of Japan decides to buy U.S. dollars in order to push the Japanese yen lower. As a result, Japanese equity markets are expected to:",
        options: [
            "rise.",
            "decline.",
            "stay unchanged.",
            "rise in the long run, but likely to remain unaffected in the short term."
        ],
        correct: 0
    },
    {
        id: 54,
        question: "Borrowing yen at lower interest rates and buying higher yielding assets such as emerging market equities or bonds will:",
        options: [
            "push Japanese equities lower.",
            "have no impact on Japanese equities.",
            "push emerging market bonds and equities lower.",
            "push emerging market bonds and equities higher."
        ],
        correct: 3
    },
    {
        id: 55,
        question: "A key advantage of intermarket analysis as compared to traditional technical indicators is the addition of:",
        options: [
            "an economic indicator to forecast trend direction.",
            "a sentiment indicator to forecast trend direction.",
            "lagging indicators that confirm reversals in trend direction.",
            "leading indicators that anticipate reversals in trend direction."
        ],
        correct: 3
    },
    {
        id: 56,
        question: "Bonds have an impressive record as a leading indicator for the stock market, although this information cannot be used in constructing a trading system because:",
        options: [
            "the lead times can be quite small.",
            "equity-bond relationship is a myth.",
            "the lead times can be quite long, ranging from one to two years.",
            "the lead times can be quite long, ranging from one to two months."
        ],
        correct: 2
    },
    {
        id: 57,
        question: "From a portfolio diversification perspective, the benefit of including foreign stocks is:",
        options: [
            "clear, because of low correlation between different stock markets.",
            "doubtful, because of low positive correlation between different stock markets.",
            "doubtful, as equity markets around the world tend to have strong positive correlation.",
            "clear, as equity markets around the world tend to have meaningfully negative correlation."
        ],
        correct: 2
    },
    {
        id: 58,
        question: "Major changes in commodity prices affect the bond markets of different countries:",
        options: [
            "in a similar way.",
            "in different ways, depending upon their demographics.",
            "in different ways, depending upon their economic structure.",
            "in different ways, depending upon their monetary policy structure."
        ],
        correct: 2
    },
    {
        id: 59,
        question: "During periods of economic contractions/ recessions, which of the following asset classes are likely to outperform equity markets on a relative as well as absolute basis?",
        options: [
            "Bonds",
            "Precious metals",
            "Industrial metals",
            "Emerging market stocks"
        ],
        correct: 0
    },
    {
        id: 60,
        question: "Based on the correlation matrix, identify two instruments that can be combined with the FTSE to reduce overall portfolio risk by diversification: [Table showing correlations between S&P 500, FTSE, Hang Seng, Bonds, GBP, Gold, and Crude Oil]",
        options: [
            "Gold, bonds",
            "GBP, gold",
            "S&P 500, GBP",
            "S&P 500, Hang Seng"
        ],
        correct: 0,
        hasImage: true
    },

    // ===== Questions 61-70 =====
    {
        id: 61,
        question: "From an intermarket perspective, a bullish breakout from the ascending triangle (highlighted by a circle) in the U.S. dollar index will result in crude oil: [Chart shows USD index with ascending triangle pattern]",
        options: [
            "trading lower.",
            "trading higher.",
            "behaving randomly.",
            "consolidating sideways."
        ],
        correct: 0,
        hasImage: true
    },
    {
        id: 62,
        question: "The MACD histogram (in the traditional setup) is calculated by taking:",
        options: [
            "the difference between the 12 and 26-day SMAs.",
            "the difference between the 26 and 12-day SMAs.",
            "the difference between the 12 and 26-day EMAs.",
            "the difference between the 26 and 12-day EMAs."
        ],
        correct: 2
    },
    {
        id: 63,
        question: "A buy signal using the MACD histogram is generated when:",
        options: [
            "the MACD histogram stops falling and ticks up.",
            "the MACD line crosses the signal line from below.",
            "the MACD line crosses the signal line from above.",
            "the MACD histogram stops rising and ticks down."
        ],
        correct: 0
    },
    {
        id: 64,
        question: "Identify the chart pattern highlighted below: [Chart shows USD index with divergence between price and MACD]",
        options: [
            "Bull trap",
            "Divergence",
            "Confirmation",
            "Consolidation"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 65,
        question: "Which of the following represents a valid MACD histogram buy signal? [Chart shows S&P 500 with MACD histogram at points A, B, C, and D]",
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
        id: 66,
        question: "If a trader is attempting to trade MACD divergences based on the chart shown below, which of the following statements would reflect the most appropriate line of action? [Chart shows S&P 500 with MACD divergence and uptrend line]",
        options: [
            "Go short on the bar marked by vertical line 'A' as the MACD turns lower.",
            "Go short on the bar marked by vertical line 'B' as momentum is not at previous highs while price action is.",
            "Go short on the bar marked by vertical line 'C', as it is the point when the MACD divergence is confirmed with a lower high and the MACD fast line crossing beneath the MACD signal line.",
            "Despite the negative MACD divergence, refrain from going short as prices are retesting a support level (uptrend line)."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 67,
        question: "Oscillators:",
        options: [
            "help in identifying trends.",
            "are greed and fear indicators.",
            "help in catching turning points.",
            "measure the velocity of the price trends."
        ],
        correct: 2
    },
    {
        id: 68,
        question: "Which of the following is essentially a leading or a coincident indicator?",
        options: [
            "Relative Strength Index",
            "Simple moving average",
            "Exponential moving average",
            "Average Directional indicator"
        ],
        correct: 0
    },
    {
        id: 69,
        question: "Which of the following is a valid RSI signal?",
        options: [
            "Breadth",
            "Divergence",
            "Convergence",
            "Support and resistance"
        ],
        correct: 1
    },
    {
        id: 70,
        question: "Which of the following instances marks a valid sell signal with respect to the Directional system? [Chart shows Apple with ADX crossing directional lines at points A, B, C, and D]",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 1,
        hasImage: true
    },

    // ===== Questions 71-80 =====
    {
        id: 71,
        question: "It pays to buy using overbought signals of daily RSI only when:",
        options: [
            "the weekly RSI trend is up.",
            "weekly RSI reading is above 30.",
            "the weekly trend in RSI is down.",
            "the monthly trend in RSI is down."
        ],
        correct: 0
    },
    {
        id: 72,
        question: "The Force index combines ________ and ________ to discover the force of bulls or bears behind every rally or decline.",
        options: [
            "volume, price",
            "price, open interest",
            "market breadth, price",
            "price momentum, volume"
        ],
        correct: 0
    },
    {
        id: 73,
        question: "Consensus indicators, also known as contrary opinion indicators:",
        options: [
            "are suitable for precision timing.",
            "can only be applied in equity markets.",
            "are only suitable only as warning signs.",
            "are excellent market breadth indicators."
        ],
        correct: 2
    },
    {
        id: 74,
        question: "Market Letter writers:",
        options: [
            "are the most objective and informed group of market participants.",
            "have an impressive record of predicting tops and bottoms in the market.",
            "have an impressive record of predicting tops but not bottoms in the market.",
            "are most bullish at market tops and most bearish at market bottoms as a group."
        ],
        correct: 3
    },
    {
        id: 75,
        question: "When a leading business magazine puts a bull on its cover, it's usually:",
        options: [
            "a good time to take profits on long positions.",
            "safe to consider that a major bottom cannot be too far.",
            "a safe bet to ignore the fact as magazine subscribers barely trade.",
            "an opportunity to go long as magazines present an objective and informed opinion."
        ],
        correct: 0
    },
    {
        id: 76,
        question: "European investors not buying portfolio insurance, considering the calming effect of ECB President, Mario Draghi's comments on global financial markets, is an example of which of the following biases?",
        options: [
            "Framing bias",
            "Saliency bias",
            "Anchoring bias",
            "Sunk-Cost bias"
        ],
        correct: 1
    },
    {
        id: 77,
        question: "An investor invests in stock A with a long term perspective and his goal is capital appreciation. In five years, his investment grows 20-fold. He is advised by his financial advisor to sell half of his stake in stock A and invest in stock B, which he feels is expected to perform better than stock A. According to the endowment effect, the investor is expected to:",
        options: [
            "avoid selling stock A.",
            "sell 100% of stock A.",
            "sell 50% of stock A & invest in stock B.",
            "sell 100% of stock A & invest in stock B."
        ],
        correct: 0
    },
    {
        id: 78,
        question: "Consider two stocks with an initial investment of $10,000, currently facing the following prospects:\n• Stock A currently has a loss of –$2,000, and going forward has a 50 percent chance of going down $1,000 and a 50 percent chance of going up $2,500.\n• Stock B currently has a gain of $2,000, and going forward has a 40 percent chance of going down $1,000 and a 60 percent chance of going up $2,500.\nThe investor needs to close out one position to pay off other debts. Which one is (s)he most likely to choose?",
        options: [
            "Avoid selling stock A",
            "Avoid selling stock B",
            "Sell 50% of stock A & invest in stock B",
            "Sell 100% of stock A & invest in stock B"
        ],
        correct: 3
    },
    {
        id: 79,
        question: "The biggest drawback of a relative strength system is that:",
        options: [
            "the hedging cost is meaningfully high.",
            "the portfolio is long-only and is fully invested.",
            "it invests by adding non-correlated asset classes.",
            "relative strength is normally unsustainable over a meaningful time period."
        ],
        correct: 1
    },
    {
        id: 80,
        question: "One of the possible solutions to control losses and drawdowns while using a relative strength rotation system is to:",
        options: [
            "add correlated asset classes.",
            "add non-correlated asset classes.",
            "add corporate debt to the portfolio.",
            "add government bonds to the portfolio."
        ],
        correct: 1
    },

    // ===== Questions 81-90 =====
    {
        id: 81,
        question: "Daily market volatility gives a good approximation of:",
        options: [
            "long-term risk.",
            "short-term risk.",
            "systematic risk.",
            "unsystematic risk."
        ],
        correct: 1
    },
    {
        id: 82,
        question: "Which of the following represents the greatest risk for traders?",
        options: [
            "Delta risk",
            "Price shock",
            "Systematic risk",
            "Unsystematic risk"
        ],
        correct: 1
    },
    {
        id: 83,
        question: "Based on the chart shown below, analyze the behavior of the A/D line. [Chart shows NYSE Composite with A/D line showing divergence]",
        options: [
            "The A/D line is confirming the breakout to new highs.",
            "The behavior of the A/D line suggests that the rally should continue.",
            "The behavior of the A/D line suggests that the rally may take a short-term pause.",
            "The breakout to new highs is not being confirmed by broader market participation."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 84,
        question: "Which of the following instances represent a price shock?",
        options: [
            "The S&P 500 gapping higher by 2% following a positive employment report.",
            "Crude oil futures gaining 1.5% after an unexpected inventory decline announcement.",
            "A 10% decline in equity markets following an earthquake in a country's financial hub.",
            "Shares of XYZ losing 50% over a 12-month period after 4 consecutive quarters of disappointing earnings."
        ],
        correct: 2
    },
    {
        id: 85,
        question: "Which of the following methods reduces, if only mildly, the possibility of loss from price shocks?",
        options: [
            "Avoid the use of leverage in trading",
            "Use well-defined rules for initiating trades",
            "Use well-defined stops for exiting from trades",
            "Avoid exposure to the market as much as possible"
        ],
        correct: 3
    },
    {
        id: 86,
        question: "Average Maximum Retracement measures:",
        options: [
            "the largest historic loss in a trading system.",
            "an average of 10 largest losses in a trading system.",
            "the average difference between the annualized return and risk free rate, divided by Beta.",
            "an average of the difference between the current value in the account and the past value, ignoring all-time high values."
        ],
        correct: 3
    },
    {
        id: 87,
        question: "When liquidating positions to lighten exposure, one should consider selling off:",
        options: [
            "winning positions to take profits off the table.",
            "winning positions to reduce combined exposure risk.",
            "losing positions only if they have exceeded their respective time stops.",
            "losing positions as they have been proven inconsistent with the trade bias."
        ],
        correct: 3
    },
    {
        id: 88,
        question: "Suppose there is a choice of trading systems based on different characteristics of performance, and only one can be selected, which of the following should it be?",
        options: [
            "Upward equity surges over downward equity surges.",
            "More time in the markets so that most of the opportunities can be captured.",
            "A longer time-to-recovery rather than more number of short-term drawdowns.",
            "Smaller profits rather than larger profits (as it is least exposed to markets from a time perspective)."
        ],
        correct: 0
    },
    {
        id: 89,
        question: "If daily returns are constant, they can be converted into annualized risk by multiplying with the square root of:",
        options: [
            "365.",
            "360.",
            "252.",
            "260."
        ],
        correct: 2
    },
    {
        id: 90,
        question: "The Sortino Ratio:",
        options: [
            "is a form of semivariance.",
            "is the same as Sharpe ratio.",
            "uses portfolio Beta as the divisor.",
            "includes only downside risk in the denominator."
        ],
        correct: 3
    },

    // ===== Questions 91-100 =====
    {
        id: 91,
        question: "Which of the following return measures reflects excess returns over risk-free rate per unit of risk?",
        options: [
            "Treynor ratio",
            "Calmar ratio",
            "Sharpe ratio",
            "Ulcer index"
        ],
        correct: 2
    },
    {
        id: 92,
        question: "Which of the following types of trading systems exhibits a pattern of many smaller profits and few large losses?",
        options: [
            "Parabolic-SAR based trend following system",
            "Moving average crossover system",
            "26-week channel breakout system",
            "Mean-reversion system"
        ],
        correct: 3
    },
    {
        id: 93,
        question: "If the initial margin requirement for a single gold futures contract is 8% ($9,000), it represents a leverage of:",
        options: [
            "10%.",
            "12.5%.",
            "15.5%.",
            "17.5%."
        ],
        correct: 1
    },
    {
        id: 94,
        question: "If the contract value of the May '16 Silver futures contract is $75,000, and the implied leverage of a trading position is 16 times, the dollar amount of the initial margin is closest to:",
        options: [
            "$4,000.",
            "$4,700.",
            "$5,000.",
            "$5,300."
        ],
        correct: 1
    },
    {
        id: 95,
        question: "A sell-stop order becomes a _________ order once triggered.",
        options: [
            "limit",
            "market",
            "fill-or-kill",
            "immediate-or-cancel"
        ],
        correct: 1
    },
    {
        id: 96,
        question: "Profit-taking targets based on price volatility are often calculated as a multiple of:",
        options: [
            "ATR added to the system entry point.",
            "ATR added to the trade entry point (actual filled price).",
            "X% added to the system entry point.",
            "X% added to the trade entry point (actual filled price)."
        ],
        correct: 0
    },
    {
        id: 97,
        question: "If a trader is using a correlation coefficient, r2, to rank the trend over 20 days, which of the following systems should be used to trade the lowest ranking markets?",
        options: [
            "Parabolic-SAR based trend following system",
            "Moving average crossover system",
            "26-week channel breakout system",
            "Mean-reversion system"
        ],
        correct: 3
    },
    {
        id: 98,
        question: "Maximum Adverse Excursion measures:",
        options: [
            "the largest loss observed over the test period.",
            "the largest profit observed over the test period.",
            "the time required (in trading days) to recover back to the peak following the largest drawdown observed.",
            "the time required (in calendar days) to recover back to the peak following the largest drawdown observed."
        ],
        correct: 0
    },
    {
        id: 99,
        question: "Using a long-term moving average to hedge portfolios results into a (n) _________ vs. a buy & hold system.",
        options: [
            "increase in both volatility and drawdown",
            "decrease in both volatility and drawdown",
            "increase in volatility, but a reduction in drawdown",
            "decrease in volatility, but an increase in drawdown"
        ],
        correct: 1
    },
    {
        id: 100,
        question: "Imagine facing the following pair of concurrent decisions:\nDecision (i): Choose between: (A) A sure gain of $240; (B) 25% chance to gain $1000 and 75% chance to gain nothing.\nDecision (ii): Choose between: (C) A sure loss of $750; (D) 75% chance of losing $1000 and 25% chance of losing nothing.\nBased on the framing bias, which of the following combination of choices stand a high probability of being chosen?",
        options: [
            "A, C",
            "A, D",
            "B, C",
            "B, D"
        ],
        correct: 1
    },

    // ===== Questions 101-110 =====
    {
        id: 101,
        question: "Anchoring is a perception bias arising when investors:",
        options: [
            "act on recent information.",
            "opt for a way to avoid taking a loss.",
            "are risk averse toward favorable opportunities.",
            "attempt to make a guess despite having limited information."
        ],
        correct: 3
    },
    {
        id: 102,
        question: "Which of the following methods helps filter out the underlying noise in a time series and find the current trend direction of the series?",
        options: [
            "Detrending",
            "N-period channel breakout operator",
            "Using a filter based on RSI readings",
            "Incorporating average return metrics"
        ],
        correct: 1
    },
    {
        id: 103,
        question: "The channel normalization operator:",
        options: [
            "functions as a low-pass filter.",
            "functions as a high-pass filter.",
            "has a dynamic look-back span.",
            "requires 3 arguments to be scripted."
        ],
        correct: 1
    },
    {
        id: 104,
        question: "Which of the following predictability studies effectively contradicts the weak-form of EMH?",
        options: [
            "Price momentum unable to persist beyond 3-6 weeks",
            "Strong price trends measured over a 3 to 5 year period tend to reverse",
            "Strong price trends measured over a 3 to 5 year period tend to continue",
            "Volume offers no additional edge when combined with price action analysis"
        ],
        correct: 2
    },
    {
        id: 105,
        question: "Which of the following predictability studies effectively contradicts the semi-strong form of EMH?",
        options: [
            "Stocks with high EV/EBIDTA ratios outperform those with low P/E ratios.",
            "Stocks with high P/E ratios outperform those with low P/E ratios.",
            "Stocks with high P/B ratios outperform those with low P/B ratios.",
            "Stocks with low P/B ratios outperform those with high P/B ratios."
        ],
        correct: 3
    },
    {
        id: 106,
        question: "Identify the two foundational pillars of behavioral finance:",
        options: [
            "Limited ability of arbitrage, and limits of human rationality",
            "Unlimited ability of arbitrage, and unpredictability of human judgement errors",
            "Unlimited ability of arbitrage, and human dependence on heuristics to simplify and speed up complex cognitive tasks",
            "Unlimited ability of arbitrage, and human tendency of giving too little weight to new information"
        ],
        correct: 0
    },
    {
        id: 107,
        question: "Human tendency of accepting only favorable information and ignoring unfavorable inputs can be attributed to:",
        options: [
            "anchoring.",
            "belief inertia.",
            "confirmation bias.",
            "conservatism bias."
        ],
        correct: 2
    },
    {
        id: 108,
        question: "Conservatism bias refers to the human tendency of:",
        options: [
            "avoiding risk-taking even when the probabilities are favorable.",
            "relying on heuristics to simplify complex cognitive tasks.",
            "giving too little weight to new information.",
            "making biased judgement and choices."
        ],
        correct: 2
    },
    {
        id: 109,
        question: "As per the Barberis, Shleifer & Vishny (BSV) Hypothesis, investors may sometimes over/under-react given two distinct biases, _________ and _________.",
        options: [
            "framing, saliency",
            "confirmation, conservatism",
            "conservatism, sample size neglect",
            "the crime of small numbers, saliency"
        ],
        correct: 2
    },
    {
        id: 110,
        question: "Which of the following is an important assumption under the BSV hypothesis?",
        options: [
            "Markets follow a random walk.",
            "Investors do sometimes consider that earnings trends follow a random walk.",
            "A feedback loop that emerges from the crime of small numbers leads to mean reversion.",
            "Investors labor under the false impression that at any given time, earnings are either in a growth trend or mean reversion process."
        ],
        correct: 3
    },

    // ===== Questions 111-120 =====
    {
        id: 111,
        question: "As per the Daniel, Hershleifer and Subrahmanyam (DHS) Hypothesis, non-random price momentum trends are the result of _______ bias and ______ bias.",
        options: [
            "endowment, saliency",
            "confirmation, saliency",
            "confirmation, anchoring",
            "confirmation, self-attribution"
        ],
        correct: 3
    },
    {
        id: 112,
        question: "An interaction between news watchers (fundamentalists) and momentum traders (technicians) creates a positive feedback loop as per the _______, and results into price trends.",
        options: [
            "EMH (Efficient Market Hypothesis)",
            "DHS (Daniel, Hershleifer and Subrahmanyam) Hypothesis",
            "BSV (Barberis, Shleifer & Vishny) Hypothesis",
            "HS (Hong and Stein) Hypothesis"
        ],
        correct: 3
    },
    {
        id: 113,
        question: "Which of the following observations validates the existence of systematic price motion in markets even if they are fully efficient?",
        options: [
            "All investors have the same attitude to risk.",
            "Investors provide working capital for business formations but may not be compensated for the risk taken.",
            "Efficient markets must offer profit opportunities to motivate investors to engage in costly activities of information processing and trading.",
            "Efficient markets offer profit opportunities only to those investors that are willing to engage in costly activities of information processing and trading."
        ],
        correct: 2
    },
    {
        id: 114,
        question: "The most important consequence of technical analysis adopting the scientific method would be:",
        options: [
            "an elimination of objective forecasts.",
            "an elimination of subjective approaches (Elliott, Gann, etc.).",
            "an improvement of subjective approaches (Elliott, Gann, etc.).",
            "an acceptance of the fact that most subjective methods are supported by statistical evidence."
        ],
        correct: 1
    },
    {
        id: 115,
        question: "Based on the classification provided in the Commitment of Traders (COT) report, which of the following groups is considered to be the most successful market participant?",
        options: [
            "Commercials",
            "Retail traders",
            "Big speculators",
            "Institutional traders"
        ],
        correct: 0
    },
    {
        id: 116,
        question: "Position limits set by the CFTC prevent:",
        options: [
            "hedgers from speculating.",
            "retail traders from speculating.",
            "banks from speculating in/rigging the interest rates market.",
            "large speculators from accumulating big positions to bully the market."
        ],
        correct: 3
    },
    {
        id: 117,
        question: "Officers and investors holding more than ______ percent of the shares of a publicly traded company must report their buying and selling to the SEC.",
        options: [
            "two",
            "three",
            "five",
            "ten"
        ],
        correct: 2
    },
    {
        id: 118,
        question: "When analyzing short interest, the 'Days to Cover' number measures:",
        options: [
            "the number of days required for all shorts to cover, based on daily volume.",
            "the number of days required for all shorts to cover, based on average daily volume.",
            "the number of days required to cover 50% of total short positions, based on daily volume.",
            "the number of days required to cover 75% of total short positions, based on daily volume."
        ],
        correct: 1
    },
    {
        id: 119,
        question: "When the 'stocks above their 50-day MA' indicator reaches the lower extreme (25%), and then moves away from that level, it shows that the:",
        options: [
            "market may take a short-term pause, but continue higher.",
            "market may take a short-term pause, but continue lower.",
            "the intermediate-term trend has reached a likely turning point.",
            "the intermediate-term trend is reinforced by weak breadth, and may continue lower."
        ],
        correct: 2
    },
    {
        id: 120,
        question: "The New High-New Low index tracks the behavior of market leaders by:",
        options: [
            "subtracting the number of New Highs from the New Lows.",
            "subtracting the number of New Lows from the New Highs.",
            "taking the absolute value of the difference between New Highs and New Lows.",
            "taking the absolute value of the difference between New Highs and New Lows, and dividing by the total number of stocks."
        ],
        correct: 1
    },

    // ===== Questions 121-130 =====
    {
        id: 121,
        question: "Interpret price action in the chart below, combined with takeaways from the NYSE New High-New Low index: [Chart shows S&P 500 with NH-NL index showing divergence]",
        options: [
            "Confirmation between price action and indicator, the ongoing pullback can be bought.",
            "Divergence between price action and indicator, but just a breadth-based warning sign.",
            "Divergence between price action and indicator, can initiate shorts at current levels.",
            "Can initiate long positions at current price level, as breadth bottomed out at the same level as the pullback in June."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 122,
        question: "In the weekly chart of the S&P 500 index shown below, breadth readings from the NYSE-based New High-New Low index indicate: [Chart shows weekly S&P 500 with capitulation in NH-NL]",
        options: [
            "capitulation, and present a generational buying opportunity.",
            "confirmation with price action, and possible downtrend continuation.",
            "confirmation with price action, but also the possibility of a meaningful snap-back relief rally.",
            "capitulation, but further evidence from price action maybe required before initiating long exposure."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 123,
        question: "Based on the behavior of the NYSE-based New High-New Low index, which of the following points on the chart offer pullback opportunities? [Chart shows S&P 500 with NH-NL at points A, B, C, D]",
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
        id: 124,
        question: "Major cycles observed in agricultural commodities are due to:",
        options: [
            "the herding phenomenon.",
            "weather and fundamental patterns.",
            "mean-reverting characteristics of commodities.",
            "chance, as there is no scientific way of proving the existence of cycles."
        ],
        correct: 1
    },
    {
        id: 125,
        question: "When analyzing charts on multiple timeframes, it is wise to choose timeframes that are related to each other by a factor of:",
        options: [
            "three.",
            "two.",
            "five.",
            "six."
        ],
        correct: 2
    },
    {
        id: 126,
        question: "Based on the duration of the position held, which of the following trades is an example of 'swing trading'?",
        options: [
            "Buying 100 shares of CSCO on March 2, 2016, selling 50 shares on March 7, 2016 and the remaining 50 shares on March 12, 2016.",
            "Buying 100 shares of CSCO at 11.15 AM @ $21.25, squaring off the entire position at 2.00 PM the same day @ $21.75.",
            "Buying 100 shares of CSCO at 3.00 PM @ $21.65, squaring off the entire position at 3.01 PM the same day @ $21.55.",
            "Buying 100 shares of CSCO on June 1, 2003 @ $41.52, selling all shares on December 31, 2015 @ $31.25."
        ],
        correct: 0
    },
    {
        id: 127,
        question: "Which of the following is a key advantage of day-trading, vs. other popular methods such as swing trading or long-term investing?",
        options: [
            "Higher liquidity, therefore less slippage",
            "Transaction costs are on the lower side",
            "Absence of overnight risk",
            "Low drawdowns"
        ],
        correct: 2
    },
    {
        id: 128,
        question: "If open interest rises while prices are in a trading range, it is a ________ sign, as commercial hedgers are much more likely to ________ than speculators.",
        options: [
            "bearish, short",
            "bearish, long",
            "bullish, short",
            "bullish, long"
        ],
        correct: 1
    },
    {
        id: 129,
        question: "As shown in the chart below, a combination of rising open interest and flat (or range-bound) price action suggests that: [Chart shows crude oil with rising open interest in consolidation]",
        options: [
            "retail traders may be building up long positions.",
            "commercial hedgers are more likely to sell short than speculators.",
            "commercial hedgers are more likely initiating fresh long positions.",
            "big speculators are more likely to sell short than commercial hedgers."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 130,
        question: "A curved trendline is normally useful for:",
        options: [
            "stable uptrends.",
            "stable downtrends.",
            "price consolidations.",
            "parabolic price moves."
        ],
        correct: 3
    },

    // ===== Questions 131-140 =====
    {
        id: 131,
        question: "Stocks with superior fundamentals will normally decouple and start outperforming on a relative basis during:",
        options: [
            "a rampant bull market.",
            "a market consolidation.",
            "the last legs of an uptrend.",
            "a market correction (bear market)."
        ],
        correct: 3
    },
    {
        id: 132,
        question: "Based on the 2-day EMA of the Force index, which of the following points on the chart represent a valid buying opportunity, if the trend on the weekly chart was higher throughout the 4-month period? [Chart shows Apple with Force index at points A, B, C, D]",
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
        id: 133,
        question: "In the chart shown below, which of the following interpretations is considered valid given a combination of price action analysis and the behavior of the Force index? [Chart shows Microsoft with Force index divergence]",
        options: [
            "Given the negative divergence between the Force index and price action, it is wise to step aside as price action is likely to consolidate further.",
            "The Force index has turned negative, offering a long opportunity if tomorrow's price action manages to surpass today's high.",
            "The Force index is diverging negatively from price action, offering an opportunity to go short on further weakness.",
            "MSFT is retesting a support level; consider going long on a confirmation of support."
        ],
        correct: 2
    },
    {
        id: 134,
        question: "Analyze the chart of Randgold Resources (GOLD) shown below, particularly within the context of the behavior of the 'on-balance volume' (OBV) indicator. [Chart shows Randgold with OBV divergence]",
        options: [
            "OBV is confirming the primary downtrend in price action, but it would be prudent to wait for a short-term bounce to initiate new short positions.",
            "OBV is diverging positively from price action; a long trade can be initiated as price action has recaptured support from the July lows.",
            "OBV is diverging positively from price action; hence, only existing short positions should be covered.",
            "OBV is confirming the primary downtrend in price action; maintain short positions."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 135,
        question: "An analysis of OBV in the shares of Adobe Systems, Inc. (ADBE) shown below suggests that: [Chart shows Adobe with OBV confirmation]",
        options: [
            "any near-term strength should be considered as an opportunity to reduce positions, given the divergence between OBV and price action.",
            "any near-term dips should be considered as buying opportunities, given the confirmation between OBV and price action.",
            "we are likely to see a pullback unfold, given the 'M' pattern in OBV towards the end of the chart (circled).",
            "price action is likely to go sideways in the near-term, given the extension in OBV."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 136,
        question: "Which of the following statements correctly interpret the behavior of price action and the Accumulation/Distribution (A/D) indicator shown in the chart shown below? [Chart shows Mattel with A/D divergence]",
        options: [
            "Given the confirmation with price action by the A/D indicator at recent lows, one can go long only after price action manages to surpass $29 (intermediate-term high).",
            "A positive divergence in early October '15, coupled with prices recapturing the March '15 lows ($21) was an opportunity to initiate fresh long positions.",
            "Given the confirmation with price action by the A/D indicator at recent lows, one can go short at current levels keeping a stop above $29.",
            "A positive divergence in early October '15 was an opportunity to initiate fresh long positions."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 137,
        question: "An analysis of volume pattern in shares of Bank of the Ozarks (NASDAQ: OZRK) suggests that: [Chart shows Bank of Ozarks with high volume bar]",
        options: [
            "the primary uptrend in price action is confirmed by volume.",
            "the primary downtrend in price action is confirmed by volume.",
            "the high-volume bar marked by the vertical arrow identifies a panic bottom.",
            "the high-volume bar marked by the vertical arrow suggests the downtrend may have exhausted for the short-term, but may resume and make further lows over the next few months."
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 138,
        question: "Based on an analysis of volume and price action in the following chart, which of the following points are valid considerations to initiate a long position? [Chart shows General Electric with volume analysis at points A, B, C, D]",
        options: [
            "Point A (wait for a recapture of an important violated support - $15.50).",
            "Point B (wait for a breakout above the Aug. highs – recent intermediate-term resistance).",
            "Point C (can initiate a long position on the close of the bar that marked a panic bottom on extremely high volume).",
            "Point D (can initiate a long position in September, on the bar that marked a low-volume retest of the panic bottom registered in August)."
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 139,
        question: "If the market falls to a new low, and volume reaches a new high,:",
        options: [
            "a major bottom has been registered.",
            "a positive volume-price divergence is registered.",
            "a negative volume-price divergence is registered.",
            "the bottom is likely to be retested in the near-future."
        ],
        correct: 0
    },
    {
        id: 140,
        question: "Within an uptrend, if a short-term decline is associated with volume drying up, it indicates that:",
        options: [
            "momentum is easing.",
            "momentum is likely to reverse.",
            "bulls are no longer running and selling is spent.",
            "bears are no longer running and buying is spent."
        ],
        correct: 2
    },

    // ===== Questions 141-150 =====
    {
        id: 141,
        question: "An equity mutual fund:",
        options: [
            "is a relative return vehicle.",
            "is an absolute return vehicle.",
            "is less risky as compared to hedge funds.",
            "involves less cost as compared to the popular S&P 500-based SPDR ETF (Ticker: SPY)."
        ],
        correct: 0
    },
    {
        id: 142,
        question: "Alpha refers to:",
        options: [
            "a measure of risk that can be applied to a stock/portfolio.",
            "a measure of return that can be applied to a stock/portfolio.",
            "a measure of momentum that can be applied to a stock/portfolio.",
            "the excess returns earned by relative return investors, either above/below the market index to which their performance is benchmarked."
        ],
        correct: 3
    },
    {
        id: 143,
        question: "In a triple top pattern, ______ peaks are separated by ________ valleys.",
        options: [
            "two, two",
            "three, two",
            "two, three",
            "three, three"
        ],
        correct: 1
    },
    {
        id: 144,
        question: "Which of the following measures of sentiment can be classified as a price-based metric?",
        options: [
            "CBOE VIX index",
            "New High-New Low index",
            "Consumer Confidence Index",
            "Purchasing Manager's Index"
        ],
        correct: 1
    },
    {
        id: 145,
        question: "The McClellan Oscillator is calculated by:",
        options: [
            "taking the sum of two exponential moving averages of advances plus declines.",
            "taking the sum of two exponential moving averages of advances minus declines.",
            "taking the difference between two exponential moving averages of advances plus declines.",
            "taking the difference between two exponential moving averages of advances minus declines."
        ],
        correct: 3
    },
    {
        id: 146,
        question: "A trader observes a chart of JP Corp, with price action in a tight range and ADX beneath both Directional lines since the last three weeks. Over the last three days, the ADX rises from 7 to 13 from its lowest point. A key takeaway from this observation is that:",
        options: [
            "the market remains in a lull, and more sideways consolidation is possible.",
            "it is safe to ignore this rise in ADX as price action remains in a tight range.",
            "the market is waking up from a lull, and is 'ringing a bell' on an emerging trend.",
            "the market is waking up from a lull, and is likely to continue the prior trend (up or down)."
        ],
        correct: 2
    },
    {
        id: 147,
        question: "Tick volume measures:",
        options: [
            "the number of contracts traded at each price tick.",
            "the number of contracts traded at each time interval.",
            "the change in open interest during a particular time interval.",
            "the number of recorded price changes during a particular time interval."
        ],
        correct: 3
    },
    {
        id: 148,
        question: "The method of 'First Differences' is simply a way of:",
        options: [
            "indexing price data.",
            "removing the trend from prices.",
            "isolating seasonal tendencies in prices.",
            "normalizing a data series for comparison."
        ],
        correct: 3
    },
    {
        id: 149,
        question: "Interpret the relationship between the S&P 500 and the Nikkei 225 indexes based on the chart shown below, if the Pearson's coefficient of correlation is -0.445: [Scatterplot showing S&P 500 vs Nikkei relationship]",
        options: [
            "Linear relationship, as the Best Fit line is curvilinear",
            "Linear relationship, as points fall generally along a straight line",
            "Non-linear relationship, as points fall generally along a straight line",
            "Non-linear relationship, as points deviate significantly from the Best Fit line"
        ],
        correct: 1,
        hasImage: true
    },
    {
        id: 150,
        question: "One of the key problems associated with approximating the S&P 500 returns with the normal distribution model is that:",
        options: [
            "the actual distribution does not have fatter tails.",
            "the vast majority of the returns tend to be located near the center of the distribution.",
            "the vast majority of the returns tend to be located near the bottom left of the distribution.",
            "the vast majority of the returns tend to be located near the bottom right of the distribution."
        ],
        correct: 1
    }
];
