//40_var로_선언한_변수의_유효범위.js

var nickname = "구름이";
console.log(nickname);

{
  //일반적으로 변수는 중괄호 단위로 유효하다. 그런데.....
  var nickname = "돌돌이";
}

console.log(nickname);//결과적으로 var 키워드는 중괄호 단위의 유효범위가 설정되지 않으므로 논리적인 흐름 예측에 어려움을 겪게 만든다.

console.log('-------------------');
var address = '서울';

//var 키워드는 함수단위로 유효범위가 설정된다.
function addrFn(){
  var address = '인천';
}
addrFn();

console.log(address);