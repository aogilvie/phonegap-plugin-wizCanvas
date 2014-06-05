_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.globalAlpha = 0.01; // avoid any potential alpha=0 optimisations
ctx.drawImage(document.getElementById('red.png'), 0, 0);
_assertPixelApprox(canvas, 50,25, 2,253,0,255, "50,25", "2,253,0,255", 2);


});
