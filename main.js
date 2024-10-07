const burgerMenu = document.querySelector('.burgerMenu');
const navMenu = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
