// list를 json형식으로 파일에 저장하기 - JSON.stringify()
// RestEx폴더 - stringifyEx.js

const userList = [
  { name: '홍길동', age: 50, address: '서울시'},
  { name: '이길동', age: 40, address: '인천시'},
];

const fs = require('fs');
fs.writeFile('./mlist.json', JSON.stringify(userList), (error) => {
  console.log('저장완료');
});