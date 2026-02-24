
(function($){
    'use script';
/*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });
    
    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });


	/*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');

    // Add expand button before submenus
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    // Hide all submenus initially
    $offcanvasNavSubMenu.slideUp();

    // Handle click events
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        var $parentLi = $this.closest('li');

        // Check if the clicked item has submenus
        if (
            $parentLi.hasClass('menu-item-has-children') ||
            $parentLi.hasClass('has-children') ||
            $parentLi.hasClass('has-sub-menu')
        ) {
            if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                e.preventDefault();

                // Toggle submenu visibility
                var $submenu = $this.siblings('ul');
                if ($submenu.is(':visible')) {
                    $submenu.slideUp('slow');
                } else {
                    $parentLi.siblings('li').find('ul:visible').slideUp('slow');
                    $submenu.slideDown('slow');
                }
            }
        }

        // Toggle `menu-open` class
        if ($this.is('a') || $this.is('span') || $this.hasClass('menu-expand')) {
            $parentLi.toggleClass('menu-open');
        }
    });
}(jQuery));