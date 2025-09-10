const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World! 🚀");
});

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
