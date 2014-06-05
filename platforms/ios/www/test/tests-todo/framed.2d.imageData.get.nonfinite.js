_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.getImageData(Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(-Infinity, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(-Infinity, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(NaN, 10, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(NaN, 10, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, -Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, -Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, NaN, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, NaN, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, -Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, -Infinity, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, NaN, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, NaN, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, 10, -Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, 10, -Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, 10, NaN);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, 10, NaN)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, Infinity, 10, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, Infinity, 10, 10)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, 10, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, 10, Infinity, 10)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, 10, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(Infinity, 10, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(Infinity, 10, 10, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(10, Infinity, Infinity, 10);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, Infinity, Infinity, 10)"); }
try { var _thrown = false;
  ctx.getImageData(10, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(10, Infinity, 10, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, Infinity, 10, Infinity)"); }
try { var _thrown = false;
  ctx.getImageData(10, 10, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.getImageData(10, 10, Infinity, Infinity)"); }


});
