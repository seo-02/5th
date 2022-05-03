//표준계열 브라우저(Others)
document.addEventListener('DOMContentLoaded', function() {
	//배열형식으로 저장 [?,?,?...]
	const $indicators = document.querySelectorAll('.slides > .slides-pagination > li > a');
	const $container = document.querySelector('.slides > .slides-container');
	const $btnPrev = document.querySelector('.slides > a.prev');
	const $btnNext = document.querySelector('.slides > a.next');

	const $btnAuto = document.querySelector('.slides>.btn_auto'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = 1; //현재 보여지고 있는 슬라이드의 인덱스번호
	let oldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//전체슬라이드가 7장이므로 컨테이너의 크기를 변경
	$container.style.width = 100 * 7 + '%';

	//5개의 indicator에 대한 클릭 이벤트 구문
	$indicators.forEach(function($indicator, idx) {
		$indicator.addEventListener('click', function(evt) {
			evt.preventDefault();

			oldIdx = nowIdx - 1;
			nowIdx = idx + 1;
			console.log('nowIdx=', nowIdx);

			//console.log('this=',this);//이번에 클릭한 요소
			//console.log('this.parentElement=',this.parentElement);//이번에 클릭한 요소의 부모

			//이번에 클릭한 요소의 부모에 on 추가
			$indicators[idx].parentElement.classList.add('on');

			//이전 $indicator에 붙어있던 on 제거
			$indicators[oldIdx].parentElement.classList.remove('on');

			//컨테이너 이동
			$container.style.left = -(100 * nowIdx) + '%';
		});
	});

	//이전버튼
	$btnPrev.addEventListener('click', function(evt) {
		evt.preventDefault();

		oldIdx = nowIdx;
		nowIdx--;

		//컨테이너 이동
		$container.style.left = -(100 * nowIdx) + '%';

		if (nowIdx === 0) {
			setTimeout(function() {
				$container.style.transition = 'none';
				$container.style.left = -(100 * 5) + '%';
			}, 400);

			nowIdx = 5;
		}

		$container.style.transition = 'all 0.4s ease-in-out';

		//인디케이터 활성화표시
		$indicators[nowIdx - 1].parentElement.classList.add('on');
		$indicators[oldIdx - 1].parentElement.classList.remove('on');
	});

	//다음버튼
	$btnNext.addEventListener('click', function(evt) {
		evt.preventDefault();

		oldIdx = nowIdx;
		nowIdx++;

		//컨테이너 이동
		$container.style.left = -(100 * nowIdx) + '%';

		if (nowIdx === 6) {
			setTimeout(function() {
				$container.style.transition = 'none';
				$container.style.left = '-100%';
			}, 400);

			nowIdx = 1;
		}

		$container.style.transition = 'all 0.4s ease-in-out';

		//인디케이터 활성화표시
		$indicators[nowIdx - 1].parentElement.classList.add('on');
		$indicators[oldIdx - 1].parentElement.classList.remove('on');
	});

	//원버튼 자동재생
	$btnAuto.addEventListener('click', function() {
		if (this.classList.contains('pause')) {
			//play중이면.... => pause 클래스가 붙어 있으면...
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면.... => pause 클래스가 붙어 있지 않으면...
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.click();
			}, 2000);
		}
	});
});
