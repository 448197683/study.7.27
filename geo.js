const geoSpan = document.querySelector("#geoSpan")

const mylocation = navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  geoSpan.innerHTML = `My location is lat(${lat}°) lng(${lng}°)`
}
function onGeoError(error) {
}