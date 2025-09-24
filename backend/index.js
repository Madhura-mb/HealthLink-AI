// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("HealthLink-AI backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Backend server is listening on port ${PORT}`);
});
