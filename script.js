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

const EXTERNAL_DICTIONARY_URL = "https://cdn.jsdelivr.net/gh/dwyl/english-words@master/words_alpha.txt";
const COMMON_WORDS_URL = "https://cdn.jsdelivr.net/gh/first20hours/google-10000-english@master/google-10000-english-no-swears.txt";

const COMBO_PRIORITY_WORDS = {
  nk: ["bank", "bunk", "sink", "pink", "wink", "tank", "thank", "think", "drink", "stink", "trunk", "blank", "blink", "honk"],
  sh: ["ship", "shop", "shut", "shed", "fish", "dish", "wish", "wash", "brush", "flash"],
  ch: ["chat", "chip", "chin", "chop", "much", "lunch", "bench", "beach", "peach", "latch"],
  th: ["thin", "this", "that", "three", "bath", "path", "math", "teeth", "thumb", "with"],
  oa: ["boat", "coat", "goat", "soap", "road", "toad", "toast", "float", "coach"],
  ai: ["rain", "train", "mail", "tail", "paint", "chain", "brain", "trail", "snail", "wait"],
  ee: ["tree", "seed", "feet", "green", "sheep", "sleep", "street", "cheek", "beep"],
  oo: ["book", "look", "cook", "foot", "moon", "spoon", "pool", "school", "tooth", "room"]
};

const WORD_BANK = [
  "cat", "bat", "hat", "mat", "rat", "flat", "chat", "that", "sat", "pat", "fat", "trap",
  "can", "fan", "man", "pan", "ran", "tan", "van", "sand", "plant", "handle", "animal",
  "cap", "map", "nap", "tap", "lap", "snap", "clap", "happy", "apple", "grape",
  "pin", "fin", "win", "chin", "spin", "thin", "print", "bring", "inside",
  "sip", "lip", "rip", "tip", "dip", "chip", "slip", "trip", "skip", "grip",
  "pig", "dig", "wig", "fig", "big", "twig", "gift", "light", "night",
  "hot", "pot", "cot", "dot", "spot", "plot", "clock", "stone", "robot",
  "hop", "top", "mop", "cop", "pop", "shop", "stop", "drop", "crop", "frog",
  "cub", "tub", "rub", "club", "snub", "bubble", "subway", "public",
  "bug", "rug", "mug", "hug", "jug", "plug", "snug", "slug", "thug", "drum",
  "ship", "shop", "shed", "fish", "dish", "wish", "shell", "brush", "shark", "shine", "shut",
  "chip", "chop", "chin", "chat", "bench", "lunch", "chair", "chick", "chase", "cheese",
  "thin", "this", "that", "bath", "path", "math", "thumb", "three", "thunder", "thirsty",
  "when", "what", "whip", "whale", "wheel", "white", "while", "whisk", "whisper",
  "phone", "photo", "graph", "elephant", "dolphin", "alphabet", "sphere", "trophy",
  "tree", "seed", "feet", "green", "sheep", "sleep", "street", "three", "cheek", "beet",
  "boat", "coat", "soap", "road", "goat", "toad", "float", "throat", "coach", "toasty",
  "rain", "train", "mail", "tail", "paint", "chair", "chain", "brain", "trail", "afraid",
  "moon", "book", "look", "cook", "pool", "school", "spoon", "foot", "tooth", "room",
  "car", "star", "park", "farm", "hard", "chart", "spark", "garden", "market", "shark",
  "fork", "corn", "storm", "short", "horse", "torch", "north", "morning", "forest", "sport",
  "her", "term", "fern", "verb", "river", "winter", "hammer", "sister", "butter", "number"
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
let externalDictionaryWords = [];
let externalDictionaryLoaded = false;
let externalDictionaryLoadPromise = null;
let commonWordsSet = new Set();
let gradeStandardWords = [];

function showEditorMessage(message, isError = false) {
  editorMessage.textContent = message;
  editorMessage.classList.toggle("error", isError);
}

async function ensureExternalDictionaryLoaded() {
  if (externalDictionaryLoaded) {
    return;
  }

  if (externalDictionaryLoadPromise) {
    await externalDictionaryLoadPromise;
    return;
  }

  externalDictionaryLoadPromise = (async () => {
    try {
      showEditorMessage("Loading grade-standard word sources (first time may take a few seconds)...", false);

      const [dictionaryResponse, commonResponse] = await Promise.all([
        fetch(EXTERNAL_DICTIONARY_URL),
        fetch(COMMON_WORDS_URL)
      ]);

      if (!dictionaryResponse.ok) {
        throw new Error(`Dictionary load failed (${dictionaryResponse.status})`);
      }
      if (!commonResponse.ok) {
        throw new Error(`Common word list load failed (${commonResponse.status})`);
      }

      const text = await dictionaryResponse.text();
      const commonText = await commonResponse.text();

      commonWordsSet = new Set(
        commonText
          .split("\n")
          .map((word) => word.trim().toLowerCase())
          .filter((word) => /^[a-z]+$/.test(word))
      );

      externalDictionaryWords = text
        .split("\n")
        .map((word) => word.trim().toLowerCase())
        .filter((word) => /^[a-z]{2,15}$/.test(word));

      gradeStandardWords = uniqueWords(
        externalDictionaryWords
          .filter((word) => commonWordsSet.has(word))
          .filter((word) => word.length >= 3 && word.length <= 9)
      );

      externalDictionaryLoaded = true;
      showEditorMessage(
        `Grade-standard dictionary loaded (${gradeStandardWords.length.toLocaleString()} filtered words).`,
        false
      );
    } catch (error) {
      showEditorMessage(
        `Could not load external word sources. Using built-in list only. (${error.message})`,
        true
      );
    }
  })();

  await externalDictionaryLoadPromise;
}

function setBuildLabel() {
  if (!buildLabel) {
    return;
  }

  const scriptTag = document.getElementById("appScript") || document.querySelector('script[src*="script"]');
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
    .map((item) => {
      const base = `${item.seriesName}|${item.combo}|${item.words.join(",")}`;
      return item.rowCount ? `${base}|${item.rowCount}` : base;
    })
    .join("\n");
}

function buildDefaultCombinations() {
  const blue = BLUE_SERIES.map((item) => ({
    seriesName: "Blue",
    className: "blue",
    combo: item.combo,
    words: item.words,
    rowCount: null
  }));

  const green = GREEN_SERIES.map((item) => ({
    seriesName: "Green",
    className: "green",
    combo: item.combo,
    words: item.words,
    rowCount: null
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
    let rowCountRaw = "";

    if (parts.length === 4) {
      [seriesNameRaw, comboRaw, wordsRaw, rowCountRaw] = parts;
    } else if (parts.length === 3) {
      [seriesNameRaw, comboRaw, wordsRaw] = parts;
    } else if (parts.length === 2) {
      [comboRaw, wordsRaw] = parts;
    } else {
      throw new Error(`Line ${index + 1}: use Series|Combination|word1,word2|rows OR Combination|word1,word2`);
    }

    const words = wordsRaw
      .split(/[,;]+/)
      .map((word) => word.trim())
      .filter(Boolean);

    if (!seriesNameRaw || !comboRaw || words.length === 0) {
      throw new Error(`Line ${index + 1}: series, combination, and words are required.`);
    }

    let rowCount = null;
    if (rowCountRaw) {
      const parsed = Number(rowCountRaw);
      if (!Number.isInteger(parsed) || parsed <= 0) {
        throw new Error(`Line ${index + 1}: rows must be a positive whole number.`);
      }
      rowCount = parsed;
    }

    const cleanSeries = seriesNameRaw[0].toUpperCase() + seriesNameRaw.slice(1).toLowerCase();
    return {
      seriesName: cleanSeries,
      className: mapSeriesToClass(cleanSeries),
      combo: comboRaw,
      words,
      rowCount
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

function uniqueWords(words) {
  return [...new Set(words.filter(Boolean))];
}

function isMontessoriGradeWord(word, combo) {
  const lowered = word.toLowerCase();
  if (!/^[a-z]+$/.test(lowered)) {
    return false;
  }

  if (lowered.length < 3 || lowered.length > 9) {
    return false;
  }

  if (!lowered.includes(combo)) {
    return false;
  }

  // Reject advanced morphology to keep early-elementary readability.
  if (/(tion|sion|ture|ment|ness|ingly|ology|ation|fully|lessly|ization)/.test(lowered)) {
    return false;
  }

  const vowelGroups = (lowered.match(/[aeiouy]+/g) || []).length;
  if (vowelGroups > 3) {
    return false;
  }

  if (/[^aeiouy]{4,}/.test(lowered)) {
    return false;
  }

  return true;
}

function buildPatternFallbackCandidates(combo, existingWords) {
  const prefixSet = new Set(["b", "c", "d", "f", "g", "h", "l", "m", "n", "p", "r", "s", "t", "w", "bl", "cl", "fl", "pl", "sl", "st", "tr", "dr", "gr"]);
  const suffixSet = new Set(["a", "e", "i", "o", "u", "ed", "er", "y", "s", "t", "k", "n", "nd", "nt", "mp", "nk", "sh", "ch", "th"]);

  existingWords.forEach((sample) => {
    const lowered = sample.toLowerCase();
    const idx = lowered.indexOf(combo);
    if (idx === -1) {
      return;
    }

    const samplePrefix = lowered.slice(0, idx);
    const sampleSuffix = lowered.slice(idx + combo.length);
    if (samplePrefix) {
      prefixSet.add(samplePrefix);
    }
    if (sampleSuffix) {
      suffixSet.add(sampleSuffix);
    }
  });

  const out = [];
  prefixSet.forEach((p) => {
    out.push(`${p}${combo}`);
    suffixSet.forEach((s) => out.push(`${p}${combo}${s}`));
  });

  suffixSet.forEach((s) => {
    out.push(`${combo}${s}`);
  });

  return uniqueWords(out).filter((word) => /^[a-z]+$/.test(word));
}

function generateNewWords(combo, existingWords, rowCount) {
  const loweredCombo = combo.trim().toLowerCase().replace(/[^a-z]/g, "");
  if (!loweredCombo) {
    return [];
  }

  const existingSet = new Set(existingWords.map((word) => word.toLowerCase()));
  const sampleAvgLength = Math.round(
    existingWords.reduce((sum, word) => sum + word.length, 0) / Math.max(existingWords.length, 1)
  );

  const sourceWords = externalDictionaryLoaded && gradeStandardWords.length
    ? [...gradeStandardWords]
    : [...WORD_BANK, ...SIGHT_WORDS_GRADE_1, ...SIGHT_WORDS_GRADE_2].map((word) => word.toLowerCase());

  const priorityWords = (COMBO_PRIORITY_WORDS[loweredCombo] || []).map((word) => word.toLowerCase());
  const mergedSource = uniqueWords([...priorityWords, ...sourceWords]);

  const scoredCandidates = mergedSource
    .filter((word) => word.toLowerCase().includes(loweredCombo))
    .filter((word) => isMontessoriGradeWord(word, loweredCombo))
    .filter((word) => !existingSet.has(word.toLowerCase()))
    .map((word) => {
      const lowered = word.toLowerCase();
      const comboIndex = lowered.indexOf(loweredCombo);
      let score = 0;
      score += 12 - Math.min(Math.abs(word.length - sampleAvgLength), 12);
      if (priorityWords.includes(lowered)) {
        score += 8;
      }
      const position = comboIndex === 0
        ? "start"
        : comboIndex === lowered.length - loweredCombo.length
          ? "end"
          : "middle";

      if (position === "middle") {
        score += 2;
      }

      return { word, score, position };
    })
    .sort((a, b) => b.score - a.score);

  const pools = {
    start: scoredCandidates.filter((item) => item.position === "start").map((item) => item.word),
    middle: scoredCandidates.filter((item) => item.position === "middle").map((item) => item.word),
    end: scoredCandidates.filter((item) => item.position === "end").map((item) => item.word)
  };

  const result = [];
  const used = new Set();
  const order = ["middle", "start", "end"];

  // Round-robin to enforce beginning/middle/end variation where available.
  while (result.length < rowCount) {
    let addedInPass = false;

    order.forEach((bucket) => {
      if (result.length >= rowCount) {
        return;
      }

      while (pools[bucket].length) {
        const candidate = pools[bucket].shift();
        const lowered = candidate.toLowerCase();
        if (!used.has(lowered)) {
          const last = result[result.length - 1] || "";
          // Prefer changing starting letter across adjacent selections.
          if (!last || last[0] !== candidate[0] || pools[bucket].length === 0) {
            result.push(candidate);
            used.add(lowered);
            addedInPass = true;
            break;
          }
        }
      }
    });

    if (!addedInPass) {
      break;
    }
  }

  return result.slice(0, rowCount);
}

function buildWordListForRows(combo, sampleWords, rowCount) {
  const normalizedSamples = uniqueWords(sampleWords.map((word) => word.trim()).filter(Boolean));

  if (normalizedSamples.length >= rowCount) {
    return normalizedSamples.slice(0, rowCount);
  }

  const additionalNeeded = rowCount - normalizedSamples.length;
  const generatedWords = generateNewWords(combo, normalizedSamples, additionalNeeded * 5);
  const existingSet = new Set(normalizedSamples.map((word) => word.toLowerCase()));

  const additionalWords = [];
  generatedWords.forEach((word) => {
    const lowered = word.toLowerCase();
    if (!existingSet.has(lowered) && additionalWords.length < additionalNeeded) {
      additionalWords.push(word);
      existingSet.add(lowered);
    }
  });

  const rows = [...normalizedSamples, ...additionalWords].slice(0, rowCount);
  while (rows.length < rowCount) {
    rows.push("");
  }

  return rows;
}

function buildCombinationPage(seriesName, className, combo, words, rowCount) {
  const page = document.createElement("article");
  page.className = "page";

  const rows = buildWordListForRows(combo, words, rowCount);

  page.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">${combo} words</h2>
      <span class="tag ${className}">${seriesName}</span>
    </div>
    <table class="practice-table">
      <thead>
        <tr>
          <th>${combo} words - list</th>
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
            <td><div class="new-word-line"></div></td>
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
    <table class="practice-table sight-table">
      <colgroup>
        <col class="sight-col-word" />
        <col class="sight-col-practice" />
        <col class="sight-col-sentence" />
      </colgroup>
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
            <td><div class="new-word-line"></div></td>
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

function renderWorkbook() {
  const rowCount = Number(rowsPerPage.value);
  const gradeValue = gradeFilter.value;

  workbookContainer.innerHTML = "";

  activeCombinations.forEach((item) => {
    const label = item.seriesName.endsWith("Series") ? item.seriesName : `${item.seriesName} Series`;
    const comboRows = item.rowCount || rowCount;
    workbookContainer.appendChild(buildCombinationPage(label, item.className, item.combo, item.words, comboRows));
  });

  const shortRows = activeCombinations
    .map((item) => {
      const comboRows = item.rowCount || rowCount;
      const list = buildWordListForRows(item.combo, item.words, comboRows);
      const emptyCount = list.filter((word) => !word).length;
      return emptyCount > 0 ? `${item.combo}: ${emptyCount} row(s) need manual fill` : "";
    })
    .filter(Boolean);

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

  sightWords = uniqueWords(sightWords);

  const sightChunks = chunkArray(sightWords, rowCount);
  sightChunks.forEach((chunk, index) => {
    workbookContainer.appendChild(buildSightWordPage(chunk, `${sightLabel} - Page ${index + 1}`));
  });

  const totalCombinationPages = activeCombinations.length;
  const totalSightPages = sightChunks.length;
  stats.textContent = `Total pages: ${totalCombinationPages + totalSightPages} (${totalCombinationPages} combinations + ${totalSightPages} sight words)`;

  if (shortRows.length) {
    showEditorMessage(`Note: Not enough strict dictionary matches for some combinations. ${shortRows.join(" | ")}`, true);
  }
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
  return (async () => {
    try {
      await ensureExternalDictionaryLoaded();
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
  })();
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
ensureExternalDictionaryLoaded();
loadDefaultCombinations();
