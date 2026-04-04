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

## Publish as a website (free)

### Option 1: GitHub Pages (recommended)

1. Create a new GitHub repository from the browser (for example: `montessori-workbook`).
2. Connect your local project and push:

```bash
git remote add origin https://github.com/<your-username>/montessori-workbook.git
git push -u origin main
```

3. On GitHub, open your repository:
   - Go to **Settings** -> **Pages**
   - Under **Build and deployment**, choose:
     - **Source**: Deploy from a branch
     - **Branch**: `main` and `/ (root)`
   - Save

4. Wait about 1-2 minutes, then your site will be live at:

`https://<your-username>.github.io/montessori-workbook/`

### Option 2: Netlify Drop (fastest, no Git needed)

1. Open https://app.netlify.com/drop
2. Drag this project folder into the page.
3. Netlify gives you a live URL instantly.
