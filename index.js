require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Snippet = require("./models/snippet");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello There");
});

app.get("/api/snip", async (req, res) => {
  const data = await Snippet.find({});
  res.json(data);
});

app.post("/api/snip", async (req, res) => {
  const snipdata = req.body;
  console.log(req.body);
  if (snipdata) {
    const snippet = new Snippet({
      title: snipdata.title,
      language: snipdata.language,
      code: snipdata.code,
      author: snipdata.author,
    });

    const savedsnippet = await snippet.save();

    res.json(savedsnippet);
  }
});

app.listen(3001, () => {
  console.log("Connected server to PORT 3001");
});
