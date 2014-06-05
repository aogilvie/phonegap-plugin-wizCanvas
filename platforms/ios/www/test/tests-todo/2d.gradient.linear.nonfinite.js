_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createLinearGradient(Infinity, 0, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, 0, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(-Infinity, 0, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(-Infinity, 0, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(NaN, 0, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(NaN, 0, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, Infinity, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, Infinity, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, -Infinity, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, -Infinity, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, NaN, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, NaN, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, Infinity, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, Infinity, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, -Infinity, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, -Infinity, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, NaN, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, NaN, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, 1, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, 1, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, 1, -Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, 1, -Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, 1, NaN);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, 1, NaN)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, Infinity, 1, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, Infinity, 1, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, Infinity, Infinity, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, Infinity, Infinity, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, Infinity, 1, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, Infinity, 1, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, 0, Infinity, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, 0, Infinity, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, 0, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(Infinity, 0, 1, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(Infinity, 0, 1, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, Infinity, Infinity, 0);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, Infinity, Infinity, 0)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, Infinity, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, Infinity, Infinity, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, Infinity, 1, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, Infinity, 1, Infinity)"); }
try { var _thrown = false;
  ctx.createLinearGradient(0, 0, Infinity, Infinity);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createLinearGradient(0, 0, Infinity, Infinity)"); }


});
