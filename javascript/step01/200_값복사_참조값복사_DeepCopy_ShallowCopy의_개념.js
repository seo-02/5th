//reference type 변수의 작동원리

const hong = {
    name : 'hong',
    age : 23
};

console.log(hong);
console.log('------------------');

//객체변수는 참조변수이며,
//참조변수의 할당은 참조값 값복사가 된다.
//따라서 두 객체변수는 서로 독립적이지 않다. 같은 실체를 가리킨다.
//이런것을 '얕은복사 Shallow Copy'라고 한다. 
const duly = hong;//참조값 복사
duly.age = 7;

console.log(duly);
console.log(hong);

console.log('===================');

//기본타입(primitive 원시타입) 변수는 참조변수와 다르다!

//값복사란 두개의 메모리가 존재하고 한쪽의 메모리에 있는 값이 다른 메모리로 그 값만을 복사하는 행위를 말한다. 이 두개의 메모리는 완전히 독립적인 상태이다. 우리가 일반적으로 많이하는 파일복사는 값복사에 해당한다.

//함수나 메소드를 호출할때 매개변수에 숫자나 문열값을 전달하는 방식은 모두 값복사에 해당한다.


let duly_nickname = '아기공룡';

let my_nickname = duly_nickname;//값복사

duly_nickname = '초능력내친구';

//두 변수가 완전히 독립성을 갖는 것을 '깊은복사 deep copy'라고도 한다.

console.log('**********************');
console.log(duly_nickname);//초능력내친구
console.log(my_nickname);//아기공룡

