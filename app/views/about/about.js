'use strict';

angular.module('SalaAppesiRouter').controller('AboutCtrl', ['$scope', 'uiGmapGoogleMapApi', function($scope,uiGmapGoogleMapApi) {
    var appesiMarker= {
        id: Date.now(),
        coords: {
            latitude: 45.221330,
            longitude: 10.416779
        },
        options:{
            label: {
                text: "Sala d'Arme dell'Appeso",
                fontSize: "24"

            }
        }
    };
    $scope.map = {
        center: {latitude: 45.221330, longitude: 10.416779},
        zoom: 16,
        markers: [appesiMarker],
        events: {
            click: function (map, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat(), lon = e.latLng.lng();
                var marker = {
                    id: Date.now(),
                    coords: {
                        latitude: lat,
                        longitude: lon
                    }
                };
                $scope.map.markers.push(marker);
                console.log($scope.map.markers);
                $scope.$apply();
            }
        }
    };
    uiGmapGoogleMapApi.then(function (maps) {
        console.log("Maps: ", maps);

    });
}]);