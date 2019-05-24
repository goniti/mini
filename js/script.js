//initialize
$(document).ready(function () {
    //Navbar
    const nav = $('.navbar__link');
    nav.click(function () {
        $(this).addClass('navbar__link--is-active').siblings().removeClass('navbar__link--is-active');
    });

    //Carousel
    let mySwiper = new Swiper('.references__swiper-container', {
        // Optional parameters
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        mousewheel: true,
        loop: true,
    })

});

