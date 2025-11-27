/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// Currículo PDF overlay interactions
document.addEventListener('DOMContentLoaded', () => {
  const cvOverlay = document.getElementById('cvOverlay');
  const cvOpeners = document.querySelectorAll('[data-cv-trigger]');
  const cvCloseBtn = cvOverlay ? cvOverlay.querySelector('[data-cv-close]') : null;
  let lastCvTrigger = null;

  const waOverlay = document.getElementById('waOverlay');
  const waFab = document.getElementById('waFab');
  const waCloseBtn = waOverlay ? waOverlay.querySelector('[data-wa-close]') : null;
  const waForm = waOverlay ? waOverlay.querySelector('[data-wa-form]') : null;
  const waDiscipline = waOverlay ? waOverlay.querySelector('[name="wa-discipline"]') : null;
  const waIntent = waOverlay ? waOverlay.querySelector('[name="wa-intent"]') : null;
  const waType = waOverlay ? waOverlay.querySelector('[name="wa-type"]') : null;

  function closeWaOverlay(event) {
    if (event) event.preventDefault();
    if (!waOverlay) return;
    waOverlay.classList.remove('show');
    waOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('wa-open');
    if (waFab) {
      waFab.setAttribute('aria-expanded', 'false');
    }
  }

  function openWaOverlay(event) {
    if (event) event.preventDefault();
    if (!waOverlay || document.body.classList.contains('cv-open')) return;
    waOverlay.classList.add('show');
    waOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('wa-open');
    if (waFab) {
      waFab.setAttribute('aria-expanded', 'true');
    }
    waOverlay.focus({ preventScroll: true });
  }

  if (waFab && waOverlay) {
    waFab.addEventListener('click', openWaOverlay);
  }

  if (waCloseBtn) {
    waCloseBtn.addEventListener('click', closeWaOverlay);
  }

  if (waOverlay) {
    waOverlay.addEventListener('click', (event) => {
      if (event.target === waOverlay) {
        closeWaOverlay(event);
      }
    });
  }

  if (waForm) {
    waForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const discipline = waDiscipline ? waDiscipline.value.trim() : '';
      const intent = waIntent ? waIntent.value : 'consultar';
      const motive = waType ? waType.value : 'duda';
      const message = `Hola Bastián, me comunico contigo para *${intent}* una *${motive}* para *${discipline}* con el Dr. Luciano Stricker.`;
      const url = `https://wa.me/56949625291?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener');
      closeWaOverlay();
    });
  }

  const closeCvOverlay = (event) => {
    if (event) event.preventDefault();
    if (!cvOverlay) return;
    cvOverlay.classList.remove('show');
    cvOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cv-open');
    if (lastCvTrigger) {
      lastCvTrigger.focus();
    }
  };

  const openCvOverlay = (event) => {
    if (event) event.preventDefault();
    if (!cvOverlay) return;
    lastCvTrigger = event.currentTarget;
    closeWaOverlay();
    cvOverlay.classList.add('show');
    cvOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cv-open');
    cvOverlay.focus({ preventScroll: true });
  };

  cvOpeners.forEach((btn) => btn.addEventListener('click', openCvOverlay));

  if (cvCloseBtn) {
    cvCloseBtn.addEventListener('click', closeCvOverlay);
  }

  if (cvOverlay) {
    cvOverlay.addEventListener('click', (event) => {
      if (event.target === cvOverlay) {
        closeCvOverlay(event);
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (waOverlay && waOverlay.classList.contains('show')) {
        closeWaOverlay(event);
        return;
      }
      if (cvOverlay && cvOverlay.classList.contains('show')) {
        closeCvOverlay(event);
      }
    }
  });
});