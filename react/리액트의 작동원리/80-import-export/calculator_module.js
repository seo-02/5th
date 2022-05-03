//부품역할의 소스코드

//두 숫자를 전달받아 합을 리턴하는 함수
function add(a, b) {
	return a + b;
}

//두 숫자를 전달받아 곱을 리턴하는 함수
function mul(a, b) {
	return a * b;
}

//부품으로 사용될 수 있게 수출을 허가하는 코드
module.exports = {
	add: add,
	mul: mul
};
