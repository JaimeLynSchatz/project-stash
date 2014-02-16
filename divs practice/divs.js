$(document).ready(function() {
	alert("I'm ready!");
	
	/*
	for (var i = 1; i <= 10; i += 1){
		$("<div class='square'>Here's the first div " + i + " </div>").appendTo($('#start'));
		//$("<div class='square'>Here's the second div</div>").appendTo($('#start'));
		//$("<div class='square'>Here's the third div</div>").appendTo($('#start'));
	}
	*/
	
	//  These need to be nested, and at each new iteration of the outer loop, I need to insertAfter the div section last created
	
	for (var i = 1; i <= 3; i += 1){
		$("<div class='row'><div class='square firstSquare'>1st div of row " + i + " ???????</div>").appendTo($('#start'));
			for (var j = 2; j <= 9; j += 1) {
				$("<div class='square'>following div " + i + j + " </div>").insertAfter($('.firstSquare:last'));
			}
		$("</div><br/>").appendTo($('.row div:last'));
	}
	
	// can I use a line break and display inline??
		
		
		//the setTimeout didn't work the way I expected it to.  It does something really odd
	
		//$("<div class='square'>Here's the second div</div>").appendTo($('#start'));
		//$("<div class='square'>Here's the third div</div>").appendTo($('#start'));
	
	
});
	