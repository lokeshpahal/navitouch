var login = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	
	sendOTP: function(){
		var mobNumber = $.trim($('.login-form .c-number').val());
		if (/^\d{10}$/.test(mobNumber)) {
			navi.pushPage('page1.html',{ animation : 'lift' })
		}
	},
	back: function(){
		navi.popPage('page.html')
		return false
	}
}

ons.ready(function() {
  // Hide Cordova splash screen when Onsen UI is loaded completely
  // API reference: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
  navigator.splashscreen.hide();
});

$(document).on('pageinit', '#first-page', function() {
	page.setDeviceBackButtonHandler(function() {
		//alert("OK: setDeviceBackButtonHandler");
	});
});
app.controller('AppController', function($scope, DeviceBackButtonHandler) {
	$scope.fire = function() {
		DeviceBackButtonHandler.fireDeviceBackButtonEvent();
	};
	$scope.onDeviceBackButton = function($event) {
		if ($event.callParentHandler) {
			navi.popPage('page.html')
		} else {
			navi.popPage('page.html')
		}
	}
});

$(document).ready(function(){
	$(document).on(appMain.event(),'.login-button',function(){
		login.sendOTP();
	});
	$(document).on(appMain.event(),'.login-button-OTP',function(){
		//navi.pushPage('app.html')
		window.location.href = 'app.html';
	});
});
$(window).resize(function(){
	
});