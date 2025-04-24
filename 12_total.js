const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //실제 폴더명
app.use("/static", express.static("public")); //satatic url 접근,
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//http://localhost:3000/
app.get("/", (req, res) => {
  res.send("<h2>홈페이지: 기능 테스트용</h2>");
});

//http://localhost:3000/user/10
app.get("/user/:id", (req, res) => {
  res.send(`요청한 사용자 ID는 ${req.params.id}입니다.`);
});

//http://localhost:3000/search?keyword=안녕하세요&number=100
//베이스url/조건?키워드=''/값=''이 공통형
app.get("/search", (req, res) => {
  const { keyword, number } = req.query;
  res.send(`검색어: ${keyword}, 숫자: ${number}`);
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.send(`이름: ${name}, 나이: ${age}`);
});

app.get("/hello", (req, res) => {
  res.render("hello", { name: you });
});

app.get("/posts", (req, res) => {
  const posts = [
    { title: "첫 번째 글", content: "내용입니다." },
    { title: "두 번째 글", content: "express는 정말 편하네요." },
  ];
  res.render("posts", { post });
});

app.listen(port, () => {
  console.log("서버 실행 중");
});
