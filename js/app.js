var nav = $('.topo');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav.addClass("fixar");
    } else {
        nav.removeClass("fixar");
    }
});