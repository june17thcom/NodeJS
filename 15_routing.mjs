import express from "express";
import userRouter from "./routes/user.mjs";
import userLeter from "./routes/leter.mjs";

const app = express();
app.use(express.json());

//http://127.0.0.1:3000/users
app.use("/users", userRouter);
//http://127.0.0.1:3000/leter
app.use("/leter", userLeter);

app.listen(3000, () => {
  console.log("서버 실행");
});
