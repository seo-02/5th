//let 키워드는 {블록레벨} 스코프
if(false){
  let username = '둘리';
  console.log('username =',username);
}

//let은 중복선언 불가 - 에러발생
if(false){
  let hobby = '자바스크립트';
  //let hobby = 'HTML/CSS';

  console.log('hobby =',hobby);
}


//let은 호이스팅 X
{
  console.log('location =',location);//ReferenceError 발생
  let location = '서울';
}


