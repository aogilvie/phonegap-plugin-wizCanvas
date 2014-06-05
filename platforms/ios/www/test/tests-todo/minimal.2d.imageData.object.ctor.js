_addTest(function(canvas, ctx) {

_assertDifferent(window.ImageData, undefined, "window.ImageData", "undefined");
try { var _thrown = false; new window.ImageData(1,1); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: new window.ImageData(1,1)"); }


});
