// 비동기
// 모듈을 추출합니다.
const fs = require('fs');

// 파일을 읽어들입니다.
fs.readFile('textfile.txt', (error, file) => {
  //출력합니다.
  console.log(file);
  console.log(file.toString());
});