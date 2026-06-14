// ============================================================
// SCROLL REVEAL
// ============================================================
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 12px rgba(15, 27, 53, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ============================================================
// BURGER MENU
// ============================================================
const burger = document.getElementById('burger');
const navMobile = document.getElementById('nav-mobile');

burger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// Close menu when link clicked
navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
  });
});

// ============================================================
// STAR RATING
// ============================================================
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;
    stars.forEach((s) => {
      if (s.dataset.value <= selectedRating) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    // Optional: Send rating
    console.log('Rating:', selectedRating);
  });

  star.addEventListener('mouseover', () => {
    stars.forEach((s) => {
      if (s.dataset.value <= star.dataset.value) {
        s.style.color = '#E8614A';
      } else {
        s.style.color = '#ddd';
      }
    });
  });
});

document.querySelector('.rating-prompt').addEventListener('mouseleave', () => {
  stars.forEach((s) => {
    if (s.dataset.value <= selectedRating) {
      s.style.color = '#E8614A';
    } else {
      s.style.color = '#ddd';
    }
  });
});

// ============================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offset = 80; // navbar height
      const top = target.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  });
});
