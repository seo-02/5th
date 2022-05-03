/**
 * 함수(Function)은 우리가 반복적으로 사용하는 코드를 묶은 것으로, 코드 덩어리다.
 * 
 * 함수의 구성 -> 함수의 선언
 * 1. 함수명
 * 2. 매개변수 (있을수도 있고 없을수도 있다.)
 * 3. 코드 덩어리
 * 4. 리턴값 (있을수도 있고 없을수도 있다.)
 * 
 * 함수실행 -> 함수의 호출
 * 호출방법 : 함수명();
 */

//두개의 숫자를 전달받아 그 합을 리턴하는 함수를 선언하고 호출하시오.
/*
  function 함수명(매개변수1, 매개변수2){
    코드 작성
    return 값
  }

  호출방법
  함수명(인자1, 인자2);

*/

//함수의 선언
function addFn(num1, num2){
  return num1+num2;
}

             //함수의 호출
let result = addFn(10, 20);//30
console.log(result);



//세개의 숫자를 전달받아 그 곱을 리턴하는 함수 mulFn 를 선언하고 호출하시오.
function mulFn(x,y,z){
  return x*y*z;
}

result = mulFn(3,4,5);//재할당
console.log(result);

