navigator.geolocation.getCurrentPosition(function(position) {
    let latLong = new google.maps.LatLong(position.coords.latitude, position.coords.longitude)

    let myOptions = {
        zoom: 8,
        center: latLong,
        mapTypeId: google.maps.mapTypeId.TERRAIN,
        disableDefaultUI: true
    }

    let map = new google.maps.Map(document.querySelector('canvas#map_canvas'), myOptions)
})