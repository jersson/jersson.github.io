function initMap() {
  const maxI = 50, rad = 24, opac = .6;
  const url = 'https://us-central1-virtual-bonito-170805.cloudfunctions.net/covidLocations';
  document.getElementById('map').style.display = 'block';
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: -10.151093, lng: -75.311132},
    mapTypeId: 'roadmap'
  });

  fetch(url).then(function(response) {
    response.json().then(function(result) {

      let locations = [];

      result.forEach(location => {

        let factor = 3 * location.confirmed;
        let i = 0;

        let image = './images/icons8-coronavirus-16.png';

        while (i < factor) {
          locations.push(new google.maps.LatLng(location.latitude, location.longitude));
          
          let contentString = `<div class="subject-2"><b>${location.title}</b><br/>Confirmados: <b>${location.confirmed}(${location.change})</b></div>`;
          let infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          let marker = new google.maps.Marker({
            position: {lat: location.latitude, lng: location.longitude},
            map: map,
            icon: image
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

          i++;
        }
      });

      let heatmap = new google.maps.visualization.HeatmapLayer({
        data: locations,
        map: map,
        maxIntensity: maxI,
        radius: rad,
        opacity: opac
      });
    });
  });
}
