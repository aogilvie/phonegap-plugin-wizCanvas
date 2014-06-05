_addTest(function(canvas, ctx) {

deferTest();
setTimeout(function () {
    var pattern = ctx.createPattern(document.getElementById('anim-gr.gif'), 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 50, 50);
    setTimeout(wrapFunction(function () {
        ctx.fillRect(50, 0, 50, 50);
        _assertPixelApprox(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255", 2);
    }), 250);
}, 250);


});
