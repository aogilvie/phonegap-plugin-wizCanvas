_addTest(function(canvas, ctx) {

ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 2, 50);
var imgdata = ctx.getImageData(0, 0, 10, 10);
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
_assertSame(imgdata.data[Math.round(imgdata.width/2*4)], 255, "imgdata.data[Math.round(imgdata.width/2*4)]", "255");
_assertSame(imgdata.data[Math.round((imgdata.height/2)*imgdata.width*4)], 0, "imgdata.data[Math.round((imgdata.height/2)*imgdata.width*4)]", "0");


});
