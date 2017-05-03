;(function($, window, document, undefined) {
	
/************** NAVBAR HIDE ON SCROLL **********/
	
	var $window = $(window),
		$document = $(document),
		docHeight = $document.innerHeight(),
		winWidth = $window.innerWidth(),
		winHeight = $window.innerHeight(),
		hh = $('.navbar').innerHeight();

	var didScroll;
	var lastScrollTop = 0;
	var delta = 0;

	setInterval(function() {
		if (didScroll) {
			
			hasScrolled();
			didScroll = false;
		}
	});

	function hasScrolled() {
		var st = $(this).scrollTop();
		
		if(Math.abs(lastScrollTop - st) <= delta)
			return;

		if (st > lastScrollTop && st > hh){
			// Scroll Down
			$('.navbar').css({top: '-'+hh+'px'});
		} else {
			// Scroll Up
			if(st + winHeight < docHeight) {
				$('.navbar').css({top: 0});
			}
		}
		lastScrollTop = st;
	}

	$(window).scroll(function(event){
		didScroll = true;
	});
	
	
/**************** HERO SLIDER *****************/
	$('.single-item').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});
	
	
	
	
	
	
	
	
/**************** PRODUCT SELECTION EVENT *****************/
	
	var activeProductId = "#prod-1";
	var activeProductIndex = parseInt(activeProductId[6]);
	
	$('.prod-image').click(function(e) {
		e.preventDefault();
		$('.prod-col-right > div').hide();
		$('.prod-image').removeClass('active');
		$(this).addClass('active');
		activeProductId = $(this).find('a').attr('data-target');
		$(activeProductId).fadeIn();
		activeProductIndex = parseInt(activeProductId[6]);
	});
	
	$("#prod-prev").click(function(e) {
		e.preventDefault();
		$('.prod-col-right > div').hide();
		$('.prod-image').removeClass('active');
		if(activeProductIndex == 1) {
			activeProductIndex = $('.prod-image').length;
		} else {
			activeProductIndex--;
		}
		activeProductId = "#prod-" + activeProductIndex.toString();
		$("#prod-image-"+(activeProductIndex)).addClass('active');
		activeProductId = "#prod-" + activeProductIndex.toString();
		$(activeProductId).fadeIn();

	});
	
	$("#prod-next").click(function(e) {
		e.preventDefault();
		$('.prod-col-right > div').hide();
		$('.prod-image').removeClass('active');
		if(activeProductIndex == $('.prod-image').length) {
			activeProductIndex = 1;
		} else {
			activeProductIndex++;
		}
		activeProductId = "#prod-" + activeProductIndex.toString();
		$("#prod-image-"+(activeProductIndex)).addClass('active');
		activeProductId = "#prod-" + activeProductIndex.toString();
		$(activeProductId).fadeIn();
	});
	
/*********************** SERVICE AREAS SELECTION SCRIPTS / GOOGLE MAP ********************/

	$('.area-thumbnail').click(function(e) {
		e.preventDefault();
		$('.area-thumbnail').removeClass('active');
		var activeArea = $(this).children('a').attr('data-target');
		$('.service-area-container > div').hide();
		$(activeArea).fadeIn();
		
		/************ CHANGE MARKER POSITION ****************/
		activeLocation = parseInt(activeArea[6])-1;
		marker.setPosition(locations[activeLocation]);
		map.setCenter(marker.getPosition());
	});


})(jQuery, window, document);



