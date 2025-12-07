# How to Add Chart Images to Your CMT Exam

## Quick Overview

Your exam already supports images! Here's how to add them:

## Step 1: Extract Charts from PDF

1. Open your CMT PDF
2. For each question with a chart (Questions 9-19, 35-38, 45, 60-61, 64-66, 70, 83, 121-123, 129, 132-138, 149)
3. Take a screenshot or export the chart
4. Save as JPG or PNG

## Step 2: Name Your Images

Use this exact naming format:
```
question-9.jpg
question-10.jpg
question-11.jpg
question-17.jpg
... etc
```

**Important**: Use lowercase, include the hyphen, match the question ID exactly.

## Step 3: Save Images to the `images/` Folder

Put all your chart images in:
```
/CMT2/images/
```

Your folder structure should look like:
```
CMT2/
├── images/
│   ├── question-9.jpg
│   ├── question-10.jpg
│   ├── question-11.jpg
│   ├── question-17.jpg
│   └── ... (all chart images)
├── index.html
├── exam.js
├── questions.js
└── styles.css
```

## Step 4: Update questions.js

For each question with a chart, change from:
```javascript
hasImage: true
```

To:
```javascript
image: "images/question-9.jpg"
```

### Example:

**Before:**
```javascript
{
    id: 9,
    question: "Which of the following patterns...",
    options: [...],
    correct: 3,
    hasImage: true  // ← Change this
}
```

**After:**
```javascript
{
    id: 9,
    question: "Which of the following patterns...",
    options: [...],
    correct: 3,
    image: "images/question-9.jpg"  // ← To this
}
```

## Questions That Need Images

Based on your questions.js file, these questions are marked with charts:

### Currently in your file:
- Question 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19

### Additional questions (from template):
- Questions 35, 36, 37, 38
- Question 45
- Questions 60, 61, 64, 65, 66
- Question 70
- Question 83
- Questions 121, 122, 123
- Question 129
- Questions 132, 133, 134, 135, 136, 137, 138
- Question 149

## Image Recommendations

### File Format:
- **Best**: JPG (smaller file size)
- **Also OK**: PNG (larger but better quality)

### Size:
- **Width**: 800-1200 pixels (not too large)
- **Height**: Whatever maintains aspect ratio
- **File size**: Keep under 200KB per image

### Quality:
- **JPG**: 70-80% quality
- Charts should be clear and readable

## Find & Replace Helper

To update all questions at once, you can use find & replace in your text editor:

**Find:**
```
hasImage: true
```

**Replace with:**
```
image: "images/question-[ID].jpg"
```

(But you'll need to manually replace [ID] with the actual question number for each one)

## Testing

After adding images:

1. **Test locally:**
   ```bash
   python3 -m http.server 8000
   ```
   Visit: http://localhost:8000

2. **Check:**
   - Images load correctly
   - Images are clear and readable
   - No broken image icons
   - Images don't slow down the exam

3. **Browser console:**
   - Press F12
   - Check for any image loading errors

## Common Issues

### Image doesn't show:
- ✅ Check filename matches exactly (case-sensitive!)
- ✅ Image is in `images/` folder
- ✅ Path in questions.js is correct: `"images/question-X.jpg"`

### Image is too large:
- Resize to max 1200px width
- Compress using https://tinyjpg.com or similar

### Wrong image shows:
- Double-check question ID matches filename

## After Adding Images

1. **Commit to Git:**
   ```bash
   git add images/
   git add questions.js
   git commit -m "Add chart images for questions"
   git push
   ```

2. **GitHub/Vercel will automatically deploy** the images!

## Example: Complete Question with Image

```javascript
{
    id: 17,
    question: "Identify the chart pattern highlighted below:",
    options: [
        "Triple bottom",
        "Descending triangle",
        "Head and Shoulders",
        "Head and Shoulders bottom"
    ],
    correct: 3,
    image: "images/question-17.jpg",
    explanation: "This is a Head and Shoulders bottom pattern, characterized by three lows with the middle low being the deepest."
}
```

---

**Need help?** The exam will still work without images - questions just won't show charts. Add them when you're ready!
