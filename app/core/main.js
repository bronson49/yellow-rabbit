import slickCarousel from 'slick-carousel/slick/slick.min';
import Inputmask from 'inputmask/dist/jquery.inputmask.bundle';
import {borderWrapperFunc} from "../components/borderWrapper/borderWrapper";
import {familyPhotoFunc} from "../components/familyPhoto/familyPhoto";
import {servicesFunc} from "../components/services/services";
import {tariffsFunc} from "../components/tariffs/tariffs";
import {timerFunc} from "../components/tariffs/timer";
import {aboutFunc} from "../components/about/about";
import {speakFunc} from "../components/speak/speak";
import {answersFunc} from "../components/answers/answers";
import {onmapFunc} from "../components/onmap/onmap";
import {menuFunc} from "../components/mobileMenu/mobileMenu";
import {headersAnimation} from "../components/headersAnimation/headersAnimation";

$(document).ready(function () {
    borderWrapperFunc();
    familyPhotoFunc();
    servicesFunc();
    tariffsFunc();
    timerFunc();
    aboutFunc();
    speakFunc();
    answersFunc();
    onmapFunc();
    menuFunc();
    headersAnimation();
});

