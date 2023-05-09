// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(function (request, response, next) {
  // 데이터를 추가합니다.
  request.number = 52;
  response.number = 273;
  next();
});
app.use(function (request, response, next) {
  // 응답합니다.
  response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});

// 서버를 실행합니다.
app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});

// 라우팅
// - 클라이언트 요청에 적절한 페이지를 제공하는 기술
// - 각 라우터는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우터가 일치할 때 실행한다.
// - 요청 url이 무엇인지 일일이 확인해야 하는 번거로움이 생기므로, 패스를 기준으로 요청한 기능을 분별

// 1. 라우터 객체 참조
var router = express.Router();
// 2. 요청 패스에 따라 실행될 라우팅 함수 등록
router.route('/process/login').post();
router.route('/process/login').get();
// 3. 라우터 객체를 app 객체에 등록
app.use('/', router);