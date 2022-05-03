if(false){
  //변수를 선언만하고 아직 값을 할당하지 않았기 때문에....
  //즉, 값이 없으니까 username에는 아무런 값도 없다는 뜻의 undefined 값이 자동으로
  //할당되고, type도 undefined가 됨
  var username;
  console.log(username);//undefined
  console.log(typeof username);//undefined
}


if(false){
  var hobby = "자바스크립트 프로그래밍~!";
  var hobby = "그림 그리기";

  //var 키워드는 같은 이름의 변수를 두번 선언해도 에러X
  console.log('hobby =',hobby);
}


//익명함수를 이용하여 즉시실행함수 구문을 작성하시오
;(function(){
  
  //Hoisting(호이스팅)은 선언만 끌어올릴뿐 할당한 값은 끌어올리지 않는다.
  //var home; 한 결과와 같음
  console.log('home =',home);//undefined

  var home = '우리집';

})();