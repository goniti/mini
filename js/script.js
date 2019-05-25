//initialize
$(document).ready(function () {
    //Navbar
    const nav = $('.navbar__link');
    nav.click(function () {
        $(this).addClass('navbar__link--is-active').siblings().removeClass('navbar__link--is-active');
    });

    //Header Carousel
    let mainSwiper = new Swiper('.main__swiper-container', {
        // Optional parameters
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
    })


    //references Carousel
    let referencesSwiper = new Swiper('.references__swiper-container', {
        // Optional parameters
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        mousewheel: true,
        loop: true,
    })
});

