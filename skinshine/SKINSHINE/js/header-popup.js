let trigger = document.getElementById("burger");
let body = document.getElementsByTagName("body").item(0);
let nav = document.getElementsByTagName("nav")[0];

trigger.addEventListener('click', function (e) {
    nav.classList.toggle("active"); 
    body.classList.toggle("lock");

})
