_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createImageData(Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(Infinity, 10)"); }
try { var _thrown = false;
  ctx.createImageData(-Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(-Infinity, 10)"); }
try { var _thrown = false;
  ctx.createImageData(NaN, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(NaN, 10)"); }
try { var _thrown = false;
  ctx.createImageData(10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(10, Infinity)"); }
try { var _thrown = false;
  ctx.createImageData(10, -Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(10, -Infinity)"); }
try { var _thrown = false;
  ctx.createImageData(10, NaN);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(10, NaN)"); }
try { var _thrown = false;
  ctx.createImageData(Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(Infinity, Infinity)"); }


});
