const tombol = document.getElementById("openGift");

const welcome = document.querySelector(".welcome");

const envelopePage = document.querySelector(".envelope-page");

tombol.addEventListener("click", function(){

    welcome.style.display = "none";

    envelopePage.style.display = "block";

});
