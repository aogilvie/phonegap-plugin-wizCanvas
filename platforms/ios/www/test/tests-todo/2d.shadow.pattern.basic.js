_addTest(function(canvas, ctx) {

var pattern = ctx.createPattern(document.getElementById('red.png'), 'repeat');
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#0f0';
ctx.shadowOffsetY = 50;
ctx.fillStyle = pattern;
ctx.fillRect(0, -50, 100, 50);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});
