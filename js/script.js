//initialize
$(document).ready(function () {
    /*---------------------SLIDER PARAMETERS---------------------*/
    //--header Carousel
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

    //--references Carousel
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

    //--portfolio Carousel
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


    /*---------------------SCRIPTS------------------------*/

    //BURGER-MENU
    const page = $('.page__content');
    const burgerMenu = $('.burgermenu');
    const burgerMenuBtnOpen = $('.burgermenu__btn--open');
    const burgerMenuBtnClose = $('.burgermenu__btn--close');
    const burgerLink = $('.burgermenu__list--item');


    burgerLink.click(function () {
        $(this).addClass('burgermenu__link--is-active').siblings().removeClass('burgermenu__link--is-active');
    });

    //--Open burger menu
    $(burgerMenuBtnOpen).on('click', function () {
        $(burgerMenuBtnOpen).addClass('js-hidden');
        $(burgerMenu).addClass('js-opened');
        $(page).addClass('js-opened');

    });

    //--Close burger menu
    $(burgerMenuBtnClose).on('click', function () {
        $(burgerMenuBtnOpen).removeClass('js-hidden');
        $(burgerMenu).removeClass('js-opened');
        $(page).removeClass('js-opened');
    });
    //--Click outside close burger menu
    $(page).on("click", function () {
        $(burgerMenuBtnOpen).removeClass('js-hidden');
        $(burgerMenu).removeClass('js-opened');
        $(page).removeClass('js-opened');
    });
    //Navbar
    const nav = $('.navbar__link');
    nav.click(function () {
        $(this).addClass('navbar__link--is-active').siblings().removeClass('navbar__link--is-active');
    });

    $(window).scroll(function () {
        //value >= 100 (1 scroll) value > 100 (2 scroll)
        if ($(document).scrollTop() >= 100) {
            $(".navbar").addClass("navbar__menu-background");
        } else {
            $(".navbar").removeClass("navbar__menu-background");
        }


        if ($(document).scrollTop() > 900) {


            $(".navbar").addClass("navbar__menu-scrolled");
        } else {
            $(".navbar").removeClass("navbar__menu-scrolled");
        }
    });

    //gallery toolbar
    let galleryCategory = "";
    $(".gallery__item").click(function () {
        galleryCategory = this.id;
        $(".gallery__columns").fadeTo(150, 0.15);
        $(".gallery__column").not("." + galleryCategory).fadeOut().removeClass('gallery__column-show');
        setTimeout(function () {
            $("." + galleryCategory).fadeIn().addClass('gallery__column-show');
            $(".gallery__columns").fadeTo(300, 1);
        }, 300);

    });

    // GALLERY ON CLICK 
    const buttons = document.querySelectorAll('.gallery__column');
    const overlay = document.querySelector('.overlay');
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


});

