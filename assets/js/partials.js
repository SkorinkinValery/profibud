/* ============================================================
   Инъекция общих partials (header / footer) во все страницы.
   DRY: разметка навигации и подвала хранится один раз в /partials.
   Использование:
     <div data-include="partials/header.html" data-nav="home"></div>
   Атрибут data-nav подсвечивает активный пункт меню.
   ============================================================ */
(async function loadPartials() {
  const nodes = document.querySelectorAll('[data-include]');

  await Promise.all(
    Array.from(nodes).map(async (node) => {
      const url = node.getAttribute('data-include');
      try {
        const res = await fetch(url + '?v=20260713h');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        node.innerHTML = await res.text();
      } catch (err) {
        console.error(`partials: не удалось загрузить ${url}`, err);
      }
    })
  );

  // Подсветка активного пункта меню по data-nav у контейнера header
  const header = document.querySelector('[data-include*="header"]');
  const active = header && header.getAttribute('data-nav');
  if (active) {
    const link = document.querySelector(`.nav-link[data-nav="${active}"]`);
    if (link) link.classList.add('is-active');
  }

  // Сообщаем странице, что partials готовы (для скриптов, зависящих от DOM)
  document.dispatchEvent(new CustomEvent('partials:loaded'));
})();
