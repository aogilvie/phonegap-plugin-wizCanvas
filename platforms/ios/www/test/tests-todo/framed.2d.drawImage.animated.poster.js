_addTest(function(canvas, ctx) {

ctx.drawImage(document.getElementById('anim-poster-gr.png'), 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});
