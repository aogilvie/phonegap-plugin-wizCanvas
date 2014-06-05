_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 100, 0);
try { var _thrown = false;
  g.addColorStop(-1, '#000');
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: g.addColorStop(-1, '#000')"); }
try { var _thrown = false;
  g.addColorStop(2, '#000');
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: g.addColorStop(2, '#000')"); }
try { var _thrown = false;
  g.addColorStop(Infinity, '#000');
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: g.addColorStop(Infinity, '#000')"); }
try { var _thrown = false;
  g.addColorStop(-Infinity, '#000');
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: g.addColorStop(-Infinity, '#000')"); }
try { var _thrown = false;
  g.addColorStop(NaN, '#000');
} catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: g.addColorStop(NaN, '#000')"); }


});
