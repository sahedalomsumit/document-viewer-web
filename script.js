document.documentElement.classList.add('js');

const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  menuButton.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = String(new Date().getFullYear());
});

const gallery = document.querySelector('.screenshot-gallery');
const galleryControls = document.querySelector('.gallery-controls');
if (gallery && galleryControls) {
  galleryControls.hidden = false;
  const buttons = galleryControls.querySelectorAll('[data-gallery-direction]');
  const updateControls = () => {
    buttons.forEach(button => {
      button.disabled = Number(button.dataset.galleryDirection) < 0
        ? gallery.scrollLeft <= 2
        : gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2;
    });
  };
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const screen = gallery.querySelector('.screen');
      const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
      const distance = screen.getBoundingClientRect().width + gap;
      gallery.scrollBy({
        left: distance * Number(button.dataset.galleryDirection),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      });
    });
  });
  gallery.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
}
