(function ($) {

    $(document).ready(function () {

        // sticky header --------
        function sticky_header() {
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();


        //  Back to top button -------------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });


        // animation for Back to top button -------------
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });


        // Hamburger-menu --------------
        $(document).on('click', function (event) {
            // Check if the click is outside the ofcanvas menu and the hamburger menu
            if (!$(event.target).closest('.ofcavas-menu, .hamburger-menu').length) {
                $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom, .ofcavas-menu').removeClass('current');
            }
        });

        // Toggle the ofcavas menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom, .ofcavas-menu').toggleClass('current');
        });

        // Hide the ofcavas menu when a link is clicked
        $('.ofcanvas_body a').on('click', function () {
            $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom, .ofcavas-menu').removeClass('current');
        });



        // Accordian --------------
        $(".accordian_item").click(function() {
            if ($(this).hasClass("active")) {
                // If the clicked item is active, remove the active class and close it
                $(this).removeClass("active");
                $(this).find(".accordian_title").removeClass("active");
                $(this).find(".accordian_inner").slideUp();
            } else {
                // Remove active class from all items and close all accordians
                $(".accordian_item").removeClass("active").find(".accordian_title").removeClass("active");
                $(".accordian_item").find(".accordian_inner").slideUp();

                // Add active class to the clicked item and open its content
                $(this).addClass("active");
                $(this).find(".accordian_title").addClass("active");
                $(this).find(".accordian_inner").slideDown();
            }
            return false;
        });


        // AOS animation ----------
        AOS.init({
            duration: 700,
            offset: 0,
        });


        // Owl Carousel ----------
        $(".owl-carousel").owlCarousel({
            items: 3,
            autoplay: false,
            autoplayTimeout: 3500,
            startPosition: 0,
            rtl: false,
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            navText: [
                        '<img src="images/left.svg" alt="">',
                        '<img src="images/right.svg" alt="">'
                    ],
            responsive:{
                0: {
                    items: 1,                       
                },
                767: {
                    items: 1,                       
                },
                768: {
                    items: 2,                     
                },
                992: {
                    items: 3,                    
                },
                1200: {
                    items: 3,                       
                }
            }

        });

        
    });

})(jQuery);