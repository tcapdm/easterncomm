$("#preloader").ready(function() {
    $(".preloader-slide").show();
    $("#preloader .single-item").slick({
        arrows: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        fade: true,
        infinite: true,
        swipeToSlide: false
    });
});

;(function($, window, document, undefined) {

    var slickTimer;

    /************* PRELOADER FUNCTIONS ****************/
    $(window).on('load', function() {
        $("#preloader").fadeOut();
        $('.hero .single-item').slick('slickGoTo', '0');

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
            $('#header').attr('style',  'background-image:url("../../images/header.png")');
            $('#header').attr('style',  'height:150px');
            $(".main-nav a").css({color: "rgba(36,87,157,1)"});
            $(".main-nav a:hover").css({color: "rgba(36,87,157,1)"});
            /**** CUSTOM NAVIGATION BAR FOR INDEX ****/
        } else {
            $('#header').attr('style',  'background-image:url("../../images/header.png")');
            $('#header').attr('style',  'height:150px');
            $(".main-nav a").css({color: "rgba(255,255,255,1)"});
            $(".main-nav a:hover").css({color: "#fff"});
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
            autoplay: false,
            dots: true,
            infinite: true,
            swipeToSlide: true
        });


        $('.hero').on('beforeChange', function(event, slick, direction){

            $(".hero-text h1").css({visibility: "hidden"}).removeClass("animated fadeInDown");
            $(".slide-line-active").removeClass("line-animation");
            $(".slide-line-left-circle").removeClass("left-circle-animation");
            $(".slide-line-right-circle").removeClass("right-circle-animation");
            clearInterval(slickTimer);
        });

        $('.hero').on('afterChange', function(slide, index){
            $(".hero-text h1").css({visibility: "visible"}).addClass("animated fadeInDown");
            $(".slide-line-active").addClass("line-animation");
            $(".slide-line-left-circle").addClass("left-circle-animation");
            $(".slide-line-right-circle").addClass("right-circle-animation");
            slickTimer = setInterval(function(){ $('.hero .single-item').slick('slickNext'); }, 3200);
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
            $("#sitemap-toggle, #sitemap-bg").css({
                top: "-200px"
            }, 100);
            $("#sitemap-links").css({
                top: "-170px"
            }, 100);
            $("#sitemap-links a").css({
                visibility: "visible"
            });
            $("#sitemap-toggle i").removeClass("fa-chevron-up");
            $("#sitemap-toggle i").addClass("fa-chevron-down");
            sitemapShow = true;
        }else {
            $("#sitemap-toggle, #sitemap-bg").css({
                top: "-30px"
            }, 100);
            $("#sitemap-links").css({
                top: "0"
            }, 100);
            $("#sitemap-links a").css({
                visibility: "hidden"
            });
            $("#sitemap-toggle i").removeClass("fa-chevron-down");
            $("#sitemap-toggle i").addClass("fa-chevron-up");
            sitemapShow = false;
        }
    });


})(jQuery, window, document);

