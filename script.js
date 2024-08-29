let bars = document.querySelectorAll('.bars .fa-bars');
let menu = document.querySelectorAll('.menu');

bars.forEach(bar =>{
    bar.addEventListener('click', () => {
        menu.forEach(menuItem => {
            menuItem.classList.toggle('show');
        });
    });
});

let cartIcon = document.querySelectorAll(".cart_menu .fa-cart-shopping");
let cartMenu = document.querySelectorAll(".card-container");
let closeCart = document.querySelectorAll(".close_cart");

cartIcon.forEach(cart => {
    cart.addEventListener("click", () => {
        cartMenu.forEach(cartItem =>{
            cartItem.classList.toggle("show-cart-menu");
        });
    });
});
closeCart.addEventListener(cartClose => {
    cartClose.addEventListener("click", () => {
        cartMenu.forEach(cartItem => {
            cartItem.classList.remove("show-cart-menu");
        });
    });
});

// ABOUT SLIDERS

var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    loop: true,
});

// SHOP FILE MIXITUP CODE
var mixer = mixitup('.shop-product');

let shopBars = document.querySelector('.shop-bars .fa-list');
let shopMenu = document.querySelector('shop-menu-category');
let shopMenuLink = document.querySelector('.shop-menu-link');

shopMenuLink.forEach((MenuLink) =>{
    MenuLink.addEventListener("click", () => {
        shopMenu.classList.toggle("show-shop-menu");
    });
});
