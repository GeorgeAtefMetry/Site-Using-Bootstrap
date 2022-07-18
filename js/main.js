$(function(){
    'use strict';
    var WindowHeight    = $(window).height(),
        upperHeight     = $('.upper-bar').innerHeight(),
        navHeight       = $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(WindowHeight - ( upperHeight + navHeight));

        // Featured work shuffle
        $('.featured-work ul li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            if($(this).data('class') === 'all'){
                $('.shuffle-images .col-sm').css('opacity','1');
            }else{
                $('.shuffle-images .col-sm').css('opacity','.2');
                $($(this).data('class')).parent().css('opacity','1');
            }
        });


});