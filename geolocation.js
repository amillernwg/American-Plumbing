let query = '';

function calculateDistance(lat1, lng1, lat2, lng2) {
  const earthRadius = 3958.8; // miles
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
}

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

document.addEventListener('DOMContentLoaded', function() {
  let geocodeUrl = '';
  
  // Get user's location by IP address
  geocodeUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCrGPT6tUIXaHggpGAGQNXEZQZnjRCeHfg`;
  fetch(geocodeUrl, {method: 'POST'})
    .then(response => response.json())
    .then(data => {
      const userLat = data.location.lat;
      const userLng = data.location.lng;
      geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLat},${userLng}&key=AIzaSyCrGPT6tUIXaHggpGAGQNXEZQZnjRCeHfg`;
      performGeocodeRequest(geocodeUrl);
    })
    .catch(error => {
      console.error('Unable to retrieve your location by IP address');
    });

  const searchButton = document.querySelector('#search-button');
  const searchInput = document.querySelector('#search-input');

  searchButton.addEventListener('click', function() {
    query = searchInput.value;

    if (!query) {
      console.error('Please enter a search query');
      return;
    }

    // If search input is not empty, use its value as query
    geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyCrGPT6tUIXaHggpGAGQNXEZQZnjRCeHfg`;
    performGeocodeRequest(geocodeUrl);
  });

  function performGeocodeRequest(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status !== 'OK') {
          throw new Error(`Geocoding failed with status ${data.status}`);
        }

        if (!data.results.length) {
          throw new Error(`No results found for query '${query}'`);
        }

        const location = data.results[0].geometry.location;
        const searchLat = location.lat;
        const searchLng = location.lng;

        console.log(`Latitude: ${searchLat}`);
        console.log(`Longitude: ${searchLng}`);

        const portfolioItems = document.querySelectorAll('.portfolio-item');

        // Reset the display of all portfolio items to 'block'
        portfolioItems.forEach(item => {
          item.style.display = 'block';
        });

        // Filter out items that are more than 100 miles away
        portfolioItems.forEach(item => {
          const itemLat = parseFloat(item.dataset.lat);
          const itemLng = parseFloat(item.dataset.lon);

          const distance = calculateDistance(searchLat, searchLng, itemLat, itemLng);

          if (distance > 100) {
            item.style.display = 'none';
          }
        });
      })
      .catch(error => console.error(error));
  }
});
