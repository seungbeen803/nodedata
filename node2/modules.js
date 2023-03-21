// modules.js : 생성할 모듈 파일, 모듈을 생성할 대 exports 사용
// 절대값을 구하는 메서드

// 모듈
// 별도의 파일로 분리된 독립 기능을 모듈이라고 함
// 모듈을 만들어 놓으면 다른 파일에서 모듈을 불러와 사용할 수 있음
// CommonJs 표준 스펙을 따르며 exports 전역 객체를 사용함
// 모듈을 부를 때는 require('모듈파일이름')를 사용
// require()를 사용하면 모듈 객체가 반환되고, 모듈에서 exports객체에 설정한 속성들은 이 모듈 객체를 통해 접근 가능함
// 모듈을 만들 때는 exports, 모듈을 가져다 사용할 때는 require()

exports.abs = function (number) {
  if(0 < number) {
    return number;
  } else {
    return -number;
  }
};
// 원의 넓이를 구하는 메서드
exports.circleArea = function (radius) {
  return radius * radius * Math.PI;
};