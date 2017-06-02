var image1 = {
    url: 'images/iconPlant.png',
    anchor: new google.maps.Point(18, 18)
};
var image2 = {
    url: 'images/iconSpar.png',
    anchor: new google.maps.Point(18, 18)
};
var image3 = {
    url: 'images/iconRig.png',
    anchor: new google.maps.Point(18, 18)

};
var LocationData = [
    [24.126208, -97.741941, "Ojeda Processing Plant ", image1, '<a href="#Ojeda" target="_self">More Info</a>'],
    [25.685376, -94.909758, "Arana Spar", image2, '<a href="#Arana" target="_self">More Info</a>'],
	[22.277888, -94.787785, "Quiroga Rig ", image3, '<a href="#Quiroga" target="_self">More Info</a>'],
	[23.272791, -92.991155, "Orizba Rig ", image3, '<a href="#Orizba" target="_self">More Info</a>']
];
var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 24.126208, lng: -97.741941}
  });
    for (var i in LocationData)
    {
        var p = LocationData[i];
        var latlng = new google.maps.LatLng(p[0], p[1]); 
        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: p[3],
            title: '<div class="infoWin">'+'<h5>' + p[2] + '</h5><p>' + p[0] + '° Latitude <br>' + p[1] + '° Longitude</p>'+'<small>'+p[4]+'</small>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(this.title);
            infowindow.open(map, this);
        });
    }
}


function calcRoute() {
    var start = document.getElementById('start').value;
    var startComma = start.indexOf(',');
    var startLat = parseFloat(start.substring(0, startComma));
    var startLong = parseFloat(start.substring(startComma + 1, start.length));
    var startPoint = new google.maps.LatLng(startLat, startLong);

    var end = document.getElementById('end').value;
    var endComma = end.indexOf(',');
    var endLat = parseFloat(end.substring(0, endComma));
    var endLong = parseFloat(end.substring(endComma + 1, end.length));
    var endPoint = new google.maps.LatLng(endLat, endLong);

    //calculates distance between two points in km's
    function calcDistance(){
        return Math.round(google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint) / 1000);
    }
    document.getElementById("calcDistanceOutput").innerHTML = (calcDistance()) + ' km';
	 var route = [startPoint, endPoint];
    var polyline = new google.maps.Polyline({
        path: route,
        strokeColor: "#ef3e36"
    });
    polyline.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);