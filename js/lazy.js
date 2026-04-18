(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      if (el.tagName === 'IMG' && el.dataset.src) {
        el.src = el.dataset.src;
        delete el.dataset.src;
      }
      if (el.tagName === 'VIDEO' && el.dataset.src) {
        el.src = el.dataset.src;
        el.load();
        delete el.dataset.src;
      }
      el.classList.remove('lazy');
      observer.unobserve(el);
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('img.lazy, video.lazy').forEach(function (el) {
    observer.observe(el);
  });
})();
