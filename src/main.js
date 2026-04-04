// ─── CURSOR ───
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-link'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-link'));
  });
}

// ─── NAVIGATION ───
function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  function closeMenu() {
    hamburger?.classList.remove('is-open');
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  hamburger?.addEventListener('click', () => {
    const open = hamburger.classList.toggle('is-open');
    mobileMenu?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });

  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}

// ─── SCROLL REVEAL ───
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => io.observe(el));
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initReveal();
});
