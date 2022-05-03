//배열 구조분해(비구조) 할당
const pet = ['강아지', '고양이', '거북이', '달팽이', '토끼'];

//배열에 담긴 데이터를 꺼내서 별개의 변수에 저장해야 할 일이 발생
// const puppy = pet[0];
// const cat = pet[1];
// const turtle = pet[2];
// const snail = pet[3];
// const rabbit = pet[4];

//위 과정을 간소화 하는 새로운 문법 등장
const [puppy, cat, turtle, snail, rabbit] = pet;

console.log(puppy);
console.log(cat);
console.log(turtle);
console.log(snail);
console.log(rabbit);

//객체 구조분해(비구조) 할당
const person = {
	username: '둘리',
	age: 7,
	hobby: '초능력호이'
};

//객체에 담긴 데이터를 꺼내서 별개의 변수에 저장해야 할 일이 발생
// const username = person.username;
// const age = person.age;
// const hobby = person.hobby;

//위 과정을 간소화 하는 새로운 문법 등장
const { username, age, hobby } = person;

// const {username, age, hobby} = {
//   username : '둘리',
//   age : 7,
//   hobby : '초능력호이'
// };

console.log(username);
console.log(age);
console.log(hobby);
