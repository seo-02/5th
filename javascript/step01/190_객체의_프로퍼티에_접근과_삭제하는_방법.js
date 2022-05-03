//객체 데이터의 프로퍼티에 접근하는 방법
const puppy = {
    name : '구름이',
    color : 'white',
    'head-size' : 'small'
};

//객체의 property에 접근
console.log(puppy.name);
console.log(puppy['name']);
console.log(puppy.nickname);//undefined ...어~! 그런거 없는데?

console.log('---------------');

//객체의 property 값 재할당
puppy.color = 'pink';
console.log(puppy.color);
console.log(puppy['color']);

console.log('---------------');

//반드시 대괄호 표기법을 사용해야 하는 경우
console.log(puppy['head-size']);

puppy['eng-name'] = 'grumi';//동적으로 property 추가
console.log(puppy['eng-name']);

console.log('---------------');

//객체의 property 삭제
delete puppy.color;
delete puppy['head-size'];

console.log(puppy);
