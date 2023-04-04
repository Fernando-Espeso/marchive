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
  });

  document.addEventListener('DOMContentLoaded', function(){
        var w = window.innerWidth,
        h = window.innerHeight;
        document.documentElement.style.setProperty('--h', h + 'px');

        m = document.getElementById("header").offsetHeight;
        document.documentElement.style.setProperty('--m', m + 'px');

        fc = document.getElementById("fc").offsetHeight;
        document.documentElement.style.setProperty('--fc', fc + 'px');

  });

  window.addEventListener("resize", onResizeFunction);
  function onResizeFunction (e){
        var w = window.innerWidth,
        h = window.innerHeight;
        document.documentElement.style.setProperty('--h', h + 'px');

        m = document.getElementById("header").offsetHeight;
        document.documentElement.style.setProperty('--m', m + 'px');
  }

  $(document).ready(function() {
    $('.link').click(function(){
       $(this).toggleClass("active");
       $(this).next(".dropdown").toggleClass("dropped");
    });

    $('.menu-open').click(function(){
       $(this).toggleClass("active");
       $(".drop").toggle();
       
    });

    $('.switch-view').click(function(){
      $(this).toggleClass("active");
      $(".product").toggleClass("dropped");
      $("#products").toggleClass("dropped");
    });

    $('#description').click(function(){
      $(".nav-info div").removeClass("active");
      $(".show-description").removeClass("show");
  		$("."+this.id).toggleClass("show");
    });

    $('#size').click(function(){
      $(".nav-info div").removeClass("active");
      $(this).toggleClass("active");
      $(".show-description").removeClass("show");
  		$("."+this.id).toggleClass("show");
    });

    $('#condition').click(function(){
      $(".nav-info div").removeClass("active");
      $(this).toggleClass("active");
      $(".show-description").removeClass("show");
  		$("."+this.id).toggleClass("show");
    });
    var mySwiper = new Swiper ('.home',
    	{
        speed:0,
        slidesPerView: 1,
    		direction: 'horizontal',
    		mousewheel:
    		{
    		invert: true,
    		},
        autoplay:
        {
        delay: 400,
        },
        loop: true,
    	});
    var mySwiper = new Swiper ('.relatedd',
      {
        slidesPerView: 1,
        spaceBetween: 10,
        speed:0,
      //   autoplay:
      // {
      //   delay: 0,
      // },
        loop: true,
      });
  });
