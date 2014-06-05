_addTest(function(canvas, ctx) {

ctx.fillStyle = '#00f';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0ff';
ctx.fillRect(0, 3, 100, 1);
// Check for JPEG support first
var data = canvas.toDataURL('image/jpeg');
if (!data.match(/^data:image\/jpeg[;,]/)) {
  _assert(true, "true");
} else {
  var data_hi = canvas.toDataURL('image/jpeg', 0.99);
  var data_lo = canvas.toDataURL('image/jpeg', 0.01);
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  deferTest();
  var img_hi = new Image();
  img_hi.onload = function ()
  {
      var img_lo = new Image();
      img_lo.onload = wrapFunction(function ()
      {
          ctx.drawImage(img_hi, 0, 0, 50, 50, 0, 0, 50, 50);
          ctx.drawImage(img_lo, 0, 0, 50, 50, 50, 0, 50, 50);
          
          _assert(data_hi.length > data_lo.length, "data_hi.length > data_lo.length");
          _assertPixelApprox(canvas, 25,25, 0,0,255,255, "25,25", "0,0,255,255", 8);
          _assertPixelApprox(canvas, 75,25, 0,0,255,255, "75,25", "0,0,255,255", 8);
      });
      img_lo.src = data_lo;
  };
  img_hi.src = data_hi;
}


});
