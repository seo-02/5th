$(function(){

    const $gnbmnu = $('.gnb>li');
    const $sub = $gnbmnu.children('.sub');

    let mnuIdx = null;//0~4의 메뉴인덱스 번호

    //각 메뉴 글자의 width 값 추출해야 margin-left 값을 설정 가능
    // console.log($gnbmnu.eq(0).find('span').width());//첫번째 메뉴 width값
    // console.log($gnbmnu.eq(1).find('span').width());//두번째 메뉴 width값
    // console.log($gnbmnu.eq(2).find('span').width());//세번째 메뉴 width값
    // console.log($gnbmnu.eq(3).find('span').width());//네번째 메뉴 width값
    // console.log($gnbmnu.eq(4).find('span').width());//다섯번째 메뉴 width값

    //mouseenter+mouseleave
    $gnbmnu.hover(
        function(){
            mnuIdx = $gnbmnu.index(this);

            //동적으로 활성화표시 bar를 생성
            $gnbmnu.eq(mnuIdx).children('a').append('<span class="bar"></span>');

            const barWidth = $gnbmnu.eq(mnuIdx).find('span').width();

            $gnbmnu.eq(mnuIdx).find('.bar').css({
                width:barWidth,
                marginLeft:-barWidth/2
            }).fadeIn(100);

            $sub.eq(mnuIdx).fadeIn(100);
        }
        ,
        function(){
            $('.bar').remove();//특정요소를 제거
            $sub.hide();
        }
    );
});