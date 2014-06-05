_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

var img = document.getElementById('rrgg-256x256.png');
var pattern = ctx.createPattern(img, 'no-repeat');
ctx.fillStyle = pattern;
ctx.save();
ctx.translate(0, -103);
ctx.fillRect(0, 103, 100, 50);
ctx.restore();

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 25);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});
