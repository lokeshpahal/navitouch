//window.location.href="index.html";
var app = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	
}

ons.ready(function() {
	setTimeout(function(){
		navigator.splashscreen.hide();
		contacts.getContactArray();
	},1000);
});

$(document).on('pageinit', '#app-page', function() {
	page.setDeviceBackButtonHandler(function() {
		
	});
});

$(document).ready(function(){
	$(document).on('swipeleft', '#aroundme-page', function() {
		appNavigator.pushPage('page2.html');
	})
	$(document).on('swiperight', '#contatcs-page', function() {
		appNavigator.popPage('page2.html');
	})
});
$(window).resize(function(){
	
});