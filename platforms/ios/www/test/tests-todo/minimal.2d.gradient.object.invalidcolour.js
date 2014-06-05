_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 100, 0);
try { var _thrown = false;
  g.addColorStop(0, "");
} catch (e) { if (e.code != DOMException.SYNTAX_ERR) _fail("Failed assertion: expected exception of type SYNTAX_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type SYNTAX_ERR: g.addColorStop(0, \"\")"); }
try { var _thrown = false;
  g.addColorStop(0, 'undefined');
} catch (e) { if (e.code != DOMException.SYNTAX_ERR) _fail("Failed assertion: expected exception of type SYNTAX_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type SYNTAX_ERR: g.addColorStop(0, 'undefined')"); }


});
