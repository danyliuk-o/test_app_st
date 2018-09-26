new WOW().init();

$(function() {
    let link = $('.m-menu-link');
    let close = $('.close-menu, .close-link');
    let menu = $('.m-menu');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
});

$('.scroll, .close-link').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $('#to-top').show()
    } else {
        $('#to-top').hide()
    }
});
