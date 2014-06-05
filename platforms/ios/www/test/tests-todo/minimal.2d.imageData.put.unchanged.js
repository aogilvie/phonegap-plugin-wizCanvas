_addTest(function(canvas, ctx) {

var i = 0;
for (var y = 0; y < 16; ++y) {
    for (var x = 0; x < 16; ++x, ++i) {
        ctx.fillStyle = 'rgba(' + i + ',' + (Math.floor(i*1.5) % 256) + ',' + (Math.floor(i*23.3) % 256) + ',' + (i/256) + ')';
        ctx.fillRect(x, y, 1, 1);
    }
}
var imgdata1 = ctx.getImageData(0.1, 0.2, 15.8, 15.9);
var olddata = [];
for (var i = 0; i < imgdata1.data.length; ++i)
    olddata[i] = imgdata1.data[i];

ctx.putImageData(imgdata1, 0.1, 0.2);

var imgdata2 = ctx.getImageData(0.1, 0.2, 15.8, 15.9);
for (var i = 0; i < imgdata2.data.length; ++i) {
    _assertSame(olddata[i], imgdata2.data[i], "olddata[\""+(i)+"\"]", "imgdata2.data[\""+(i)+"\"]");
}


});
