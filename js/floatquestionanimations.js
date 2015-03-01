//
if ($(window).width() > 1000) {
    // tween = TweenMax.fromTo(".thin-question", .5, {
    //     'opacity': '1.0'
    // }, {
    //     'opacity': '.5'
    // });
    // scene = new ScrollScene({
    //         triggerElement: "#desce-trigger",
    //         duration: 150
    //     })
    //     .setTween(tween)
    //     .addTo(controller);
    // tween = TweenMax.fromTo(".thin-question", .5, {
    //     'z-index': '2'
    // }, {
    //     'z-index': '-3'
    // });
    // scene = new ScrollScene({
    //         triggerElement: "#desce-trigger",
    //         duration: 150
    //     })
    //     .setTween(tween)
    //     .addTo(controller);
    tween = TweenMax.fromTo(".thin-question", .5, {
        'opacity': '1.0'
    }, {
        'opacity': '0.0'
    });
    scene = new ScrollScene({
            triggerElement: "#desc-trigger",
            duration: 500
        })
        .setTween(tween);
    //     .addTo(controller)
    // tween = TweenMax.fromTo(".thin-question img", .5, {
    //     'width': '1%'
    // }, {
    //     "width": "30%"
    // });
    // scene = new ScrollScene({
    //         triggerElement: "#desce-trigger",
    //         duration: 150
    //     })
    //     .setTween(tween)
    //     .addTo(controller);

    // tween = TweenMax.fromTo(".thin-question", .5, {
    //     'margin': '80px 0 0 0'
    // }, {
    //     "margin": "30px 0 0 -12.5%"
    // });
    // scene = new ScrollScene({
    //         triggerElement: "#desce-trigger",
    //         duration: 150
    //     })
    //     .setTween(tween)
    //     .addTo(controller);

    // tween = TweenMax.fromTo(".thin-question img", .5, {
    //     'background-color': "rgb(235,235,235)"
    // }, {
    //     "background-color": "transparent"
    // });
    // scene = new ScrollScene({
    //         triggerElement: "#desce-trigger",
    //         duration: 150
    //     })
    //     .setTween(tween)
    //     .addTo(controller);
    // tween = TweenMax.fromTo(".thin-question img", .5, {
    //     'height': '500px'
    // }, {
    //     "height": "900px"
    // });
    // scene = new ScrollScene({
    //         triggerElement: "#desce-trigger",
    //         duration: 150
    //     })
    //     .setTween(tween)
    //     .addTo(controller);
}