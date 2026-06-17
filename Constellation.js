
class SkillConstellation {
  constructor(svgSelector, dataObject) {
    this.svg = d3.select(svgSelector);
    this.data = dataObject;
    this.selectedSkill = null;
    this.init();
  }

  init() {
    this.setupDimensions();
    this.prepareData();
    this.createVisualization();
    this.attachEventListeners();
  }

  setupDimensions() {
    const svgElement = this.svg.node();
    this.width = svgElement.clientWidth || 1200;
    this.height = svgElement.clientHeight || 700;

    this.svg.attr('width', this.width).attr('height', this.height);

    this.margin = { top: 40, right: 40, bottom: 40, left: 40 };
    this.innerWidth = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;
  }

  prepareData() {
    // Flatten all skills
    this.allSkills = [];
    this.skillMap = new Map();

    this.data.skills.forEach((primary) => {
      this.allSkills.push(primary);
      this.skillMap.set(primary.id, primary);

      if (primary.children) {
        primary.children.forEach((secondary) => {
          secondary.parent = primary.id;
          secondary.level = 1;
          this.allSkills.push(secondary);
          this.skillMap.set(secondary.id, secondary);
        });
      }
    });

    // Create nodes
    this.nodes = this.allSkills.map((skill, i) => ({
      id: skill.id,
      name: skill.name,
      type: skill.type,
      level: skill.level || 0,
      parent: skill.parent || null,
      ...skill,
      x: this.width / 2 + Math.random() * 100,
      y: this.height / 2 + Math.random() * 100,
      fx: null,
      fy: null
    }));

    // Create links (connections + parent-child relationships)
    this.links = [];

    // Add primary connections
    this.data.connections?.forEach((conn) => {
      this.links.push({
        source: conn.source,
        target: conn.target,
        strength: conn.strength || 0.5,
        type: 'connection'
      });
    });

    // Add parent-child relationships
    this.nodes.forEach((node) => {
      if (node.parent) {
        this.links.push({
          source: node.parent,
          target: node.id,
          strength: 0.3,
          type: 'hierarchy'
        });
      }
    });
  }

  createVisualization() {
    this.svg.selectAll('*').remove();

    const g = this.svg
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    // Create force simulation
    this.simulation = d3
      .forceSimulation(this.nodes)
      .force('link', d3.forceLink(this.links).id((d) => d.id).distance((d) => {
        if (d.type === 'hierarchy') return 80;
        return Math.max(150, 300 - d.strength * 100);
      }))
      .force('charge', d3.forceManyBody().strength(-400).distanceMax(500))
      .force('center', d3.forceCenter(this.innerWidth / 2, this.innerHeight / 2))
      .force('collision', d3.forceCollide().radius((d) => (d.type === 'primary' ? 70 : 50)))
      .on('tick', () => this.updatePositions());

    // Draw links
    this.linkElements = g
      .append('g')
      .selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
      .attr('class', (d) => `link link-${d.type}`)
      .attr('stroke', (d) => this.getLinkColor(d))
      .attr('stroke-width', (d) => (d.type === 'hierarchy' ? 1.5 : 2))
      .attr('opacity', 0.3);

    // Draw nodes
    this.nodeElements = g
      .append('g')
      .selectAll('g')
      .data(this.nodes)
      .enter()
      .append('g')
      .attr('class', (d) => `node node-${d.type}`)
      .call(d3.drag().on('start', (event, d) => this.dragStarted(event, d)).on('drag', (event, d) => this.dragged(event, d)).on('end', (event, d) => this.dragEnded(event, d)));

    // Node circles
    this.nodeElements
      .append('circle')
      .attr('class', 'node-circle')
      .attr('r', (d) => (d.type === 'primary' ? 60 : 40))
      .attr('fill', (d) => d.color || '#0D7FFF')
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', (d) => (d.type === 'primary' ? 3 : 2));

    // Node labels
    this.nodeElements
      .append('text')
      .attr('class', 'node-label')
      .attr('dy', '.35em')
      .text((d) => d.name);

    // Node icons (emoji)
    this.nodeElements
      .append('text')
      .attr('class', 'node-icon')
      .attr('dy', '-1.5em')
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => (d.type === 'primary' ? '28px' : '18px'))
      .text((d) => d.icon || '');

    // Click handlers
    this.nodeElements.on('click', (event, d) => {
      event.stopPropagation();
      this.selectSkill(d);
    });

    // Click background to deselect
    g.on('click', () => this.deselectSkill());
  }

  selectSkill(skill) {
    this.selectedSkill = skill.id;

    // Update node classes
    this.nodeElements
      .classed('active', (d) => d.id === skill.id)
      .classed('dimmed', (d) => d.id !== skill.id && !this.isRelated(d, skill));

    // Update link classes
    this.linkElements
      .classed('active', (d) => d.source.id === skill.id || d.target.id === skill.id)
      .classed('dimmed', (d) => d.source.id !== skill.id && d.target.id !== skill.id);

    // Update info panel
    this.showInfo(skill);
  }

  deselectSkill() {
    this.selectedSkill = null;

    this.nodeElements.classed('active', false).classed('dimmed', false);

    this.linkElements.classed('active', false).classed('dimmed', false);

    this.hideInfo();
  }

  isRelated(nodeA, nodeB) {
    if (nodeA.parent === nodeB.id || nodeB.parent === nodeA.id) return true;

    return this.links.some(
      (link) =>
        (link.source.id === nodeA.id && link.target.id === nodeB.id) ||
        (link.source.id === nodeB.id && link.target.id === nodeA.id)
    );
  }

  showInfo(skill) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('panel-content');

    const relatedProjects = this.getRelatedProjects(skill);

    const html = `
      <div class="info-header">
        <span class="info-icon">${skill.icon}</span>
        <div>
          <p class="info-title">${skill.name.replace(/\n/g, ' ')}</p>
          <span class="info-tag">${skill.type === 'primary' ? 'Compétence principale' : 'Sous-compétence'}</span>
        </div>
      </div>

      <div class="info-section">
        <div class="info-section-title">Description</div>
        <p class="info-description">${skill.details?.description || skill.description}</p>
      </div>

      <div class="info-section">
        <div class="info-section-title">Exemple</div>
        <div class="info-example">"${skill.details?.example || 'Exemple non disponible'}"</div>
      </div>

      <div class="info-section">
        <div class="info-section-title">Outils &amp; Frameworks</div>
        <ul class="skill-list">
          ${(skill.details?.tools || []).map((tool) => `<li>${tool}</li>`).join('')}
        </ul>
      </div>

      ${relatedProjects.length > 0 ? `
        <div class="info-section">
          <div class="info-section-title">Projets Associés</div>
          <div>
            ${relatedProjects.map((proj) => `<span class="project-badge">${proj.emoji} ${proj.name}</span>`).join('')}
          </div>
          <p class="info-description" style="margin-top: 1rem; font-style: italic; color: #8A95A3;">
            ${relatedProjects.length === 1 ? 'Ce projet mobilise cette compétence.' : `Ces ${relatedProjects.length} projets mobilisent cette compétence.`}
          </p>
        </div>
      ` : ''}
    `;

    content.innerHTML = html;
    panel.classList.remove('hidden');
  }

  hideInfo() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
  }

  getRelatedProjects(skill) {
    const projectsObj = projectsData || {};
    const relatedProjects = [];

    Object.values(projectsObj).forEach((project) => {
      if (project.skills && (project.skills.includes(skill.id) || project.skills.includes(skill.parent))) {
        relatedProjects.push(project);
      }
    });

    return relatedProjects;
  }

  updatePositions() {
    this.nodeElements.attr('transform', (d) => `translate(${d.x},${d.y})`);

    this.linkElements
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);
  }

  dragStarted(event, d) {
    if (!event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  dragEnded(event, d) {
    if (!event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  getLinkColor(d) {
    if (d.type === 'hierarchy') return 'rgba(13, 127, 255, 0.2)';
    return 'rgba(13, 127, 255, 0.25)';
  }
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Create constellation with combined data
  const fullData = {
    skills: constellationData.skills,
    connections: skillConnections
  };

  const constellation = new SkillConstellation('#constellation-svg', fullData);

  // Close button handler
  const closeBtn = document.getElementById('close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => constellation.deselectSkill());
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    // Simple responsive adjustment
    const svg = document.getElementById('constellation-svg');
    const wrapper = svg.parentElement;
    svg.setAttribute('width', wrapper.clientWidth);
    svg.setAttribute('height', wrapper.clientHeight);
  });
});

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const panel = document.getElementById('info-panel');
    if (!panel.classList.contains('hidden')) {
      panel.classList.add('hidden');
    }
  }
});
