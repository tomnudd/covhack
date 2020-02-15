// let level = 1

// if (level === 1)
function initMap() {

  //Coventry Cathedral - Level 1
    var covCath = {lat: 52.407957, lng: -1.507509};
  
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: covCath
      });
  
    var marker = new google.maps.Marker({
      position: covCath,
      map: map,
      title: 'Level 1: Coventry Cathedral'
      });
  

    //St Mary's Guildhall - Level 2
    var stMary = {lat:  52.407703, lng: -1.507467};
  
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: covCath
      });
  
    var marker = new google.maps.Marker({
      position: stMary,
      map: map,
      title: "Level 2: St Mary's Guildhall"
    });
  
    map.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
  
    marker.addListener('click', function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
}
