_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.save();
ctx.translate(50, 0);
ctx.scale(0, 1);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.restore();

ctx.save();
ctx.translate(0, 25);
ctx.scale(1, 0);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.restore();

// Firefox has a bug where it renders the canvas as empty and toDataURL throws an exception
canvas.toDataURL();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});
