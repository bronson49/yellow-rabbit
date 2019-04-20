
const tariffsFunc = function () {
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