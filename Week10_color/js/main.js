var w = document.body.clientWidth; //get the width of the document
var h = document.body.clientHeight;

console.log(w + ' ' + h);

$(document).ready(function() { //check for page to load


	$(document).mousemove(function(e){
		var r = map(e.pageX, 0, w, 0, 255);
		r = Math.round(r);
		var g = map(e.pageY, 0, w, 0, 255);
		g = Math.round(g);
		var b = 255;
		
		$("#wrap").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
		// the above syntax is the default jQuery css syntax for eg. $("#wrap").css("background-color","rgb(250, 0, 117)");
		
		$('#position').html(e.pageX +', '+ e.pageY);
           
	}); 
   
	$("#wrap").click(function(e){
    $('#clickPosition').append('<br>' + e.pageX +', '+ e.pageY);     
      
	}); 
});



function map(value,low1,high1,low2,high2){
    	//if the value and the 1st range low are equal to
    	// the new value must be low2
			if (value == low1) {
				return low2;
			}
		
			//normalize both sets to a 0-? range
			var range1 = high1 - low1;
			var range2 = high2 - low2;
			
			//normalize the value to the new normalized range
			var result = value - low1;
			
			//define the range as a percentage (0.0 to 1.0)
			var ratio = result / range1;
			
			//find the value in the new normalized-range
			result = ratio * range2;
			
			//un-normalize the value in the new range
			result += low2;
			
			return result;
}