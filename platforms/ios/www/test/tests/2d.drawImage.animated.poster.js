_addTest(function(canvas, ctx) {

    var animgr = new Image();    
    animgr.src = 'test/images/anim-poster-gr.png';
    animgr.onload = function () {
        draw(); 
    }
    
    function draw () {
        ctx.drawImage(animgr, 0, 0);
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
    }
});
