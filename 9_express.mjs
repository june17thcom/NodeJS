//import { name } from "ejs";
import express from "express";
const app = express();
app.use((req, res, next) => {
  res.setHeader("node-msg", "hi, node js.");
  // get 방식으로
  next();
});

//get 방식 접근 시 연결
app.get("/", (req, res, next) => {
  //next는 선택적으로 사용하지만, 일종의 continue와 같은 역할/
  res.send("<h2>익스프레스 서버로 만든 첫 번째 페이지</h2>");
  next();
});

app.get("/hello", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ userid: "apple", name: "김사과", age: 22 });
  next();
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
