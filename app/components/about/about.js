
const aboutFunc = function () {
    if (window.matchMedia('(max-width : 450px)').matches){

        $('.about-body').slick({
            prevArrow: $('.about-prev'),
            nextArrow: $('.about-next'),
            dots: false ,
        });
    }
};

export {aboutFunc}