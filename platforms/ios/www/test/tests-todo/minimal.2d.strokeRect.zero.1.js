_addTest(function(canvas, ctx) {

ctx.strokeStyle = '#f00';
ctx.lineWidth = 250;
ctx.strokeRect(50, 25, 0, 0);
_assertPixel(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");


});
