_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#f00';
ctx.shadowOffsetY = 50;
ctx.drawImage(document.getElementById('transparent.png'), 0, -50);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});
