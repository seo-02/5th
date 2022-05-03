$(function(){

    const $mnu_srv = $('.gnb>li>a').first();
    const $bg_lnb = $('.bg_lnb');

    $mnu_srv.on('click', function(evt){
        evt.preventDefault();

        if($(this).parent().hasClass('on')){//서브메뉴 노출상태

            $bg_lnb.stop().animate({
                top : -400
            },150,'easeInSine');

            $(this).parent().removeClass('on');       
            
        }else{//서브메뉴 숨김상태
            
            $bg_lnb.stop().animate({
                top : 100
            },200,'easeOutQuad');

            $(this).parent().addClass('on');

        }
    });
});