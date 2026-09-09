const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = 'Menu';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header?.classList.contains('is-open')) {
    header.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = 'Menu';
  }
});
