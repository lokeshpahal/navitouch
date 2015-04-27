var login = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	
	sendOTP: function(){
		var mobNumber = $.trim($('.login-form input[type="number"]').val());
		if(mobNumber!=''){
			navi.pushPage('page1.html',{ animation : 'slide' })
		}
	},
	back: function(){
		navi.popPage('page.html')
		return false
	}
}

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
			alert('NG: ng-device-backbutton')
		}
	}
});
function onDeviceBackButton(event) {
	if (event.callParentHandler) {
		//alert('OK: on-device-backbutton');
	} else {
		alert('NG: on-device-backbutton');
	}
}

$(document).ready(function(){
	$(document).on(appMain.event(),'.login-button',function(){
		login.sendOTP();
	});
	$(document).on(appMain.event(),'.login-button-OTP',function(){
		login.back();
	});
});
$(window).resize(function(){
	
});