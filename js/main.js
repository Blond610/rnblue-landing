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

  if (titleSpans.length) {
    gsap.fromTo(titleSpans,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power3.out' }
    );
  }

  if (subtitle) {
    gsap.fromTo(subtitle,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }

  if (cta) {
    gsap.fromTo(cta,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power3.out' }
    );
  }

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

  // Notes overlay is now a body::before pseudo-element (CSS-only, no GSAP needed)

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
