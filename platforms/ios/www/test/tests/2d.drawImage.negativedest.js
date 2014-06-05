_addTest(function(canvas, ctx) {

    var ggrr = new Image();    
    ggrr.src = 'test/images/ggrr-256x256.png';
    ggrr.onload = function () {
        draw(); 
    }
    
    function draw () {
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 0, 100, 50);
        ctx.drawImage(ggrr, 100, 78, 50, 50, 0, 50, 50, -50);
        ctx.drawImage(ggrr, 100, 128, 50, -50, 100, 50, -50, -50);
        _assertPixelApprox(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 51,1, 0,255,0,255, "51,1", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 51,48, 0,255,0,255, "51,48", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255", 2);
    }
});
