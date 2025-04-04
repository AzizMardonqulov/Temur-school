let medioNavbar = document.getElementById("medioNavbar");
let bars = document.getElementById("bars");
let close =document.getElementById("close");
let loader = document.getElementById("loader")
bars.addEventListener("click" , function(){
    medioNavbar.style.top="0";
})
close.addEventListener("click" , function(){
    medioNavbar.style.top="-150vh";
})
window.addEventListener("load" , function(){
    loader.classList.add("loder")
})
const languageSelect = document.getElementById("languageSelect");
const selectedLanguage = document.getElementById("selectedLanguage");

languageSelect.addEventListener("change", function() {
    selectedLanguage.value = this.value;
});