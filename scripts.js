// ***** Menu *****

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

// ***** Image carousel *****

const imgBtnPrevious = document.getElementById("img-btn-previous");
const imgBtnNext = document.getElementById("img-btn-next");
const imgCarousel = document.getElementById("img-carousel");

const images = [1, 2, 3, 4];
let currentImg = 0;

function imgChange() {
  imgCarousel.style.background = `url("./images/image-product-${images[currentImg]}.jpg") no-repeat`;
  imgCarousel.style.backgroundSize = "cover";
}

function prevImg() {
  if (currentImg === 0) {
    currentImg = images.length - 1;
  } else {
    currentImg--;
  }
  imgChange();
}
function nextImg() {
  if (currentImg === images.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  imgChange();
}

imgBtnPrevious.addEventListener("click", prevImg);
imgBtnNext.addEventListener("click", nextImg);

// ***** Cart *****

const qtyAmount = document.getElementById("qty-amount");
const qtyMinusBtn = document.getElementById("qty-minus");
const qtyPlusBtn = document.getElementById("qty-plus");
const addToCartBtn = document.getElementById("add-to-cart-btn");

let qty = 0;
let cartQty = 0;

function increaseQty() {
  qty++;
  qtyAmount.innerText = qty;
}

function decreaseQty() {
  if (qty === 0) {
    qtyAmount.innerText = "0";
  } else {
    qty--;
    qtyAmount.innerText = qty;
  }
}

function addToCart() {
  cartQty = qty;
  qty = 0;
  qtyAmount.innerText = qty;
  console.log(cartQty);
}

qtyPlusBtn.addEventListener("click", increaseQty);
qtyMinusBtn.addEventListener("click", decreaseQty);
addToCartBtn.addEventListener("click", addToCart);
