(() => {
  'use strict';

  const STORAGE_KEY = 'nv-theme';
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const menuBtn = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  const sunIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  const moonIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function applyTheme(theme) {
    if (theme === 'light') {
      root.classList.add('light');
      themeBtn.innerHTML = moonIcon;
      themeBtn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      root.classList.remove('light');
      themeBtn.innerHTML = sunIcon;
      themeBtn.setAttribute('aria-label', 'Switch to light theme');
    }
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      return;
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
    localStorage.setItem(STORAGE_KEY, prefersLight ? 'light' : 'dark');
  }

  themeBtn.addEventListener('click', () => {
    const next = root.classList.contains('light') ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  initTheme();

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 720) {
          navLinks.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  const sections = document.querySelectorAll('main section[id]');
  const linkMap = new Map();
  document.querySelectorAll('.nav-link').forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    if (id) linkMap.set(id, link);
  });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            linkMap.forEach((link, key) => {
              link.classList.toggle('active', key === id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
