document.addEventListener('DOMContentLoaded', function () {
    let btns = document.querySelectorAll(".content-group__title");
    let btnInfPrtnrs = btns[0];
    let btnVidPrtnrs = btns[1];
    let video = document.querySelector(".partners-video");
    let text = document.querySelector(".partners-text");
    console.log(btnInfPrtnrs);
    console.log(btnVidPrtnrs);
    btnInfPrtnrs.addEventListener("click", function (e) {
        video.classList.remove("partners-text-active");
        text.classList.add("partners-text-active");
    })
    btnVidPrtnrs.addEventListener("click", function (e) {
        text.classList.remove("partners-text-active");
        video.classList.add("partners-text-active");
    })
});