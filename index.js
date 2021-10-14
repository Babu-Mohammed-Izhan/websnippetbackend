require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello There");
});

app.listen(3001, () => {
  console.log("Connected server to PORT 3001");
});
