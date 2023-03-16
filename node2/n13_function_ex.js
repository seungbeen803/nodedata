const students = [ // 리스트 초기화
  { name: 'kyeongrok', age: 31, score: 85},
  { name: 'jihyun', age: 31, score: 95},
  { name: 'minsup', age: 35, score: 76}
];

function getDegree(score) {
  if(score >= 90) {
    return 'A';
  } else if(score >= 80) {
    return 'B';
  } else if(score >= 70) {
    return 'C';
  }
  return 'F';
}

// forEach() : 처음부터 끝까지 순회(반복문)
students.forEach((student) => {
  const result = `name: ${student.name}, score: ${getDegree(student.score)}`;
  console.log(result);
});