const nav = document.querySelector('.nav');
const openMenu = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.menu-close');

openMenu.addEventListener("click", () => {
    nav.classList.add('open');
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove('open');
});


