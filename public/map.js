let levels = {1: ['Coventry Cathedral', {lat: 52.407957, lng: -1.507509}, 20,'<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Coventry Cathedral</h1>'+
'<div id="bodyContent">'+
'<p>The first cathedral was constructed 1095 making the cathedral over 1000 years old. It’s first full structure was largely built  in the late 14th to earth 15th century.  During the second world war the Cathedral was almost destroyed in the Coventry Blitz of November 1940, the spire of the original cathedral still stands today. Coventry cathedral is made up of three cathedrals, showing 3 different architectural styles. The first was St Mary’s (a monastic building),  the second was St Michael’s (14th century gothic church and the last is new St Michael’s built (Regional modern – built in between 1956-1962).</p>'+
'<p><b>Challenge: </b> You will be doing a treasure hunt, with a goal to meet another challenger!</p>'+
'<p>Read more: Coventry Cathedral\'s <a href="https://app.slack.com/client/TSL5FDQG3/GU23NPR5K/thread/CSMF1RM25-1581806284.056600">'+
'wikipedia.</a> </p>'+
'</div>'+
'</div>'], 
2: ['St Mary\'s Guildhall', {lat:  52.407703, lng: -1.507467}, 18, '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
'<div id="bodyContent">'+
'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
'sandstone rock formation in the southern part of the '+
'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
'south west of the nearest large town, Alice Springs; 450&#160;km '+
'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
'features of the Uluru - Kata Tjuta National Park. Uluru is '+
'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
'Aboriginal people of the area. It has many springs, waterholes, '+
'rock caves and ancient paintings. Uluru is listed as a World '+
'Heritage Site.</p>'+
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
'(last visited June 22, 2009).</p>'+
'</div>'+
'</div>'],
3: ['Lady Godiva', {lat: 52.408043, lng: -1.510382}, 17, '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
'<div id="bodyContent">'+
'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
'sandstone rock formation in the southern part of the '+
'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
'south west of the nearest large town, Alice Springs; 450&#160;km '+
'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
'features of the Uluru - Kata Tjuta National Park. Uluru is '+
'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
'Aboriginal people of the area. It has many springs, waterholes, '+
'rock caves and ancient paintings. Uluru is listed as a World '+
'Heritage Site.</p>'+
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
'(last visited June 22, 2009).</p>'+
'</div>'+
'</div>'],
4: ['War Memorial', {lat: 52.393820, lng: -1.518660}, 15,'<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
'<div id="bodyContent">'+
'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
'sandstone rock formation in the southern part of the '+
'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
'south west of the nearest large town, Alice Springs; 450&#160;km '+
'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
'features of the Uluru - Kata Tjuta National Park. Uluru is '+
'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
'Aboriginal people of the area. It has many springs, waterholes, '+
'rock caves and ancient paintings. Uluru is listed as a World '+
'Heritage Site.</p>'+
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
'(last visited June 22, 2009).</p>'+
'</div>'+
'</div>'],
5: ['Warwick Arts Centre', {lat: 52.380007, lng: -1.561487}, 13, '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
'<div id="bodyContent">'+
'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
'sandstone rock formation in the southern part of the '+
'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
'south west of the nearest large town, Alice Springs; 450&#160;km '+
'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
'features of the Uluru - Kata Tjuta National Park. Uluru is '+
'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
'Aboriginal people of the area. It has many springs, waterholes, '+
'rock caves and ancient paintings. Uluru is listed as a World '+
'Heritage Site.</p>'+
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
'(last visited June 22, 2009).</p>'+
'</div>'+
'</div>']}

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

      var infowindow = new google.maps.InfoWindow({
        content: levels[id][3]
      });

      map.addListener('center_changed', function() {
        window.setTimeout(function() {
          map.panTo(marker.getPosition());
        }, 3000);
      });

      marker.addListener('click', function() {
        map.setZoom(zoom);
        map.setCenter(marker.getPosition());
        infowindow.open(map, marker);
      });
  }
}

window.onload = function() {
  const level = 1;
  initMap(level);
}
