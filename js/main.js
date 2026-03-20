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
  var heroTitle = document.querySelector('.hero__title');
  var cta = document.querySelector('.hero__cta');

  gsap.from(heroTitle, {
    y: 30, opacity: 0, duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from(cta, {
    y: 20, opacity: 0, duration: 0.8,
    delay: 0.3, ease: 'power3.out'
  });

  // --- Notes Overlay: scroll-driven reveal + breathing ---
  var notesLayer = document.querySelector('.notes-bg-layer');
  if (notesLayer) {
    // Scroll-driven: background shifts as user scrolls, revealing new notes
    gsap.to(notesLayer, {
      backgroundPosition: '70% 70%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#lower-sections',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
    // Breathing opacity on top
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
