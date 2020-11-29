

$(document).ready(function(){

     // skills circular proggrass bar
     
        $(function() {
            $('.chart').easyPieChart({
                //your options goes here
            });
        });
    


   // gototop
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            document.querySelector('#gototop').style.visibility = "visible";
            $('#gototop').fadeIn('slow');
        }else{
            $('#gototop').fadeOut('slow'); 
        }
    });

    $('.gocircle').click(function(){
        $('html, body').animate({scrollTop:0}, 1000)
    });

     // Smooth scroll for the navigation menu and links with .scrollto classes
		 // Select all links with hashes
		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		  // On-page links
		  if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		  ) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			  // Only prevent default if animation is actually gonna happen
			  event.preventDefault();
			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1600, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				  return false;
				} else {
				  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				  $target.focus(); // Set focus again
				};
			  });
			}
		  }
        });



    // recent work portfolio filter
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if( value == "all"){
            $('.filter').show(800);
        }else{
            $('.filter').not('.'+value).hide(500);
            $('.filter').filter('.'+value).show(500);
        }
    });

    $('.filter-button').on('click', function() {
        $(".filter-button").removeClass('activ');
        $(this).addClass('activ');
      });


    // owl carousel top slider
      $("#topSlider").owlCarousel({
        pagination : true,
        loop:true,
        autoplay: true,
        items : 1,
    });
    // owl carousel testimonial slider
    $("#testiSlider").owlCarousel({
        loop:true,
        items : 1,
        dots:true,
        autoplay:true,
    });
    // owl carousel recent news slider
    $("#recent-news-slider").owlCarousel({
        loop:true,
        margin:15,
        // items :4,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: true,
            },
            600:{
                items:2,
            },
            992:{
                items:3,
            },
            1199:{
                items:4,
            }
        }
        // autoplay:true,
    });


     // Init AOS
     function aos_init() {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true
        });
      }
      $(window).on('load', function() {
        aos_init();
      });






});
