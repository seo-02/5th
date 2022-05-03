//부품을 가져다 쓰는 본체코드
//calculator 변수에는 모듈에서 exports한 객체의 주소값이 저장됨
//const calculator = require('./calculator_module.js');

//최신 import 문법 사용시 node가 인식못함 => babel
import calculator from './calculator_module.js';

console.log(calculator.add(700, 800));
console.log(calculator.mul(500, 600));
1;
