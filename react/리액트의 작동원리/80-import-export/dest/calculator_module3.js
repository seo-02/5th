"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports["default"] = cal;
exports.mul = mul;

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
} //import 하는 쪽에서 하나의 기능만 단독으로 밖으로 빼고 싶을때


function cal(a, b) {
  return (a + b) * a * b;
}