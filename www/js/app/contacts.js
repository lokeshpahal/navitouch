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
			contacts.list = cons;
		},function(){
			 //alert('onError!');
		},
		options);
	},
	searchInList: function(number){
		var c = $.grep(contacts.list, function(e){ return e.phoneNumbers.value == number; });
		//alert(JSON.stringify(c))
		return c;
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
app.controller('contactListCtrl', ['$scope','$http', '$q', function($scope, $http, $q) {
  $scope.contactsDelegate = {
	configureItemScope : function(index, itemScope) {
	  if (!itemScope.item) {
		itemScope.canceler = $q.defer();        
		
		itemScope.item = {
		  title: 'Item #' + (index + 1),
		  label: '',
		  desc: '',
		  rand: Math.random()
		};
		//itemScope.item.desc = 'test';
		itemScope.item.desc = contacts.callLogList[index].number;
		//itemScope.item.label = contacts.searchInList(contacts.callLogList[index].number);
		itemScope.item.label = 'lorem';
		
	  }
	},
	calculateItemHeight : function(index) {
	  return 91;
	},
	countItems : function() {
	  return contacts.callLogList.length;
	},
	destroyItemScope: function(index, itemScope) {
	  itemScope.canceler.resolve();
	}
  };
  
  $scope.onDeviceBackButton = function($event) {
		if ($event.callParentHandler) {
			pageTabber.setActiveTab(0);
		} else {
			pageTabber.setActiveTab(0);
		}
	}
}]);

app.controller('aroundMeCtrl', function($scope) {
  
});