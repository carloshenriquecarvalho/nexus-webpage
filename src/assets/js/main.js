const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu-mobile');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})