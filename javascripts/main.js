$(document).ready(function(){
	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(37.806476, 23.977006),
			zoom: 16
		};
		var map = new google.maps.Map(document.getElementById("container-for-google-maps"), mapOptions);
		var marker = new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			title: 'Our Office Address - Click to Zoom'
		});
		
               google.maps.event.addListener(marker, 'click', function(){
               		map.setZoom(18);
               		map.setCenter(marker.getPosition());
               });
	};
	
	google.maps.event.addDomListener(window, 'load', initialize);

});