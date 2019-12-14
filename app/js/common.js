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
		$(this).toggleClass('active');
	});


});