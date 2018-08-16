$(function () {
    const scroll = $(document.documentElement);
    const height = $("#intro").innerHeight() - 1;

    if (height < scroll.scrollTop()) {
        $("#top").addClass("visible");
    }


    $(".scroll").on('click', function (e) {
        e.preventDefault();
        const scroll_to = $(this).attr("href");
        const top = $(scroll_to).offset().top;
        scroll.animate({
            scrollTop: top
        }, 1000, function () {
            if (height < scroll.scrollTop()) {
                $("#top").addClass("visible");
            }
            else {
                $("#top").removeClass("visible");
            }
        });
    });

    $(window).on('scroll', function () {
        if (height < scroll.scrollTop()) {
            $("#top").addClass("visible");
        }
        else {
            $("#top").removeClass("visible");
        }
    });



});