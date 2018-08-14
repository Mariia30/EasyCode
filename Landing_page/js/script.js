
const scroll = $(document.documentElement);

$(".scroll").click(function () {
    const scroll_to = $(this).attr("href");
    const top = $(scroll_to).offset().top;
        alert($(this).attr("href"))
});

