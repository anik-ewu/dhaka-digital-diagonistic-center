/* Renders content from data.js and handles small interactions.
 * Normally you don't need to edit this file — edit js/data.js instead. */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  let lang = "bn";
  try { lang = localStorage.getItem("ddc-lang") || "bn"; } catch (e) { /* storage blocked */ }

  // Pick the right language; fall back to Bangla, and allow plain strings.
  const t = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] || v.bn || "");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tel = (p) => "tel:" + p.replace(/[^\d+]/g, "");

  const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
  const num = (s) => (lang === "bn" ? String(s).replace(/\d/g, (d) => BN_DIGITS[d]) : String(s));

  /* ---------- Icons (simple line icons) ---------- */
  const ICONS = {
    microscope: '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    xray: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 6v12M8 9h8M8.5 12h7M9 15h6"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/><path d="M3.2 12H9l1-2 2 4 1.5-3H21"/>',
    ultrasound: '<path d="M4 20 12 8l8 12"/><path d="M7 15.5a6 6 0 0 1 10 0M9 12.5a3.5 3.5 0 0 1 6 0"/><circle cx="12" cy="5" r="2"/>',
    echo: '<path d="M2 12h4l2-5 3 10 3-7 2 2h6"/>',
    checkup: '<path d="M9 2h6v4H9z"/><path d="M15 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    hormone: '<path d="M9 2v6l-5 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17l-5-9V2"/><path d="M8 2h8M7 15h10"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="4"/>',
    baby: '<circle cx="12" cy="8" r="5"/><path d="M10 7.5h.01M14 7.5h.01M10.5 10a2 2 0 0 0 3 0"/><path d="M6 21a6 6 0 0 1 12 0"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    phone: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.checkup}</svg>`;

  /* ---------- Static text ---------- */
  function renderStatic() {
    document.documentElement.lang = lang;
    document.body.classList.toggle("is-en", lang === "en");

    $$("[data-i18n]").forEach((el) => { el.textContent = t(I18N[el.dataset.i18n]); });
    $$("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(I18N[el.dataset.i18nPlaceholder]); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(I18N[el.dataset.i18nAria])); });
    $$("[data-site]").forEach((el) => { el.textContent = t(SITE[el.dataset.site]); });

    $$(".js-serial-link").forEach((a) => { a.href = tel(SITE.serialPhone); });
    $$(".js-serial-text").forEach((a) => { a.textContent = num(SITE.serialPhone); });

    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  /* ---------- Highlights ---------- */
  function renderHighlights() {
    $("#highlights").innerHTML = HIGHLIGHTS.map((h) => `
      <li class="highlight reveal"><strong>${esc(t(h.value))}</strong><span>${esc(t(h.label))}</span></li>`).join("");
  }

  /* ---------- Services ---------- */
  function renderServices() {
    $("#servicesGrid").innerHTML = SERVICES.map((s) => {
      const fee = t(s.fee);
      return `
        <article class="service reveal">
          <div class="service__icon">${icon(s.icon)}</div>
          <h3>${esc(t(s.name))}</h3>
          <p>${esc(t(s.desc))}</p>
          ${fee ? `<p class="service__fee"><span>${esc(t(I18N.fee_label))}</span> ${esc(fee)}</p>` : ""}
        </article>`;
    }).join("");
  }

  /* ---------- Doctors ---------- */
  let activeTag = "all";

  function initials(name) {
    // Drop the "Dr." / "ডাঃ" / "মোঃ" prefixes, take first letters of the next two words.
    const words = name.replace(/^(Dr\.|ডাঃ)\s*/, "").replace(/^(Md\.|মোঃ)\s*/, "").split(/\s+/);
    return words.slice(0, 2).map((w) => Array.from(w)[0]).join("");
  }

  function renderChips() {
    const used = new Set(DOCTORS.flatMap((d) => d.tags || []));
    const keys = ["all", ...Object.keys(SPECIALTIES).filter((k) => used.has(k))];
    $("#specialtyChips").innerHTML = keys.map((k) => `
      <button type="button" class="chip" data-tag="${k}" aria-pressed="${k === activeTag}">
        ${esc(k === "all" ? t(I18N.filter_all) : t(SPECIALTIES[k]))}
      </button>`).join("");
  }

  function renderDoctors() {
    $("#doctorsGrid").innerHTML = DOCTORS.map((d, i) => {
      const name = t(d.name);
      const avatar = d.photo
        ? `<img src="${esc(d.photo)}" alt="" loading="lazy">`
        : `<span>${esc(initials(name))}</span>`;
      const tags = (d.tags || []).map((k) => `<li>${esc(t(SPECIALTIES[k]))}</li>`).join("");
      // Text from both languages is kept for search, so either works.
      const haystack = [d.name, d.specialty, d.degrees, ...(d.tags || []).map((k) => SPECIALTIES[k])]
        .map((v) => (v ? `${v.bn || ""} ${v.en || ""}` : "")).join(" ").toLowerCase();
      return `
        <article class="doctor reveal" data-idx="${i}" data-tags="${(d.tags || []).join(" ")}" data-search="${esc(haystack)}">
          <div class="doctor__top">
            <div class="doctor__avatar">${avatar}</div>
            <div>
              <h3>${esc(name)}</h3>
              <p class="doctor__degrees">${esc(t(d.degrees))}</p>
            </div>
          </div>
          <p class="doctor__specialty">${esc(t(d.specialty))}</p>
          <p class="doctor__inst">${esc(t(d.institution))}</p>
          <ul class="doctor__tags">${tags}</ul>
          <div class="doctor__time">
            ${icon("clock")}
            <div><small>${esc(t(I18N.schedule_label))}</small><span>${esc(t(d.schedule))}</span></div>
          </div>
        </article>`;
    }).join("");
    filterDoctors();
  }

  function filterDoctors() {
    const q = $("#doctorSearch").value.trim().toLowerCase();
    let shown = 0;
    $$(".doctor").forEach((card) => {
      const tagOk = activeTag === "all" || card.dataset.tags.split(" ").includes(activeTag);
      const textOk = !q || card.dataset.search.includes(q);
      const visible = tagOk && textOk;
      card.hidden = !visible;
      if (visible) shown++;
    });
    $("#doctorsEmpty").hidden = shown > 0;
  }

  /* ---------- Gallery + lightbox ---------- */
  function renderGallery() {
    $("#galleryGrid").innerHTML = GALLERY.map((g, i) => `
      <button type="button" class="gallery__item reveal" data-idx="${i}">
        <img src="${esc(g.src)}" alt="${esc(t(g.caption))}" loading="lazy">
        <span class="gallery__cap">${esc(t(g.caption))}</span>
        <span class="gallery__zoom">${icon("zoom")}</span>
      </button>`).join("");
  }

  const lightbox = $("#lightbox");
  let lastFocus = null;
  function openLightbox(i) {
    const g = GALLERY[i];
    lastFocus = document.activeElement;
    $("#lightboxImg").src = g.src;
    $("#lightboxImg").alt = t(g.caption);
    $("#lightboxCaption").textContent = t(g.caption);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lightboxClose").focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    $("#contactPeople").innerHTML = SITE.contacts.map((c) => `
      <li>
        <div><strong>${esc(t(c.name))}</strong><small>${esc(t(c.role))}</small></div>
        <div class="people__phones">
          ${c.phones.map((p) => `<a href="${tel(p)}">${icon("phone")}${esc(num(p))}</a>`).join("")}
        </div>
      </li>`).join("");

    const email = $("#emailLink");
    email.href = "mailto:" + SITE.email;
    email.textContent = SITE.email;

    const q = encodeURIComponent(SITE.mapQuery);
    $("#mapLink").href = "https://www.google.com/maps/search/?api=1&query=" + q;
    const frame = $("#mapFrame");
    const src = "https://maps.google.com/maps?q=" + q + "&z=16&output=embed&hl=" + lang;
    if (frame.src !== src) frame.src = src;

    const fb = $("#facebookLink");
    if (SITE.facebook) { fb.href = SITE.facebook; fb.hidden = false; }

    $("#year").textContent = num(new Date().getFullYear());
  }

  /* ---------- Scroll reveal ---------- */
  let observer = null;
  function observeReveals() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
  }

  /* ---------- Render everything ---------- */
  function renderAll() {
    renderStatic();
    renderHighlights();
    renderServices();
    renderChips();
    renderDoctors();
    renderGallery();
    renderContact();
    observeReveals();
  }

  /* ---------- Events ---------- */
  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem("ddc-lang", lang); } catch (e) { /* ignore */ }
    renderAll();
    // Content was just re-rendered; show it immediately instead of re-animating.
    $$(".reveal").forEach((el) => el.classList.add("is-visible"));
  }));

  $("#specialtyChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    activeTag = chip.dataset.tag;
    $$(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    filterDoctors();
  });
  $("#doctorSearch").addEventListener("input", filterDoctors);

  $("#galleryGrid").addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (item) openLightbox(+item.dataset.idx);
  });
  $("#lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });

  // Mobile menu
  const nav = $("#nav"), menuBtn = $("#menuBtn");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    menuBtn.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  // Header shadow on scroll + active nav link
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const links = $$(".nav a");
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  renderAll();
})();
