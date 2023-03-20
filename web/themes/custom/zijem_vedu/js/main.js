
(function($) {
	"use strict";

	// -----------------------------------------------------------------------------
	// This section contain all code for page header component
	// -----------------------------------------------------------------------------
	var siteHeader = $( '#navbar' );
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 50;

	if ( siteHeader.length ) {
		checkSimpleNavigation( currentTop );

		$( window ).on( 'scroll', function() {
			if ( ! scrolling ) {
				scrolling = true;
				( ! window.requestAnimationFrame ) ? setTimeout( autoHideHeader, 250 ) : requestAnimationFrame( autoHideHeader );
			}
		} );

		function autoHideHeader() {
			var currentTop = $( window ).scrollTop();

			checkSimpleNavigation( currentTop );

			previousTop = currentTop;
			scrolling = false;
		}

		function checkSimpleNavigation( currentTop ) {
			if ( currentTop > scrollOffset ) {
				siteHeader.addClass( 'navbar--collapsed' );
				return;
			}
			siteHeader.removeClass( 'navbar--collapsed' );
		}
	}

	const swiper_testimonials = new Swiper('.swiper-testimonials', {
		loop: true,
		// centeredSlides: true,
		// slidesPerView: 1,
		spaceBetween: 50,

		// Navigation arrows
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const swiper_members = new Swiper('.swiper-members', {
		loop: true,
		centeredSlides: true,
		slidesPerView: "auto",
		spaceBetween: 30,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop() * -1;
    $('.freeweb-banner').css('right', scroll);
  });

})( jQuery );
