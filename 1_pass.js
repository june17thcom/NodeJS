const path = require("path");

console.log(__dirname); //현 디렉토리
console.log(__filename); //현 파일
console.log(path.sep); //디렉토리 분간 특수문자 /
console.log(path.delimiter); //문장단 끝맺는 특수문자;

console.log(path.basename(__filename)); //파일명만 추출
console.log(path.basename(__filename, ".js")); //확장자를 제외
console.log(path.dirname(__filename)); //디렉토리만 추출
console.log(path.extname(__filename)); //확장명만 추출
