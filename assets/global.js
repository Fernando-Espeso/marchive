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

    $('.button').click(function () {
  		$(this).toggleClass("active");
  		$('.button.active').each(function () {
  			if($(".show-description").hasClass( this.id )) {
  				 $("."+this.id).toggleClass("show");
  			}
        else {
        	 $("."+this.id).addClass("hide");
        }
  	  });
  	});

    var mySwiper = new Swiper ('.swiper',
    	{
        speed:0,
    		direction: 'horizontal',
    		mousewheel:
    		{
    			invert: true,
    		},
        autoplay:
        {
          delay: 100,
        },
        loop: true,
    	});

  });
