
const borderWrapperFunc = function () {

    $('#makePhoto').click(function (event) {
        event.stopPropagation();
        $(this).removeClass('border-wrapper-nonActive');
        $('#makeCall').addClass('border-wrapper-nonActive');
        $('.border-wrapper-appointment').addClass('appointment-visible');

        $('main').css({'opacity':'0.3'});
    });

    $('.closePhoto').click(function (event) {
        closePhotoForm(event);
    });
    $(document).click(function (event) {
        closePhotoForm(event);
    });

    function closePhotoForm(event) {
        if (event){ event.stopPropagation();}
        $('#makeCall').removeClass('border-wrapper-nonActive');
        $('#makePhoto').addClass('border-wrapper-nonActive');
        $('.border-wrapper-appointment').removeClass('appointment-visible');

        $('main').css({'opacity':'1'});
    }


    var delta = 0,
        sections = $('.container'),
        sectionsOffset = [],  // массив для отступов всех блоков
        sectionsLength= 0, // кол-во блоков
        canScroll = true;


    setTimeout(function () {
        $(sections).each(function () { // получить отступы всех блоков
            sectionsOffset.push($(this).offset().top);
        });
        sectionsLength = sectionsOffset.length; // получить кол-во блоков
        for (i = 0; i < sectionsLength-1; i++){ // сделать точечки в левой рамочке
            let li = document.createElement('LI');
            $('.border-page-list').append(li);
        }
        $('.border-page-list li').click(function () {
            let i = $(this).index();
            changePage(i);
        });
    }, 1500);


    $('.scrollUp').click(function () {
        let yOffset = window.pageYOffset;
        wheelUp(yOffset);
    });
    $('.scrollDown').click(function () {
        let yOffset = window.pageYOffset;
        wheelDown(yOffset);
    });
    


    function changePage(i) {
        clearPageList();
        $('html, body').stop().animate({ scrollTop : sectionsOffset[i]-65 }, 800);
        $('.border-page-list li')[i].classList.add('page-active');
    }
    function clearPageList() {
        $('.page-active').each(function () {
            $(this).removeClass('page-active')
        });
    }

    document.body.addEventListener('wheel', handleScroll, { passive: false } );  // отменить пассивность ивента

    function handleScroll(e) {
        e.preventDefault();
        if  (!canScroll) return ;
        delta = e.deltaY ;   // получить направление прокрутки
        canScroll = false ;
        let yOffset = window.pageYOffset;
        if (delta > 0){
            wheelDown(yOffset);
        } else if (delta < 0){
            wheelUp(yOffset);
        }
        setTimeout(function () {
            canScroll = true;
        }, 800);
    }
    function wheelUp(scrl){
        for (var i= sectionsLength - 2 ;i > -1 ; i--){
            if (scrl-100 > sectionsOffset[i]){
                changePage(i);
                return
            }
        }
    }
    function wheelDown(scrl){
        for (var i= 1 ;i < sectionsLength ; i++ ){
            if (scrl+100 < sectionsOffset[i] ){
                changePage(i);
                return
            }
        }
    }


    // отменяем прокрутку над блоками с прокруткой
    let scrollBlock = document.querySelectorAll('.container-big');
    for (var i = 0; i < scrollBlock.length; i++){
        scrollBlock[i].addEventListener('wheel', stopScroll, { passive: false } );
    }

    function stopScroll(e) {
        let all = this.scrollHeight - (this.offsetHeight + this.scrollTop);
        if (all !==0 && e.deltaY > 0){
            e.stopPropagation();
        }else if(this.scrollTop !==0 && e.deltaY < 0){
            e.stopPropagation();
        }

    }

    // validation
    // const im = new Inputmask("+38999-999-99-99");
    // im.mask('input[name=phone]');

    $('input[name=phone]').inputmask({
        "mask": "+38sss-ss-ss-ss",
        definitions: {'s': {validator: "[0-9]"}}
    });


    // ajax
    const regExp = /\S+@\S+\.\S+/;
    $('.requestCall').submit(function () {
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).serialize()
        }).done(function () {
            $('#makeCall').append('<p class="ajax-msg">Спасибо, мы с вами скоро свяжемся!</p>');
            setTimeout(function () {
                $('.ajax-msg').remove();
            },3000)
        });
        return false;
    });
    $('.appointment-form').submit(function () {
         let mailValid = $(this).find('#mail');

         if ( !regExp.test(mailValid[0].value) ) {
             $(mailValid).css({'border': '2px solid red'});
             return false;
         } else {
             $(mailValid).css({'border': '2px solid black'});

             $.ajax({
                 type: "GET",
                 url: "",
                 data: $(this).serialize()
             }).done(function () {
                 $('#makePhoto').append('<p class="ajax-msg">Спасибо, мы с вами скоро свяжемся!</p>');
                 setTimeout(function () {
                     $('.ajax-msg').remove();
                     closePhotoForm();
                 },3000)
             });
             return false;
         }
    });

};

export {borderWrapperFunc}