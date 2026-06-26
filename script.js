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
// CONSTELLATION
// ============================================================
function initConstellation() {
  const wrapper = document.querySelector('.constellation-wrapper');
  if (!wrapper) return;

  wrapper.style.position = 'relative';
  wrapper.style.overflow = 'hidden';

  const oldSvg = document.getElementById('constellation-svg');
  const oldNodes = document.getElementById('constellation-nodes');
  if (oldSvg) oldSvg.remove();
  if (oldNodes) oldNodes.remove();

  const canvas = document.createElement('canvas');
  canvas.id = 'constellation-canvas';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
  wrapper.appendChild(canvas);

  const nodesLayer = document.createElement('div');
  nodesLayer.id = 'constellation-nodes-layer';
  nodesLayer.style.cssText = 'position:absolute;inset:0;';
  wrapper.appendChild(nodesLayer);

  let tooltip = document.getElementById('constellation-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'constellation-tooltip';
    tooltip.style.cssText = [
      'position:fixed',
      'background:#1A2D52',
      'border:1px solid #3a4460',
      'border-radius:10px',
      'padding:0.8rem 1.1rem',
      'font-size:0.78rem',
      'font-family:Inter,sans-serif',
      'color:#e8eaf6',
      'max-width:220px',
      'pointer-events:none',
      'opacity:0',
      'transition:opacity 0.2s',
      'z-index:2000',
      'box-shadow:0 8px 32px rgba(0,0,0,0.4)',
      'line-height:1.5',
    ].join(';');
    document.body.appendChild(tooltip);
  }

  const legendEl = document.getElementById('skills-legend') || document.querySelector('.skills-legend');

  const catColors = {
    pedagogie: '#7c9fff',
    numerique:  '#b8f0e0',
    recherche:  '#f0c8a0',
    outils:     '#d4a8ff',
  };
  const catLabels = {
    pedagogie: 'Pedagogie',
    numerique:  'Numerique',
    recherche:  'Recherche',
    outils:     'Outils',
  };

  if (legendEl && legendEl.children.length === 0) {
    Object.entries(catLabels).forEach(([cat, label]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.style.cssText = 'display:flex;align-items:center;gap:0.4rem;font-size:0.72rem;color:#7a8ab0;cursor:pointer;font-family:Inter,sans-serif;';
      item.innerHTML = '<div style="width:9px;height:9px;border-radius:50%;background:' + catColors[cat] + ';flex-shrink:0;"></div>' + label;
      item.addEventListener('click', () => {
        activeCategory = (activeCategory === cat) ? null : cat;
        updateActive();
        drawLines();
      });
      legendEl.appendChild(item);
    });
  }

  const skills = [
    {
      label: 'Ingenierie pedagogique',
      cat: 'pedagogie',
      desc: "Conception de dispositifs de formation innovants, sur mesure et centres sur l'apprenant.",
      x: 50, y: 18
    },
    {
      label: 'Formation hybride',
      cat: 'pedagogie',
      desc: 'Articulation des modalites presentielle et distancielle pour une experience coherente.',
      x: 22, y: 30
    },
    {
      label: 'MOOC & REL',
      cat: 'pedagogie',
      desc: "Responsable pedagogique du MOOC DECLAME'FLE, laureat du Label europeen des langues 2023.",
      x: 76, y: 28
    },
    {
      label: 'Scenarisation',
      cat: 'pedagogie',
      desc: 'Ecriture de scenarios pedagogiques et storyboards pour modules e-learning.',
      x: 14, y: 52
    },
    {
      label: 'Didactique des langues',
      cat: 'pedagogie',
      desc: "Specialiste de l'enseignement et apprentissage des langues via le numerique et les serious games.",
      x: 85, y: 50
    },
    {
      label: 'Digital Learning',
      cat: 'numerique',
      desc: "Conception et deploiement de parcours e-learning complets, de l'analyse au deploiement.",
      x: 32, y: 68
    },
    {
      label: 'Mondes virtuels',
      cat: 'numerique',
      desc: "Creation de Rennes2D sur WorkAdventure : espace immersif pour l'apprentissage et la collaboration.",
      x: 68, y: 68
    },
    {
      label: 'Escape game pedagogique',
      cat: 'numerique',
      desc: "Conception d'ESCAPARA, escape game numerique pour la revision en pharmacie.",
      x: 20, y: 82
    },
    {
      label: 'IA generative',
      cat: 'numerique',
      desc: "Integration d'outils d'IA dans les pratiques pedagogiques et les workflows de conception.",
      x: 80, y: 80
    },
    {
      label: 'Articulate Storyline',
      cat: 'outils',
      desc: 'Creation de modules e-learning interactifs avec animations et evaluations.',
      x: 40, y: 90
    },
    {
      label: 'Moodle / LMS',
      cat: 'outils',
      desc: 'Administration, structuration et suivi de formations sur plateformes LMS.',
      x: 60, y: 90
    },
    {
      label: 'Canva',
      cat: 'outils',
      desc: 'Design de supports visuels pedagogiques clairs et attractifs.',
      x: 8, y: 70
    },
    {
      label: 'WorkAdventure',
      cat: 'outils',
      desc: 'Developpement de campus virtuels 2D pour les interactions a distance.',
      x: 92, y: 65
    },
    {
      label: 'Gestion de projet',
      cat: 'recherche',
      desc: 'Pilotage de projets numeriques complexes (AIR, Rennes2D, ESCAPARA).',
      x: 50, y: 50
    },
    {
      label: 'Corpus linguistiques',
      cat: 'recherche',
      desc: 'Travaux doctoraux sur les corpus pour decrire les interactions dans les mondes virtuels.',
      x: 30, y: 42
    },
    {
      label: 'Serious games',
      cat: 'recherche',
      desc: 'Recherche sur la convergence methodologique entre jeu serieux et didactique.',
      x: 70, y: 42
    },
    {
      label: 'Publications',
      cat: 'recherche',
      desc: 'Co-auteure de travaux sur les EIAH, escape games et corpus linguistiques (LIDILE).',
      x: 50, y: 35
    },
  ];

  const connections = [
    [0,16],[0,15],[0,1],[0,2],[0,6],[0,7],
    [1,3],[1,15],[2,9],[2,4],
    [3,11],[4,6],[4,10],
    [5,9],[5,11],[5,6],[5,7],
    [6,12],[7,8],[8,11],
    [13,0],[13,5],[13,14],[13,15],[13,16],
    [14,16],[15,16],[16,2],[10,13],[9,5],
  ];

  let activeCategory = null;
  let nodeEls = [];

  skills.forEach((s, i) => {
    const el = document.createElement('div');
    el.style.cssText = 'position:absolute;transform:translate(-50%,-50%);cursor:pointer;transition:transform 0.2s ease;';
    el.dataset.cat = s.cat;
    el.dataset.i   = i;
    el.style.left  = s.x + '%';
    el.style.top   = s.y + '%';

    const bubble = document.createElement('div');
    bubble.textContent = s.label;
    bubble.style.cssText = [
      'background:#1A2D52',
      'border:1.5px solid ' + catColors[s.cat],
      'border-radius:999px',
      'padding:0.45em 1.1em',
      'font-size:0.75rem',
      'font-weight:500',
      'font-family:Inter,sans-serif',
      'color:#e8eaf6',
      'white-space:nowrap',
      'transition:background 0.25s,box-shadow 0.25s,color 0.25s',
      'user-select:none',
    ].join(';');
    el.appendChild(bubble);

    el.addEventListener('mouseenter', (e) => {
      el.style.transform = 'translate(-50%,-50%) scale(1.1)';
      bubble.style.boxShadow = '0 0 18px ' + catColors[s.cat];
      showTooltip(e, s);
    });
    el.addEventListener('mousemove', moveTooltip);
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(-50%,-50%)';
      bubble.style.boxShadow = '';
      hideTooltip();
    });
    el.addEventListener('click', () => {
      activeCategory = (activeCategory === s.cat) ? null : s.cat;
      updateActive();
      drawLines();
    });

    nodesLayer.appendChild(el);
    nodeEls.push({ el, bubble });
  });

  function updateActive() {
    nodeEls.forEach(function(item, i) {
      var bubble = item.bubble;
      var cat = skills[i].cat;
      var on = !activeCategory || cat === activeCategory;
      if (on) {
        bubble.style.background = catColors[cat];
        bubble.style.color      = '#0A1428';
        bubble.style.boxShadow  = '0 0 22px ' + catColors[cat];
      } else {
        bubble.style.background = '#1A2D52';
        bubble.style.color      = '#e8eaf6';
        bubble.style.boxShadow  = '';
      }
    });
  }

  const ctx = canvas.getContext('2d');

  function getNodeCenter(i) {
    var el = nodeEls[i].el;
    var wr = wrapper.getBoundingClientRect();
    var nr = el.getBoundingClientRect();
    return {
      x: nr.left + nr.width  / 2 - wr.left,
      y: nr.top  + nr.height / 2 - wr.top,
    };
  }

  function drawLines() {
    var W = wrapper.offsetWidth;
    var H = wrapper.offsetHeight;
    canvas.width  = W;
    canvas.height = H;
    ctx.clearRect(0, 0, W, H);

    connections.forEach(function(pair) {
      var a = pair[0];
      var b = pair[1];
      var ca = skills[a].cat;
      var cb = skills[b].cat;
      var relA = !activeCategory || ca === activeCategory;
      var relB = !activeCategory || cb === activeCategory;
      if (!relA && !relB) return;

      var pa = getNodeCenter(a);
      var pb = getNodeCenter(b);

      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.strokeStyle = (relA && relB) ? catColors[ca] : 'rgba(150,150,180,1)';
      ctx.globalAlpha = (relA && relB) ? 0.3 : 0.08;
      ctx.lineWidth   = 1;
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    ctx.fillStyle = 'rgba(180,190,255,0.35)';
    [[120,40],[350,20],[590,80],[50,180],[640,150],[200,490],[500,470],[100,380],[650,350]].forEach(function(star) {
      ctx.beginPath();
      ctx.arc(star[0] * W / 700, star[1] * H / 525, 1.2, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function showTooltip(e, s) {
    tooltip.innerHTML = '<strong style="color:' + catColors[s.cat] + ';display:block;margin-bottom:0.3em;">' + s.label + '</strong>' + s.desc;
    tooltip.style.opacity = '1';
    moveTooltip(e);
  }

  function moveTooltip(e) {
    var pad  = 16;
    var left = e.clientX + pad;
    var top  = e.clientY + pad;
    if (left + 240 > window.innerWidth)  left = e.clientX - 240 - pad;
    if (top  + 110 > window.innerHeight) top  = e.clientY - 110 - pad;
    tooltip.style.left = left + 'px';
    tooltip.style.top  = top  + 'px';
  }

  function hideTooltip() {
    tooltip.style.opacity = '0';
  }

  window.addEventListener('resize', function() {
    requestAnimationFrame(drawLines);
  });

  setTimeout(function() {
    requestAnimationFrame(drawLines);
  }, 150);

  var frame = 0;
  function pulse() {
    frame++;
    if (frame % 90 === 0) drawLines();
    requestAnimationFrame(pulse);
  }
  pulse();
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
