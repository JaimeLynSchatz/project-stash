

parseJSON = function (weaponJSON) {
    parsedJSON = JSON.parse(weaponJSON);

    return parsedJSON['frames']['chaingun_impact.png']['spriteSourceSize']['x'];
};

// Create a new XMLHttpRequest object


var weaponXHR = new XMLHttpRequest();// YOUR CODE HERE

var setup = function() {

// YOUR CODE HERE
    weaponXHR.open('GET', '/media/js/standalone/libs/gamedev_assets/weapon.json', true);
  
// YOUR CODE HERE
    weaponXHR.onload = function () {
        var parsed = JSON.parse(this.responseText);
        return parsed['frames']['chaingun_impact.png']['spriteSourceSize'['x'];
    };
        

// Finally, we want to call the send method of the
// request object to actually send the request.
	weaponXHR.send();
};