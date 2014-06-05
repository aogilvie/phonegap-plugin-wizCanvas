_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var img = new Image();
img.src = 'test/images/red.png';
img.onload = function () {
    ctx.globalAlpha = 0;
    ctx.drawImage(this, 0, 0);
    _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
};

});
