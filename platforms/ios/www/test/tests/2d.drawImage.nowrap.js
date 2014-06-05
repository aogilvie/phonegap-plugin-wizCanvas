_addTest(function(canvas, ctx) {
    var transparentImage = new Image();    
    transparentImage.src = 'test/images/redtransparent.png';
    transparentImage.onload = function () {
        draw(); 
    }
    
    function draw () {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, 0, 100, 50);
        ctx.drawImage(transparentImage, -1950, 0, 2000, 50);
        _assertPixelApprox(canvas, 45,25, 0,255,0,255, "45,25", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 55,25, 0,255,0,255, "55,25", "0,255,0,255", 2);
    }

});
