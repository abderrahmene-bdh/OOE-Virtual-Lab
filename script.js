// Optional: simple fade-in animation for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec, i) => {
        sec.style.opacity = 0;
        setTimeout(() => {
            sec.style.transition = 'opacity 1s ease';
            sec.style.opacity = 1;
        }, i * 300);
    });
});
