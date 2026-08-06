/* ============================================================
   i18n.js — 多言語切り替えエンジン（fr / ja / en）
   触らなくても動作します。文言を変えたいだけなら
   js/data/content.js を編集してください。
   ============================================================ */

const I18N = (() => {
  const STORAGE_KEY = "pianist_site_lang";
  const SUPPORTED = ["fr", "ja", "en"];
  const LOCALE_MAP = { fr: "fr-FR", ja: "ja-JP", en: "en-GB" };

  function detectDefault() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("fr")) return "fr";
    if (nav.startsWith("ja")) return "ja";
    return "en";
  }

  let currentLang = detectDefault();

  function resolve(path, root) {
    return path.split(".").reduce((node, key) => (node ? node[key] : undefined), root);
  }

  function get(path, lang) {
    lang = lang || currentLang;
    const val = resolve(path, CONTENT.ui[lang]);
    return val !== undefined ? val : path;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    apply();
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function apply() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = get(key);
      if (val === undefined) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      // format: data-i18n-attr="placeholder:common.emailLabel"
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, get(key));
      });
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
    });

    const titleKey = document.body.dataset.titleKey;
    if (titleKey) {
      document.title = get(titleKey) + " — " + get("site.name");
    }
  }

  function lang() { return currentLang; }

  function formatDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return new Intl.DateTimeFormat(LOCALE_MAP[currentLang], { day: "2-digit", month: "short", year: "numeric" }).format(d);
  }

  function formatDay(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.getDate();
  }

  function formatMonth(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return new Intl.DateTimeFormat(LOCALE_MAP[currentLang], { month: "short" }).format(d).replace(".", "");
  }

  return { setLang, apply, lang, get, formatDate, formatDay, formatMonth, SUPPORTED };
})();
