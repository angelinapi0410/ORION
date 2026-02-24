(function ($) {

	$('.menu ul').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 150,
		scrollThreshold: 0.5,
	});

	$('.offcanvas_main_menu li a').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });

})(jQuery);