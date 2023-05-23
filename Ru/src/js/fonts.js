const fontsTopLeft = document.getElementById("fonts-top-left");
const fontsTopCenter = document.getElementById("fonts-top-center");
const fontsTopRight = document.getElementById("fonts-top-right");
const fontsBottomLeft = document.getElementById("fonts-bottom-left");
const fontsBottomCenterLeft = document.getElementById("fonts-bottom-center-left");
const fontsBottomCenterRight = document.getElementById("fonts-bottom-center-right");
const fontsBottomRight = document.getElementById("fonts-bottom-right");

window.addEventListener("scroll", handleScroll1);

function handleScroll1() {
    if(window.scrollY > 1200) {
        fontsTopLeft.classList.add("fonts-top-left-active");
        fontsTopCenter.classList.add("fonts-top-center-active");
        fontsTopRight.classList.add("fonts-top-right-active");
        fontsBottomLeft.classList.add("fonts-bottom-left-active");
        fontsBottomCenterLeft.classList.add("fonts-bottom-center-left-active");
        fontsBottomCenterRight.classList.add("fonts-bottom-center-right-active");
        fontsBottomRight.classList.add("fonts-bottom-right-active");
    }
}