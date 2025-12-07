# Questions Template - Use this to quickly add questions 21-150

## Answer Key Reference (for quick lookup)

```
Q21-30:  d=3, b=1, c=2, d=3, a=0, b=1, c=2, c=2, b=1, b=1
Q31-40:  a=0, a=0, d=3, b=1, b=1, d=3, d=3, c=2, a=0, c=2
Q41-50:  c=2, d=3, b=1, c=2, d=3, a=0, d=3, b=1, a=0, b=1
Q51-60:  b=1, d=3, a=0, d=3, d=3, c=2, c=2, c=2, a=0, a=0
Q61-70:  a=0, c=2, a=0, b=1, a=0, c=2, c=2, a=0, b=1, b=1
Q71-80:  a=0, a=0, c=2, d=3, a=0, b=1, a=0, d=3, b=1, b=1
Q81-90:  b=1, b=1, d=3, c=2, d=3, d=3, d=3, a=0, c=2, d=3
Q91-100: c=2, d=3, b=1, b=1, b=1, a=0, d=3, a=0, b=1, b=1
Q101-110: d=3, b=1, b=1, c=2, d=3, a=0, c=2, c=2, c=2, d=3
Q111-120: d=3, d=3, c=2, b=1, a=0, d=3, c=2, b=1, c=2, b=1
Q121-130: b=1, d=3, d=3, b=1, c=2, a=0, c=2, b=1, b=1, d=3
Q131-140: d=3, d=3, c=2, b=1, b=1, b=1, b=1, d=3, a=0, c=2
Q141-150: a=0, d=3, b=1, b=1, d=3, c=2, d=3, d=3, b=1, b=1
```

## Copy-Paste Template

Use this template for each question:

```javascript
    {
        id: 21,
        question: "PASTE QUESTION TEXT HERE FROM PDF PAGE X",
        options: [
            "OPTION A TEXT",
            "OPTION B TEXT",
            "OPTION C TEXT",
            "OPTION D TEXT"
        ],
        correct: 3  // Change to correct index based on answer key above
    },
```

## Questions with Charts (mark as hasImage: true)

These questions reference charts/images in the original PDF:
- Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19 (already done)
- Q35, Q36, Q37, Q38, Q45, Q60, Q61, Q64, Q65, Q66, Q70, Q83
- Q121, Q122, Q123, Q129, Q132, Q133, Q134, Q135, Q136, Q137, Q138, Q149

For these, add: `hasImage: true` after the correct answer.

## Workflow for Adding Questions

### Method 1: One at a time
1. Find question in PDF (pages 3-42)
2. Copy question text
3. Copy all 4 options
4. Look up correct answer from key above
5. Paste into template
6. Add comma after closing brace (except last question)

### Method 2: Batch processing
1. Copy 10 questions at once to separate file
2. Format all 10 using template
3. Look up all 10 correct answers
4. Paste batch into questions.js
5. Test in browser
6. Repeat

## Example: Adding Question 21

**From PDF (page 11):**
- Question 21: "In a Head & Shoulders pattern, volume is generally:"
- Options:
  a) consistent throughout the pattern.
  b) light as prices approach the peak.
  c) highest on a penetration through the neckline.
  d) heaviest during the formation of the left shoulder.
- Answer key shows: Q21 = d (which is index 3)

**Formatted:**
```javascript
    {
        id: 21,
        question: "In a Head & Shoulders pattern, volume is generally:",
        options: [
            "consistent throughout the pattern.",
            "light as prices approach the peak.",
            "highest on a penetration through the neckline.",
            "heaviest during the formation of the left shoulder."
        ],
        correct: 3
    },
```

## Tips for Efficiency

1. **Use Find & Replace:**
   - Find: `a) `
   - Replace: `"`
   - Then clean up

2. **Keep PDF open:** Side-by-side with editor

3. **Validate as you go:** Every 10 questions, test in browser

4. **Watch for special characters:**
   - Replace " with \"
   - Replace ' with \'
   - Watch for – vs -

5. **Common mistakes:**
   - Missing comma between questions
   - Wrong quote marks (`"` not `"`)
   - Incorrect answer index
   - Missing closing brace

## Progress Tracker

Mark off as you complete:

Questions 21-30: ⬜
Questions 31-40: ⬜
Questions 41-50: ⬜
Questions 51-60: ⬜
Questions 61-70: ⬜
Questions 71-80: ⬜
Questions 81-90: ⬜
Questions 91-100: ⬜
Questions 101-110: ⬜
Questions 111-120: ⬜
Questions 121-130: ⬜
Questions 131-140: ⬜
Questions 141-150: ⬜

## Testing After Each Batch

```bash
# Run local server
python3 -m http.server 8000

# Visit http://localhost:8000
# Check browser console for errors (F12)
```

## Final Check Before Deploy

- [ ] All 150 questions present (id: 1 to id: 150)
- [ ] All questions have 4 options
- [ ] All correct answers match answer key
- [ ] No JavaScript syntax errors
- [ ] All chart questions marked with hasImage: true
- [ ] Tested in browser - all questions accessible
- [ ] Timer works correctly
- [ ] Submit and review work properly

---

**Estimated time:** 2-3 hours for all 130 remaining questions
**Reward:** A fully functional online exam! 🎉
