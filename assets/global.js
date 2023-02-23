/*
 * Global Scripts
 */
//Lazy Loading for images
document.addEventListener("DOMContentLoaded", function(){
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if("IntersectionObserver" in window){
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage){
      lazyImageObserver.observe(lazyImage);
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
        var w = window.innerWidth,
        h = window.innerHeight;
        document.documentElement.style.setProperty('--h', h + 'px');

  });

  window.addEventListener("resize", onResizeFunction);
  function onResizeFunction (e){
    var w = window.innerWidth,
    h = window.innerHeight;
    document.documentElement.style.setProperty('--h', h + 'px');
  }

  $(document).ready(function() {
    $('.link').click(function(){
       $(this).toggleClass("active");
       $(this).next(".drop")toggleClass("droped");
    });
  });
});
