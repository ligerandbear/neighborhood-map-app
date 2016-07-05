var map;
var markers = [
	{
		title: "Phoenix Convention Center - North Building",
		lat: 33.4491162,
		lng: -112.0684274
	},
	{
		title: "Phoenix Convention Center - West Building",
		lat: 33.4497326,
		lng: -112.072208
	},
	{
		title: "Hyatt Regency",
		lat: 33.4497389,
		lng: -112.0718149
	},
	{
		title: "Collier Center - Parking",
		lat: 33.44822,
		lng: -112.0712592
	},
	{
		title: "Tommy Pastrami - Lunch Option",
		lat: 33.4474076,
		lng: -112.0708112
	}
];

 function initMap() {
         // var mapDiv = document.getElementById('map');
		 
          //map = new google.maps.Map(mapDiv, 
		  map = new google.maps.Map(document.getElementById('map'),
		  {
              center: {lat: 33.4491162, lng: -112.0684274},
              zoom: 17,
			  disableDefaultUI: true
          });
        }

function initMapLoadError() {
    alert('Error initializing the Google Maps API');
    console.log('Error initializing the Google Maps API');
}
/* 
function initMarkers() {
	for(var i=0; var marker; i++;){
		
	}
} */