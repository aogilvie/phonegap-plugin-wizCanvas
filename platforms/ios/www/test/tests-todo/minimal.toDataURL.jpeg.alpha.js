_addTest(function(canvas, ctx) {

ctx.fillStyle = 'rgba(128, 255, 128, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'destination-over'; // should be ignored by toDataURL
var data = canvas.toDataURL('image/jpeg');
ctx.globalCompositeOperation = 'source-over';
if (!data.match(/^data:image\/jpeg[;,]/)) {
  _assert(true, "true");
} else {
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  var img = new Image();
  deferTest();
  img.onload = wrapFunction(function ()
  {
      ctx.drawImage(img, 0, 0);
      
      _assertPixelApprox(canvas, 50,25, 63,127,63,255, "50,25", "63,127,63,255", 8);
  });
  img.src = data;
}


});
