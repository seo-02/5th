$(function(){
  const $gnb = $('.gnb');
  const $lnb = $gnb.find('.lnb');

  $gnb.on('mouseover', function(){
    $lnb.stop().fadeIn(200);
  });

  $gnb.on('mouseout', function(){
    $lnb.stop().fadeOut(200);
  });
});