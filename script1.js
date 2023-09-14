var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".calculate");
var L, panjang, lebar;


function myFunction() {
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    L = panjang * lebar;
    alert("Luas persegi panjang adalah:" + L);
}