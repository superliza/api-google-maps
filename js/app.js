function initMap() {
    var myLatLng = {lat: 19.4284700, lng: -99.1276600}; //ingresamos latitud y longitud de la ubicación
    
    //agregamos el mapa al elemento que tiene el id "map".
    //agregamos la propiedad zoom para indicarle qué tan cerca queremos que se vea
    //y también agregamos la propiedad center para indicarle dónde queremos que se ubique
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng
    });

    //agregamos una imagen para ponerla como ícono de nuestra ubicación
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    //agregamos un marcador para indicar dónde estamos ubicados
    //la propiedad position es para indicarle dónde queremos que se posicione el marcador
    //la propiedad icon es para indicarle dónde queeremos que vaya nuestro ícono en el mapa
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    /*marker.addListener('click', function () {
        infoWindow.open(map, marker);
        console.log(infoWindow);
    });*/


    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }














