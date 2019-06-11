;(function($){
	"use strict";
//////MAP/////////
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8,
			disableDefaultUI: true
		});
	}

/////////WORKS SLIDER//////////
	$(function () {
		const owlWorks = $(".works__slider");
		owlWorks.owlCarousel({
			items: 1,
			loop: true,
			autoplay:true,
			nav: true,
			dots: true,
			navText: [
			'<span class="arrow-owl arrow-left"></span>',
			'<span class="arrow-owl arrow-right"></span>'
			],
			responsive: {
				0: {
					nav: false
				},
				768: {
					nav: false
				},
				992: {
					nav: true
				}
			}
		});
	});

/////////OUR TEAM SLIDER////////
	$(function () {
		const owlContact = $(".our-team__slider");
		owlContact.owlCarousel({
			items: 3,
			loop: true,
			autoplay:true,
			nav: true,
			dots: false,
			navText: [
			'<span class="arrow-owl arrow-left"></span>',
			'<span class="arrow-owl arrow-right"></span>'
			],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				768: {
					items: 2,
					nav: false
				},
				992: {
					nav: true
				}
			}
		});
	});

//////FIXED MENU AND BUTTON TO TOP/////////
	$(function() {
		const topline = $('.top-menu');
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('.to-top').fadeIn();
			} else {
				$('.to-top').fadeOut();
			}

			if($(this).scrollTop()) {
				topline.addClass('fixed');
			} else {
				topline.removeClass('fixed');
			}
		});

		$('.to-top').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});

	});

//////////BUTTON MENU/////////

$(function(){
  $('.btn-menu').click(function(){
    $('.popUp').toggleClass('js-hidden');
  });
});

})(jQuery);