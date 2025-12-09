const questions = [
  {
    id: 31,
    question: "In a Relative Rotation Graph (RRG), what do the axes represent?",
    options: [
      "X-axis shows price, Y-axis shows volume",
      "X-axis shows JdK RS-Ratio, Y-axis shows JdK RS-Momentum",
      "X-axis shows time, Y-axis shows relative strength",
      "X-axis shows volatility, Y-axis shows momentum"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 32,
    question: "At what value do the axes intersect on a Relative Rotation Graph, and what does this represent?",
    options: [
      "At 0, representing no movement",
      "At 50, representing median performance",
      "At 100, representing the benchmark anchor point where securities move in perfect harmony with the benchmark",
      "At 200, representing maximum outperformance"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 33,
    question: "Which quadrant on an RRG contains securities that are in a relative uptrend AND the trend is still becoming stronger?",
    options: [
      "IMPROVING (top left)",
      "LEADING (top right)",
      "WEAKENING (bottom right)",
      "LAGGING (bottom left)"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 34,
    question: "A security has a JdK RS-Ratio of 105 and JdK RS-Momentum of 95. Which quadrant is it in and what does this indicate?",
    options: [
      "LEADING - it is outperforming and gaining strength",
      "WEAKENING - it is still outperforming but losing momentum",
      "IMPROVING - it is underperforming but gaining momentum",
      "LAGGING - it is underperforming and losing momentum"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 35,
    question: "According to the curriculum, in what direction do securities typically rotate around the benchmark on an RRG?",
    options: [
      "Counter-clockwise",
      "Randomly without pattern",
      "Clockwise",
      "Vertically up and down"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 36,
    question: "What historical trend concepts did the RRG visualization finally confirm when securities were plotted on a scatterplot?",
    options: [
      "That all securities move in perfect correlation",
      "That there is a rotation happening as securities cycle from outperformance to underperformance and back",
      "That momentum always precedes price by exactly 5 periods",
      "That all sectors perform identically over time"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 37,
    question: "In Figure 10.1.7, what color is typically used to represent the LAGGING quadrant?",
    options: [
      "Green",
      "Yellow",
      "Red",
      "Blue"
    ],
    correct: 2,
    hasImage: true
  },
  {
    id: 38,
    question: "What does the 'tail' on an RRG represent?",
    options: [
      "Future projected positions of the security",
      "The last 'n' observations showing the historical path and pace of rotation",
      "The volatility range of the security",
      "The correlation coefficient with the benchmark"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 39,
    question: "In Figure 10.1.9, what time period does each dot on the tail represent for a weekly RRG with a five-period tail?",
    options: [
      "Each dot represents one day",
      "Each dot represents one week",
      "Each dot represents one month",
      "Each dot represents one quarter"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 40,
    question: "According to the curriculum, what is the recommended approach when studying the rotation of an individual sector over a longer period?",
    options: [
      "Show all sectors with long tails for maximum information",
      "Show just one or two securities with a long tail",
      "Use only short tails regardless of the number of securities",
      "Never use tails longer than 5 periods"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 41,
    question: "What is the ideal theoretical rotation sequence for a security on an RRG?",
    options: [
      "Move counter-clockwise through all four quadrants sequentially",
      "Stay in one quadrant indefinitely",
      "Move clockwise through all four quadrants sequentially",
      "Jump randomly between non-adjacent quadrants"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 42,
    question: "What does a 'sub-rotation' on the right-hand side of an RRG (from LEADING to WEAKENING and back to LEADING) indicate?",
    options: [
      "The security is about to enter a bear market",
      "There is a calculation error in the RRG",
      "A strong relative trend is going through a corrective period within the longer-term trend",
      "The security should be immediately sold"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 43,
    question: "In Figure 10.1.11, what do labels 'A' and 'B' represent?",
    options: [
      "Buy and sell signals",
      "Sub-rotations where the security doesn't travel through all four quadrants",
      "Price targets",
      "Volatility spikes"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 44,
    question: "According to Figure 10.1.12, what do the colored bars on the price chart represent?",
    options: [
      "Volume levels",
      "Which quadrant the security is moving in on the RRG",
      "Support and resistance levels",
      "Moving average signals"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 45,
    question: "What color represents the IMPROVING quadrant in Figure 10.1.12?",
    options: [
      "Green",
      "Yellow",
      "Red",
      "Blue"
    ],
    correct: 3,
    hasImage: true
  },
  {
    id: 46,
    question: "When a security rotates from LEADING into WEAKENING and then back into LEADING without entering LAGGING, what can you conclude?",
    options: [
      "The relative trend has completely reversed",
      "The corrective period was not significant enough to classify the security as underperforming",
      "The security is about to crash",
      "The RRG is malfunctioning"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 47,
    question: "According to Verdouw's 2014 research paper analyzing 20,000 rotations, what is the probability that a security in the LEADING quadrant will move to the WEAKENING quadrant next?",
    options: [
      "38%",
      "62%",
      "92%",
      "68%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 48,
    question: "What is the probability that a security in the LAGGING quadrant will move to the IMPROVING quadrant next, according to Figure 10.1.13?",
    options: [
      "68%",
      "90%",
      "32%",
      "5%"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 49,
    question: "According to the rotational probabilities research, which type of rotation is rarely observed?",
    options: [
      "From LEADING to WEAKENING",
      "From LAGGING to IMPROVING",
      "Rotations across the vertical axis (e.g., from LEADING back to IMPROVING or LAGGING back to WEAKENING)",
      "From WEAKENING to LAGGING"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 50,
    question: "What is the probability that a security in the WEAKENING quadrant will move to the LAGGING quadrant next?",
    options: [
      "38%",
      "92%",
      "62%",
      "0%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 51,
    question: "When a security is in the IMPROVING quadrant, what is the probability it will move to the LEADING quadrant next?",
    options: [
      "32%",
      "90%",
      "68%",
      "0%"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 52,
    question: "According to the research, when is there at least a 90% probability that a security will rotate to the next quadrant?",
    options: [
      "When it is in the WEAKENING or IMPROVING quadrants",
      "When it is in the LEADING or LAGGING quadrants",
      "Only when it is in the LEADING quadrant",
      "This probability never reaches 90%"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 53,
    question: "What was the title of Mathew Verdouw's 2014 white paper on RRG rotational probabilities?",
    options: [
      "Relative Strength Analysis in Modern Markets",
      "The Clockwise Rotation Theory",
      "Buying Out-Performers is Too Late",
      "Advanced Technical Analysis Methods"
    ],
    correct: 2,
    hasImage: false
  },
  {
    id: 54,
    question: "In Figure 10.1.10, the Energy sector RRG shows a 52-week tail. What does the darkest color on the tail represent?",
    options: [
      "The oldest historical data",
      "The most recent rotation",
      "The weakest performance period",
      "The highest volatility period"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 55,
    question: "What business intelligence concept from the 2000s was crucial in developing the RRG visualization?",
    options: [
      "Machine learning algorithms",
      "Data visualization and scatterplot experimentation",
      "Blockchain technology",
      "Cloud computing"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 56,
    question: "If you want to view the relative interaction and rotation of all sectors in a universe, what tail configuration is recommended?",
    options: [
      "One or two securities with long tails",
      "All sectors visible with shorter tails",
      "No tails at all",
      "All sectors with maximum length tails"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 57,
    question: "What does RRG show about securities, according to the curriculum?",
    options: [
      "The absolute performance only",
      "The rotation of relative 'trends,' not necessarily 'performance'",
      "Only price movements without considering the benchmark",
      "Future price predictions with certainty"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 58,
    question: "A security has JdK RS-Ratio of 95 and JdK RS-Momentum of 105. Based on the quadrant it's in, what is the most likely next move?",
    options: [
      "It will likely move to the LAGGING quadrant",
      "It will likely move to the LEADING quadrant with 68% probability",
      "It will stay in the same quadrant indefinitely",
      "It will likely move to the WEAKENING quadrant"
    ],
    correct: 1,
    hasImage: false
  },
  {
    id: 59,
    question: "In the RRG shown in Figure 10.1.9, which shows 11 GICS level 1 sectors, what does GICS level 1 represent?",
    options: [
      "Individual stocks",
      "Economic sectors",
      "Currency pairs",
      "Country indices"
    ],
    correct: 1,
    hasImage: true
  },
  {
    id: 60,
    question: "According to the rotational probability data, what is the probability of a security moving from IMPROVING back to LAGGING (crossing the vertical axis backwards)?",
    options: [
      "68%",
      "32%",
      "90%",
      "0%"
    ],
    correct: 1,
    hasImage: false
  }
];
