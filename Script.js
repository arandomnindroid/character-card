var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
imageObj1.src = "407139CA-64EF-4416-9DA7-194AD061C858.png"
imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 328, 526);
   imageObj2.src = "842C5DC6-C713-41A5-BF2B-616230CAD395.png";
   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 15, 85, 300, 300);
      var img = c.toDataURL("image/png");
      document.write('<img src="' + img + '" width="328" height="526"/>');
   }
};								
