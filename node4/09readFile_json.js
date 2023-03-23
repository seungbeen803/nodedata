// readFile 메서드 사용하면서 콜백 함수를 파라미터로 전달
var fs = require('fs');
fs.readFile('./package.json', 'utf-8', function(err, data) {
  console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');