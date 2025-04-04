let loader = document.getElementById("loader")
let openTestMenu = document.getElementById("openTestMenu");
let testButton = document.getElementById("testButton");
let openVideo =document.getElementById("openVideo");
let testVedio = document.getElementById("testVedio");
window.addEventListener("load" , function(){
    loader.classList.add("loder")
})
openTestMenu.addEventListener("click" , function(){
    testButton.classList.add("active");
})
openVideo.addEventListener("click" , function(){
    testVedio.style.top="0";
})
testVedio.addEventListener("click" , function(){
    testVedio.style.top="-150vh";
})
