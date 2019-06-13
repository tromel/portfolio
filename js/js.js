$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
        top: -(scroll / 10) + "%"
    });
    var tennis = $("#cover")[0].clientHeight;
    if (scroll * 1.1 <= tennis) {
        $(".bannercont").css({
            height: tennis - scroll * 1.1 + "px"
        });
    }
});