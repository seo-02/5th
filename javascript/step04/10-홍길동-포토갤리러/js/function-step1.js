
const $thmb1 = document.querySelector('.thmbs>li:nth-child(1)>a')
const $thmb2 = document.querySelector('.thmbs>li:nth-child(2)>a');
const $thmb3 = document.querySelector('.thmbs>li:nth-child(3)>a')
const $thmb4 = document.querySelector('.thmbs>li:nth-child(4)>a')
const $thmb5 = document.querySelector('.thmbs>li:nth-child(5)>a')
const $thmb6 = document.querySelector('.thmbs>li:nth-child(6)>a')
const $thmb7 = document.querySelector('.thmbs>li:nth-child(7)>a')
const $thmb8 = document.querySelector('.thmbs>li:nth-child(8)>a')
const $thmb9 = document.querySelector('.thmbs>li:nth-child(9)>a')
const $screen = document.querySelector('#screen');


$thmb1.addEventListener('click', function(evt){

    evt.preventDefault();
  
    let imgSrc = $thmb1.getAttribute('href');
  
    $screen.setAttribute('src', imgSrc)
  });

//두번째 썸네일에 대한 click 이벤트 구문
$thmb2.addEventListener('click', function(evt){    

    evt.preventDefault();//a태그의 기본기능 작동불능

    //큰 이미지가 변한다.

        //1) 이번에 클릭한 a요소의 href 속성값을 가져와서 ...
        const imgSrc = $thmb2.getAttribute('href');

        //2) #screen 요소의 src 속성값으로 넣어준다.
        $screen.setAttribute('src', imgSrc);
})


$thmb3.addEventListener('click', function(evt){

  evt.preventDefault();

  let imgSrc = $thmb3.getAttribute('href');

  $screen.setAttribute('src', imgSrc)
});


$thmb4.addEventListener('click', function(evt){

    evt.preventDefault();
  
    let imgSrc = $thmb1.getAttribute('href');
  
    $screen.setAttribute('src', imgSrc)
  });


  $thmb5.addEventListener('click', function(evt){
  
      evt.preventDefault();
    
      let imgSrc = $thmb5.getAttribute('href');
    
      $screen.setAttribute('src', imgSrc)
    });


    $thmb6.addEventListener('click', function(evt){
    
        evt.preventDefault();
      
        let imgSrc = $thmb6.getAttribute('href');
      
        $screen.setAttribute('src', imgSrc)
      });



      $thmb7.addEventListener('click', function(evt){

        evt.preventDefault();
      
        let imgSrc = $thmb7.getAttribute('href');
      
        $screen.setAttribute('src', imgSrc)
      });
      


$thmb8.addEventListener('click', function(evt){

    evt.preventDefault();
  
    let imgSrc = $thmb8.getAttribute('href');
  
    $screen.setAttribute('src', imgSrc)
  });


  $thmb9.addEventListener('click', function(evt){
  
      evt.preventDefault();
    
      let imgSrc = $thmb9.getAttribute('href');
    
      $screen.setAttribute('src', imgSrc)
    });