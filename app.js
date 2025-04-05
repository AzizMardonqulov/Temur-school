let medioNavbar = document.getElementById("medioNavbar");
let bars = document.getElementById("bars");
let close =document.getElementById("close");
let loader = document.getElementById("loader");
let holImg1 = document.getElementById("holImg1");
let holImg2 = document.getElementById("holImg2");
let holImg3 = document.getElementById("holImg3");
let holImg4 = document.getElementById("holImg4");
let holImg5 = document.getElementById("holImg5");
let holImg6 = document.getElementById("holImg6");
let holImg7 = document.getElementById("holImg7");
let closeImg1 = document.getElementById("closeImg1");
let closeImg2 = document.getElementById("closeImg2");
let closeImg3 = document.getElementById("closeImg3");
let closeImg4 = document.getElementById("closeImg4");
let closeImg5 = document.getElementById("closeImg5");
let closeImg6 = document.getElementById("closeImg6");
let closeImg7 = document.getElementById("closeImg7");
bars.addEventListener("click" , function(){
    medioNavbar.style.top="0";
})
close.addEventListener("click" , function(){
    medioNavbar.style.top="-200vh";
})
window.addEventListener("load" , function(){
    loader.classList.add("loder")
})
const languageSelect = document.getElementById("languageSelect");
const selectedLanguage = document.getElementById("selectedLanguage");

languageSelect.addEventListener("change", function() {
    selectedLanguage.value = this.value;
});
function opnenHolImg1(){
    holImg1.style.top="0";
}
closeImg1.addEventListener("click" , function(){
    holImg1.style.top="-150%";
})
function opnenHolImg2(){
    holImg2.style.top="0";
}
closeImg2.addEventListener("click" , function(){
    holImg2.style.top="-150%";
})
function opnenHolImg3(){
    holImg3.style.top="0";
}
closeImg3.addEventListener("click" , function(){
    holImg3.style.top="-150%";
})
function opnenHolImg4(){
    holImg4.style.top="0";
}
closeImg4.addEventListener("click" , function(){
    holImg4.style.top="-150%";
})
function opnenHolImg5(){
    holImg5.style.top="0";
}
closeImg5.addEventListener("click" , function(){
    holImg5.style.top="-150%";
})
function opnenHolImg6(){
    holImg6.style.top="0";
}
closeImg6.addEventListener("click" , function(){
    holImg6.style.top="-150%";
})
function opnenHolImg7(){
    holImg7.style.top="0";
}
closeImg7.addEventListener("click" , function(){
    holImg7.style.top="-150%";
})