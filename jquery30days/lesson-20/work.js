// Worker To-Do List
self.addEventListener('message', function(e) {
	self.postMessage('You said: ' + e.data);
}, false);
self.close();