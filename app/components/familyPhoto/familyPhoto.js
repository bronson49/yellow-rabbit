import slider from 'webpack-jquery-ui/slider';

const familyPhotoFunc = function () {

    let photoList = $('.family-photo-list');
    let photoListWidth = $(photoList).width();
    let maxSlide = photoListWidth - window.innerWidth + 190;
    let stepClick = Math.floor(maxSlide/5);

    $('#family-slide').slider({
        value : 0,
        min : 0,
        max : maxSlide,
        step : 1,
        create: function( event, ui ) {

        },
        slide: function( event, ui ) {
           // console.log(ui.value);
            $(photoList).css({'transform':'translateX(-'+ui.value+'px)'});
        }
    });

    $('.family-slide-next').click(function () {
        let val = $('#family-slide').slider('value');
        if (val>=maxSlide-50) return;
        $('#family-slide').slider('value', val+stepClick);
        $(photoList).css({'transform':'translateX(-'+(val+stepClick)+'px)'});
    });
    $('.family-slide-prev').click(function () {
        let val = $('#family-slide').slider('value');
        $('#family-slide').slider('value', val-stepClick);
        $(photoList).css({'transform':'translateX(-'+(val-stepClick)+'px)'});
    });

};

export {familyPhotoFunc}