_addTest(function(canvas, ctx) {

var data = canvas.toDataURL('ImAgE/PnG');
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");

// If JPEG is supported at all, it must be supported case-insensitively
data = canvas.toDataURL('image/jpeg');
if (data.match(/^data:image\/jpeg[;,]/)) {
    data = canvas.toDataURL('ImAgE/JpEg');
    _assertMatch(data, /^data:image\/jpeg[;,]/, "data", "/^data:image\\/jpeg[;,]/");
}


});
