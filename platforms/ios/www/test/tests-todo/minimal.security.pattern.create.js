_addTest(function(canvas, ctx) {

var p = ctx.createPattern(document.getElementById('yellow.png'), 'repeat');
canvas.toDataURL();
ctx.getImageData(0, 0, 1, 1);
_assert(true, "true"); // okay if there was no exception


});
