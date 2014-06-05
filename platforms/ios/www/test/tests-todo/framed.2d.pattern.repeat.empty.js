_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var img = document.getElementById('green-1x1.png');
var pattern = ctx.createPattern(img, "");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 200, 50);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});
