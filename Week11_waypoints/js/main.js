
$(document).ready(function() { //check for page to load

	$('#second').waypoint(function(direction) {	
  		$('#notify').append('<br> Passed second while going ' + direction);
  		
  		 if(direction === 'down'){
  		
  			$(this).addClass("down");
  		
  		}
  		
  		else if(direction === 'up'){
  		
  			$(this).removeClass("down");
  		
  		}
  	});
	
	$('#third').waypoint(function(direction) {	
  		$('#notify').append('<br> Passed third while going ' + direction);

	});
	
	$('#fourth').waypoint(function(direction) {	
  		$('#notify').append('<br> Passed fourth while going ' + direction);
	});
	
});