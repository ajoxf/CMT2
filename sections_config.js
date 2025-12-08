// Configuration for exam sections with hierarchical structure
const examSections = {
  1: [
    {
      id: 'section_1',
      title: 'I. Theory and History of Technical Analysis',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_2',
      title: 'II. Behavioral Finance',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_3',
      title: 'III. Charts: Organizing Market Data',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_4',
      title: 'IV. Chart Pattern Analysis',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_5',
      title: 'V. Trend Analysis',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_6',
      title: 'VI. Volatility Analysis',
      subsections: [
        {
          id: 'ch6_1',
          title: '6.1 - Extrapolating price from VIX',
          questionCount: 30,
          file: 'sections_exam1_ch6_1.js',
          description: '30 Questions',
          video: 'videos/ch6_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch6_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch6_3',
          title: '6.3 - Term Structure of VIX Futures and Early Warning Signals',
          questionCount: 30,
          file: 'sections_exam1_ch6_3.js',
          description: '30 Questions',
          video: 'videos/ch6_3.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch6_3.pdf'       // Optional: path to PDF file
        }
        // Add more subsections here
      ]
    },
    {
      id: 'section_7',
      title: 'VII. Sentiment',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_8',
      title: 'VIII. Statistics for Technicians',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_9',
      title: 'IX. Technical Indicators',
      subsections: [
        {
          id: 'ch9_4',
          title: '9.4 - Bollinger Bands',
          questionCount: 30,
          file: 'sections_exam1_ch9_4.js',
          description: '30 Questions',
          video: 'videos/ch9_4.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch9_4.pdf'       // Optional: path to PDF file
        }
        // Add more subsections here
      ]
    },
    {
      id: 'section_10',
      title: 'X. Comparative Market Analysis',
      subsections: [
        // Add subsections here
      ]
    },
    {
      id: 'section_11',
      title: 'XI. Cycle Analysis',
      subsections: [
        // Add subsections here
      ]
    }
  ],
  2: [
    // Add sections for Exam 2 here when ready
  ]
};
