Array.prototype.unique = function(key){
	var flags = [], output = [], l = this.length, i;
	for( i=0; i<l; i++) {
		if( flags[this[i][key]]) continue;
		flags[this[i][key]] = true;
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
	}
}
