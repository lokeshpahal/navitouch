app.controller('MyCtrl', ['$scope', function($scope) {
    //$scope.locList = [1,3,4,5,6,6];
}]);


var checkin = {
    map: null,
    locationList: [],
    checkinIndex: null,
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
            query: 'places'
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
                checkin.createList(place);
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
    },
    createList: function(data){
        var html ='<ons-list-item class="list__item ons-list-item-inner place-item">';
        html += '<div class="prop-desc"><ons-icon icon="fa-map-marker" class="ons-icon fa-map-marker fa fa-lg"></ons-icon>';
        html += data.name;
        html += '</div></ons-list-item>';
        $('.list').append(html);
    }
}


$(document).ready(function(){
    checkin.getLocation();
    $(document).on('click','.checkin-cancel',function(){
        myNavigator.popPage()
    })

    $(document).on('click','.place-item',function(){
        var index = $(this).index();
        checkin.checkinIndex = index
        myNavigator.pushPage('page1.html', { animation : 'lift' } );
        myNavigator.on("postpush", function(){
            var checkinDesc = 'Hey, I am here @'+checkin.locationList[index].name+' ...';
            $('.checkin-desc').html(checkinDesc);
        });
    });

    $(document).on('click','.checkin-back',function(){
        checkin.goBack();
    });
});