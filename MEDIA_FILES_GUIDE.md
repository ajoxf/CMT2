# Multiple Audio/Video Files Guide

This guide explains how to add multiple audio and video files to exam questions in the CMT2 exam platform.

## Overview

The exam platform now supports adding multiple audio and video files to any question. This is useful for:
- Providing supplementary lecture content
- Adding multiple parts of an explanation
- Including audio commentary on charts
- Offering video demonstrations

## How to Add Media Files

### 1. File Structure

Create a `videos/` folder in your project root to store your media files:

```
CMT2/
├── videos/
│   ├── ch4_1_part1.mp4
│   ├── ch4_1_part2.mp4
│   ├── ch4_1_part3.mp4
│   ├── ch4_2_part1.mp4
│   └── ...
├── questions.js
├── exam.js
└── index.html
```

### 2. Supported File Formats

**Video Formats:**
- `.mp4` (recommended)
- `.webm`
- `.ogg`
- `.mov`

**Audio Formats:**
- `.mp3` (recommended)
- `.m4a`
- `.wav`
- `.ogg`
- `.aac`

### 3. Adding Media to Questions

To add media files to a question, add a `mediaFiles` array property to the question object:

```javascript
{
    id: 9,
    question: "Which of the following patterns resonate with price action?",
    options: [
        "Pullback",
        "Bull trap",
        "Bear trap",
        "Throwback"
    ],
    correct: 3,
    hasImage: true,
    image: "images/question-9.jpg",
    // Add multiple media files here
    mediaFiles: [
        {
            url: "videos/ch2_1_part1.mp4",
            label: "Pattern Introduction - Part 1"
        },
        {
            url: "videos/ch2_1_part2.mp4",
            label: "Pattern Introduction - Part 2"
        },
        {
            url: "videos/ch2_1_part3.mp4",
            label: "Pattern Analysis"
        }
    ]
}
```

### 4. Media File Object Structure

Each media file object should have:
- `url` (required): Path to the media file
- `label` (optional): Display name for the media file

```javascript
{
    url: "videos/ch4_1_part1.mp4",    // Required: file path
    label: "Introduction to Chapter 4" // Optional: display label
}
```

### 5. Examples

#### Example 1: Single Video File

```javascript
{
    id: 15,
    question: "What is the significance of this chart pattern?",
    options: ["A", "B", "C", "D"],
    correct: 2,
    mediaFiles: [
        {
            url: "videos/ch5_2_part1.mp4",
            label: "Chart Pattern Explanation"
        }
    ]
}
```

#### Example 2: Multiple Video Files

```javascript
{
    id: 20,
    question: "Analyze the following technical setup",
    options: ["Bullish", "Bearish", "Neutral", "Indeterminate"],
    correct: 0,
    mediaFiles: [
        { url: "videos/ch9_2_part1.mp4", label: "Setup Overview" },
        { url: "videos/ch9_2_part2.mp4", label: "Entry Points" },
        { url: "videos/ch9_2_part3.mp4", label: "Exit Strategy" },
        { url: "videos/ch9_2_part4.mp4", label: "Risk Management" }
    ]
}
```

#### Example 3: Audio Files

```javascript
{
    id: 25,
    question: "Listen to the market commentary and answer:",
    options: ["Buy", "Sell", "Hold", "Avoid"],
    correct: 2,
    mediaFiles: [
        { url: "audio/commentary_part1.mp3", label: "Morning Analysis" },
        { url: "audio/commentary_part2.mp3", label: "Afternoon Update" }
    ]
}
```

#### Example 4: Mixed Media

```javascript
{
    id: 30,
    question: "Based on the video and audio content, select the best answer:",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 1,
    image: "images/question-30.jpg",
    mediaFiles: [
        { url: "videos/analysis.mp4", label: "Video Analysis" },
        { url: "audio/expert_opinion.mp3", label: "Expert Commentary" }
    ]
}
```

## Features

### Automatic Format Detection
The system automatically detects whether a file is audio or video based on the file extension and renders the appropriate player.

### Responsive Design
- On desktop: Media files display in a grid layout (side by side)
- On mobile: Media files stack vertically for better viewing

### Player Controls
All media players include:
- Play/Pause
- Volume control
- Seek bar (timeline)
- Fullscreen (for videos)
- Download option

### Labels
- Labels are displayed above each media player
- Labels are optional but recommended for clarity
- Use descriptive labels like "Part 1", "Introduction", "Analysis", etc.

## Best Practices

1. **File Organization**: Use a clear naming convention
   - `ch[chapter]_[section]_part[number].mp4`
   - Example: `ch4_1_part1.mp4`, `ch4_1_part2.mp4`

2. **File Sizes**: Keep video files optimized
   - Use compressed formats (H.264 for MP4)
   - Recommended resolution: 720p or 1080p
   - Consider file size for loading performance

3. **Labels**: Always provide descriptive labels
   - ✅ Good: "Pattern Introduction - Part 1"
   - ❌ Bad: "Video 1"

4. **Ordering**: List media files in logical order
   - Part 1, Part 2, Part 3, etc.
   - Introduction → Analysis → Conclusion

5. **Accessibility**: Include transcripts or captions when possible

## Troubleshooting

### Video/Audio Not Playing
- Check that the file path is correct
- Ensure the file exists in the specified location
- Verify the file format is supported
- Check browser console for errors

### File Not Found
- Verify the `videos/` folder exists
- Check file path spelling and capitalization
- Ensure files are in the correct directory

### Player Not Showing
- Check that `mediaFiles` array is properly formatted
- Verify each object has a `url` property
- Check browser console for JavaScript errors

## Technical Details

### Implementation Files
- `exam.js`: Contains `renderMediaFiles()` function
- `styles.css`: Contains media player styles (`.media-container`, `.media-item`, etc.)
- `questions.js`: Question data with optional `mediaFiles` array

### Browser Compatibility
- Chrome: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
- Mobile browsers: Full support

## Example Directory Structure

```
CMT2/
├── videos/
│   ├── ch4_1_part1.mp4
│   ├── ch4_1_part2.mp4
│   ├── ch4_1_part3.mp4
│   ├── ch4_2_part1.mp4
│   ├── ch4_2_part2.mp4
│   ├── ch4_2_part3.mp4
│   ├── ch4_2_part4.mp4
│   ├── ch5_2_part1.mp4
│   └── ch9_2.mp4
├── audio/
│   ├── commentary_1.mp3
│   └── commentary_2.mp3
├── images/
│   └── question-9.jpg
├── questions.js
├── exam.js
├── index.html
└── styles.css
```

## Summary

Adding multiple media files to questions is straightforward:
1. Create a `videos/` or `audio/` folder
2. Add your media files
3. Add `mediaFiles` array to question objects
4. Each entry needs a `url` and optional `label`
5. The system handles the rest automatically

The feature works seamlessly with existing functionality like images, timers, and progress saving.
