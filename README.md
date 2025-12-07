# CMT Level II Online Exam

An interactive web-based examination platform for the Chartered Market Technician (CMT) Level II sample exam. This application provides a complete exam experience with 150 questions, a 3-hour timer, progress tracking, and instant results.

## Features

- **150 Practice Questions**: Complete set of CMT Level II sample exam questions
- **3-Hour Timer**: Countdown timer with visual warnings
- **Progress Tracking**: Real-time progress bar and question counter
- **Instant Results**: Immediate scoring and performance breakdown
- **Review Mode**: Review all questions with correct/incorrect answers highlighted
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Backend Required**: Pure client-side application

## Demo

Visit the live exam: [Your Vercel URL will be here]

## Deployment

### Deploy to Vercel (Recommended)

1. Fork this repository to your GitHub account
2. Sign up for a free account at [Vercel](https://vercel.com)
3. Click "New Project" and import your forked repository
4. Vercel will automatically detect the configuration and deploy
5. Your exam will be live at `https://your-project-name.vercel.app`

### Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Save and your exam will be available at `https://yourusername.github.io/repository-name`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cmt-level-ii-exam.git
   cd cmt-level-ii-exam
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   # or
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## File Structure

```
cmt-level-ii-exam/
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── exam.js            # Exam logic and functionality
├── questions.js       # All 150 exam questions
├── README.md          # This file
└── vercel.json        # Vercel configuration
```

## Usage

1. **Start the Exam**: Open the application in your browser
2. **Answer Questions**: Click on your chosen answer for each question
3. **Navigate**: Use Previous/Next buttons to move between questions
4. **Track Progress**: Monitor your progress and time remaining at the top
5. **Submit**: Click Submit when you've completed all questions
6. **Review Results**: View your score and review all answers

## Exam Information

- **Total Questions**: 150
- **Time Limit**: 3 hours (180 minutes)
- **Passing Score**: Not specified (practice exam)
- **Question Types**: Multiple choice (4 options per question)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (No frameworks required)
- Responsive design with Flexbox/Grid

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

This is a sample exam for educational purposes. If you find any errors in questions or answers, please:

1. Open an issue describing the error
2. Submit a pull request with the correction
3. Reference the question number and the source material

## License

This project is for educational purposes only. The exam questions are sample questions provided by the Market Technicians Association (MTA).

## Disclaimer

This is a SAMPLE exam for practice purposes only. It is not an official CMT exam and should not be relied upon as the sole study material for the actual CMT Level II examination.

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions

## Acknowledgments

- Market Technicians Association (MTA) for the sample questions
- CMT Program curriculum materials

---

**Note**: Make sure to complete the questions.js file with all 150 questions from the PDF before deploying.
