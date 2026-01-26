import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const swiperOptions: SwiperOptions = {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 25,
  watchOverflow: true,
  watchSlidesProgress: true,
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.6,
      spaceBetween: 25
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 80
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 80
    }
  },
  pagination: {
    el: '.info__pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.info__btn_next',
    prevEl: '.info__btn_prev',
  },
};

const swiper = new Swiper('.info', swiperOptions);