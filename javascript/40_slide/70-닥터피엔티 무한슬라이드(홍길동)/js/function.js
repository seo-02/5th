//약식 준비핸들러
$(function() {
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.slides-prev');
	const $btnNext = $('.slides-next');

	const $btnAuto = $('.slides-auto');

	const $current = $('.slides>.slides-progress>.slides-current');
	const $bar = $('.slides>.slides-progress>.slides-bar');

	let intervalKey = null;

	let nowIdx = 0; //인디케이터를 기준으로 0~8

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 값 추출 1~4 정수
		/*
         현재 -> 이전버튼 누르면
          4   -> 3
          3   -> 2
          2   -> 1
          1   -> 0
          0   -> 4
      */
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 8;
		}

		$current.text('0' + (nowIdx + 1));

		$bar.width(0).stop().animate({
			width: 100
		}, 2000);

		//컨테이너 이동
		$container.stop().animate({
			left: '-800%'
		}, 400, function() {
			//맨 뒤의 한장을 컨테이너의 맨앞으로 이동
			$('.slides > .slides-container > li').last().prependTo($container);
			$container.css({ left: '-900%' });
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx < 8) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		$current.text('0' + (nowIdx + 1));

		$bar.width(0).stop().animate({
			width: 100
		}, 2000);

		$container.stop().animate({
			left: '-1000%'
		}, 400, function() {
			//맨 앞의 한장을 컨테이너의 맨뒤로 appendTo()
			$('.slides > .slides-container > li').first().appendTo($container);
			$container.css({ left: '-900%' });
		});
	});

	//원버튼 자동재생
	$btnAuto.on('click', function() {
		if ($(this).hasClass('pause')) {
			//play중이면.... => pause 클래스가 붙어 있으면...

			//1. pause 클래스 제거
			$(this).removeClass('pause');
			$bar.stop();
			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면.... => pause 클래스가 붙어 있지 않으면...
			//1. pause 클래스 추가
			$(this).addClass('pause');

			//자동실행 버튼을 누르면 딱 한번만 실행
			$bar.stop().animate({
				width: 100
			}, 2000, function() {
				$bar.width(0);
			});

			//자동실행 버튼을 누르면 딱 한번만 실행
			$btnNext.trigger('click'); //이벤트 강제발생

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.trigger('click'); //이벤트 강제발생
			}, 2000);
		}
	});
});
