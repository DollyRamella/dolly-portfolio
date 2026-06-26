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

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
      showSlide(parseInt(e.target.dataset.slide));
    });
  });

  setInterval(() => showSlide(currentSlide + 1), 5000);
});

// ============================================================
// CONSTELLATION — CORRIGÉE
// Les positions x/y sont en % (0-100) du conteneur.
// Les nœuds HTML sont placés en % via left/top.
// Les lignes SVG utilisent le même espace 0-100 via viewBox.
// ============================================================
function initConstellation() {
  const wrapper = document.querySelector('.constellation-wrapper');
  const svg = document.getElementById('constellation-svg');
  const nodesContainer = document.getElementById('constellation-nodes');

  if (!wrapper || !svg || !nodesContainer) return;

  // Positions en % (x: 0-100, y: 0-100) du conteneur
  const skills = [
    // Centre
    { id: 'pedagogie',       label: 'Ingénierie\npédagogique',      x: 50,  y: 50  },

    // 1er anneau
    { id: 'gamification',    label: 'Gamification\n& Jeux',          x: 20,  y: 28  },
    { id: 'mondes-virtuels', label: 'Mondes\nvirtualels',             x: 80,  y: 28  },
    { id: 'fle',             label: 'Didactique\nFLE',                x: 15,  y: 64  },
    { id: 'mooc',            label: 'MOOC\n& REL',                   x: 50,  y: 21  },
    { id: 'corpus',          label: 'Recherche\nCorpus',              x: 85,  y: 64  },

    // 2e anneau
    { id: 'escape-games',    label: 'Escape\nGames',                  x: 10,  y: 43  },
    { id: 'serious-games',   label: 'Serious\nGames',                 x: 90,  y: 43  },
    { id: 'storytelling',    label: 'Storytelling\nPédagogique',      x: 30,  y: 14  },
    { id: 'design-ux',       label: 'Design\nUX/UI',                  x: 70,  y: 14  },

    // 3e anneau
    { id: 'moodle',          label: 'Moodle\nLMS',                   x: 35,  y: 79  },
    { id: 'h5p',             label: 'H5P\nGenially',                  x: 65,  y: 79  },
    { id: 'workadventure',   label: 'WorkAdventure\n3D',              x: 8,   y: 79  },
    { id: 'numerique',       label: 'Innovation\nNumérique',          x: 92,  y: 79  },

    // Anneau extérieur
    { id: 'gestion-projet',  label: 'Gestion\nde Projet',             x: 20,  y: 86  },
    { id: 'evaluation',      label: 'Évaluation\nFormative',          x: 45,  y: 93  },
    { id: 'formation',       label: 'Formation\nFormateurs',          x: 55,  y: 93  },
    { id: 'recherche-action',label: 'Recherche\nAction',              x: 80,  y: 86  },
    { id: 'collaboratif',    label: 'Apprentissage\nCollaboratif',    x: 25,  y: 7   },
    { id: 'immersif',        label: 'Environnements\nImmersifs',      x: 75,  y: 7   },
  ];

  const connections = [
    { from: 'pedagogie', to: 'gamification' },
    { from: 'pedagogie', to: 'mondes-virtuels' },
    { from: 'pedagogie', to: 'mooc' },
    { from: 'pedagogie', to: 'fle' },
    { from: 'pedagogie', to: 'corpus' },
    { from: 'pedagogie', to: 'gestion-projet' },
    { from: 'pedagogie', to: 'evaluation' },
    { from: 'pedagogie', to: 'formation' },
    { from: 'gamification', to: 'escape-games' },
    { from: 'gamification', to: 'serious-games' },
    { from: 'gamification', to: 'fle' },
    { from: 'gamification', to: 'design-ux' },
    { from: 'gamification', to: 'storytelling' },
    { from: 'mondes-virtuels', to: 'workadventure' },
    { from: 'mondes-virtuels', to: 'immersif' },
    { from: 'mondes-virtuels', to: 'corpus' },
    { from: 'mondes-virtuels', to: 'collaboratif' },
    { from: 'fle', to: 'escape-games' },
    { from: 'fle', to: 'storytelling' },
    { from: 'fle', to: 'corpus' },
    { from: 'fle', to: 'formation' },
    { from: 'mooc', to: 'moodle' },
    { from: 'mooc', to: 'h5p' },
    { from: 'mooc', to: 'evaluation' },
    { from: 'mooc', to: 'collaboratif' },
    { from: 'corpus', to: 'serious-games' },
    { from: 'corpus', to: 'recherche-action' },
    { from: 'escape-games', to: 'design-ux' },
    { from: 'escape-games', to: 'evaluation' },
    { from: 'serious-games', to: 'storytelling' },
    { from: 'serious-games', to: 'numerique' },
    { from: 'workadventure', to: 'immersif' },
    { from: 'workadventure', to: 'collaboratif' },
    { from: 'storytelling', to: 'formation' },
    { from: 'design-ux', to: 'immersif' },
    { from: 'moodle', to: 'evaluation' },
    { from: 'h5p', to: 'gamification' },
    { from: 'numerique', to: 'immersif' },
    { from: 'gestion-projet', to: 'formation' },
    { from: 'formation', to: 'recherche-action' },
    { from: 'collaboratif', to: 'immersif' },
  ];

  // SVG : viewBox 0 0 100 100 pour que les % collent directement
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'none');

  // Dessiner les lignes
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  connections.forEach((conn) => {
    const from = skills.find((s) => s.id === conn.from);
    const to   = skills.find((s) => s.id === conn.to);
    if (!from || !to) return;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    line.setAttribute('stroke', '#0D7FFF');
    line.setAttribute('stroke-width', '0.4');
    line.setAttribute('class', `connection connection-${conn.from} connection-${conn.to}`);
    line.setAttribute('opacity', '0.25');
    g.appendChild(line);
  });

  svg.appendChild(g);

  // Taille des nœuds en px selon la taille du wrapper
  function getNodeSize() {
    const w = wrapper.offsetWidth;
    if (w < 480) return 72;
    if (w < 768) return 88;
    return 108;
  }

  // Créer les nœuds HTML positionnés en %
  skills.forEach((skill) => {
    const node = document.createElement('div');
    node.className = 'skill-node';
    node.id = `node-${skill.id}`;
    node.textContent = skill.label;

    // Centré sur le point x%,y% via transform
    node.style.left = `${skill.x}%`;
    node.style.top  = `${skill.y}%`;
    node.style.transform = 'translate(-50%, -50%)';
    node.style.position  = 'absolute';

    node.addEventListener('mouseenter', () => highlightSkill(skill.id));
    node.addEventListener('mouseleave', () => clearHighlight());

    nodesContainer.appendChild(node);
  });

  function highlightSkill(skillId) {
    const node = document.getElementById(`node-${skillId}`);
    if (node) node.classList.add('active');

    const connectedSkills = new Set([skillId]);
    const processed = new Set();

    function findConns(id) {
      if (processed.has(id)) return;
      processed.add(id);
      connections.forEach((conn) => {
        if (conn.from === id && !connectedSkills.has(conn.to)) {
          connectedSkills.add(conn.to);
          findConns(conn.to);
        } else if (conn.to === id && !connectedSkills.has(conn.from)) {
          connectedSkills.add(conn.from);
          findConns(conn.from);
        }
      });
    }
    findConns(skillId);

    // Activer lignes directes
    connections.forEach((conn) => {
      if (conn.from === skillId || conn.to === skillId) {
        const selector = `.connection-${conn.from}.connection-${conn.to}`;
        document.querySelectorAll(selector).forEach((line) => {
          line.classList.add('active');
          line.setAttribute('opacity', '0.9');
          line.setAttribute('stroke-width', '0.7');
        });
      }
    });

    // Activer nœuds connectés
    connectedSkills.forEach((id) => {
      const n = document.getElementById(`node-${id}`);
      if (n && id !== skillId) n.classList.add('active');
    });
  }

  function clearHighlight() {
    skills.forEach((s) => {
      const n = document.getElementById(`node-${s.id}`);
      if (n) n.classList.remove('active');
    });
    document.querySelectorAll('.connection').forEach((line) => {
      line.classList.remove('active');
      line.setAttribute('opacity', '0.25');
      line.setAttribute('stroke-width', '0.4');
    });
  }

  // Redimensionnement : recalculer taille des nœuds si besoin
  window.addEventListener('resize', () => {
    const size = getNodeSize();
    document.querySelectorAll('.skill-node').forEach((n) => {
      n.style.width  = size + 'px';
      n.style.height = size + 'px';
    });
  });
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
      s.classList.toggle('active', s.dataset.value <= selectedRating);
    });
  });

  star.addEventListener('mouseover', () => {
    stars.forEach((s) => {
      s.style.color = s.dataset.value <= star.dataset.value ? '#7C3AED' : '#ddd';
    });
  });
});

document.querySelector('.rating-prompt')?.addEventListener('mouseleave', () => {
  stars.forEach((s) => {
    s.style.color = s.dataset.value <= selectedRating ? '#7C3AED' : '#ddd';
  });
});

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const top = document.querySelector(href).offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
