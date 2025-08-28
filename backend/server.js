const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const PORT = 5000; 

app.use(cors());

app.get("/api/candidates", (req, res) => {
  const results = [];
  fs.createReadStream("candidates.csv") 
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

app.get("/", (req, res) => {
  res.send(" Backend is running. Use /api/candidates to fetch data.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
