const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://zodlab:1212aaqq@cluster0.tgzp8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB 연결완료!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello node world!!"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
