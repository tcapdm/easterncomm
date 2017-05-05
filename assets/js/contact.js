$(document).ready(function(){
	// add class to form inputs
	$(".form-group .form-control").focus(function(){
		$(this).siblings().addClass('focus');
	});
	
	// add active state style in faq list
	$(".faq-list li button").click(function(){
		$(this).toggleClass('txtB');
		$(this).parent('li').toggleClass('borderB');
	});
	
	// show ulnav-tabs on click
	$(".menu-button").click(function(){
		$(this).siblings('.nav-tabs').toggleClass("show-nav");
	});
	
	// remove class show-nav
	$("ul#contact-nav>li>a").click(function(){
		$(this).parent('li').parent('ul.show-nav').removeClass("show-nav");
	});
	
});
