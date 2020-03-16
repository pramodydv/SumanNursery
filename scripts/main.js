(function ($) {
    'use strict';

    var browserWindow = $(window);

    // Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-post-slides');
        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            center: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }
})(jQuery);

// Navigation
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('shrinkHead');
    }
    else {
        $('nav').removeClass('shrinkHead');
    }
})

// Slider Popup image
$(document).ready(function () {
    $('.gallery1').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
        });
    })

    $(".sliderowl").owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        nav: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ]
    });
})

// Accordion
var acc = document.getElementsByClassName("faqtitle");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// Form Validation
$(function() {
    $("#ContacForm").validate({
        rules: {
            name: "required",            
            email: {
                required: true,
                email: true
            },			
			phone:{
				required:true,
				number: true
            }            
        },        
        // Specify the validation error messages
        messages: {
           	name: "Please enter your full name",
            email: "Please enter a valid email address",
            phone: "Please enter your contact number"
        },
    });
  });