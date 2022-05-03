//함수를 작성하는 형태에 따라 "선언식, 표현식, 익명, 화살표함수로 구분한다."

//100번에서 배운 함수는 "선언식 함수"라고 한다.
function addFn(a,b){
    console.log(a+b);
}
addFn(100,200);


//우리가 위와 같이 선언식 함수를 만들면 JS해석기는 아래와 같이 "표현식함수"로 살짝 바꾼다.
//익명함수는 이름이 없는 함수를 의미한다.  function(){}  <-이런형태
//표현식함수는 (함수)변수에 익명함수를 할당하는 방식이다.
const subFn = function(a,b){
    console.log(a-b);
}
subFn(300,400);


//화살표함수는 함수선언 방식을 간소화한 함수이다.
const mulFn = (a,b)=>{
    console.log(a*b);
}

mulFn(10,7);

