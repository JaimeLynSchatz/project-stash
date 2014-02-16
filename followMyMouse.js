$(document).ready(function(){
    $(document).mousemove(function(event) {
        $('.mouseFollow')
        .offset({left: (event.pageX), top: (event.pageY - 10)})
    });
    
    $(document).on("click", function(){
    	var newDiv = $('<div class="spawnedDiv"></div>')
    	$('body').append(newDiv);
    	$('div').removeClass('mouseFollow').addClass('spawnedDiv');
    	newDiv.addClass('mouseFollow').removeClass('spawnedDiv');

	});
});
