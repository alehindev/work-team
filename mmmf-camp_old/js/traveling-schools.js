"use strict";
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .sidebar, .header__tel').toggleClass('active');
        $('body').toggleClass('lock');
    });

    HideAll();
    ShowArticle("traveling-schools");
    $("#btn-winter-school").click(function (event) {
        HideAll();
        ShowArticle("winter-school");
    });
    $("#btn-summer-school").click(function (event) {
        HideAll();
        ShowArticle("summer-school");
    });
    $("#btn-spring-school").click(function (event) {
        HideAll();
        ShowArticle("spring-school");
    });
});
let article = document.querySelectorAll(".article");

function HideAll() {
    for (let i = 0; i < article.length; i++) {
        $(article[i]).hide();
    }
}

function ShowArticle(str) {
    for (let i = 0; i < article.length; i++) {

        if (article[i].classList.contains(str)) {
            $(article[i]).show();
        }
    }
}