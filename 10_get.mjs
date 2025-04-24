import express from "express";
import fs from "fs";
//const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});

// http://127.0.0.1:5500/login?userid=apple&userpw=1234
app.get("/login", (req, res) => {
  console.log(res.query);
  console.log("아이디: ", req.query.userid);
  console.log("비밀번호: ", req.query.userpw);
  console.log("login은 GET으로.");
});

app.get("/login1", (req, res) => {
  console.log("login1도 GET으로.");
  console.log(res.query);
  console.log("아이디: ", req.query.userid);
  console.log("비밀번호: ", req.query.userpw);
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
