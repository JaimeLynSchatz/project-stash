//javascript notes from WVA HTML5 Jumpstart

	app.onready = function ( ) {
		var myString = "hello World";
		console.log(myString);
	}
	
	log(f1());
	function f1 () {

	}
	log(f2());	
	var f2 = function () {
	
	};
	
// Functions as Methods of objects
var ops = {
	add: function addNumbers(n1, n2) {
		return n1 + n2;
	}
};

// Thinking about scope
var x = 2000;

function someFunc() {
	var y = 12;
	return y;
}

var z = x + y; // invalid

var z = x + someFunc(); //z == 2012

// Functions in Functions

function outerFunction(n) {
	function innerFunction() {
		return n * n;
	}
	return innerFunction();
}

var x = outerFunction(4); // x == 16
// innerFunction cannot be called directly

// Immediate or Self-Executing Functions
(function() { ... }());

//or
(function() { ... })();


// Module Pattern
var mod = (function(){
	var m = 2000, c = 0, d = 10, y = 2;
	return {
		getHiddenYear : function() {   // snuck in anon func  
			return m + c + d + y;
		}
	}
}());

var x = mod.getHiddenYear();  // x == 2012