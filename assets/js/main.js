options = {
  elements: ['#hero', "#menu", "#nav-content", "#main"]
}
const swup = new Swup(options);

swup.on('contentReplaced', function (e) {
  var mapElement = document.getElementById("map");
  if (mapElement) {
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-157.858337, 21.306944], // starting position [lng, lat]
      zoom: 11 // starting zoom
    });
  }
});

swup.on('clickLink', function(e) {
  var navContent = $('#nav-content');
  var pathname = e.delegateTarget.pathname.replace("/",'');
  if (pathname === 'group.html') {
    navContent.addClass('animate-to-group');
  } else if (pathname === 'place.html') {
    navContent.addClass('animate-to-place');
  } else {
    navContent.addClass('animate-to-profile');
  }
});
