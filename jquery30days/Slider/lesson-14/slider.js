// the procedural method
(function($) {  //alias jQuery here
	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width,
		imgsLen = imgs.length, // number of images
		current = 1 // whuch image are we on now?,
		totalImageWidth = imgWidth * imgsLen;

	$('#slider-nav').show().find('button').on('click', function() {
		var direction = $(this).data('dir');
			loc = imgWidth;
		//update current value
		(direction === 'next' ) ? current += 1 : current -= 1;
		
		// if first image
		if ( current === 0 ) {
			current = imgsLen;
			loc = totalImageWidth - imgWidth;
			direction = 'next';
		} else if ( current - 1 === imgsLen ) {
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
	});

	function transition ( container, loc, direction ) {
		var unit; // -= or +=

		if ( direction && loc !== 0 ) {
			unit = ( direction === 'next' ) ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit + loc) : loc 
		});
	}
})(jQuery);
