var login = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	otp: null,
	userNumber: null,
	sendOTP: function(){
		var mobNumber = $.trim($('.login-form .c-number').val());
		if (/^\d{10}$/.test(mobNumber)) {
			login.otp=appMain.getOTP();
			login.userNumber = mobNumber;
			navi.pushPage('page1.html',{ animation : 'lift' })
		}
	},
	back: function(){
		navi.popPage('page.html')
		return false
	}
}

ons.ready(function() {
	navigator.splashscreen.hide();
	appMain.checkConnection();
});

$(document).on('pageinit', '#first-page', function() {
	$('#otp-info').html(login.otp);
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
		var userOtp = parseInt($.trim($('.mobile-number').val()));
		$('.mobile-number').blur();
		setTimeout(function(){
			if(userOtp!=='' && (/^\d{5}$/.test(userOtp))){
				if(userOtp===login.otp){
					var userKey = FireClass.createUser(login.userNumber);
					storage.setItem("navitouch_number", login.userNumber);
					storage.setItem("navitouch_key", userKey);
					setTimeout(function(){
						window.location.href = 'app.html';
					},500);
				}else{
					$('.mobile-number').val('');
					ons.notification.alert({message: 'Click button to send Again.',title: 'Invalid OTP',});
				}
			}
		},1000);
	});
});
$(window).resize(function(){
	
});