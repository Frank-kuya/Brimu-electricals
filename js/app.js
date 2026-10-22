/**
 * BRIMU ELECTRICALS & ENGINEERING - INTERACTIVE CONTROLLER
 * Handcrafted, natural, human-first engineering interface.
 * Zero automated pricing — connects directly to Eng. Brian Murarai via WhatsApp and Email.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupSiteLoader();
  renderServices();
  renderProjects('all');
  renderPictorials('all');
  renderTestimonials();
  renderFaqs();
  setupScopeBuilder();
  setupBeforeAfterSlider();
  setupModalDismissals();
  setupMobileNavigation();

  // ---- Keyboard navigation for pictorial lightbox ----
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('pictorial-lightbox-modal');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); navigatePictorial(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); navigatePictorial(1); }
    if (e.key === 'Escape')     { e.preventDefault(); closeModal('pictorial-lightbox-modal'); }
    if (e.key === 'Tab') {
      const focusable = [...lb.querySelectorAll('button:not([disabled]), a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  });
});

function setupSiteLoader() {
  const loader = document.getElementById('site-loader');
  if (!loader) return;

  const pageContent = [...document.body.children].filter(element => element !== loader);
  pageContent.forEach(element => { element.inert = true; });

  const minimumDuration = 4000;

  window.setTimeout(() => {
    pageContent.forEach(element => { element.inert = false; });
    loader.classList.add('is-dismissed');
    window.setTimeout(() => loader.remove(), 400);
  }, minimumDuration);
}

// ================= 1. RENDER SERVICES ================= //
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = BRIMU_DATA.services.map(s => `
    <div class="service-card">
      <div class="service-card-top">
        <span class="service-badge">${s.badge || 'Engineering'}</span>
        <div class="service-icon-box">
          ${getServiceSvgIcon(s.icon)}
        </div>
      </div>

      <h3 class="service-title">${s.title}</h3>
      <p class="service-tagline">"${s.tagline}"</p>
      <p class="service-desc">${s.description}</p>

      <div class="service-points-box">
        <h4 class="service-points-title">Our Standard on Every Job:</h4>
        <ul class="service-checklist">
          ${s.realWorldHighlights.map(h => `
            <li>
              <span class="check-icon">✓</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="service-card-footer">
        <a href="https://wa.me/${BRIMU_DATA.founder.whatsappClean}?text=${encodeURIComponent(s.whatsappPrompt)}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn btn-whatsapp-direct" 
           title="Message Brian on WhatsApp regarding this service">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.25-4.43c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.1-.22-.16-.47-.29z"/>
          </svg>
          <span>Consult with Brian on WhatsApp</span>
        </a>
      </div>
    </div>
  `).join('');
}

// ================= 2. PROJECT SCOPE BUILDER ================= //
// Note: Intentionally does NOT calculate fake prices. Instead, packages the project specs
// into a clean WhatsApp message or Email so Brian can review the blueprint and provide a genuine quote.
function setupScopeBuilder() {
  const propertyCards = document.querySelectorAll('.scope-property-card');
  const phasePills = document.querySelectorAll('.phase-pill');
  const serviceItems = document.querySelectorAll('.scope-service-item');
  const locationSelect = document.getElementById('scope-location');
  const notesTextarea = document.getElementById('scope-notes');
  const whatsappBtn = document.getElementById('btn-scope-whatsapp');
  const emailBtn = document.getElementById('btn-scope-email');
  const previewBox = document.getElementById('scope-brief-preview');

  const state = {
    propertyType: document.querySelector('.scope-property-card.selected')?.dataset.value || '',
    phase: document.querySelector('.phase-pill.selected')?.dataset.phase || '',
    services: [...document.querySelectorAll('.scope-service-item.selected')].map(item => item.dataset.service),
    location: locationSelect?.value || '',
    notes: ""
  };

  // Property Selection
  propertyCards.forEach(card => {
    card.addEventListener('click', () => {
      propertyCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      propertyCards.forEach(c => c.setAttribute('aria-pressed', String(c === card)));
      state.propertyType = card.dataset.value;
      updatePreview();
    });
  });

  // Phase Selection
  phasePills.forEach(pill => {
    pill.addEventListener('click', () => {
      phasePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      phasePills.forEach(p => p.setAttribute('aria-pressed', String(p === pill)));
      state.phase = pill.dataset.phase;
      updatePreview();
    });
  });

  // Service Checkboxes
  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      item.setAttribute('aria-pressed', String(item.classList.contains('selected')));
      const val = item.dataset.service;
      if (item.classList.contains('selected')) {
        if (!state.services.includes(val)) state.services.push(val);
      } else {
        state.services = state.services.filter(s => s !== val);
      }
      updatePreview();
    });
  });

  // Location Select
  if (locationSelect) {
    locationSelect.addEventListener('change', (e) => {
      state.location = e.target.value;
      updatePreview();
    });
  }

  // Notes
  if (notesTextarea) {
    notesTextarea.addEventListener('input', (e) => {
      state.notes = e.target.value.trim();
      updatePreview();
    });
  }

  function generateMessageText() {
    let msg = `Hello Eng. Brian Murarai,\n\nI am planning an electrical engineering project in Western Kenya and would like your professional consultation and quotation.\n\nHere are my project details:\n`;
    msg += `• Property Type: ${state.propertyType}\n`;
    msg += `• Required Power: ${state.phase}\n`;
    msg += `• Location: ${state.location}\n`;
    msg += `• Scope Needed:\n`;
    if (state.services.length > 0) {
      state.services.forEach(s => { msg += `   - ${s}\n`; });
    } else {
      msg += `   - General Consultation / On-site Survey\n`;
    }
    if (state.notes) {
      msg += `• Specific Notes: ${state.notes}\n`;
    }
    msg += `\nPlease let me know when you are available for a brief call or on-site survey. Thank you.`;
    return msg;
  }

  function updatePreview() {
    if (previewBox) {
      previewBox.innerText = generateMessageText();
    }
  }

  // WhatsApp Action
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const text = generateMessageText();
      const url = `https://wa.me/${BRIMU_DATA.founder.whatsappClean}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // Email Action
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      const text = generateMessageText();
      const subject = `Electrical Engineering Consultation - ${state.propertyType} (${state.location})`;
      const url = `mailto:${BRIMU_DATA.founder.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      window.location.href = url;
    });
  }

  // Initial render of preview
  updatePreview();
}

// ================= 3. BEFORE & AFTER INTERACTIVE SLIDER ================= //
function setupBeforeAfterSlider() {
  const container = document.getElementById('craftsmanship-slider-wrap');
  const slider = document.getElementById('craftsmanship-slider-input');
  const afterImage = document.getElementById('craftsmanship-after-layer');
  const dividerLine = document.getElementById('craftsmanship-divider');

  if (!container || !slider || !afterImage || !dividerLine) return;

  function updateSlider(val) {
    afterImage.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
    dividerLine.style.left = `${val}%`;
  }

  slider.addEventListener('input', (e) => {
    updateSlider(e.target.value);
  });

  // Touch support for dragging directly
  updateSlider(50);
}

// ================= 4. PROJECTS SHOWCASE ================= //
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  let list = BRIMU_DATA.projects;
  if (filterCategory !== 'all') {
    list = list.filter(p => p.id.includes(filterCategory) || p.title.toLowerCase().includes(filterCategory));
  }

  container.innerHTML = list.map(p => `
    <div class="project-story-card">
      <div class="project-img-container">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="project-tag-location">📍 ${p.location}</span>
      </div>
      <div class="project-story-body">
        <span class="project-client-type">${p.clientType} • ${p.date}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-story-text">${p.story}</p>

        <div class="project-specs-chip-box">
          ${p.specs.map(spec => `
            <div class="project-spec-chip">
              <span class="chip-dot"></span>
              <span>${spec}</span>
            </div>
          `).join('')}
        </div>

        <div class="project-story-footer">
          <a href="https://wa.me/${BRIMU_DATA.founder.whatsappClean}?text=${encodeURIComponent(`Hello Brian, I saw your project "${p.title}" in ${p.location} and would like to ask some questions about a similar setup.`)}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn-link-whatsapp">
            <span>Inquire About Similar Setup</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProjects(cat, btn) {
  document.querySelectorAll('.project-filter-pill').forEach(button => {
    const isActive = button === btn;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderProjects(cat);
}

// ================= 5. PICTORIALS & FIELD WORK ARCHIVE ================= //
let currentPictorialList = [];
let currentPictorialIndex = 0;
let pictorialOpener = null;

function renderPictorials(category = 'all') {
  const container = document.getElementById('pictorials-grid');
  if (!container || !BRIMU_DATA.pictorials) return;

  let list = BRIMU_DATA.pictorials;
  if (category !== 'all') {
    list = list.filter(p => p.category === category);
  }
  currentPictorialList = list;

  container.innerHTML = list.map((pic, index) => `
    <div class="pictorial-card" role="button" tabindex="0" aria-label="View ${pic.title}" onclick="openPictorialLightbox(${index})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openPictorialLightbox(${index})}">
      <div class="pictorial-img-wrap">
        <img src="${pic.image}" alt="${pic.title}" loading="lazy">
        <span class="pictorial-category-pill">${pic.categoryLabel}</span>
        <div class="pictorial-zoom-overlay">
          <span class="zoom-icon">🔍 Click to Inspect</span>
        </div>
      </div>
      <div class="pictorial-info-pane">
        <div class="pictorial-location-row">
          <span>📍 ${pic.location}</span>
        </div>
        <h4 class="pictorial-title">${pic.title}</h4>
        <p class="pictorial-caption">${pic.caption}</p>
        <div class="pictorial-specs-tag">
          <code>${pic.specs}</code>
        </div>
      </div>
    </div>
  `).join('');
}

function filterPictorials(cat, btn) {
  document.querySelectorAll('.pictorial-filter-pill').forEach(button => {
    const isActive = button === btn;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderPictorials(cat);
}

function openPictorialLightbox(index) {
  if (!currentPictorialList || !currentPictorialList[index]) return;
  currentPictorialIndex = index;
  const pic = currentPictorialList[index];

  const modal = document.getElementById('pictorial-lightbox-modal');
  const wasOpen = modal?.classList.contains('active');
  if (modal && !wasOpen) {
    pictorialOpener = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.lightbox-close')?.focus();
  }
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const locEl = document.getElementById('lightbox-location');
  const specsEl = document.getElementById('lightbox-specs');
  const waBtn = document.getElementById('lightbox-wa-btn');

  if (imgEl) {
    imgEl.src = pic.image;
    imgEl.alt = pic.title;
  }
  if (titleEl) titleEl.innerText = pic.title;
  if (captionEl) captionEl.innerText = pic.caption;
  if (locEl) locEl.innerText = '📍 ' + pic.location;
  if (specsEl) specsEl.innerText = pic.specs;

  if (waBtn) {
    const waText = `Hello Eng. Brian, I am looking at the pictorial of "${pic.title}" in ${pic.location} on your website. I want to inquire about a similar installation for my property.`;
    waBtn.href = `https://wa.me/${BRIMU_DATA.founder.whatsappClean}?text=${encodeURIComponent(waText)}`;
  }

  // -- Counter --
  const counterEl = document.getElementById('lightbox-counter');
  if (counterEl) counterEl.innerText = `${index + 1} / ${currentPictorialList.length}`;

  // -- Thumbnail strip --
  const thumbStrip = document.getElementById('lightbox-thumb-strip');
  if (thumbStrip) {
    thumbStrip.innerHTML = currentPictorialList.map((p, i) => `
       <button type="button" class="thumb-item ${i === index ? 'active' : ''}" 
         onclick="openPictorialLightbox(${i})" 
         aria-label="Show ${p.title}" ${i === index ? 'aria-current="true"' : ''}>
        <img src="${p.image}" alt="${p.title}" loading="lazy">
       </button>
    `).join('');

    // Scroll active thumb into view
    const activeThumb = thumbStrip.querySelector('.thumb-item.active');
    if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

}

function navigatePictorial(direction) {
  if (!currentPictorialList || currentPictorialList.length === 0) return;
  currentPictorialIndex = (currentPictorialIndex + direction + currentPictorialList.length) % currentPictorialList.length;
  openPictorialLightbox(currentPictorialIndex);
}

// ================= 6. TESTIMONIALS ================= //
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = BRIMU_DATA.testimonials.map(t => `
    <div class="testimonial-story-card">
      <div class="quote-mark">“</div>
      <p class="testimonial-body">${t.quote}</p>
      <div class="testimonial-person">
        <div class="person-initials">${t.author.split(' ').map(n => n[0]).join('')}</div>
        <div class="person-meta">
          <strong>${t.author}</strong>
          <span>${t.title}</span>
          <span class="service-tag">${t.service}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ================= 6. FAQS ACCORDION ================= //
function renderFaqs() {
  const container = document.getElementById('faqs-container');
  if (!container) return;

  container.innerHTML = BRIMU_DATA.faqs.map((faq, idx) => `
    <div class="faq-accordion-item" id="faq-item-${idx}">
      <button class="faq-accordion-trigger" id="faq-trigger-${idx}" aria-expanded="false" aria-controls="faq-content-${idx}" onclick="toggleFaq(${idx})">
        <span>${faq.q}</span>
        <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-accordion-content" id="faq-content-${idx}">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const item = document.getElementById(`faq-item-${idx}`);
  if (item) {
    const trigger = document.getElementById(`faq-trigger-${idx}`);
    const content = document.getElementById(`faq-content-${idx}`);
    const isOpen = item.classList.toggle('open');
    if (trigger) trigger.setAttribute('aria-expanded', String(isOpen));
    if (content) content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0px';
  }
}

// ================= 7. MODALS & DISMISSALS ================= //
function openEmergencyModal() {
  const m = document.getElementById('emergency-modal');
  if (m) m.classList.add('active');
}

function openContactModal() {
  const m = document.getElementById('direct-contact-modal');
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('active');
  m.setAttribute('aria-hidden', 'true');
  if (id === 'pictorial-lightbox-modal' && pictorialOpener?.isConnected) {
    pictorialOpener.focus();
    pictorialOpener = null;
  }
}

function setupModalDismissals() {
  // Standard modals (click backdrop to close)
  document.querySelectorAll('.modal-overlay, .lightbox-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay, .lightbox-overlay');
      if (modal) closeModal(modal.id);
    });
  });
}

// ================= 8. MOBILE NAVIGATION ================= //
function setupMobileNavigation() {
  const toggle = document.getElementById('nav-toggle-btn');
  const menu = document.getElementById('mobile-drawer');
  if (toggle && menu) {
    const setMenuOpen = (isOpen) => {
      menu.classList.toggle('active', isOpen);
      menu.setAttribute('aria-hidden', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    };

    toggle.addEventListener('click', () => {
      setMenuOpen(!menu.classList.contains('active'));
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('active')) {
        setMenuOpen(false);
        toggle.focus();
      }
    });
  }
}

// Helper: Icons
function getServiceSvgIcon(name) {
  switch (name) {
    case 'wiring':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`;
    case 'solar':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    case 'cctv':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
    case 'alert':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    case 'wind':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
  }
}
