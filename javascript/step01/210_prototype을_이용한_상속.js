const animal = {
    leg : 4,
    tail : 1,
    say(){
        console.log('나는 다리'+this.leg+'개에 꼬리 '+this.tail+'개 달린 '+this.name+' 입니다.');
    }
};

/*
    객체변수의 prototype 원형(부모역할을 하는 객체)을 알고 싶을 때 __proto__ 를 작성한다.
    이러한 부모객체를 프로토타입객체 또는 간단히 프로토타입이라고 부른다.
    또한 객체변수는 부모객체의 property를 자동상속 받아 마치 자신의 것처럼 쓸 수 있다.
*/
console.log(animal.__proto__);//리터럴 방식으로 생성한 객체의 경우 Object.__proto__가 프로토타입이 된다.

//예시1)
const puppy = {
    name : '구름이'
}

//puppy의 프로토타입 원형(부모역할을 하는 객체)을 바꿀수 있다. => prototype을 이용한 상속
puppy.__proto__ = animal;

console.log(puppy.__proto__);//바뀐 프로토타입 원형(부모역할을 하는 객체) 확인

//이제 부터는 animal이 프로토타입(부모역할을 하는 객체)으로 설정되었기 때문에
//puppy가 animal의 프로퍼티를 사용할 수 있게 된다.
puppy.say();//드디어 부모역할의 객체 animal이 가지고 있는 프로퍼티를 사용


//예시2)
const cat = {
    name : '란이'
};

cat.__proto__ = animal;
cat.say();