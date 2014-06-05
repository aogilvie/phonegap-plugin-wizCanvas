_addTest(function(canvas, ctx) {

    var rgrg = new Image();    
    rgrg.src = 'test/images/rgrg-256x256.png';
    rgrg.onload = function () {
        draw(); 
    }
    
    function draw () {
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 0, 100, 50);
        ctx.drawImage(rgrg, 140, 20, 100, 50, 0, 0, 100, 50);
        _assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);
    }
});
