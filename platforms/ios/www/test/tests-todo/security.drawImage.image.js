_addTest(function(canvas, ctx) {

ctx.drawImage(document.getElementById('yellow.png'), 0, 0);
try { var _thrown = false; canvas.toDataURL(); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: canvas.toDataURL()"); }
try { var _thrown = false; ctx.getImageData(0, 0, 1, 1); } catch (e) { _thrown = true; } finally { _assert(_thrown, "should throw exception: ctx.getImageData(0, 0, 1, 1)"); }


});
