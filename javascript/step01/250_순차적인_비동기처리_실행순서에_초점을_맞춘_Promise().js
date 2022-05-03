//비동기처리 함수에는 최소 2개이상의 매개체가 필요한데
//보통 첫번째는 실행하는데 필요한 데이터 전달이고,
//두번째는 실행할 콜백함수이다.

//그런데 JS에서 제공하는 Promise() 생성자함수를 이용해서 비동기처리를 하는 방식은 240번 예제와는 좀 많이 다른 패턴이다. 다만 결과는 같다.

//콜백지옥 코드 형식을 탈피하기 위해 Promise() 비동기처리 문법이 제시됨

/**
 * Promise 작성법 - 프라미스도 여전히 코드의 가독성은 그리 좋지 않다.
 * 
 * 1. resolve()를 포함한 Promise 객체를 생성하여 리턴하고
 * 2. then()에서 리턴한 결과를 받는다.
 * 3. 프라미스 문법에서는 두개의 콜백이 필요한데
 *    첫번째는 Promise 객체 생성시 넘기는 콜백 function(resolve, reject){} 이고,
 *    두번재는 then() 에서 받는 콜백 function(result){} 이다.
 *    이 두개의 콜백은 아래 예제와 같이 화살표함수로 작성해도 잘 작동한다.
 * 4. resolve에는 우리의 예약이 완료시 호출하는 함수의 주소값이 전달되고,
 *    reject에는 에러가 발생했을 경우 호출하는 함수의 주소값이 전달된다.
 */


function workFn(sec){
    const myPromise = new Promise((resolve, reject)=>{
        //우리가 걸 예약의 구체적 내용을 여기에 기술        
        setTimeout(()=>{
            resolve(new Date().toISOString());
        }, sec*1000);
    });
    return myPromise;
}


workFn(1).then(function(result){
    console.log('첫번째 작업을 실행한 시간 :', result);
    return workFn(1);
}).then(function(result){
    console.log('두번째 작업을 실행한 시간 :', result);
    return workFn(1);
}).then(function(result){
    console.log('세번째 작업을 실행한 시간 :', result);
    return workFn(1);
});



