$( document ).ready(function() {

	$('.postsSlider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					dots: false
				}
			}
		]
	});

	$('.nav__switch').on('click', function(e) {
		$('.nav__switch, .nav__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
	$(document).on('scroll', function(e) {
		let top = $('html').scrollTop();
		if(top > 0) {
			$('.header__top').addClass('active');
		} else {
			$('.header__top').removeClass('active');
		}
		
	});


});