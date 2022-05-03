"use strict";

//최신 const, let  =>  var 올드한 변수 선언
var name = 'duly';
var age = 35;
age = 7;
var home = '서울시 쌍문구 쌍문동';

var who = function who(name, age, home) {
  console.log("".concat(name, "\uB294 ").concat(age, "\uC0B4 \uC774\uACE0, \uC9D1\uC740 ").concat(home, " \uC785\uB2C8\uB2E4."));
};

who(name, age, home);