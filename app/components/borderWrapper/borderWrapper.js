
const borderWrapperFunc = function () {
    $('#makePhoto').click(function (event) {
        event.stopPropagation();
        $(this).removeClass('border-wrapper-nonActive');
        $('#makeCall').addClass('border-wrapper-nonActive');
        $('.border-wrapper-appointment').addClass('appointment-visible');

        $('main').css({'opacity':'0.3'});
    });

    $('.closePhoto').click(function (event) {
        closePhotoForm(event);
    });
    $(document).click(function (event) {
        closePhotoForm(event);
    });

    function closePhotoForm(event) {
        event.stopPropagation();
        $('#makeCall').removeClass('border-wrapper-nonActive');
        $('#makePhoto').addClass('border-wrapper-nonActive');
        $('.border-wrapper-appointment').removeClass('appointment-visible');

        $('main').css({'opacity':'1'});
    }
};

export {borderWrapperFunc}