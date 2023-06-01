const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'seungbeen',
  password: 'seungbeen',
  database: 'mydb'
});

conn.connect((err) => {
  if(err)  {
    console.log('mysql connection error');
    console.log(err);
    throw err;
  }else{
    console.log('연결에 성공하였습니다.');
    // 1) testtable 삽입
    /*
    var sql1 = "INSERT INTO testtable VALUES (?, ?)";

    var input_data = [3, "choi"];
    conn.query(sql1, input_data, (err) => {
      console.log('삽입완료');
    });

    var input_data1 = [4, "park"];
    conn.query(sql1, input_data1, (err) => {
      console.log('삽입완료');
    });

    var input_data2 = [5, "yoon"];
    conn.query(sql1, input_data2, (err) => {
      console.log('삽입완료');
    });
    */

    // 2) testtable 수정
    var sql2 = "UPDATE TestTable SET str_name=? WHERE no=?";
    var update_data = ["손현우", 1];
    conn.query(sql2, update_data, (err) => {
      console.log("수정완료");
    });

    var sql2 = "UPDATE TestTable SET str_name=? WHERE no=?";
    var update_data = ["이민혁", 2];
    conn.query(sql2, update_data, (err) => {
      console.log("수정완료");
    });

    var sql2 = "UPDATE TestTable SET str_name=? WHERE no=?";
    var update_data = ["유기현", 3];
    conn.query(sql2, update_data, (err) => {
      console.log("수정완료");
    });

    // 3) testtable 삭제
    var sql3 = "DELETE FROM testtable WHERE no=?";
    var delete_data = [5];
    conn.query(sql3, delete_data, (err) => {
      console.log("삭제완료");
    });

    var sql = "SELECT * FROM testtable";
    conn.query(sql, (err, rows) => {
      for(var obj of rows) {
        console.log('no : ', obj.no);
        console.log('str_name : ', obj.str_name);
      }
    });
    conn.end();
  }
});
