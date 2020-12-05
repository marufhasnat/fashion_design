// ONSCROLL COLOR CHANGE NAVBAR START
$(window).on("scroll", function() {
	if($(window).scrollTop() > 0) {
	  	$("#header").addClass("scrollTop");
	} else {
	  	//remove the background property so it comes transparent again (defined in your css)
	 	$("#header").removeClass("scrollTop");
	}
});
// ONSCROLL COLOR CHANGE NAVBAR CLOSE


// TABLET & MOBILE VIEW NAVBAR START
function openNav() {
  document.getElementById("myNav").style.height = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
};
// TABLET & MOBILE VIEW NAVBAR CLOSE


// STOP VIDEO START
jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");
    jQuery(".close , #videoModal").click(function() {
    // changes the iframe src to prevent playback or stop the video playback in our case
    $('.youtube-iframe').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
});
// STOP VIDEO CLOSE

//3D Hover
(function ($) {
      'use strict';

      jQuery(document).ready(function () {
         

     $(".3d-hover").hover3d({
           selector:".hover-effect-3d",
           sensitivity:5


     });



      });

})(jQuery);

// STROKE ANIMATION START
TweenMax.to("#targetLine", 0.2, {strokeDashoffset:"-=12", repeat:-1, ease:Linear.easeNone});
// STROKE ANIMATION CLOSE


$(function () {
    $('button.doneSuccess').on('click',function () {
        $('div.mainRowSuccess').addClass('d-none'); 
        $('div.messageSuccess').addClass('d-block'); 
    });

    $('button.closeSuccess').on('click',function () {
        $('div.mainRowSuccess').removeClass('d-none'); 
        $('div.messageSuccess').removeClass('d-block'); 
    });


    $('button.doneRequest').on('click',function () {
        $('div.mainRowRequest').addClass('d-none'); 
        $('div.messageRequest').addClass('d-block'); 
    });

    $('button.closeRequest').on('click',function () {
        $('div.mainRowRequest').removeClass('d-none'); 
        $('div.messageRequest').removeClass('d-block'); 
    });
});


$('.feature-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.clients-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function(){
    $(".card_1").hover(function(){
        $(".card_2").toggleClass("blur");
        $(".card_3").toggleClass("blur");
    });

    $(".card_2").hover(function(){
        $(".card_1").toggleClass("blur");
        $(".card_3").toggleClass("blur");
    });

    $(".card_3").hover(function(){
        $(".card_1").toggleClass("blur");
        $(".card_2").toggleClass("blur");
    });
});

// jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });