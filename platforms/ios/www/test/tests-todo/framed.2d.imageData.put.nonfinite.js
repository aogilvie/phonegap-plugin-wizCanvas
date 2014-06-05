_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, -Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, -Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, NaN, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, NaN, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, -Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, -Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, NaN);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, NaN)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, -Infinity, 10, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, -Infinity, 10, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, NaN, 10, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, NaN, 10, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, -Infinity, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, -Infinity, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, NaN, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, NaN, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, -Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, -Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, NaN, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, NaN, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, -Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, -Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, NaN, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, NaN, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, -Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, -Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, NaN, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, NaN, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, 10, -Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, 10, -Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, 10, NaN);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, 10, NaN)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, Infinity, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, Infinity, 10, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, Infinity, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, Infinity, 10, 10, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, Infinity, 10, 10, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, Infinity, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, Infinity, 10, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, Infinity, 10, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, Infinity, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, Infinity, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.putImageData(imgdata, 10, 10, 10, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.putImageData(imgdata, 10, 10, 10, 10, Infinity, Infinity)"); }


});
