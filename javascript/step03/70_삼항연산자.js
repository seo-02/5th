/**
 * 삼항연산자의 형태
 * 
 * const result = (조건식) ? true일때의 결과 : false일때의 결과;
 * 
 * if(조건식){
 *  result = true일때의 결과;
 * }else{
 *  result = false일때의 결과;
 * }
 * 
 * 
 * if(100>10){
 *   console.log('참');
 * }else{
 *   console.log('거짓');
 * }
 */

//위의 if~else 구문을 삼항연산자로 표현
(100>10) ? console.log('참') : console.log('거짓');


const score = 100;
const who = (score>90) ? '천재' : '보통사람';
console.log('who =',who);