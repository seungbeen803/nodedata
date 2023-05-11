// morgan
// 서버로 들어온 요청과 응답에 대한 정보를 콘솔에 기록해주는 미들웨어
//  - 웹 요청이 들어왔을 때 로그를 출력하는 미들웨어(외부 모듈)
//  - 로그의 자세한 정도 선택 가능(dev, tinym ShadowRoot, common, combined)
      // 개발 환경 -> dev
      // 배포 환경 -> combined
//  - 순서대로 HTTP요청 요청주소 상태코드 응답속도 - 응답바이트

const express = require('express');
const path = require('path');
const morgan = require('morgan'); // 미들웨어 연결

const app = express();
// process.env.PORT : process의 환경 중 port를 가리킴
// process.env : node.js의 환경
app.set('port', process.env.PORT || 3000);

// 로그 기록
if(process.env.NODE_ENV === 'production') {
  app.use(morgan('combined')); // 배포 환경이면
}else{
  app.use(morgan('dev')); // 개발 환경이면
}

//combined, common, short, tiny 등을 넣을 수 있다.
// 개발 환경에서는 dev를, 배포 환경에서는 combined를 이용하면 좋다.

app.get('/', (req, res) => {
  res.send('Hello, index');
});

app.listen(3000, function() {
  console.log(app.get('port'), '번 포트에서 대기 중');
});