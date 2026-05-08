/**
 * Lightbox — click any uploaded image to view it full-screen.
 *
 * Pairs with image-protection.js: that script wraps every <img> in a
 * `.kl-img-wrap` div whose background-image carries the source URL.
 * This script listens for clicks on those wraps and opens an overlay.
 *
 * Filters to images whose URL contains `uploads/` so navigation icons,
 * avatars, and decorative SVGs are excluded.
 */
(function () {
  'use strict';

  // ── Inject CSS once ──────────────────────────────────────────────
  var css = [
    '.kl-img-wrap[data-kl-protected="1"]{cursor:zoom-in;transition:opacity 180ms ease}',
    '.kl-img-wrap[data-kl-protected="1"]:hover{opacity:.92}',
    '.kl-lightbox-overlay{position:fixed;inset:0;z-index:9999;',
      'background:rgba(8,8,12,.94);display:flex;flex-direction:column;',
      'align-items:center;justify-content:center;padding:48px 24px 32px;',
      'opacity:0;visibility:hidden;cursor:zoom-out;',
      'transition:opacity 220ms ease,visibility 0s 220ms}',
    '.kl-lightbox-overlay.open{opacity:1;visibility:visible;',
      'transition:opacity 220ms ease,visibility 0s 0s}',
    '.kl-lightbox-image{flex:1 1 auto;width:100%;max-width:1600px;',
      'background-position:center;background-repeat:no-repeat;background-size:contain;',
      'cursor:default;user-select:none;-webkit-user-select:none;',
      '-webkit-user-drag:none;-webkit-touch-callout:none}',
    '.kl-lightbox-caption{flex:0 0 auto;margin-top:18px;color:rgba(255,255,255,.82);',
      'font-size:13px;max-width:760px;text-align:center;line-height:1.55;',
      'letter-spacing:.01em}',
    '.kl-lightbox-close{position:absolute;top:18px;right:18px;width:44px;height:44px;',
      'background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);',
      'color:#fff;font-size:24px;line-height:1;border-radius:50%;cursor:pointer;',
      'display:flex;align-items:center;justify-content:center;padding:0;',
      'transition:background 160ms ease,transform 160ms ease}',
    '.kl-lightbox-close:hover{background:rgba(255,255,255,.18);transform:scale(1.05)}',
    '.kl-lightbox-hint{position:absolute;bottom:16px;left:0;right:0;text-align:center;',
      'color:rgba(255,255,255,.45);font-size:11px;letter-spacing:.12em;text-transform:uppercase}',
    'body.kl-lightbox-open{overflow:hidden}'
  ].join('');
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Build overlay lazily on first open ───────────────────────────
  var overlay, imgDiv, capDiv;
  function ensureOverlay() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'kl-lightbox-overlay';
    overlay.innerHTML =
      '<button class="kl-lightbox-close" aria-label="Close">×</button>' +
      '<div class="kl-lightbox-image" role="img"></div>' +
      '<div class="kl-lightbox-caption"></div>' +
      '<div class="kl-lightbox-hint">Click anywhere or press Esc to close</div>';
    imgDiv = overlay.querySelector('.kl-lightbox-image');
    capDiv = overlay.querySelector('.kl-lightbox-caption');
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (e) {
      // Don't close when clicking the image itself — let the user inspect
      if (e.target === imgDiv) return;
      close();
    });
  }

  function open(url, caption) {
    ensureOverlay();
    imgDiv.style.backgroundImage = 'url("' + url + '")';
    imgDiv.setAttribute('aria-label', caption || '');
    capDiv.textContent = caption || '';
    capDiv.style.display = caption ? '' : 'none';
    // Two-frame trick to ensure transition fires
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { overlay.classList.add('open'); });
    });
    document.body.classList.add('kl-lightbox-open');
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.classList.remove('kl-lightbox-open');
  }

  // ── Click-to-open on protected image wraps ───────────────────────
  document.addEventListener('click', function (e) {
    if (overlay && overlay.classList.contains('open')) return; // already open
    var wrap = e.target.closest && e.target.closest('.kl-img-wrap');
    if (!wrap) return;
    var bg = wrap.style.backgroundImage;
    var m = bg && bg.match(/url\(["']?([^"')]+)["']?\)/);
    if (!m) return;
    var url = m[1];
    if (url.indexOf('/uploads/') === -1 && url.indexOf('uploads/') !== 0) return;
    open(url, wrap.getAttribute('aria-label') || '');
  });

  // Esc key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) close();
  });
})();
