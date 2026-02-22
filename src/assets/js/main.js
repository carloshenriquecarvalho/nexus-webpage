document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn');
    const menu = document.getElementById('menu-mobile');
    const menuLinks = menu.querySelectorAll('a');

    // 1. Abrir/Fechar menu hambúrguer
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // 2. Fechar o menu ao clicar em qualquer link (O pulo do gato)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // 3. Sistema de Animação (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});