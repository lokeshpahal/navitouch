//window.location.href="index.html";
var app = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	
}

ons.ready(function() {
	setTimeout(function(){
		navigator.splashscreen.hide();
		contacts.getCallLog();
	},1000);
});

$(document).on('pageinit', '#contatcs-page', function() {
	page.setDeviceBackButtonHandler(function() {
		
	});
});

$(document).ready(function(){
	$(document).on('swipeleft', '#aroundme-page', function() {
		pageTabber.setActiveTab(1);
	})
	$(document).on('swiperight', '#contatcs-page', function() {
		pageTabber.setActiveTab(0);
	})
});
$(window).resize(function(){
	
});
