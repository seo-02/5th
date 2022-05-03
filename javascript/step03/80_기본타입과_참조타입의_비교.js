/**
 * 자바스크립트의 데이터 타입(최종정리)
 * 
 * 기본(Primitiv)타입 - 값자체
 *  number, string, boolen, null, undefined
 * 
 * 
 * 참조(Reference)타입 - 주소값
 *  array, function, object
 */

const a=100;//값자체가 저장
const b=100;//값자체가 저장
const c='100';//값자체가 저장

console.log('a==b 는',a==b);//true - 값만 비교
console.log('a==c 는',a==c);//true - 값만 비교 

console.log('a===c 는',a===c);//false - 값과 타입을 같이 비교
console.log('변수 a의 타입은',typeof a);
console.log('변수 c의 타입은',typeof c);

//--------------------------------------

const score_1 = { kor : 100 };//주소값 0x0101 저장 
const score_2 = { kor : 100 };//주소값 0x1010 저장

console.log('score_1 == score_2 는', score_1 == score_2);//false
console.log('score_1 === score_2 는', score_1 === score_2);//false

const score_3 = score_1;//같은 주소값 0x0101 저장 
console.log('score_1 == score_3 는', score_1 == score_3);//true
console.log('score_1 === score_3 는', score_1 === score_3);//true