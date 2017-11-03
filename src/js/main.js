(function ($) {
	"use strict";

	jQuery(document).ready(function($){

			$(".expertise-menu li").on("click", function(){
				$(".expertise-menu li").removeClass("active");
				$(this).addClass("active");
				var selsctor = $(this).attr('data-filter');
		           $(".portfilo-list").isotope({
		                filter: selsctor
		           });
			});

			$("ul#navigation, .slicknav_nav").onePageNav();
				jQuery(function($) {
					$('ul#navigation a, .slicknav_nav a').bind('click', function(event) {
						var $anchor = $(this);
						$('html').stop().animate({
						scrollTop: $($anchor.attr('href')).offset().top - 20
							}, 500);
						event.preventDefault();
				});
			});

			$('.mainmanu').slicknav({
                prependTo:'.responsive-menu'
			});

			$(window).on('scroll', function (){
		        if ($(window).scrollTop() > 100){
		            $('.header-absulate').addClass('header-fixed');
		        } else {
		            $('.header-absulate').removeClass('header-fixed');
		    	}

	            $(".single-progressbar").each(function() {
					var base = $(this);
					var windowHeight = $(window).height();
					var itemPos = base.offset().top;
					var scrollpos = $(window).scrollTop() + windowHeight - 100;
					if (itemPos <= scrollpos) {
						var auptcoun = base.find(".progress-bar").attr("aria-valuenow");
						base.find(".progress-bar").css({
							"width": auptcoun + "%"
						});
						var str = base.find(".skill_per").text();
						var res = str.replace("%", "");
						if (res === 0) {
							$({
								countNumber: 0
							}).animate({
								countNumber: auptcoun
							}, {
								duration: 1500,
								easing: 'linear',
								step: function() {
									base.find(".skill_per").text(Math.ceil(this.countNumber) + "%");
								}
							});
						}
					}
				});

				if ($(this).scrollTop() > 500) {
					$(".scroll-up-btn").fadeIn();
				} else {
					$(".scroll-up-btn").fadeOut();
				}
	        });

	        $('.portfolio-hover a').magnificPopup({
	        	type:'image',
	        	gallery:{
	        		enabled:true
	        	}
	        });

	        $(".testnonial-active").owlCarousel({
	            items:1,
	            loop:true,
	            dots:true,
	            nav:false,
	        });

			$(".scroll-up-btn").on("click", function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});

        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    &&
                    location.hostname === this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
	});

	jQuery(window).on('load', function(){
		$(".site-preloder").fadeOut(1000);
        $('.portfilo-list').isotope();
        new WOW().init();
	});
}(jQuery));