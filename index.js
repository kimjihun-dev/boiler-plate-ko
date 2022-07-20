const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/user");

const config = require("./config/key");

// 데이터 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// json 파일 분석용
app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB 연결완료!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("노드js"));

app.post("/register", (req, res) => {
  // 회원가입시 필요한 정보를 가져오면 db 에 넣어준다
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
