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

    $('.switch-view').click(function(){
      $(this).toggleClass("active");
      $(".product").toggleClass("dropped");
      $("#products").toggleClass("dropped");
    });

    $('#description').click(function(){
      $(this).toggleClass("active");
  		$("."+this.id).toggleClass("show");
    });

    $('#size').click(function(){
      $(this).toggleClass("active");
  		$("."+this.id).toggleClass("show");
    });

    $('#condition').click(function(){
      $(this).toggleClass("active");
  		$("."+this.id).toggleClass("show");
    });
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#header').outerHeight();
    $(window).scroll(function(event){
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#header').removeClass('nav-down').addClass('nav-up');
        }
        else {
            // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
          }
        }

        lastScrollTop = st;
    };
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
        delay: 200,

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
