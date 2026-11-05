/**
 * DAMAYANTI CREST — Official Corporate Website Logic
 * Clean, lightweight, dependency-free vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initDynamicYear();
  initBackToTop();
  initCatalogue();
  initHonestForms();
});

/**
 * Mobile Navigation Drawer & Accessibility Controls
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(open) {
    const isOpen = typeof open === 'boolean' ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    
    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close when clicking mobile link
  drawer.querySelectorAll('.mobile-nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close when clicking outside header & drawer
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && 
        !drawer.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/**
 * Active Navigation Link Highlighting
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();
  const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.replace('./', '').split('#')[0] || 'index.html';

    if (filename === linkFile || (filename === '' && linkFile === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Dynamic Copyright Year
 */
function initDynamicYear() {
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });
}

/**
 * Back to Top Smooth Scroll Button
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Product & Initiative Catalogue Rendering (Using safe DOM methods)
 */
function initCatalogue() {
  const container = document.getElementById('catalogue-grid');
  if (!container || typeof DAMAYANTI_DATA === 'undefined') return;

  const filterButtons = document.querySelectorAll('.filter-btn');

  function render(categoryFilter) {
    // Clear container safely
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const items = DAMAYANTI_DATA.products.filter(item => {
      if (categoryFilter === 'all' || !categoryFilter) return true;
      if (categoryFilter === 'technology') return item.divisionId === 'damayanti-technologies';
      if (categoryFilter === 'heritage') return item.divisionId === 'damayanti-heritage';
      if (categoryFilter === 'publications') return item.divisionId === 'damayanti-publications';
      if (categoryFilter === 'traditions') return item.divisionId === 'damayanti-traditions';
      return true;
    });

    if (items.length === 0) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'notice-box';
      emptyBox.style.gridColumn = '1 / -1';
      
      const emptyTitle = document.createElement('strong');
      emptyTitle.textContent = 'No current items listed in this category.';
      
      const emptyDesc = document.createElement('p');
      emptyDesc.style.margin = '0.5rem 0 0 0';
      emptyDesc.textContent = 'Projects, publications, and merchandise entries will be introduced here as they become officially ready.';
      
      emptyBox.appendChild(emptyTitle);
      emptyBox.appendChild(emptyDesc);
      container.appendChild(emptyBox);
      return;
    }

    items.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';

      // Meta Header (Category + Status)
      const meta = document.createElement('div');
      meta.className = 'product-meta';

      const catTag = document.createElement('span');
      catTag.className = 'category-tag';
      catTag.textContent = product.subCategory || product.category;

      const statusPill = document.createElement('span');
      const isAvailable = product.status === 'Available';
      statusPill.className = isAvailable ? 'status-pill status-available' : 'status-pill status-in-development';
      
      const dot = document.createElement('span');
      dot.className = 'status-dot';
      
      const statusText = document.createTextNode(' ' + product.status);
      statusPill.appendChild(dot);
      statusPill.appendChild(statusText);

      meta.appendChild(catTag);
      meta.appendChild(statusPill);

      // Title
      const title = document.createElement('h3');
      title.className = 'product-title';
      title.textContent = product.name;

      // Division
      const division = document.createElement('p');
      division.className = 'product-division';
      division.textContent = product.divisionName;

      // Description
      const desc = document.createElement('p');
      desc.className = 'product-desc';
      desc.textContent = product.description;

      // Action Footer
      const action = document.createElement('div');
      action.className = 'product-action';

      if (product.url) {
        const link = document.createElement('a');
        link.className = 'btn btn-primary btn-sm';
        link.href = product.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = product.ctaLabel || 'Visit Initiative';
        action.appendChild(link);
      } else {
        const note = document.createElement('span');
        note.className = 'product-status-note';
        note.textContent = product.ctaLabel || 'More details coming soon';
        action.appendChild(note);
      }

      // Assemble
      card.appendChild(meta);
      card.appendChild(title);
      card.appendChild(division);
      card.appendChild(desc);
      card.appendChild(action);

      container.appendChild(card);
    });
  }

  // Initial render
  render('all');

  // Filter button handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter') || 'all';
      render(filterValue);
    });
  });
}

/**
 * Honest Static Form Handling (Partnerships & Contact)
 * Never pretends a message was delivered when no backend is connected.
 * Provides transparent mailto generation and clipboard copy.
 */
function initHonestForms() {
  const forms = document.querySelectorAll('.honest-enquiry-form');
  const dialog = document.getElementById('honest-form-dialog');
  const dialogEmailBtn = document.getElementById('dialog-email-btn');
  const dialogCopyBtn = document.getElementById('dialog-copy-btn');
  const dialogCancelBtn = document.getElementById('dialog-cancel-btn');
  const dialogDetails = document.getElementById('dialog-enquiry-summary');

  if (!forms.length) return;

  let currentMailtoUrl = '';
  let currentSummaryText = '';

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const orgInput = form.querySelector('[name="organization"]');
      const categoryInput = form.querySelector('[name="category"]');
      const messageInput = form.querySelector('[name="message"]');
      const consentInput = form.querySelector('[name="consent"]');

      if (!nameInput || !emailInput || !messageInput) return;

      if (!consentInput || !consentInput.checked) {
        alert('Please acknowledge the privacy notice to proceed with submitting your enquiry.');
        return;
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const org = orgInput ? orgInput.value.trim() : 'N/A';
      const category = categoryInput ? categoryInput.value : 'General Enquiry';
      const message = messageInput.value.trim();

      const companyEmail = (typeof DAMAYANTI_DATA !== 'undefined' && DAMAYANTI_DATA.company && DAMAYANTI_DATA.company.email)
        ? DAMAYANTI_DATA.company.email
        : 'damayati.crest@gmail.com';

      const subject = `[Damayanti Crest Enquiry] ${category} - ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nCategory: ${category}\n\nMessage:\n${message}\n\n---\nSent via Damayanti Crest Website Form`;

      currentMailtoUrl = `mailto:${encodeURIComponent(companyEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      currentSummaryText = `To: ${companyEmail}\nSubject: ${subject}\n\n${body}`;

      if (dialog && dialogDetails) {
        dialogDetails.textContent = `From: ${name} (${email})\nCategory: ${category}\n\nMessage Preview:\n${message}`;
        dialog.classList.add('open');
      } else {
        // Fallback directly to mailto
        window.location.href = currentMailtoUrl;
      }
    });
  });

  if (dialog) {
    if (dialogEmailBtn) {
      dialogEmailBtn.addEventListener('click', () => {
        window.location.href = currentMailtoUrl;
        dialog.classList.remove('open');
      });
    }

    if (dialogCopyBtn) {
      dialogCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(currentSummaryText).then(() => {
          const originalText = dialogCopyBtn.textContent;
          dialogCopyBtn.textContent = 'Copied to Clipboard!';
          setTimeout(() => {
            dialogCopyBtn.textContent = originalText;
            dialog.classList.remove('open');
          }, 1800);
        }).catch(() => {
          alert('Could not copy automatically. Please open your email client manually.');
        });
      });
    }

    if (dialogCancelBtn) {
      dialogCancelBtn.addEventListener('click', () => {
        dialog.classList.remove('open');
      });
    }

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.classList.remove('open');
      }
    });
  }
}
