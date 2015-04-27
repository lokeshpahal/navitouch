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
		var event = this.isTouchDevice() ? "touchstart" : "click";
		return event;
	},
	getOTP: function() {
		var min=12345,max=99999;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}