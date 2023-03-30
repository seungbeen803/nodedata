let http = require('http');
// 클라이언트 요청을 받았을 때 응답 보내기
let server = http.createServer();
// 웹서버 객체를 만듭니다

let port = 3000;
// 웹서버를 시작하여 3000번 포트에서 대기하도록 합니다

server.listen(port, function() {
    console.log('웹서버가 시작되었습니다 : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
    console.log('클라이언트가 접속했습니다 : %s, %d', socket.remoteAddress, socket.remotePort);
});

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다');

    res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("   <title>응답 페이지</title>");
    res.write("  </head>");
    res.write("  <body>");
    res.write("   <h1>노드제이에스로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
});

// res객체의 write(), end(), writeHead() 메서드를 이용하면 클라이언트로 응답을 보낼 수 있음

// end() : 응답을 모두 보냄을 의미하고, end()가 호출될 때 클라이언트로 응답을 전송

// 200 : 정상 상태

// connection이 발생하면 내부적으로 socket생성되어 Socket객체가 파라미터로 전달

// Socket

// wrietHead(statusCode[, statusMessage][, headers]) : 응답으로 보낼 헤더를 만듭니다
// write(chunk[, encoding][,callback]) : 응답 본문(body) 데이터를 만듭니다. 여러 번 호출될 수 있습니다.
// end([data][, encoding][, callback]) : 클라이언트로 응답을 전송합니다.

// on()메서드 : 이벤트 처리하는 기본 메서드
// connection, request, close이벤트를 처리할 수 있는 콜백함수를 각각 등록하면 상황에 맞게 자동 호출됨.
// 클라이언트가 요청을 하면 발생하는 request 이벤트를 처리할 수 있게 등록해 둔 콜백함수에서 res 객체를 사용해서 클라이언트로 응답을 보냄