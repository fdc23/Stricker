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
  const cvFrames = document.querySelectorAll('.cv-pdf-frame');
  const cvPdfParams = '#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH&zoom=page-fit&pagemode=none&disableprint=true&download=0';
  const cvPdfDataUrl =
    'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjIgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzIC9Db3VudCAxIC9LaWRzIFszIDAgUl0gPj4KZW5kb2JqCjMgMCBvYmoKPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA2MTIgNzkyXSAvQ29udGVudHMgNCAwIFIgL1Jlc291cmNlcyA8PCAvRm9udCA8PCAvRjEgNSAwIFIgPj4gPj4gPj4KZW5kb2JqCjQgMCBvYmoKPDwgL0xlbmd0aCA5NSA+PgpzdHJlYW0KQlQgL0YxIDI0IFRmIDcyIDcyMCBUZCAoQ3VycmljdWx1bSBWaXRhZSAtIERyLiBMdWNpYW5vIFN0cmlja2VyKSBUaiBFVApCVCAvRjEgMTIgVGYgNzIgNjkwIFRkIChSZXN1bWVuIHByb2Zlc2lvbmFsIHBhcmEgcmVmZXJlbmNpYSBkaWdpdGFsKSBUaiBFVAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwgL1R5cGUgL0ZvbnQgL1N1YnR5cGUgL1R5cGUxIC9CYXNlRm9udCAvSGVsdmV0aWNhID4+CmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDA2MSAwMDAwMCBuCjAwMDAwMDAxMjQgMDAwMDAgbgowMDAwMDAwMjg3IDAwMDAwIG4KMDAwMDAwMDQ0NSAwMDAwMCBuCnRyYWlsZXIKPDwgL1Jvb3QgMSAwIFIgL1NpemUgNiA+PgpzdGFydHhyZWYKNTMxCiUlRU9GCg==' +
    cvPdfParams;
  let lastCvTrigger = null;

  const waOverlay = document.getElementById('waOverlay');
  const waFab = document.getElementById('waFab');
  const waCloseBtn = waOverlay ? waOverlay.querySelector('[data-wa-close]') : null;
  const waForm = waOverlay ? waOverlay.querySelector('[data-wa-form]') : null;
  const waDiscipline = waOverlay ? waOverlay.querySelector('[name="wa-discipline"]') : null;
  const waIntent = waOverlay ? waOverlay.querySelector('[name="wa-intent"]') : null;
  const waType = waOverlay ? waOverlay.querySelector('[name="wa-type"]') : null;

  if (cvFrames.length) {
    cvFrames.forEach((frame) => {
      frame.setAttribute('data', cvPdfDataUrl);
      frame.setAttribute('title', 'Currículum Vitae de Dr. Luciano Stricker');
    });
  }

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