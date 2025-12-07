# Deployment Guide for CMT Level II Online Exam

## Quick Start - Deploy to Vercel (5 minutes)

### Step 1: Prepare Your Files
1. Download all files from this directory
2. Complete the `questions.js` file with all 150 questions from the PDF

### Step 2: Create GitHub Repository
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CMT Level II Online Exam"

# Create repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/cmt-level-ii-exam.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"
6. Your exam will be live in ~30 seconds!

Your URL will be: `https://your-project-name.vercel.app`

## Alternative: Deploy to GitHub Pages

### Step 1: Push to GitHub
Follow the GitHub repository creation steps above

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Your exam will be available at: `https://YOUR_USERNAME.github.io/cmt-level-ii-exam/`

## Alternative: Deploy to Netlify

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com) and sign up

### Step 2: Deploy
1. Click "Add new site" → "Import an existing project"
2. Connect to GitHub and select your repository
3. Click "Deploy site"
4. Your exam will be live at: `https://random-name.netlify.app`

You can customize the domain name in Netlify settings.

## Completing the Questions File

Before deploying, you must complete the `questions.js` file with all 150 questions.

### Structure of Each Question:
```javascript
{
    id: 1,  // Question number
    question: "The question text goes here...",
    options: [
        "Option A text",
        "Option B text",
        "Option C text",
        "Option D text"
    ],
    correct: 0,  // Index of correct answer (0=A, 1=B, 2=C, 3=D)
    hasImage: false  // Set to true only if question references a chart/image
}
```

### Answer Key (for reference):
```
Q1-10:   d,a,a,b,d,c,c,c,d,a
Q11-20:  b,a,d,d,b,b,d,a,a,a
Q21-30:  d,b,c,d,a,b,c,c,b,b
Q31-40:  a,a,d,b,b,d,d,c,a,c
Q41-50:  c,d,b,c,d,a,d,b,a,b
Q51-60:  b,d,a,d,d,c,c,c,a,a
Q61-70:  a,c,a,b,a,c,c,a,b,b
Q71-80:  a,a,c,d,a,b,a,d,b,b
Q81-90:  b,b,d,c,d,d,d,a,c,d
Q91-100: c,d,b,b,b,a,d,a,b,b
Q101-110: d,b,b,c,d,a,c,c,c,d
Q111-120: d,d,c,b,a,d,c,b,c,b
Q121-130: b,d,d,b,c,a,c,b,b,d
Q131-140: d,d,c,b,b,b,b,d,a,c
Q141-150: a,d,b,b,d,c,d,d,b,b
```

Convert letters to indices: a=0, b=1, c=2, d=3

### Adding Questions:
1. Copy question text from PDF pages 3-42
2. Copy the four option choices
3. Look up correct answer from PDF pages 51-67
4. Add to `questions.js` following the template
5. Mark `hasImage: true` if question references a chart

## Testing Locally

Before deploying, test locally:

```bash
# Option 1: Python
python3 -m http.server 8000
# Visit http://localhost:8000

# Option 2: PHP
php -S localhost:8000

# Option 3: Node.js (requires installation)
npx serve .
```

## Customization

### Change Timer Duration
Edit `exam.js`, line 4:
```javascript
let timeRemaining = 3 * 60 * 60; // 3 hours = 10800 seconds
```

### Change Colors
Edit `styles.css` - main colors are:
- Primary: #667eea (purple)
- Success: #48bb78 (green)
- Error: #f56565 (red)
- Warning: #fbbf24 (yellow)

### Modify Progress Display
Edit `exam.js` functions:
- `updateProgress()` - Progress bar and text
- `updateTimerDisplay()` - Timer formatting

## Troubleshooting

### Questions not showing?
- Check browser console (F12) for JavaScript errors
- Verify `questions.js` syntax is correct
- Ensure all questions have required fields

### Deployment failed?
- Verify `vercel.json` is present
- Check that all files are committed to Git
- Ensure repository is public (or Vercel has access)

### Exam won't submit?
- Check that all questions have a `correct` value
- Verify `exam.js` is loaded correctly

## Support

For issues:
1. Check browser console for errors (F12)
2. Review this deployment guide
3. Open an issue on GitHub

## Security Note

This is a client-side only application. All answers are visible in the JavaScript source code. This is intentional for a practice exam. Do NOT use this structure for a real graded exam that requires answer security.

---

**Ready to deploy?** Follow the Vercel steps above for the fastest deployment!
