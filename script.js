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
const downloadWordBtn = document.getElementById("downloadWordBtn");
const combinationInput = document.getElementById("combinationInput");
const applyCustomBtn = document.getElementById("applyCustomBtn");
const loadDefaultsBtn = document.getElementById("loadDefaultsBtn");
const editorMessage = document.getElementById("editorMessage");
const stats = document.getElementById("stats");
const buildLabel = document.getElementById("buildLabel");

let activeCombinations = [];

function showEditorMessage(message, isError = false) {
  editorMessage.textContent = message;
  editorMessage.classList.toggle("error", isError);
}

function setBuildLabel() {
  if (!buildLabel) {
    return;
  }

  const scriptTag = document.querySelector('script[src*="script.js"]');
  if (!scriptTag) {
    buildLabel.textContent = " | Build: unknown";
    return;
  }

  const scriptSrc = scriptTag.getAttribute("src") || "";
  const versionMatch = scriptSrc.match(/[?&]v=([^&]+)/);
  const version = versionMatch ? versionMatch[1] : "unversioned";
  buildLabel.textContent = ` | Build: ${version}`;
}

function toEditorLines(combinations) {
  return combinations
    .map((item) => `${item.seriesName}|${item.combo}|${item.words.join(",")}`)
    .join("\n");
}

function buildDefaultCombinations() {
  const blue = BLUE_SERIES.map((item) => ({
    seriesName: "Blue",
    className: "blue",
    combo: item.combo,
    words: item.words
  }));

  const green = GREEN_SERIES.map((item) => ({
    seriesName: "Green",
    className: "green",
    combo: item.combo,
    words: item.words
  }));

  return [...blue, ...green];
}

function mapSeriesToClass(seriesName) {
  const normalized = seriesName.trim().toLowerCase();
  if (normalized === "blue") {
    return "blue";
  }

  if (normalized === "green") {
    return "green";
  }

  return "custom";
}

function parseCustomCombinations(inputText) {
  const lines = inputText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    throw new Error("Please add at least one combination line.");
  }

  return lines.map((line, index) => {
    const normalizedLine = line.replace(/\s*[-:]\s*/, "|");
    const parts = normalizedLine.split("|").map((part) => part.trim());

    let seriesNameRaw = "Custom";
    let comboRaw = "";
    let wordsRaw = "";

    if (parts.length === 3) {
      [seriesNameRaw, comboRaw, wordsRaw] = parts;
    } else if (parts.length === 2) {
      [comboRaw, wordsRaw] = parts;
    } else {
      throw new Error(`Line ${index + 1}: use Series|Combination|word1,word2 OR Combination|word1,word2`);
    }

    const words = wordsRaw
      .split(/[,;]+/)
      .map((word) => word.trim())
      .filter(Boolean);

    if (!seriesNameRaw || !comboRaw || words.length === 0) {
      throw new Error(`Line ${index + 1}: series, combination, and words are required.`);
    }

    const cleanSeries = seriesNameRaw[0].toUpperCase() + seriesNameRaw.slice(1).toLowerCase();
    return {
      seriesName: cleanSeries,
      className: mapSeriesToClass(cleanSeries),
      combo: comboRaw,
      words
    };
  });
}

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

  activeCombinations.forEach((item) => {
    const label = item.seriesName.endsWith("Series") ? item.seriesName : `${item.seriesName} Series`;
    workbookContainer.appendChild(buildCombinationPage(label, item.className, item.combo, item.words, rowCount));
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

  const totalCombinationPages = activeCombinations.length;
  const totalSightPages = sightChunks.length;
  stats.textContent = `Total pages: ${totalCombinationPages + totalSightPages} (${totalCombinationPages} combinations + ${totalSightPages} sight words)`;
}

function downloadWordDocument() {
  const workbookHtml = workbookContainer.innerHTML;
  if (!workbookHtml.trim()) {
    showEditorMessage("Generate workbook pages before downloading.", true);
    return;
  }

  const documentHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>Montessori Workbook</title>
        <style>
          body { font-family: Calibri, Arial, sans-serif; color: #16324f; }
          .page { page-break-after: always; border: 1px solid #bfd6ea; padding: 12px; margin-bottom: 12px; }
          .page-title { margin: 0 0 8px; font-size: 20px; }
          .practice-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
          .practice-table th, .practice-table td { border: 1px solid #89adc9; padding: 6px; height: 30px; text-align: left; vertical-align: middle; }
          .practice-table th { background: #f2f8fd; }
          .practice-line, .new-word-line { border-bottom: 1px dashed #6c93b2; min-height: 16px; }
          .practice-word { font-weight: 700; color: #2f5a7c; }
          .sight-grid { margin-top: 8px; display: table; width: 100%; }
          .sight-card { border: 1px dashed #7e9fb9; display: inline-block; width: 22%; padding: 6px; margin: 4px; text-align: center; font-weight: 700; }
          .tag { font-size: 11px; font-weight: 700; }
        </style>
      </head>
      <body>
        <h1>Montessori Spelling Workbook</h1>
        ${workbookHtml}
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", documentHtml], { type: "application/msword" });
  const url = URL.createObjectURL(blob);

  // Safari on some devices ignores download attribute for blob links; open as fallback.
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    window.open(url, "_blank");
    showEditorMessage("Opened document preview. Use Share/Save to store it as a Word file.", false);
    return;
  }

  const link = document.createElement("a");
  link.href = url;
  link.download = "montessori-workbook.doc";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showEditorMessage("Downloaded editable Word file (.doc).", false);
}

function applyCustomCombinations() {
  try {
    activeCombinations = parseCustomCombinations(combinationInput.value);
    renderWorkbook();
    showEditorMessage(`Applied ${activeCombinations.length} custom combinations.`, false);
    if (!activeCombinations.length) {
      alert("No valid combinations were applied. Please check your input format.");
    }
  } catch (error) {
    showEditorMessage(error.message, true);
    alert(`Could not apply combinations: ${error.message}`);
  }
}

function loadDefaultCombinations() {
  activeCombinations = buildDefaultCombinations();
  combinationInput.value = toEditorLines(activeCombinations);
  renderWorkbook();
  showEditorMessage("Loaded default Blue and Green combinations.", false);
}

if (regenerateBtn) {
  regenerateBtn.addEventListener("click", renderWorkbook);
}
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}
if (downloadWordBtn) {
  downloadWordBtn.addEventListener("click", downloadWordDocument);
}
if (applyCustomBtn) {
  applyCustomBtn.addEventListener("click", applyCustomCombinations);
}
if (loadDefaultsBtn) {
  loadDefaultsBtn.addEventListener("click", loadDefaultCombinations);
}
if (gradeFilter) {
  gradeFilter.addEventListener("change", renderWorkbook);
}
if (rowsPerPage) {
  rowsPerPage.addEventListener("change", renderWorkbook);
}

// Provide global fallbacks for inline onclick handlers.
window.applyWorkbookCustom = applyCustomCombinations;
window.downloadWorkbookWord = downloadWordDocument;

setBuildLabel();
loadDefaultCombinations();
