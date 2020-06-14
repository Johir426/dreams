$('.banner-wrap').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:true,
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

$(window).bind("load", function() {
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
        if (scroll <50) {
         $("header").removeClass("fixed");
        }else{
         $("header").addClass("fixed");
        }
});
 });

    var config = document.querySelector('.gallery');
    var mixer = mixitup(config);
 
    $(document).ready(function(){
        AOS.init({
            delay: 0, 
      duration: 1000, 
        });
 });

 $('#client-slider').owlCarousel({
    loop:true,
    margin:0,
	 speed: 1500,
    nav:false,
    autoplay:false,
    dots:true,
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

$('.blogs').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:false,
    dots:true,
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
    
$('.slick-logo').slick({
  centerMode: true,
  centerPadding: '60px',
  speed: 1000,
  autoplay: true,
  autoPlaySpeed: 500,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('html').smoothScroll(800);
new WOW().init();
AOS.init();
$('body').materialScrollTop();

});

