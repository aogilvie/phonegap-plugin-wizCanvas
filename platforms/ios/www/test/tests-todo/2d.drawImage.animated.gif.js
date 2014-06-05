_addTest(function(canvas, ctx) {
    deferTest();

    var animgr = new Image();    
    animgr.src = 'test/images/anim-gr.gif';
    animgr.onload = function () {
        draw(); 
    }
    
    function draw () {
        setTimeout(wrapFunction(function () {
            ctx.drawImage(animgr, 0, 0);
            _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
        }), 500);
    }
});
