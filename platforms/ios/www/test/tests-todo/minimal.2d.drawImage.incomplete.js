_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var img = new Image();
_assertSame(img.complete, false, "img.complete", "false");
ctx.drawImage(img, 0, 0);


});
