_addTest(function(canvas, ctx) {
    var greenImage = new Image();
    greenImage.src = 'test/images/green.png';
    greenImage.onload = function () {
        draw();
    }
    
    function draw () {
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 0, 100, 50);
        ctx.drawImage(greenImage, 0, 0, 100, 50, 0, 0, 100, 50);
        _assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);
    }
});
