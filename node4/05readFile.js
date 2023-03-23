// 여러 파일을 비동기적으로 읽기
// 모듈을 추출합니다.
const fs = require('fs');
const async = require('async');

// 병렬적으로 파일을 읽어 들입니다.
async.parallel([
  (callback) => { fs.readFile('a.txt', callback); },
  (callback) => { fs.readFile('b.txt', callback); },
  (callback) => { fs.readFile('c.txt', callback); },
], (error, results) => {
  //출력합니다.
  console.log(results);
});