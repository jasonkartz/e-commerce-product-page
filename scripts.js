// ***** Image carousel *****

const imgBtnPrevious = document.getElementById("img-btn-previous");
const imgBtnNext = document.getElementById("img-btn-next");
const imgCarousel = document.getElementById("img-carousel");
const imgCarouselContainer = document.getElementById("img-carousel-container");
const imgDesktop = document.getElementById("img-main-desktop");
const closeCarouselBtn = document.getElementById("close-carousel");
const carouselThumbnails = document.getElementsByClassName(
  "carousel-img-thumbnail"
);
const desktopThumbnails = document.getElementsByClassName(
  "img-thumbnail-desktop"
);
const carouselThumbnailBorder = document.getElementsByClassName(
  "carousel-thumbnail-border"
);
const desktopThumbnailBorder =
  document.getElementsByClassName("thumbnail-border");

const images = [1, 2, 3, 4];
let currentImg = 0;

function imgChange() {
  imgCarousel.style.background = `url("./images/image-product-${images[currentImg]}.jpg") no-repeat`;
  imgCarousel.style.backgroundSize = "cover";
  imgDesktop.src = `./images/image-product-${images[currentImg]}.jpg`;
  carouselThumbnailBorder[currentImg].style.outline =
    "2px solid rgba(255, 125, 26, 1)";
  desktopThumbnailBorder[currentImg].style.outline =
    "2px solid rgba(255, 125, 26, 1)";
  carouselThumbnails[currentImg].classList.add("half-opacity");
  desktopThumbnails[currentImg].classList.add("half-opacity");
}

function clearThumbnail() {
  carouselThumbnailBorder[currentImg].style.outline = "none";
  desktopThumbnailBorder[currentImg].style.outline = "none";
  carouselThumbnails[currentImg].classList.remove("half-opacity");
  desktopThumbnails[currentImg].classList.remove("half-opacity");
}

function prevImg() {
  clearThumbnail();
  if (currentImg === 0) {
    currentImg = images.length - 1;
  } else {
    currentImg--;
  }
  imgChange();
}
function nextImg() {
  clearThumbnail();
  if (currentImg === images.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  imgChange();
}
function openCarousel() {
  imgCarouselContainer.style.display = "block";
}
function closeCarousel() {
  imgCarouselContainer.style.display = "none";
}
imgChange();
Array.from(carouselThumbnails).forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    clearThumbnail();
    currentImg = index;
    imgChange();
  });
});
Array.from(desktopThumbnails).forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    clearThumbnail();
    currentImg = index;
    imgChange();
  });
});
imgBtnPrevious.addEventListener("click", prevImg);
imgBtnNext.addEventListener("click", nextImg);
imgDesktop.addEventListener("click", openCarousel);
closeCarouselBtn.addEventListener("click", closeCarousel);

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
    cart.style.display = "block";
    showCart = true;
  } else {
    cart.style.display = "none";
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
    cart.style.display = "block";
    showCart = true;
  } else if (qty > 0 && addToCartQty > 0) {
    addToCartQty += qty;
    tallyCart();
    cart.style.display = "block";
    showCart = true;
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
  if (!isMenuOpen && window.innerWidth < 1000) {
    nav.style.display = "block";
    menuBtn.style.background =
      "url('./images/icon-menu.svg') no-repeat, url('./images/icon-close.svg') no-repeat";
    cartAvatar.style.display = "none";
    //closes cart window
    cart.style.display = "none";
    showCart = false;
    isMenuOpen = !isMenuOpen;
  } else if (isMenuOpen && window.innerWidth < 1000) {
    nav.style.display = "none";
    menuBtn.style.background = "url('./images/icon-menu.svg') no-repeat";
    cartAvatar.style.display = "flex";
    isMenuOpen = !isMenuOpen;
  }
}

function menuClose() {
  if (isMenuOpen && window.innerWidth < 1000) {
    nav.style.display = "none";
    menuBtn.style.background = "url('./images/icon-menu.svg') no-repeat";
    cartAvatar.style.display = "flex";
    isMenuOpen = !isMenuOpen;
  }
}

menuBtn.addEventListener("click", menuToggle);
main.addEventListener("click", menuClose);

window.onresize = () => {
  if (window.innerWidth >= 1000) {
    nav.style.display = "inline";
    cartAvatar.style.display = "flex";
    isMenuOpen = true;
  } else {
    nav.style.display = "none";
    menuBtn.style.background = "url('./images/icon-menu.svg') no-repeat";
    cartAvatar.style.display = "flex";
    isMenuOpen = false;
  }

  if (window.innerWidth < 1000) {
    openCarousel();
  } else {
    closeCarousel();
  }
};
