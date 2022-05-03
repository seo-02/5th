/*
같은 형식의 객체변수가 여러개 필요할때 사용

const hong = {
  name : '홍길동',
  age : 20
};

const duly = {
  name : '둘리',
  age : 7
};

const hani = {
  name : '하니',
  age : 15
};

*/

//생성자함수는 재사용할 수 있는 객체생성코드 이다.
//생성자함수는 무조건 선언식으로 작성하는게 관례
//생성자함수의 이름은 무조건 대문자로 시작하는게 관례
//생성자함수는 만들고자 하는 객체변수의 원형(prototype)이다.
//암시적으로 this가 hong의 주소값을 받게된다.
function Character(name, age){
  //아래의 this는 객체변수의 이름에 매칭된다.
  this.name = name;
  this.age = age;
}

//생성자함수를 이용한 객체변수 생성방법
//생성자함수를 이용해서 객체변수를 만들때는 new 키워드를 이용한다.(규칙)
const hong = new Character('홍길동', 20);//암시적으로 hong의 주소값을 전달
console.log(hong.name);
console.log(hong.age);


const duly = new Character('둘리', 7);
console.log(duly.name);
console.log(duly.age);


//메소드를 가진 생성자함수
function Car(name, color){
  this.name = name;
  this.color = color;
  this.info = function(){
    console.log('이번에 새로 뽑은 '+this.color+'색의 '+this.name+' 입니다.');
  }
}

const myCar = new Car('제네시스', '검정');
const yourCar = new Car('벤츠', '옐로우');
const momCar = new Car('BMW', '실버');

myCar.info();
yourCar.info();
momCar.info();

/*
  위의 생성자함수 Car를 이용해서 내부적으로 만들어진 객체변수는 아래와 같다.

  const myCar = {name:'제네시스', color:'검정', info:function(){ this.name,  this.color ...} }
  const yourCar = {name:'벤츠', color:'옐로우', info:function(){ this.name,  this.color ...} }
  const momCar = {name:'BMW', color:'실버', info:function(){ this.name,  this.color ...} }

  메소드를 가진 생성자함수로 객체변수를 생성할 경우, 위와 같이
  생성된 객체변수마다 개별 메소드가 생성된다. -> 메소드 코드 중복
*/

