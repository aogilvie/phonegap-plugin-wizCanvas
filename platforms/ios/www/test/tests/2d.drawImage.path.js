_addTest(function(canvas, ctx) {
    var redImage = new Image();
    redImage.src = 'test/images/red.png';
    redImage.onload = function () {
        draw();
    }
    
    function draw () {
        ctx.fillStyle = '#0f0';
        ctx.rect(0, 0, 100, 50);
        ctx.drawImage(redImage, 0, 0);
        ctx.fill();
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
    }

});
