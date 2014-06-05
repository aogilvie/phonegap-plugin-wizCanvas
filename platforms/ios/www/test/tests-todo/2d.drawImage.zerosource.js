_addTest(function(canvas, ctx) {
    var redImage = new Image();
    redImage.src = 'test/images/red.png';
    redImage.onload = function () {
        draw();
    }
    
    function draw () {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, 0, 100, 50);
        try { var _thrown = false;
          ctx.drawImage(redImage, 10, 10, 0, 1, 0, 0, 100, 50);
        } catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 10, 10, 0, 1, 0, 0, 100, 50)"); }
        try { var _thrown = false;
          ctx.drawImage(redImage, 10, 10, 1, 0, 0, 0, 100, 50);
        } catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 10, 10, 1, 0, 0, 0, 100, 50)"); }
        try { var _thrown = false;
          ctx.drawImage(redImage, 10, 10, 0, 0, 0, 0, 100, 50);
        } catch (e) { if (e.code != DOMException.INDEX_SIZE_ERR) _fail("Failed assertion: expected exception of type INDEX_SIZE_ERR, got: "+e.message); _thrown = true; } finally { _assert(_thrown, "should throw exception of type INDEX_SIZE_ERR: ctx.drawImage(document.getElementById('red.png'), 10, 10, 0, 0, 0, 0, 100, 50)"); }
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
    }

});
