// process 객체는 프로세스 정보를 다루는 객체
// argv : 프로세스를 실행할 때 전달되는 파라미터(매개변수)정보
// env : 환경변수 정보
// exit() : 프로세스를 끝내는 메서드

// argv는 전달하는 매개변수의 정보를 전달
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index) { // index, item은 변수
  console.log(index + ' : ', item);
});

// console.dir(process.env);
// console.log('os 환경변수의 값 : ' + process.env['os']);