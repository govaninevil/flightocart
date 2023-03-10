$(document).ready(function() {

    
    $(document).on('click','.menu-btn',function(event){
        $('body').toggleClass('menu-open');
    });

    //Horizontal Tab
    $('#main-from').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $('#sub-from').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_2', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    $('#banner-slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        slideSpeed: 300, 
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('#slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:5000,
        slideSpeed: 300, 
        vertical: true,
        verticalSwiping: true,
        responsive:{
            0:{
                items:5
            }
        }
    });

    $('#slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
});