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

const cartIcon = document.getElementById("cart-icon");
const cartQtyPreview = document.getElementById("cart-qty-preview");
const cartEmpty = document.getElementById("cart-empty");
const cartProduct = document.getElementById("cart-product");
const cartQty = document.getElementById("cart-qty");
const cartTotal = document.getElementById("cart-total");
const cartDeleteItem = document.getElementById("cart-delete-item");
const btnCheckout = document.getElementById("btn-checkout");
const cart = document.getElementById("cart");

const qtyAmount = document.getElementById("qty-amount");
const qtyMinusBtn = document.getElementById("qty-minus");
const qtyPlusBtn = document.getElementById("qty-plus");
const addToCartBtn = document.getElementById("add-to-cart-btn");

let showCart = false;
let qty = 0;
let addToCartQty = 0;

function toggleCart() {
  if (showCart === false) {
    cart.style.visibility = "visible";
    showCart = true;
  } else {
    cart.style.visibility = "hidden";
    showCart = false;
  }
}

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

function tallyCart() {
  qty = 0;
  qtyAmount.innerText = qty;
  cartQtyPreview.innerText = addToCartQty;
  cartQty.innerText = addToCartQty;
  cartTotal.innerText = `$${addToCartQty * 125}.00`;
}

function addToCart() {
  if (qty > 0 && addToCartQty === 0) {
    addToCartQty = qty;
    tallyCart();
    cartQtyPreview.style.visibility = "visible";
    cartEmpty.style.display = "none";
    cartProduct.style.display = "flex";
    btnCheckout.style.display = "block";
  } else if (qty > 0 && addToCartQty > 0) {
    addToCartQty += qty;
    tallyCart();
  }
}

function emptyCart() {
  if (addToCartQty > 0) {
    cartQtyPreview.style.visibility = "hidden";
    cartEmpty.style.display = "block";
    cartProduct.style.display = "none";
    btnCheckout.style.display = "none";
    addToCartQty = 0;
    qtyAmount.innerText = 0;
    cartQtyPreview.innerText = 0;
    cartQty.innerText = 0;
    cartTotal.innerText = `$${0}.00`;
  }
}
function checkout() {
  emptyCart();
  toggleCart();
}
cartIcon.addEventListener("click", toggleCart);
qtyPlusBtn.addEventListener("click", increaseQty);
qtyMinusBtn.addEventListener("click", decreaseQty);
addToCartBtn.addEventListener("click", addToCart);
cartDeleteItem.addEventListener("click", emptyCart);
btnCheckout.addEventListener("click", checkout);

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
    //closes cart window
    cart.style.visibility = "hidden";
    showCart = false;
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
