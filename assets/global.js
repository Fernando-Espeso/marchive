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

    //
    var mySwiper = new Swiper ('.swiper-home',
    	{
        speed:30,
    		direction: 'horizontal',
    		mousewheel:
    		{
    			invert: true,
    		},
        autoplay:
        {
          delay: 100000,
        },
        loop: true,
    	});


      var swiper = new theswiper ('.swiper-related',
        {
          slidesPerView: 1,
          spaceBetween: 10,
          speed:200,
          autoplay:
          {
            delay: 100,
          },
          loop: true,
        });


  });
