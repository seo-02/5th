let nickname = "구름이";
console.log(nickname);

{
  //let, const 로 선언한 변수는 중괄호 단위로 유효하다.
  let nickname = "돌돌이";  
  console.log(nickname);//돌돌이

  const age = 25;
}

console.log(age);//age is not defined 에러발생
console.log(nickname);