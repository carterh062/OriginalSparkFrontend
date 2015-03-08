$('.testimonials').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    dots: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
    ]
});
$(window).load(function(){
  $("#clients-carousel ul").flexisel({
      visibleItems: 4,
      animationSpeed: 12000,
      autoPlay: true,
      autoPlaySpeed: 0,
      pauseOnHover: true,
      clone:true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint:500,
          visibleItems: 1
        }, 
        landscape: {
          changePoint:940,
          visibleItems: 2
        },
        tablet: {
          changePoint:1378,
          visibleItems: 3
        }
      }
    });
});
$('.window').windows({
snapping: false,
snapInterval: 1100,
onScroll: function(scrollPos) {
},
onSnapComplete: function($el) {
    // after window ($el) snaps into place
},
onWindowEnter: function($el) {
}
})


// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
$('.white-popup').scroll(function(){
  $(this).find('.mfp-close').css('top', $(this).scrollTop()+'px');
})

var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
if (isSafari) {
  $('.thin-question').css('display','none');
  $('#cssmenu').css({
                            "background-color": "rgba(30,30,30,.99)"
                        });
  $('#cssmenu').css({
                "moz-box-shadow": "0px 2px 7px -1px rgba(0,0,0,0.75)",
                "box-shadow": "0px 2px 7px -1px rgba(0,0,0,0.75)",
                "webkit-box-shadow": "0px 2px 7px -1px rgba(0,0,0,0.75)"
            });
}




