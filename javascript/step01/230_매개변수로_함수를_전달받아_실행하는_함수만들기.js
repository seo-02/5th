//230_매개변수로_함수를_전달받아_실행하는_함수만들기.js

//표현식함수 선언
const speakerFn = function(callback){
  //매개변수 callback에는 전달받은 함수의 주소값이 저장되므로 호출가능하다.
  callback();
};

console.log(0);//실행순서 : 1

//호출하면서 인자로 함수를 전달함
speakerFn(function(){
  console.log('오늘은 목요일');
});//실행순서 : 2


//0초후에 콘솔창에 '안녕하세요~!'를 출력하도록 예약하는 코드를 작성하세요
setTimeout(function(){
  console.log('안녕하세요');
}, 0);//4
//위 코드는 0초후 실행을 예약하는 코드일뿐, 실제 0초후 실행을 보장하지는 않는다.


console.log(1);//실행순서 : 3
