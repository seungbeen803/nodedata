// request 이벤트가 발생할 때, readFile() 메서드를 사용해 클라이언트에 HTMLPage.html 페이지를 제공하게 만든다.

// 모듈을 추출합니다.
let fs = require('fs');
let http = require('http');

// 서버를 생성하고 실행합니다.
http.createServer(function(request, response) {
  // HTML 파일을 읽습니다.
  fs.readFile('HTMLPage.html', function(error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.end(data);
  });
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
