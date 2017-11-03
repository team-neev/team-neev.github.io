(function ($) {
	"use strict";

	jQuery(document).ready(function($){

			/* =============================================
					Portfolio JS
			===============================================*/
			$(".expertise-menu li").on("click", function(){
				$(".expertise-menu li").removeClass("active");
				$(this).addClass("active");
				var selsctor = $(this).attr('data-filter');
		           $(".portfilo-list").isotope({
		                filter: selsctor
		           });
			});

			/* =============================================
					One Page Nav JS
			===============================================*/
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

			/* =============================================
					Responsive menu JS
			===============================================*/
			$('.mainmanu').slicknav({
					prependTo:'.responsive-menu'
			});

			$(window).on('scroll', function (){
				/* =============================================
					Header Fixed JS
				===============================================*/
		        if ($(window).scrollTop() > 100){
		            $('.header-absulate').addClass('header-fixed');
		        } else {
		            $('.header-absulate').removeClass('header-fixed');
		    	}

		        /* =============================================
					Progress Bar JS
				===============================================*/
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
						if (res == 0) {
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

				/* =============================================
					Scroll to Top JS
				===============================================*/
				if ($(this).scrollTop() > 500) {
					$(".scroll-up-btn").fadeIn();
				} else {
					$(".scroll-up-btn").fadeOut();
				}
	        });

			/* =============================================
					Magnific JS
			===============================================*/
	        $('.portfolio-hover a').magnificPopup({
	        	type:'image',
	        	gallery:{
	        		enabled:true
	        	}
	        });

	        /* =============================================
					Testmonial JS
			===============================================*/
	        $(".testnonial-active").owlCarousel({
	            items:1,
	            loop:true,
	            dots:true,
	            nav:false,
	        });

	        /* =============================================
					Google Map JS
			===============================================*/
	        // var center = {lat: 23.1664026, lng: 89.4945859};
	        // $('.google-map')
		     //  .gmap3({
		     //    center: center,
		     //    zoom:14,
		     //    mapTypeId: "shadeOfGrey", // to select it directly
		     //    scrollwheel:false,
		     //    mapTypeControlOptions: {
		     //      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
		     //    }
		     //  })
		     //  .marker({
		     //    position: center,
		     //    icon: 'http://maps.google.com/mapfiles/marker_green.png'
		     //  })
		     //  .styledmaptype(
		     //    "shadeOfGrey",
		     //    [
		     //      {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
		     //      {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},
		     //      {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		     //      {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#F0DF3C"},{"lightness":20}]},
		     //      {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#F0DF3C"},{"lightness":17},{"weight":1.2}]},
		     //      {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#E9E9E9"},{"lightness":20}]},
		     //      {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#C5C5C5"},{"lightness":21}]},
		     //      {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
		     //      {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
		     //      {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
		     //      {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
		     //      {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":19}]},
		     //      {"featureType":"water","elementType":"geometry","stylers":[{"color":"#D9D9D9"},{"lightness":17}]}
		     //    ],
		     //    {name: "Google Map"}
		     //  );

		    /* =============================================
					Scroll to Top Click JS
			===============================================*/
			$(".scroll-up-btn").on("click", function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			} );

			/* =============================================
					Smooth scroll to anchor
			===============================================*/
			$('a[href^="#"]').on('click',function (e) {
				e.preventDefault();

				var target = this.hash;
				var $target = $(target);

				$('html, body').stop().animate({
					'scrollTop': $target.offset().top
				}, 900, 'swing', function () {
					window.location.hash = target;
				});
			});
	});

	jQuery(window).load(function(){
		/* =============================================
					Site Preloder JS
			===============================================*/
		$(".site-preloder").fadeOut(1000);

		/* =============================================
					Isotope  JS
			===============================================*/
		$(".portfilo-list").isotope();

		/* =============================================
					Wow JS
			===============================================*/
		new WOW().init();

	});


}(jQuery));