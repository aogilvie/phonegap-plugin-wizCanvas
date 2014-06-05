_addTest(function(canvas, ctx) {

    var rgrg = new Image();    
    rgrg.src = 'test/images/rgrg-256x256.png';
    rgrg.onload = function () {
        draw(); 
    }
    
    function draw () {
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 0, 100, 50);
        ctx.drawImage(rgrg, 0, 0, 256, 256, 0, 0, 100, 50);
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, 0, 51, 26);
        ctx.fillRect(49, 24, 51, 26);
        _assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 20,20, 0,255,0,255, "20,20", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 80,20, 0,255,0,255, "80,20", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 20,30, 0,255,0,255, "20,30", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 80,30, 0,255,0,255, "80,30", "0,255,0,255", 2);
    }
});
