_addTest(function(canvas, ctx) {

ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
var imgdata = ctx.getImageData(10, 10, 10, 10);
_assert(imgdata.data[0] > 200, "imgdata.data[\""+(0)+"\"] > 200");
_assert(imgdata.data[1] > 200, "imgdata.data[\""+(1)+"\"] > 200");
_assert(imgdata.data[2] > 200, "imgdata.data[\""+(2)+"\"] > 200");
_assert(imgdata.data[3] > 100, "imgdata.data[\""+(3)+"\"] > 100");
_assert(imgdata.data[3] < 200, "imgdata.data[\""+(3)+"\"] < 200");


});
