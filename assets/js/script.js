/* ============================================
   River & Rebirth Counseling
   Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ── Navigation ── */

  var header     = document.querySelector('.site-header');
  var navToggle  = document.querySelector('.nav-toggle');
  var siteNav    = document.querySelector('.site-nav');

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  if (header) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function closeNav() {
    if (!siteNav) return;
    siteNav.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', function (e) {
      if (header && !header.contains(e.target) && siteNav.classList.contains('open')) {
        closeNav();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav.classList.contains('open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* ── Active nav link ── */

  (function setActiveNav() {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    var serviceDetailPages = [
      'perinatal-mental-health.html',
      'emdr-therapy.html',
      'trauma-therapy.html',
      'perinatal-support-sexual-assault-survivors.html',
      'grief-therapy.html'
    ];

    if (serviceDetailPages.indexOf(currentPath) !== -1) {
      var servicesLink = document.querySelector('.nav-dropdown__toggle[href="services.html"]');
      if (servicesLink && !servicesLink.classList.contains('active')) {
        servicesLink.classList.add('active');
      }
    }
  })();

  /* ── Scroll-reveal animations ── */

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.card, .step, .phase').forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* ── Smooth scroll for anchor links ── */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight + 20 : 20;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

})();
