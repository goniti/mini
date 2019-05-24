const nav = $('.navbar__link');

nav.click(function() {

    $(this).addClass('navbar__link--is-active').siblings().removeClass('navbar__link--is-active');

});
