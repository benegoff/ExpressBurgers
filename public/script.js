function initMap(){
    var latlng = {lat: 34.0352038, lng: -118.5362598};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: latlng
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
}
