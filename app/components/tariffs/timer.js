
const timerFunc = function () {
    let timeNow = new Date();
    let stockHours = 7;  // длительность акции, ч
    let stockMs = stockHours * 60 * 60 * 1000;  // длительность акции, мс
    let localInitTime = localStorage.getItem('firstTime');

    if (!localInitTime){  // записать время первого входа
        localStorage.setItem('firstTime', +timeNow);
        localInitTime = +timeNow;
    }

    let timeDiff = timeNow - localInitTime; // время прошедшее с первого входа, мс
    let stockLeft = stockMs - timeDiff; // время до конца акции, мс


    let hrLeft = document.getElementById('hrLeft');
    let minLeft = document.getElementById('minLeft');
    let secLeft = document.getElementById('secLeft');

    let mainTimer = setInterval(function () {
        stockLeft = stockLeft - 1000;
        hrLeft.innerHTML = ('0' + Math.floor(stockLeft/3600000) ).slice(-2)  ;
        minLeft.innerHTML = ('0' + Math.floor((stockLeft%3600000)/60000)).slice(-2);
        secLeft.innerHTML = ('0' + Math.floor(((stockLeft%3600000)%60000)/1000)).slice(-2);
        if (stockLeft < 0){
            $('.active-tariff').css({'cursor':'not-allowed'}).find('.offers-make-order').remove();
            $('.offers-item-timer p').html('Акция закончилась.');
            clearInterval(mainTimer);
        }
    }, 1000);
};

export {timerFunc}
