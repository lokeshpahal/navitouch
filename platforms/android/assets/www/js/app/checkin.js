app.controller('MyCtrl', ['$scope', function($scope) {
    $scope.locList = [1,3,4,5,6,6];
}]);


var checkin = {
    map: null,
    locationList: [],
    goBack: function(){
        window.location.href= "app.html";
    },
    getLocation: function(){
        modal.show();
        navigator.geolocation.getCurrentPosition(checkin.getLocationS, checkin.getLocationE);
    },
    getLocationS: function(position){
        modal.hide();
        $('.card-name').hide();
        checkin.displayPosition(position);
    },
    getLocationE: function(error){
        modal.hide()
    },
    displayPosition: function(pos) {
        var mylat = pos.coords.latitude;
        var mylong = pos.coords.longitude;
        var latlng = new google.maps.LatLng(mylat, mylong);
        var myOptions = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        checkin.map = new google.maps.Map(document.getElementById("checkin-map"), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: checkin.map,
            title: ''
        });

        var request = {
            location: latlng,
            radius: '500',
            query: 'restaurant'
        };

        service = new google.maps.places.PlacesService(checkin.map);
        service.nearbySearch(request, checkin.nearByS);
    },
    nearByS: function(results, status){
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                var ldata = {name:place.name,lat:place.geometry.location.A,lng:place.geometry.location.F,rating:place.rating,vicinity:place.vicinity}
                checkin.locationList.push(ldata);
                checkin.createMarker(place);
            }
        }
    },
    createMarker: function(data){
        var latlng = new google.maps.LatLng(data.geometry.location.A, data.geometry.location.F);
        //var icn_img = data.icon!=''?data.icon:'';
        var marker = new google.maps.Marker({
            position: latlng,
            map: checkin.map,
            title: '',
            //icon: icn_img
        });
    }
}


$(document).ready(function(){
    checkin.getLocation();
    $(document).on('click','.checkin-back',function(){
        checkin.goBack();
    })
});