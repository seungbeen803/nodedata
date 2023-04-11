// ejs 모듈
// EJS 모듈은 템플릿 엔진 모듈
// 템플릿 엔진 모듈 : '특정 형식의 파일로부터 HTML 페이지를 생성하는 모듈'을 말함

// EJS는 기존 HTML 페이지에 특수한 태그를 사용하여 JS 코드를 작성할 수 있다는 장점이 있음

// Ejs 파일 읽기

// 기존 HTML 페이지를 읽는 것처럼 fs 모듈을 사용
// 다른 점은, EJS 모듈을 HTML 페이지로 변환해야 한다는 것입니다.
// EJS 페이지를 변환할 때는 위의 'response.end(ejs.render(data)); 코드처럼 'render()' 메서드를 사용

// 모듈 추출
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// 서버 생성 및 실행
http.createServer((request, response) => {
  // ejsPage.ejs 파일 읽기
  fs.readFile('ejsPage.ejs', 'utf8', (error, data) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(ejs.render(data));
  });
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
