// http 모듈을 이용하여 영화를 업로드하는 프로그램

// 영화 제목, 감독을 입력받아 업로드하는 프로그램
// get이면 리스트 출력, post이면 입력받은 영화 출력
const http = require('http');
const querystring = require('querystring');
const port = 4000

let movieList = [{title: '스타워즈4', director: '조지루카스'}];

const server = http.createServer((req, res) => {
  // post방식이면
  if(req.method == 'POST') {
    addNewMovie(req, res);
  }
  // get이면 목록 출력
  else {
    showList(req, res);
  }
});

// 서버연결
server.listen(port, () => {
  console.log(`server on: ${port} port`)
});

function showList(req, res) {
  res.writeHeader(200, {'Content-Type': 'text/html; chardet=UTF-8'});
  res.write('<html>');
  res.write('<meta charset="UTF-8">');
  res.write('<body>');

  res.write('<h3>Favorite Movie</h3>');
  res.write('<div><ul>');

  // 영화 리스트 출력
  movieList.forEach((item) => {
    res.write('<li>' + item.title + '(' + item.director + ')</li>');
  }, this);
  res.write('</ul></div>');

  res.write(
    '<form method="post" action="."><h4>새 영화 입력</h4>' +
    '<div><input type="text" name="title" placeholder="영화제목"></div>' +
    '<div><input type="text" name="director" placeholder="감독"></div>' +
    '<input type="submit" value="uploade">' +
    '</form>'
  );

  res.write('</body>');
  res.write('</html>');
  res.end();
}

function addNewMovie(req, res) {
  let body = '';
  req.on('data', (data) => {
    body += data;
  });

  req.on('end', () => {
    let data = querystring.parse(body);
    let title = data.title;
    let director = data.director;

    movieList({title: title, director: director});

    res.statusCode = 302;
    res.setHeader('Location', '.');
    res.end();
  });
}