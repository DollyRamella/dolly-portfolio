// Ajouter la classe reveal à toutes les sections
document.querySelectorAll("section").forEach(section => {
    section.classList.add("reveal");
});

// Activer les sections visibles au scroll
const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});
