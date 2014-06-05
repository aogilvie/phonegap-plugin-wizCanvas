_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(50, 0, 50, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#0f0';
ctx.drawImage(document.getElementById('redtransparent.png'), 50, -50);
ctx.shadowColor = '#f00';
ctx.drawImage(document.getElementById('redtransparent.png'), -50, -50);

_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});
