_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.scale(10, 10);
ctx.translate(0, 5);
ctx.clearRect(0, -5, 10, 5);
_assertPixel(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");


});
