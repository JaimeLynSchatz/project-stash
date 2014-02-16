$slideshow = {
	context: false,
	tabs: false,
	timeout: 1000,
	slideSpeed: 1000,
	tabSpeed: 300,
	fx: 'scrollLeft',

	init: function() {
		// cache the context to help speed up selectors/improve performance
		this.context = $('#slideshow');

		// set tabs to current hard coded nav items
		this.tabs = $('ul.slides-nav li', this.context);

		//remove hard coded nav from DOM b/c they're not hooked into jQuery cycle
		this.tabs.remove();

		//prepare slideshow and jQuery cycle tabs
		this.prepareSlideshow();
	},

	prepareSlideshow: function() {
		//initialize the jquery cycle plugin -
		// for info: http://malsup.com/jquery/cycle/options.html
		$("div.slides > ul", $slideshow.context).cycle({
			fx: $slideshow.fx,
			timeout: $slideshow.timeout,
			speed: $slideshow.slideSpeed,
			fastOnEvent: $slideshow.tabSpeed,
			pager: $("ul.slides-nav", $slideshow.context),
			pagerAnchorBuilder: $slideshow.prepareTabs,
			before: $slideshow.activateTab,
			pauseOnPagerHover: true,
			pause: true
		});
	},

	prepareTabs: function(i, slide) {
		//return markup from hardcoded tabs for use as jQuery cycle tabs
		// (attaches necessary jQuery cycle events to tabs)
		return $slideshow.tabs.eq(i);	
	},

	activateTab: function(currentSlide, nextSlide) {
		// get the active tab
		var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow.context);
		
		// if there is an active tab
		if(activeTab.length) {
			// remove active styling from all other tabs
			$slideshow.tabs.removeClass('on');

			// add active styling to active button
			activeTab.parent().addClass('on');
		}
	}
};

$(function() {
	//initialize the slidewho when the DOM is ready
	$slideshow.init();
});