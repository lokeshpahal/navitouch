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
			 alert('onError!');
		},
		options);
	}
}