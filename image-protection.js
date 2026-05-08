/**
 * Image protection — three layers of defense against casual saving.
 *
 * Layer 1: Block right-click context menu, drag-start, and Ctrl+S / Ctrl+P / Ctrl+U / PrintScreen.
 * Layer 2: CSS-level user-select/-user-drag/touch-callout (set in portfolio.css).
 * Layer 3: Wrap every <img> in a <div> that displays the image as a CSS background.
 *          The original <img> is kept inside (opacity:0) so React reconciliation, alt text,
 *          and SEO still work, but the visible pixels come from background-image.
 *          Network panel still exposes the source — this is a fundamental browser limit.
 */
(function () {
  'use strict';

  // ============ Layer 1: gesture / shortcut blocking ============
  document.addEventListener('contextmenu', function (e) {
    var t = e.target;
    if (!t) return;
    if (t.tagName === 'IMG' || (t.closest && t.closest('.kl-img-wrap'))) {
      e.preventDefault();
    }
  }, { capture: true });

  document.addEventListener('dragstart', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'IMG' || (t.closest && t.closest('.kl-img-wrap')))) {
      e.preventDefault();
    }
  }, { capture: true });

  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if ((e.ctrlKey || e.metaKey) && (k === 's' || k === 'p' || k === 'u')) {
      e.preventDefault();
    }
    // Best-effort PrintScreen blank — many OSes capture before JS sees it
    if (k === 'printscreen' || e.keyCode === 44) {
      try { navigator.clipboard && navigator.clipboard.writeText(''); } catch (_) {}
    }
  });

  // ============ Layer 3: <img> -> background-image wrapper ============
  function applyWrap(img) {
    if (!img || img.dataset.klProtected === '1') return;
    var src = img.currentSrc || img.src;
    if (!src) return;

    var parent = img.parentNode;
    if (!parent) return;
    // Skip if already inside a wrap (e.g., re-entry)
    if (parent.classList && parent.classList.contains('kl-img-wrap')) {
      parent.style.backgroundImage = 'url("' + src + '")';
      img.dataset.klProtected = '1';
      return;
    }

    var wrap = document.createElement('div');
    wrap.className = 'kl-img-wrap ' + (img.className || '');
    wrap.setAttribute('role', 'img');
    if (img.alt) wrap.setAttribute('aria-label', img.alt);

    // Translate object-fit / object-position to background equivalents
    var objFit = img.style.objectFit || '';
    var objPos = img.style.objectPosition || '';
    var styleParts = [
      'background-image:url("' + src + '")',
      'background-size:' + (objFit === 'cover' ? 'cover' : 'contain'),
      'background-position:' + (objPos || 'center'),
      'background-repeat:no-repeat'
    ];

    // Preserve sizing: width 100% by default, fixed aspect ratio from natural dims
    if (img.naturalWidth && img.naturalHeight) {
      styleParts.push('aspect-ratio:' + img.naturalWidth + '/' + img.naturalHeight);
    }
    // Carry over any inline width/height from the img tag
    if (img.style.width) styleParts.push('width:' + img.style.width);
    else styleParts.push('width:100%');
    if (img.style.height) styleParts.push('height:' + img.style.height);

    wrap.style.cssText = styleParts.join(';');
    wrap.dataset.klProtected = '1';

    // Mark img and place it inside the wrap so React can still update its src
    img.dataset.klProtected = '1';
    img.setAttribute('draggable', 'false');

    parent.insertBefore(wrap, img);
    wrap.appendChild(img);
  }

  function protect(img) {
    if (!img || img.dataset.klProtected === '1') return;
    if (img.complete && img.naturalWidth) applyWrap(img);
    else img.addEventListener('load', function () { applyWrap(img); }, { once: true });
  }

  function protectAll(root) {
    (root || document).querySelectorAll('img:not([data-kl-protected])').forEach(protect);
  }

  if (document.readyState !== 'loading') protectAll();
  else document.addEventListener('DOMContentLoaded', function () { protectAll(); });

  // Watch dynamic React renders for new images and src changes
  var mo = new MutationObserver(function (muts) {
    muts.forEach(function (m) {
      if (m.type === 'childList') {
        m.addedNodes.forEach(function (n) {
          if (!n || n.nodeType !== 1) return;
          if (n.tagName === 'IMG') protect(n);
          else if (n.querySelectorAll) protectAll(n);
        });
      } else if (m.type === 'attributes' && m.attributeName === 'src' && m.target.tagName === 'IMG') {
        // src changed (e.g. theme/lang toggle) — refresh the wrap's background
        var img = m.target;
        var wrap = img.parentElement;
        if (wrap && wrap.classList && wrap.classList.contains('kl-img-wrap')) {
          wrap.style.backgroundImage = 'url("' + (img.currentSrc || img.src) + '")';
        } else {
          // Wrap missing (newly added img) — re-protect
          img.dataset.klProtected = '';
          protect(img);
        }
      }
    });
  });
  mo.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src']
  });
})();
