# Montessori Spelling Workbook (Grade 1-2)

This is a simple learning project website that generates printable spelling workbook pages for students.

## What it includes

- Blue Series combination pages (phonetic combinations)
- Green Series combination pages (digraphs and vowel teams)
- Sight words pages after all combinations
- One practice page format per combination:
  - Word list
  - Practice same words
  - Make new words with the same combination

## Run locally

No build tools needed.

1. Open `index.html` in your browser.
2. Choose grade level and rows-per-page.
3. Click **Print Workbook**.

## Customize content

Edit `script.js` and update:

- `BLUE_SERIES`
- `GREEN_SERIES`
- `SIGHT_WORDS_GRADE_1`
- `SIGHT_WORDS_GRADE_2`

You can align these lists exactly with your Montessori Blue and Green sequence.

## Suggested next Git steps

```bash
git add .
git commit -m "Initial Montessori workbook builder"
```
