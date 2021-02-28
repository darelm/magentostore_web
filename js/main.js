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


function getURL(urlstr)
{
    window.open(urlstr, '_blank');
}

function load_iframe(iframeid,urlstr)
{
    Cookies.set('name', 'value', {sameSite: 'None', secure: true});
    /*var url_string = urlstr;
    var url = new URL(url_string);
    var c = url.searchParams.get("url");
    document.getElementById(iframeid).src = c;*/
    document.getElementById(iframeid).src = 'http://magento2.magentech.com/themes/sm_moonlight/default/';
}