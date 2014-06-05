_addTest(function(canvas, ctx) {

_assertDifferent(window.ImageData, undefined, "window.ImageData", "undefined");
_assertDifferent(window.CanvasPixelArray, undefined, "window.CanvasPixelArray", "undefined");
window.ImageData.prototype.thisImplementsImageData = true;
window.CanvasPixelArray.prototype.thisImplementsCanvasPixelArray = true;
var imgdata = ctx.createImageData(ctx.createImageData(1, 1));
_assert(imgdata.thisImplementsImageData, "imgdata.thisImplementsImageData");
_assert(imgdata.data.thisImplementsCanvasPixelArray, "imgdata.data.thisImplementsCanvasPixelArray");


});
