const questions = [
  {
    id: 1,
    question: "According to J.M. Hurst's Principle of Cyclicality, what is the most effective approach to cycle analysis across different market segments?",
    options: [
      "Analyze all securities using the same cycle periods for consistency",
      "Use a top-down approach starting with broad indices, then sectors, then individual stocks",
      "Focus exclusively on individual stocks as they provide the most accurate cycle information",
      "Apply only the longest cycles to all market analysis regardless of security type"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "In the Principle of Harmonicity, what are the most common harmonic relationships to a dominant cycle?",
    options: [
      "Multiples of 5 and 7",
      "Multiples of 2 and 3",
      "Multiples of 4 and 6",
      "Only exact multiples of 10"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "What is a 'mid-cycle dip' and why is it significant in cycle analysis?",
    options: [
      "A low that occurs at the beginning of a cycle, signaling the start of a new trend",
      "A low in the composite wave that occurs at the peak of the dominant cycle, created by the summation of the dominant cycle and its 2nd harmonic",
      "A temporary price decline caused by external market shocks unrelated to cycle theory",
      "A low that appears only in bear markets at the 1/4 point of the cycle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "According to cycle theory, where does a dominant cycle typically develop its price high?",
    options: [
      "Exactly at the mid-point (1/2) of the cycle",
      "At the very beginning of the cycle",
      "Between the 1/2 and 3/4 points of the cycle",
      "Always at the end of the cycle before the next low"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "What happens to the mid-cycle dip when a dominant cycle's 3rd harmonic is present instead of the 2nd harmonic?",
    options: [
      "The mid-cycle dip becomes more pronounced and deeper",
      "The mid-cycle dip disappears and the 3rd harmonic amplifies the dominant cycle's high",
      "The mid-cycle dip occurs twice within the dominant cycle",
      "The mid-cycle dip shifts to the 1/4 point of the cycle"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 6,
    question: "What is an 'inversion' in cycle theory?",
    options: [
      "When a cycle completes in exactly half the expected time period",
      "When price develops a swing high at an expected cycle low",
      "When the amplitude of a cycle doubles unexpectedly",
      "When a dominant cycle splits into two equal sub-cycles"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "What are the two high-probability explanations for an inversion?",
    options: [
      "Market manipulation and algorithmic trading interference",
      "Decreased 2nd harmonic amplitude with increased larger harmonic amplitude, OR the presence of the dominant cycle's 3rd harmonic",
      "Fundamental news events and central bank interventions",
      "Seasonal factors and quarterly earnings patterns"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 8,
    question: "According to the Principle of Synchronicity, why do market bottoms tend to form sharp V-shaped patterns while tops take longer to develop?",
    options: [
      "Because investor fear is stronger than greed",
      "Because even harmonics bottom in tandem with larger cycles, creating synchronized downward pressure, while cycle highs never peak simultaneously",
      "Because trading volume is always higher at bottoms than at tops",
      "Because central banks intervene more aggressively at market bottoms"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 9,
    question: "How many cycle lows versus cycle highs are typically observed when a dominant cycle interacts with its 2nd and 4th harmonics?",
    options: [
      "Equal numbers of lows and highs",
      "More cycle highs than cycle lows, such as 5 lows and 7 highs",
      "More cycle lows than cycle highs, such as 7 lows and 5 highs",
      "Always exactly 3 lows and 3 highs"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 10,
    question: "The Principle of Proportionality states that:",
    options: [
      "All cycles have equal amplitudes regardless of their periods",
      "A cycle's period is proportionally related to its amplitude; longer cycles create trends for smaller cycles",
      "Cycle amplitudes are inversely proportional to their periods",
      "Only cycles with periods over one year show proportional relationships"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "In Hurst's Nominal Model, what is the relationship between the 18-month cycle and the 9-month cycle?",
    options: [
      "They are unrelated cycles that occur independently",
      "The 9-month cycle is the 2nd harmonic (multiple of 2) of the 18-month cycle",
      "The 9-month cycle is the 3rd harmonic (multiple of 3) of the 18-month cycle",
      "The 18-month cycle is always twice the amplitude of the 9-month cycle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "What is a key difference between Hurst's and Garrett's nominal models?",
    options: [
      "Hurst used trading days while Garrett used calendar days",
      "Hurst used calendar days and multiples of 2 and 3, while Garrett used trading days and only multiples of 3",
      "Garrett's model only applies to commodity markets",
      "Hurst's model includes cycles shorter than one week while Garrett's does not"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 13,
    question: "According to the document, what combined effect do the 26-week and 13-week cycle components often create?",
    options: [
      "A 39-week nominal duration",
      "An 18-week nominal duration",
      "A 20-week nominal duration",
      "A 6-month nominal duration"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "What is 'left translation' in cycle theory?",
    options: [
      "When a cycle shifts to an earlier time zone due to global market influences",
      "When price bottoms early relative to an expected cycle low",
      "When a cycle peak occurs on the left side of a chart",
      "When the amplitude of a cycle decreases over time"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "In which market condition is a cycle low more likely to be left translated?",
    options: [
      "During a bear market",
      "During a sideways or ranging market",
      "During a bull market",
      "During high volatility periods regardless of trend"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What does 'right translation' typically indicate about cycle behavior?",
    options: [
      "Price bottoms late relative to expected cycle low; more common in bear markets",
      "Price bottoms early; more common in bull markets",
      "The cycle amplitude is increasing",
      "The cycle is about to invert"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 17,
    question: "According to the Principle of Summation, how are cycles weighted in a theoretical cycle model?",
    options: [
      "Longer cycles are weighted more heavily than shorter cycles",
      "All cycles are equally weighted",
      "Cycles are weighted based on their recent accuracy",
      "Only the dominant cycle is weighted; harmonics are ignored"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "When analyzing a potential inversion, what should an analyst examine to determine if the 3rd harmonic scenario is likely?",
    options: [
      "The trading volume at the inversion point",
      "Whether price has been respecting its 3rd harmonic cycle lows in the last few iterations of the dominant cycle",
      "The overall market trend over the past year",
      "The correlation with other market indices"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 19,
    question: "From a cycle perspective, what is considered the ideal spot to go short?",
    options: [
      "At the cycle low when price is cheapest",
      "At the mid-cycle dip",
      "Between the 1/2 and 3/4 points of the cycle where the high typically forms",
      "At the very beginning of a new cycle"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "Why does the Principle of Variation emphasize that 'cycles within financial markets are messier than theoretical perfection'?",
    options: [
      "Because cycle theory is fundamentally flawed",
      "Because dominant cycles fade over time, harmonics shift, and unexpected shocks can cause disproportionate amplitudes",
      "Because cycles only work in bull markets",
      "Because most traders don't understand cycle theory properly"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "If a 100-day dominant cycle has a 2nd harmonic, what is the period of that 2nd harmonic?",
    options: [
      "200 days",
      "75 days",
      "50 days",
      "33 days"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 22,
    question: "If a 100-day dominant cycle has a 3rd harmonic, what is the approximate period of that 3rd harmonic?",
    options: [
      "50 days",
      "33 days",
      "75 days",
      "25 days"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 23,
    question: "What practical advantage does grouping securities into like-period cycles provide?",
    options: [
      "It eliminates the need for fundamental analysis",
      "It improves timing of entries/exits and clarifies which parts of a market are trading together",
      "It guarantees profitable trades",
      "It removes all market risk"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "When studying Figure 11.1.4 showing cycle peaks versus troughs, what phenomenon creates a 'rolling top'?",
    options: [
      "Multiple cycles peaking simultaneously",
      "Never more than one cycle peaking at a time, creating sequential highs",
      "The dominant cycle inverting",
      "Left translation of all harmonics"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 25,
    question: "What should an analyst's approach be when choosing between Hurst's and Garrett's nominal models?",
    options: [
      "Always use Hurst's model as it's more widely accepted",
      "Always use Garrett's model as it uses trading days",
      "Keep an open mind and let the data, visual analysis, and cycle tools indicate which cycles are actually present",
      "Use both models simultaneously and average the results"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 26,
    question: "In practical application, what does left translation in a bull market suggest about the cycle's behavior?",
    options: [
      "The cycle bottoms early and spends more time rising",
      "The cycle bottoms late and spends less time rising",
      "The cycle has inverted and should be ignored",
      "The amplitude will be smaller than normal"
    ],
    correct: 0,
    hasImage: false
  },
  {
    id: 27,
    question: "According to the Principle of Proportionality, if the 2nd harmonic has an amplitude of 5 points, what is the expected amplitude of the dominant cycle?",
    options: [
      "5 points (same amplitude)",
      "2.5 points (half the amplitude)",
      "10 points (double the amplitude)",
      "15 points (triple the amplitude)"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What type of market event can cause a cycle's amplitude to become disproportionate to its period?",
    options: [
      "Regular daily trading activity",
      "Fundamental news or material unexpected shocks that overpower larger cycles",
      "Normal weekend market closures",
      "Routine earnings announcements"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "Why is the visual signature of the mid-cycle dip described as 'one of the keys to identifying a dominant cycle by eye'?",
    options: [
      "It appears in every price chart regardless of cycle presence",
      "It's created by the summation of the dominant cycle and its 2nd harmonic, providing a distinctive pattern that confirms cycle identification",
      "It only appears in bull markets, making it easy to spot",
      "It's the largest price movement in any cycle"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "If you observe a cycle that appears to be right translated in a bear market, what is the most likely underlying cause?",
    options: [
      "The cycle is about to reverse into a bull market",
      "A larger harmonic is bottoming late, consistent with typical bear market cycle behavior",
      "The cycle has inverted and will form a higher high",
      "The 3rd harmonic is dominating the 2nd harmonic"
    ],
    correct: 1,
    hasImage: false
  }
];
