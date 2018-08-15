$(function () {
    const scroll = $(document.documentElement);

    $(".scroll").on('click', function () {
        const scroll_to = $(this).attr("href");
        const top = $(scroll_to).offset().top;
        scroll.animate({
            scrollTop: top
        }, 1000);
        return false;
    } )
};


