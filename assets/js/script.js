$("#preloader .single-item").slick({
	arrows: false,
	autoplay: true,
	dots: false,
	autoplaySpeed: 2000,
	fade: true,
	infinite: true,
	swipeToSlide: false
});

;(function($, window, document, undefined) {
	
	
	/************* PRELOADER FUNCTIONS ****************/
	


	$(window).on('load', function() {
		$("#preloader").fadeOut();
	});
			
	
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
        $("#mySidenav").animate({right:  "0"});
        $("body").animate({left: "-230px"});
        $('#main, footer').css({opacity: '0.5'});
        $('#header').css({background: 'none'});
    });

    $('#closeNav').click(function(e){
		e.preventDefault();
        $("#mySidenav").animate({right: "-230px"});
        $("body").animate({left: "0"});
        $('#main, footer').css({opacity: '1'});
        $('#header').css({background: ''});
    });

    $('#main,footer').click(function(){
        $("#mySidenav").animate({right: "-230px"});
        $("body").animate({left: "0"});
        $('#main, footer').css({opacity: '1'});
    });
	
/**************** HERO SLIDER EVENTS *****************/

	$('.hero').ready( function(){
        $('.hero .single-item').slick({
            arrows: false,
            autoplay: true,
            dots: true,
            autoplaySpeed: 3000,
            infinite: true,
			swipeToSlide: true

        });
		if($(window).width() > 993) {
			$(".hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
			$(".hero-overlay").css({visibility: "visible"}).addClass("animated slideInRight");
		} else {
			$(".hero-textbox").css({visibility: "visible"});
		}

		$('.hero').on('beforeChange', function(event, slick, direction){

			if($(window).width() > 993) {
				$(".hero-textbox").css({visibility: "hidden"}).removeClass("animated fadeInLeft");
				$(".hero-overlay").css({visibility: "hidden"}).removeClass("animated slideInRight");
			} else {
				$(".hero-textbox").css({visibility: "hidden"}).removeClass("animated fadeInLeft");
			}
		});

		$(window).resize(function () {
			if($(this).width() <= 993) {
				$(".hero-overlay").removeClass("animated slideInRight");
				$(".hero-overlay").css({visibility: "visible"});

			} else {
				$(".hero-overlay").addClass("animated slideInRight");
			}
		});

		$('.hero').on('afterChange', function(event, slick, direction){
			if($(window).width() > 993) {
				$(".slick-active .hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
				$(".slick-active .hero-overlay").css({visibility: "visible"}).addClass("animated slideInRight");
			} else {
				$(".slick-active .hero-textbox").css({visibility: "visible"}).addClass("animated fadeInLeft");
			}
		});
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
		if($(window).width() <= 993) {
			$('html, body').animate({
				scrollTop: $(".prod-col-right").offset().top
			}, 500);
		}
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
	
	/**************************** FOOTER SITEMAP TOGGLE *******/
	var sitemapShow = false;
	$("#sitemap-toggle").click(function(e) {
		e.preventDefault();
		if(!sitemapShow) {
			$("#sitemap-toggle, #sitemap-bg").animate({
				top: "-180px"
			}, 100);
			$("#sitemap-links").stop().animate({
				top: "-150px"
			}, 100);
			$("#sitemap-toggle i").removeClass("fa-chevron-up");
			$("#sitemap-toggle i").addClass("fa-chevron-down");
			sitemapShow = true;
		}else {
			$("#sitemap-toggle, #sitemap-bg").animate({
				top: "-30px"
			}, 100);
			$("#sitemap-links").stop().animate({
				top: "0"
			}, 100);
			$("#sitemap-toggle i").removeClass("fa-chevron-down");
			$("#sitemap-toggle i").addClass("fa-chevron-up");
			sitemapShow = false;
		}
	});
	

})(jQuery, window, document);

