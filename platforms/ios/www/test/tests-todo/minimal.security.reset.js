_addTest(function(canvas, ctx) {

canvas.width = 50;
ctx.drawImage(document.getElementById('yellow.png'), 0, 0);
try { var _thrown = false; canvas.toDataURL(); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: canvas.toDataURL()"); }
canvas.width = 100;
try { var _thrown = false; canvas.toDataURL(); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: canvas.toDataURL()"); }


});
