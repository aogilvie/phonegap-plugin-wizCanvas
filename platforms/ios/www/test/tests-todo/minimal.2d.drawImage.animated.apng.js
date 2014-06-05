_addTest(function(canvas, ctx) {

deferTest();
setTimeout(wrapFunction(function () {
    ctx.drawImage(document.getElementById('anim-gr.png'), 0, 0);
    _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
}), 500);


});
