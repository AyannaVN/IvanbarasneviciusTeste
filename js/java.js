document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.links');
  if (!button || !menu) return;

  function closeMenu() {
    menu.classList.remove('open');
    button.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menu');
  }

  button.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    button.classList.toggle('open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) closeMenu();
  });
});