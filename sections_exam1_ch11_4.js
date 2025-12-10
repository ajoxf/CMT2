const questions = [
  {
    id: 1,
    question: "How many waves does a motive wave subdivide into?",
    options: [
      "Three waves",
      "Five waves",
      "Seven waves",
      "Nine waves"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 2,
    question: "According to Elliott Wave rules, what is the maximum retracement allowed for wave 2 in relation to wave 1?",
    options: [
      "50% of wave 1",
      "61.8% of wave 1",
      "Less than 100% of wave 1",
      "78.6% of wave 1"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 3,
    question: "Which wave in a motive pattern is often the longest and never the shortest among actionary waves?",
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
    id: 4,
    question: "What are the two types of motive waves identified in Elliott Wave Theory?",
    options: [
      "Zigzag and flat",
      "Impulse and diagonal",
      "Triangle and combination",
      "Extension and truncation"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 5,
    question: "In an impulse wave, what is the critical rule regarding wave 4?",
    options: [
      "Wave 4 must be shorter than wave 2",
      "Wave 4 cannot overlap wave 1's territory",
      "Wave 4 must retrace exactly 50% of wave 3",
      "Wave 4 must be a triangle pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 6,
    question: "What is an extension in Elliott Wave terminology?",
    options: [
      "A wave that fails to reach its target",
      "An elongated impulse with exaggerated subdivisions",
      "A corrective pattern within a motive wave",
      "The overlap between wave 4 and wave 1"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 7,
    question: "In how many of the three motive subwaves does an extension typically occur?",
    options: [
      "All three subwaves",
      "Two subwaves",
      "One and only one subwave",
      "Extensions are optional and may not occur"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 8,
    question: "What is truncation in Elliott Wave analysis?",
    options: [
      "When wave 3 is the shortest wave",
      "When wave 4 overlaps wave 1",
      "When the fifth wave does not move beyond the end of the third wave",
      "When a corrective wave becomes a motive wave"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 9,
    question: "Truncation typically occurs after which type of wave?",
    options: [
      "A weak first wave",
      "A particularly strong third wave",
      "An extended fifth wave",
      "A diagonal pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 10,
    question: "How can truncation be verified?",
    options: [
      "By confirming wave 4 overlaps wave 1",
      "By noting that the presumed fifth wave contains five subwaves",
      "By measuring the percentage retracement",
      "By identifying an extension pattern"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 11,
    question: "What characteristic distinguishes a diagonal from an impulse?",
    options: [
      "Diagonals have five-wave subdivisions",
      "Diagonals have corrective characteristics including three-wave subdivisions and overlap",
      "Diagonals only occur in bear markets",
      "Diagonals are always shorter than impulses"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 12,
    question: "Where does an ending diagonal typically occur?",
    options: [
      "In wave 1 position",
      "In wave 2 position",
      "In wave 3 position",
      "In the fifth wave position"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 13,
    question: "According to Prechter, where can a leading diagonal appear?",
    options: [
      "Only in wave 5 positions",
      "In wave 1 position of impulses and wave A position of zigzags",
      "Only in corrective waves",
      "In wave 3 positions exclusively"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 14,
    question: "What typically follows a leading diagonal in the wave 1 position?",
    options: [
      "An extended third wave",
      "A truncated fifth wave",
      "A deep retracement",
      "Another diagonal pattern"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 15,
    question: "How many main categories do corrective patterns fall into?",
    options: [
      "Two categories",
      "Three categories",
      "Four categories",
      "Five categories"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 16,
    question: "What is the wave subdivision structure of a zigzag?",
    options: [
      "3-3-3",
      "5-3-5",
      "3-3-5",
      "5-5-5"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 17,
    question: "In a single zigzag pattern within a bull market, how is it labeled?",
    options: [
      "1-2-3",
      "A-B-C",
      "W-X-Y",
      "a-b-c-d-e"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 18,
    question: "In a single zigzag, where does the top of wave B typically appear relative to the start of wave A?",
    options: [
      "At the same level as the start of wave A",
      "Noticeably higher than the start of wave A",
      "Noticeably lower than the start of wave A",
      "Exactly at the Fibonacci 61.8% retracement level"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 19,
    question: "What is the pattern that separates two zigzags in a double zigzag?",
    options: [
      "An impulse wave",
      "A triangle pattern",
      "An intervening 'three' labeled (X)",
      "A flat correction"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 20,
    question: "How are the two zigzags in a double zigzag labeled?",
    options: [
      "A and C",
      "1 and 3",
      "(W) and (Y)",
      "a and c"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 21,
    question: "What is the subwave sequence of a flat correction?",
    options: [
      "5-3-5",
      "3-3-5",
      "3-3-3",
      "5-5-5"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 22,
    question: "Compared to zigzags, how much of the preceding impulse wave do flats typically retrace?",
    options: [
      "More than zigzags",
      "The same as zigzags",
      "Less than zigzags",
      "Flats always retrace 100%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 23,
    question: "Within impulse patterns, which wave position frequently exhibits flat corrections?",
    options: [
      "Wave 1",
      "Wave 2",
      "Wave 3",
      "Wave 4"
    ],
    correct: 3,
    hasImage: false
  },
  {
    id: 24,
    question: "In a regular flat correction, where does wave B typically terminate?",
    options: [
      "Well beyond the start of wave A",
      "About at the level of the beginning of wave A",
      "Exactly at the 50% retracement of wave A",
      "Far short of the start of wave A"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 25,
    question: "What distinguishes an expanded flat from a regular flat?",
    options: [
      "Wave B terminates before the start of wave A",
      "Wave B terminates beyond the starting level of wave A, and wave C ends more substantially beyond wave A",
      "Wave C is truncated",
      "All waves are equal in length"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 26,
    question: "In a running flat, what happens to wave C?",
    options: [
      "It extends beyond wave A significantly",
      "It terminates at exactly the same level as wave A",
      "It fails to travel its full distance, falling short of where wave A ended",
      "It becomes a diagonal pattern"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 27,
    question: "How many overlapping waves does a triangle pattern contain?",
    options: [
      "Three waves",
      "Four waves",
      "Five waves",
      "Seven waves"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 28,
    question: "What is the subdivision structure of triangle waves?",
    options: [
      "5-3-5-3-5",
      "3-3-5-3-5",
      "3-3-3-3-3",
      "5-5-5-5-5"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 29,
    question: "How are the waves within a triangle labeled?",
    options: [
      "1-2-3-4-5",
      "A-B-C-D-E",
      "a-b-c-d-e",
      "W-X-Y-X-Z"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 30,
    question: "What are the three main categories of triangles?",
    options: [
      "Ascending, descending, and symmetrical",
      "Contracting, barrier, and expanding",
      "Regular, expanded, and running",
      "Single, double, and triple"
    ],
    correct: 1,
    hasImage: false
  }
];
