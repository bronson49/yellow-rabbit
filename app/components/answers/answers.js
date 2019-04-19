
const answersFunc = function () {

    $('.answers-body-question').click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass('active-question')) {
            $(this).removeClass('active-question');
            return;
        }

        $('.active-question').each(function () {
            $(this).removeClass('active-question');
        });
        $(this).addClass('active-question');

    });

};

export {answersFunc};