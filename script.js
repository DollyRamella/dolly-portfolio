// 1. Menu Mobile Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change l'icône de burger à "X" si disponible
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if(icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// 2. Gestion AJAX du Formulaire de Contact (Exemple Formspree)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        const data = new FormData(form);
        
        status.textContent = "Envoi en cours...";
        status.style.color = "orange";

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.textContent = "Merci ! Votre message a été envoyé avec succès.";
                status.style.color = "green";
                form.reset(); // Vide le formulaire
            } else {
                throw new Error();
            }
        } catch (error) {
            status.textContent = "Oups ! Un problème est survenu lors de l'envoi.";
            status.style.color = "red";
        }
    });
}
