$(document).ready(function() {

    $(".loader").fadeOut(1500, () => {
        if ($('.Advertising').length) {
            $(".Advertising").addClass("d-flex");
        }
    });
    $(".Advertising").click(function(e) {
        var container = $(".Advertising-box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".Advertising").addClass("d-none");
            $(".Advertising").toggleClass("d-flex");

        }
    });
    $(".close-Advertising").click(function(e) {
        $(".Advertising").addClass("d-none");
        $(".Advertising").toggleClass("d-flex");

    });

    let he = $(".all-top").height();

    let wh = $(window).height();
    if ($(".header-all")[0]) {

        $(".header-all").css({
            marginTop: he
        });
    }
    if ($(".header-blog")[0]) {

        $(".header-blog").css({
            marginTop: he

        });
    }
    if ($(".header-all")[0]) {
        // Do something if class exists
        $(".header-all , .carousel , .slide , .carousel-item").css({
            height: wh - he
        });
    }

    $("form button").click(function(e) {
        e.preventDefault();

    });


    $("#up").click(function(e) {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    AOS.init();

});