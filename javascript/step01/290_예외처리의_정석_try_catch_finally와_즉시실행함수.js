//실험적으로 에러를 발생시킬 함수
function secretFn(password){
  console.log('secretFn 함수 실행~!');

  if(password===undefined){
    //throw '비밀번호를 입력하지 않은 에러 발생~!';

    //Error 객체에는 발생한 에러에 대한 콜스택 정보가 담겨있다.
    throw new Error('비밀번호를 입력하지 않은 에러 발생~!');//조금더 상세한 에러정보를 보여준다.
  }

  console.log('secretFn 함수 종료~!');
}



//메인함수 - 즉시실행
(function main(){
  console.log('main 함수 실행~!');
  
  //에러가 발생할 수 있는 코드를 사용하는 쪽에서 try~catch 처리를 한다.
  //try~catch 구문은 동기방식의 처리에서만 효과가 있다. 비동기처리에서는 안됨
  try{
    //에러가 발생할수 있는 코드를 작성하는 구간
    //secretFn(123456);
    secretFn();
  }catch(e){
    //에러 발생시에만 실행되는 구간
    console.log('★★★에러메세지 :',e);
  }finally{
    //이 구간은 에러발생과 상관없이 무조건 실행되는 구간
    console.log('예외처리 완료~!');
  }


  console.log('main 함수 종료~!');
})();

