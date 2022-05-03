/*
  예약을 거는 방식으로 콘솔창에 아래와 같이 출력하고 싶다.

  첫번째 작업 2022-01-20 13:09:10
  두번째 작업 2022-01-20 13:09:11
  세번째 작업 2022-01-20 13:09:12
*/

// 가장 단순한 방법
console.log('첫번째 작업 2022-01-20 13:09:10');
console.log('두번째 작업 2022-01-20 13:09:11');
console.log('세번째 작업 2022-01-20 13:09:12');

console.log('------------------------------');

//시간, 콜백을 전달받아 호출하는 함수
const workFn = function(sec, callback) {
	console.log('호출성공~!!!');
	setTimeout(function() {
		callback(new Date().toISOString());
	}, sec * 1000);
	console.log('workFn 함수 종료~!!!');
};

//의도 - 지정한 시간이 경과하면 콜백을 실행하고 싶다.

//그러나 아래와 같이 작성하면 1초 단위로 workFn 함수를 호출하는게 아니라 거의 동시에 workFn 함수를 호출하게 되고, 예약도 거의 같은 시점에 걸리게 된다. 따라서 거의 동시에 콘솔창에 메세지를 찍는다.

//결과적으로 1초마다 실행하려는 의도와 달리 거의 같은 시간에 실행됨

workFn(1, function(time) {
	console.log('첫번째 작업 :', time);
});

workFn(1, function(time) {
	console.log('두번째 작업 :', time);
});

workFn(1, function(time) {
	console.log('세번째 작업 :', time);
});

console.log('이 메세지의 출력 시점은 ?');

//첫번째 콜백이 호출(실행)된 시점 또다시 예약을 거는 방법으로 하면 해결됨
//아래와 같은 비동기 처리방식을 '콜백지옥'이라고 부른다.

workFn(1, function(time) {
	console.log('------------------------------');
	console.log('First 작업 :', time);

	workFn(1, function(time) {
		console.log('------------------------------');

		workFn(1, function(time) {
			//②
			console.log('------------------------------');
			console.log('Third 작업 :', time);
		});

		//콜백안에 콜백이 들어가는 코드의 문제점 -
		//①,②의 코드 순서를 바꿔도 ②가 비동기이기 때문에 출력결과는 같다.
		//즉, 코드의 실행순서가 헷갈린다.
		//코드가 깔끔하고 가독성이 좋아야 눈으로 로직을 파악할 수 있고 디버깅이 쉬어지는데 말이다...
		console.log('Second 작업 :', time); //①
	});
});
