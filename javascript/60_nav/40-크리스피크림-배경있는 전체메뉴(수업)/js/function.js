$(function(){

    const $gnb = $('#wrap > header > .container > nav > .gnb');
    const $lnb = $gnb.find('.lnb');
    const $bg_lnb = $('.bg_lnb');

    $gnb.on('mouseenter', function(){
        $bg_lnb.stop().slideDown(50);//배경판 노출
        $lnb.stop().slideDown(50);//서브메뉴 노출
        // $bg_lnb.stop().fadeIn(50);//배경판 노출
        // $lnb.stop().fadeIn(50);//서브메뉴 노출
    });

    $gnb.on('mouseleave', function(){
        $lnb.stop().slideUp(50);
        $bg_lnb.stop().slideUp(50);
        // $lnb.stop().fadeOut(50);
        // $bg_lnb.stop().fadeOut(50);
    });

    $bg_lnb.on('mouseover', function(){
        $gnb.trigger('mouseover');
    });
    
    $bg_lnb.on('mouseout', function(){
        $gnb.trigger('mouseout');        
    });
    
});