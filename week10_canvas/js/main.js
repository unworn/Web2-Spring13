$(document).ready(function() {
	
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.fillStyle="#F36";
	
	$(document).mousemove(function(e){

      var rectX = e.pageX - (e.pageX %10);
      var rectY = e.pageY - (e.pageY %10);
      ctx.fillRect(rectX, rectY,10,10);     
      
	}); 	
	
});

