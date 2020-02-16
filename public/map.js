let levels = {1: ['Coventry Cathedral', {lat: 52.407957, lng: -1.507509}, 20,'<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Coventry Cathedral</h1>'+
'<div id="bodyContent">'+
'<p>The first cathedral was constructed 1095 making the cathedral over 1000 years old. It’s first full structure was largely built  in the late 14th to earth 15th century.  During the second world war the Cathedral was almost destroyed in the Coventry Blitz of November 1940, the spire of the original cathedral still stands today. Coventry cathedral is made up of three cathedrals, showing 3 different architectural styles. The first was St Mary’s (a monastic building),  the second was St Michael’s (14th century gothic church and the last is new St Michael’s built (Regional modern – built in between 1956-1962).</p>'+
'<p><b>Challenge 1 - Treature Hunt: Meet Your Match </b></p>'+
'<p> There are 5 QR codes scattered around the cathedral. You are challenged to find them in the quickest time possible without being disruptive (if you are disruptive you are disqualified!). Each QR code will tell a story and you will have to solve the mystery. Upon completion you will be matched with 2 other challengers, this will form your group!</p>'+
'<p>Read more about Coventry Catherdral\'s <a href="http://www.coventrycathedral.org.uk/wpsite/our-history/">'+
'history</a> here!</p>'+
'</div>'+
'</div>'], 
2: ['St Mary\'s Guildhall', {lat:  52.407703, lng: -1.507467}, 18, '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">St Mary\'s Guildhall</h1>'+
'<div id="bodyContent">'+
'<p>St Mary’s Guildhall was built during medieval times and was used a merchant union. This was the place where Mary Queen of Scots sought refuge for a while during the Rising of the North. It is believed that William Shakespeare preformed here too.</p>'+
'<p><b>Challenge 2 - Round Table Talk: Discussion, Disagreement and Judgement </b></p>'+
'<p> You and your team are challenged to shortlist and pick a local Coventry Charity to fundraise for within 72 hours of completing the first challenge. You must send an email to your chosen charity!</p>'+
'<p>Read more about St Mary\'s <a href="https://www.stmarysguildhall.co.uk/history">'+
'history</a> here!</p>'+
'</div>'+
'</div>'],
3: ['Lady Godiva', {lat: 52.408043, lng: -1.510382}, 17, '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Lady Godiva</h1>'+
'<div id="bodyContent">'+
'<p>Lady Godiva, previously known as Godgifu (in old English) is remembered for a legend with dating back to the 13th century. Legends say that Lady Godiva used to ride her horse through the streets of Coventry naked (covered only in her long hair). She did this in order to gain remission of the taxation her husband imposed on his tenants. The phrase peeping Tom comes from these originates from this legend.</p>'+
'<p><b>Challenge 3 - Peeping Tom: Meet your Lady Godiva </b></p>'+
'<p> It is time to meet your charity. You and your team must volunteer at your chosen charity for 2 days each. In this time, you must learn about the motivations of your charity and what their values are (HINT: you can learn a lot through observations).</p>'+
'<p>Read more about Lady Godiva\'s <a href="https://www.coventry.gov.uk/ladygodiva">'+
'history</a> here!</p>'+
'</div>'+
'</div>'],
4: ['War Memorial', {lat: 52.393820, lng: -1.518660}, 15,'<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">War Memorial</h1>'+
'<div id="bodyContent">'+
'<p>The Memorial Park is a tribute to the Coventry fallen soldiers who died in World War I. It was built in 1927 and has around 800 memorial trees dedicated to those who lost their lives in conflict. Within the park there is a room called the Chamber of Silence.</p>'+
'<p><b>Challenge 4 – shhh! : SILENCE IN THE CHAMBER</b></p>'+
'<p> This is a sponsored silence; it is time to get creative! Your team is challenged to plan both the initial and final meeting for the fundraiser in total SILENCE at one of our sponsored locations. You have a week to plan the fundraiser and you must submit your plan to our online platform.</p>'+
'<p>Read more about War Memorial\'s <a href="https://www.coventry.gov.uk/warmemorialpark">'+
'history</a> here!</p>'+
'</div>'+
'</div>'],
5: ['Warwick Arts Centre', {lat: 52.380007, lng: -1.561487}, 13, '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Warwick Arts Centre</h1>'+
'<div id="bodyContent">'+
'<p>Warwick Arts Centre is a multivenue arts complex, which was built in 1974. It is the second largest arts venue in the UK and is the biggest in arts venue in the Midlands. It is an important resource bring in audience from in the region, nationally and internationally.</p>'+
'<p><b>Challenge 5: Painting the Bigger Picture: Break a Leg</b></p>'+
'<p> This is the big day! It is time to fundraise for you chosen charity!</p>'+
'<p>ongratulations and break a leg!</p>'+
'<p>Read more about Warwick Arts Centre\'s <a href="https://www.warwickartscentre.co.uk/">'+
'history</a> here!</p>'+
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
  const level = 5;
  initMap(level);
}
