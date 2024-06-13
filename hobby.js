$(document).ready(function () {

$('.more-title').click(function () {
    var $nextBottom = $(this).next('.bottom');
    
    $('.bottom').not($nextBottom).removeClass('active');

    $nextBottom.toggleClass('active');
});

    // bartxt
    $('#main-nav a').on({
        mouseover: function () {
            $(this).css("color", "#8A2BE2");
        },
        mouseout: function () {
            $(this).css("color", "rgb(255, 255, 255)");
        }
    });
    // btn
    $(".btn").hover(
        function () {
            $(this).find("span:nth-child(1)").css({
                height: "100%",
                transition: "height 0.5s ease"
            });
            $(this).find("span:nth-child(2)").css({
                width: "100%",
                transition: "width 0.5s ease"
            });
            $(this).find("span:nth-child(3)").css({
                height: "100%",
                transition: "height 0.5s ease"
            });
            $(this).find("span:nth-child(4)").css({
                width: "100%",
                transition: "width 0.5s ease"
            });
        },
        function () {
            $(this).find("span:nth-child(1)").css({
                height: "0",
                transition: "height 0.5s ease"
            });
            $(this).find("span:nth-child(2)").css({
                width: "0",
                transition: "width 0.5s ease"
            });
            $(this).find("span:nth-child(3)").css({
                height: "0",
                transition: "height 0.5s ease"
            });
            $(this).find("span:nth-child(4)").css({
                width: "0",
                transition: "width 0.5s ease"
            });
        }
    );

    $('#fa-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': 特戰英豪', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': 特戰英豪');
        }});
        $('#fag-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': MuseDash', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': MuseDash');
            }});
    $('#fso-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': flos/R Sound Design feat.初音ミク', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': flos/R Sound Design feat.初音ミク');
        }
    });
    $('#fms-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': Jpop', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': Jpop');
        }
    });
    $('#fama-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': 空洞騎士', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': 空洞騎士');
        }
    });
    $('#fsp-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': Discord(nocturai)', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': Discord(nocturai)');
        }
    });
    $('#fla-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': undefined', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': undefined');
        }
    });
    
});

$('.hamburger-menu').click(function () {
    $('.fullscreen-menu').toggleClass('display_nav');
    $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    $('.hamburger-menu').toggleClass('move');

});
$('.fullscreen-menu:not(ul)').click(function () { //若全屏選單已經開啟且被點擊任一處，則關閉選單(把選單加上display:none的效果)
    $('.fullscreen-menu').toggleClass('display_nav');
    $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
});

$(document).ready(function () {
    const links = $('.nav-link');
    const pages = $('.page');

    function showPage(hash) {
        pages.each(function () {
            if ('#' + $(this).attr('id') === hash) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    links.on('click', function (event) {
        event.preventDefault();
        const hash = $(this).attr('href');
        window.location.hash = hash;
        showPage(hash);
    });

    // 初始顯示頁面
    const currentHash = window.location.hash || '#home';
    showPage(currentHash);
});