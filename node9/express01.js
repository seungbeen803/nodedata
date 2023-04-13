// app.js 작성하기
// 서버 구동의 핵심이 되는 파일
// app.set('port', 포트)로 서버가 실행될 포트 지정
// app.get('주소', 라우터)로 GET 요청이 들어올 때

const express = require('express');
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});