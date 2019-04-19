import slickCarousel from 'slick-carousel/slick/slick.min';

const onmapFunc = function () {
    $('.onmap-slider-body').slick({
        prevArrow: $('.onmap-prev'),
        nextArrow: $('.onmap-next'),
        dots: true ,
    });
};

export {onmapFunc}