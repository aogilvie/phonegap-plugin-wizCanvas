_addTest(function(canvas, ctx) {

ctx.drawImage(document.getElementById('green.png'), 10.5, 10.5, 89.5, 39.5, 0, 0, 100, 50);
ctx.drawImage(document.getElementById('green.png'), 5.5, 5.5, -5.5, -5.5, 0, 0, 100, 50);
ctx.drawImage(document.getElementById('green.png'), 100, 50, -5, -5, 0, 0, 100, 50);
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), -0.001, 0, 100, 50, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), -0.001, 0, 100, 50, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 0, -0.001, 100, 50, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 0, -0.001, 100, 50, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 0, 0, 100.001, 50, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 0, 0, 100.001, 50, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 0, 0, 100, 50.001, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 0, 0, 100, 50.001, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 50, 0, 50.001, 50, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 50, 0, 50.001, 50, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 0, 0, -5, 5, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 0, 0, -5, 5, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 0, 0, 5, -5, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 0, 0, 5, -5, 0, 0, 100, 50)"); }
try { var _thrown = false;
  ctx.drawImage(document.getElementById('red.png'), 110, 60, -20, -20, 0, 0, 100, 50);
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 110, 60, -20, -20, 0, 0, 100, 50)"); }
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});
