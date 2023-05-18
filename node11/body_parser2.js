// body-parser 이용하여 input 태그로 입력받은 값을 콘솔에 출력하는 프로그램
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// urlencoded()의 옵션
//  - extend는 중첩된 객체표현을 허용할지 말지를 정하는 것
//  - urlencoded는 url 형식의 데이터 전달을 의미
//  - 객체 안의 객체를 파싱할 수 있게하려면 true
//  - true이면 qs 모듈을 사용
//  - false이면 기본 내장된 querystring 모듈을 사용, querystring.parse는 object를 상속받지 않는다.
//  - {extended: true}를 하면 qs.parse를 사용하므로, 중첩 객체 파싱 가능

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="post">
    <input type="submit" name="position" value="문과생">
    <input type="submit" name="position" value="이과생">
  </form>
  `);
});

app.post('/', (req, res) => {
  const {
    body: { position }, // 전달받은 값이 position하나
  } = req;
  // 여러 값을 전달받은 경우:
  // const { body: {position, title, description...},} = req;로
  res.send(
    `<script>alert("${position}");
    window.location.href = "/";
    </script>`
    // 알림창이 뜨면서 확인 클릭 시 "localhost:3000/"으로 이동
  );
});


app.listen(3000, () => {
  console.log('3000 포트에서 서버 시작');
});

// post로 요청시 요청 파라미터를 확인할 수 있도록 만들어 주는 미들웨어
//  - post로 요청시 본문에 들어 있는 요청 파라미터들을 파싱하여 요청 객체의 body속성에 넣어줌.
//  - 폼 데이터나 AJAX요청의 데이터 처리
//  - json미들웨어는 요청 본문이 json인 경우 해석, urlencoded 미들웨어는 폼 요청 해석
//  - put이나 patch, post요청 시에 req.body에 프런트에서 온 데이터를 넣어줌

//  app.use(express.json());
//  app.use(express.urlencoded({extended: false}));

//  - http모듈로만 post body를 파싱하려면, req.on('data', function(chunk) {
//   body += chunk;}); 와 같이 이벤트를 등록 후 인코딩처리를 해줘야 함

//   body-parser 사용시
//   - bodyParser.urlencoded()를 등록하면, 자동으로 req에 body속성이 추가되고 저장된다.
//   - 만약 urls에 접근하고 싶다면, req.body.urls이다.
//   - 인코딩도 default로 UTF-8로 해주고, 이벤트 등록할 필요도 없음

// urlencoded()의 옵션
//  - extended는 중첩된 객체표현을 허용할지 말지를 정하는 것
//  - urlencoded는 url 형식의 데이터 전달을 의미
//  - 객체 안의 객체를 파싱할 수 있게 하려면 true
//  - true이면 qs모듈을 사용
//  - false이면 기본 내장된 querystring 모듈을 사용
//    querystring.parse는 object를 상속받지 않는다.
// - {extended: true}를 하면 qs.parse를 사용하므로, 중첩 객체 파싱 가능