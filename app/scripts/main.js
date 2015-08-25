/* jshint smarttabs:true */
/* global $, google */

// Google Maps
function initMap() {
	'use strict';
	var map;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -22.9112728, lng: -43.4484478}, //Río LAT, LNG
    	zoom: 8
	});
}