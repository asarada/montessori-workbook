const BLUE_SERIES = [
  { combo: "at", words: ["cat", "bat", "hat", "mat", "rat", "sat", "pat", "fat"] },
  { combo: "an", words: ["can", "fan", "man", "pan", "ran", "tan", "van", "ban"] },
  { combo: "ap", words: ["cap", "map", "nap", "tap", "lap", "sap", "gap", "rap"] },
  { combo: "in", words: ["pin", "fin", "win", "bin", "tin", "chin", "spin", "thin"] },
  { combo: "ip", words: ["sip", "lip", "rip", "tip", "dip", "chip", "slip", "trip"] },
  { combo: "ig", words: ["pig", "dig", "wig", "fig", "big", "jig", "twig", "rig"] },
  { combo: "ot", words: ["hot", "pot", "cot", "dot", "got", "not", "spot", "plot"] },
  { combo: "op", words: ["hop", "top", "mop", "cop", "pop", "shop", "stop", "drop"] },
  { combo: "ub", words: ["cub", "tub", "rub", "sub", "hub", "club", "stub", "snub"] },
  { combo: "ug", words: ["bug", "rug", "mug", "hug", "jug", "plug", "snug", "slug"] }
];

const GREEN_SERIES = [
  { combo: "sh", words: ["ship", "shop", "shed", "fish", "dish", "wish", "shell", "brush"] },
  { combo: "ch", words: ["chip", "chop", "chin", "chat", "bench", "lunch", "much", "chair"] },
  { combo: "th", words: ["thin", "this", "that", "bath", "path", "math", "thumb", "three"] },
  { combo: "wh", words: ["when", "what", "whip", "whale", "wheel", "white", "while", "whisk"] },
  { combo: "ph", words: ["phone", "photo", "graph", "elephant", "dolphin", "alphabet", "sphere", "trophy"] },
  { combo: "ee", words: ["tree", "seed", "feet", "green", "sheep", "sleep", "street", "three"] },
  { combo: "oa", words: ["boat", "coat", "soap", "road", "goat", "toad", "float", "throat"] },
  { combo: "ai", words: ["rain", "train", "mail", "tail", "paint", "chair", "chain", "brain"] },
  { combo: "oo", words: ["moon", "book", "look", "cook", "pool", "school", "spoon", "foot"] },
  { combo: "ar", words: ["car", "star", "park", "farm", "hard", "chart", "spark", "garden"] },
  { combo: "or", words: ["fork", "corn", "storm", "short", "horse", "torch", "north", "morning"] },
  { combo: "er", words: ["her", "term", "fern", "verb", "river", "winter", "hammer", "sister"] }
];

const SIGHT_WORDS_GRADE_1 = [
  "a", "and", "are", "at", "big", "blue", "can", "come", "do", "down", "find", "for", "fun", "go",
  "has", "he", "here", "I", "in", "is", "it", "jump", "like", "little", "look", "make", "me", "my",
  "no", "not", "of", "on", "play", "red", "run", "said", "see", "she", "the", "to", "up", "we", "you"
];

const SIGHT_WORDS_GRADE_2 = [
  "about", "after", "again", "always", "around", "because", "before", "best", "both", "buy", "call", "cold",
  "does", "don\u2019t", "fast", "first", "found", "gave", "goes", "green", "its", "made", "many", "off", "or",
  "pull", "read", "right", "sing", "sit", "sleep", "tell", "their", "these", "those", "upon", "us", "use", "very",
  "wash", "which", "why", "wish", "work", "would", "write", "your"
];

const workbookContainer = document.getElementById("workbook");
const gradeFilter = document.getElementById("gradeFilter");
const rowsPerPage = document.getElementById("rowsPerPage");
const regenerateBtn = document.getElementById("regenerateBtn");
const printBtn = document.getElementById("printBtn");
const stats = document.getElementById("stats");

function repeatToLength(words, targetLength) {
  const result = [];
  for (let i = 0; i < targetLength; i += 1) {
    result.push(words[i % words.length]);
  }
  return result;
}

function buildCombinationPage(seriesName, className, combo, words, rowCount) {
  const page = document.createElement("article");
  page.className = "page";

  const rows = repeatToLength(words, rowCount);

  page.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">${combo} Words Practice</h2>
      <span class="tag ${className}">${seriesName}</span>
    </div>
    <table class="practice-table">
      <thead>
        <tr>
          <th>Word List</th>
          <th>Practice Same Words</th>
          <th>Make New Words (${combo})</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (word) => `
          <tr>
            <td>${word}</td>
            <td>
              <div class="practice-line">
                <span class="practice-word">${word}</span>
                <span class="new-word-line"></span>
              </div>
            </td>
            <td><div class="new-word-line"></div></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  return page;
}

function chunkArray(items, chunkSize) {
  const result = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
}

function buildSightWordPage(words, label) {
  const page = document.createElement("article");
  page.className = "page";

  page.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">Sight Words Practice (${label})</h2>
      <span class="tag sight">Sight Words</span>
    </div>
    <table class="practice-table">
      <thead>
        <tr>
          <th>Sight Word</th>
          <th>Practice</th>
          <th>Use in Sentence</th>
        </tr>
      </thead>
      <tbody>
        ${words
          .map(
            (word) => `
          <tr>
            <td>${word}</td>
            <td><div class="practice-line"><span class="practice-word">${word}</span><span class="new-word-line"></span></div></td>
            <td><div class="new-word-line"></div></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
    <div class="sight-grid">
      ${words.map((word) => `<div class="sight-card">${word}</div>`).join("")}
    </div>
  `;

  return page;
}

function renderWorkbook() {
  const rowCount = Number(rowsPerPage.value);
  const gradeValue = gradeFilter.value;

  workbookContainer.innerHTML = "";

  BLUE_SERIES.forEach((item) => {
    workbookContainer.appendChild(buildCombinationPage("Blue Series", "blue", item.combo, item.words, rowCount));
  });

  GREEN_SERIES.forEach((item) => {
    workbookContainer.appendChild(buildCombinationPage("Green Series", "green", item.combo, item.words, rowCount));
  });

  let sightWords = [];
  let sightLabel = "Grade 1 + Grade 2";

  if (gradeValue === "1") {
    sightWords = SIGHT_WORDS_GRADE_1;
    sightLabel = "Grade 1";
  } else if (gradeValue === "2") {
    sightWords = SIGHT_WORDS_GRADE_2;
    sightLabel = "Grade 2";
  } else {
    sightWords = [...SIGHT_WORDS_GRADE_1, ...SIGHT_WORDS_GRADE_2];
  }

  const sightChunks = chunkArray(sightWords, rowCount);
  sightChunks.forEach((chunk, index) => {
    workbookContainer.appendChild(buildSightWordPage(chunk, `${sightLabel} - Page ${index + 1}`));
  });

  const totalCombinationPages = BLUE_SERIES.length + GREEN_SERIES.length;
  const totalSightPages = sightChunks.length;
  stats.textContent = `Total pages: ${totalCombinationPages + totalSightPages} (${totalCombinationPages} combinations + ${totalSightPages} sight words)`;
}

regenerateBtn.addEventListener("click", renderWorkbook);
printBtn.addEventListener("click", () => window.print());
gradeFilter.addEventListener("change", renderWorkbook);
rowsPerPage.addEventListener("change", renderWorkbook);

renderWorkbook();
