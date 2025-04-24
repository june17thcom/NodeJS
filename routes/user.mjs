import express from "express";
const router = express.Router(); //익스프레스 내 라우터 클래스로 객체 생성

router.use((req, res, next) => {
  console.log("users에 존재하는 미들웨어");
  next();
});

router.get("/", (req, res) => {
  res.status(200).send("GET: /users 회원정보 보기");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /users 회원가입");
});

router.delete("/", (req, res) => {
  res.status(201).send("DELETE: /users:id 회원 탈퇴");
});

router.put("/", (req, res) => {
  res.status(200).send("PUT: /users:id 정보 수정");
});
export default router;
