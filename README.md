# Montessori Spelling Workbook

This is a simple learning project website that generates printable spelling workbook pages for students.

## What it includes

- Blue Series combination pages (phonetic combinations)
- Green Series combination pages (digraphs and vowel teams)
- Custom combination editor (you can define your own sequence)
- Voice input for custom combinations (speech-to-text)
- Editable Word export (`.doc`) for further changes
- One practice page format per combination:
  - Word list
  - Practice same words
  - Make new words with the same combination

## Run locally

No build tools needed.

1. Open `index.html` in your browser.
2. Choose rows-per-page.
3. Click **Print Workbook**.

## Custom combinations format

Use one line per combination:

`Series|Combination|word1,word2,word3`

Example:

`Blue|sh|ship,shop,shell,fish`

Then click **Apply Custom Combinations**.

You can also upload a `.txt` file in the Custom Combination Setup section.
Each non-empty line should use one of these formats:

- `Series|Combination|word1,word2,word3|Rows(optional)`
- `Series|Combination|word1,word2,word3`
- `Combination|word1,word2,word3`
- `Pattern|CVC|at|12` (auto-generate CVC words for the pattern)
- `Pattern|Sight|grade1|12` (auto-load sight words by grade)
- `Pattern|Sight|the,and,was,said|12` (custom sight words)

Notes:

- Lines starting with `#` or `//` are treated as comments and ignored.
- You can drag and drop a `.txt` file into the drop zone.
- Use **Preview File** to validate first, then click **Use Preview & Generate**.
- Use **Download Sample .txt** to get a ready-made template file.

You can also use **Start Voice Input** in the custom editor section and speak your lines.
Tips for speaking symbols:

- Say "pipe" for `|`
- Say "comma" for `,`
- Say "new line" for a line break
- Set **Accent** to **Indian English** for better recognition of native Indian pronunciation
- Normal pauses now continue in the same line (no forced new line unless you say "new line")

Hands-free voice commands (say these phrases):

- "apply now" (apply custom combinations)
- "load defaults" (reset to default Blue/Green combinations)
- "regenerate pages"
- "print workbook"
- "download word"

Use **Download Word (.doc)** to download an editable workbook file for Microsoft Word.

## Customize content

Edit `script.js` and update:

- `BLUE_SERIES`
- `GREEN_SERIES`

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
