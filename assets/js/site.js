// Tab switching for the homepage. Shows the section that matches the URL hash, defaults to About.
(function () {
  document.documentElement.classList.add('js');

  var views = document.querySelectorAll('[data-view]');
  var links = document.querySelectorAll('nav.tabs a[data-tab]');

  function show() {
    var name = (location.hash || '#about').slice(1);
    if (!document.querySelector('[data-view="' + name + '"]')) {
      name = 'about';
    }
    views.forEach(function (view) {
      view.classList.toggle('active', view.dataset.view === name);
    });
    links.forEach(function (link) {
      link.setAttribute('aria-current', link.dataset.tab === name ? 'page' : 'false');
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', show);
  show();
})();
