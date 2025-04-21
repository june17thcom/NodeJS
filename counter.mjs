let count = 0;
function increase() {
  count++;
}

function getCount() {
  return count;
}

// 모듈화 + 외부참조 승인
module.exports.getCount = getCount;
module.exports.increase = increase;
