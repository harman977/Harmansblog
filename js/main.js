(function ($) {
    "use strict";
    
    
    new WOW().init();
    
    
    
    
    
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            
        } else {
            $('.nav-bar').removeClass('nav-sticky');
           
        }
    });