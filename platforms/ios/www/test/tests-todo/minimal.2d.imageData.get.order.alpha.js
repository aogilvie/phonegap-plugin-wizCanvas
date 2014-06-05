_addTest(function(canvas, ctx) {

ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctx.fillRect(0, 0, 100, 50);
var imgdata = ctx.getImageData(0, 0, 10, 10);
_assert(imgdata.data[3] < 200, "imgdata.data[\""+(3)+"\"] < 200");
_assert(imgdata.data[3] > 100, "imgdata.data[\""+(3)+"\"] > 100");


});
