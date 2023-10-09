$(window).scroll(function () {
    $(".bgi1").css("opacity", 1 - $(window).scrollTop() / 1000);
});