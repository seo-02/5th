$(function() {
	//로딩중
	const $loading = $('.loading');
	$loading.children('p').fadeOut();
	$loading.delay(350).fadeOut(800);

	const $h1 = $('h1');
	const $home = $('#home');
	const $h2 = $home.find('h2');

	const $header = $('header');
	const $nav = $header.find('nav');
	const $btnGnb = $header.find('.btn-gnb');

	const $aside = $('aside');

	$(window).on('load resize', function() {
		$home.height($(window).height());

		$h1.css({
			top: $h2.offset().top - 72,
			marginLeft: -$h1.width() / 2
		});

		if ($(window).width() > 640) {
			//PC모드
			$h1.css({
				top: $h2.offset().top - 72,
				marginLeft: -$h1.width() / 2
			});

			$nav.show();
		} else {
			//모바일
			$h1.css({
				top: $h2.offset().top - 100,
				marginLeft: -$h1.width() / 2
			});

			$btnGnb.removeClass('clse');
			$nav.hide();
		}
	});

	$btnGnb.on('click', function() {
		$(this).toggleClass('clse');
		$nav.toggle();
	});

	$(window).on('scroll', function() {
		//현재 스크롤바의 top 값 추출
		let scrollTop = $(this).scrollTop();

		if (scrollTop > $(this).height()) {
			$header.addClass('fixed');
			$('#aboutme').css({
				marginTop: $header.height()
			});
		} else {
			$header.removeClass('fixed');
			$('#aboutme').css({
				marginTop: 0
			});
		}
	}); //end of scroll

	//top 우측하단 화살표
	$(window).on('scroll', function() {
		//현재 스크롤바의 top 값 추출
		let scrollTop = $(this).scrollTop();

		if (scrollTop > 120) {
			$aside.stop().fadeIn();
		} else {
			$aside.stop().fadeOut();
		}

		//footer가 화면에 노출되는 순간부터 TOP 아이콘이 footer 바로 위에 있게 하고 싶다.
		//원리 = footer.offset().top = scrollTop + 브라우저의 높이값
		//view = (scrollTop + 브라우저의 높이값) - footer.offset().top
		//view = 0 이라면 브라우저 바로 밑에 푸터가 있는 상태(노출직전 상태)
		//view > 0 이라면 footer가 화면에 노출되었다는 것을 의미한다.
		//view > 0 상태에서 view 값이 갖는 의미는 footer가 노출되는 높이이다.

		const view = scrollTop + $(this).height() - $('footer').offset().top;

		if (view > 0) {
			$aside.css({ marginBottom: view });
		} else {
			$aside.css({ marginBottom: 0 });
		}
	}); //end of scroll
});
