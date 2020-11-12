$(document).ready(function () {
	$('.slider-partner').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 500,
		dots:true,
		arrows:false,
		rows:0,
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
				slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
				slidesToScroll: 2,
      }
    }
  ],
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
