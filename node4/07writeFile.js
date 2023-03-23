// fs.writeFile()메서드
// 모듈을 추출합니다
const fs = require('fs');

// 파일을 씁니다.
fs.writeFile('output.txt', '비동기입니다.', (error) => {
  console.log('파일 쓰기를 완료했습니다.');
});