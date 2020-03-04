$(document).ready(function() {
    'use strict';

//     // adding shadow on scroll and sticky
    $(window).scroll(function(){
        let header = $('#header-js'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) { 
            header.addClass('sticky-active');
        } else {
            header.removeClass('sticky-active');
        }
    });

//     // open added cart 
    $(".nav-right__total, .close-btn-cart-js").on("click", function(e) {
        $(".item-added-to-car").toggleClass("active");

        
    });
      
//     // open my cart
    let btnOpenMyCart = $(".my-cart__open-js");
    btnOpenMyCart.on("click", function(e) {
      $(".cart-content-js").addClass("open-active");
    });
    // close my cart
    let btnCloseMyCart = $(".my-cart-close-js");
    btnCloseMyCart.on("click", function(e) {
      $(".cart-content-js").removeClass("open-active");
    });

    // Slick
    $('.slick-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'ease-out',
        prevArrow: $(".left-nav-custom"),
        nextArrow: $(".right-nav-custom"),
        appendDots: $(".my-pagination")
    });

    console.log("working");
});
