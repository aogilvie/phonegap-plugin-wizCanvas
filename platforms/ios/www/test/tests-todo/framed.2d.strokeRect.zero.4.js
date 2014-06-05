_addTest(function(canvas, ctx) {

ctx.strokeStyle = '#f00';
ctx.lineWidth = 250;
ctx.lineCap = 'round';
ctx.strokeRect(100, 25, 100, 0);
_assertPixel(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");


});
