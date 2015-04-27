window.location.href="index.html";
var app = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	
}

ons.ready(function() {
	setTimeout(function(){
		navigator.splashscreen.hide();
	},1000);
});

$(document).on('pageinit', '#app-page', function() {
	page.setDeviceBackButtonHandler(function() {
		
	});
});

$(document).ready(function(){

});
$(window).resize(function(){
	
});