// JSON(JavaScript Object Notation)
// const user = {};
// user.name = 'kyeongrok';
// user.age = 31;

// console.log(user);

// key에 해당하는 값에 원래는 ""를 붙여주어야 하지만 코딩 편의상 붙혀주지 않아도 됩니다.
const user2 = { name: 'kyeongrok', age: 31};
console.log(user2);

const user = { name: "kim", age: 31 };
console.log('user:', user);
console.log('user.name:', user.name);
console.log('user.age:', user.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user);

const fieldName = 'age';
console.log(user[fieldName]);