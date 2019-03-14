jQuery(function($) {'use strict',
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000000,
			autoplay: false
		});
	});
	new WOW().init();
});