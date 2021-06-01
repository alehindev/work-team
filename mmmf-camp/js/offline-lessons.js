$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .sidebar, .header__tel').toggleClass('active');
        $('body').toggleClass('lock');
    });
    /*
    $('.form-btn').click(function (event) {
        $('.signin-sec').toggleClass('notactive');
        $('body').toggleClass('lock');
    });
    $('.signin__burger').click(function (event) {
        $('.signin-sec').toggleClass('notactive');
        $('body').toggleClass('lock');
    });
    */
});