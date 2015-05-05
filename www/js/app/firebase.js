
var fb = new Firebase("https://navitouch.firebaseio.com");
var FireClass = {
	createUser: function(number){
		var when = new Date().getTime(),
		usersRef = fb.child("users"),
		userData = {number:number,when:when,updates:null,active:1},
		response = usersRef.push(userData);
		return response.key();
	}
}