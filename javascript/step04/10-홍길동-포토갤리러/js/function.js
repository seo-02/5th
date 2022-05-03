/**
    1. 썸네일을 누른다. => (ul.thmbs>li>a)을 click 한다.

    2. a태그를 눌렀을 때 큰 이미지로 이동하는 a태그의 기본기능이 작동되는 것을 막는다.

    3. 큰 이미지가 변한다.

        1) 이번에 클릭한 a 태그의 href 속성값을 가져와서 ...

        2) #screen 요소의 src 속성값으로 넣어준다.

*/

const $thmbs = $('.thmbs a');
const $screen = $('#screen');

//forEach() 를 이용한 이벤트 구문 작성
$thmbs.forEach(function($thmb){

  $thmb.addEventListener('click', function(evt){
    evt.preventDefault();

    const imgSrc = attr(this,'href');//게터역할

    attr($screen,'src',imgSrc);//세터역할
  });
});