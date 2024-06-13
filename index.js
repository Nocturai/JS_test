$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
        $('.hamburger-menu').toggleClass('move');

    });
    $('.fullscreen-menu:not(ul)').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    });


    $('#main-nav a').on({
        mouseover: function () {
            $(this).css("color", "rgb(143, 202, 202)");
        },
        mouseout: function () {
            $(this).css("color", "rgb(255, 255, 255)");
        }
    });

});

function PB(progress) {
    $('#progress').width(progress + '%');
}

var progress = 0;
var interval = setInterval(function () {
    progress += 1;
    PB(progress);
    if (progress >= 31.3) {
        clearInterval(interval);
    }
}, 20);

function PB2(progress2) {
    $('#progress2').width(progress2 + '%');
}

var progress2 = 0;
var interval2 = setInterval(function () {
    progress2 += 1;
    PB2(progress2);
    if (progress2 >= 50.7) {
        clearInterval(interval2);
    }
}, 20);

function PB3(progress3) {
    $('#progress3').width(progress3 + '%');
}

var progress3 = 0;
var interval3 = setInterval(function () {
    progress3 += 1;
    PB3(progress3);
    if (progress3 >= 18.0) {
        clearInterval(interval3);
    }
}, 20);