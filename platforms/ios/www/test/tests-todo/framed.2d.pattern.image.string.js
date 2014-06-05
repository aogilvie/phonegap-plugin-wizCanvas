_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createPattern('../images/red.png', 'repeat');
} catch (e) { if (e.code != DOMException.TYPE_MISMATCH_ERR) _fail("Failed assertion: expected exception of type TYPE_MISMATCH_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type TYPE_MISMATCH_ERR: ctx.createPattern('../images/red.png', 'repeat')"); }


});
