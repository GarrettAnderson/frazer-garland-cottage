const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "cottage_db",
  },
  console.log(`Connected to cottage_db database.`)
);

// Create a project
app.post("/api/new-project", cors(), ({ body }, res) => {
  const sql = `INSERT INTO projects (project_details) VALUES (?)`;
  const params = [body.project_details];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// Read the projects
app.get("/api/projects", cors(), (req, res) => {
  const sql = `SELECT * FROM projects`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: rows });
  });
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
