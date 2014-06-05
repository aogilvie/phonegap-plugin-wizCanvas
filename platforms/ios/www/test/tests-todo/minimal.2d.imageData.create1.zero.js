_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createImageData(null);
} catch (e) { if (e.code != DOMException.NOT_SUPPORTED_ERR) _fail("Failed assertion: expected exception of type NOT_SUPPORTED_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type NOT_SUPPORTED_ERR: ctx.createImageData(null)"); }


});
