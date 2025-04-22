//const { response } = require("express");
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  //127.0.0.1:3000/
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("HOME");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("MYPAGE");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("NOT_FOUND");
  }
  /*
  // 사용자의 헤더에 표시할 정보 설정 함수. 200번대는 주로 정상 호출로 안증되는 번호.
  res.writeHead(200, { "Content-Type": "text/plain" });
  // 브라우저 서브값(자료형/주로 용량)을 설정하기 위해 헤더가 필요.
  res.end("Hello, World!\n"); //over, 라져 댓 같은 거.
  //127.0.0.1, localhost
  */
});

server.listen(3000, () => {
  console.log("서버 실행 중");
});
