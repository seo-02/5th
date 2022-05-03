//선언식함수 person을 작성하고 호출하시오.
function person(){

}

//함수의 호출
person();


//객체(object) 변수 hong의 name, age 속성에 값을 각각 '홍길동', 20으로 하여 선언하시오.
const hong = {
    name : '홍길동',
    age : 20,
    info : function(){
        console.log('나는 20세의 홍길동입니다.');
    },
    future : function(){
        //객체의 프로퍼티에 할당된 함수(메소드)에서 name, age를 활용하는 방법
        //메소드 실행시 자바스크립트 해석기가 this를 hong으로 대체한다.
        console.log(this.name, this.age);
    }
};

//콘솔창에 한줄로 name, age 속성의 값을 출력하시오.
console.log(hong.name, hong.age);

//hong 객체변수의 info 메소드를 호출하시오.
hong.info();
hong.future();
