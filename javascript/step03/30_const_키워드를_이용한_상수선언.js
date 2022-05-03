if(false){
  let username = '홍길동';
  username = '둘리';//재할당

  console.log('username =',username);
}


if(true){
  const hobby = '자바스크립트 프로그래밍';

  //Assignment 에러 발생
  //const 상수는 재할당 X
  hobby = '그림그리기';

  console.log('hobby =',hobby);
}