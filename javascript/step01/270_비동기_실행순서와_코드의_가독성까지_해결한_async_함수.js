//서버에서 데이터 수신후 결과를 리턴하는 함수
function workFn(sec){
  //return sec+'초후 서버에서 데이터 수신완료';

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(sec+'초후 서버에서 데이터 수신완료');
    }, sec*1000);
  });

}


async function asyncFn(){

  //await을 붙이면 workFn(3)의 비동기처리가 완료될 때 까지 기다렸다가 다음 코드가 실행된다.
  //await 키워드를 사용하려면 반드시 함수앞에 async 키워드를 명시해야 한다.
  let result = await workFn(3);
  console.log(result+'하여 화면에 출력합니다.');

  return 'asyncFn 함수 종료~!';
}

//async가 붙은 함수는 Promise 인스턴스를 리턴하므로 .then()으로 리턴값을 받아낼 수 있다.
//async 함수에서의 return은 Promise의 resolve()와 같은 역할을 한다.
asyncFn().then(msg=>{
  console.log(msg);
});