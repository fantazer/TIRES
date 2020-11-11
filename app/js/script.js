$(document).ready(function () {
	$('.slider-partner').slick({
		slidesToShow: 4,
		speed: 500,
		dots:true,
		arrows:false,
		rows:0,// убирает вложенный пустой div
		//autoplay: true,
		//fade: true
		//autoplaySpeed: 8000, time between
		customPaging : function(slider, i) {
			return '<span class="dot"></span>';
		}
	});

	// === custom arrow el ===
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	// custom arrow el === end
});
