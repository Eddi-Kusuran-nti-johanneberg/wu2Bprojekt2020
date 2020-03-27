function showPage(){
    let page = document.querySelector(".page");
    page.classList.toggle("settingsshow");

    let fade = document.querySelector(".settings-fade-layer");
    fade.classList.toggle("settingsvisible");
}

let settingsbutton = document.querySelector(".settings");
let settingslayer = document.querySelector(".settings-fade-layer");

settingsbutton.addEventListener("click",showPage);
settingslayer.addEventListener("click",showPage);