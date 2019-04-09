
$('.product-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev-prod'),
  nextArrow: $('.next-prod'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".product-slider").find('.slick-cloned a').removeAttr('data-fancybox');

var header = $('header').outerHeight();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > header) {
      $('.header-menu-wrapper').addClass('fixed-top');
    } else if ($(this).scrollTop() < header) {
      $('.header-menu-wrapper').removeClass('fixed-top');
    }
  });


     $(".navigation_list a").click(function() {

      $(".main-nav__wrapper__nav").removeClass("open_navbar");
        $("body").removeClass("vd_overlow_hidden");
        $(".burger").removeClass("open_burger");

      var header_fixed = $('.header-menu-wrapper').outerHeight();

      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top - header_fixed;
      $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;

    });

     $(".burger").click(function() {
        $(".main-nav__wrapper__nav").toggleClass("open_navbar");
        $("body").toggleClass("vd_overlow_hidden");
        $(this).toggleClass("open_burger");
     });  