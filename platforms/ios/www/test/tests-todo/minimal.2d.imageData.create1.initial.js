_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var imgdata1 = ctx.getImageData(0, 0, 10, 20);
var imgdata2 = ctx.createImageData(imgdata1);
_assertEqual(imgdata2.data.length, imgdata1.data.length, "imgdata2.data.length", "imgdata1.data.length");
_assertEqual(imgdata2.width, imgdata1.width, "imgdata2.width", "imgdata1.width");
_assertEqual(imgdata2.height, imgdata1.height, "imgdata2.height", "imgdata1.height");
var isTransparentBlack = true;
for (var i = 0; i < imgdata2.data.length; ++i)
    if (imgdata2.data[i] !== 0)
        isTransparentBlack = false;
_assert(isTransparentBlack, "isTransparentBlack");


});
