
const servicesFunc = function () {
    $('.services-list-item').click(function () {
        $('.services-list-item').each(function () {
           $(this).removeClass('services-item-active') ;
        });
        $(this).addClass('services-item-active');
    });
};

export {servicesFunc}