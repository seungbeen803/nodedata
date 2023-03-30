// 모듈을 추출합니다.
let fs = require('fs');
let http = require('http');

// 52274번 포트에 서버를 생성하고 실행합니다.
http.createServer(function(request, response) {
  // 음악 파일을 읽습니다.
  fs.readFile('monstaX.mp3', function (error, data) {
    response.writeHead(200, {'Content-Type': 'audio/mp3'});
    response.end(data);
  });
}).listen(52274, function() {
  console.log('Server Running at http://127.0.0.1:52274');
});