// Método assíncrono
navigator.geolocation.getCurrentPosition(function(position) {
  let latLng = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  ); //usa as coordenadas do dispositivo como parametros

  let mapOptions = {
    zoom: 8,
    center: latLng,
    mapTypeId: "roadmap",
    disableDefaultUI: true
  };

  // coloca os dados da localização no mapa do Google (API Google Maps)
  let map = new google.maps.Map(
    document.querySelector("canvas#map_canvas"),
    mapOptions
  );
});

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
