/*
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .sidebar, .header__tel').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
*/
;
$(document).ready(function () {
    UnShow();
    let Firstarticle = document.querySelector('.article');
    console.log($(Firstarticle).show());
    $("#btn-math-tiger").click();
    $('.header__burger').click(function (event) {
        $('.header__burger, .sidebar, .header__tel').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $("#btn-math").click(function (event) {
        let articles = document.querySelectorAll('.article');
        UnShow();
        for (let i = 0; i < 4; i++) {
            if (articles[i].classList.contains('math-courses')) {
                $(articles[i]).show();
            }
        }
    });
    $("#btn-math-tiger").click(function (event) {
        let articles = document.querySelectorAll('.article');
        UnShow();
        for (let i = 0; i < 4; i++) {
            if (articles[i].classList.contains('math-tiger')) {
                $(articles[i]).show();
            }
        }
    });
    $("#btn-math-tiger").click(function (event) {
        let articles = document.querySelectorAll('.article');
        UnShow();
        for (let i = 0; i < 4; i++) {
            if (articles[i].classList.contains('math-tiger')) {
                $(articles[i]).show();
            }
        }
    });
    $("#btn-unmath").click(function (event) {
        let articles = document.querySelectorAll('.article');
        UnShow();
        for (let i = 0; i < 4; i++) {
            if (articles[i].classList.contains('unmath')) {
                $(articles[i]).show();
            }
        }
    });
    $("#btn-online-group").click(function (event) {
        let articles = document.querySelectorAll('.article');
        UnShow();
        for (let i = 0; i < 4; i++) {
            if (articles[i].classList.contains('online-group')) {
                $(articles[i]).show();
            }
        }
    });
    $("#btn-online-games").click(function (event) {
        let articles = document.querySelectorAll('.article');
        UnShow();
        for (let i = 0; i < 4; i++) {
            if (articles[i].classList.contains('online-games')) {
                $(articles[i]).show();
            }
        }
    });
});

function UnShow() {
    let articles = document.querySelectorAll('.article');
    for (let i = 0; i < 4; i++) {
        $(articles[i]).hide();
    }
}