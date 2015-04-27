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
	}
}