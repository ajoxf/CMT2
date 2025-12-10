const questions = [
  {
    id: 1,
    question: "According to the guideline of alternation in Elliott Wave theory, if wave 2 of an impulse is a sharp retracement, what should you expect for wave 4?",
    options: [
      "Another sharp retracement with similar characteristics",
      "A sideways correction such as a flat, triangle, or double three",
      "An extended wave that exceeds the length of wave 3",
      "A failure pattern that doesn't reach the previous high"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "What is the key characteristic that distinguishes sharp corrections from sideways corrections in Elliott Wave analysis?",
    options: [
      "Sharp corrections always last longer in duration than sideways corrections",
      "Sharp corrections never include a new price extreme beyond the orthodox end of the preceding impulse wave",
      "Sharp corrections always retrace exactly 50% of the previous impulse",
      "Sharp corrections can only occur in bear markets"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 3,
    question: "Which correction patterns are typically classified as sideways corrections according to the guideline of alternation?",
    options: [
      "Single zigzags, double zigzags, and triple zigzags",
      "Flats, triangles, and double threes",
      "Only horizontal consolidation patterns",
      "Sharp retracements and abc corrections"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 4,
    question: "Where do corrections, especially fourth waves, tend to register their maximum retracement according to Elliott Wave guidelines?",
    options: [
      "At the 61.8% Fibonacci retracement level of the previous impulse",
      "At the starting point of wave 1",
      "Within the span of travel of the previous fourth wave of one lesser degree, most commonly near its terminus",
      "At the midpoint between waves 1 and 3"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 5,
    question: "In Elliott's channeling technique for impulse waves, which wave endpoints should be connected to draw the base line of the channel?",
    options: [
      "The ends of waves 1 and 3",
      "The ends of waves 2 and 4",
      "The ends of waves 1 and 5",
      "The beginning of wave 1 and end of wave 5"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "After connecting the endpoints of waves 2 and 4 in Elliott's channeling technique, where should the parallel line be drawn?",
    options: [
      "Starting at the beginning of wave 1",
      "Starting at the end of wave 2",
      "Starting at the end of wave 3",
      "Starting at the projected end of wave 5"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 7,
    question: "What does Elliott Wave theory suggest when a fifth wave approaches its upper trendline on declining volume?",
    options: [
      "The wave will likely penetrate the upper line significantly",
      "The wave will accelerate and extend beyond normal expectations",
      "The end of the wave will meet or fall short of the trendline",
      "A new impulse wave sequence is beginning"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "What is a 'throwover' in Elliott Wave analysis?",
    options: [
      "When wave 4 overlaps with wave 1, violating Elliott's rules",
      "When a fifth wave penetrates the upper trendline on heavy volume",
      "When a correction exceeds 100% of the previous impulse",
      "When wave 3 fails to exceed the high of wave 1"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 9,
    question: "According to the material, what is the recommended approach for determining whether to use arithmetic or logarithmic scale for Elliott Wave channel analysis?",
    options: [
      "Always use arithmetic scale for stocks and logarithmic for commodities",
      "Use only logarithmic scale as it shows percentage changes more accurately",
      "If price development doesn't fit neatly within parallel lines on one scale, switch to the other; analysts should use both",
      "Use arithmetic scale exclusively as Elliott originally intended"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 10,
    question: "In the idealized Elliott Wave progression, what psychological state characterizes the beginning of wave 1?",
    options: [
      "Maximum optimism with strong bullish consensus",
      "Recognition of survival; rebound from undervalued levels",
      "Aggressive euphoria and denial of any problems",
      "Arrogant complacency with improving fundamentals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "What typically characterizes the psychology of wave 2 in Elliott Wave theory?",
    options: [
      "Overwhelming optimism that the trend will continue indefinitely",
      "Test of lows where fundamental conditions often seem as bad as the previous bottom; underlying trend considered down",
      "Peak euphoria with maximum market participation",
      "Complete capitulation with no buyers remaining"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "Which wave in the Elliott impulse sequence is described as the 'POWERFUL WAVE' with increasing strength and breadth, and is never the shortest wave?",
    options: [
      "Wave 1",
      "Wave 2",
      "Wave 3",
      "Wave 5"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 13,
    question: "What is the typical psychological characteristic of wave 5 according to the idealized Elliott Wave progression?",
    options: [
      "Depression and panic selling dominate",
      "Market performance and fundamentals improve, but not to levels of wave 3; psychology becomes overly optimistic",
      "Maximum fear with capitulation selling",
      "Rational optimism with fundamentals matching technical strength"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "Do sideways corrections typically include a new price extreme that lies beyond the orthodox end of the preceding impulse wave?",
    options: [
      "No, sideways corrections never include new price extremes",
      "Yes, they usually include a new price extreme",
      "Only in bear markets do they include new price extremes",
      "Only if the correction is a triangle pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 15,
    question: "What type of correction pattern are sharp corrections almost always composed of?",
    options: [
      "Flats and expanded flats",
      "Triangles and wedges",
      "Zigzags (single or double)",
      "Double threes and complex combinations"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "According to Elliott Wave guidelines, if you observe wave 2 ending at the level of the fourth wave of wave 1, where would you expect wave 4 to end?",
    options: [
      "At the beginning of wave 1",
      "Near the level of the fourth wave of wave 3",
      "At exactly 50% retracement of wave 3",
      "At the same level as wave 2"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "In the context of parallel channels and diagonal triangles, what do throw-overs in declining markets share with throw-overs in rising markets?",
    options: [
      "They only occur on low volume",
      "They occur with the same characteristics, including heavy volume",
      "They are impossible in declining markets",
      "They always signal trend reversals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "What psychological state characterizes the market at the TOP according to the idealized corrective wave pattern?",
    options: [
      "Depression, war, and questions of survival",
      "Realistic assessment of fair value",
      "Prosperity and peace appear; arrogant complacency reigns; good news accompanies",
      "Moderate optimism with cautious buying"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "How is the initial advance after a market top typically characterized in the idealized corrective wave psychology?",
    options: [
      "Strong and broad-based with excellent fundamentals",
      "Narrow, emotional advance that is technically weak and selective, resulting in non-confirmation; aggressive euphoria and denial",
      "Weak advance on high volume signaling distribution",
      "Steady advance with improving breadth indicators"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 20,
    question: "During the 'TECHNICAL BREAKDOWN' phase of a corrective wave, how do many market participants typically view the situation?",
    options: [
      "As the beginning of a prolonged bear market",
      "As a buying opportunity",
      "As a signal to exit all positions immediately",
      "As confirmation that fundamentals are deteriorating"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 21,
    question: "What characterizes the 'WORST OF BEAR MARKET' phase in Elliott Wave psychology?",
    options: [
      "Initial panic with quick recovery expectations",
      "Strength and breadth declining relentlessly; fundamentals ultimately confirm the technical breakdown",
      "Sideways movement with building optimism",
      "Sharp rallies on heavy volume"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "If you are analyzing a market and observe that wave 4 is developing as a triangle pattern, what type of correction was wave 2 most likely to have been, according to the guideline of alternation?",
    options: [
      "Another triangle to maintain consistency",
      "A flat correction for symmetry",
      "A sharp zigzag retracement",
      "A double three combination"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 23,
    question: "A trader observes wave 5 approaching the upper channel line with volume significantly higher than during wave 3. Based on Elliott Wave guidelines, what should the trader anticipate?",
    options: [
      "Wave 5 will fall short of the channel line",
      "A possible throwover penetration of the upper channel line",
      "Immediate reversal without touching the channel",
      "Extension of wave 5 into a complex pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 24,
    question: "You're analyzing a corrective fourth wave and want to project where it might find support. According to Elliott Wave depth guidelines, where should you look first?",
    options: [
      "The 38.2% Fibonacci retracement of wave 3",
      "The endpoint of wave 2",
      "The span of travel of the fourth wave within wave 3, particularly near its terminus",
      "The starting point of the entire impulse sequence"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 25,
    question: "In practical application, why does the material recommend that analysts should always use both arithmetic and logarithmic scales when conducting Elliott Wave analysis?",
    options: [
      "To comply with regulatory requirements for technical analysis",
      "Because there is no definite tenet on which scale to use; if price doesn't fit neatly on one scale, the other should be used to observe the channel in correct perspective",
      "Logarithmic scale is only for long-term analysis while arithmetic is for short-term",
      "To double-check Fibonacci ratios which differ between scales"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "What is the primary insight that Elliott Wave Principle provides regarding the question 'How far down can a bear market be expected to go?'",
    options: [
      "Bear markets always retrace 61.8% of the previous bull market",
      "There is no reliable way to predict bear market depth",
      "Corrections tend to register maximum retracement within the span of the previous fourth wave of one lesser degree",
      "Bear markets decline until price-to-earnings ratios reach historical lows"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "When wave 3 completes and you need to draw a proper Elliott channel, you already have a line connecting waves 2 and 4. What specific action should you take next to complete the channel?",
    options: [
      "Draw a line from wave 1 to wave 3 and extend it",
      "Draw a parallel line to the 2-4 line, starting at the end of wave 3",
      "Calculate the 1.618 extension of wave 1 and draw a horizontal line",
      "Draw a line from the beginning of wave 1 parallel to the 2-4 connection"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 28,
    question: "According to Elliott Wave psychology, what typically characterizes wave 3 in terms of market psychology and fundamentals?",
    options: [
      "Deteriorating fundamentals with persistent pessimism",
      "Strength and breadth improving; fundamentals starting to look better; trend considered up; wave often subdivides",
      "Peak optimism with fundamentals already fully discounted",
      "Confusion and sideways action with mixed signals"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 29,
    question: "You observe a completed impulse wave where wave 2 was a flat correction that included a new price extreme. For the upcoming wave 4 correction, what should you expect based on alternation guidelines?",
    options: [
      "Another flat correction to maintain the pattern",
      "A sharp zigzag correction that does not include a new price extreme",
      "An extended correction exceeding 78.6% retracement",
      "A triangle that necessarily includes a new price extreme"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 30,
    question: "In the context of mass psychology reflected by Elliott Waves, what distinguishes the emotional state at the BOTTOM (start of wave 1) from the state at the TOP (end of wave 5)?",
    options: [
      "Both show maximum uncertainty about future direction",
      "BOTTOM: questions of existence, survival, depression; TOP: prosperity, peace, arrogant complacency",
      "BOTTOM: greed and euphoria; TOP: fear and capitulation",
      "There is no psychological difference, only price differences"
    ],
    correct: 1,
    hasImage: false
  }
];
