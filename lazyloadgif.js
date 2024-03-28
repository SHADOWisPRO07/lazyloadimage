function loadLazyLoadLibrary(callback) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.6.1/dist/lazyload.min.js';
  script.onload = callback;
  document.head.appendChild(script);
}
function initLazyLoad() {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    use_native: true
  });
}

if (window.addEventListener) {
  window.addEventListener('load', function() {
    loadLazyLoadLibrary(initLazyLoad);
  });
} else {
  window.attachEvent('onload', function() {
    loadLazyLoadLibrary(initLazyLoad);
  });
