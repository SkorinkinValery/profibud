/* ============================================================
   Обработка формы заявки.
   Повторяет логику макета: сабмит → показ состояния «Заявка принята».
   ============================================================ */
(function initLeadForm() {
  function setup() {
    const form = document.querySelector('[data-lead-form]');
    const success = document.querySelector('[data-lead-success]');
    if (!form || !success || form.dataset.bound) return;
    form.dataset.bound = '1';

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Здесь в проде — отправка на бэкенд/CRM.
      form.hidden = true;
      success.hidden = false;
    });
  }

  // Форма может быть в DOM сразу (index) или прийти из partial (внутренние страницы)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
  document.addEventListener('partials:loaded', setup);
})();
