$(document).ready(function () {

    //headerPartStart
    $('.logoSection .logo').click(function () {
        $(this).attr("href", "Home.html");
        $('.menuSection a').removeClass('active');

        $('.menuSection a:first').addClass('active');
    })
    $('.menuSection a:not(".searchBtn")').click(function () {
        $('.menuSection a').removeClass('active');
        $(this).addClass('active');

    });
    $('.burgerMenu button').click(function () {
        $(this).toggleClass('activeBtn');

    });
    $('.burgerMenu button').click(function () {
        $('.menuSection').stop().slideToggle(500);

    });

    $(window).resize(function () {
        if ($(window).width() > 991) {
            $('.menuSection').removeAttr('style');
            $('.burgerMenu button').removeClass('activeBtn')

        }
    })
    $('.searchBtn').click(function () {
        $('.searchPart').show(500);
    });
    $('.searchPart .closeBtn ').click(function () {
        $('.searchPart').hide(500);

    })
    var currentScrollTop = 0;
    var c = 0;

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 5) {
            $('header').addClass('activeHead')

        } else {
            $('header').removeClass('activeHead')

        }
        var a = $(window).scrollTop(), b = $('header').height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b + 200) {
            $('header').addClass("hide");
        } else if (c > currentScrollTop && !(a <= b)) {
            $('header').removeClass("hide");
        }
        c = currentScrollTop;
    });
    //headerPartEnd


    $('#simpleSlider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            1000: {
                items: 4
            }

        }
    })

    $('#cookSlider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 3
            }

        }
    })

    $('#dishSlider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 3,
                dots: true,

            }

        }
    })


    $('#upcoming .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false


            }

        }
    })

    $('#feedbacks .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,



            }

        }
    })


    $("input[class='input-material']").focus(function () {

        $(this).siblings('label').addClass('active');

    });
    $("input[class='input-material']").blur(function () {

        $(this).siblings('label').removeClass('active');
        if ($(this).val() != '') {
            $(this).siblings('label').addClass('active');
        }
        else {
            $(this).siblings('label').removeClass('active');
        }

    });




    //menu

    $('.tabContent>div:not(":first-of-type")').hide();

    $('.tabMenu li').each(function (i) {
        $(this).attr('data-tab', 'tab' + i)
    })
    $('.tabContent>div').each(function (i) {
        $(this).attr('data-tab', 'tab' + i)
    })
    $('.tabMenu li').on('click', function () {
        var DataTab = $(this).data('tab');
        $('.tabMenu li').removeClass('activeMenu');
        $(this).addClass('activeMenu');
        $('.tabContent>div').hide();
        $('.tabContent>div[data-tab=' + DataTab + ']').show();
    })





    if ($("div").hasClass("ribbon")) {
        $("div.ribbon").parent().css("border", "1px solid #FD8A06")
    };
    $("div.card").find("li.original").css({
        "color": "#666",
        "text-decoration": "line-through"
    });
    $("a.page-link").click(function () {
        if ($(this).hasClass() != "active") {
            $("a.page-link").removeClass("active");
            $(this).addClass("active");
        }
    });

    $("input[class='input-material']").focus(function () {

        $(this).siblings('label').addClass('active');

    });
    $("input[class='input-material']").blur(function () {

        $(this).siblings('label').removeClass('active');
        if ($(this).val() != '') {
            $(this).siblings('label').addClass('active');
        }
        else {
            $(this).siblings('label').removeClass('active');
        }

    });
    $("input[class='input-material']").click(function () {
        console.log("salam");

    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $(function () {
        $("datepicker").datepicker();

    })
    $(function () {
        $('.timepicker').wickedpicker();

    })
    var timepicker = $('.timepicker').wickedpicker();
    console.log(timepickers.wickedpicker('time'));

});