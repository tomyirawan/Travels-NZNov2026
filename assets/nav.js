/* Center the active nav pill in the horizontally scrollable list (mobile) */
(function () {
  var nav = document.querySelector('.site-nav ul');
  if (!nav) return;
  var active = nav.querySelector('a.active');
  if (!active) return;
  // Wait a tick so layout settles, then scroll the active item into view
  requestAnimationFrame(function () {
    try {
      active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' });
    } catch (e) {
      // older browsers — fallback
      var navRect = nav.getBoundingClientRect();
      var actRect = active.getBoundingClientRect();
      nav.scrollLeft = (actRect.left - navRect.left) - (navRect.width / 2) + (actRect.width / 2);
    }
  });
})();
