//기본데이터 타입을 리턴하는 일반함수
function normalFn(){
  return "1. normalFn 일반함수 실행"
}


//프라미스 인스턴스를 리턴하는 함수
function workFn(sec){
  return new Promise((resolve, reject)=>{
    resolve('2022-01-24 오전수업 3교시');//리졸브는 Promise객체를 리턴함
  });
}


//async를 사용한 함수
async function asyncFn(){
  return '2. async 키워드를 사용한 함수 실행';
}


console.log(normalFn());//리턴값이 기본데이터(문자,숫자,불린)인 경우 

console.log(workFn(1));//리턴값이 Promise인 경우 - Promise { <pending 보류중> }

//만약 resolve로 넘겨준 값을 받고 싶다면...
workFn(1).then(time=>{
  console.log(time);
});

console.log(asyncFn());//Promise 인스턴스를 리턴함
//출력 : Promise { '2. async 키워드를 사용한 함수 실행' }

//async 키워드를 함수앞에 붙이면 Promise 인스턴스를 리턴하기 때문에 then()을 사용하여 리턴값을 받아낼 수 있다.
asyncFn().then(result=>{
  console.log(result);
});
