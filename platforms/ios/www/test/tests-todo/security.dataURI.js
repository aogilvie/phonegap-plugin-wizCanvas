_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var data = canvas.toDataURL();
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var img = new Image();
deferTest();
img.onload = wrapFunction(function ()
{
    ctx.drawImage(img, 0, 0);
    canvas.toDataURL(); // should be permitted
    _assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
});
img.src = data;


});
