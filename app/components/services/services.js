//import tabs from 'webpack-jquery-ui/tabs';

const servicesFunc = function () {
    $('.services-list-item').click(function () {
        $('.services-list-item').each(function () {
           $(this).removeClass('services-item-active') ;
        });
        $(this).addClass('services-item-active');
    });

    $('.services-list-item').each(function (index, value) {
        $(this).attr('data-tab-index', index);
    });
    $('.services-img-item').each(function (index, value) {
        $(this).attr('data-tab-index', index);
    });

    $('.services-list-item').click(function () {
        let href = $(this).attr('data-tab-index');
        $('.services-img-item').each(function () {
            $(this).removeClass('active-tab');
        });
        $('[data-tab-index="'+href+'"]').addClass('active-tab');
    });

    if (window.matchMedia('(max-width : 450px)').matches){
        $('#services-tabs').on('afterChange', function(event, slick, currentSlide){
            $('[data-slick-index="'+currentSlide+'"]').click();
        });

        $('#services-tabs').slick({
            prevArrow: $('.services-prev'),
            nextArrow: $('.services-next'),
            dots: false ,
        });
    }

};

export {servicesFunc}