//let으로 선언한 변수의 특징
//let은 뚜껑없는 컵 -> 원할때마다 다른 내용물로 변경 가능
//논리적인 흐름상 중간에 내용이 바뀌어야 하는 경우는 let으로 선언
let address = '서울시 강서구';
address = "부산시 강서구";
console.log(address);


//const로 선언한 변수의 특징
//const는 밀폐된 컵 -> 한번 내용물을 담으면 뚜껑으로 완전 밀폐
//논리적인 흐름상 중간에 내용이 바뀌면 안되 경우는 const으로 선언
const account = "국민은행 830502-04-070200 홍길동";
//account = '농협 233748757855 도둑놈';
console.log(account);