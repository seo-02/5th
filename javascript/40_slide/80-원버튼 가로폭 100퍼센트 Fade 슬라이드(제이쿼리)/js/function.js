//약식 준비핸들러
$(function() {
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $slides = $('.slides > .slides-container > p');

	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

	const $btnAuto = $('.btn_auto');

	let intervalKey = null;

	let nowIdx = Math.floor(Math.random()*5); //인디케이터를 기준으로 0~4 랜덤 추출

	//초기화 작업 
	$slides.eq(nowIdx).show();
	$indicator.eq(nowIdx).parent().addClass('on');

	const fadeFn = function(){
		//인디케이터 활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//슬라이드 처리
		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);
	};

	//인디케이터에 대한 클릭이벤트
	$indicator.on('click', function(evt){
		evt.preventDefault();
		
		//nowIdx 추출
		nowIdx = $indicator.index(this);

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click', function(evt){
		evt.preventDefault();

		if(nowIdx<$indicator.length-1){
			nowIdx++;
		}else{
			nowIdx = 0;
		}

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출
		
	});

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt){
		evt.preventDefault();
		
		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx = $indicator.length-1;			
		}

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출

	});

	//원버튼 자동재생
	$btnAuto.on('click', function(){
		if($(this).hasClass('pause')){//진행중....
			//1. pause 클래스 제거
			$(this).removeClass('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);

		}else{//멈춰진 상태....

			$btnAuto.addClass('pause');

			intervalKey = setInterval(function(){
				$btnNext.trigger('click');
			},2000);
		}
	});

});
