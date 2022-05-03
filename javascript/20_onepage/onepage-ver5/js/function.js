$(document).ready(function(){

  const $mnu = $('header > nav > .gnb > li > a');

  const arrTopVal = [];
  let nowIdx = null;

  //각 article의 offset().top 배열에 저장
  for(let i=0;i<$mnu.length;i++){
    arrTopVal[i] = $('article').eq(i).offset().top;
  }

  console.log('arrTopVal =',arrTopVal);

  //네비게이션 메뉴에 대한 클릭이벤트 구문
  $mnu.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $mnu.index(this);

    $('html,body').stop().animate({
      scrollTop : arrTopVal[nowIdx]-69
    },400)
  });


  //브라우저의 scroll 이벤트 구문
  $(window).on('scroll',function(){    
    const scrollTop = $(this).scrollTop();

    console.log('scrollTop=',scrollTop)

    for(let i=0;i<arrTopVal.length;i++){
      if(scrollTop>=arrTopVal[i]-69){

        //활성화표시
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');

      } else if(scrollTop<arrTopVal[0]-69){
        $mnu.parent().removeClass('on');
      }
    }

    //footer가 화면에 노출되는 순간부터 TOP 아이콘이 footer 바로 위에 있게 하고 싶다.
    //원리 = footer.offset().top = scrollTop + 브라우저의 높이값
    //view = (scrollTop + 브라우저의 높이값) - footer.offset().top
    //view = 0 이라면 브라우저 바로 밑에 푸터가 있는 상태(노출직전 상태)
    //view > 0 이라면 footer가 화면에 노출되었다는 것을 의미한다.
    //view > 0 상태에서 view 값이 갖는 의미는 footer가 노출되는 높이이다.

    const view = (scrollTop + $(this).height()) - $('footer').offset().top

    if(view>0){
      $('aside').css({marginBottom:view});
    }else{
      $('aside').css({marginBottom:0});
    }

  });


  //.logo>a, aside>a 클릭시 맨위로 이동
  $('.logo>a, aside>a').on('click', function(evt){
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop:0
    })
  });

  //처음 접속시 load 이벤트 구문
  $(window).on('load', function(){
    $('html,body').stop().animate({
      scrollTop:0
    });
  });






});


