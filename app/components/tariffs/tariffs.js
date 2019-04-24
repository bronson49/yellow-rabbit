
const tariffsFunc = function () {

    $('.offers-item-order').click(function () {
        $(this).closest('.tariffs-offers-item').addClass('offers-form-open');
    });
    $('.closeOffer').click(function (e) {
        e.stopPropagation();
       $(this).closest('.tariffs-offers-item').removeClass('offers-form-open');
    });

    $('.order-tariff').submit(function () {
        let parent = $(this).closest('.offers-item-order');
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).serialize()
        }).done(function () {
            $(parent).html('<p>Спасибо, мы с Вами свяжемся!</p>');
            console.log(parent);
        });
        return false;
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