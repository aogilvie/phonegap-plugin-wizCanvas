_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = ctx.createPattern(document.getElementById('red.png'), 'no-repeat');
ctx.globalAlpha = 0.01; // avoid any potential alpha=0 optimisations
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 2,253,0,255, "50,25", "2,253,0,255", 2);


});
