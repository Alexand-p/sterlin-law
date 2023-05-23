const colorTopLeft = document.getElementById("color-top-left");
const colorTopCenter = document.getElementById("color-top-center");
const colorTopRight = document.getElementById("color-top-right");
const colorBottomLeft = document.getElementById("color-bottom-left");
const colorBottomRight = document.getElementById("color-bottom-right");

window.addEventListener("scroll", handleScroll2);

function handleScroll2() {
    if(window.scrollY > 900) {
        colorTopLeft.classList.add("color-top-left-active");
        colorTopCenter.classList.add("color-top-center-active");
        colorTopRight.classList.add("color-top-right-active");
        colorBottomLeft.classList.add("color-bottom-left-active");
        colorBottomRight.classList.add("color-bottom-right-active");
    }
}