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
      animationSpeed: 200,
      autoPlay: true,
      autoPlaySpeed: 3000,
      pauseOnHover: true,
      clone:true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint:480,
          visibleItems: 1
        }, 
        landscape: {
          changePoint:640,
          visibleItems: 2
        },
        tablet: {
          changePoint:768,
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
