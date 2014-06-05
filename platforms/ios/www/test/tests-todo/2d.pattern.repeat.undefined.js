_addTest(function(canvas, ctx) {

try { var _thrown = false;
  ctx.createPattern(canvas, undefined);
} catch (e) { if (e.code != DOMException.SYNTAX_ERR) _fail("Failed assertion: expected exception of type SYNTAX_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type SYNTAX_ERR: ctx.createPattern(canvas, undefined)"); }


});
