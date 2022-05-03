/**
 * 객체란 무엇일까?
 * 
 * 객체 == 객체데이터
 * 
 * 객체의 실체는 {key:value} 의 형태로 저장되는 데이터이다.
 * 
 */

//리터럴(literal) 방식으로 객체생성
const hong = {
    id : 'hgd',
    pwd : '1234'
};

//동적으로 name속성 추가
hong.name = '홍길동';

//동적으로 info메소드 추가
hong.info = function(){
    console.log('id = '+this.id);
    console.log('pwd = '+this.pwd);
    console.log('name = '+this.name);
}

console.log(hong);
hong.info();


//생성자함수에 동적으로 속성을 추가할 때는 prototype을 이용한다.
function Computer(system, monitor){
    this.system = system;
    this.monitor = monitor;
}

Computer.prototype.mouse = '로지텍';

Computer.prototype.info = function(){
    console.log('시스템사양');
    console.log(this.system, this.monitor);
};

console.log('-----------------')
console.log(Computer.prototype);

const myCom = new Computer('i9-11900K', '19인치');
console.log(myCom);

myCom.info();
console.log(myCom.mouse);

