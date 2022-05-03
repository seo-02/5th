/**
    1. 썸네일을 누른다. => (ul.thmbs>li>a)을 click 한다.

    2. a태그를 눌렀을 때 큰 이미지로 이동하는 a태그의 기본기능이 작동되는 것을 막는다.

    3. 큰 이미지가 변한다.

        1) 이번에 클릭한 a 태그의 href 속성값을 가져와서 ...

        2) #screen 요소의 src 속성값으로 넣어준다.

 */

const $thmbs = document.querySelectorAll('.thmbs>li>a');//배열형식[idx]
const $screen = document.querySelector('#screen');

//첫번째 썸네일에 대한 click 이벤트구문
$thmbs[0].addEventListener('click', function(evt){
  evt.preventDefault();

  //this = Current HTML Element (이번에 ㅇㅇ한 바로 그 요소)
  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
})

//두번째 썸네일에 대한 click 이벤트구문
$thmbs[1].addEventListener('click', function(evt){
  evt.preventDefault();

  //this = Current HTML Element (이번에 ㅇㅇ한 바로 그 요소)
  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[2].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[3].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[4].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[5].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[6].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[7].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});

$thmbs[8].addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = this.getAttribute('href');
  $screen.setAttribute('src', imgSrc);
});