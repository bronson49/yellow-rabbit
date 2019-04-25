const headersAnimation = function () {
    if (window.matchMedia('(min-width: 451px)').matches) {
        let h2 = $('h2');
        let h3 = $('.tariffs .offers-item-price-count');
        h3.each(function () {
            h2.push($(this))
        })
        let pX, pY;
        h2.each(function () {
            let arr = '';
            let inner =  $(this).html();
            for (let i= 0, len = inner.length; i < len; i++ ) {
                arr += '<span class="mouse-event">'+ inner[i] +'</span>'
            }
            $(this).html(arr)
        })
        let cursors = $('<div />')
            .addClass('cursor-all')
        let cursorMagnet = $('<div />')
            .addClass('cursor-magnet');
        let cursorMain = $('<div />')
            .addClass('cursor-center');

        cursors.append(cursorMagnet);
        cursors.append(cursorMain);


        $('body').append(cursors);

        window.onmousemove = function (e) {
            pX = e.clientX;
            pY = e.clientY;
            setMainCursor();
            setMagnetCursor();
        }
        function setMainCursor() {
            cursorMain.css({
                top: pY + 'px',
                left: pX + 'px'
            })
            cursorMagnet.css({
                top: pY + 'px',
                left: pX + 'px'
            })
        }
        function setMagnetCursor() {
            let wT = $(window).scrollTop();
            let wB = wT + $(window).height();
            $('.mouse-event').removeClass('over');
            $('.cursor-all').removeClass('active');

            h2.each(function () {
                let half = 30;
                let h2T = $(this).offset().top;
                let h2B = h2T + $(this).height();
                if(wT < h2T && h2B < wB) {
                    let elms = $(this).find('.mouse-event');
                    for (let i = 0, len = elms.length; i < len; i++) {
                        let dist = calculateDistance($(elms[i]), pX, pY, wT);

                        if(dist < 30 && dist > -30) {
                            $(elms[i]).addClass('over');
                            $('.cursor-all').addClass('active');
                        }
                    }
                }
            })
        }
        function calculateDistance(elem, mouseX, mouseY, wT) {
            return Math.floor(
                Math.sqrt(
                    Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
                    Math.pow(mouseY - (elem.offset().top - wT +(elem.height()/2)), 2)
                )
            ) - Math.round(elem.width()/2);
        }
    }

}
export {headersAnimation};
