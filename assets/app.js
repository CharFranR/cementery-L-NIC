// ==========================================================================
// El Guasimal · Router SPA (vanilla)
// Rutas:  /  -> /home   |   /home  -> landing   |   /:slug -> detalle tumba
// ==========================================================================
(function () {
  'use strict';

  var CEMETERY = window.CEMETERY;
  var TOMBS = window.TOMBS || [];

  var PDF_URL = 'docs/RESULTADOS DEL ESTUDION ARQUITECTONICO.pdf';

  // --- Iconos (estilo lucide, stroke currentColor) ------------------------
  var ICONS = {
    'arrow-right':
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'arrow-left':
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    'arrow-up':
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    tombstone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21h14"/><path d="M7 21v-8a5 5 0 0 1 5-5 5 5 0 0 1 5 5v8"/><path d="M10 13h4"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.tombstone;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function sectionLabel(text) {
    return '<span class="section-label">' + esc(text) + '<i class="line"></i></span>';
  }

  // --- Base path (soporta despliegue en subdirectorio, p.ej. GitHub Pages) ---
  var basePath = '/';
  if (document.currentScript) {
    var u = new URL(document.currentScript.src);
    var bp = u.pathname.replace(/\/assets\/app\.js$/, '') + '/';
    if (bp && bp !== '/') basePath = bp;
  }
  var navBase = basePath === '/' ? '' : basePath.replace(/\/$/, '');
  var isFile = window.location.protocol === 'file:';

  function fullHref(to) {
    return navBase + to;
  }

  function navigate(to) {
    if (isFile) {
      window.location.hash = to;
    } else {
      history.pushState({}, '', fullHref(to));
    }
    render();
    window.scrollTo(0, 0);
  }

  function currentRoute() {
    if (isFile) {
      var h = window.location.hash || '#/home';
      return h.replace(/^#/, '') || '/';
    }
    var path = window.location.pathname;
    var qp = new URLSearchParams(window.location.search).get('p');
    if (qp) path = qp;
    if (basePath !== '/' && path.startsWith(basePath)) {
      path = path.slice(basePath.length - 1);
    }
    path = path.replace(/\/+$/, '') || '/';
    return path;
  }

  // --- Templates ----------------------------------------------------------
  function brand() {
    return (
      '<a class="brand" href="' + fullHref('/home') + '" data-nav="/home">' +
      '<span class="brand-mark">' + icon('tombstone') + '</span>' +
      '<span class="brand-text">' +
      '<span class="brand-name">El Guasimal</span>' +
      '<span class="brand-sub">' + esc(CEMETERY.tagline) + '</span>' +
      '</span></a>'
    );
  }

  function navBar() {
    return (
      '<header class="navbar"><div class="container navbar-inner">' +
      brand() +
      '<nav class="nav-links">' +
      '<a class="nav-link" href="' + fullHref('/home') + '" data-nav="/home">Inicio</a>' +
      '<a class="nav-cta" href="' + esc(encodeURI(PDF_URL)) + '">Documento PDF</a>' +
      '</nav>' +
      '</div></header>'
    );
  }

  function backToTop() {
    return (
      '<button class="back-to-top" type="button" aria-label="Volver arriba">' +
      icon('arrow-up') +
      '</button>'
    );
  }

  function footer() {
    return (
      '<footer class="footer"><div class="container footer-inner">' +
      '<div class="footer-brand">' +
      '<span class="brand-text">' +
      '<span class="brand-name">El Guasimal</span>' +
      '<span class="brand-sub">' + esc(CEMETERY.tagline) + '</span>' +
      '</span>' +
      '</div>' +
      '<p>© ' + new Date().getFullYear() + ' · Cementerio El Guasimal (' + esc(CEMETERY.period) + ') · Registro de Patrimonio Funerario</p>' +
      '<div class="footer-links">' +
      '<a href="' + fullHref('/home') + '" data-nav="/home">Inicio</a>' +
      '<a href="' + esc(encodeURI(PDF_URL)) + '">Estudio (PDF)</a>' +
      '</div>' +
      '</div></footer>' +
      backToTop()
    );
  }

  function renderHome() {
    document.title = 'El Guasimal · Patrimonio Funerario';

    var facts = [
      { k: 'Tipología de sepultura', v: 'Fosas directas al suelo' },
      { k: 'Fundación', v: CEMETERY.founded },
      { k: 'Antigüedad al estudio', v: CEMETERY.ageAtStudy },
      { k: 'Reconstrucción', v: CEMETERY.rebuilt },
    ];

    var cards = TOMBS.map(function (t) {
      return (
        '<a class="tomb-card" href="' + fullHref('/' + t.slug) + '" data-nav="/' + t.slug + '">' +
        '<div class="tomb-media"><img src="' + esc(t.image) + '" alt="' + esc(t.title) + '" loading="lazy" /></div>' +
        '<div class="tomb-card-body">' +
        '<span class="tomb-eyebrow">' + esc(t.id) + ' · ' + esc(t.years) + '</span>' +
        '<h3 class="tomb-title">' + esc(t.title) + '</h3>' +
        '<span class="tomb-style">' + esc(t.style) + '</span>' +
        '<p class="tomb-desc">' + esc(t.brief) + '</p>' +
        '<span class="tomb-link">Ver monumento ' + icon('arrow-right') + '</span>' +
        '</div></a>'
      );
    }).join('');

    var stats = [
      { value: CEMETERY.period, label: 'Período de uso' },
      { value: CEMETERY.founded, label: 'Año de fundación' },
      { value: CEMETERY.rebuilt, label: 'Reconstrucción' },
      { value: CEMETERY.tombsCount, label: 'Monumentos catalogados' },
    ];

    var html =
      navBar() +
      '<section class="hero">' +
      '<img class="hero-img" src="' + esc(CEMETERY.heroImage) + '" alt="Monumento funerario del Cementerio El Guasimal" />' +
      '<div class="hero-overlay"></div>' +
      '<div class="container hero-inner"><div class="hero-content">' +
      '<span class="hero-label">' + esc(CEMETERY.tagline) + '</span>' +
      '<h1 class="hero-title">Cementerio<span class="accent">El Guasimal</span></h1>' +
      '<p class="hero-subtitle">Catálogo digital de los monumentos funerarios del Cementerio El Guasimal (' + esc(CEMETERY.period) + '). ' +
      'Un recorrido por la arquitectura funeraria popular, su estilo, sus materiales y su simbolismo.</p>' +
      '<div class="hero-actions">' +
      '<a class="btn-primary" href="#monumentos">Explorar monumentos ' + icon('arrow-right') + '</a>' +
      '<a class="btn-secondary" href="' + esc(encodeURI(PDF_URL)) + '">Ver documento</a>' +
      '</div>' +
      '</div></div>' +
      '</section>' +

      '<section class="section" id="sobre"><div class="container about-grid">' +
      '<div class="about-media"><div class="gold-frame"><img src="' + esc(CEMETERY.aboutImage) + '" alt="Estela funeraria de El Guasimal" /></div></div>' +
      '<div class="about-body">' +
      sectionLabel('El cementerio') +
      '<h2>Un camposanto fundado en ' + esc(CEMETERY.founded) + '</h2>' +
      '<p class="lead">' + esc(CEMETERY.aboutLead) + '</p>' +
      '<p>' + esc(CEMETERY.aboutText) + '</p>' +
      '<ul class="fact-list">' +
      facts.map(function (f) {
        return '<li><span class="k">' + esc(f.k) + '</span><span class="v">' + esc(f.v) + '</span></li>';
      }).join('') +
      '</ul>' +
      '</div>' +
      '</div></section>' +

      '<section class="stats-band"><div class="container">' +
      '<div class="stats-head">' + sectionLabel('El Guasimal en cifras') + '</div>' +
      '<div class="stats-grid">' +
      stats.map(function (s) {
        return '<div class="stat"><div class="stat-value">' + esc(s.value) + '</div><div class="stat-label">' + esc(s.label) + '</div></div>';
      }).join('') +
      '</div>' +
      '</div></section>' +

      '<section class="section" id="monumentos"><div class="container">' +
      '<div class="section-head">' +
      sectionLabel('Monumentos funerarios') +
      '<h2>Monumentos funerarios</h2>' +
      '<p>Breve descripción de cada tumba documentada en el estudio arquitectónico. Selecciona una para ver su ficha completa.</p>' +
      '</div>' +
      '<div class="tombs-grid">' + cards + '</div>' +
      '</div></section>' +
      footer();

    document.getElementById('app').innerHTML = html;
  }

  function renderDetail(tomb) {
    document.title = tomb.title + ' · El Guasimal';

    var facts = Object.keys(tomb.facts)
      .map(function (k) {
        var v = tomb.facts[k];
        if (k === 'Registro') {
          v = '<span class="code-chip">' + esc(v) + '</span>';
        } else {
          v = esc(v);
        }
        return '<div class="fact"><div class="fact-label">' + esc(k) + '</div><div class="fact-value">' + v + '</div></div>';
      })
      .join('');

    var sections = tomb.sections
      .map(function (s) {
        var paras = s.paragraphs.map(function (p, i) {
          return '<p' + (i === 0 ? ' class="lead"' : '') + '>' + esc(p) + '</p>';
        }).join('');
        return (
          '<article class="prose-section">' +
          '<h3 class="prose-heading">' + esc(s.heading) + '</h3>' +
          paras +
          '</article>'
        );
      })
      .join('');

    var registro = tomb.facts['Registro']
      ? '<span class="code-chip">' + esc(tomb.facts['Registro']) + '</span>'
      : '';

    var html =
      navBar() +
      '<section class="detail-hero">' +
      '<img class="hero-img" src="' + esc(tomb.image) + '" alt="' + esc(tomb.title) + '" />' +
      '<div class="hero-overlay"></div>' +
      '<div class="container hero-inner"><div class="hero-content">' +
      '<a class="back-link" href="' + fullHref('/home') + '" data-nav="/home">' + icon('arrow-left') + ' Volver al catálogo</a>' +
      '<h1 class="detail-title">' + esc(tomb.title) + '</h1>' +
      '<div class="detail-meta">' +
      '<span>' + esc(tomb.id) + ' · ' + esc(tomb.years) + '</span>' +
      '<span class="sep"></span>' +
      '<span class="tomb-style">' + esc(tomb.style) + '</span>' +
      (registro ? '<span class="sep"></span>' + registro : '') +
      '</div>' +
      '<p class="hero-subtitle">' + esc(tomb.brief) + '</p>' +
      '</div></div>' +
      '</section>' +

      '<section class="detail-body"><div class="container detail-grid">' +
      '<div class="fact-grid">' + facts + '</div>' +
      sections +
      '</div></section>' +
      footer();

    document.getElementById('app').innerHTML = html;
  }

  function renderNotFound() {
    document.title = 'No encontrado · El Guasimal';
    document.getElementById('app').innerHTML =
      navBar() +
      '<section class="notfound"><div class="container">' +
      '<h1>404</h1>' +
      '<p>El monumento que buscas no está en el catálogo.</p>' +
      '<div class="hero-actions">' +
      '<a class="btn-primary" href="' + fullHref('/home') + '" data-nav="/home">Volver al inicio ' + icon('arrow-right') + '</a>' +
      '</div>' +
      '</div></section>' +
      footer();
  }

  // --- Render por ruta ----------------------------------------------------
  function render() {
    var route = currentRoute();

    if (route === '/' || route === '/home' || route === '/index.html' || route === '') {
      renderHome();
      return;
    }

    var slug = route.replace(/^\//, '');
    var tomb = null;
    for (var i = 0; i < TOMBS.length; i++) {
      if (TOMBS[i].slug === slug) { tomb = TOMBS[i]; break; }
    }

    if (tomb) {
      renderDetail(tomb);
    } else {
      renderNotFound();
    }
  }

  // --- Eventos ------------------------------------------------------------
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-nav]') : null;
    if (a) {
      e.preventDefault();
      navigate(a.getAttribute('data-nav'));
      return;
    }

    var top = e.target.closest ? e.target.closest('.back-to-top') : null;
    if (top) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', function () {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;
    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  });

  window.addEventListener('popstate', render);
  if (isFile) window.addEventListener('hashchange', render);

  // Redirección inicial de "/" a "/home"
  if (!isFile && currentRoute() === '/') {
    history.replaceState({}, '', fullHref('/home'));
  }

  render();
})();
