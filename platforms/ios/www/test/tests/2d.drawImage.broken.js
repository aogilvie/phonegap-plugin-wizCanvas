_addTest(function(canvas, ctx) {

    var broken = new Image();    
    broken.src = 'test/images/broken.png';
    broken.onload = function () {
        draw(); 
    }
    
    function draw() {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, 0, 100, 50);
        var img = broken;
        _assertSame(img.complete, false, "img.complete", "false");
        ctx.drawImage(img, 0, 0);
    }

});
