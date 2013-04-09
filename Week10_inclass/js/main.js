
$(document).ready(function() { //check for page to load


	$(document).mousemove(function(e){ 
	//event listener for when the mouse moves

      $('#position').html(e.pageX +', '+ e.pageY); 
      //plug in X and Y coords into #position div
      
	}); 
   
	$("#wrap").click(function(e){
	
      $('#clickPosition').append('<br> ' + e.pageX +', '+ e.pageY); 
      //on click anywhere in div #wrap display X and Y coords in #clickPosition div
          
	}); 
	
});