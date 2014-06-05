_addTest(function(canvas, ctx) {

ctx.fillStyle = '#00f';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0ff';
ctx.fillRect(0, 3, 100, 1);
// Check for JPEG support first
var data = canvas.toDataURL('image/jpeg');
if (!data.match(/^data:image\/jpeg[;,]/)) {
  _assert(true, "true");
} else {
    _assertSame(canvas.toDataURL('image/jpeg', 10), data, "canvas.toDataURL('image/jpeg', 10)", "data");
    _assertSame(canvas.toDataURL('image/jpeg', -10), data, "canvas.toDataURL('image/jpeg', -10)", "data");
    _assertSame(canvas.toDataURL('image/jpeg', 1.01), data, "canvas.toDataURL('image/jpeg', 1.01)", "data");
    _assertSame(canvas.toDataURL('image/jpeg', -0.01), data, "canvas.toDataURL('image/jpeg', -0.01)", "data");

    _assert(canvas.toDataURL('image/jpeg', 1).length >= canvas.toDataURL('image/jpeg', 0.9).length, "canvas.toDataURL('image/jpeg', 1).length >= canvas.toDataURL('image/jpeg', 0.9).length");
    _assert(canvas.toDataURL('image/jpeg', 0).length <= canvas.toDataURL('image/jpeg', 0.1).length, "canvas.toDataURL('image/jpeg', 0).length <= canvas.toDataURL('image/jpeg', 0.1).length");
}


});
