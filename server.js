// server/server.js

const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432, // PostgreSQL default port
});

// Middleware
app.use(bodyParser.json());

// Routes
// Example route to get all patient interactions
app.get("/api/patient-interactions", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM PatientInteractions");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching interactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
