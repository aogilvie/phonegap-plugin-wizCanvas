_addTest(function(canvas, ctx) {

var imgdata1 = ctx.createImageData(10, 20);
var imgdata2 = ctx.createImageData(-10, 20);
var imgdata3 = ctx.createImageData(10, -20);
var imgdata4 = ctx.createImageData(-10, -20);
_assertEqual(imgdata1.data.length, imgdata2.data.length, "imgdata1.data.length", "imgdata2.data.length");
_assertEqual(imgdata2.data.length, imgdata3.data.length, "imgdata2.data.length", "imgdata3.data.length");
_assertEqual(imgdata3.data.length, imgdata4.data.length, "imgdata3.data.length", "imgdata4.data.length");


});
