const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const { title } = require("process");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const filePath = path.join(__dirname, "views", "index.ejs");
    ejs.renderFile(filePath, { name: "김사과" }, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("서버 오류");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
    }); //비동기함수: ejs 파일 서버 작동 가능케 파싱?
  } else if (req.url === "/users") {
    const filePath = path.join(__dirname, "views", "users.ejs");
    const users = ["김사과", "반하나", "이메론"];
    ejs.renderFile(filePath, { users }, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("서버 오류");
        return;
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      }
    });
  } else if (req.url === "/posts") {
    const filePath = path.join(__dirname, "views", "posts.ejs");
    const posts = [
      { title: "0 관리자", content: "게시판 시작" },
      { title: "첫 글", content: "나오나?" },
    ];
    ejs.renderFile(filePath, { posts }, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("서버 오류");
        return;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("페이지를 찾을 수 없습니다.");
  }
});

server.listen(3000, () => {
  console.log("서버 실행 중이다 짜쌰");
});
