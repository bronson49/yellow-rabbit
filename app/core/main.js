import slickCarousel from 'slick-carousel/slick/slick.min';
import {borderWrapperFunc} from "../components/borderWrapper/borderWrapper";
import {familyPhotoFunc} from "../components/familyPhoto/familyPhoto";
import {servicesFunc} from "../components/services/services";
import {tariffsFunc} from "../components/tariffs/tariffs";
import {answersFunc} from "../components/answers/answers";
import {onmapFunc} from "../components/onmap/onmap";

$(document).ready(function () {
    borderWrapperFunc();
    familyPhotoFunc();
    servicesFunc();
    tariffsFunc();
    answersFunc();
    onmapFunc();
});

