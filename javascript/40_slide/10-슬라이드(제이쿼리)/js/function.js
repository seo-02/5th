/*
	알고리즘 == 로직 == 레시피
	
	1. 클릭한 인디케이터(a)가 몇번째 요소인지를 나타내는 index 번호를 추출
	
	2. 그 index 번호에 해당하는 a 요소의 부모에 .on 클래스를 추가한다.
	
	3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li에게서 .on 클래스를 제거한다.
	
	4. index 번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
*/

$(document).ready(function(){});

//약식 준비핸들러
$(function(){
	
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	
	let nowIdx = 0;
	
	$indicator.on('click', function(evt){
		evt.preventDefault();
	
		nowIdx = $indicator.index(this);
	
		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		
		//컨테이너이동
		$container.stop().animate({
			left : -1120*nowIdx
		});
	});


	
})






















