$(document).ready(function(){
	$('#no-script').remove();
	$('#celebs tr:even').addClass('zebra');
	$('<input type="button" value="Hide Disclaimer" id="toggleButton">').insertAfter('#disclaimer');
	$('#toggleButton').click(function(){
		$('#disclaimer').slideUp('slow', function() {
			$('#toggleButton').fadeOut();
		});
		
		if ($('#disclaimer').is(':visible')) {
			$(this).val('Hide Disclaimer');
		} else {
			$(this).val('Show Disclaimer');
		}
	});
	$('<input type="button" value="Fade Me Out" id="fadeButton">').insertAfter($('table'));
	$('#fadeButton').click(function() {
		$(this).fadeOut();
	});
	
	$('#navigation li').hover(function() {
		$(this).animate({paddingLeft: '+=15px'}, 200);
	}, function() {
		$(this).animate({paddingLeft: '-=15px'}, 200);
	});
	/*
	 *  Callback Functions in Action
	 *  $('#toggleButton').click(function() {
			$('#disclaimer').slideToggle('slow', function() {
			alert('The slide has finished sliding!')
			});
	 *
	 */
	 
	/*
	$('#celebs tbody tr').hover(function() {
		$(this).addClass('zebraHover');
	}, function() {
		$(this).removeClass('zebraHover');
	});
	Toggle Class and Hover for zebraHover don't play nicely together:  You have to hover before and after you click and that defeats the purpose.
	*/
	$('#celebs tbody tr').click(function() {
		$(this).toggleClass('zebraHover');
	});
	$('.spoiler').hide();
	$('<span class="revealer" type="button">Tell me!</span>').insertBefore('.spoiler');
	$('.revealer').click(function() {
		$(this).hide();
		$(this).next().fadeIn('slow');
	});
});

	