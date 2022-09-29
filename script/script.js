// main slider //
$('#slideshow0').swiper({
    mode: 'horizontal',
    slidesPerView: 1,
    pagination: '.slideshow0',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    autoplay: 6000,
    autoplayDisableOnInteraction: true,
    loop: true
    });
    /// most-featured items ///
    $(document).ready(function(){
        $('#category_block').owlCarousel({	
        items: 6,
        itemsDesktop:[1199,5],
        itemsDesktopSmall:[992,4],
        itemsTablet:[768,3],
        itemsMobile:[550,2],
        autoPlay: 6000,
        pagination: false,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left fa-5x"></i>', '<i class="fa fa-angle-right fa-5x"></i>']
        });
        });

//// logos carousel /////
        $(document).ready(function(){
            $('#carousel0').owlCarousel({	
            items:6,
            itemsDesktop:[1199,5],
            itemsDesktopSmall:[992,4],
            itemsTablet:[768,3],
            itemsMobile:[450,2],
            autoPlay: 6000,
            pagination: false,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left fa-5x"></i>', '<i class="fa fa-angle-right fa-5x"></i>']
            });
            }); 
            
            ////    scroll    ///
            $('#top-scrolltop').on('click',function(){
                $('html, body').animate({scrollTop:0},500);
                });
                
                $(function ($) {
                "use strict";
                /*Back to top */
                $(".back-to-top").addClass("hidden-top");
                $(window).scroll(function () {
                if ($(this).scrollTop() === 0) {
                    $(".back-to-top").addClass("hidden-top")
                } else {
                    $(".back-to-top").removeClass("hidden-top")
                }
                });
                
                $('.back-to-top').click(function () {
                $('body,html').animate({scrollTop:0}, 1200);
                return false;
                });	
                });
                