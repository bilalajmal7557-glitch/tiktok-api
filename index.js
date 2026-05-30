require("dotenv").config();

const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
