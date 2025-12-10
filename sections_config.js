// Configuration for exam sections with hierarchical structure
const examSections = {
  1: [
    {
      id: 'section_1',
      title: 'I. Theory and History of Technical Analysis',
      subsections: [
        {
          id: 'ch1_1',
          title: '1.1 - Alpha and Beta',
          questionCount: 30,
          file: 'sections_exam1_ch1_1.js',
          description: '30 Questions',
          video: 'videos/ch1_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch1_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch1_1_2',
          title: '1.1.2 - Alpha and Beta - Part 2',
          questionCount: 30,
          file: 'sections_exam1_ch1_1_2.js',
          description: '30 Questions',
          video: 'videos/ch1_1_2.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch1_1_2.pdf'       // Optional: path to PDF file
        }
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
        {
          id: 'ch4_1',
          title: '4.1 - Classical Chart Pattern',
          questionCount: 50,
          file: 'sections_exam1_ch4_1.js',
          description: '50 Questions',
          videos: [  // Array for multiple audio files
            'videos/ch4_1_part1.mp4',
            'videos/ch4_1_part2.mp4',
            'videos/ch4_1_part3.mp3',
            'videos/ch4_1_part4.mp3'
          ],
          pdf: 'pdfs/ch4_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch4_2',
          title: '4.2 - Candlestick Patterns',
          questionCount: 30,
          file: 'sections_exam1_ch4_2.js',
          description: '30 Questions',
          // videos: []  // Video files removed - add back when available
          pdf: 'pdfs/ch4_2.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch4_3_1',
          title: '4.3.1 - Candlestick Analysis in Real World',
          questionCount: 30,
          file: 'sections_exam1_ch4_3_1.js',
          description: '30 Questions',
          video: 'videos/ch4_3_1.mp3',  // Changed to MP3 audio file
          pdf: 'pdfs/ch4_3_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch4_4',
          title: '4.4 - Charts - Point and Figures',
          questionCount: 30,
          file: 'sections_exam1_ch4_4.js',
          description: '30 Questions',
          video: 'videos/ch4_4.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch4_4.pdf'       // Optional: path to PDF file
        }
        // Add subsections here
      ]
    },
    {
      id: 'section_5',
      title: 'V. Trend Analysis',
      subsections: [
        {
          id: 'ch5_1',
          title: '5.1 - Price and Volume Analysis',
          questionCount: 30,
          file: 'sections_exam1_ch5_1.js',
          description: '30 Questions',
          video: 'videos/ch5_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch5_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch5_2',
          title: '5.2 - Market Internals',
          questionCount: 50,
          file: 'sections_exam1_ch5_2.js',
          description: '50 Questions',
          video: 'videos/ch5_2_part1.mp3',  // Changed to MP3 audio file
          pdf: 'pdfs/ch5_2.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch5_2_2',
          title: '5.2.2 - Market Internals',
          questionCount: 30,
          file: 'sections_exam1_ch5_2_2.js',
          description: '30 Questions',
          video: 'videos/ch5_2_2.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch5_2_2.pdf'       // Optional: path to PDF file
        }
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
          id: 'ch6_2',
          title: '6.2 - Volatility Risk Premium',
          questionCount: 50,
          file: 'sections_exam1_ch6_2.js',
          description: '50 Questions',
          video: 'videos/ch6_2.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch6_2.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch6_3',
          title: '6.3 - Term Structure of VIX Futures and Early Warning Signals',
          questionCount: 30,
          file: 'sections_exam1_ch6_3.js',
          description: '30 Questions',
          video: 'videos/ch6_3.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch6_3.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch6_4',
          title: '6.4 - Volatility Indexes and VIX Complex',
          questionCount: 50,
          file: 'sections_exam1_ch6_4.js',
          description: '50 Questions',
          video: 'videos/ch6_4.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch6_4.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch6_5',
          title: '6.5 - Power of Convexity in VIX Futures and Options',
          questionCount: 30,
          file: 'sections_exam1_ch6_5.js',
          description: '30 Questions',
          video: 'videos/ch6_5.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch6_5.pdf'       // Optional: path to PDF file
        }
        // Add more subsections here
      ]
    },
    {
      id: 'section_7',
      title: 'VII. Sentiment',
      subsections: [
        {
          id: 'ch7_1',
          title: '7.1 - Analyzing Sentiment in Stock Market',
          questionCount: 50,
          file: 'sections_exam1_ch7_1.js',
          description: '50 Questions',
          video: 'videos/ch7_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch7_1.pdf'       // Optional: path to PDF file
        }
        // Add subsections here
      ]
    },
    {
      id: 'section_8',
      title: 'VIII. Statistics for Technicians',
      subsections: [
        {
          id: 'ch8',
          title: '8 - Inferential Statistics',
          questionCount: 30,
          file: 'sections_exam1_ch8.js',
          description: '30 Questions',
          video: 'videos/ch8.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch8.pdf'       // Optional: path to PDF file
        }
        // Add subsections here
      ]
    },
    {
      id: 'section_9',
      title: 'IX. Technical Indicators',
      subsections: [
        {
          id: 'ch9_2',
          title: '9.2 - Momentum and Indicator Interpretation',
          questionCount: 30,
          file: 'sections_exam1_ch9_2.js',
          description: '30 Questions',
          video: 'videos/ch9_2.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch9_2.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch9_2_2',
          title: '9.2.2 - MACD and RSI',
          questionCount: 30,
          file: 'sections_exam1_ch9_2_2.js',
          description: '30 Questions',
          video: 'videos/ch9_2_2.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch9_2_2.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch9_3_6',
          title: '9.3.6 - Stochastics',
          questionCount: 30,
          file: 'sections_exam1_ch9_3_6.js',
          description: '30 Questions',
          video: 'videos/ch9_3_6.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch9_3_6.pdf'       // Optional: path to PDF file
        },
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
        {
          id: 'ch10_1',
          title: '10.1 - Advanced Applications of Relative Strength - Part 1',
          questionCount: 30,
          file: 'sections_exam1_ch10_1.js',
          description: '30 Questions',
          video: 'videos/ch10_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch10_1_part1.pdf'       // Optional: path to PDF file (part2 also available)
        },
        {
          id: 'ch10_1_2',
          title: '10.1.2 - Advanced Applications of Relative Strength - Part 2',
          questionCount: 30,
          file: 'sections_exam1_ch10_1_2.js',
          description: '30 Questions',
          video: 'videos/ch10_1_2.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch10_1_2.pdf'       // Optional: path to PDF file
        }
        // Add subsections here
      ]
    },
    {
      id: 'section_11',
      title: 'XI. Cycle Analysis',
      subsections: [
        {
          id: 'ch11_1',
          title: '11.1 - Cycle Principles',
          questionCount: 30,
          file: 'sections_exam1_ch11_1.js',
          description: '30 Questions',
          video: 'videos/ch11_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch11_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch11_4',
          title: '11.4 - Elliott Waves Part 1',
          questionCount: 30,
          file: 'sections_exam1_ch11_4.js',
          description: '30 Questions',
          video: 'videos/ch11_4.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch11_4.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch11_5',
          title: '11.5 - Elliott Waves Part 2',
          questionCount: 30,
          file: 'sections_exam1_ch11_5.js',
          description: '30 Questions',
          video: 'videos/ch11_5.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch11_5.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch11_6_1',
          title: '11.6.1 - Cycle Driven Market Approaches',
          questionCount: 30,
          file: 'sections_exam1_ch11_6_1.js',
          description: '30 Questions',
          video: 'videos/ch11_6_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch11_6_1.pdf'       // Optional: path to PDF file
        }
        // Add more subsections here
      ]
    },
    {
      id: 'section_12',
      title: 'XII. Applying Quantitative Techniques',
      subsections: [
        {
          id: 'ch12_1',
          title: '12.1 - Applying Quant',
          questionCount: 50,
          file: 'sections_exam1_ch12_1.js',
          description: '50 Questions',
          videos: [  // Array for multiple audio files
            'videos/ch12_1_part1.mp3',
            'videos/ch12_1_part2.mp3'
          ],
          pdf: 'pdfs/ch12_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch12_1_1',
          title: '12.1.1 - Applying Quant Techniques',
          questionCount: 50,
          file: 'sections_exam1_ch12_1_1.js',
          description: '50 Questions',
          video: 'videos/ch12_1_1.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch12_1_1.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch12_2_2',
          title: '12.2.2 - Applying Quant Techniques',
          questionCount: 50,
          file: 'sections_exam1_ch12_2_2.js',
          description: '50 Questions',
          video: 'videos/ch12_2_part2.mp3',  // Changed to MP3 audio file
          pdf: 'pdfs/ch12_2_2.pdf'       // Optional: path to PDF file
        },
        {
          id: 'ch12_2_3',
          title: '12.2.3 - Applying Quant Technique',
          questionCount: 50,
          file: 'sections_exam1_ch12_2_3.js',
          description: '50 Questions',
          video: 'videos/ch12_2_3.mp4',  // Optional: path to MP4 file or YouTube URL
          pdf: 'pdfs/ch12_2_3.pdf'       // Optional: path to PDF file
        }
      ]
    }
  ],
  2: [
    // Add sections for Exam 2 here when ready
  ]
};
