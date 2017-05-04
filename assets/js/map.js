
	
	var marker;
	var locations;
	var activeLocation;
	var map;
	var infowindow;
	function initMap() {

	/***************** EDIT LOCATION COORDINATES HERE ********************/

		locations = [
			[{lat: 14.555802, lng: 121.0008928}, "G/F Telecom Plaza 3112 Sen. Gil Puyat Avenue Makati City"],
			[{lat: 15.555802, lng: 121.0008928}, "G/F Telecom Plaza 3112 Sen. Gil Puyat Avenue Makati City"],
			[{lat: 16.555802, lng: 121.0008928}, "G/F Telecom Plaza 3112 Sen. Gil Puyat Avenue Makati City"],
			[{lat: 17.555802, lng: 121.0008928}, "G/F Telecom Plaza 3112 Sen. Gil Puyat Avenue Makati City"],
			[{lat: 18.555802, lng: 121.0008928}, "G/F Telecom Plaza 3112 Sen. Gil Puyat Avenue Makati City"]
		];

		activeLocation = locations[0][0];
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 11,
			center:activeLocation,
			scrollwheel: false,
		});
		marker = new google.maps.Marker({
			position: activeLocation,
			map: map,
			icon:'images/pin.png'
		});
		infowindow = new google.maps.InfoWindow({
			content: locations[0][1]
		});
		infowindow.open(map,marker);
	}

	$('.service-area-control li').click(function(e) {
		e.preventDefault();
		$('.area-thumbnail').removeClass('active');
		var activeArea = $(this).attr('data-target');
		$(this).addClass('active');
		$('.service-area-container > div').hide();
		$(activeArea).fadeIn();

		/************ CHANGE MARKER POSITION ****************/
		activeLocation = parseInt(activeArea[6])-1;
		console.log(locations[activeLocation][0]);
		marker.setPosition(locations[activeLocation][0]);
		map.setCenter(marker.getPosition());
		infowindow.setContent(locations[activeLocation][1]);
	});


