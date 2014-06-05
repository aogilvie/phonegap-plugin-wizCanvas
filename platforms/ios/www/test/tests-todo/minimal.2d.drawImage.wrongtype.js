_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.drawImage(undefined, 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.drawImage(undefined, 0, 0)"); }
try { var _thrown = false;
  ctx.drawImage(0, 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.drawImage(0, 0, 0)"); }
try { var _thrown = false;
  ctx.drawImage("", 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.drawImage(\"\", 0, 0)"); }
try { var _thrown = false;
  ctx.drawImage(document.createElement('p'), 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.drawImage(document.createElement('p'), 0, 0)"); }


});
