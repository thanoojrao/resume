function initMap() {
    const location = { lat: 18.288691, lng:  79.473219 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }