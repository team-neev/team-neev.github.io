/*

 1. BANNER CAROUSEL
 2. PARALLAX SECTIONS
 3. CLIENT CAROUSEL
 4. COMMENT CAROUSEL
 5. GOOGLE MAP




*/

(function ($) {

    'use strict';


    /* ----------------------------------------- */
    /* 1. BANNER CAROUSEL
    /* ----------------------------------------- */

    var bannerCarousel = $(".banner-carousel");

    if(bannerCarousel.length) // CHECK IF ELEMENT EXIST
    {
        bannerCarousel.owlCarousel({
            slideSpeed: 600,
            paginationSpeed: 600,
            navigation : false,
            pagination: false,
            singleItem: true,
            transitionStyle : "fadeUp",
            autoPlay: '5000'
        });
    }




    /* ----------------------------------------- */
    /* 2. PARALLAX SECTIONS
    /* ----------------------------------------- */

    var parallaxSections = $('.parallax');

    if(parallaxSections.length) // CHECK IF ELEMENT EXIST
    {
        parallaxSections.parallax({
        speed :	0.5
        });
    }




    /* ----------------------------------------- */
    /* 3. CLIENT CAROUSEL
    /* ----------------------------------------- */

    var clientCarousel = $(".client-carousel");

    if(clientCarousel.length) // CHECK IF ELEMENT EXIST
    {
        clientCarousel.owlCarousel({
            navigation : false,
            pagination: false,
            items : 5
        });
    }




    /* ----------------------------------------- */
    /* 4. COMMENT CAROUSEL
    /* ----------------------------------------- */

    var commentCarousel = $(".comment-carousel");

    if(commentCarousel.length) // CHECK IF ELEMENT EXIST
    {
        commentCarousel.owlCarousel({
            navigation : false,
            pagination: false,
            singleItem: true
        });
    }




    /* ----------------------------------------- */
    /* 5. GOOGLE MAP
    /* ----------------------------------------- */

    var googleMap = $('#googlemap');

    if(googleMap.length) // CHECK IF ELEMENT EXIST
    {
        googleMap.CustomMap();
    }




})(jQuery);