"use strict";

var _calculator_module = _interopRequireDefault(require("./calculator_module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//부품을 가져다 쓰는 본체코드
//calculator 변수에는 모듈에서 exports한 객체의 주소값이 저장됨
//const calculator = require('./calculator_module.js');
//최신 import 문법 사용시 node가 인식못함 => babel
console.log(_calculator_module["default"].add(700, 800));
console.log(_calculator_module["default"].mul(500, 600));
1;
