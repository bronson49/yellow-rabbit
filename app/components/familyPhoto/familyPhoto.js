import slider from 'webpack-jquery-ui/slider';

const familyPhotoFunc = function () {
    let val;
    $('#family-slide').slider({
        value : 0,
        min : 0,
        max : 100,
        step : 1,
        create: function( event, ui ) {
           // val = $( "#slider" ).slider("value");
        },
        slide: function( event, ui ) {
           // console.log(val);
        }
    });
};

export {familyPhotoFunc}