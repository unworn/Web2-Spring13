var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

/* console.log("this is a console log statement " + h); */

function showTime(){
	if(h <= 12 && h >= 5){
		console.log("Good morning! It's "+h +":" + m + "am");
	}
	
	else if(h >= 12 && h <= 18){
		console.log("Good afternoon! It's "+h +":" + m + "pm");
	}
	
	else if(h >= 18 && h <= 23){
		console.log("Good Night! It's "+h +":" + m + "pm");
	}
	
	else if(h >= 0 && h <= 5){
		console.log("Good Night! It's "+h +":" + m + "am");
	}
}



$(document).ready(function() {
	
	showTime();
	$("#time").click(function(){
		$(this).empty();
		$(this).append("The time is");
		
		$("p#time").empty();
  		$("p#time").append(h + ":" + m);
  		$("#wrapper").css("background-color","#999");
	});
	
	
	
});


/*

COMMON jQuery FUNCTIONS

.click
.show
.hide
.toggle
.css
.append
.empty
.slideToggle

*/
