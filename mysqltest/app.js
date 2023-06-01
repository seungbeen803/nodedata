const mysql = require('mysql');
// createConnection()에 자신의 DB정보를 입력한다.
const connection = mysql.createConnection({
  host: 'localhost', // db ip address
  port: 3306, // db port number
  user: 'seungbeen', // db id
  password : 'seungbeen',
  database : 'mydb' // db schema name
});

// 1) DB 연결 테스트
/*
connection.connect((err) => {
  if(err) {
    console.error('mysql connection error');
    console.log(err);
    throw err;
  }else{
    console.log("연결에 성공하였습니다.");
  }
});
*/

// 2) users 테이블의 데이터 출력
connection.connect();
connection.query('SELECT * FROM USERS', (error, rows, fields) => {
  if(error) throw error;
  console.log('USERS info : ', rows);
});

connection.end();

