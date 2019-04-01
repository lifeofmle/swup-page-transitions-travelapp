options = {
  elements: ['#hero', "#menu", "#nav-content", "#main"],
  debugMode: true
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
  var profileImage = $('.profile-photo.profile-0');
  var pathname = e.delegateTarget.pathname.replace("/",'');
  console.log('Going to: ', pathname, profileImage);
  if (pathname === 'group.html') {
    profileImage.addClass('group');
  } else if (pathname === 'place.html') {
    profileImage.addClass('place');
  } else {
    profileImage.addClass('profile');
  }
})

swup.on('animationInStart', function(e) {
  console.log('Starting enter...', e, window.location.href);
});

swup.on('animationInDone', function(e) {
  console.log('Finish enter...', e, window.location.href);
});

swup.on('animationOutDone', function(e) {
  console.log('Finish out...', e, window.location.href);
});

swup.on('animationOutStart', function(e) {
  console.log('Starting out...', e, window.location.href);
});

