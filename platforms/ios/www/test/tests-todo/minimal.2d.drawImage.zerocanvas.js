_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

var canvas2 = document.createElement('canvas');
canvas2.width = 0;
canvas2.height = 10;
try { var _thrown = false;
  ctx.drawImage(canvas2, 0, 0);
} catch (e) { if (e.code != DOMException.INVALID_STATE_ERR) _fail("Failed assertion: expected exception of type INVALID_STATE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INVALID_STATE_ERR: ctx.drawImage(canvas2, 0, 0)"); }

canvas2.width = 10;
canvas2.height = 0;
try { var _thrown = false;
  ctx.drawImage(canvas2, 0, 0);
} catch (e) { if (e.code != DOMException.INVALID_STATE_ERR) _fail("Failed assertion: expected exception of type INVALID_STATE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INVALID_STATE_ERR: ctx.drawImage(canvas2, 0, 0)"); }

canvas2.width = 0;
canvas2.height = 0;
try { var _thrown = false;
  ctx.drawImage(canvas2, 0, 0);
} catch (e) { if (e.code != DOMException.INVALID_STATE_ERR) _fail("Failed assertion: expected exception of type INVALID_STATE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INVALID_STATE_ERR: ctx.drawImage(canvas2, 0, 0)"); }

_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});
