const http = require("http");

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Python" },
  { name: "C" },
  { name: "C++" },
  { name: "Node.js" },
  { name: "MySQL" },
  { name: "monggoDB" },
  { name: "JAVA" },
  { name: "JsvaScript" },
  { name: "AI" },
  { name: "Linux" },
];

// 확실하지 않은(서버주가 아닌/접속 이력이 없는/증명 내역이 없는), 소위 의심스러운 접속자에 대해 접속단에서 차단을 먹여 접근을 허하지 않음/
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const url = req.url;
  const method = req.method;
  if (method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(skills));
  }
});

// url 통한 접속방식은 무조건 get
server.listen(3000, () => {
  console.log("서버 실행 중");
});
