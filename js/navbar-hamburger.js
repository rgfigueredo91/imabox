const hamburger   = document.querySelector('.div-bar');
const navMenu     = document.querySelector('.nav-text');
const topNavBar   = document.querySelector('.top-navbar');
const navBranding = document.querySelector('.nav-branding');
const navBar      = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    [hamburger, navMenu, topNavBar, navBranding, navBar].forEach(el => el.classList.toggle('active'));
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    [hamburger, navMenu, topNavBar, navBranding, navBar].forEach(el => el.classList.remove('active'));
}));