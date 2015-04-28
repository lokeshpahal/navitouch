var contacts = {
	list: [],
	fields: ["id", "name", "phoneNumbers", "photos"],
	getContactArray: function(){
		var options      = new ContactFindOptions();
		options.filter   = "";
		options.multiple = true;
		navigator.contacts.find(this.fields, 
		function(cons){
			alert('Found ' + cons.length + ' contacts.');
		},function(){
			 //alert('onError!');
		},
		options);
	},
	getCallLog: function(){
		window.plugins.calllog.list('3', function (response) {
			alert(response.rows[0].number);
		}, function (error) {
			alert('error');
		});
	}
}