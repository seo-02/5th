	/*
		알고리즘
		
		1. 썸네일(a) 에 대한 클릭이벤트 구문 작성
		2. a 태그의 기본기능 작동금지
		3. 배열데이터에서 알맞은 이미지경로를 가져온다.
		4. p의 배경이미지를 변경한다.
	*/
	
	const arrImg = [
		'./images/big1.jpg',
		'./images/big2.jpg',
		'./images/big3.jpg',
		'./images/big4.jpg',
		'./images/big5.jpg',
		'./images/big6.jpg',
		'./images/big7.jpg',
		'./images/big8.jpg',
		'./images/big9.jpg',
	]

	//DOMTree 구성이 완료된 시점에 실행
	window.addEventListener('DOMContentLoaded', function(){

		const $thmbs = document.querySelectorAll('.thmbs a');//배열형식 저장
		const $screen = document.querySelector('.screen');

		$thmbs.forEach(function($thmb, idx){

			$thmb.addEventListener('click', function(evt){

				evt.preventDefault();

				const urlSrc = 'url(' +arrImg[idx]+ ')'

				//키포인트 - 인라인 방식으로 CSS 속성 추가(2가지 방법)
				$screen.style.setProperty('background-image',urlSrc);
				$screen.style.backgroundImage = urlSrc;

			});

		});

	}); 