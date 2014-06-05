_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(-Infinity, 0, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(-Infinity, 0, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(NaN, 0, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(NaN, 0, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, -Infinity, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, -Infinity, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, NaN, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, NaN, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, -Infinity, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, -Infinity, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, NaN, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, NaN, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, -Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, -Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, NaN, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, NaN, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, -Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, -Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, NaN, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, NaN, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, 0, -Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, 0, -Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, 0, NaN);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, 0, NaN)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, Infinity, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, Infinity, 1, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, Infinity, 1, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, Infinity, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, Infinity, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(Infinity, 0, 1, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(Infinity, 0, 1, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, 0, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, 0, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, Infinity, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, Infinity, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, Infinity, 1, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, Infinity, 1, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, Infinity, 0, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, Infinity, 0, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, 0, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, 0, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, Infinity, 0, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, Infinity, 0, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, Infinity, Infinity, 1);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, Infinity, Infinity, 1)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, Infinity, 0, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, Infinity, 0, Infinity)"); }
try { var _thrown = false;
  ctx.createRadialGradient(0, 0, 1, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createRadialGradient(0, 0, 1, 0, Infinity, Infinity)"); }


});
