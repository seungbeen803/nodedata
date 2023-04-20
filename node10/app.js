// http 모듈을 이용하여 영화를 업로드하는 프로그램.

// 영화 제목, 감독을 입력받아 업로드하는 프로그램
// get이면 리스트 출력, post 이면 입력받은 영화 출력
const { dir } = require('console');
const http = require('http');
const querystring = require('querystring');
const port = 3000

let movieList = [{ title: '스타워즈4', director: '조지루카스' }];

const server = http.createServer(function (req, res) {
    if (req.method == 'POST') {    //post 방식이면
        addNewMovie(req, res);
    }
    // get이면 목록 출력
    else {
        showList(req, res) ;
    }
});

server.listen(port, () => { // 서버 연결
    console.log(`server on: ${port} port`)
});

function showList(req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('<html>');
    res.write('<meta charset="UTF-8">');
    res.write('<body>');
    
    res.write('<h3>Favorit Movie</h3>');
    res.write('<div><ul>');

    movieList.forEach((item) => {
      res.write('<li>' + item.title + '(' + item.director + ')</li>');
    }, this);
    res.write('</ul></div>');

    res.write(
      '<form method="post" action="."><h4>새 영화 입력</h4>' +
      '<div><input type="text" name="title" placeholder="영화제목"></div>'+
      '<div><input type="text" name="director" placeholder="감독"></div>'+
      '<input type="submit" value="upload">'+
      '</form>');

    res.write('</body>');
    res.write('</html>');
    res.end();
}

function addNewMovie(req, res) {
  let body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', () => {
    let data = querystring.parse(body);
    let title = data.title;
    let director = data.director;

    movieList.push({title: title, director: director});

    // res.end('Success);
    res.statusCode = 302;
    res.setHeader('Location', '.');
    res.end();
  });
}

// // 클라이언트 요청(POST) 처리
// var http = require('http');
// var querystring = require('querystring');

// var server = http.createServer(function(request,response){
//   // 1. post로 전달된 데이터를 담을 변수를 선언
//   var postdata = '';
//   // 2. request객체에 on( ) 함수로 'data' 이벤트를 연결
//   request.on('data', function (data) {
//     // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
//     postdata = postdata + data;
//   });

//   // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
//   request.on('end', function () {
//     // 5. end 이벤트가 발생하면(end는 한번만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
//     var parsedQuery = querystring.parse(postdata);
//     // 6. 객체화된 데이터를 로그로 출력
//     console.log(parsedQuery);
//     // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.end('var1의 값 = ' + result);
//   });

// });

// server.listen(8080, function(){
//     console.log('Server is running...');
// });