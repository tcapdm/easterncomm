$(document).ready(function(){
    // add class to form inputs
    $(".form-group .form-control").focus(function(){
        $(this).siblings().addClass('focus');
    });

    // add active state style in faq list
    $(".accordion li button").click(function(){
        $(this).toggleClass('txtB');
        $(this).parent('li').toggleClass('borderB');
    });

    $(".col-md-12.body .accordion li button").click(function(){
        $(this).parent().parent().toggleClass('border-bottom');
    });

    // show ulnav-tabs on click
    $(".menu-button").click(function(){
        $(this).siblings('.nav-tabs').toggleClass("show-nav");
    });

    // remove class show-nav
    $("ul#contact-nav>li>a").click(function(){
        $(this).parent('li').parent('ul.show-nav').removeClass("show-nav");
    });


    // Create next/prev buttons & Add setup classes
    $("#tab5 .col-md-12.body .btn").click(function(){
        $("#tab5 .col-md-12.body .accordion>li").css({borderBottom: "none"});
    });
    $('.block:first').addClass('current first').append('<span class="btn" id="next"><i class="fa fa-long-arrow-right "></i> Next</span>');
    $('.block:last').addClass('empty last').append('<span class="btn" id="prev"><i class="fa fa-long-arrow-left"></i> Previous</span>').append('<span class="btn" id="send"><input type="submit" value="Send"></span>');
    //Third Button
    $('.block.third').addClass('first').append('<span class="btn" id="yes"><i class="fa fa-long-arrow-right "></i> YES</span>').append('<span class="btn" id="no"><i class="fa fa-long-arrow-right "></i> NO</span>').append('<span class="btn" id="prev"><i class="fa fa-long-arrow-left"></i> Previous</span>');
    //End Here
    $('.block').not(':first,.third,:last').addClass('empty').append('<span class="btn" id="next"><i class="fa fa-long-arrow-right "></i> Next</span>').append('<span class="btn" id="prev"><i class="fa fa-long-arrow-left"></i> Previous</span>');
    // Next/prev function
    $('.btn').click(function () {
        var dir = event.target.id;
        var current = $('.current')
        , next = $('.current').next('div')
        , prev = $('.current').prev('div');
        if ((dir == 'next')||(dir == 'yes')||(dir == 'no')) {
            current.removeClass('current').addClass('filled');
            next.removeClass('empty').addClass('current');
        }
        if (dir == 'prev') {
            current.removeClass('current').addClass('empty');
            prev.removeClass('filled').addClass('current');
        }
    });
    // Add mandatory class
    $(':input[required]').closest('.block').addClass('mandatory');
    //# sourceURL=pen.js

});
