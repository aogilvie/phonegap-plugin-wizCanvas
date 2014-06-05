_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.arc(Infinity, 0, 50, 0, 2*Math.PI, true);
ctx.arc(-Infinity, 0, 50, 0, 2*Math.PI, true);
ctx.arc(NaN, 0, 50, 0, 2*Math.PI, true);
ctx.arc(0, Infinity, 50, 0, 2*Math.PI, true);
ctx.arc(0, -Infinity, 50, 0, 2*Math.PI, true);
ctx.arc(0, NaN, 50, 0, 2*Math.PI, true);
ctx.arc(0, 0, Infinity, 0, 2*Math.PI, true);
ctx.arc(0, 0, -Infinity, 0, 2*Math.PI, true);
ctx.arc(0, 0, NaN, 0, 2*Math.PI, true);
ctx.arc(0, 0, 50, Infinity, 2*Math.PI, true);
ctx.arc(0, 0, 50, -Infinity, 2*Math.PI, true);
ctx.arc(0, 0, 50, NaN, 2*Math.PI, true);
ctx.arc(0, 0, 50, 0, Infinity, true);
ctx.arc(0, 0, 50, 0, -Infinity, true);
ctx.arc(0, 0, 50, 0, NaN, true);
ctx.arc(Infinity, Infinity, 50, 0, 2*Math.PI, true);
ctx.arc(Infinity, Infinity, Infinity, 0, 2*Math.PI, true);
ctx.arc(Infinity, Infinity, Infinity, Infinity, 2*Math.PI, true);
ctx.arc(Infinity, Infinity, Infinity, Infinity, Infinity, true);
ctx.arc(Infinity, Infinity, Infinity, 0, Infinity, true);
ctx.arc(Infinity, Infinity, 50, Infinity, 2*Math.PI, true);
ctx.arc(Infinity, Infinity, 50, Infinity, Infinity, true);
ctx.arc(Infinity, Infinity, 50, 0, Infinity, true);
ctx.arc(Infinity, 0, Infinity, 0, 2*Math.PI, true);
ctx.arc(Infinity, 0, Infinity, Infinity, 2*Math.PI, true);
ctx.arc(Infinity, 0, Infinity, Infinity, Infinity, true);
ctx.arc(Infinity, 0, Infinity, 0, Infinity, true);
ctx.arc(Infinity, 0, 50, Infinity, 2*Math.PI, true);
ctx.arc(Infinity, 0, 50, Infinity, Infinity, true);
ctx.arc(Infinity, 0, 50, 0, Infinity, true);
ctx.arc(0, Infinity, Infinity, 0, 2*Math.PI, true);
ctx.arc(0, Infinity, Infinity, Infinity, 2*Math.PI, true);
ctx.arc(0, Infinity, Infinity, Infinity, Infinity, true);
ctx.arc(0, Infinity, Infinity, 0, Infinity, true);
ctx.arc(0, Infinity, 50, Infinity, 2*Math.PI, true);
ctx.arc(0, Infinity, 50, Infinity, Infinity, true);
ctx.arc(0, Infinity, 50, 0, Infinity, true);
ctx.arc(0, 0, Infinity, Infinity, 2*Math.PI, true);
ctx.arc(0, 0, Infinity, Infinity, Infinity, true);
ctx.arc(0, 0, Infinity, 0, Infinity, true);
ctx.arc(0, 0, 50, Infinity, Infinity, true);
ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 90,45, 0,255,0,255, "90,45", "0,255,0,255");


});
