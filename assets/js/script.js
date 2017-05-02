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
	
/**************** PRODUCT SELECTION EVENT *****************/
	
	var activeProductId = "prod-1";
	var activeProductIndex = activeProductId[5];
	
	$('.prod-image').click(function() {
		$('.prod-col-right > div').hide();
		$('.prod-image').removeClass('active');
		$(this).addClass('active');
		activeProductId = $(this).children('a').attr('data-target');
		$(activeProductId).fadeIn();
		activeProductIndex = activeProductId[5];
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

		$("#prod-image-"+(activeProductIndex)).addClass('active');
		$("#prod-"+(activeProductIndex)).addClass('active');
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
		
		$("#prod-image-"+(activeProductIndex)).addClass('active');
		$("#prod-"+(activeProductIndex)).addClass('active');
	});
	
	
})(jQuery, window, document);

