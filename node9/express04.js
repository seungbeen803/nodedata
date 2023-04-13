const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // send()에 객체로 입력했으므로 JSON 형식으로 출력
  const result = [];
  const multipleNumber = 9;
  for(let i = 1; i < 5; i++) {
    result.push({
      number: `${multipleNumber} X ${i}`,
      multipe: multipleNumber * i,
    });
  }
  res.send(result);
});
// 미들웨어를 설정합니다.
app.use(function (request, response, next) {
  // 응답합니다.
  // 상태코드만 전달할 때는 response.sendStatus(404) 사용
  response.status(404).send('<h1>ERROR</h1>');
})
app.get('/error', (req, res) => {
  res.status(404).send('404 ERROR');
});

app.listen(3000, () => {
  console.log("Server is running port 3000!");
});

// send() 메서드의 매개변수
// 문자열 HTML
// 배열   JSON
// 객체   JSON