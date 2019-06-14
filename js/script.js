//initialize
$(document).ready(function () {
    // GALLERY Overlay 

    const buttons = document.querySelectorAll('.gallery__column');
    const overlay = document.querySelectorAll('.overlay');
    const overlayImage = document.querySelector('.overlay__inner img');

    function open(e) {
        overlay.classList.add('open');
        const src = e.currentTarget.querySelector('img').src;
        overlayImage.src = src;
    }

    function close() {
        overlay.classList.remove('open');
    }

    buttons.forEach(button => button.addEventListener('click', open));
    overlay.addEventListener('click', close);




    //Navbar
    const nav = $('.navbar__link');
    nav.click(function () {
        $(this).addClass('navbar__link--is-active').siblings().removeClass('navbar__link--is-active');
    });

    //GALLERY toolbar
    let galleryCategory = "gallery__column--graphics";
    $(".gallery__item").click(function () {
        galleryCategory = this.id;
        $(".gallery__columns").fadeTo(150, 0.15);
        $(".gallery__column").not("." + galleryCategory).fadeOut().removeClass('gallery__column-show');

        setTimeout(function () {
            $("." + galleryCategory).fadeIn().addClass('gallery__column-show');
            $(".gallery__columns").fadeTo(300, 1);
        }, 300);
    });



    // GALLERY Overlay With Jquery
    
            // const buttons = $('.gallery__column');
            // const overlay = $('.overlay');
            // let overlayImage = $('.overlay__inner img');
            // buttons.click(function(e) {
            //     overlay.addClass('open');
            //     let src = e.$('img', this).attr('src');
            //     overlayImage.src = src;
            //   });
            // overlay.click(function() {
            //     overlay.removeClass('open');
            //   });
    


    //Parameter Carousel
    //--- Carousel Header
    let mainSwiper = new Swiper('.main__swiper-container', {
        // Optional Parameters
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

    //--- Carousel References
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

    //--- Carousel Portfolio
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
});

