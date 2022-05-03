/**
    1. 썸네일을 누른다. => (ul.thmbs>li>a)을 click 한다.

    2. a태그를 눌렀을 때 큰 이미지로 이동하는 a태그의 기본기능이 작동되는 것을 막는다.

    3. 큰 이미지가 변한다.

        1) 이번에 클릭한 a 태그의 href 속성값을 가져와서 ...

        2) #screen 요소의 src 속성값으로 넣어준다.

*/

const $thmbs = document.querySelectorAll('.thmbs a');
const $screen = document.querySelector('#screen');

//for 반복문을 활용하여 9개의 이벤트구문을 한번에 작성
//forEach(), while, do~while 가능
for(let idx=0;idx<9;idx++){
  
  $thmbs[idx].addEventListener('click', function(evt){
    evt.preventDefault();

    const imgSrc = this.getAttribute('href');
    $screen.setAttribute('src',imgSrc);
  });

}