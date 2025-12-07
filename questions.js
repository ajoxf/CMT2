// CMT Level II Sample Exam - Questions Database
// Total: 150 Questions
// Note: Questions with charts/images are marked with hasImage: true

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
        correct: 3
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
        correct: 0
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
        question: "Which of the following patterns resonate with price action highlighted within the black circle? [Note: Refer to chart in original PDF]",
        options: [
            "Pullback",
            "Bull trap",
            "Bear trap",
            "Throwback"
        ],
        correct: 3,
        hasImage: true
    },
    {
        id: 10,
        question: "For a long trade initiated at point Z, which of the following represent an ideal stop-loss point? [Note: Refer to chart in original PDF]",
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
        question: "According to Bulkowski, what is the minimum measured price objective for the gap observed at point B? [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below: [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below: [Note: Refer to chart in original PDF]",
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
        question: "Based on the chart shown below, identify the best course of action: [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below: [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below at point A: [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below: [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below: [Note: Refer to chart in original PDF]",
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
        question: "Identify the chart pattern highlighted below: [Note: Refer to chart in original PDF]",
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
        correct: 0
    },

    // Add remaining 130 questions here (21-150)
    // Use the PDF pages 3-42 for question text
    // Use pages 51-67 for correct answers
    // Follow the same structure as above

    // Example template for next question:
    /*
    {
        id: 21,
        question: "YOUR_QUESTION_TEXT_HERE",
        options: [
            "OPTION_A",
            "OPTION_B",
            "OPTION_C",
            "OPTION_D"
        ],
        correct: CORRECT_INDEX, // 0 for a, 1 for b, 2 for c, 3 for d
        hasImage: true // only if question has a chart/image
    },
    */
];

// For development/testing: If you want to test with fewer questions,
// you can temporarily modify this to return a subset
// const questionsToUse = questions.slice(0, 20); // Use only first 20 questions for testing
