var login = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	adjustForm: function(){
		var formHeight = $('.login-form').height();
		var topMargin = ((login.WH/2)-(formHeight/2));
		var inputW = $('.login-form input[type="number"]').outerWidth();
		
		$('.login-form').css({marginTop:topMargin});
		$('.login-button').css({width:inputW+'px'});
	},
	adjustForm1: function(){
		var formHeight = $('.login-form-otp').height();
		var topMargin = ((login.WH/2)-(formHeight/2));
		var inputW = $('.login-form-otp input[type="number"]').outerWidth();
		$('.login-form-otp').css({marginTop:topMargin});
		$('.login-button').css({width:inputW+'px'});
	},
	sendOTP: function(){
		var mobNumber = $.trim($('.login-form input[type="number"]').val());
		if(mobNumber!=''){
			app.navi.pushPage('page1.html')
			login.adjustForm1();
		}
	},
	back: function(){
		app.navi.popPage('page.html')
	}
}

$(document).ready(function(){
	login.adjustForm();
	$(document).on(appMain.event(),'.login-button',function(){
		login.sendOTP();
	});
	$(document).on(appMain.event(),'.login-button-OTP',function(){
		login.back();
	});
});
$(window).resize(function(){
	login.adjustForm();
});