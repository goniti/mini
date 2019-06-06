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
        keyboard: {
            enabled: true,
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
        loop: true,
    })

    //portfolio Carousel
    let portfolioSwiper = new Swiper('.portfolio__swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 60,
        effect: 'fade',
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.portfolio__btn-next',
            prevEl: '.portfolio__btn-previous',
        },
    });

    $(".portfolio__btn-close").click(function () {
        portfolioSwiper.on('click', function (e, h) {
            var el = e.target || e.currentTarget;
            el.remove()
            this.update()
        });
    });

    //project toolbar
    let galleryCategory = "";
    $(".project__item").click(function () {
        galleryCategory = this.id;
        $(".project__columns").fadeTo(150, 0.15);
        $(".project__columns div").not("." + galleryCategory).fadeOut().removeClass('project__column-show');
        setTimeout(function () {
            $("." + galleryCategory).fadeIn().addClass('project__column-show');
            $(".project__columns").fadeTo(300, 1);
        }, 300);

    });
// GALLERY ON CLICK 



});