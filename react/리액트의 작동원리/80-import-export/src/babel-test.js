//최신 const, let  =>  var 올드한 변수 선언
const name = 'duly';

let age = 35;
age = 7;

var home = '서울시 쌍문구 쌍문동';

const who = function(name, age, home) {
	console.log(`${name}는 ${age}살 이고, 집은 ${home} 입니다.`);
};

who(name, age, home);
