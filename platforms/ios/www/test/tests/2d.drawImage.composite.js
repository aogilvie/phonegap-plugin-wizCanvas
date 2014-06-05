_addTest(function(canvas, ctx) {
    var redImage = new Image();    
    redImage.src = 'test/images/anim-gr.gif';
    redImage.onload = function () {
        draw(); 
    }
    
    function draw () {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, 0, 100, 50);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.drawImage(redImage, 0, 0);
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
    }

});
