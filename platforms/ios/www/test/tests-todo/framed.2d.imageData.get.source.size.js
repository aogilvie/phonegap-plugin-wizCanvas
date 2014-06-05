_addTest(function(canvas, ctx) {

var imgdata1 = ctx.getImageData(0, 0, 10, 10);
var imgdata2 = ctx.getImageData(0, 0, 20, 20);
_assert(imgdata2.width > imgdata1.width, "imgdata2.width > imgdata1.width");
_assert(imgdata2.height > imgdata1.height, "imgdata2.height > imgdata1.height");


});
