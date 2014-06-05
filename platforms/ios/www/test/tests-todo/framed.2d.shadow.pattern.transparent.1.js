_addTest(function(canvas, ctx) {

var pattern = ctx.createPattern(document.getElementById('transparent.png'), 'repeat');
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#f00';
ctx.shadowOffsetY = 50;
ctx.fillStyle = pattern;
ctx.fillRect(0, -50, 100, 50);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});
