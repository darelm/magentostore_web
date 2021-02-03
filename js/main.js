$(function () {
    const floatingBtn = $('.floating-btn');
    let windowHeight = $(window).height();

    $(window).on('scroll', (e) => {
        if (windowHeight < $(window).scrollTop()) {
            floatingBtn.removeClass('hidden')
        } else {
            if (!floatingBtn.hasClass('hidden')) {
                floatingBtn.addClass('hidden')
            }
        }


    });

    floatingBtn.on('click', (e) => {
        $("html, body").animate({scrollTop: 0}, 500);
    })
});
