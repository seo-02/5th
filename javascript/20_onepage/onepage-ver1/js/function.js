//준비핸들러 10번 작성하기
$(document).ready(function(){

  //메뉴셀렉팅
  const $mnu_1 = $('header > nav > .gnb > li:nth-child(1) > a');
  const $mnu_2 = $('header > nav > .gnb > li:nth-child(2) > a');
  const $mnu_3 = $('header > nav > .gnb > li:nth-child(3) > a');
  const $mnu_4 = $('header > nav > .gnb > li:nth-child(4) > a');
  const $mnu_5 = $('header > nav > .gnb > li:nth-child(5) > a');
  const $mnu_6 = $('header > nav > .gnb > li:nth-child(6) > a');

  //첫번째 메뉴에 대한 클릭이벤트 구문
  $mnu_1.on('click', function (evt) {
    evt.preventDefault();
    console.log('첫번째 메뉴 클릭 성공~!');
    $('html,body').animate({
      scrollTop:0
    });
  });

  $mnu_2.on('click',function(evt){
    evt.preventDefault();
  
    $('html,body').animate({
      scrollTop:700
    });
  });
  
  $mnu_3.on('click',function(evt){
    evt.preventDefault();
  
    $('html,body').animate({
      scrollTop:1400
    });
  });
  
  $mnu_4.on('click',function(evt){
    evt.preventDefault();
  
    $('html,body').animate({
      scrollTop:2100
    });
  });
  
  $mnu_5.on('click',function(evt){
    evt.preventDefault();
    
    $('html,body').animate({
      scrollTop:2800
    });
  });
  
  $mnu_6.on('click',function(evt){
      evt.preventDefault();
      
      $('html,body').animate({
        scrollTop:3500
    });
  });
});




