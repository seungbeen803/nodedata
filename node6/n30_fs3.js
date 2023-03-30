// 이미지 파일 읽기
// 모듈을 추출합니다.
let fs = require('fs');
let http = require('http');

// 52273번 포트에서 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
  // 이미지 파일을 읽습니다.
  fs.readFile('유리미.png', function(error, data) {
    response.writeHead(200, { 'Content-Type': 'image/png'});
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
