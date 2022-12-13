'use strict';

const nav = document.getElementById('navigation');
const menu = document.querySelector('.menu');

menu.addEventListener('click', function () {
    nav.classList.toggle('active-nav');
    menu.classList.toggle('active-menu');
})