:root {
  --navy: #0F1B35;
  --navy-light: #1A2D52;
  --coral: #E8614A;
  --slate: #5A6B7D;
  --slate-light: #8A95A3;
  --white: #FFFFFF;
  --off-white: #F9F7F4;
  --light-gray: #EDE9E1;
  --border: #E0DCD6;
  --radius: 8px;
  --shadow: 0 2px 12px rgba(15, 27, 53, 0.08);
  --shadow-md: 0 4px 20px rgba(15, 27, 53, 0.12);
  --transition: 0.3s ease;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--white);
  color: var(--navy);
  line-height: 1.65;
  font-size: 16px;
}

h1, h2, h3, h4 {
  line-height: 1.25;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 700;
}

h3 {
  font-size: 1.1rem;
  font-weight: 700;
}

h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  color: var(--slate);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.container-sm {
  max-width: 700px;
}

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.12em;
  color: var(--navy);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate);
  position: relative;
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--navy);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--coral);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition);
}

.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.burger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--navy);
}

.nav-mobile {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: var(--white);
  flex-direction: column;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  z-index: 999;
}

.nav-mobile.open {
  display: flex;
}

.nav-mobile a {
  padding: 0.75rem 0;
  font-weight: 500;
  border-bottom: 1px solid var(--light-gray);
}

.nav-mobile a:last-child {
  border: none;
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  margin-top: 64px;
  background: linear-gradient(135deg, rgba(232, 97, 74, 0.05) 0%, rgba(15, 27, 53, 0.02) 100%);
}

.hero .container {
  text-align: center;
  max-width: 700px;
}

.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--coral);
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 4rem);
  color: var(--navy);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--slate);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}

.meta-item {
  text-align: center;
}

.meta-icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 0.4rem;
}

.meta-item p {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--navy);
  margin: 0;
}

.meta-item small {
  font-size: 0.8rem;
  color: var(--slate);
  display: block;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all var(--transition);
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--coral);
  color: var(--white);
}

.btn-primary:hover {
  background: #D74C35;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(232, 97, 74, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--navy);
  border: 1.5px solid var(--slate);
}

.btn-secondary:hover {
  border-color: var(--navy);
  background: var(--off-white);
}

.scroll-hint {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--slate-light);
  animation: bob 2s ease infinite;
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* ============================================================
   SECTIONS
   ============================================================ */
.section {
  padding: 6rem 0;
}

.section-light {
  background: var(--off-white);
}

.section-intro {
  font-size: 1rem;
  color: var(--slate);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.75;
}

/* ============================================================
   À PROPOS
   ============================================================ */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2.5rem;
}

.about-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.about-card h3 {
  margin-bottom: 1.2rem;
}

.about-card ul {
  list-style: none;
}

.about-card li {
  padding: 0.5rem 0;
  color: var(--slate);
  font-size: 0.95rem;
  border-bottom: 1px solid var(--light-gray);
}

.about-card li:last-child {
  border: none;
}

/* ============================================================
   TIMELINE
   ============================================================ */
.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--coral), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -3.5rem;
  top: 0;
  width: 10px;
  height: 10px;
  background: var(--coral);
  border-radius: 50%;
  border: 3px solid var(--white);
  box-shadow: 0 0 0 3px var(--coral);
}

.timeline-year {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--coral);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  color: var(--navy);
  margin-bottom: 0.3rem;
}

.timeline-org {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--coral);
  margin-bottom: 0.6rem;
}

.timeline-content p {
  font-size: 0.95rem;
  color: var(--slate);
  line-height: 1.7;
}

/* ============================================================
   PROJECTS GRID
   ============================================================ */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  transition: box-shadow var(--transition), transform var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-header h3 {
  margin: 0;
}

.project-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.7rem;
  background: rgba(232, 97, 74, 0.1);
  color: var(--coral);
  border-radius: 50px;
  white-space: nowrap;
}

.project-card p {
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.2rem;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.project-skills span {
  font-size: 0.78rem;
  padding: 0.25rem 0.7rem;
  background: var(--light-gray);
  border-radius: 50px;
  color: var(--navy);
}

.project-link {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--coral);
  transition: opacity var(--transition);
}

.project-link:hover {
  opacity: 0.7;
}

/* ============================================================
   RESEARCH
   ============================================================ */
.research-featured {
  background: var(--navy);
  color: var(--white);
  padding: 2.5rem;
  border-radius: var(--radius);
  margin-bottom: 2rem;
  text-align: center;
}

.research-featured h3 {
  color: var(--white);
  margin-bottom: 0.5rem;
}

.research-featured p {
  color: rgba(255, 255, 255, 0.75);
}

.research-meta {
  font-size: 0.9rem;
  margin-bottom: 1.5rem !important;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.research-item {
  background: var(--white);
  border: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: var(--radius);
  transition: box-shadow var(--transition);
}

.research-item:hover {
  box-shadow: var(--shadow);
}

.research-item h4 {
  font-size: 0.85rem;
  color: var(--coral);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.research-item p {
  font-size: 0.9rem;
  margin-top: 0.6rem;
}

.research-item a {
  display: inline-block;
  margin-top: 0.8rem;
  color: var(--coral);
  font-weight: 600;
  transition: opacity var(--transition);
}

.research-item a:hover {
  opacity: 0.7;
}

/* ============================================================
   RESPONSIBILITIES
   ============================================================ */
.responsibilities {
  margin-top: 3rem;
}

.responsibilities h3 {
  margin-bottom: 1.5rem;
}

.resp-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.resp-item {
  background: var(--white);
  border: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: var(--radius);
}

.resp-item h4 {
  color: var(--navy);
}

.resp-item p {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* ============================================================
   TEACHING
   ============================================================ */
.teaching {
  margin-top: 3rem;
}

.teaching h3 {
  margin-bottom: 1.5rem;
}

.teaching-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.teaching-item h4 {
  margin-bottom: 1rem;
  color: var(--navy);
}

.teaching-item ul {
  list-style: none;
}

.teaching-item li {
  font-size: 0.9rem;
  padding: 0.5rem 0;
  padding-left: 1.2rem;
  position: relative;
  color: var(--slate);
  border-bottom: 1px solid var(--light-gray);
}

.teaching-item li:last-child {
  border: none;
}

.teaching-item li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--coral);
}

/* ============================================================
   SKILLS
   ============================================================ */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  background: var(--light-gray);
  border-radius: 50px;
  color: var(--navy);
  transition: all var(--transition);
  cursor: default;
}

.skill-tags span:hover {
  background: var(--coral);
  color: var(--white);
}

/* ============================================================
   CONTACT
   ============================================================ */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.contact-card {
  background: var(--off-white);
  border: 1px solid var(--border);
  padding: 2rem 1.5rem;
  border-radius: var(--radius);
  text-align: center;
  transition: all var(--transition);
}

.contact-card:hover {
  background: rgba(232, 97, 74, 0.08);
  border-color: var(--coral);
  transform: translateY(-3px);
}

.contact-emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.contact-card h3 {
  color: var(--navy);
  margin: 0.5rem 0;
}

.contact-card p {
  font-size: 0.85rem;
  color: var(--slate);
}

.contact-location {
  text-align: center;
  margin: 2rem 0;
  font-size: 0.95rem;
  color: var(--slate);
}

.rating-prompt {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--off-white);
  border-radius: var(--radius);
  text-align: center;
}

.rating-prompt p {
  margin-bottom: 1rem;
  font-weight: 500;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.star {
  font-size: 2rem;
  color: #ddd;
  cursor: pointer;
  transition: color var(--transition), transform var(--transition);
}

.star:hover,
.star.active {
  color: var(--coral);
  transform: scale(1.2);
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  padding: 3rem 0;
  background: var(--off-white);
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer p {
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.footer strong {
  color: var(--navy);
}

.footer-meta {
  font-size: 0.8rem !important;
  color: var(--slate-light) !important;
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .teaching-grid {
    grid-template-columns: 1fr;
  }

  .hero-meta {
    gap: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .research-grid {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.75rem 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .hero {
    padding: 5rem 0 3rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-meta {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .timeline {
    padding-left: 2rem;
  }

  .timeline-item::before {
    left: -2.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .resp-list {
    grid-template-columns: 1fr;
  }

  .research-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-hint {
    animation: none;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }

  * {
    transition: none !important;
  }
}
