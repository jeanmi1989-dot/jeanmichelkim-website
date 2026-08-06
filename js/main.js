/* ============================================================
   main.js — 起動処理
   ============================================================ */

function renderPage() {
  const page = document.body.dataset.page;
  const lang = I18N.lang();
  if (page === "home") renderHome(lang);
  if (page === "schedule") renderSchedulePage(lang);
  if (page === "press") renderPressPage(lang);
  if (page === "discography") renderDiscographyPage(lang);
  if (page === "gallery") renderGalleryPage(lang);
  if (page === "biography") renderBiography(lang);
  if (page === "contact") renderContactInfo(lang);
  I18N.apply();
}

function setupHeaderScrollState() {
  const inner = document.querySelector(".nav-inner");
  if (!inner) return;
  const onScroll = () => inner.classList.toggle("is-solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupLightboxControls() {
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const box = document.getElementById("lightbox");
  if (!box) return;
  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navLightbox(-1));
  nextBtn.addEventListener("click", () => navLightbox(1));
  box.addEventListener("click", (e) => { if (e.target === box) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  I18N.apply();
  renderPage();
  setupHeaderScrollState();
  setupLightboxControls();
  initScrollReveal();
  window.addEventListener("langchange", renderPage);
});
