_addTest(function(canvas, ctx) {

var p = ctx.createPattern(document.getElementById('yellow.png'), 'repeat');
ctx.strokeStyle = p;
ctx.strokeStyle = 'red';
try { var _thrown = false; canvas.toDataURL(); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: canvas.toDataURL()"); }
try { var _thrown = false; ctx.getImageData(0, 0, 1, 1); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: ctx.getImageData(0, 0, 1, 1)"); }


});
