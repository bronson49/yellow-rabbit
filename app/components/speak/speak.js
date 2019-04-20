

const speakFunc = function () {
    if (window.matchMedia('(max-width : 450px)').matches){

        $('.speak-body').slick({
            prevArrow: $('.speak-prev'),
            nextArrow: $('.speak-next'),
            dots: false ,
        });
    }
};

export {speakFunc}