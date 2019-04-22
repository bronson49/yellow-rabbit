
const tariffsFunc = function () {

    $('.offers-item-order').click(function () {
        $(this).closest('.tariffs-offers-item').addClass('offers-form-open');
    });
    $('.closeOffer').click(function (e) {
        e.stopPropagation();
       $(this).closest('.tariffs-offers-item').removeClass('offers-form-open');
    });

    if (window.matchMedia('(max-width : 450px)').matches){

        $('.tariffs-offers').slick({
            prevArrow: $('.tariffs-prev'),
            nextArrow: $('.tariffs-next'),
            dots: false ,
            initialSlide: 2,
        });
    }
};

export {tariffsFunc}