/* ============================================================
   render.js — 動的コンテンツの描画（スケジュール／批評／CD／写真）
   SCHEDULE, PRESS, DISCOGRAPHY, GALLERY (js/data/*.js) を
   読み込んで各ページに表示します。
   ============================================================ */

/* 画像が見つからない場合、優雅な代替表示にする */
function imgOrFallback(src, altText, extraClass) {
  return `<img src="${src}" alt="${altText}" class="${extraClass || ""}"
    onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'img-missing ${extraClass || ""}',innerText:'${altText.replace(/'/g, "\\'")}'}))">`;
}

function sortedSchedule() {
  return [...SCHEDULE].sort((a, b) => a.date.localeCompare(b.date));
}

function isFuture(dateStr) {
  const today = new Date().toISOString().slice(0, 10);
  return dateStr >= today;
}

function upcomingItemHtml(item, lang) {
  const ticket = item.ticketUrl
    ? `<a class="btn btn-small btn-gold" href="${item.ticketUrl}" target="_blank" rel="noopener">${I18N.get("common.buyTickets", lang)}</a>`
    : "";
  return `
    <div class="upcoming-item">
      <div class="date-block">
        <div class="day">${I18N.formatDay(item.date)}</div>
        <div class="month">${I18N.formatMonth(item.date)}</div>
      </div>
      <div class="upcoming-meta">
        <div class="venue">${item.venue[lang]}</div>
        <div class="city">${item.city[lang]}${item.time ? " · " + item.time : ""}</div>
        <div class="program">${item.program[lang]}</div>
      </div>
      ${ticket}
    </div>`;
}

/* ---------- HOME: featured concert banner ----------
   schedule.js の該当公演に highlight: true を付けると、
   トップページのヒーロー直下に大きな専用バナーとして表示されます。
   複数ある場合は日付が一番近いものを表示します。 */
function renderFeaturedConcert(lang) {
  const section = document.getElementById("featured-concert");
  if (!section) return;
  const item = sortedSchedule().find((s) => s.highlight && isFuture(s.date));
  if (!item) {
    section.style.display = "none";
    return;
  }
  section.style.display = "";
  document.getElementById("featured-concert-venue").textContent = item.venue[lang];
  document.getElementById("featured-concert-date").textContent =
    `${item.city[lang]} — ${I18N.formatDate(item.date)}${item.time ? " · " + item.time : ""}`;
  document.getElementById("featured-concert-program").textContent = item.program[lang];
  const cta = document.getElementById("featured-concert-cta");
  if (item.ticketUrl) {
    cta.href = item.ticketUrl;
    cta.style.display = "";
    cta.textContent = I18N.get("common.buyTickets", lang);
  } else {
    cta.style.display = "none";
  }
}

/* ---------- HOME ---------- */
function renderHome(lang) {
  renderFeaturedConcert(lang);

  const introEl = document.getElementById("home-intro-text");
  if (introEl) {
    introEl.innerHTML = CONTENT.ui[lang].pages.home.introText.map((p) => `<p>${p}</p>`).join("");
  }

  const upcoming = sortedSchedule().filter((s) => isFuture(s.date)).slice(0, 3);
  const upcomingEl = document.getElementById("home-upcoming");
  if (upcomingEl) {
    upcomingEl.innerHTML = upcoming.length
      ? upcoming.map((i) => upcomingItemHtml(i, lang)).join("")
      : `<p class="section-intro">—</p>`;
  }

  const pressEl = document.getElementById("home-press");
  if (pressEl && PRESS[0]) {
    const p = PRESS[0];
    pressEl.innerHTML = `
      <blockquote>&ldquo;${p.quote[lang]}&rdquo;</blockquote>
      <cite>${p.source}</cite><span class="press-date">${p.date}</span>`;
  }

  const discoEl = document.getElementById("home-disco");
  if (discoEl && DISCOGRAPHY[0]) {
    const d = DISCOGRAPHY[0];
    discoEl.innerHTML = `
      <div class="frame-photo is-square">${imgOrFallback(d.cover, d.title[lang])}</div>
      <div>
        <h3 class="section-title" style="font-size:2rem;">${d.title[lang]}</h3>
        <p class="meta" style="font-family:var(--font-ui); text-transform:uppercase; letter-spacing:.06em; color:var(--color-ink-faint); font-size:.8rem; margin:.4em 0 1em;">${d.label} — ${d.year}</p>
        <p>${d.description[lang]}</p>
        <a class="btn" href="discography.html">${I18N.get("common.moreInfo", lang)}</a>
      </div>`;
  }
}

/* ---------- SCHEDULE PAGE ---------- */
function renderSchedulePage(lang) {
  const all = sortedSchedule();
  const upcoming = all.filter((s) => isFuture(s.date));
  const past = all.filter((s) => !isFuture(s.date)).reverse();

  const upcomingEl = document.getElementById("schedule-upcoming");
  if (upcomingEl) {
    upcomingEl.innerHTML = upcoming.length
      ? upcoming.map((i) => upcomingItemHtml(i, lang)).join("")
      : `<p class="section-intro">—</p>`;
  }

  const pastEl = document.getElementById("schedule-past");
  const pastToggle = document.getElementById("schedule-past-toggle");
  if (pastEl) {
    pastEl.innerHTML = past.map((i) => upcomingItemHtml(i, lang)).join("");
    pastEl.classList.add("is-hidden");
    pastEl.style.display = "none";
  }
  if (pastToggle) {
    pastToggle.textContent = I18N.get("common.showPast", lang);
    pastToggle.onclick = () => {
      const hidden = pastEl.style.display === "none";
      pastEl.style.display = hidden ? "block" : "none";
      pastToggle.textContent = I18N.get(hidden ? "common.hidePast" : "common.showPast", lang);
    };
  }
}

/* ---------- PRESS PAGE ---------- */
function pressItemHtml(p, lang) {
  const link = p.url
    ? `<a class="press-link" href="${p.url}" target="_blank" rel="noopener">${I18N.get("common.readArticle", lang)} &rarr;</a>`
    : "";
  return `
    <div class="press-quote reveal">
      <blockquote>&ldquo;${p.quote[lang]}&rdquo;</blockquote>
      <cite>${p.source}</cite><span class="press-date">${p.date}</span>
      ${link}
    </div>`;
}

function renderPressPage(lang) {
  const el = document.getElementById("press-list");
  if (el) {
    el.innerHTML = PRESS.map((p) => pressItemHtml(p, lang)).join("");
    initScrollReveal();
  }
}

/* ---------- DISCOGRAPHY PAGE ---------- */
function discoCardHtml(d, lang) {
  const listen = d.listenUrl ? `<a href="${d.listenUrl}" target="_blank" rel="noopener">${I18N.get("common.listen", lang)}</a>` : "";
  const buy = d.buyUrl ? `<a href="${d.buyUrl}" target="_blank" rel="noopener">${I18N.get("common.buy", lang)}</a>` : "";
  return `
    <div class="disco-card reveal">
      <div class="cover">${imgOrFallback(d.cover, d.title[lang])}</div>
      <h3>${d.title[lang]}</h3>
      <p class="meta">${d.label} — ${d.year}</p>
      <p>${d.description[lang]}</p>
      <div class="links">${listen}${buy}</div>
    </div>`;
}

function renderDiscographyPage(lang) {
  const el = document.getElementById("disco-grid");
  if (el) {
    el.innerHTML = DISCOGRAPHY.map((d) => discoCardHtml(d, lang)).join("");
    initScrollReveal();
  }
}

/* ---------- GALLERY PAGE ---------- */
function renderGalleryPage(lang) {
  const el = document.getElementById("gallery-grid");
  if (!el) return;
  el.innerHTML = GALLERY.map((g, idx) =>
    `<div class="gallery-item reveal" data-index="${idx}">${imgOrFallback(g.src, g.alt[lang])}<span class="photo-credit">© Jean-Baptiste Millot</span></div>`
  ).join("");
  initScrollReveal();

  el.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(parseInt(item.dataset.index, 10)));
  });
}

let lightboxIndex = 0;
function openLightbox(index) {
  lightboxIndex = index;
  const lang = I18N.lang();
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = GALLERY[index].src;
  img.alt = GALLERY[index].alt[lang];
  box.classList.add("is-open");
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("is-open"); }
function navLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + GALLERY.length) % GALLERY.length;
  openLightbox(lightboxIndex);
}

/* ---------- BIOGRAPHY PAGE ---------- */
function renderBiography(lang) {
  const bioEl = document.getElementById("bio-text");
  if (bioEl) {
    bioEl.innerHTML = CONTENT.profile[lang].longBio.map((p) => `<p>${p}</p>`).join("");
  }
  const factsEl = document.getElementById("bio-facts");
  if (factsEl) {
    factsEl.innerHTML = CONTENT.profile[lang].facts
      .map((f) => `<li><span class="label">${f.label}</span><span class="value">${f.value}</span></li>`)
      .join("");
  }
}

/* ---------- CONTACT PAGE ---------- */
/* メールアドレスはコード上に一切残さない方針のため、
   コンタクト先はフォーム（Formspree）とSNSのみを表示する */
function renderContactInfo(lang) {
  const c = CONTENT.contactDetails;
  const social = document.getElementById("contact-social");
  if (social) {
    /* instagram / facebook 等は、contactDetails に無ければ自動的に非表示になる */
    social.innerHTML = ["youtube", "instagram", "facebook"]
      .filter((key) => c[key] && c[key].url)
      .map((key) => `<a href="${c[key].url}" target="_blank" rel="noopener">${c[key].label}</a>`)
      .join("");
  }
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-observed)");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); });
  }, { threshold: 0.12 });
  items.forEach((el) => { el.classList.add("is-observed"); obs.observe(el); });
}
