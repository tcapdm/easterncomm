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
	
/**************** NAVBAR COLOR ************************/

   $(document).scroll(function () {

	   var scrollPosition = $(window).scrollTop();
	   var elementPosition = $(".hero").height()/2;
	   if(scrollPosition > elementPosition) {
		   $(".navbar").css({background: "#222"});
		} else {
		   $('.navbar').css({background: "none"});
	   	}
	});

	
/**************** HERO SLIDER EVENTS *****************/
	
	$('.single-item').slick({
		arrows: false,
		autoplay: true,
		dots: true,
		autoplaySpeed: 3000,
		infinite: true,
		
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					swipeToSlide: true
				}
			}
		]
	});

	$('#hero-slider').ready( function(event, slick, direction){
		if($(window).width() > 993) {
			$(".hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
			$(".hero-overlay").css({visibility: "visible"}).addClass("animated slideInRight");
		} else {
			$(".hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
			$(".hero-overlay").css({visibility: "hidden"});
		}
	});

	
	$('#hero-slider').on('beforeChange', function(event, slick, direction){
		$(".hero-textbox").css({visibility: "hidden"}).removeClass("animated fadeInLeft");
		$(".hero-overlay").css({visibility: "hidden"}).removeClass("animated slideInRight");
	});
	
	$(window).resize(function () {
		if($(this).width() <= 993) {
			$(".hero-overlay").css({visibility: "hidden"});
		} else {
			$(".hero-overlay").css({visibility: "visible"});
		}
	});
	
	$('#hero-slider').on('afterChange', function(event, slick, direction){
		if($(window).width() > 993) {
			$(".slick-active .hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
			$(".slick-active .hero-overlay").css({visibility: "visible"}).addClass("animated slideInRight");
		} else {
			$(".slick-active .hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
			$(".slick-active .hero-overlay").css({visibility: "hidden"});
		}
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


})(jQuery, window, document);



