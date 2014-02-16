function Slider( container, nav ) {
	this.container = container;
	this.nav = nav;

	this.img = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function( coordinates ) {
	this.container.animate({
		'margin-left': coordinates || -( this.current * this.imgWidth );
	})
};

Slider.prototype.setCoordinates = function( dir ){
	var pos = this.current
	pos += ( ~~( dir === 'next' ) || -1 ); // ~~ casts as an integer 

	this.current = ( pos < 0 ) ? this.imgsLen - 1 : this.current % img.Len;

	return pos