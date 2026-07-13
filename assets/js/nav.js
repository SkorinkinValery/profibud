/* ============================================================
   Мобильное бургер-меню.
   Шапка приходит из partial, поэтому привязываемся после инъекции.
   ============================================================ */
(function mobileNav() {
  function setup() {
    const nav = document.querySelector('.nav');
    const burger = nav && nav.querySelector('.nav__burger');
    const backdrop = nav && nav.querySelector('.nav__backdrop');
    if (!nav || !burger || nav.dataset.bound) return;
    nav.dataset.bound = '1';

    const open = () => {
      nav.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      if (backdrop) backdrop.hidden = false;
      document.body.classList.add('nav-open');
    };
    const close = () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      if (backdrop) backdrop.hidden = true;
      document.body.classList.remove('nav-open');
    };
    const toggle = () => (nav.classList.contains('is-open') ? close() : open());

    burger.addEventListener('click', toggle);
    if (backdrop) backdrop.addEventListener('click', close);
    // Закрывать по клику на любую ссылку в меню
    nav.querySelectorAll('.nav__menu a, .nav__actions a').forEach((a) =>
      a.addEventListener('click', close)
    );
    // Закрывать по Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
    // Сброс при переходе на десктопную ширину
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) close();
    });
  }

  document.addEventListener('partials:loaded', setup);
  if (document.readyState !== 'loading') setup();
})();
