//  A regexp sample from Javascript: The Good Parts by Douglas Crawford  pg. 66

var parse_url = /^(?:([A-Za-z])+):)?(//{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*)))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

//  The captured groups get put into the result array - starting at 1, not 0, so you can create your own
//  little string for the very first element.  We put the entire url as the 0th element in the array.

var name = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var blanks = '       ';   // combine with substring method and you get nice alignment in output

var i;

for (i =  0; i < names.length; i =+ 1) {
	document.writeln(names[i] + ":" + blanks.substring(names[i].length), result[i];
}



