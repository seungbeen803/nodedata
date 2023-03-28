// 노드에 기본으로 들어있는 http 모듈을 사용하여 웹 서버 객체 만듦
// http 모듈을 로딩했을 때 반환되는 객체에 createServer() 메서드가 정의됨
// -> createServer() 메서드를 호출하면 서버 객체 생성 가능함

// 1) createServer() 호출 -> 서버 객체 생성
// 2) listen()를 호출하면 웹서버가 시작되고 특정 포트(3000번)에서 대기함

let http = require('http');

let server = http.createServer();

let port = 3000;
server.listen(port, function() {
  console.log('웹 서버가 시작되었습니다. : %d', port);
});