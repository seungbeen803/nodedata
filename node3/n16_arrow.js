// 화살표 함수, { }이용하기
const sumAndPrint = (a, b) => {
  const result = a + b;
  return `결과는 ${result}입니다.`;
};

const result = sumAndPrint(10, 20);
console.log(result);
