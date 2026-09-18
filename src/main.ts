// ==========================================================================
// El Guasimal · SPA Router (TypeScript)
// Routes:  /  -> /home   |   /home  -> landing   |   /:slug -> tomb detail
// ==========================================================================

import { CEMETERY, TOMBS } from "./data";
import { icon } from "./icons";
import type { Fact, Stat, Tomb } from "./types";

// --- PDF URL ---
const PDF_URL = "docs/RESULTADOS DEL ESTUDION ARQUITECTONICO.pdf";

// --- Helpers ---
function esc(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sectionLabel(text: string): string {
  return `<span class="section-label">${esc(text)}<i class="line"></i></span>`;
}

// --- Base path (supports subdirectory deployment, e.g. GitHub Pages) ---
let basePath = "/";
if (document.currentScript) {
  const u = new URL((document.currentScript as HTMLScriptElement).src);
  const bp = u.pathname.replace(/\/assets\/app\.js$/, "") + "/";
  if (bp && bp !== "/") basePath = bp;
}
const navBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");
const isFile = window.location.protocol === "file:";

function fullHref(to: string): string {
  return navBase + to;
}

function navigate(to: string): void {
  if (isFile) {
    window.location.hash = to;
  } else {
    history.pushState({}, "", fullHref(to));
  }
  render();
  window.scrollTo(0, 0);
}

function currentRoute(): string {
  if (isFile) {
    const h = window.location.hash || "#/home";
    return h.replace(/^#/, "") || "/";
  }
  let path = window.location.pathname;
  const qp = new URLSearchParams(window.location.search).get("p");
  if (qp) path = qp;
  if (basePath !== "/" && path.startsWith(basePath)) {
    path = path.slice(basePath.length - 1);
  }
  path = path.replace(/\/+$/, "") || "/";
  return path;
}

// --- Templates ---
function brand(): string {
  return (
    `<a class="brand" href="${fullHref("/home")}" data-nav="/home">` +
    `<span class="brand-mark">${icon("tombstone")}</span>` +
    `<span class="brand-text">` +
    `<span class="brand-name">El Guasimal</span>` +
    `<span class="brand-sub">${esc(CEMETERY.tagline)}</span>` +
    `</span></a>`
  );
}

function navBar(): string {
  return (
    `<header class="navbar"><div class="container navbar-inner">` +
    brand() +
    `<nav class="nav-links">` +
    `<a class="nav-link" href="${fullHref("/home")}" data-nav="/home">Inicio</a>` +
    `<a class="nav-cta" href="${esc(encodeURI(PDF_URL))}">Documento PDF</a>` +
    `</nav>` +
    `</div></header>`
  );
}

function backToTop(): string {
  return (
    `<button class="back-to-top" type="button" aria-label="Volver arriba">` +
    icon("arrow-up") +
    `</button>`
  );
}

function footer(): string {
  return (
    `<footer class="footer"><div class="container footer-inner">` +
    `<div class="footer-brand">` +
    `<span class="brand-text">` +
    `<span class="brand-name">El Guasimal</span>` +
    `<span class="brand-sub">${esc(CEMETERY.tagline)}</span>` +
    `</span>` +
    `</div>` +
    `<p>© ${new Date().getFullYear()} · Cementerio El Guasimal (${esc(CEMETERY.period)}) · Registro de Patrimonio Funerario</p>` +
    `<div class="footer-links">` +
    `<a href="${fullHref("/home")}" data-nav="/home">Inicio</a>` +
    `<a href="${esc(encodeURI(PDF_URL))}">Estudio (PDF)</a>` +
    `</div>` +
    `</div></footer>` +
    backToTop()
  );
}

function renderHome(): void {
  document.title = "El Guasimal · Patrimonio Funerario";

  const facts: Fact[] = [
    { k: "Tipología de sepultura", v: "Fosas directas al suelo" },
    { k: "Fundación", v: CEMETERY.founded },
    { k: "Antigüedad al estudio", v: CEMETERY.ageAtStudy },
    { k: "Reconstrucción", v: CEMETERY.rebuilt },
  ];

  const cards = TOMBS.map((t: Tomb) => {
    return (
      `<a class="tomb-card" href="${fullHref(`/${t.slug}`)}" data-nav="/${t.slug}">` +
      `<div class="tomb-media"><img src="${esc(t.image)}" alt="${esc(t.title)}" loading="lazy" /></div>` +
      `<div class="tomb-card-body">` +
      `<span class="tomb-eyebrow">${esc(t.id)} · ${esc(t.years)}</span>` +
      `<h3 class="tomb-title">${esc(t.title)}</h3>` +
      `<span class="tomb-style">${esc(t.style)}</span>` +
      `<p class="tomb-desc">${esc(t.brief)}</p>` +
      `<span class="tomb-link">Ver monumento ${icon("arrow-right")}</span>` +
      `</div></a>`
    );
  }).join("");

  const stats: Stat[] = [
    { value: CEMETERY.period, label: "Período de uso" },
    { value: CEMETERY.founded, label: "Año de fundación" },
    { value: CEMETERY.rebuilt, label: "Reconstrucción" },
    { value: CEMETERY.tombsCount, label: "Monumentos catalogados" },
  ];

  const html =
    navBar() +
    `<section class="hero">` +
    `<img class="hero-img" src="${esc(CEMETERY.heroImage)}" alt="Monumento funerario del Cementerio El Guasimal" />` +
    `<div class="hero-overlay"></div>` +
    `<div class="container hero-inner"><div class="hero-content">` +
    `<span class="hero-label">${esc(CEMETERY.tagline)}</span>` +
    `<h1 class="hero-title">Cementerio<span class="accent">El Guasimal</span></h1>` +
    `<p class="hero-subtitle">Catálogo digital de los monumentos funerarios del Cementerio El Guasimal (${esc(CEMETERY.period)}). ` +
    `Un recorrido por la arquitectura funeraria popular, su estilo, sus materiales y su simbolismo.</p>` +
    `<div class="hero-actions">` +
    `<a class="btn-primary" href="#monumentos">Explorar monumentos ${icon("arrow-right")}</a>` +
    `<a class="btn-secondary" href="${esc(encodeURI(PDF_URL))}">Ver documento</a>` +
    `</div>` +
    `</div></div>` +
    `</section>` +

    `<section class="section" id="sobre"><div class="container about-grid">` +
    `<div class="about-media"><div class="gold-frame"><img src="${esc(CEMETERY.aboutImage)}" alt="Estela funeraria de El Guasimal" /></div></div>` +
    `<div class="about-body">` +
    sectionLabel("El cementerio") +
    `<h2>Un camposanto fundado en ${esc(CEMETERY.founded)}</h2>` +
    `<p class="lead">${esc(CEMETERY.aboutLead)}</p>` +
    `<p>${esc(CEMETERY.aboutText)}</p>` +
    `<ul class="fact-list">` +
    facts.map((f: Fact) => {
      return `<li><span class="k">${esc(f.k)}</span><span class="v">${esc(f.v)}</span></li>`;
    }).join("") +
    `</ul>` +
    `</div>` +
    `</div></section>` +

    `<section class="stats-band"><div class="container">` +
    `<div class="stats-head">${sectionLabel("El Guasimal en cifras")}</div>` +
    `<div class="stats-grid">` +
    stats.map((s: Stat) => {
      return `<div class="stat"><div class="stat-value">${esc(s.value)}</div><div class="stat-label">${esc(s.label)}</div></div>`;
    }).join("") +
    `</div>` +
    `</div></section>` +

    `<section class="section" id="monumentos"><div class="container">` +
    `<div class="section-head">` +
    sectionLabel("Monumentos funerarios") +
    `<h2>Monumentos funerarios</h2>` +
    `<p>Breve descripción de cada tumba documentada en el estudio arquitectónico. Selecciona una para ver su ficha completa.</p>` +
    `</div>` +
    `<div class="tombs-grid">${cards}</div>` +
    `</div></section>` +
    footer();

  document.getElementById("app")!.innerHTML = html;
}

function renderDetail(tomb: Tomb): void {
  document.title = `${tomb.title} · El Guasimal`;

  const facts = Object.keys(tomb.facts)
    .map((k: string) => {
      let v = tomb.facts[k];
      if (k === "Registro") {
        v = `<span class="code-chip">${esc(v)}</span>`;
      } else {
        v = esc(v);
      }
      return `<div class="fact"><div class="fact-label">${esc(k)}</div><div class="fact-value">${v}</div></div>`;
    })
    .join("");

  const sections = tomb.sections
    .map((s) => {
      const paras = s.paragraphs
        .map((p, i) => {
          return `<p${i === 0 ? ' class="lead"' : ""}>${esc(p)}</p>`;
        })
        .join("");
      return (
        `<article class="prose-section">` +
        `<h3 class="prose-heading">${esc(s.heading)}</h3>` +
        paras +
        `</article>`
      );
    })
    .join("");

  const registro = tomb.facts["Registro"]
    ? `<span class="code-chip">${esc(tomb.facts["Registro"])}</span>`
    : "";

  const html =
    navBar() +
    `<section class="detail-hero">` +
    `<img class="hero-img" src="${esc(tomb.image)}" alt="${esc(tomb.title)}" />` +
    `<div class="hero-overlay"></div>` +
    `<div class="container hero-inner"><div class="hero-content">` +
    `<a class="back-link" href="${fullHref("/home")}" data-nav="/home">${icon("arrow-left")} Volver al catálogo</a>` +
    `<h1 class="detail-title">${esc(tomb.title)}</h1>` +
    `<div class="detail-meta">` +
    `<span>${esc(tomb.id)} · ${esc(tomb.years)}</span>` +
    `<span class="sep"></span>` +
    `<span class="tomb-style">${esc(tomb.style)}</span>` +
    (registro ? `<span class="sep"></span>${registro}` : "") +
    `</div>` +
    `<p class="hero-subtitle">${esc(tomb.brief)}</p>` +
    `</div></div>` +
    `</section>` +

    `<section class="detail-body"><div class="container detail-grid">` +
    `<div class="fact-grid">${facts}</div>` +
    sections +
    `</div></section>` +
    footer();

  document.getElementById("app")!.innerHTML = html;
}

function renderNotFound(): void {
  document.title = "No encontrado · El Guasimal";
  document.getElementById("app")!.innerHTML =
    navBar() +
    `<section class="notfound"><div class="container">` +
    `<h1>404</h1>` +
    `<p>El monumento que buscas no está en el catálogo.</p>` +
    `<div class="hero-actions">` +
    `<a class="btn-primary" href="${fullHref("/home")}" data-nav="/home">Volver al inicio ${icon("arrow-right")}</a>` +
    `</div>` +
    `</div></section>` +
    footer();
}

// --- Render by route ---
function render(): void {
  const route = currentRoute();

  if (
    route === "/" ||
    route === "/home" ||
    route === "/index.html" ||
    route === ""
  ) {
    renderHome();
    return;
  }

  const slug = route.replace(/^\//, "");
  const tomb = TOMBS.find((t) => t.slug === slug) ?? null;

  if (tomb) {
    renderDetail(tomb);
  } else {
    renderNotFound();
  }
}

// --- Events ---
document.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const a = target.closest?.("a[data-nav]") as HTMLAnchorElement | null;
  if (a) {
    e.preventDefault();
    navigate(a.getAttribute("data-nav")!);
    return;
  }

  const top = target.closest?.(".back-to-top");
  if (top) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  if (window.scrollY > 400) {
    btn.classList.add("is-visible");
  } else {
    btn.classList.remove("is-visible");
  }
});

window.addEventListener("popstate", render);
if (isFile) window.addEventListener("hashchange", render);

// Initial redirect from "/" to "/home"
if (!isFile && currentRoute() === "/") {
  history.replaceState({}, "", fullHref("/home"));
}

render();
