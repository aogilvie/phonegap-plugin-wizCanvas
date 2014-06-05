_addTest(function(canvas, ctx) {

canvas.width = 0;
canvas.height = 10;
_assertSame(canvas.width, 0, "canvas.width", "0");
_assertSame(canvas.height, 10, "canvas.height", "10");
try { var _thrown = false;
  ctx.createPattern(canvas, 'repeat');
} catch (e) { if (e.code != DOMException.INVALID_STATE_ERR) _fail("Failed assertion: expected exception of type INVALID_STATE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INVALID_STATE_ERR: ctx.createPattern(canvas, 'repeat')"); }

canvas.width = 10;
canvas.height = 0;
_assertSame(canvas.width, 10, "canvas.width", "10");
_assertSame(canvas.height, 0, "canvas.height", "0");
try { var _thrown = false;
  ctx.createPattern(canvas, 'repeat');
} catch (e) { if (e.code != DOMException.INVALID_STATE_ERR) _fail("Failed assertion: expected exception of type INVALID_STATE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INVALID_STATE_ERR: ctx.createPattern(canvas, 'repeat')"); }

canvas.width = 0;
canvas.height = 0;
_assertSame(canvas.width, 0, "canvas.width", "0");
_assertSame(canvas.height, 0, "canvas.height", "0");
try { var _thrown = false;
  ctx.createPattern(canvas, 'repeat');
} catch (e) { if (e.code != DOMException.INVALID_STATE_ERR) _fail("Failed assertion: expected exception of type INVALID_STATE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INVALID_STATE_ERR: ctx.createPattern(canvas, 'repeat')"); }


});
