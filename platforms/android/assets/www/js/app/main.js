Array.prototype.unique = function(key){
	var flags = [], output = [], l = this.length, i;
	for( i=0; i<l; i++) {
		if( flags[this[i][key].slice(-10)]) continue;
		flags[this[i][key].slice(-10)] = true;
		output.push(this[i]);
	}
	return output;
}


var appMain = {
	isTouchDevice: function(){
		try {  
			document.createEvent("TouchEvent");  
			return true;  
		} catch (e) {  
			return false;  
		}  
	},
	event: function(){
		var event = "click";
		return event;
	},
	getOTP: function() {
		var min=12345,max=99999;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	checkConnection: function() {
		var networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';
		alert('Connection type: ' + states[networkState]);
	}
}
