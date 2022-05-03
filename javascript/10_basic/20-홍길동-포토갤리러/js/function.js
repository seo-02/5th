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

	//제이쿼리 라이브러리를 이용한 코드작성
	$(document).ready(function(){

		const $thmbs = $('.thmbs a');

		$thmbs.on('click', function(evt){
			evt.preventDefault();

			const idx = $thmbs.index(this);

			$('.screen').css({
				backgroundImage : 'url(' +arrImg[idx]+ ')'
			});
		})

	});