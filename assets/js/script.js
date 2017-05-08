;(function($, window, document, undefined) {
	
/************** NAVBAR HIDE ON SCROLL **********/
	
	var $window = $(window),
		$document = $(document),
		docHeight = $document.innerHeight(),
		winWidth = $window.innerWidth(),
		winHeight = $window.innerHeight(),
		hh = $('#header').innerHeight();

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
			$('#header').css({top: '-'+hh+'px'});
		} else {
			// Scroll Up
			if(st + winHeight < docHeight) {
				$('#header').css({top: 0});
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
	   if(scrollPosition > 100) {
		   $("#header").css({background: "#222"});
		} else {
		   $('#header').css({background: "none"});
	   	}
	});
    
/**************** SIDENAV TOGGLE ************************/
    $('#openNav').click(function(){
        $("#mySidenav").css({right:  "0"});
        $("#main").css({marginLeft: "-250px"});
        $('#main, footer').css({opacity: '0.5'});
        $('#header').css({background: 'none'});
    });

    $('#closeNav').click(function(){
        $("#mySidenav").css({right: "-250px"});
        $("main").css({marginLeft: "0"});
        $('#main, footer').css({opacity: '1'});
        $('#header').css({background: ''});
    });

    $('#main,footer').click(function(){
        $("#mySidenav").css({right: "-250px"});
        $("main").css({marginLeft: "0"});
        $('#main, footer').css({opacity: '1'});
    });
	
/**************** HERO SLIDER EVENTS *****************/
	
	

	$('#hero-slider').ready( function(event, slick, direction){
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

