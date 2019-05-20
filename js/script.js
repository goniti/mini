const nav = $('.Navbar__Link');

nav.click(function() {

    $(this).addClass('Navbar__Link--is-active').siblings().removeClass('Navbar__Link--is-active');

});