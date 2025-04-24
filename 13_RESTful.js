const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json()); //클라이언트-서버간 데이터 처리 json 고장

app.get("/posts", (req, res) => {
  res.send("모든 게시글 조회합니다.");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  res.send(`게시글 등록됨: ${title}`);
});

//http://127.0.0.1:3000/posts/:id
//id 번 글을 조회
app.get("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 조회합니다.`);
});

app.put("/posts/:id", (req, res) => {
  const { title, content } = req.body;
  res.send(`${req.params.id}번 게시물을 수정했습니다. (${title})`);
});

app.delete("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 게시글을 삭제했습니다.`);
});

app.listen(port, () => {
  console.log("서버 실행 중 rest");
});
