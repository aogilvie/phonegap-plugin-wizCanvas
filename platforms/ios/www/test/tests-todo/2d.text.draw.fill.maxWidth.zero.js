_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.font = '35px Arial, sans-serif';
ctx.fillText('fail fail fail fail fail', 5, 35, 0);


});
