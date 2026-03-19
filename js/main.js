/* ============================================
   RnBlue Beats — GSAP Animations
   ============================================ */

(function () {
  'use strict';

  // Bail out if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // --- Hero Entrance ---
  var titleSpans = document.querySelectorAll('.hero__title span');
  var subtitle = document.querySelector('.hero__subtitle');
  var cta = document.querySelector('.hero__cta');

  gsap.from(titleSpans, {
    y: 30, opacity: 0, duration: 0.8,
    stagger: 0.05, ease: 'power3.out'
  });

  gsap.from(subtitle, {
    y: 20, opacity: 0, duration: 0.8,
    delay: 0.3, ease: 'power3.out'
  });

  gsap.from(cta, {
    y: 20, opacity: 0, duration: 0.8,
    delay: 0.6, ease: 'power3.out'
  });

  // --- Hero Background: Slow drift via transform ---
  var heroBg = document.querySelector('.hero-bg');
  var isMobile = window.matchMedia('(max-width: 767px)').matches;

  if (heroBg) {
    // Lighter drift on mobile to save GPU
    gsap.to(heroBg, {
      xPercent: isMobile ? 1 : 2,
      yPercent: isMobile ? -0.8 : -1.5,
      duration: isMobile ? 25 : 20,
      ease: 'sine.inOut',
      yoyo: true, repeat: -1
    });
    // Skip scale breathing on mobile (GPU-heavy)
    if (!isMobile) {
      gsap.to(heroBg, {
        scale: 1.05, duration: 15,
        ease: 'sine.inOut',
        yoyo: true, repeat: -1
      });
    }
  }

  // --- Notes Overlay: breathing that matches CSS opacity ---
  var notesLayer = document.querySelector('.notes-bg-layer');
  if (notesLayer) {
    // CSS sets 0.35 — breathe between 0.25 and 0.45
    gsap.fromTo(notesLayer,
      { opacity: 0.25 },
      { opacity: 0.45, duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut' }
    );
  }

  // --- Service Cards Reveal ---
  gsap.from('.service-card', {
    y: 40, opacity: 0, duration: 0.8,
    stagger: 0.2, ease: 'power3.out',
    scrollTrigger: { trigger: '#servizi', start: 'top 80%' }
  });

  // --- Contact Section Reveal ---
  gsap.from('.contatto__title', {
    y: 30, opacity: 0, duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '#contatto', start: 'top 80%' }
  });

  gsap.from('.contatto__social', {
    y: 20, opacity: 0, duration: 0.8,
    delay: 0.15, ease: 'power3.out',
    scrollTrigger: { trigger: '#contatto', start: 'top 80%' }
  });

  gsap.from('.contatto__email', {
    y: 20, opacity: 0, duration: 0.8,
    delay: 0.3, ease: 'power3.out',
    scrollTrigger: { trigger: '#contatto', start: 'top 80%' }
  });

})();
