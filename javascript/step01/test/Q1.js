/**
 * 아래의 order1, order2를 보고,
 * name, price 속성을 가진 생성자함수 MakeOrder()를 작성하시오.
 * 
 * const order1 = new MakeOrder('오렌지쥬스', 2500);
 * const order2 = new MakeOrder('사과쥬스', 3000); * 
 */

function MakeOrder(name, price){
  this.name = name;
  this.price = price;
  this.info = function(){
    console.log(this.name+'의 가격은 '+this.price+'원 입니다.');
  }
}

const order1 = new MakeOrder('오렌지쥬스', 2500);

order1.info();