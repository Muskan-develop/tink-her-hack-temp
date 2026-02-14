let transcriptText = "";

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.lang = "en-US";

const importantWords = [
  "important",
  "remember",
  "exam",
  "definition",
  "most important",
  "this will come"
];

const interactionWords = [
  "any doubts",
  "any doubt",
  "is that clear",
  "do you understand"
];

function highlightText(text) {

  
  importantWords.forEach(word => {
    const regex = new RegExp(`(${word})`, "gi");
    text = text.replace(regex, `<span class="highlight">$1</span>`);
  });

  
  interactionWords.forEach(word => {
  const flexibleWord = word.replace("s", "s?"); // makes 'doubt' or 'doubts' work
  const regex = new RegExp(flexibleWord, "gi");
  text = text.replace(regex, `<span class="interaction">$&</span>`);
});

  return text;
}

recognition.onresult = function(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {

    const result = event.results[i][0];
    const spokenText = result.transcript;
    const confidence = result.confidence;

    // 🔴 Emphasis Detection (Low confidence = possible strong tone)
    if (confidence < 0.6) {
      transcriptText += `<span class="emphasis">${spokenText}</span> `;
    } else {
      transcriptText += spokenText + " ";
    }
  }

  document.getElementById("transcript").innerHTML =
    highlightText(transcriptText);
};

function startRecording() {
  recognition.start();
}

function stopRecording() {
  recognition.stop();
}

async function generateSummary() {
  const response = await fetch("/generate-summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: transcriptText })
  });

  const data = await response.json();
  document.getElementById("summary").innerText = data.summary;
}

async function saveSession() {
  const title = document.getElementById("title").value;
  const summary = document.getElementById("summary").innerText;

  await fetch("/save-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      transcript: transcriptText,
      summary
    })
  });

  alert("Session Saved!");
}

function downloadNotes() {
  const content = document.getElementById("transcript").innerText +
                  "\n\nSummary:\n" +
                  document.getElementById("summary").innerText;

  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "lecture_notes.txt";
  link.click();
}

async function submitDoubt() {
  const doubt = document.getElementById("doubtInput").value;

  if (doubt.trim() === "") {
    alert("Please enter your doubt.");
    return;
  }

  await fetch("/submit-doubt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ doubt })
  });

  alert("Doubt sent to teacher!");

  document.getElementById("doubtInput").value = "";
}