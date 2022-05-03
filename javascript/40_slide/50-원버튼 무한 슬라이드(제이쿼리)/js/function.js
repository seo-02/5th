//약식 준비핸들러
$(function() {
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

	const $btnAuto = $('.slides>.btn_auto'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = 0;

	$indicator.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 값 추출
		nowIdx = $indicator.index(this);

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너이동
		$container.stop().animate({
			left: -1120 * (nowIdx + 5)
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx < 4) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		console.log('nowIdx =', nowIdx);

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: -1120 * 6
		}, 400, function() {
			//맨 앞의 한장을 맨뒤로 이동
			$('.slides > .slides-container > p:first-child').appendTo($container);
			$container.css({ left: -1120 * 5 });
		});
	});

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 4;
		}

		console.log('nowIdx =', nowIdx);

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: -1120 * 4
		}, 400, function() {
			//맨 뒤의 한장을 맨앞으로 이동
			$('.slides > .slides-container > p:last-child').prependTo($container);
			$container.css({ left: -1120 * 5 });
		});
	});

	//원버튼 자동재생
	$btnAuto.on('click', function() {
		if ($(this).hasClass('pause')) {
			//play중이면.... => pause 클래스가 붙어 있으면...
			//1. pause 클래스 제거
			$(this).removeClass('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면.... => pause 클래스가 붙어 있지 않으면...
			//1. pause 클래스 추가
			$(this).addClass('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.trigger('click');
			}, 2000);
		}
	});
});
