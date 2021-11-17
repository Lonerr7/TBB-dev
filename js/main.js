document.addEventListener("DOMContentLoaded", function () {
	// === Slider ===
	const slider = $('.documentation__slider');

	// === Progress bar ===
	const slides = document.querySelectorAll('.slider__item');
	const maxSlides = document.querySelector('.slider__progressbar--all');

	maxSlides.textContent = slides.length;

	const progressBar = $('.slider__progressbar');
	
	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    const calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
  });

	slider.slick({
		// centerMode: true,
		// centerPadding: '60px',
		slidesToShow: 3,
		infinite: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	
});