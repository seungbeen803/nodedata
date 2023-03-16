// 함수 선언식(Function declaration)
function printMessage(message) {
  console.log(message);
}

// 함수 표현식(Function expression)
const printWelcome = function() { // 변수에 익명함수 지정
  console.log('welcome');
};

printMessage('bye');
printWelcome();

console.log(`typeof printMessage : %s`, typeof printMessage);
console.log(`typeof printWelcome : %s`, typeof printWelcome);

// 괄호를 쓰지 않음
const pm = printMessage; // <- 함수를 선언하고, ()를 붙이지 않고, 변수에 할당하면 해당 변수(pm)는 function이 됨.

pm('good morning');
console.log('typeof pm : %s', typeof pm);

// 모듈
// 별도의 파일로 분리된 독립 기능을 모듈이라고 함
// 모듈을 만들어 놓으면 다른 파일에서 모듈을 불러와 사용할 수 있음
// CommonJs 표준 스펙을 따르며 exports 전역 객체를 사용함
// 모듈을 부를 때는 require('모듈파일이름')를 사용
// require()를 사용하면 모듈 객체가 반환되고, 모듈에서 exports객체에 설정한 속성들은 이 모듈 객체를 통해 접근 가능함
// 모듈을 만들 때는 exports, 모듈을 가져다 사용할 때는 require()