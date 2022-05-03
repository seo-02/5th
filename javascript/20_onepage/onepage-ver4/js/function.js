//준비핸들러 10번 작성하기
$(document).ready(function(){

  //메뉴셀렉팅  
  const $mnu = $('header > nav > .gnb > li > a');

  /*
                        scrollTop
      어바웃미의 시작점     0
      포폴작품              700
      UX디자인              1400
      보유스킬              2100
      프로젝트              2800
      에필로그              3500
  */

  //배열을 이용해서 여러 데이터값을 한꺼번에 저장할 수 있다.
  const arrTopVal = [];//각 section의 top값
  
  //어떤 요소의 top값 - (문서/브라우저/body)로 부터의 거리 => .offset()   
  // arrTopVal.push($('#aboutme').offset().top);
  // arrTopVal.push($('#portfolio').offset().top);
  // arrTopVal.push($('#uxdesign').offset().top);
  // arrTopVal.push($('#skill').offset().top);
  // arrTopVal.push($('#project').offset().top);
  // arrTopVal.push($('#epilogue').offset().top);

  //for 반복문을 이용해서 배열에 top값을 추가
  const $section = $('section');
  //console.log('section 태그의 개수는',$section.length);

  for(let i=0;i<$section.length;i++){
    arrTopVal.push($section.eq(i).offset().top);
  }

  //각 section이 시작하는 TOP 값
  console.log('arrTopVal =',arrTopVal);


  //함수는 반복되는 코드를 일괄처리하는데 유용하다.
  const pageMove = function(topVal){
    $('html,body').animate({
      scrollTop:topVal
    });    
  };

  //6개의 메뉴에 대한 클릭이벤트 구문
  $mnu.on('click', function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);//인덱스 0~5



    //$mnu.eq(nowIdx).parent().addClass('on');
    //$mnu.eq(nowIdx).parent().siblings().removeClass('on');

    pageMove(arrTopVal[nowIdx]);//페이지이동함수 호출
  });


  //스크롤바의 top값에 따른 메뉴 활성화 표시
  $(window).on('scroll', function(){
    
    const scrollTop = $(this).scrollTop();
    //console.log('scrollTop =',scrollTop);

    for(let i=0;i<$mnu.length;i++){
      if(scrollTop>=arrTopVal[i]){
        //메뉴활성화표시
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on')
      }
    }

/*    
    if(scrollTop>=arrTopVal[0]){
      //메뉴활성화표시
      $mnu.eq(0).parent().addClass('on').siblings().removeClass('on')
    }

    if(scrollTop>=arrTopVal[1]){
      //메뉴활성화표시
      $mnu.eq(1).parent().addClass('on').siblings().removeClass('on')
    }

    if(scrollTop>=arrTopVal[2]){
      //메뉴활성화표시
      $mnu.eq(2).parent().addClass('on').siblings().removeClass('on')
    }

    if(scrollTop>=arrTopVal[3]){
      //메뉴활성화표시
      $mnu.eq(3).parent().addClass('on').siblings().removeClass('on')
    }

    if(scrollTop>=arrTopVal[4]){
      //메뉴활성화표시
      $mnu.eq(4).parent().addClass('on').siblings().removeClass('on')
    }


    if(scrollTop>=arrTopVal[5]){
      //메뉴활성화표시
      $mnu.eq(5).parent().addClass('on').siblings().removeClass('on')
    }

*/

  });

});




