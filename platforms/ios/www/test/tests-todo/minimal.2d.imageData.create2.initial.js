_addTest(function(canvas, ctx) {

var imgdata = ctx.createImageData(10, 20);
_assertEqual(imgdata.data.length, imgdata.width*imgdata.height*4, "imgdata.data.length", "imgdata.width*imgdata.height*4");
_assert(imgdata.width < imgdata.height, "imgdata.width < imgdata.height");
_assert(imgdata.width > 0, "imgdata.width > 0");
var isTransparentBlack = true;
for (var i = 0; i < imgdata.data.length; ++i)
    if (imgdata.data[i] !== 0)
        isTransparentBlack = false;
_assert(isTransparentBlack, "isTransparentBlack");


});
