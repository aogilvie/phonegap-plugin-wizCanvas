_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var ctx2 = canvas2.getContext('2d');
ctx2.drawImage(document.getElementById('yellow.png'), 0, 0);
var p = ctx.createPattern(canvas2, 'repeat');
ctx.strokeStyle = p;
ctx.strokeStyle = 'red';
try { var _thrown = false; canvas.toDataURL(); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: canvas.toDataURL()"); }
try { var _thrown = false; ctx.getImageData(0, 0, 1, 1); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: ctx.getImageData(0, 0, 1, 1)"); }


});
