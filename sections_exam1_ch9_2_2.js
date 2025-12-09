const questions = [
  {
    id: 1,
    question: "According to Gerald Appel, what are the two most important determinations when analyzing the MACD indicator?",
    options: [
      "The distance between the MACD lines and the number of crossovers",
      "Whether the MACD line is above or below zero, and whether it is rising or falling",
      "The histogram height and the signal line slope",
      "The divergence pattern and the overbought/oversold levels"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to Appel, when is the market considered MOST favorable for trading?",
    options: [
      "When the MACD is below zero and rising",
      "When the MACD crosses its signal line",
      "When the MACD is above zero and rising",
      "When the MACD reaches historical extremes"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "What is Appel's basic buy signal using MACD?",
    options: [
      "When the MACD line crosses above the signal line from below, ideally when the MACD is below zero",
      "When the MACD histogram turns positive",
      "When the MACD line crosses above zero",
      "When the MACD reaches oversold levels"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 4,
    question: "According to Appel, when can basic MACD signals be acted on with increased confidence?",
    options: [
      "When volume confirms the signal",
      "When they occur at historical extremes",
      "When they follow a positive or negative divergence",
      "When they occur during high volatility periods"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "What is Appel's recommended method for avoiding whipsaws and aligning with the trend?",
    options: [
      "Use longer period settings for the MACD",
      "Only act on signals that agree with the slope of price's moving average",
      "Wait for multiple confirmations before acting",
      "Only trade during high volume periods"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "According to Appel's risk management approach, when should a long position be closed using a stop signal?",
    options: [
      "When the MACD crosses below its signal line",
      "When the MACD crosses below zero",
      "When the MACD makes a new low",
      "When price breaks its moving average"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "In Appel's Two-MACD System, what is the logic behind using different speeds for buy and sell signals?",
    options: [
      "Faster settings generate more signals for better opportunities",
      "Markets tend to decline more rapidly than they rise, so use a faster MACD for buy signals and slower for sell signals",
      "Slower settings are more reliable in all market conditions",
      "Different speeds help confirm divergences more effectively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "What are Appel's specific settings for the Two-MACD System?",
    options: [
      "12, 26, 9 for buy signals and 12, 26, 9 for sell signals",
      "13, 26, 9 for buy signals and 19, 39, 9 for sell signals",
      "19, 39, 9 for buy signals and 13, 26, 9 for sell signals",
      "10, 20, 5 for buy signals and 20, 40, 10 for sell signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "In the Two-MACD System, when should you hold a long position (sell trigger)?",
    options: [
      "Until the faster MACD crosses below zero",
      "Until price breaks its moving average",
      "Until the slower MACD rises above zero and then falls below its signal line",
      "Until a negative divergence appears"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "According to Appel, during strong uptrends with no negative divergences, what should traders consider?",
    options: [
      "Exit at the first sell signal",
      "It is usually possible to ignore the first sell signal following very successful buy signals",
      "Double position size on pullbacks",
      "Switch to shorter timeframes"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "What type of market condition does Appel caution that MACD does NOT work well in?",
    options: [
      "High volatility trending markets",
      "Gradual, low volatility directional trends",
      "Strongly trending markets with clear momentum",
      "Range-bound markets with clear boundaries"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "According to Appel, for buy signals to occur above zero in low volatility trends, what conditions must be met?",
    options: [
      "Volume must increase significantly",
      "Price must break above resistance",
      "Price must present a strong case, a clear positive divergence must occur, or a significant trendline must be violated",
      "The histogram must show positive acceleration"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "What does Dr. Alexander Elder compare instead of the traditional MACD-to-price divergence technique?",
    options: [
      "The MACD line to the signal line",
      "The histogram (difference between MACD and its EMA) to price",
      "The MACD zero line crossovers to price",
      "The MACD slope to volume"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "How does Dr. Elder describe the MACD histogram's function?",
    options: [
      "As a trailing stop mechanism",
      "As a volatility filter",
      "As the headlight of a car at night that helps illuminate the road ahead",
      "As a confirmation tool for price breakouts"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "What does it indicate when the histogram rises above zero according to Elder's interpretation?",
    options: [
      "Negative velocity and negative acceleration",
      "The MACD line moves farther away from its average line (positive velocity and positive acceleration)",
      "Price is entering overbought territory",
      "A sell signal is imminent"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 16,
    question: "According to Elder, what is the critical requirement for a valid negative histogram divergence?",
    options: [
      "The histogram must stay above zero throughout",
      "Between the high and the lower-high in the histogram, it must drop below zero",
      "Price must make three consecutive higher highs",
      "Volume must decrease on the second high"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "When should a trader sell short according to Elder's histogram divergence technique?",
    options: [
      "When the histogram crosses below zero",
      "When price makes a lower high",
      "When the histogram stops rising and ticks down after a negative divergence",
      "When the MACD crosses below its signal line"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 18,
    question: "What is significant about Elder's histogram divergences compared to traditional divergences?",
    options: [
      "They occur more frequently and are easier to trade",
      "They only work on weekly timeframes",
      "They occur less frequently than traditional divergences, which makes them more powerful",
      "They eliminate the need for stop losses"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "What are Linda Raschke's modified MACD settings, which she calls the '3/10 oscillator'?",
    options: [
      "3, 10, 16 with simple moving averages instead of exponential",
      "3, 10, 9 with exponential moving averages",
      "10, 3, 16 with weighted moving averages",
      "3, 10, 5 with simple moving averages"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 20,
    question: "What is the purpose of Raschke's faster MACD settings?",
    options: [
      "To eliminate false signals entirely",
      "To promote the visibility of momentum spikes, usually representing trend initiation or exhaustion",
      "To smooth out market noise",
      "To align better with longer-term trends"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What is Raschke's 'first cross signal' buy condition?",
    options: [
      "When the MACD crosses above zero for the first time",
      "When the oscillator's average line crosses above zero from below, and the 3/10 oscillator falls below the zero line",
      "When price makes its first higher high",
      "When the histogram turns positive"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "According to Raschke, what are the three parts required for a valid signal?",
    options: [
      "Price, volume, and momentum alignment",
      "The setup or condition, the trigger, and the follow-through or confirmation",
      "Support, resistance, and trendline breaks",
      "Divergence, crossover, and extreme readings"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What is Raschke's intermediate buy condition in established uptrends?",
    options: [
      "When price breaks to new highs with the MACD above zero",
      "After price has been above its 20-period MA and the 3/10 oscillator's average above zero, price retraces to find support around the 20-period MA while the oscillator retraces below zero",
      "When the oscillator makes a higher low",
      "When volume expands on a pullback"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "According to Wilder, when using RSI, what can identify potential tops and bottoms?",
    options: [
      "When RSI crosses 50",
      "When RSI goes above 70 or below 30, and then crosses those levels back towards 50",
      "When RSI makes three consecutive higher highs",
      "When RSI stays in a range for extended periods"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What constitutes a bearish RSI failure swing according to Wilder?",
    options: [
      "RSI drops below 30 twice in succession",
      "RSI prints a higher-high above 70, drops below 70 and prints a higher-low, rises to print a lower-high below 70, and completes when RSI breaks below its higher-low",
      "RSI crosses below its moving average",
      "RSI diverges from price three times"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "According to Cardwell, what is the main criticism of traditional RSI interpretation?",
    options: [
      "RSI periods should be longer than 14",
      "Looking for divergences and buying 30 and selling 70 could not be more wrong",
      "RSI should only be used on weekly charts",
      "Failure swings are unreliable signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 27,
    question: "How does Cardwell interpret RSI levels above 70 and below 30?",
    options: [
      "As definitive overbought and oversold signals to trade against",
      "As unreliable indicators that should be ignored",
      "As overextended conditions in strongly trending markets, not overbought/oversold",
      "As confirmation of trend exhaustion"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "According to Cardwell and Brown's range rules, what RSI level should be maintained during uptrends?",
    options: [
      "RSI stays above 50",
      "RSI stays above 60",
      "RSI stays above 40",
      "RSI stays above 70"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "What does Cardwell believe about divergences in trending markets?",
    options: [
      "Divergences always signal trend reversals",
      "Bearish divergences are features of uptrends, and bullish divergences are features of downtrends",
      "Divergences only work in range-bound markets",
      "Divergences should be traded immediately without confirmation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "In the DJU example with RSI, what indicated serious weakness at point 28?",
    options: [
      "RSI formed a positive divergence",
      "RSI stayed above 40",
      "Price printed a lower-low with RSI becoming oversold, showing serious weakness",
      "RSI completed a failure swing above 70"
    ],
    correct: 2,
    hasImage: false
  }
];
