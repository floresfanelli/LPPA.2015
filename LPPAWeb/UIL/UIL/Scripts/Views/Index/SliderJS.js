﻿var main = function () {
    $('.arrow-next').click(function () {
        var currentSlide = $('.active-slide'); //asigno a la var el slide activo
        var nextSlide = currentSlide.next(); //asigno a la var el proximo slide/(siguiente hermano)

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
    });

    $('.arrow-prev').click(function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        };

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');

        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
    });
};

$(document).ready(main);