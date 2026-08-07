/* ============================================================
   components.js — 共通ヘッダー / フッター
   全ページ共通のナビゲーションはここ1箇所を編集すれば
   全ページに反映されます。
   ============================================================ */

function renderHeader() {
  const page = document.body.dataset.page;
  const el = document.getElementById("site-header");
  if (!el) return;

  const links = [
    ["home", "index.html", "nav.home"],
    ["biography", "biography.html", "nav.biography"],
    ["schedule", "schedule.html", "nav.schedule"],
    ["press", "press.html", "nav.press"],
    ["discography", "discography.html", "nav.discography"],
    ["gallery", "gallery.html", "nav.gallery"],
    ["contact", "contact.html", "nav.contact"]
  ];

  const linksHtml = links.map(([key, href, i18nKey]) =>
    `<a href="${href}" data-i18n="${i18nKey}" class="${page === key ? "is-active" : ""}"></a>`
  ).join("");

  /* YouTubeは見つけやすいよう、全ページ共通ヘッダーに常時表示する */
  const yt = CONTENT.contactDetails.youtube;
  const youtubeHtml = yt && yt.url
    ? `<a class="nav-youtube" href="${yt.url}" target="_blank" rel="noopener">${yt.label}</a>`
    : "";

  el.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" data-i18n="site.name"></a>
      <nav class="nav-links" id="nav-links">${linksHtml}${youtubeHtml ? youtubeHtml.replace('class="nav-youtube"', 'class="nav-youtube-flyout"') : ""}</nav>
      <div class="nav-right">
        ${youtubeHtml}
        <div class="lang-switch">
          <button data-lang="fr">FR</button>
          <button data-lang="ja">JA</button>
          <button data-lang="en">EN</button>
        </div>
        <button class="nav-burger" id="nav-burger" aria-label="Menu">&#9776;</button>
      </div>
    </div>
  `;

  el.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => I18N.setLang(btn.dataset.lang));
  });

  const burger = document.getElementById("nav-burger");
  const navLinks = document.getElementById("nav-links");
  burger.addEventListener("click", () => navLinks.classList.toggle("is-open"));
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("is-open")));
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const c = CONTENT.contactDetails;

  /* instagram / facebook 等は、contactDetails に無ければ自動的に非表示になる */
  const socialLinks = ["youtube", "instagram", "facebook"]
    .filter((key) => c[key] && c[key].url)
    .map((key) => `<a href="${c[key].url}" target="_blank" rel="noopener">${c[key].label}</a>`)
    .join("");

  el.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-col">
        <div class="footer-name" data-i18n="site.name"></div>
        <p style="margin-top:1rem; opacity:0.75;" data-i18n="site.tagline"></p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.navigation"></h4>
        <a href="biography.html" data-i18n="nav.biography"></a>
        <a href="schedule.html" data-i18n="nav.schedule"></a>
        <a href="press.html" data-i18n="nav.press"></a>
        <a href="discography.html" data-i18n="nav.discography"></a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.contactTitle"></h4>
        <a href="contact.html" data-i18n="nav.contact"></a>
        ${socialLinks}
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} <span data-i18n="site.name"></span> — <span data-i18n="footer.rights"></span></span>
      <span>Site conçu avec Claude</span>
    </div>
  `;
}
