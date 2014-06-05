_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 3;
ctx.font = '20px Arial, sans-serif';
ctx.fillText('VAVAVAVAVAVAVA', -50, 25);
ctx.fillText('ToToToToToToTo', -50, 45);
ctx.strokeText('VAVAVAVAVAVAVA', -50, 25);
ctx.strokeText('ToToToToToToTo', -50, 45);


});
