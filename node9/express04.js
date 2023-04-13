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