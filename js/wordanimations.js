var controller = new ScrollMagic();
//move headers into place
if($(window).width()>=750){
    tween = TweenMax.fromTo("#products-head", .5, {
        "margin-left": ($("#products").width()/2) - ($('#products-head').width()/2),
        'font-size': '60px',
        'text-align': 'center'
    }, {
        "margin-left": "70px",
        'font-size': "30px",
        'text-align':'left'
    });
    $('#wdps').css('margin-left',$('#clients').width()/2-($('#wdps').width()/2))
    scene = new ScrollScene({
            triggerElement: "#products-trigger",
            duration: 350
        })
        .setTween(tween)
        .addTo(controller);
    $('#testimonials-head').css('margin-left',$('#clients').width()/2-($('#testimonials-head').width()/2))

    tween = TweenMax.fromTo("#wedo-head", .5, {
        "margin-left": ($("#desc").width()/2) - ($('#wedo-head').width()/2),
        'font-size': '60px',
        'text-align': 'center'
    }, {
        "margin-left": "23px",
        'font-size': "30px",
        'text-align':'left'
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger",
            duration: 350
        })
        .setTween(tween)
        .addTo(controller);

    tween = TweenMax.fromTo("#team-head", .5, {
        "margin-left": ($("#team").width()/2) - ($('#team-head').width()/2),
        'font-size': '60px',
        'text-align': 'center'
    }, {
        "margin-left": "70px",
        'font-size': "30px",
        'text-align':'left'
    });
    scene = new ScrollScene({
            triggerElement: "#team-trigger",
            duration: 350
        })
        .setTween(tween)
        .addTo(controller);

    tween = TweenMax.fromTo("#clients-head", .5, {
        "margin-left": ($("#clients").width()/2) - ($('#clients-head').width()/2),
        'font-size': '60px',
        'text-align': 'center'
    }, {
        "margin-left": "70px",
        'font-size': "30px",
        'text-align':'left'
    });
    scene = new ScrollScene({
            triggerElement: "#clients-trigger",
            duration: 350
        })
        .setTween(tween)
        .addTo(controller);
}
//set up responsive headlines
jQuery(".responsive_headline").fitText(1.0, {
    minFontSize: '35px',
    maxFontSize: '1000px'
});