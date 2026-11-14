# CMT Level II Question Bank — Review Report

Date: 2026-11-14 · Branch: `claude/dreamy-euler-w3p88y`

## 1. What is where

| Path | Contents |
|---|---|
| `sections_exam1_*.js` | **Original** quizzes, untouched (also the backup of what was in the LMS before the load). |
| `question_bank/Ch*.json` | **Corrected** bank: 31 files, 1,107 questions, named by official TOC unit (`Ch9_1` = Section 9, unit 1). Same fields as the originals: `id, question, options[4], correct (0-based), hasImage`. Imports directly into the FinCoursa quiz builder. |
| `question_bank/MAPPING.json` | Original file → bank file → TOC unit. |
| `question_bank/CHANGELOG.json` | Every changed question: what was wrong, the original text, and each later edit. |
| `question_bank/chart_questions/` | 115 original chart questions (5 per unit with a quiz), with `image` links to the LMS storage bucket; PNGs in `img/`. |
| `question_bank/lms_backup/` | Fingerprint proof that the LMS content before the load equalled the original `.js` files. |
| `tools/generate_chart_questions.py`, `tools/charts/` | Regenerates every chart from synthetic data; answers are computed from the drawn data. |
| `tools/load_to_lms.py` | Dry-run / apply / verify loader for the FinCoursa course. |
| `screenshots/` | Progress screenshots. |

## 2. Branches

All branches were consolidated into `claude/dreamy-euler-w3p88y` (nothing deleted). The unmerged `add-multiple-audio-files` branch brought 10 PDFs and ~25 audio files; quiz 5.2.2 (dropped from the default branch) was restored. `add-exam-selection` had nothing unique. `pdfs/ch10_1_part1.pdf` is actually 12.1 Trading Systems content (left in place, noted here).

## 3. Coverage against the official TOC

| Unit | Quiz (bank file) | Questions | Chart Qs | Curriculum PDF in repo |
|---|---|---|---|---|
| 1.1 Alpha and Beta | Ch1_1_part1, Ch1_1_part2 | 60 | 5 | yes |
| 1.2 Fusion Analysis | Ch1_2 | 30 | 5 | yes |
| **2.1 Anatomy of Market Bubbles** | — **missing** | 0 | 0 | no |
| **3.1 Charting Multiple Data Sets / Intervals** | — **missing** | 0 | 0 | no |
| **3.2 Market Profile** | — **missing** | 0 | 0 | no |
| 4.1 Classical Chart Patterns | Ch4_1 | 50 | 5 | yes |
| 4.2 Candlestick Patterns in the Real World | Ch4_2 | 30 | 5 | yes |
| 4.3 Candlestick Analysis in the Real World | Ch4_3 | 30 | 5 | no |
| 4.4 Point-and-Figure | Ch4_4 | 30 | 5 | yes |
| 5.1 Price Trend and Volume | Ch5_1 | 30 | 5 | no |
| 5.2 Market Internals | Ch5_2_part1, Ch5_2_part2 | 80 | 5 | yes |
| 6.1 Extrapolating Price from Volatility | Ch6_1 | 30 | 5 | yes |
| 6.2 Volatility Risk Premium | Ch6_2 | 50 | 5 | yes |
| 6.3 Volatility Indexes and VIX Complex | Ch6_3_part1–3 | 110 | 5 | yes |
| 7.1 Sentiment in the Stock Market | Ch7_1 | 50 | 5 | no |
| **7.2 Sentiment in the Derivatives Market** | — **missing** | 0 | 0 | no |
| 8.1 Inferential Statistics | Ch8_1 | 30 | 5 | no |
| 9.1 Momentum Part 1 | Ch9_1 | 30 | 5 | no |
| 9.2 Momentum Part 2 | Ch9_2_part1, Ch9_2_part2 | 60 | 5 | no |
| **9.3 Volume Weighted Average Price** | — **missing** | 0 | 0 | no |
| 9.4 Bollinger Bands | Ch9_4 | 30 | 5 | no |
| 10.1 Relative Strength | Ch10_1_part1, Ch10_1_part2 | 60 | 5 | yes (part 1 only) |
| 11.1 Concepts in Cycle Theory | Ch11_1 | 30 | 5 | no |
| 11.2 Applied Cycle Analysis | Ch11_2 | 27 | 5 | no |
| **11.3 Seasonal Cycles** | — **missing** (2–3 Presidential-cycle items sit in 11.2) | 0 | 0 | no |
| 11.4 Elliott Wave Part 1 | Ch11_4 | 30 | 5 | no |
| 11.5 Elliott Wave Part 2 | Ch11_5 | 30 | 5 | no |
| **11.6 Elliott Wave Part 3** | — **missing** | 0 | 0 | no |
| 12.1 Trading Systems | Ch12_1 | 50 | 5 | yes |
| 12.2 Applying Quantitative Techniques | Ch12_2_part1–3 | 150 | 5 | yes |

**Missing quizzes (7 units):** 2.1, 3.1, 3.2, 7.2, 9.3, 11.3, 11.6 — waiting for curriculum PDFs.
**Units with a quiz but no PDF in the repo (answers judged from standard literature):** 4.3, 5.1, 7.1, 8.1, 9.1, 9.2, 9.4, 11.1, 11.2, 11.4, 11.5.

## 4. What was wrong and what changed

Two independent review passes over all 1,110 original questions:

| First-pass finding | Count |
|---|---|
| Correct as-is | 785 |
| Copied curriculum wording / examples / data (copyright) | 205 |
| Trivia (exact dates, figures, names) | 49 |
| Ambiguous (two defensible answers) | 31 |
| Needed a curriculum figure that wasn't included | 19 |
| Factual error in stem or options | 19 |
| Wrong answer key | 2 (+ several "no correct option" cases counted as factual errors) |

Examples of real errors fixed: annualised return keyed as monthly × √12 (should be × 12); leptokurtic keyed as "results can be repeated" (it means fat tails); Hurst translation defined backwards; VIX mean-reversion trade keyed as *buying* volatility at a spike; price-oscillator formula that was actually ROC of an MA; convexity defined as delta; an H&S/rectangle target carrying a curriculum arithmetic slip; "J.D. Hurst"; answer options that were leftover review notes.

Second pass: verified every rewrite (numbers recomputed), reworded all remaining copied phrasing (automated 8-word-overlap scan against the PDFs now finds **0** matches), replaced 69 duplicates (6.4/6.5 largely repeated each other), and calibrated **all** questions to **medium** difficulty (realistic distractors, no joke/absolute options). 3 dated questions were retired (kept in the original file). Answer positions were rebalanced from B = 62% to roughly A 23% / B 28% / C 27% / D 22%; numeric option sets stay in ascending order.

## 5. LMS (FinCoursa course "CMT Level 2 - Question Bank", draft)

Loaded and verified via `tools/load_to_lms.py`: 44 quiz lessons — 34 unit lessons (1,107 questions, in TOC order, with 8 new part lessons) plus 10 "Chart Practice" lessons (115 chart questions, images in the public `course-images` bucket under `cmtl2-qbank/charts/`). Several lessons previously held another unit's questions (VWAP held stochastics, 11.2/11.3 held Elliott Wave, 11.4 held cycles, "1.2 Trading Systems" held 12.2); all corrected. Answer keys are stored only in the admin-only `quiz_answer_keys` table. Lessons for the 7 missing units are present but empty.

## 6. Open items

1. Upload the curriculum PDFs for 2.1, 3.1, 3.2, 7.2, 9.3, 11.3, 11.6 (and ideally the units without PDFs) to generate/verify those quizzes.
2. A few facts could not be checked without the PDFs (e.g. Appel's dual-MACD settings, Lane's 75/25 levels) — flagged "unverified" in `CHANGELOG.json`.
3. In about 16% of chart questions the correct option is still the longest; acceptable but could be trimmed.
4. Remove the Supabase secret key from the cloud environment's settings once no further loads are needed.
