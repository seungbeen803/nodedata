// 서버에서 응답을 보내주지 않기 때문에 
// 웹 브라우저에서 결과를 볼 수 없어 서버에 응답을 보내도록 수정

// request 이벤트 처리할 대 wirteHead(), write(), end() 메서드로 응답 전송

// 응답 메세지를 작성할 때는 response객체를 사용

// 웹 서버를 생성하고 실행합니다.
require('http').createServer(function(request, response) {
  // 응답합니다.
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
