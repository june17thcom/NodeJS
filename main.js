const counter = require("./counter.mjs"); //js 와 같은 확장자명은 생략 가능
//mjs는 외부 참조용 내부 함수 라이브러리

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
