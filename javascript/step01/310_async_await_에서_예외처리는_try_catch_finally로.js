//매개변수 sec를 갖는 workFn함수를 표현식으로 작성하시오
const workFn = function(sec){
  //console.log('workFn() 처리');
  return new Promise((resolve, reject)=>{
    if(sec===undefined){
      reject('sec 매개변수가 누락된 에러발생');
    }

    resolve('전달된 sec 값은 '+sec);
  });
}


async function main(){
  //1. 시작시간 출력
  console.log('1. '+new Date().toLocaleString());
  
  //2. workFn() 비동기 함수를 동기처럼 사용 -> async, await
  const result = await workFn(10);//Promise에서 resolve() 한 값이 할당됨
  console.log('2. '+result);
  
  //async, await에서 예외가 발생했을 때 처리방법
  try{
    await workFn();//sec에 할당될 값을 넘기지 않아 에러 유도
  }catch(e){
    console.log('3. '+e);
  }

  //3. 종료시간 출력
  console.log('4. '+new Date().toLocaleString());
}


main();