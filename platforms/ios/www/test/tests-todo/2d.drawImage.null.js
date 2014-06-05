_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.drawImage(null, 0, 0);
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.drawImage(null, 0, 0)"); }


});
