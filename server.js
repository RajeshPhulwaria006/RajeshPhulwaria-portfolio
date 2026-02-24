const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs/promises");
const path = require("path");

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const DATA_DIR = path.join(__dirname, "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/health", (_, res) => {
  res.status(200).json({
    ok: true,
    service: "raj-portfolio-backend",
    timestamp: new Date().toISOString()
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "name, email, and message are required."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        ok: false,
        error: "Please provide a valid email address."
      });
    }

    const entry = {
      id: Date.now().toString(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      subject: subject ? String(subject).trim() : "",
      message: String(message).trim(),
      createdAt: new Date().toISOString()
    };

    await fs.mkdir(DATA_DIR, { recursive: true });

    let existing = [];
    try {
      const raw = await fs.readFile(MESSAGES_FILE, "utf-8");
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }

    existing.push(entry);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(existing, null, 2), "utf-8");

    return res.status(201).json({
      ok: true,
      message: "Message received successfully."
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Something went wrong while saving your message."
    });
  }
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
