const menu = document.querySelector(".hamburger");
const navigation__mobile = document.querySelector(".navigation__mobile");
const exit = document.querySelector(".close");

function navigation(){
    navigation__mobile.style.transform = "translateX(0)";
}
function exits(){
    navigation__mobile.style.transform = "translateX(-100vw)";
}

menu.addEventListener("click", function() {
    navigation();
});

exit.addEventListener("click", function() {
    exits();
});