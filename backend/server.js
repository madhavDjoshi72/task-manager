const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = []; // Simple in-memory DB (use MySQL/RDS in AWS for production)

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = { id: tasks.length + 1, name: req.body.name };
  tasks.push(task);
  res.json(task);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
