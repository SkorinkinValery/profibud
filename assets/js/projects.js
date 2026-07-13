/* ============================================================
   Данные проектов + переиспользуемый рендер карточек.
   Один шаблон карточки для главной и всех страниц каталога.
   ============================================================ */
const PROJECTS = [
  { tag: 'Газосиликат', name: 'Проект «Гродно-100»', type: 'Одноэтажный', area: '100 м²',    beds: '3 комн.', baths: '1 с/у', floors: '1 этаж',  cat: 'do120', ph: 'var(--ph-4)' },
  { tag: 'VELOX',       name: 'Проект «Неман»',       type: 'Мансардный',  area: '101,2 м²',  beds: '4 комн.', baths: '2 с/у', floors: '2 этажа', cat: 'do120', ph: 'var(--ph-2)' },
  { tag: 'Газосиликат', name: 'Проект «Зелёный»',     type: 'Одноэтажный', area: '102 м²',    beds: '3 комн.', baths: '1 с/у', floors: '1 этаж',  cat: 'do120', ph: 'var(--ph-3)' },
  { tag: 'Каркас',      name: 'Проект «Лесной»',      type: 'Мансардный',  area: '102,9 м²',  beds: '4 комн.', baths: '2 с/у', floors: '2 этажа', cat: 'do120', ph: 'var(--ph-1)' },
  { tag: 'VELOX',       name: 'Проект «Панорама»',    type: 'Двухэтажный', area: '103,2 м²',  beds: '5 комн.', baths: '2 с/у', floors: '2 этажа', cat: 'do180', ph: 'var(--ph-4)' },
  { tag: 'Газосиликат', name: 'Проект «Уют»',         type: 'Одноэтажный', area: '103,45 м²', beds: '4 комн.', baths: '1 с/у', floors: '1 этаж',  cat: 'do120', ph: 'var(--ph-2)' },
  { tag: 'Каркас',      name: 'Проект «Дачный-45»',   type: 'Одноэтажный', area: '45 м²',     beds: '2 комн.', baths: '1 с/у', floors: '1 этаж',  cat: 'dachnye', ph: 'var(--ph-3)' },
  { tag: 'Газосиликат', name: 'Проект «Компакт-68»',  type: 'Одноэтажный', area: '68 м²',     beds: '2 комн.', baths: '1 с/у', floors: '1 этаж',  cat: 'do70', ph: 'var(--ph-1)' },
  { tag: 'VELOX',       name: 'Проект «Простор-165»', type: 'Двухэтажный', area: '165 м²',    beds: '5 комн.', baths: '3 с/у', floors: '2 этажа', cat: 'do180', ph: 'var(--ph-4)' },
];

const ICON_BED   = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M6 18v2M18 18v2"/></svg>';
const ICON_BATH  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M4 13h18M6 19l-1 2M18 19l1 2"/></svg>';
const ICON_FLOOR = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
const ICON_HOME  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>';
const ICON_HEART = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z"/></svg>';

function projectCard(p) {
  return `
  <article class="prop-card">
    <div class="prop-media">
      <div class="prop-img"><div class="img-slot" style="background:${p.ph}"><span>Фото проекта</span></div></div>
      <div class="prop-tag">${p.tag}</div>
      <button class="heart-btn" type="button" aria-label="В избранное">${ICON_HEART}</button>
    </div>
    <div class="prop-body">
      <h4>${p.name}</h4>
      <div class="prop-type">${ICON_HOME}${p.type}</div>
      <div class="prop-area">${p.area}</div>
      <div class="prop-specs">
        <span>${ICON_BED}${p.beds}</span>
        <span>${ICON_BATH}${p.baths}</span>
        <span>${ICON_FLOOR}${p.floors}</span>
      </div>
    </div>
  </article>`;
}

/** Рендер списка проектов в контейнер. filter — необязательная категория. */
function renderProjects(containerId, { filter = null, limit = null } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let list = filter ? PROJECTS.filter((p) => p.cat === filter) : PROJECTS.slice();
  if (limit) list = list.slice(0, limit);
  el.innerHTML = list.map(projectCard).join('');
}
