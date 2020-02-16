let levels = {1: ['Coventry Cathedral', {lat: 52.407957, lng: -1.507509}, 20],
2: ['St Mary\'s Guildhall', {lat:  52.407703, lng: -1.507467}, 18],
3: ['Lady Godiva', {lat: 52.408043, lng: -1.510382}, 17],
4: ['War Memorial', {lat: 52.393820, lng: -1.518660}, 15],
5: ['Warwick Arts Centre', {lat: 52.380007, lng: -1.561487}, 13]}

function initMap(id) {
  if (id) {
    let name = levels[id][0];
    let center = levels[id][1];
    let zoom = levels[id][2];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: center
      });

    var marker = new google.maps.Marker({
      position: center,
      map: map,
      title: `Level ${id.toString()}: ${name}$`
      });

      map.addListener('center_changed', function() {
        window.setTimeout(function() {
          map.panTo(marker.getPosition());
        }, 3000);
      });

      marker.addListener('click', function() {
        map.setZoom(zoom);
        map.setCenter(marker.getPosition());
      });
  }
}

window.onload = function() {
  const level = 2;
  initMap(level);
}
