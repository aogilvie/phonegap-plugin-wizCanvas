_addTest(function(canvas, ctx) {

ctx.fillStyle = '#ff0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#00f';
ctx.shadowOffsetY = 0;
ctx.shadowBlur = 555.6;
ctx.fillRect(-200, -200, 200, 400);


});
