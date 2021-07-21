const image_close = document.querySelector(".image__close");
const navbar_mobile = document.querySelector(".navbar__mobile")
const mobileHam = document.querySelector(".mobile__ham")
const menuLinks = document.querySelectorAll(".menuLink")
const xIcon = document.querySelector(".xIcon")
const menuIcon = document.querySelector(".menuIcon")
const navMobile = document.querySelector(".nav-mobile")
const main = document.querySelector("#main")
const header = document.querySelector("header")
const divOne = document.querySelector(".div-one")
mobileHam.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (navbar_mobile.classList.contains("showMenu")) {
        navbar_mobile.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
        main.style.filter = "brightness(100%)";
        //divOne.style.position = "relative";
        main.style.backgroundImage = "transparent";
        header.style.background = "transparent"
       
    } else {
        navbar_mobile.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
        main.style.filter = "brightness(70%)";
        header.style.background = "linear-gradient(180deg ,black, white)";
        
    }
}
