if(!storage.getItem("navitouch_key")){
	window.location.href="index.html";
}
var app = {
	WW: $(window).innerWidth(),
	WH: $(window).innerHeight(),
	popover: null
}

ons.ready(function() {
	setTimeout(function(){
		navigator.splashscreen.hide();
		contacts.getContactArray();
		contacts.getCallLog();
	},1000);
	
	ons.createPopover('popover.html').then(function(popover) {
		app.popover = popover;
	});

	app.show = function(e) {
		app.popover.show(e);
	};
	
	$(document).on(appMain.event(),'.showPopover',function(){
		var popid = $(this).data('popid');
		app.popover.show(popid);
	});
	$(document).on(appMain.event(),'.showContact',function(){
		var number = $(this).data('number');
		//contacts.showContact(number);
		contacts.searchInList(number);
	});
});

$(document).ready(function(){
	$(document).on('swipeleft', '#aroundme-page', function() {
		pageTabber.setActiveTab(1);
	})
	$(document).on('swiperight', '#contatcs-page', function() {
		pageTabber.setActiveTab(0);
	})
    $(document).on('click','.check-in',function(){
        alert('test');
        appMain.checkGPS();
    });
});
$(window).resize(function(){
	
});
