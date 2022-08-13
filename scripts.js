const nav = document.getElementById("nav");
const menuBtn = document.getElementById("btn-menu");
const cartAvatar = document.getElementById("cart-avatar-containter");
const main = document.getElementById("main");

let isMenuOpen = false;

function menuToggle() {
  if (!isMenuOpen) {
    nav.style.display = "block";
    menuBtn.style.background =
      "url('./images/icon-menu.svg') no-repeat, url('./images/icon-close.svg') no-repeat";
    cartAvatar.style.display = "none";
  } else {
    nav.style.display = "none";
    menuBtn.style.background = "url('./images/icon-menu.svg') no-repeat";
    cartAvatar.style.display = "flex";
  }
  isMenuOpen = !isMenuOpen;
}

function menuClose() {
  if (isMenuOpen) {
    nav.style.display = "none";
    menuBtn.style.background = "url('./images/icon-menu.svg') no-repeat";
    cartAvatar.style.display = "flex";
    isMenuOpen = !isMenuOpen;
  }
}

menuBtn.addEventListener("click", menuToggle);
main.addEventListener("click", menuClose);
