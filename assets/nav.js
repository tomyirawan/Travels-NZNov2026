/* Center the active nav pill in the horizontally scrollable tab strip (mobile).
   Only the strip itself is scrolled, never the page, so a page can't open
   shifted sideways even if some content is wider than the screen. */
(function () {
  var nav = document.querySelector('.site-nav ul');
  if (!nav) return;
  var active = nav.querySelector('a.active');
  if (!active) return;
  requestAnimationFrame(function () {
    var navRect = nav.getBoundingClientRect();
    var actRect = active.getBoundingClientRect();
    nav.scrollLeft += (actRect.left - navRect.left) - (navRect.width - actRect.width) / 2;
  });
})();
