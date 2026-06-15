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
// CONSTELLATION - ENHANCED
// ============================================================
function initConstellation() {
  const wrapper = document.querySelector('.constellation-wrapper');
  const svg = document.getElementById('constellation-svg');
  const nodesContainer = document.getElementById('constellation-nodes');

  if (!svg || !nodesContainer) return;

  // Define 20 skills with strategic positioning
  const skills = [
    // Core center
    { id: 'pedagogie', label: 'Ingénierie\npédagogique', x: 500, y: 350, r: 4 },
    
    // First ring - major domains
    { id: 'gamification', label: 'Gamification\n& Jeux', x: 200, y: 200, r: 3 },
    { id: 'mondes-virtuels', label: 'Mondes\nvirtualels', x: 800, y: 200, r: 3 },
    { id: 'fle', label: 'Didactique\nFLE', x: 150, y: 450, r: 3 },
    { id: 'mooc', label: 'MOOC\n& REL', x: 500, y: 150, r: 3 },
    { id: 'corpus', label: 'Recherche\nCorpus', x: 850, y: 450, r: 3 },
    
    // Second ring - supporting skills
    { id: 'escape-games', label: 'Escape\nGames', x: 100, y: 300, r: 2.5 },
    { id: 'serious-games', label: 'Serious\nGames', x: 900, y: 300, r: 2.5 },
    { id: 'storytelling', label: 'Storytelling\nPédagogique', x: 300, y: 100, r: 2.5 },
    { id: 'design-ux', label: 'Design\nUX/UI', x: 700, y: 100, r: 2.5 },
    
    // Third ring - technical skills
    { id: 'moodle', label: 'Moodle\nLMS', x: 350, y: 550, r: 2 },
    { id: 'h5p', label: 'H5P\nGenially', x: 650, y: 550, r: 2 },
    { id: 'workadventure', label: 'WorkAdventure\n3D', x: 80, y: 550, r: 2 },
    { id: 'numerique', label: 'Innovation\nNumérique', x: 920, y: 550, r: 2 },
    
    // Outer ring - supporting competencies
    { id: 'gestion-projet', label: 'Gestion\nde Projet', x: 200, y: 600, r: 2 },
    { id: 'evaluation', label: 'Évaluation\nFormative', x: 450, y: 650, r: 2 },
    { id: 'formation', label: 'Formation\nFormateurs', x: 550, y: 650, r: 2 },
    { id: 'recherche-action', label: 'Recherche\nAction', x: 800, y: 600, r: 2 },
    { id: 'collaboratif', label: 'Apprentissage\nCollaboratif', x: 250, y: 50, r: 2 },
    { id: 'immersif', label: 'Environnements\nImmersifs', x: 750, y: 50, r: 2 },
  ];

  // Define connections - create a rich network
  const connections = [
    // From pedagogy to main branches
    { from: 'pedagogie', to: 'gamification' },
    { from: 'pedagogie', to: 'mondes-virtuels' },
    { from: 'pedagogie', to: 'mooc' },
    { from: 'pedagogie', to: 'fle' },
    { from: 'pedagogie', to: 'corpus' },
    { from: 'pedagogie', to: 'gestion-projet' },
    { from: 'pedagogie', to: 'evaluation' },
    { from: 'pedagogie', to: 'formation' },

    // Gamification connections
    { from: 'gamification', to: 'escape-games' },
    { from: 'gamification', to: 'serious-games' },
    { from: 'gamification', to: 'fle' },
    { from: 'gamification', to: 'design-ux' },
    { from: 'gamification', to: 'storytelling' },

    // Mondes virtuels connections
    { from: 'mondes-virtuels', to: 'workadventure' },
    { from: 'mondes-virtuels', to: 'immersif' },
    { from: 'mondes-virtuels', to: 'corpus' },
    { from: 'mondes-virtuels', to: 'collaboratif' },

    // FLE connections
    { from: 'fle', to: 'escape-games' },
    { from: 'fle', to: 'storytelling' },
    { from: 'fle', to: 'corpus' },
    { from: 'fle', to: 'formation' },

    // MOOC connections
    { from: 'mooc', to: 'moodle' },
    { from: 'mooc', to: 'h5p' },
    { from: 'mooc', to: 'evaluation' },
    { from: 'mooc', to: 'collaboratif' },

    // Corpus connections
    { from: 'corpus', to: 'serious-games' },
    { from: 'corpus', to: 'recherche-action' },

    // Secondary connections
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

  // Get SVG dimensions
  const svgRect = svg.getBoundingClientRect();
  const svgWidth = svgRect.width || 1000;
  const svgHeight = svgRect.height || 700;

  // Draw connections
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const lines = [];

  connections.forEach((conn) => {
    const from = skills.find((s) => s.id === conn.from);
    const to = skills.find((s) => s.id === conn.to);

    if (from && to) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', from.x);
      line.setAttribute('y1', from.y);
      line.setAttribute('x2', to.x);
      line.setAttribute('y2', to.y);
      line.setAttribute('stroke', '#0D7FFF');
      line.setAttribute('stroke-width', '1.5');
      line.setAttribute('class', `connection connection-${conn.from} connection-${conn.to}`);
      line.setAttribute('opacity', '0.25');
      g.appendChild(line);
      lines.push(line);
    }
  });

  svg.appendChild(g);

  // Create nodes
  skills.forEach((skill) => {
    const node = document.createElement('div');
    node.className = 'skill-node';
    node.id = `node-${skill.id}`;
    node.textContent = skill.label;
    node.style.left = `${skill.x - 55}px`;
    node.style.top = `${skill.y - 55}px`;

    // Add event listeners
    node.addEventListener('mouseenter', () => {
      highlightSkill(skill.id, skills, connections);
    });

    node.addEventListener('mouseleave', () => {
      clearHighlight(skills);
    });

    nodesContainer.appendChild(node);
  });

  function highlightSkill(skillId, allSkills, allConnections) {
    // Activate node
    const node = document.getElementById(`node-${skillId}`);
    if (node) node.classList.add('active');

    // Find all connected skills
    const connectedSkills = new Set([skillId]);
    const processedSkills = new Set();

    function findConnections(currentSkillId) {
      if (processedSkills.has(currentSkillId)) return;
      processedSkills.add(currentSkillId);

      allConnections.forEach((conn) => {
        if (conn.from === currentSkillId && !connectedSkills.has(conn.to)) {
          connectedSkills.add(conn.to);
          findConnections(conn.to);
        } else if (conn.to === currentSkillId && !connectedSkills.has(conn.from)) {
          connectedSkills.add(conn.from);
          findConnections(conn.from);
        }
      });
    }

    findConnections(skillId);

    // Highlight connections
    const connectionSelectors = Array.from(connectedSkills)
      .filter((id) => id !== skillId)
      .map(
        (id) =>
          `.connection-${skillId}.connection-${id}, .connection-${id}.connection-${skillId}`
      )
      .join(', ');

    if (connectionSelectors) {
      document.querySelectorAll(connectionSelectors).forEach((conn) => {
        conn.classList.add('active');
        conn.setAttribute('opacity', '1');
      });
    }

    // Highlight connected nodes
    connectedSkills.forEach((connectedId) => {
      const connectedNode = document.getElementById(`node-${connectedId}`);
      if (connectedNode && connectedId !== skillId) {
        connectedNode.classList.add('active');
      }
    });

    // Highlight direct connections from center node
    allConnections.forEach((conn) => {
      if (conn.from === skillId || conn.to === skillId) {
        const selector = `.connection-${conn.from}.connection-${conn.to}`;
        document.querySelectorAll(selector).forEach((line) => {
          line.classList.add('active');
          line.setAttribute('opacity', '0.9');
        });
      }
    });
  }

  function clearHighlight(allSkills) {
    allSkills.forEach((skill) => {
      const node = document.getElementById(`node-${skill.id}`);
      if (node) node.classList.remove('active');
    });

    document.querySelectorAll('.connection').forEach((conn) => {
      conn.classList.remove('active');
      conn.setAttribute('opacity', '0.25');
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
