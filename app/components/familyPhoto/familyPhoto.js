import slider from 'webpack-jquery-ui/slider';

const familyPhotoFunc = function () {

    setTimeout(function () {
        let photoList = $('.family-photo-list');
        let photoListWidth = $(photoList).width();
        let maxSlide = photoListWidth - window.innerWidth + 190;
        let stepClick = Math.floor(maxSlide/5);
        let canPopUp = true;

        $('#family-slide').slider({
            value : 0,
            min : 0,
            max : maxSlide,
            step : 1,
            slide: function( event, ui ) {
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


        // draggable start
        photoList[0].onmousedown = function (e) {
            let _translateX =  parseInt($(photoList).css('transform').split(',')[4]);
            let shiftX = e.pageX - _translateX;

            document.onmousemove = function(e) {
                canPopUp = false ;
                let diff = shiftX - e.pageX;
                if (diff < 0) {
                    $(photoList).css({'transform':'translateX(0px)'});
                    return
                }
                if (diff > maxSlide) {
                    $(photoList).css({'transform':'translateX('+ -maxSlide +'px)'});
                    return
                }

                $(photoList).css({'transform':'translateX('+ -diff +'px)'});
                $('#family-slide').slider('value', diff);
            };

            document.onmouseup = function() {
               // $('#family-slide').slider('value', -_translateX);
                document.onmousemove = null;
                setTimeout(()=> canPopUp = true ,0);
            };

        };
        photoList[0].ondragstart = function() {
            return false;
        };

        // init popup slider
        if ($('.family-popup-wrapper').length){
            $('.family-photo-list img').each(function () {
                let photo = document.createElement('IMG');
                photo.src = $(this).attr('src');
                $('#familyPopup').append(photo);
            });
            $('#familyPopup').slick({
                prevArrow: $('.family-popup-prev'),
                nextArrow: $('.family-popup-next'),
            });

            $('.family-photo-list li').click(function () {
                if (!canPopUp) return;
                $('#familyPopup').slick( 'slickGoTo', $(this).index() );
                $('.family-popup-wrapper').css({'display':'block'});
            });
            $('.family-popup-close').click(function () {
                $('.family-popup-wrapper').css({'display':'none'});
            });
        }


    }, 2000);


    if (navigator.userAgent.search("Firefox") > 0) {
        $('.family-photo-list li').each(function () {
            let childWidth = $(this).find('img').width();
            $(this).css({'width': childWidth + 60});
        });
    }


};

export {familyPhotoFunc}