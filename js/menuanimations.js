controller = new ScrollMagic();
//move question mark to left on opening sequence
var tween = TweenMax.fromTo("#raise-rotate", .5, {
    "margin-left": -($('#cssmenu h1').offset().left + 110) + 'px'
}, {
    "margin-left": "8"
});
var scene = new ScrollScene({
        triggerElement: "#desc-trigger"
    })
    .setTween(tween)
    .addTo(controller);
//make sure question mark stays on margin-left during resize
$(window).resize(function() {
    tween = TweenMax.fromTo("#raise-rotate", .5, {
        "margin-left": -($('#cssmenu h1').offset().left + 110) + 'px'
    }, {
        "margin-left": "8"
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger"
        })
        .setTween(tween)
        .addTo(controller);
});
//If menubar isn't on the second line
if ($(window).width() > 1000) {
    //make css menu shorter
    tween = TweenMax.fromTo("#cssmenu", .5, {
        "height": "40px"
    }, {
        "height": "60px"
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger"
        })
        .setTween(tween)
        .addTo(controller);
    //bring up menu bar so content is more centered
    tween = TweenMax.fromTo("#cssmenu a", .5, {
        "margin-top": "-15px"
    }, {
        "margin-top": "0px"
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger"
        })
        .setTween(tween)
        .addTo(controller);
    //bring down question mark in logo
    tween = TweenMax.fromTo("#raise-rotate", .5, {
        "margin-top": "-5px"
    }, {
        "margin-top": "-15px"
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger"
        })
        .setTween(tween)
        .addTo(controller);
    //align menu in middle
    tween = TweenMax.fromTo("#cssmenu ul", .5, {
        "vertical-align": "bottom"
    }, {
        "vertical-align": "middle"
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger"
        })
        .setTween(tween)
        .addTo(controller);
}
//move text apart 
tween = TweenMax.fromTo(".pushed-right", .5, {
    "margin-left": "8px"
}, {
    "margin-left": "40px"
});
scene = new ScrollScene({
        triggerElement: "#desc-trigger"
    })
    .setTween(tween)
    .addTo(controller);
$('.menu-item').click(function(e) {
        e.preventDefault();
        //change highlight on click
        $(".active").removeClass("active");
        $(this).addClass("active");
        //if mobile, pixel sizes are a little different
        if ($(window).width() <= 1000) {
            if ($(this).is($('.menu-item:nth-child(1)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(1)").offset().top - 318
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(2)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(2)").offset().top - 318
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(3)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(3)").offset().top - 318
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(4)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(4)").offset().top - 318
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(5)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(5)").offset().top - 318
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(6)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(6)").offset().top - 318
                }, 1000);
            }
        } else {
            if ($(this).is($('.menu-item:nth-child(1)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(1)").offset().top
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(2)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(2)").offset().top + 2
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(3)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(3)").offset().top + 2
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(4)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(4)").offset().top + 2
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(5)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(5)").offset().top + 2
                }, 1000);
            } else if ($(this).is($('.menu-item:nth-child(6)'))) {
                $('html, body').animate({
                    scrollTop: $(".window:nth-child(6)").offset().top + 2
                }, 1000);
            }
        }
    })
    //footer code

tween = TweenMax.to("#footer", .5, {
    'margin-bottom': '0px'
});
scene = new ScrollScene({
        triggerElement: "#inquiries-box"
    })
    .setTween(tween)
    .addTo(controller);
var t = 2;
$(document).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos <= $(".window:nth-child(2)").offset().top) {
        $(".active").removeClass("active");
        $('.menu-item:nth-child(1)').addClass("active");
    } else if ((scrollPos <= $(".window:nth-child(3)").offset().top) && (scrollPos >= $(".window:nth-child(2)").offset().top)) {
        $(".active").removeClass("active");
        $('.menu-item:nth-child(2)').addClass("active");
    } else if ((scrollPos <= $(".window:nth-child(4)").offset().top) && (scrollPos >= $(".window:nth-child(3)").offset().top)) {
        $(".active").removeClass("active");
        $('.menu-item:nth-child(3)').addClass("active");
    } else if ((scrollPos <= $(".window:nth-child(5)").offset().top) && (scrollPos >= $(".window:nth-child(4)").offset().top)) {
        $(".active").removeClass("active");
        $('.menu-item:nth-child(4)').addClass("active");
    } else if ((scrollPos <= $(".window:nth-child(6)").offset().top - 5) && (scrollPos >= $(".window:nth-child(5)").offset().top)) {
        $(".active").removeClass("active");
        $('.menu-item:nth-child(5)').addClass("active");
    } else if (scrollPos >= $(".window:nth-child(6)").offset().top - 5) {
        $(".active").removeClass("active");
        $('.menu-item:nth-child(6)').addClass("active");
    }
    if (scrollPos > t) {
        $('#cssmenu').css({
            "moz-box-shadow": "0px 2px 7px -1px rgba(0,0,0,0.75)",
            "box-shadow": "0px 2px 7px -1px rgba(0,0,0,0.75)",
            "webkit-box-shadow": "0px 2px 7px -1px rgba(0,0,0,0.75)"
        });
        $('#cssmenu').css({
            "background-color": "rgba(30,30,30,.99)"
        });
    } else {
        $('#cssmenu').css({
            "moz-box-shadow": "none",
            "box-shadow": "none",
            "webkit-box-shadow": "none"
        });
        $('#cssmenu').css({
            "background-color": "rgba(30,30,30,0.0)"
        });
    }
});