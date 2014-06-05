_addTest(function(canvas, ctx) {

ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 2);
var imgdata = ctx.getImageData(0, 0, 10, 10);
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
_assertSame(imgdata.data[Math.floor(imgdata.width/2*4)], 0, "imgdata.data[Math.floor(imgdata.width/2*4)]", "0");
_assertSame(imgdata.data[(imgdata.height/2)*imgdata.width*4], 255, "imgdata.data[(imgdata.height/2)*imgdata.width*4]", "255");


});
