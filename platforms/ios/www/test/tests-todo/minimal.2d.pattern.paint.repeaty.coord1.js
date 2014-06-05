_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

var img = document.getElementById('red-16x16.png');
var pattern = ctx.createPattern(img, 'repeat-y');
ctx.fillStyle = pattern;
ctx.translate(48, 0);
ctx.fillRect(-48, 0, 100, 50);

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 16, 50);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 50,1, 0,255,0,255, "50,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 50,48, 0,255,0,255, "50,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});
