;(function($){
	"use strict";

    $(function() {
        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
            return false;
        });
    });




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

	$('.to-top').click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
        });

});


//////////BUTTON MENU/////////
$(function(){
	$('.btn-menu').click(function(){
		$('.popUp').toggleClass('js-hidden');
	});
});


})(jQuery);

//////MAP/////////
function initMap() {

    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -7.9327641, lng: 112.6377829},
        zoom: 12,
        disableDefaultUI: true,
        styles:[
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#c6cde2"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#8f9fc6"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
            {
                "color": "#5f73ab"
            },
            {
                "visibility": "simplified"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#5f73ab"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#e1e5f0"
            }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f9fc6"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#eeeeee"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#c6cde2"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f9fc6"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#ffffff"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#c6cde2"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#5f73ab"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#5f73ab"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f9fc6"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#e5e5e5"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#eeeeee"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#c9c9c9"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#e1e5f0"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f9fc6"
            }
            ]
        }
        ]
    });

var marker = new google.maps.Marker({
    position: {lat: -7.9327641, lng: 112.6377829},
    map: map,
    title: 'Jl. Ikan Piranha Atas'
});
};