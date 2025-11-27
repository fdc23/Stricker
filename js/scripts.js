/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// Currículo PDF overlay interactions
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cvOverlay');
  if (!overlay) return;

  const openers = document.querySelectorAll('[data-cv-trigger]');
  const closeBtn = overlay.querySelector('[data-cv-close]');
  let lastTrigger = null;

  const closeOverlay = (event) => {
    if (event) event.preventDefault();
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cv-open');
    if (lastTrigger) {
      lastTrigger.focus();
    }
  };

  const openOverlay = (event) => {
    event.preventDefault();
    lastTrigger = event.currentTarget;
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cv-open');
    overlay.focus({ preventScroll: true });
  };

  openers.forEach((btn) => btn.addEventListener('click', openOverlay));

  if (closeBtn) {
    closeBtn.addEventListener('click', closeOverlay);
  }

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeOverlay(event);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('show')) {
      closeOverlay(event);
    }
  });
});