$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {});
});

$(document).ready(function () {

    'use strict';

    function homepageResponsive() {

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > windowsHeight) {

            $('.introduction').css({
                width: '100%',
                height: '100%'
            });

        } else {

            $('.introduction').css({
                width: '100%',
                height: '100%'
            });

        }

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: '100%'
            });

        } else {

            bgImage.css({
                width: '100%',
                height: '100%'
            });

        }
    }

    $(window).on('load resize', homepageResponsive);


    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });
});
