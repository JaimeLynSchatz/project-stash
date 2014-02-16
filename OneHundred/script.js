$(document).ready(function() {
	alert("I'm ready");
	$('<ul><li>Testing</li>\
	<li>Testing</li>\
	<li>1 2 3</li></ul>').insertBefore($('#chart'));
	var nextCount = 1;
	for (var i = 0; i < 10; i +=1){
		$('<tr><td class="stump"></td></tr>').insertAfter($('tr:last'));
		
		for (var j = 1; j <=10; j +=1){
			$('<td class="cell"></td>').html(nextCount + '<span class="red hidden2">*</span><span class="blue hidden5">*</span><span class="yellow hidden10">*</span>').insertAfter($('td:last'));
			if (nextCount % 10 === 0) {
				$('td:last span').removeClass('hidden10');
			}
			if (nextCount % 5 === 0) {
				$('td:last span').removeClass('hidden5');
			}
			if (nextCount % 2 === 0) {
				$('td:last span').removeClass('hidden2');
			}
			nextCount += 1;
		}
	}
	alert("Here's the end of the program");
});

