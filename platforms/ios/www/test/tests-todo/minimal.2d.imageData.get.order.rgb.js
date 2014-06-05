_addTest(function(canvas, ctx) {

ctx.fillStyle = '#48c';
ctx.fillRect(0, 0, 100, 50);
var imgdata = ctx.getImageData(0, 0, 10, 10);
_assertSame(imgdata.data[0], 0x44, "imgdata.data[\""+(0)+"\"]", "0x44");
_assertSame(imgdata.data[1], 0x88, "imgdata.data[\""+(1)+"\"]", "0x88");
_assertSame(imgdata.data[2], 0xCC, "imgdata.data[\""+(2)+"\"]", "0xCC");
_assertSame(imgdata.data[3], 255, "imgdata.data[\""+(3)+"\"]", "255");
_assertSame(imgdata.data[4], 0x44, "imgdata.data[\""+(4)+"\"]", "0x44");
_assertSame(imgdata.data[5], 0x88, "imgdata.data[\""+(5)+"\"]", "0x88");
_assertSame(imgdata.data[6], 0xCC, "imgdata.data[\""+(6)+"\"]", "0xCC");
_assertSame(imgdata.data[7], 255, "imgdata.data[\""+(7)+"\"]", "255");


});
