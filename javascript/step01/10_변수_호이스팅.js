//var puppy;//이 시점에서는 puppy변수에 undefined라는 값이 자동할당

//옛날(ES5 문법기준)에 변수을 선언하는 키워드 var -> let, const 대체해서 사용하는 추세

//호이스팅이 일어나므로 콘솔창에 undefined 라고 찍힌다.
console.log(puppy);

//호이스팅 - Hoisting은 선언만 끌어올린다. 값할당은 끌어올리지 않는다.

var puppy = "귀여운 강아지";

console.log(puppy);

