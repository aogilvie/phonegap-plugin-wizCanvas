_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createRadialGradient(0, 0, -0.1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.createRadialGradient(0, 0, -0.1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, 0, -0.1);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.createRadialGradient(0, 0, 1, 0, 0, -0.1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, -0.1, 0, 0, -0.1);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.createRadialGradient(0, 0, -0.1, 0, 0, -0.1)"); }


});
