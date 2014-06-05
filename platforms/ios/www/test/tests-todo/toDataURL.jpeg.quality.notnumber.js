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
    _assertSame(canvas.toDataURL('image/jpeg', 'bogus'), data, "canvas.toDataURL('image/jpeg', 'bogus')", "data");
    _assertSame(canvas.toDataURL('image/jpeg', {}), data, "canvas.toDataURL('image/jpeg', {})", "data");
    _assertSame(canvas.toDataURL('image/jpeg', null), data, "canvas.toDataURL('image/jpeg', null)", "data");
    _assertSame(canvas.toDataURL('image/jpeg', undefined), data, "canvas.toDataURL('image/jpeg', undefined)", "data");
    _assertSame(canvas.toDataURL('image/jpeg', true), data, "canvas.toDataURL('image/jpeg', true)", "data");
    _assertSame(canvas.toDataURL('image/jpeg', '0.01'), data, "canvas.toDataURL('image/jpeg', '0.01')", "data");
}


});
