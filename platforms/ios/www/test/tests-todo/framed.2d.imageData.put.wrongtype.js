_addTest(function(canvas, ctx) {

var imgdata = { width: 1, height: 1, data: [255, 0, 0, 255] };
try { var _thrown = false;
  ctx.putImageData(imgdata, 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.putImageData(imgdata, 0, 0)"); }
try { var _thrown = false;
  ctx.putImageData("cheese", 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.putImageData(\"cheese\", 0, 0)"); }
try { var _thrown = false;
  ctx.putImageData(42, 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.putImageData(42, 0, 0)"); }


});
