
const aboutFunc = function () {
    if (window.matchMedia('(max-width : 450px)').matches){

        $('.about-body').slick({
            prevArrow: $('.about-prev'),
            nextArrow: $('.about-next'),
            dots: false ,
        });

        const showBtn = ` <a href="#" class="about-show-text desktop-none">Подробнее</a>`;
        $('.about-item-text').each(function (i, val) {
            let thisHeight = $(this).height();
            let contentHeight = $(this).find('p').height();

            if (contentHeight > thisHeight) {
                $(this).addClass('show-more');
                $(this).append(showBtn);
            }
        });

        $('.about-show-text').click(function (e) {
            e.preventDefault();
            let parentBlock = $(this).parent('.about-item-text');
            $(parentBlock).removeClass('show-more');
            $(this).remove();
        });
    }

};

export {aboutFunc}