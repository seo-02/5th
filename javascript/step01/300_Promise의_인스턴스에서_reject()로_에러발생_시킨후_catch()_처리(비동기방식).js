function workFn(sec){
  const myPromise = new Promise((resolve, reject)=>{
    if(sec===undefined){
      reject('시간을 입력하지 않은 에러발생~!');
    }

    resolve('입력한 시간 :' + sec);
  });

  return myPromise;
}

workFn(10)

.then(result=>{
  console.log(result);
})

.catch(err=>{
  console.log('에러구문 :',err);
});

console.log('프로그램 종료~!');
