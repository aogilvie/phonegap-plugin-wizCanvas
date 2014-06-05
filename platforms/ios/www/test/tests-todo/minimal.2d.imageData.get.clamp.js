_addTest(function(canvas, ctx) {

ctx.fillStyle = 'rgb(-100, -200, -300)';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = 'rgb(256, 300, 400)';
ctx.fillRect(20, 10, 60, 10);
var imgdata1 = ctx.getImageData(10, 5, 1, 1);
_assertSame(imgdata1.data[0], 0, "imgdata1.data[\""+(0)+"\"]", "0");
_assertSame(imgdata1.data[1], 0, "imgdata1.data[\""+(1)+"\"]", "0");
_assertSame(imgdata1.data[2], 0, "imgdata1.data[\""+(2)+"\"]", "0");
var imgdata2 = ctx.getImageData(30, 15, 1, 1);
_assertSame(imgdata2.data[0], 255, "imgdata2.data[\""+(0)+"\"]", "255");
_assertSame(imgdata2.data[1], 255, "imgdata2.data[\""+(1)+"\"]", "255");
_assertSame(imgdata2.data[2], 255, "imgdata2.data[\""+(2)+"\"]", "255");


});
