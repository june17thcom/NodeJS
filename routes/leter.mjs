import express from "express";
const router = express.Router(); //익스프레스 내 라우터 클래스로 객체 생성

router.use((req, res, next) => {
  console.log("leter에 존재하는 미들웨어");
  next();
});

router.get("/", (req, res) => {
  res.status(200).send("GET: 모든 게시글 조회합니다.");
});

router.post("/", (req, res) => {
  res.status(201).send(`POST: 게시글 등록됨: ${title}`);
});

router.get("/:id", (req, res) => {
  const { title, content } = req.body;
  res.status(201).send(`GET: ${req.params.id}번 게시물을 조회합니다.`);
});

router.put("/:id", (req, res) => {
  const { title, content } = req.body;
  res.status(201).send(`PUT: ${req.params.id}번 게시물을 수정했습니다.`);
});

router.delete("/:id", (req, res) => {
  res.status(201).send(`DELETE: ${req.params.id}번 게시글을 삭제했습니다.`);
});

export default router;
