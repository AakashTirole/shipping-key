$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 45) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
    });

    /****/
    $(".toggle-menu").click(function () {
        $('header nav').slideToggle('open');
        $('body').toggleClass('navbar-toggle');
    });


    $(".get-started a").click(function () {
        $('html,body').animate({
            scrollTop: $('.' + $(this).attr('data-target') + '').offset().top - 0
        }, 'slow');
    });

    /***custom dropdown***/
    $('.custom-dropdown .dropdown-btn, .custom-dropdown .overlay').click(function () {
        $(this).parents('.custom-dropdown').toggleClass('show-c-dropdown');
    });
    /***end***/
});

/**********owl-carousel******/
$('.home-slider .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
/***end***/

/**********owl-carousel******/
$('.testimonial-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
/***end***/


/*****************product details slider*************/
$(document).ready(function () {
    // reference for main items
    var slider = $('#slider');
    // reference for thumbnail items
    var thumbnailSlider = $('#thumbnailSlider');
    //transition time in ms
    var duration = 500;

    // carousel function for main slider
    slider.owlCarousel({
        loop: false,
        nav: false,
        items: 1
    }).on('changed.owl.carousel', function (e) {
        //On change of main item to trigger thumbnail item
        thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });

    // carousel function for thumbnail slider
    thumbnailSlider.owlCarousel({
        loop: false,
        center: true, //to display the thumbnail item in center
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    }).on('click', '.owl-item', function () {
        // On click of thumbnail items to trigger same main item
        slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    }).on('changed.owl.carousel', function (e) {
        // On change of thumbnail item to trigger main item
        slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });


    //These two are navigation for main items
    $('.slider-right').click(function () {
        slider.trigger('next.owl.carousel');
    });
    $('.slider-left').click(function () {
        slider.trigger('prev.owl.carousel');
    });
});
/*****end*****/