// (r)
const fs = require("fs");

// 별도 예외 처리 필 → 없을 시 파일이 없거나 오류 발생 시 프로그램이 아예 멈춰버림...
const data = fs.readFileSync("example.txt", "utf8"); // 한 번에 한 일만 함. 그 일이 언제 끝나든 뒷일 다 계류 중
// fs.readFileSync("파일명", "인코딩 방식") //문자열로.
console.log("파일 내용: ", data);

fs.readFile("example", "utf8", (err, data) => {
  // 함수 자체적 예외 처리 기능 내장?
  // 콜백 함수 추가 필 (→ 애로우 처리 가능)
  if (err) {
    console.log("파일 읽기 실패: ", err);
  }
  console.log("파일 내용: ", data);
});
console.log("프로그램을 종료합니다.");
