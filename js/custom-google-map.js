
// var button = document.getElementById('#btn-fullscreen');
// button.addEventListener(outer, "click", function() {
//   $('#map').requestFullscreen();
//   return false;
// });

function initMap() {
  var marker1 = {lat: 53.914722, lng: 27.503051};
  var markerCoord = [
  {lat: 53.914722, lng: 27.503051},
  {lat: 53.95351, lng: 27.416489},
  {lat: 53.954533, lng: 27.439874},
  {lat: 53.954433, lng: 27.429874},
  {lat: 53.90955, lng: 27.40791},
  {lat: 53.929083, lng: 27.421708}
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 53.943533, lng: 27.439874},
    disableDefaultUI: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  });
  for (var i = 0, l = markerCoord.length; i < l; i++) {
    createMarkers(markerCoord[i]);
  }
  function createMarkers() {
    var marker = new google.maps.Marker({
      position: markerCoord[i],
      map: map
    });
  };

};