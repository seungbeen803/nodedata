// ES6에서는 function구문대신 => 를 사용해 함수 작성
// function을 빼고 () 다음에 => 를 써준다.

function printHello() {
  console.log('hello');
}
printHello();

const printBye = () => {
  console.log('bye');
}
printBye();

// 화살표 함수(arrow function)
// let func = function(arg1, arg2, ...) {
//   return 표현식;
// }

// let func = (arg1, arg2, ...) => 표현식
// -> 인자 arg1, arg2를 받는 함수 func이 만들어짐.
// func는 화살표 우측의 표현식을 평가하고 결과를 반환.

let sum = (a, b) => {
  return a + b;
}
console.log(sum(8, 3));