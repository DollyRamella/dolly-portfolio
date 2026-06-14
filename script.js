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
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
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

navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
  });
});

// ============================================================
// CAROUSEL
// ============================================================
document.querySelectorAll('.carousel-container').forEach((container) => {
  const carousel = container.querySelector('.carousel');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = container.querySelector('.carousel-btn.prev');
  const nextBtn = container.querySelector('.carousel-btn.next');
  const indicators = container.querySelectorAll('.indicator');

  let currentSlide = 0;

  function showSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
      showSlide(parseInt(e.target.dataset.slide));
    });
  });

  // Auto-advance every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
});

// ============================================================
// CONSTELLATION
// ============================================================
function initConstellation() {
  const wrapper = document.querySelector('.constellation-wrapper');
  const svg = document.getElementById('constellation-svg');
  const nodesContainer = document.getElementById('constellation-nodes');

  if (!svg || !nodesContainer) return;

  // Define skills and their positions
  const skills = [
    { id: 'pedagogie', label: 'Ingénierie\npédagogique', x: 400, y: 100, color: '#0D7FFF' },
    { id: 'gamification', label: 'Gamification\n& Jeux', x: 150, y: 280, color: '#8B5CF6' },
    { id: 'mondes-virtuels', label: 'Mondes\nvirtualels', x: 650, y: 280, color: '#06B6D4' },
    { id: 'fle', label: 'Didactique\ndes langues', x: 100, y: 450, color: '#00A8FF' },
    { id: 'mooc', label: 'MOOC &\nREL', x: 400, y: 480, color: '#7C3AED' },
    { id: 'erasmus', label: 'Erasmus+\nProjets', x: 700, y: 450, color: '#00D9FF' },
    { id: 'corpus', label: 'Recherche\nCorpus', x: 550, y: 300, color: '#0A8FCC' },
    { id: 'sante', label: 'Santé &\nNumérique', x: 250, y: 480, color: '#5B21B6' },
  ];

  // Define connections between skills
  const connections = [
    { from: 'pedagogie', to: 'gamification' },
    { from: 'pedagogie', to: 'mondes-virtuels' },
    { from: 'pedagogie', to: 'mooc' },
    { from: 'pedagogie', to: 'fle' },
    { from: 'gamification', to: 'fle' },
    { from: 'gamification', to: 'sante' },
    { from: 'mondes-virtuels', to: 'corpus' },
    { from: 'mondes-virtuels', to: 'fle' },
    { from: 'mooc', to: 'erasmus' },
    { from: 'fle', to: 'corpus' },
    { from: 'erasmus', to: 'mooc' },
  ];

  // Draw connections
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  connections.forEach((conn) => {
    const from = skills.find((s) => s.id === conn.from);
    const to = skills.find((s) => s.id === conn.to);

    if (from && to) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', from.x);
      line.setAttribute('y1', from.y);
      line.setAttribute('x2', to.x);
      line.setAttribute('y2', to.y);
      line.setAttribute('stroke', 'rgba(13, 127, 255, 0.2)');
      line.setAttribute('stroke-width', '2');
      line.setAttribute('class', `connection connection-${conn.from} connection-${conn.to}`);
      g.appendChild(line);
    }
  });

  svg.appendChild(g);

  // Create nodes
  skills.forEach((skill) => {
    const node = document.createElement('div');
    node.className = 'skill-node';
    node.id = `node-${skill.id}`;
    node.textContent = skill.label;
    node.style.left = `${skill.x - 50}px`;
    node.style.top = `${skill.y - 50}px`;
    node.style.background = `linear-gradient(135deg, ${skill.color}, ${skill.color}cc)`;

    node.addEventListener('mouseenter', () => {
      highlightSkill(skill.id, skills);
    });

    node.addEventListener('mouseleave', () => {
      clearHighlight(skills);
    });

    nodesContainer.appendChild(node);
  });

  function highlightSkill(skillId, allSkills) {
    // Highlight node
    const node = document.getElementById(`node-${skillId}`);
    if (node) node.classList.add('active');

    // Highlight connections
    document.querySelectorAll(`.connection-${skillId}`).forEach((conn) => {
      conn.setAttribute('stroke', '#0D7FFF');
      conn.setAttribute('stroke-width', '3');
      conn.setAttribute('opacity', '1');
    });

    // Highlight connected nodes
    connections.forEach((conn) => {
      if (conn.from === skillId) {
        const connectedNode = document.getElementById(`node-${conn.to}`);
        if (connectedNode) connectedNode.classList.add('active');
      } else if (conn.to === skillId) {
        const connectedNode = document.getElementById(`node-${conn.from}`);
        if (connectedNode) connectedNode.classList.add('active');
      }
    });
  }

  function clearHighlight(allSkills) {
    allSkills.forEach((skill) => {
      const node = document.getElementById(`node-${skill.id}`);
      if (node) node.classList.remove('active');
    });

    document.querySelectorAll('.connection').forEach((conn) => {
      conn.setAttribute('stroke', 'rgba(13, 127, 255, 0.2)');
      conn.setAttribute('stroke-width', '2');
      conn.setAttribute('opacity', '0.5');
    });
  }
}

initConstellation();

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
    console.log('Rating:', selectedRating);
  });

  star.addEventListener('mouseover', () => {
    stars.forEach((s) => {
      if (s.dataset.value <= star.dataset.value) {
        s.style.color = '#7C3AED';
      } else {
        s.style.color = '#ddd';
      }
    });
  });
});

document.querySelector('.rating-prompt')?.addEventListener('mouseleave', () => {
  stars.forEach((s) => {
    if (s.dataset.value <= selectedRating) {
      s.style.color = '#7C3AED';
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
      const offset = 80;
      const top = target.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  });
});
