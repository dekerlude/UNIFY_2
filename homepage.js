document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');

    // Smooth cursor movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover Effects

    // Buttons (using specific class or generic logic if buttons exist later, for now nav links act as buttons/interactive)
    const navLinks = document.querySelectorAll('.footer-nav a, .filter-tab');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('cursor-ring'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-ring'));
    });

    // Cards
    const cards = document.querySelectorAll('.card, .event-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => cursor.classList.add('cursor-glow'));
        card.addEventListener('mouseleave', () => cursor.classList.remove('cursor-glow'));
    });

    // General clickable elements (grow)
    const clickables = document.querySelectorAll('button, .logo, .back-arrow, .modal-close-btn, .modal-cta');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
    });

    // Scribble Event Circles (Glow)
    const scribbleWrappers = document.querySelectorAll('.scribble-wrapper');
    scribbleWrappers.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-glow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-glow'));
    });

    // Titles (Text Effect)
    const titles = document.querySelectorAll('.scribble-title span, h1, h2, p');
    titles.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-text'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-text'));
    });
});
