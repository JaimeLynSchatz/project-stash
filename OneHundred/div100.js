$(document).ready(function(){
	alert("I'm ready!");
	$('<ul>').append($('ul:last'));
	for (var i=0; i < 10; i += 1) {
		$('<li><div class="square"></li>').insertAfter($('ul:last'));
		if (i % 2 === 0) {
			$(this).addClass('red-background');
		}
		else {
			$(this).addClass('blue-background');
		}
	}	
	$('</ul>').append($('ul li:last'));


});