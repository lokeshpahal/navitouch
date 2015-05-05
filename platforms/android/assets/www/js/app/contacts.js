var contacts = {
	list: [],
	callLogList: null,
	fields: ["id", "name", "displayName", "phoneNumbers", "photos"],
	getContactArray: function(){
		var options      = new ContactFindOptions();
		options.filter   = "";
		options.multiple = true;
		navigator.contacts.find(this.fields, 
		function(cons){
			for(var j=0;j< cons.length; j++){
				if(cons[j].phoneNumbers!==null){
					contacts.list.push(cons[j]);
				}
			}
			alert('done');
		},function(){
			 //alert('onError!');
		},
		options);
	},
	searchInList: function(number){
		var cnumber = number.slice(-10);
		var creturn = null;
		for(var j=0; j<contacts.list.length; j++){
			for(var k=0;k<contacts.list[j].phoneNumbers.length;k++){
                n = contacts.list[j].phoneNumbers[k].value.slice(-10);
                if(n==cnumber){
					creturn = contacts.list[j]
				}
            }
		}
		return creturn;
	},
	getCallLog: function(){
		window.plugins.calllog.list('3', function (response) {
			contacts.callLogList = response.rows.unique('number');
		}, function (error) {
			//error
		});
	},
	showContact: function(number){
		window.plugins.calllog.show(number,function(){
			// success
		}, function(error){
			// error
		});
	},
	drawAllList: function(){
		
	}
}



// angular stuff
app.controller('contactListCtrl', function($scope, $timeout, $http) {
  
	$scope.items = [];
	
	for(var j = 0;j< contacts.callLogList.length;j++){
		if(typeof contacts.callLogList[j].cachedName != 'undefined'){
			var obj = {};
			obj.desc = contacts.callLogList[j].number;
			obj.title = contacts.callLogList[j].cachedName;
			$scope.items.push(obj);
		}
	}
	
	$scope.load = function($done) {
	  $timeout(function() {
		$http.jsonp('http://numbersapi.com/random/year?callback=JSON_CALLBACK')
		  .success(function(data) {
			$scope.items.unshift({
			  desc: data,
			  title: 'title',
			  rand: Math.random()
			});
		  })
		  .error(function() {
			$scope.items.unshift({
			  desc: 'No data',
			  title: 'title',
			  rand: Math.random()
			});
		  })
		  .finally(function() {
			$done();
		  });
	  }, 1000);
	};
	$scope.reset = function(){
	  $scope.items.length = 0;
	}
  
  $scope.onDeviceBackButton = function($event) {
		if ($event.callParentHandler) {
			pageTabber.setActiveTab(0);
		} else {
			pageTabber.setActiveTab(0);
		}
	}
});

app.controller('aroundMeCtrl', function($scope) {
  
});