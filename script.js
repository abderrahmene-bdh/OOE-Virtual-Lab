// Petit JS interactif pour futur usage
document.addEventListener("DOMContentLoaded", () => {
    const simLink = document.querySelector('.simulation-link');
    simLink.addEventListener('mouseover', () => {
        simLink.style.transform = "scale(1.05)";
    });
    simLink.addEventListener('mouseout', () => {
        simLink.style.transform = "scale(1)";
    });
});