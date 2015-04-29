var contacts = {
	list: [],
	callLogList: [],
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
			//alert('error');
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
		$http.get('https://baconipsum.com/api/?type=meat-and-filler&sentences=1', {timeout: itemScope.canceler.promise})
		.success(function(data){
			itemScope.item.desc = data[0]; itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'})
		.error(function(){
			itemScope.item.desc = 'No bacon lorem ipsum'; itemScope.item.label = 'No bacon'
		});
	  }
	},
	calculateItemHeight : function(index) {
	  return 91;
	},
	countItems : function() {
	  return 10000000;
	},
	destroyItemScope: function(index, itemScope) {
	  itemScope.canceler.resolve();
	}
  };
  
  ons.createPopover('popover.html').then(function(popover) {
	$scope.popover = popover;
  });
  
  $scope.show = function(e) {
	$scope.popover.show(e);
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
  ons.createPopover('popover.html').then(function(popover) {
    $scope.popover = popover;
  });
  
  $scope.show = function(e) {
    $scope.popover.show(e);
  };
});