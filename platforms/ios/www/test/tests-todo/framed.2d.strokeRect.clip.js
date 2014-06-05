_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.beginPath();
ctx.rect(0, 0, 16, 16);
ctx.clip();

ctx.strokeStyle = '#f00';
ctx.lineWidth = 50;
ctx.strokeRect(0, 0, 100, 50);

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 16, 16);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});
