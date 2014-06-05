_addTest(function(canvas, ctx) {

ctx.drawImage(document.getElementById('green.png'), 10.1, 10.1, 0.1, 0.1, 0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});
