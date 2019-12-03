$('.main-header__hamburger').on('click', function () {
   $(this).toggleClass('hamburger--active');
   $('.main-header__wrapper').toggleClass('wrapper--tablet');
   $('.footer-adaptive-menu').toggleClass('footer-adaptive-menu--active');
});
let state = 0;
$('.search-form__search-btn').on('click', function (event) {
    if (state === 0) {
        event.preventDefault();
        $('.search-form__search-input').toggleClass('search-input--active');
        $('.search-form--bg-hidden').toggleClass('search-form--bg-active');
        $('.overlay').toggleClass('overlay--active');
        state = 1;
    } else {
        state = 0;
    }
});

$('.search-form__search-btn').keydown(function (event) {
    if (event.keyCode === 27) {
        state = 0;
        $('.search-form__search-input').removeClass('search-input--active');
        $('.search-form--bg-hidden').removeClass('search-form--bg-active');
    }
});
$('.overlay').on('click', function () {
    state = 0;
    $('.search-form__search-input').removeClass('search-input--active');
    $('.search-form--bg-hidden').removeClass('search-form--bg-active');
    $('.overlay').removeClass('overlay--active');
});