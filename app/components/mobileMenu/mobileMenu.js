
const menuFunc = function () {
    $('.mobile-menu').click(function () {
        $(this).toggleClass('mobile-menu-open');
    });

    $(".menu-list-item a").click(function() {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination-50 }, 800);
        $('.mobile-menu').removeClass('mobile-menu-open');
        return false;
    });
    if (window.matchMedia('(max-width : 450px)').matches){
        addToMenu('.social-icons');
        addToMenu('#makeCall');
        addToMenu('#makePhoto');
    }
    function addToMenu(selector) {
        let place = document.createElement('LI');
        place.classList.add('menu-list-item');
        $(place).append($(selector));
        $('.menu-list').append(place);
    }

    $('#makeCall').click(function (e) {
        e.stopPropagation();
    });
};

export {menuFunc}