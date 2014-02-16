// Declaring a javascript object using literal notation
var RenderEngineClass = {
	
	//Declaring a method of an object
	drawString : function (pString, pFontName, locX, locY, size, settings){

		// Declaring a variable and assigning to it
		var ctx = gRenderEnging.context;

		// Access the member property 'font' of the 'ctx' object
		// Also shows the '+' operator overloaded to do string concatenation
		ctx.font = size + "pt " + pFontName;

		// Single-line if block doesn't req surrounding braces
		if(settings.color) ctx.fillStyle = settings.color;

		// Multi-line if blocks DO req braces
		if(settings.bounds) {

			var maxWidth = settings.bounds.w;

			// Calling the 'split'
		}
	}

// XMLHTTPRequests
1. Creat a new XMLHTTPRequest() object (use the new keyword)
2. xhr.open("GET", "URL of the JSON file", async true or false)
3. xhr.onload = function() {do some stuff when the server responds to our req}
4. xhr.send();  // this has to be last - you need to know what to do with the server's response


document.getElementById('idNameHEre').onsubmit = function() {
	//here's all the function stuff here
	notify = document.createElement('newIdHere');
	body.appendChild(notify);
}

var domDomDom = document.getElementById('body');
    var gameContent = document.createElement('div');
    gameContent.id('gameContent');
    var gameCanvas = document.createElement('canvas');
    gameCanvas.id('gameCanvas');    
    domDomDom.appendChild(gameContent);
    gameContent.appendChild(gameCanvas);

  declare a new Image() object
  declare its 'onload' method
  set Image.src= 'url'


  var img = null;

  var onImageLoad = function(){
  	console.log("Image!");

  }

  var setup = function(){
  	canvas = document.getElementById("my_canvas");
  	context = canvas.getContext('2d');
  	canvas.width = window.innerWidth;
  	canvs.height = window.innerHeight;

  	img = new Image();
  	img.onload = onImageLoad;
  	img.src = "ralphyrobot.png"
  };

  var canvas = null;
  var context = null;
  var frameRate = 1000/30;
  var frame = 0;
  var assets = [list of all img files];


  memorize this:
  frame = (frame + 1) % frames.length;
  increments the frame, then takes the modulo of it.
  If the frame # is ever greater than the
  frames length, then it loops back around to the beginning
  frame = (frame + 1) % frames.length;
  frame = (frame + 1) % frames.length;
  frame = (frame + 1) % frames.length;
  It kind of cuts out the amount about the length and
  sets the index to the leftover amount.
  fram = (frame + 1) % frames.length;