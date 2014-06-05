_addTest(function(canvas, ctx) {

ctx.fillStyle = '#ff0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#00f';
ctx.shadowOffsetY = 25;
for (var x = 0; x < 100; ++x) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, 0, 1, 50);
    ctx.clip();
    ctx.shadowBlur = x;
    ctx.fillRect(-200, -200, 500, 200);
    ctx.restore();
}


});
