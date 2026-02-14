const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// =======================
// Database Connection
// =======================

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // add password if you have one
  database: "classroom_ai"
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// =======================
// Express Setup
// =======================

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// =======================
// Generate Summary API
// =======================

app.post("/generate-summary", (req, res) => {
  const transcript = req.body.text;

  if (!transcript) {
    return res.status(400).json({ error: "No transcript provided" });
  }

  const sentences = transcript.split(".");
  const summary = sentences.slice(0, 3).join(".");

  res.json({ summary });
});

// =======================
// Save Lecture Session
// =======================

app.post("/save-session", (req, res) => {
  const { title, transcript, summary } = req.body;

  if (!title || !transcript || !summary) {
    return res.status(400).send("Missing required fields");
  }

  const sql =
    "INSERT INTO sessions (title, transcript, summary) VALUES (?, ?, ?)";

  db.query(sql, [title, transcript, summary], (err, result) => {
    if (err) {
      console.error("Error saving session:", err);
      return res.status(500).send("Database error");
    }

    res.send("Session Saved Successfully");
  });
});

// =======================
// Submit Doubt API
// =======================

app.post("/submit-doubt", (req, res) => {
  const { doubt } = req.body;

  if (!doubt) {
    return res.status(400).send("Doubt is required");
  }

  const sql = "INSERT INTO doubts (doubt) VALUES (?)";

  db.query(sql, [doubt], (err, result) => {
    if (err) {
      console.error("Error saving doubt:", err);
      return res.status(500).send("Database error");
    }

    res.send("Doubt submitted successfully");
  });
});

// =======================
// Get Doubts (Teacher Dashboard)
// =======================

app.get("/get-doubts", (req, res) => {
  db.query("SELECT * FROM doubts ORDER BY created_at DESC", (err, results) => {
    if (err) {
      console.error("Error fetching doubts:", err);
      return res.status(500).send("Database error");
    }

    res.json(results);
  });
});

// =======================
// Start Server (LAST)
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});