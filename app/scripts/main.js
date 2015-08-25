/* jshint smarttabs:true, undef:true */
/* global $, google */

// Google Maps
/*eslint-disable */
function initMap() {
	'use strict';
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -22.9112728, lng: -43.4484478}, //Río LAT, LNG
		zoom: 8
	});
}
/*eslint-enable */

// listItemsTemplate
function hotelTemplate(ObjectHotel) {
	'use strict';
	var templateHotel = '<li class="results-list-items">';
	templateHotel += '<div class="img-box"><img src="images/hotel.jpg" height="95" width="95" alt="hotel"></div><!-- img-box -->';
	templateHotel += '<div class="data-box"><div class="col"><h4>' + ObjectHotel.name + '</h4>';
	templateHotel += '<ul class="stars">';
	for (var i = 0; i < ObjectHotel.stars; i++) {
		templateHotel += '<li><i class="fa fa-star"></i></li>';
	}
	templateHotel += '</ul><!-- estrellas -->';
	templateHotel += '<p>' + ObjectHotel.adress + '</p>';
	templateHotel += '<a href="#">Ver mapa</a></div>';
	templateHotel += '<div class="col"><em><i class="fa fa-comment"></i> ' + ObjectHotel.description + '</em>';
	templateHotel += '<span>' + ObjectHotel.rating + ' puntos</span>';
	templateHotel += '<a href="#" title="' + ObjectHotel.comments + ' comentarios" class="comments">' + ObjectHotel.comments + ' comentarios</a></div></div><!-- data-box -->';
	templateHotel += '<div class="confirm-box"><small>desde</small><p><span>U$S</span> <em class="price">' + ObjectHotel.price + '</em></p>';
	templateHotel += '<button class="btn btn_primary" available-from="' + ObjectHotel.availability.from + '" available-to="' + ObjectHotel.availability.to + '">Ver disponibilidad</button></div></li><!-- Template: results-list-items -->';
	return templateHotel;
}

// load data from json.
function loadHotelsModel(listViewContent) {
	'use strict';
	$.getJSON('model.json', function(data) {
		$.each(data, function(key, val) {
			$.each(val, function(innerKey, innerValue) {
				listViewContent.append(hotelTemplate(innerValue));
			});
		});
		// definimos el click en el item
		$('#results-listView .btn').click(function(event) {
			event.preventDefault();
			var from = $(this).attr('available-from'),
			to = $(this).attr('available-to');
			var message = 'Disponible desde ' + from + ' hasta ' + to;
			/*eslint-disable */
			console.log(message);
			alert(message);
			/*eslint-enable */
		});
	});
}

// jquery ready
$(document).ready(function() {
	'use strict';
	loadHotelsModel($('#results-listView'));

});
