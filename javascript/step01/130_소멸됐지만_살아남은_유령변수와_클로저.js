// 표현식함수 closerFn을 작성하시오
const closerFn = function(){
    let score = 60;
    return function(){
        score = score + 1;//누적의 원리(버카충)
        console.log(score);
    };//실제로 리턴되는 값은 이 익명함수의 주소값 0x101010
};

const printScore = closerFn();

printScore();
printScore();
printScore();
printScore();
printScore();
printScore();


/**
 * 일반적으로 지역변수는 함수가 실행되는 시점에 메모리가 생성되고
 * 함수가 종료될 때 소멸된다.
 * 
 * 그런데 지역변수를 로직에서 활용하는 함수를 리턴하면
 * 소멸되어야 할 지역변수가 소멸되지 않고 리턴된 함수 안에서 살아남아 계속 사용할 수 있다.
 * 
 * 이때 살아남은 지역변수를 유령변수라고 할 수 있으며,
 * 리턴된 함수를 클로저라고 한다.
 */




//표현식함수 addFn을 작성하시오
const addFn = function(){};


//표현식함수 mulFn을 작성하시오
const mulfn = function(){};