_addTest(function(canvas, ctx) {

// (These values are chosen to survive relatively alright through being premultiplied)
ctx.fillStyle = 'rgba(1, 3, 254, 1)';
ctx.fillRect(0, 0, 25, 25);
ctx.fillStyle = 'rgba(8, 252, 248, 0.75)';
ctx.fillRect(25, 0, 25, 25);
ctx.fillStyle = 'rgba(6, 10, 250, 0.502)';
ctx.fillRect(50, 0, 25, 25);
ctx.fillStyle = 'rgba(12, 16, 244, 0.25)';
ctx.fillRect(75, 0, 25, 25);
var img = new Image();
deferTest();
img.onload = wrapFunction(function ()
{
    ctx.drawImage(img, 0, 25);
    // (The alpha values do not really survive float->int conversion, so just
    // do approximate comparisons)
    
    _assertPixel(canvas, 12,40, 1,3,254,255, "12,40", "1,3,254,255");
    _assertPixelApprox(canvas, 37,40, 8,252,248,191, "37,40", "8,252,248,191", 2);
    _assertPixelApprox(canvas, 62,40, 6,10,250,127, "62,40", "6,10,250,127", 4);
    _assertPixelApprox(canvas, 87,40, 12,16,244,63, "87,40", "12,16,244,63", 8);
});
img.src = canvas.toDataURL();


});
