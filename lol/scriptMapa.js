function iniciarMap(){
    var coord = {lat:-33.0338237 ,lng: -71.533517};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14.5,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }