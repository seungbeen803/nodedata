// 모듈을 추출합니다.
const url = require('url');

// 모듈을 사용합니다.
// url 모듈을 추출하고, parse() 메서드를 사용
// parse() : URL 정보를 객체로 가져와서 분석
const parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parseObject);