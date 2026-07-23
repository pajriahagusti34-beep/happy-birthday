const tombol = document.getElementById("openGift");

const welcome = document.querySelector(".welcome");
const envelopePage = document.querySelector(".envelope-page");

const envelope = document.querySelector(".envelope");
const gallery = document.querySelector(".gallery");


tombol.addEventListener("click", function(){

    welcome.style.display = "none";
    envelopePage.style.display = "block";

});


envelope.addEventListener("click", function(){

    console.log("Amplop diklik"); // buat cek

    gallery.style.display = "flex";

});
