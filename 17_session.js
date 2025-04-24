//import express from "express";
//import session from "express-session";

const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

/*
secret: 세션 ID 서명용 키
resave: 매 요청 시 자동 저장 여부 
saveUninitialized: 초기 빈 세션(대충 익명세션 같은 개념) 저장 여부
cookie.secure: HTTPS에서만 전송
 */

app.use(
  session({
    secret: "!QAZXSW@",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.post("/login", (req, res) => {
  const { userid, password } = req.body;

  //로그인 성공 시 ↓
  req.session.user = { userid };
  res.send(`로그인 성공! ${userid}`);
});

app.get("/me", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
});
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("로그아웃 되셨습니다.");
  });
});

app.listen(3000, () => {
  console.log("로그인 서버 실행 중");
});
