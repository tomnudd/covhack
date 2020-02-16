
var coventryCathedral = {lat: 52.407957, lng: -1.507509};
var stMary = {lat:  52.407703, lng: -1.507467};
var ladyGodiva = {lat: 52.408043, lng: -1.510382};
var warMemorial = {lat: 52.393820, lng: -1.518660};
var warwickArtsCentre = {lat: 52.380007, lng: -1.561487};

let level = 1;

if (level === 1) {
  function initMap() {
 
    //Level 1: Coventry Cathedral
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: coventryCathedral
      });
    
    var marker = new google.maps.Marker({
      position: coventryCathedral,
      map: map,
      title: 'Level 1: Coventry Cathedral'
      });  

      map.addListener('center_changed', function() {
        window.setTimeout(function() {
          map.panTo(marker.getPosition());
        }, 3000);
      });
    
      marker.addListener('click', function() {
        map.setZoom(20);
        map.setCenter(marker.getPosition());
      });
  }
} else if (level === 2) {
  function initMap() {

     //Level 2: St Mary's Guildhall
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 18,
         center: coventryCathedral
       });
   
     var marker = new google.maps.Marker({
       position: stMary,
       map: map,
       title: "Level 2: St Mary's Guildhall"
     });

     map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
  
    marker.addListener('click', function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
  }
} else if (level === 3){
  function initMap() {

    //Level 3: Lady Godiva
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coventryCathedral
      });
  
    var marker = new google.maps.Marker({
      position: ladyGodiva,
      map: map,
      title: "Level 3: Lady Godiva"
    });

    map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
  
    marker.addListener('click', function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
  }
} else if (level === 4) {
  function initMap() {

    //Level 4: War Memorial
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coventryCathedral
      });
  
    var marker = new google.maps.Marker({
      position: warMemorial,
      map: map,
      title: "Level 4: War Memorial"
    });

    map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
  
    marker.addListener('click', function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
  }
} else if (level === 5) {
  function initMap() {

    //Level 5: Warwick Arts Centre 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: coventryCathedral
      });
  
    var marker = new google.maps.Marker({
      position: warwickArtsCentre,
      map: map,
      title: "Level 5: Warwick Arts Centre"
    });

    map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
  
    marker.addListener('click', function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
  }
}
  
  
    


  
   
