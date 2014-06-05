_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.save();
ctx.beginPath();
ctx.moveTo(49, -50);
ctx.lineTo(201, -50);
ctx.rotate(Math.PI/4);
ctx.scale(1, 283);
ctx.strokeStyle = '#0f0';
ctx.stroke();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.translate(-150, 0);
ctx.moveTo(49, -50);
ctx.lineTo(199, -50);
ctx.rotate(Math.PI/4);
ctx.scale(1, 142);
ctx.strokeStyle = '#f00';
ctx.stroke();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.translate(-150, 0);
ctx.moveTo(49, -50);
ctx.lineTo(199, -50);
ctx.rotate(Math.PI/4);
ctx.scale(1, 142);
ctx.strokeStyle = '#f00';
ctx.stroke();
ctx.restore();

_assertPixel(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255");
_assertPixel(canvas, 50,0, 0,255,0,255, "50,0", "0,255,0,255");
_assertPixel(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255");
_assertPixel(canvas, 0,25, 0,255,0,255, "0,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 99,25, 0,255,0,255, "99,25", "0,255,0,255");
_assertPixel(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255");
_assertPixel(canvas, 50,49, 0,255,0,255, "50,49", "0,255,0,255");
_assertPixel(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255");


});
