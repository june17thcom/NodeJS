import express from "express";
const app = express();
// app.use: 위치에 따라 먼저 실행됨
app.use(express.urlencoded({ extended: true })); //post 요청용(form 형식 데이터 받을 준비)

app.post("/login", (req, res) => {
  //기존 html 안 쓰고 postman과 연결됨
  const { userid, userpw } = req.body;
  console.log("아이디: ", userid);
  console.log("비밀번호: ", userpw);
  res.send(`아이디: ${userid}, 비밀번호: ${userpw}`);
});

app.listen(3000, () => {
  console.log("서버 실행 중!");
});
